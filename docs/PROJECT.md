# MooHive — Project Overview

## Vision

MooHive is a community and discovery platform for AI video creators — think Dribbble, but purpose-built for the AI video space.

As AI video tools rapidly evolve, creators lack a dedicated space to showcase their work, share techniques, and connect with others in the field. MooHive fills this gap by providing:

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
moohive/
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