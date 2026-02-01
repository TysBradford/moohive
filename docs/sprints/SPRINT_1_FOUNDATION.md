# Sprint 1: Foundation

> Detailed implementation guide for Phase 1

**Status:** 🔴 Not Started
**Parent:** [Implementation Plan](../IMPLEMENTATION_PLAN.md)

---

## Goals

Establish the technical foundation for MooHive including project setup, database schema, authentication, and basic user profiles.

## Tasks

### Project Setup

- [X] Initialize Next.js 16 with App Router
- [X] Configure TypeScript
- [X] Set up Tailwind CSS 4
- [X] Configure Supabase client
- [ ] Set up environment variables
- [ ] Configure path aliases (@/*)

### Database Schema

- [ ] Design users table
- [ ] Design profiles table
- [ ] Design videos table (with metadata fields)
- [ ] Set up Row Level Security (RLS) policies
- [ ] Create database migrations

### Authentication

- [ ] Implement sign up flow
- [ ] Implement login flow
- [ ] Add OAuth providers (Google, GitHub)
- [ ] Create auth middleware
- [ ] Build auth UI components

### Basic User Profiles

- [ ] Create profile page route
- [ ] Build profile display component
- [ ] Implement profile editing
- [ ] Add avatar upload (via Supabase Storage)

---

## Technical Details

### Schema Design

```sql
-- To be defined during implementation
```

### Key Components

| Component     | Path                                         | Purpose              |
| ------------- | -------------------------------------------- | -------------------- |
| AuthForm      | `src/components/auth/AuthForm.tsx`         | Login/signup form    |
| ProfileCard   | `src/components/profile/ProfileCard.tsx`   | User profile display |
| ProfileEditor | `src/components/profile/ProfileEditor.tsx` | Edit profile form    |

### API Routes

| Route                  | Method  | Purpose                |
| ---------------------- | ------- | ---------------------- |
| `/api/auth/callback` | GET     | OAuth callback handler |
| `/api/profile`       | GET/PUT | Profile CRUD           |

---

## Acceptance Criteria

- [ ] User can sign up with email/password
- [ ] User can sign up with Google OAuth
- [ ] User can log in and see their profile
- [ ] User can edit their profile (name, bio, avatar)
- [ ] Database schema is deployed and migrations run
- [ ] All auth flows work on mobile and desktop

---

## Notes

_Implementation notes will be added here during development_

---

## Changelog

| Date | Update |
| ---- | ------ |
