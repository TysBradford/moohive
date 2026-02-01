# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MooHive is a community and discovery platform for AI video creators (like Dribbble for AI video). Creators showcase portfolios with rich metadata (AI models, tools, prompts, settings), while appreciators and hirers discover and connect with talent.

## Commands

```bash
npm run dev -- -p 3002   # Start development server (use port 3002)
npm run build            # Production build
npm run start            # Start production server
npm run lint             # Run ESLint
```

## Architecture

- **Framework**: Next.js 16 with App Router, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Supabase (Auth + PostgreSQL + File storage)
- **Hosting**: Vercel

### Directory Structure

```
src/
├── app/           # Next.js App Router (pages, layouts, API routes)
├── components/    # React components (to be created)
├── lib/           # Utilities & helpers (to be created)
└── types/         # TypeScript types (to be created)
```

### Path Alias

`@/*` maps to `./src/*` — use `@/components/...` style imports.

### Supabase MCP

The Supabase MCP server is connected and available for direct interaction with our database, auth, and file storage. Use it for running SQL queries, applying migrations, managing Edge Functions, searching Supabase docs, and inspecting project configuration — no need to shell out to the Supabase CLI.

## Key Design Decisions

- **Video storage**: URL-based (links to YouTube, Vimeo, etc.) — no native uploads for MVP
- **Contact flow**: Simple direct messaging between users
- **Video metadata**: Per-video creation details including AI model, editing tools, prompts, technical specs

## Design Standard

The UI and UX of MooHive must be award-calibre. Every surface should feel hand-crafted by the best in design and usability — never generic or pedestrian. We care about the details. This is as premium a product as one can imagine.

- **Creator content is the star** — the UI frames it, never competes with it
- **Light, refined aesthetic** — warm off-white backgrounds (Linen #FAF9F7), not sterile white
- **Stone palette** — elegant, restrained neutrals (stone-900, stone-500, stone-400) that let video content provide the color
- **Orange (Ember) is reserved** for hover states and active elements; use sparingly
- **Primary CTAs use stone-900** — keeps focus on creator work, not UI elements
- **Maintain WCAG AA contrast minimum** (AAA preferred for text)
- **Use Lucide icons** — outlined style, 1.5px stroke, rounded corners and caps

See `docs/BRAND.md` for the full brand guidelines including colour palettes, typography scale, voice & tone, and imagery rules.

## Documentation

Project documentation lives in `docs/`:

- `PROJECT.md` - Full project vision and architecture
- `BRAND.md` - Brand guidelines (colours, typography, voice, imagery, design standard)
- `ICP.md` - Ideal customer profile
- `DISTRIBUTION.md` - Distribution strategy
