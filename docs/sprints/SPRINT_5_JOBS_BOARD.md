# Sprint 5: Jobs Board

> Detailed implementation guide for Phase 5

**Status:** 🔴 Not Started
**Parent:** [Implementation Plan](../IMPLEMENTATION_PLAN.md)

---

## Goals

Build a jobs board connecting hirers with AI video creators. Surface freelance, contract, and full-time opportunities with rich filtering by tools, models, and work type.

## Tasks

### Job Posting Creation
- [ ] Create jobs table in database
- [ ] Build job posting form (title, description, requirements)
- [ ] Add compensation fields (budget range, rate type)
- [ ] Capture required tools/models/skills
- [ ] Job posting preview and publish flow
- [ ] Edit and close job postings

### Job Listing Feed
- [ ] Create jobs browse page
- [ ] Build job card component
- [ ] Implement filtering (remote, contract type, budget range)
- [ ] Filter by tools/models required
- [ ] Sort options (newest, closing soon, budget)
- [ ] Pagination and infinite scroll

### Job Application Flow
- [ ] Create applications table
- [ ] Build application form (cover message, portfolio highlight)
- [ ] Link creator profile and selected works
- [ ] Application submission confirmation
- [ ] View applied jobs in creator dashboard

### Hirer Dashboard
- [ ] Hirer account type/role
- [ ] My posted jobs view
- [ ] View applicants per job
- [ ] Applicant review interface
- [ ] Shortlist and reject actions
- [ ] Contact applicant (integrates with messaging)

### Creator Job Features
- [ ] Job alerts (email digest for matching criteria)
- [ ] Save jobs for later
- [ ] Saved searches with notifications
- [ ] Job recommendations based on profile

### Monetization (Future)
- [ ] Featured/promoted job listings
- [ ] Sponsored placement options
- [ ] Premium hirer accounts

---

## Technical Details

### Schema Additions

```sql
-- To be defined during implementation
-- Core tables: jobs, job_applications, saved_jobs, job_alerts
```

### Key Components

| Component | Path | Purpose |
|-----------|------|---------|
| JobCard | `src/components/jobs/JobCard.tsx` | Job listing preview |
| JobPostingForm | `src/components/jobs/JobPostingForm.tsx` | Create/edit jobs |
| JobFilters | `src/components/jobs/JobFilters.tsx` | Filter controls |
| JobDetail | `src/components/jobs/JobDetail.tsx` | Full job view |
| ApplicationForm | `src/components/jobs/ApplicationForm.tsx` | Apply to job |
| ApplicantCard | `src/components/jobs/ApplicantCard.tsx` | Applicant preview |
| HirerDashboard | `src/components/jobs/HirerDashboard.tsx` | Manage postings |
| SavedJobs | `src/components/jobs/SavedJobs.tsx` | Bookmarked jobs |

### API Routes

| Route | Method | Purpose |
|-------|--------|---------|
| `/api/jobs` | GET/POST | List and create jobs |
| `/api/jobs/[id]` | GET/PATCH/DELETE | Single job operations |
| `/api/jobs/[id]/apply` | POST | Submit application |
| `/api/jobs/[id]/applicants` | GET | List applicants (hirer) |
| `/api/applications/[id]` | PATCH | Update application status |
| `/api/jobs/saved` | GET/POST/DELETE | Saved jobs |
| `/api/jobs/alerts` | GET/POST/DELETE | Job alerts |

### Pages

| Page | Path | Purpose |
|------|------|---------|
| Jobs Browse | `/jobs` | Main jobs listing |
| Job Detail | `/jobs/[id]` | Full job description |
| Post a Job | `/jobs/new` | Create job posting |
| My Applications | `/dashboard/applications` | Creator's applications |
| Manage Jobs | `/dashboard/jobs` | Hirer's posted jobs |
| Job Applicants | `/dashboard/jobs/[id]/applicants` | Review applicants |

---

## Acceptance Criteria

- [ ] Hirers can post job listings with full details
- [ ] Jobs display in a filterable browse feed
- [ ] Creators can apply with portfolio highlights
- [ ] Hirers can review and manage applicants
- [ ] Creators can save jobs and set up alerts
- [ ] Jobs can be filtered by tools, models, and work type
- [ ] Closed jobs are archived appropriately

---

## Notes

This feature positions MooHive as a two-sided marketplace: not just portfolio showcase, but active job matching. Consider integration with the messaging system for hirer-creator communication.

---

## Changelog

| Date | Update |
|------|--------|
| 2026-02-01 | Initial sprint document created |
