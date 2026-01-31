# Sprint 2: Core Features

> Detailed implementation guide for Phase 2

**Status:** 🔴 Not Started
**Parent:** [Implementation Plan](../IMPLEMENTATION_PLAN.md)

---

## Goals

Build the core video showcase functionality including submissions, portfolio pages, metadata capture, discovery feed, engagement features, and search.

## Tasks

### Video Submissions
- [ ] Create video submission form
- [ ] Implement URL validation (YouTube, Vimeo, etc.)
- [ ] Build video embed/preview component
- [ ] Add video to database

### Creator Portfolio Pages
- [ ] Design portfolio page layout
- [ ] Build video grid component
- [ ] Implement portfolio routing (`/creator/[username]`)
- [ ] Add portfolio customization options

### Video Metadata Capture
- [ ] Design metadata input form
- [ ] AI model selection (dropdown/tags)
- [ ] Editing tools multi-select
- [ ] Prompt text field
- [ ] Technical specs (resolution, duration, fps)
- [ ] Store metadata with video record

### Browse/Discovery Feed
- [ ] Create main feed page
- [ ] Build feed video card component
- [ ] Implement infinite scroll/pagination
- [ ] Add sorting options (recent, popular, trending)

### Upvotes and Views
- [ ] Track video views
- [ ] Implement upvote system
- [ ] Display engagement counts
- [ ] Prevent duplicate votes (auth check)

### Search and Filtering
- [ ] Build search input component
- [ ] Implement full-text search
- [ ] Add filter controls (AI model, tools, date)
- [ ] Create search results page

---

## Technical Details

### Schema Additions

```sql
-- To be defined during implementation
```

### Key Components

| Component | Path | Purpose |
|-----------|------|---------|
| VideoSubmitForm | `src/components/video/VideoSubmitForm.tsx` | New video form |
| VideoCard | `src/components/video/VideoCard.tsx` | Feed video display |
| VideoEmbed | `src/components/video/VideoEmbed.tsx` | Embedded player |
| MetadataForm | `src/components/video/MetadataForm.tsx` | AI/tools metadata |
| PortfolioGrid | `src/components/portfolio/PortfolioGrid.tsx` | Creator's videos |
| SearchBar | `src/components/search/SearchBar.tsx` | Search input |
| FilterPanel | `src/components/search/FilterPanel.tsx` | Filter controls |

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/videos` | GET/POST | Video CRUD |
| `/api/videos/[id]` | GET/PUT/DELETE | Single video |
| `/api/videos/[id]/upvote` | POST | Upvote action |
| `/api/search` | GET | Search videos |

---

## Acceptance Criteria

- [ ] User can submit a video via URL
- [ ] Video metadata is captured and displayed
- [ ] Creator portfolio shows all their videos
- [ ] Main feed displays videos with pagination
- [ ] Users can upvote videos (once per video)
- [ ] View counts increment on video view
- [ ] Search returns relevant results
- [ ] Filters narrow down results correctly

---

## Notes

_Implementation notes will be added here during development_

---

## Changelog

| Date | Update |
|------|--------|
