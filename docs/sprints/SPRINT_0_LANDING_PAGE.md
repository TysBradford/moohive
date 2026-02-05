# Sprint 0: Landing Page

> Pre-product landing page to establish brand, build waitlist, and validate interest

**Status:** 🟢 Complete
**Priority:** High — ship before building core product

---

## Goals

Create a compelling landing page that:
1. Leads with creator work — video content is the hero, not product UI
2. Communicates the value prop to AI video creators
3. Captures email signups for waitlist
4. Sets the design foundation for the full product

---

## Phase 1: UI/UX Discovery

### Design Direction
**Vibe:** Refined, creator-first, elegant and warm — the UI frames the work without competing
**Focus:** Showcasing beautiful AI video work with award-calibre craft

### Reference Sites

#### Primary Inspiration

| Site | What to Take | Link |
|------|--------------|------|
| **Dribbble** | Creator showcase grid, shot thumbnails with social proof (likes/views), talent discovery flow, community-first positioning | [dribbble.com](https://dribbble.com) |
| **Runway** | Dark cinematic aesthetic, video-first hero, bold "Building AI to Simulate the World" messaging energy, immersive full-bleed video, glass morphism surfaces | [runwayml.com](https://runwayml.com) |
| **Behance** | Full-bleed project showcases, creator attribution alongside work, category-based discovery, portfolio depth | [behance.net](https://behance.net) |

#### Secondary Inspiration

| Site | What to Take | Link |
|------|--------------|------|
| **Vimeo** | Cinematic video presentation, dark viewing experience, curated staff picks, creator-focused platform positioning | [vimeo.com](https://vimeo.com) |
| **ArtStation** | Artist portfolio grid, trending/featured work surfacing, skill-based discovery, creator profiles with work front-and-centre | [artstation.com](https://artstation.com) |
| **Pika** | "Reality is optional" boldness in messaging, playful creative confidence, AI-native product feel, dark palette with custom typography | [pika.art](https://pika.art) |

#### Design Awards Reference

| Site | What to Take | Link |
|------|--------------|------|
| **Awwwards** | Award-winning interaction patterns, motion design standards, layout innovation, what "best in class" looks like right now | [awwwards.com](https://www.awwwards.com/) |

### Design Patterns to Adopt

#### From Dribbble
- **Creator showcase grid** — thumbnail previews of work with creator attribution
- **Social proof through content** — let the work speak for itself
- **Filterable discovery** — browse by category, trending, colour
- **Community language** — "discover," "connect," "showcase"
- **Clear CTAs** — "Join the community" / "Get early access"

#### From Runway
- **Cinematic presentation** — video content as the hero element
- **Full-bleed video hero** — edge-to-edge visual impact
- **Refined surfaces** — elegant, considered visual hierarchy
- **Generous whitespace** — breathing room between content blocks
- **Confident, concise copy** — short punchy statements, not paragraphs

#### From Behance / ArtStation
- **Work-first layout** — the grid of creative work IS the page
- **Creator attribution** — name, avatar, and tools visible alongside each piece
- **Featured/curated sections** — editorial curation gives the feed a sense of quality
- **Category navigation** — discover by style, tool, or technique

### Color Palette

Per brand guidelines — warm, refined, restrained. The UI frames creator work with elegance, never competing.

```
Background:   Linen (#FAF9F7) — warm off-white canvas
Text Primary: Charcoal (stone-900) — headings, primary text
Text Body:    Slate (stone-500) — body copy, secondary text
Text Meta:    Ash (stone-400) — metadata, tertiary text
Borders:      Frost (stone-200) — dividers, borders
Surfaces:     Pearl (stone-100) / Parchment (stone-50) — cards, backgrounds
Hover Accent: Ember (orange-600) — hover states, active elements (use sparingly)
Primary CTA:  Ink (stone-900) — primary buttons, important actions
```

No rainbow of competing colours. Orange is used sparingly for hover states. Primary CTAs use stone-900 to keep focus on the work. Everything else stays neutral so the video thumbnails are the most colourful thing on the page.

### Typography

Per brand guidelines:

- **Headlines:** Inter Semibold — clean, confident, not decorative
- **Body:** Inter Regular — legible at all sizes
- **Metadata:** JetBrains Mono — technical details, prompts, model names
- **Approach:** Weight and size create hierarchy, not colour variation

---

## Phase 2: Landing Page Build

### Page Structure

1. **Hero Header with Stacked Cards**
   - Bold headline: communicates what MooHive is in one line
   - Short supporting line with rotating text animation (trailblazers, pioneers, artists, visionaries)
   - Primary CTA button (stone-900 background)
   - Stacked cards showcasing beautiful AI video work — the visual centrepiece
   - Cards feature metallic borders with shimmer effects
   - 3D layering effect with subtle rotation and offset
   - Each card: gradient placeholder, title, creator name

2. **Discovery Section**
   - Grid of video work and creator cards — the "feed" preview
   - Mix of video thumbnails at varying sizes (masonry or asymmetric grid)
   - Each card shows: thumbnail, title, creator avatar + name, AI model tag
   - Feels like a preview of what the full platform will look like
   - Category/filter chips across the top (Sora, Runway, Kling, Pika, etc.)
   - "See more on MooHive" CTA at the bottom

3. **Value Proposition**
   - Brief section — 2-3 short value props, not a wall of text
   - For Creators: "Show your work. Share your process."
   - For Hirers: "Find AI video talent by style, tool, or technique."
   - Metadata angle: "Every video tells the story of how it was made."

4. **Final CTA**
   - Email capture repeated
   - "Join the community" — per brand voice guidelines
   - Waitlist count if available ("Join X creators already on the waitlist")

### Technical Requirements

- [x] Responsive design (mobile-first)
- [x] Email capture with Supabase
- [x] Custom carousel component (no generic library — this needs to feel bespoke)
- [x] OG image and meta tags for social sharing
- [ ] Fast load times — optimise images, lazy load below fold
- [x] Accessible (WCAG AA minimum, AAA preferred for text)
- [x] Smooth scroll and subtle entrance animations (nothing that competes with video content)

---

## Phase 3: Launch Landing Page

- [x] Deploy to Vercel
- [x] Connect custom domain
- [ ] Set up basic analytics
- [ ] Share for feedback

---

## Acceptance Criteria

- [ ] Landing page live at moohive domain
- [ ] Email waitlist functional
- [ ] Stacked cards hero is the centrepiece — feels refined and considered
- [ ] Discovery grid previews the platform experience
- [ ] Mobile and desktop responsive
- [ ] Loads in under 2 seconds
- [ ] Light, refined aesthetic aligned with brand guidelines
- [ ] Creator work is the most visually prominent element on the page
- [ ] Clearly communicates what MooHive is

---

## Discovery Notes

### Questions to Resolve
- [ ] Source curated video content for carousel and discovery grid (real AI video work or high-quality placeholders)
- [ ] Hero visual approach — looping video backgrounds vs static thumbnails vs embedded video previews
- [ ] Carousel interaction model — autoplay with pause on hover? Click to expand? Swipe on mobile?
- [ ] Exact headline and copy

### Sites to Review Together
_Add notes here as we review references_

---

## Sources

- [Awwwards](https://www.awwwards.com/) — Award-winning web design reference
- [One Page Love](https://onepagelove.com/) — Landing page inspiration gallery
- [Landingfolio](https://www.landingfolio.com/) — Landing page examples
- [Muzli](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/) — Creative portfolio websites

---

## Changelog

| Date | Update |
|------|--------|
| 2026-01-25 | Created sprint with discovery phase |
| 2026-01-27 | Overhauled design direction: dropped B2B SaaS references, aligned to creative showcase inspiration (Dribbble, Runway, Behance, Vimeo, ArtStation, Pika), removed purple from palette, restructured page around hero carousel + discovery grid |
| 2026-02-04 | Added Value Proposition section, dynamic OG images (Next.js opengraph-image.tsx), SVG favicon, marked technical requirements complete |
| 2026-02-05 | Deployed to production at moohive.com |
