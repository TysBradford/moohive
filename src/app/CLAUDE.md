# UI/UX Implementation Guidelines

Every screen, component, and interaction in BloomHive must feel hand-crafted and premium. No generic patterns. No default styling. Every detail matters.

## Universal Principles

- **Generous whitespace** — let elements breathe; density is the enemy of premium feel
- **Subtle motion** — purposeful micro-interactions and transitions, never gratuitous animation
- **Typographic hierarchy** — use weight and size to create clear visual hierarchy, not colour variations
- **Rounded corners** — 8px for thumbnails and cards in feed contexts; consistent radius system throughout
- **Line lengths** — 60-75 characters max for readable body text
- **Mobile-first** — responsive by default, every layout must work beautifully on all screen sizes

## Landing Page (Marketing)

The landing page is bold, vibrant, and confident. It makes a statement.

### Colour Palette

```
Primary:     Vibrant coral/orange (#FF6B35) — energy, creativity
Secondary:   Electric purple (#6366F1) — modern, tech-forward
Accent:      Lime/yellow (#84CC16) — optimism, growth
Neutrals:    Warm whites and soft darks — approachable, not stark
```

### Design Direction

- **Bold, oversized typography** — big headlines that make a statement (Plus Jakarta Sans, Satoshi, or similar)
- **Bento grid layout** — asymmetrical cards of varying sizes (Notion-inspired)
- **Colour-blocked sections** — vibrant feature cards with distinct background colours
- **Creator showcase grid** — real video thumbnails as the primary visual element
- **Animated product showcase** — carousel or video previewing the platform experience
- **Confident, playful tone** — feels made BY creatives FOR creatives

### Key Patterns

- Hero section with bold headline, subheadline, and email capture
- Value props in a bento grid layout (not boring 3-column cards)
- Social proof through creator work, not testimonial quotes
- CTAs are action-oriented: "Join the community", "Get early access" — never "Submit" or "Sign up"
- Page should feel alive — consider subtle parallax, scroll-triggered reveals, hover states with personality

## App (Product)

The app is restrained and sophisticated. Creator content is the star — the UI disappears.

### Colour Palette

```
Backgrounds:  Void (#0A0A0B) primary, Surface (#141416) elevated
Text:         Chalk (#FAFAFA) primary, Mist (#71717A) secondary
Accent:       Ember (#F97316) CTAs and highlights, Ember Soft (#FDBA74) hover states
Functional:   Success (#22C55E), Warning (#FACC15), Error (#EF4444)
```

### Design Direction

- **Dark mode default** — optimised for video viewing; light mode is secondary
- **Minimal chrome** — the feed IS the experience
- **Video thumbnails at high resolution** — no compression artifacts, maintain original aspect ratios
- **Metadata is secondary** — AI model, tools, prompts are visible but never compete with the work itself
- **Linear-level polish** — refined typography hierarchy, considered spacing, sophisticated interactions

### Typography

- **Primary: Inter** — all UI text (400 Regular, 500 Medium, 600 Semibold)
- **Secondary: JetBrains Mono** — metadata, prompts, model names, technical details
- Use the monospace font for anything a creator typed or configured

### Type Scale

| Name    | Size    | Weight   | Usage                              |
| ------- | ------- | -------- | ---------------------------------- |
| Display | 48/56px | Semibold | Hero sections, major announcements |
| H1      | 36/40px | Semibold | Page titles                        |
| H2      | 24/32px | Semibold | Section headings                   |
| H3      | 18/24px | Medium   | Card titles, subsections           |
| Body    | 16/24px | Regular  | Primary content                    |
| Small   | 14/20px | Regular  | Secondary content, captions        |
| Micro   | 12/16px | Medium   | Labels, metadata, tags             |

### Icons

- **Lucide** icon library exclusively
- Outlined style, 1.5px stroke weight, rounded corners and caps
- 24px default, 20px and 16px for compact contexts
- Always pair with text labels where possible — don't rely on icons alone

### Component Quality

- Every component should have considered hover, focus, and active states
- Transitions should be smooth (150-200ms ease) — never jarring
- Loading states must be graceful — skeleton screens over spinners where possible
- Empty states should be warm and encouraging, never cold or blaming

## Copy Guidelines

- Use "creators" not "users"
- Use "your work" not "your content"
- Write in sentence case, not Title Case
- CTAs are action-oriented: "Add video" not "Submit"
- Error states are calm and solution-focused: "That video URL didn't work. Check the link and try again."
- Never use corporate jargon, never overpromise, never say "simple" or "easy"
