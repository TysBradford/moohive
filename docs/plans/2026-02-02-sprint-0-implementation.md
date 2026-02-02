# Sprint 0 Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete Sprint 0 landing page with email waitlist, final CTA section, updated footer, and meta tags.

**Architecture:** Build reusable WaitlistForm component with Supabase integration, add Final CTA section and updated footer to existing page.tsx, configure SEO meta tags in layout.tsx. Hero CTA button will smooth scroll to final CTA section.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Supabase (SSR), Lucide React icons

---

## Task 1: Create Supabase Waitlist Table

**Files:**
- Create: `supabase/migrations/20260202000001_create_waitlist_table.sql`

**Step 1: Write migration SQL**

Create the migration file with the complete schema:

```sql
-- Create waitlist table
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text not null,
  source text not null,
  created_at timestamptz default now()
);

-- Add index on email for faster lookups
create index idx_waitlist_email on waitlist(email);

-- Add index on created_at for sorting
create index idx_waitlist_created_at on waitlist(created_at desc);

-- Enable RLS
alter table waitlist enable row level security;

-- Allow inserts from anyone (anon users)
create policy "Allow public waitlist signups"
  on waitlist for insert
  to anon
  with check (true);

-- No select/update/delete for public (admin only)
create policy "Only authenticated users can read waitlist"
  on waitlist for select
  to authenticated
  using (true);
```

**Step 2: Apply migration using Supabase MCP**

Run the migration:
```
Use mcp__supabase__apply_migration tool with:
- name: "create_waitlist_table"
- query: [contents of the SQL file]
```

Expected: Migration applied successfully

**Step 3: Verify table exists**

Run query to verify:
```
Use mcp__supabase__execute_sql tool with:
query: "select * from waitlist limit 1;"
```

Expected: Empty result set (table exists but no rows)

**Step 4: Commit migration**

```bash
git add supabase/migrations/20260202000001_create_waitlist_table.sql
git commit -m "feat: add waitlist table with RLS policies"
```

---

## Task 2: Create WaitlistForm Component

**Files:**
- Create: `src/components/WaitlistForm.tsx`
- Create: `src/types/waitlist.ts`

**Step 1: Create TypeScript types**

```typescript
// src/types/waitlist.ts
export interface WaitlistFormData {
  name: string;
  email: string;
}

export interface WaitlistSubmission extends WaitlistFormData {
  source: 'landing_hero' | 'landing_footer';
}

export interface WaitlistFormProps {
  source: 'landing_hero' | 'landing_footer';
  successMessage?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  submit?: string;
}
```

**Step 2: Create WaitlistForm component skeleton**

```typescript
// src/components/WaitlistForm.tsx
"use client";

import { useState, FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import type { WaitlistFormProps, FormErrors, WaitlistFormData } from "@/types/waitlist";

export function WaitlistForm({
  source,
  successMessage = "You're on the list! We'll be in touch soon."
}: WaitlistFormProps) {
  const [formData, setFormData] = useState<WaitlistFormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // TODO: Add validation function
  // TODO: Add submit handler
  // TODO: Add form JSX

  return <div>Form placeholder</div>;
}
```

**Step 3: Implement client-side validation**

Add validation function before the component:

```typescript
function validateForm(data: WaitlistFormData): FormErrors {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  return errors;
}
```

**Step 4: Implement form submit handler**

Add inside the component:

```typescript
async function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  // Clear previous errors
  setErrors({});

  // Validate
  const validationErrors = validateForm(formData);
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  // Submit
  setIsSubmitting(true);

  try {
    const supabase = createClient();
    const { error } = await supabase
      .from("waitlist")
      .insert({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        source,
      });

    if (error) {
      // Handle duplicate email
      if (error.code === "23505") {
        setErrors({ email: "This email is already on the waitlist" });
      } else {
        setErrors({ submit: "Something went wrong. Please try again." });
      }
      return;
    }

    // Success
    setIsSuccess(true);
  } catch (err) {
    setErrors({ submit: "Network error. Please check your connection and try again." });
  } finally {
    setIsSubmitting(false);
  }
}
```

**Step 5: Implement form JSX**

Replace the return statement:

```typescript
if (isSuccess) {
  return (
    <div className="text-center py-4">
      <p className="text-lg text-stone-900 font-medium">{successMessage}</p>
    </div>
  );
}

return (
  <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
    <div className="flex flex-col md:flex-row gap-3">
      {/* Name input */}
      <div className="flex-1">
        <label htmlFor={`name-${source}`} className="sr-only">
          Your name
        </label>
        <input
          id={`name-${source}`}
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 bg-white border rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-colors ${
            errors.name ? "border-red-500" : "border-stone-200"
          } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? `name-error-${source}` : undefined}
        />
        {errors.name && (
          <p id={`name-error-${source}`} className="mt-1 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email input */}
      <div className="flex-1">
        <label htmlFor={`email-${source}`} className="sr-only">
          Your email
        </label>
        <input
          id={`email-${source}`}
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 bg-white border rounded-lg text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-colors ${
            errors.email ? "border-red-500" : "border-stone-200"
          } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? `email-error-${source}` : undefined}
        />
        {errors.email && (
          <p id={`email-error-${source}`} className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {isSubmitting ? "Joining..." : "Join the waitlist"}
      </button>
    </div>

    {/* General error message */}
    {errors.submit && (
      <p className="mt-3 text-sm text-red-500 text-center">{errors.submit}</p>
    )}
  </form>
);
```

**Step 6: Test the component builds**

Run: `npm run build`

Expected: Build completes without TypeScript errors

**Step 7: Commit**

```bash
git add src/components/WaitlistForm.tsx src/types/waitlist.ts
git commit -m "feat: add WaitlistForm component with validation and Supabase integration"
```

---

## Task 3: Add Final CTA Section and Update Footer

**Files:**
- Modify: `src/app/page.tsx` (after line 277, before footer)

**Step 1: Import WaitlistForm**

Add to imports at top of file:

```typescript
import { WaitlistForm } from "@/components/WaitlistForm";
```

**Step 2: Add Final CTA section**

Replace the current footer section (lines 280-293) with:

```typescript
      {/* Final CTA Section */}
      <section id="join" className="bg-stone-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-3">
            Join the community
          </h2>
          <p className="text-stone-500 mb-8">
            Get early access when we launch
          </p>
          <WaitlistForm source="landing_footer" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="px-6 py-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="text-sm font-semibold text-stone-900">MooHive</span>
              <p className="text-xs text-stone-500 mt-1">Where AI video creators thrive</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                About
              </a>
              <a href="#" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                Terms
              </a>
              <a href="#" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
```

**Step 3: Test the page renders**

Run: `npm run dev -- -p 3002`
Visit: http://localhost:3002

Expected: Page loads, final CTA section and footer visible, form renders

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add final CTA section with waitlist form and update footer"
```

---

## Task 4: Wire Hero CTA Button to Scroll

**Files:**
- Modify: `src/app/page.tsx:200-202` (hero CTA button)

**Step 1: Add smooth scroll handler**

Add this function inside the Home component, before the return statement:

```typescript
function scrollToJoinSection() {
  const joinSection = document.getElementById("join");
  if (joinSection) {
    joinSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
```

**Step 2: Update hero CTA button**

Find the button at line ~200 and update it:

```typescript
<button
  onClick={scrollToJoinSection}
  className="mt-8 bg-stone-900 hover:bg-stone-800 text-white font-medium px-6 py-3 rounded-full transition-colors text-base"
>
  Join the community
</button>
```

**Step 3: Test smooth scroll**

Run: `npm run dev -- -p 3002`
Click hero "Join the community" button

Expected: Page smoothly scrolls to final CTA section

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: wire hero CTA button to smooth scroll to waitlist form"
```

---

## Task 5: Add Meta Tags and SEO

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Read current layout**

Check what's in `src/app/layout.tsx` to understand current structure.

**Step 2: Update metadata export**

Replace or update the metadata export:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MooHive — Where AI video creators thrive",
  description: "Discover, share, and connect with the pioneers shaping AI video. Browse portfolios, explore techniques, and join the community.",
  openGraph: {
    title: "MooHive — Where AI video creators thrive",
    description: "Discover, share, and connect with the pioneers shaping AI video.",
    type: "website",
    siteName: "MooHive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MooHive - Where AI video creators thrive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MooHive — Where AI video creators thrive",
    description: "Discover, share, and connect with the pioneers shaping AI video.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
```

**Step 3: Test metadata in dev mode**

Run: `npm run dev -- -p 3002`
View page source (right-click > View Page Source)

Expected: See meta tags in <head> with correct content

**Step 4: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: add SEO meta tags and Open Graph data"
```

---

## Task 6: Manual Testing Checklist

**Step 1: Test form validation**

1. Submit empty form → see "Name is required" and "Email is required"
2. Enter name "A" → see "Name must be at least 2 characters"
3. Enter invalid email "test" → see "Please enter a valid email address"
4. Enter valid data → form submits successfully

**Step 2: Test form submission**

1. Fill form with valid data → click "Join the waitlist"
2. Button shows "Joining..." while submitting
3. Success message appears: "You're on the list! We'll be in touch soon."
4. Submit same email again → see "This email is already on the waitlist"

**Step 3: Verify database entry**

Use Supabase MCP to check:
```
Use mcp__supabase__execute_sql with:
query: "select * from waitlist order by created_at desc limit 5;"
```

Expected: See your test entries with correct name, email, source

**Step 4: Test responsive design**

1. Desktop (1440px+) → form fields side-by-side
2. Mobile (375px) → form fields stacked vertically
3. Footer layout → two columns desktop, stacked mobile

**Step 5: Test accessibility**

1. Tab through form → all fields and button keyboard accessible
2. Focus indicators visible (orange ring)
3. Screen reader announces errors properly
4. Labels present (even if visually hidden)

**Step 6: Test hero CTA scroll**

1. Click hero "Join the community" button
2. Page smoothly scrolls to final CTA section
3. No page jump or layout shift

---

## Task 7: Create OG Image (Optional - Can Skip for MVP)

**Files:**
- Create: `public/og-image.png` (1200x630px)

**Step 1: Design simple OG image**

Content:
- MooHive wordmark
- Tagline: "Where AI video creators thrive"
- Linen background (#FAF9F7)
- Stone-900 text

**Step 2: Export and add to public**

Save as `public/og-image.png` at 1200x630px

**Step 3: Test social sharing**

Use a tool like https://www.opengraph.xyz/ to validate OG tags

**Step 4: Commit**

```bash
git add public/og-image.png
git commit -m "feat: add Open Graph social sharing image"
```

**Note:** This task can be skipped for MVP. The meta tags will reference the image path, but won't break if the image doesn't exist yet.

---

## Task 8: Final Verification and Sprint Completion

**Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes successfully, no errors

**Step 2: Test production build locally**

```bash
npm run start
```

Visit: http://localhost:3000

Expected: Everything works in production mode

**Step 3: Verify success criteria**

Check against design document:
- [ ] Landing page matches approved design
- [ ] Email waitlist functional with name + email
- [ ] Form validation and error handling works
- [ ] Success state shows after submission
- [ ] Duplicate emails handled gracefully
- [ ] Mobile responsive (test at 375px, 768px, 1440px)
- [ ] Loads quickly (check Network tab in DevTools)
- [ ] Meets WCAG AA accessibility (tab navigation, focus states, labels)
- [ ] OG tags configured (check page source)

**Step 4: Update sprint doc**

Update `docs/sprints/SPRINT_0_LANDING_PAGE.md`:
- Change status from 🟡 In Progress to 🟢 Complete
- Check off completed milestones
- Add completion date to changelog

**Step 5: Final commit**

```bash
git add docs/sprints/SPRINT_0_LANDING_PAGE.md
git commit -m "docs: mark Sprint 0 landing page as complete"
```

---

## Implementation Notes

### Testing Strategy

- **Manual testing only** - No automated tests for this MVP phase
- Focus on visual testing and user flows
- Test in Chrome, Safari, and mobile Safari
- Use DevTools to test responsive breakpoints

### Environment Variables

Ensure these are set in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Known Issues / Future Improvements

- No email confirmation sent (future: integrate Resend)
- No analytics tracking (future: add PostHog or similar)
- No rate limiting on form submissions (future: add Supabase Edge Function)
- OG image placeholder (future: design proper branded image)

### Performance Targets

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms

---

## Success Criteria Checklist

- [ ] Waitlist table created in Supabase with RLS
- [ ] WaitlistForm component built and tested
- [ ] Final CTA section added to landing page
- [ ] Footer updated with new design
- [ ] Hero CTA scrolls to form smoothly
- [ ] Meta tags and OG data configured
- [ ] Form validation works correctly
- [ ] Duplicate email handling works
- [ ] Success state displays properly
- [ ] Mobile responsive at all breakpoints
- [ ] Accessibility meets WCAG AA
- [ ] Production build succeeds
- [ ] Sprint 0 doc updated to complete

---

## References

- Design Document: `docs/plans/2026-02-02-landing-page-design.md`
- Sprint Document: `docs/sprints/SPRINT_0_LANDING_PAGE.md`
- Brand Guidelines: `docs/BRAND.md`
- Supabase Docs: Use `mcp__supabase__search_docs` for queries
