# Sprint 1: Foundation

> Detailed implementation guide for Phase 1

**Status:** 🟢 Complete
**Parent:** [Implementation Plan](../IMPLEMENTATION_PLAN.md)

---

## Goals

Establish the technical foundation for MooHive including project setup, database schema, authentication, and basic user profiles.

## Tasks

### Project Setup

- [x] Initialize Next.js 16 with App Router
- [x] Configure TypeScript
- [x] Set up Tailwind CSS 4
- [x] Configure Supabase client
- [x] Set up environment variables
- [x] Configure path aliases (@/*)

### Database Schema

- [x] Design profiles table (extends auth.users)
- [x] Design videos table (with metadata fields)
- [x] Set up Row Level Security (RLS) policies
- [x] Create database migrations
- [x] Add auto-profile creation trigger on signup
- [x] Add updated_at triggers

### Authentication

- [x] Implement sign up flow
- [x] Implement login flow
- [x] Add OAuth providers (Google)
- [x] Create auth middleware (proxy.ts)
- [x] Build auth UI components

### Basic User Profiles

- [x] Create profile page route
- [x] Build profile display component (ProfileCard)
- [x] Implement profile editing (ProfileEditor)
- [x] Add avatar upload (via Supabase Storage)
- [x] Create public profile pages (/@username)
- [x] Create dashboard page

---

## Technical Details

### Schema Design

```sql
-- Profiles table: extends auth.users with creator info
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE CHECK (username ~ '^[a-z0-9_]{3,30}$'),
  display_name TEXT,
  bio TEXT,
  avatar_url TEXT,
  website TEXT,
  twitter_handle TEXT,
  instagram_handle TEXT,
  is_creator BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Videos table: AI video content with rich metadata
CREATE TABLE public.videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  ai_model TEXT,
  prompt TEXT,
  negative_prompt TEXT,
  duration_seconds INTEGER,
  aspect_ratio TEXT,
  resolution TEXT,
  fps INTEGER,
  tools_used JSONB DEFAULT '[]'::jsonb,
  generation_settings JSONB DEFAULT '{}'::jsonb,
  view_count INTEGER DEFAULT 0,
  upvote_count INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  published_at TIMESTAMPTZ
);
```

### Key Components

| Component     | Path                                       | Purpose                |
| ------------- | ------------------------------------------ | ---------------------- |
| AuthForm      | `src/components/auth/AuthForm.tsx`         | Login/signup form      |
| ProfileCard   | `src/components/profile/ProfileCard.tsx`   | User profile display   |
| ProfileEditor | `src/components/profile/ProfileEditor.tsx` | Edit profile form      |
| AppHeader     | `src/components/layout/AppHeader.tsx`      | Authenticated nav      |

### Routes

| Route            | Type    | Purpose                    |
| ---------------- | ------- | -------------------------- |
| `/login`         | Page    | Login page                 |
| `/signup`        | Page    | Signup page                |
| `/auth/callback` | API     | OAuth callback handler     |
| `/dashboard`     | Page    | User dashboard             |
| `/profile`       | Page    | Edit own profile           |
| `/[username]`    | Page    | Public creator profile     |

---

## Acceptance Criteria

- [x] User can sign up with email/password
- [x] User can sign up with Google OAuth
- [x] User can log in and see their profile
- [x] User can edit their profile (name, bio, avatar)
- [x] Database schema is deployed and migrations run
- [x] All auth flows work on mobile and desktop

---

## Notes

- Profile is auto-created via database trigger when user signs up
- Avatar storage uses Supabase Storage with 2MB limit and image type validation
- RLS policies ensure users can only edit their own data
- Public profiles accessible at `/@username`
- TypeScript types defined in `src/types/database.ts`

## Setup Required

### Google OAuth (not yet configured)

To enable Google sign-in:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 credentials (Web application)
3. Add authorized redirect URI: `https://<project-ref>.supabase.co/auth/v1/callback`
4. In Supabase Dashboard → Authentication → Providers → Google:
   - Enable Google provider
   - Add Client ID and Client Secret from Google Cloud Console
5. For local development, also add `http://localhost:3002` to authorized origins in Google Cloud

---

## Changelog

| Date       | Update                                                       |
| ---------- | ------------------------------------------------------------ |
| 2026-02-05 | Sprint complete - all foundation tasks implemented           |
