# Sprint 0: Landing Page

> Pre-product landing page to establish brand, build waitlist, and validate interest

**Status:** 🟡 In Progress (Discovery Phase)
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
**Vibe:** Cinematic, creator-first, dark and immersive — the UI disappears and the work shines
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
- **Dark immersive canvas** — near-black backgrounds let video content glow
- **Full-bleed video hero** — cinematic, edge-to-edge video presentation
- **Glass morphism accents** — semi-transparent surfaces with backdrop blur
- **Generous whitespace** — breathing room between content blocks
- **Confident, concise copy** — short punchy statements, not paragraphs

#### From Behance / ArtStation
- **Work-first layout** — the grid of creative work IS the page
- **Creator attribution** — name, avatar, and tools visible alongside each piece
- **Featured/curated sections** — editorial curation gives the feed a sense of quality
- **Category navigation** — discover by style, tool, or technique

### Color Palette

Per brand guidelines — no competing accent colours. The UI stays dark and neutral so creator work provides all the colour.

```
Background:   Void (#0A0A0B) — primary dark canvas
Surface:      Surface (#141416) — cards, elevated elements
Text:         Chalk (#FAFAFA) — primary text, high-contrast
Secondary:    Mist (#71717A) — metadata, subtle borders
Accent:       Ember (#F97316) — primary CTAs, creator highlights (use sparingly)
Accent Soft:  Ember Soft (#FDBA74) — hover states, secondary accent
```

No purple. No lime. No rainbow of competing colours. Ember is the single accent — everything else stays neutral so the video thumbnails are the most colourful thing on the page.

### Typography

Per brand guidelines:

- **Headlines:** Inter Semibold — clean, confident, not decorative
- **Body:** Inter Regular — legible at all sizes
- **Metadata:** JetBrains Mono — technical details, prompts, model names
- **Approach:** Weight and size create hierarchy, not colour variation

---

## Phase 2: Landing Page Build

### Page Structure

1. **Hero Header with Video Carousel**
   - Bold headline: communicates what BloomHive is in one line
   - Short supporting line underneath
   - Email capture field for waitlist (inline, not a separate section)
   - Custom carousel showcasing beautiful AI video work — this is the centrepiece
   - Carousel should feel curated and cinematic, not a generic slider
   - Auto-advancing with smooth transitions, manual navigation controls
   - Each slide: video thumbnail/preview, creator name, AI model used

2. **Discovery Section**
   - Grid of video work and creator cards — the "feed" preview
   - Mix of video thumbnails at varying sizes (masonry or asymmetric grid)
   - Each card shows: thumbnail, title, creator avatar + name, AI model tag
   - Feels like a preview of what the full platform will look like
   - Category/filter chips across the top (Sora, Runway, Kling, Pika, etc.)
   - "See more on BloomHive" CTA at the bottom

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

- [ ] Responsive design (mobile-first)
- [ ] Email capture with Supabase
- [ ] Custom carousel component (no generic library — this needs to feel bespoke)
- [ ] OG image and meta tags for social sharing
- [ ] Fast load times — optimise images, lazy load below fold
- [ ] Accessible (WCAG AA minimum, AAA preferred for text)
- [ ] Smooth scroll and subtle entrance animations (nothing that competes with video content)

---

## Phase 3: Launch Landing Page

- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Set up basic analytics
- [ ] Share for feedback

---

## Acceptance Criteria

- [ ] Landing page live at bloomhive domain
- [ ] Email waitlist functional
- [ ] Video carousel is the centrepiece — feels curated and cinematic
- [ ] Discovery grid previews the platform experience
- [ ] Mobile and desktop responsive
- [ ] Loads in under 2 seconds
- [ ] Dark, immersive aesthetic aligned with brand guidelines
- [ ] Creator work is the most visually prominent element on the page
- [ ] Clearly communicates what BloomHive is

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
