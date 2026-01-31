# Sprint 3: Community

> Detailed implementation guide for Phase 3

**Status:** 🔴 Not Started
**Parent:** [Implementation Plan](../IMPLEMENTATION_PLAN.md)

---

## Goals

Build community and social features including following creators, appreciation/likes, comments, and direct messaging between users.

## Tasks

### Follow System
- [ ] Create follows table in database
- [ ] Build follow/unfollow button component
- [ ] Display follower/following counts on profiles
- [ ] Create "Following" feed view
- [ ] Add followers/following list pages

### Likes/Appreciation
- [ ] Create likes table (separate from upvotes)
- [ ] Build like button component
- [ ] Display like counts
- [ ] Show liked videos in user profile
- [ ] Notification for likes received

### Comments
- [ ] Create comments table
- [ ] Build comment form component
- [ ] Display comment thread on videos
- [ ] Implement nested replies
- [ ] Comment moderation (delete own)
- [ ] Comment notifications

### Direct Messaging
- [ ] Create conversations/messages tables
- [ ] Build messaging UI (inbox view)
- [ ] Create conversation thread view
- [ ] Real-time message updates (Supabase Realtime)
- [ ] Unread message indicators
- [ ] Message notifications

---

## Technical Details

### Schema Additions

```sql
-- To be defined during implementation
```

### Key Components

| Component | Path | Purpose |
|-----------|------|---------|
| FollowButton | `src/components/social/FollowButton.tsx` | Follow/unfollow |
| FollowersList | `src/components/social/FollowersList.tsx` | List followers |
| LikeButton | `src/components/social/LikeButton.tsx` | Like action |
| CommentForm | `src/components/comments/CommentForm.tsx` | New comment |
| CommentThread | `src/components/comments/CommentThread.tsx` | Comment list |
| Inbox | `src/components/messaging/Inbox.tsx` | Message inbox |
| Conversation | `src/components/messaging/Conversation.tsx` | Chat thread |
| MessageInput | `src/components/messaging/MessageInput.tsx` | Send message |

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/follow` | POST/DELETE | Follow actions |
| `/api/users/[id]/followers` | GET | Get followers |
| `/api/videos/[id]/comments` | GET/POST | Video comments |
| `/api/comments/[id]` | DELETE | Delete comment |
| `/api/messages` | GET/POST | Messaging |
| `/api/conversations/[id]` | GET | Conversation thread |

---

## Acceptance Criteria

- [ ] User can follow/unfollow creators
- [ ] Profile shows follower/following counts
- [ ] "Following" feed shows only followed creators' content
- [ ] Users can like videos
- [ ] Users can comment on videos
- [ ] Comments support nested replies
- [ ] Users can send direct messages
- [ ] Real-time message delivery works
- [ ] Unread indicators show correctly

---

## Notes

_Implementation notes will be added here during development_

---

## Changelog

| Date | Update |
|------|--------|
