# BloomHive — Project Overview

## Vision

BloomHive is a community and discovery platform for AI video creators — think Dribbble, but purpose-built for the AI video space.

As AI video tools rapidly evolve, creators lack a dedicated space to showcase their work, share techniques, and connect with others in the field. BloomHive fills this gap by providing:

- **For Creators:** Curated portfolios to showcase AI video work, with rich metadata about creation process (models, tools, prompts, settings). A learning resource to see what techniques top creators are using.
- **For Appreciators & Hirers:** A discovery platform to find inspiring AI video content and connect with talented creators for potential collaboration or hire.

## Goals

- [ ] Build a thriving community hub for AI video creators
- [ ] Enable creators to showcase work with detailed process transparency
- [ ] Provide discovery tools for finding creators by style, tools, or technique
- [ ] Facilitate connections between creators and potential hirers

## Tech Stack

| Layer        | Technology       |
|--------------|------------------|
| Frontend     | Next.js 15, React 19, TypeScript |
| Styling      | Tailwind CSS     |
| Auth & DB    | Supabase         |
| Hosting      | Vercel           |
| CI/CD        | GitHub Actions   |

## Architecture

```
┌─────────────────────────────────────────────┐
│                   Vercel                    │
│  ┌───────────────────────────────────────┐  │
│  │           Next.js App                 │  │
│  │  ┌─────────────┐  ┌────────────────┐  │  │
│  │  │   Pages/    │  │  API Routes    │  │  │
│  │  │   App Dir   │  │  (Server)      │  │  │
│  │  └─────────────┘  └────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                  Supabase                   │
│  ┌─────────────┐  ┌───────────────────────┐ │
│  │    Auth     │  │      PostgreSQL       │ │
│  └─────────────┘  └───────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Repository Structure

```
bloomhive/
├── docs/              # Project documentation
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React components
│   ├── lib/           # Utilities & helpers
│   └── types/         # TypeScript types
├── public/            # Static assets
└── ...
```

## User Groups

### Creators
- Curated profile/portfolio pages
- Upload and showcase AI video work
- Share creation metadata per video:
  - AI model used (Sora, Runway, Kling, Pika, Veo, Flow, etc.)
  - Editing tools
  - Prompt (if willing to share)
  - Technical specs: aspect ratio, duration, resolution
- Learn from other creators' techniques

### Appreciators & Hirers
- Browse and discover AI video content
- Follow favorite creators
- Contact creators for potential hire/collaboration

## Key Decisions

| Decision | Approach | Rationale |
|----------|----------|-----------|
| Video storage | URL-based (external hosting) | Start simple — creators link to YouTube, Vimeo, etc. Avoids storage/transcoding complexity. Can revisit native uploads later. |
| Contact/hire flow | Simple "Message me" | Light-touch for MVP. Direct messaging between users. |

## Milestones

### Phase 1 — Foundation
- [ ] Project setup (Next.js, Supabase, Tailwind)
- [ ] Database schema design
- [ ] Auth flow (sign up, login, OAuth)
- [ ] Basic user profiles

### Phase 2 — Core Features
- [ ] Video submissions (URL-based)
- [ ] Creator portfolio pages
- [ ] Video metadata capture (model, tools, prompt, specs)
- [ ] Browse/discovery feed
- [ ] Search and filtering

### Phase 3 — Community
- [ ] Follow system
- [ ] Likes/appreciation
- [ ] Comments
- [ ] Direct messaging

### Phase 4 — Launch
- [ ] Public launch
- [ ] Creator onboarding campaign
- [ ] Performance optimization

## Links

- **Production:**
- **Staging:**
- **Supabase Dashboard:**
- **Vercel Dashboard:**
