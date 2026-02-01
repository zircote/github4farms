# Demo Environment Specification

> **Purpose:** This document specifies the complete GitHub training environment for the 12-session GitHub for Farmers curriculum. It includes organization setup, multiple demo repositories, pre-created content, and session-specific configuration requirements.
>
> **Organization Name:** `zircote`
> **Primary URL:** `https://github.com/zircote`

---

## 1. Organization Setup

### Organization Profile

| Setting | Value |
|---------|-------|
| **Name** | `zircote` |
| **Display Name** | GitHub for Farmers Training |
| **Description** | Hands-on training environment for farmers learning GitHub project management |
| **URL** | Leave blank or link to curriculum repository |
| **Email** | Organization owner's email |
| **Avatar** | Farm-themed icon (tractor, barn, field rows) |
| **Visibility** | Public organization |

### Member Roles

| Role | Access Level | Who |
|------|-------------|-----|
| **Owner** | Full administrative access | Instructor/facilitator |
| **Member** | Write access to demo repositories | Training participants |

### Organization Settings

Enable the following features under Organization Settings:

- **Discussions:** Enabled (required for Session 5)
- **Projects:** Enabled (required for Session 3, 6, 7)
- **Pages:** Enabled (optional for advanced exercises)
- **Issues:** Enabled globally
- **Default repository permissions:** Write (so learners can create Issues)
- **Member privileges:**
  - Allow members to create repositories: No
  - Allow members to create teams: No
  - Allow members to create projects: Yes
- **Third-party application access:** Restricted to approved apps only

### Security Settings

- **Two-factor authentication:** Recommended but not required (many farmers may not have smartphones)
- **Verified domains:** None required
- **SSH keys:** Allow personal SSH keys
- **Commit signing:** Optional

---

## 2. Demo Repositories

### Repository Overview

| Repository | Visibility | Purpose | Sessions Used |
|-----------|-----------|---------|--------------|
| `github4farms-training` | Public | Primary training repository with farm data | 1-12 (all) |
| `sunrise-acres-example` | Public | Completed example showing full implementation | 3, 6, 8, 11 |
| `template-starter` | Public template | Minimal starter repo learners can fork | 1, 12 |
| `instructor-notes` | Private | Instructor resources and setup scripts | N/A (instructor only) |

---

### Repository: `github4farms-training`

**Full specification:** See `sessions/demo-repository-spec.md` for complete details.

**Summary:**
- Primary repository used throughout all 12 sessions
- Contains realistic farm data organized into four sections: crops, livestock, equipment, compliance
- Pre-populated with 8+ Issues covering common farm scenarios
- Includes custom label system (equipment, livestock, crops, maintenance, urgent, routine, compliance, fencing, health, deadline)
- Public visibility so learners can access without organization membership

**Key files referenced by curriculum:**
- `crops/planting-schedule.md` — Session 1 lab exercise
- `livestock/health-records.md` — Session 1 lab exercise
- `equipment/maintenance-log.md` — Session 1 lab exercise
- All Issues — Sessions 2-3 demos and exercises

---

### Repository: `sunrise-acres-example`

**Purpose:** Show learners what a fully-built GitHub farm repository looks like after completing all training sessions.

**Description:**
```
Sunrise Acres is a completed example farm repository demonstrating GitHub best practices for farm operations. This repository shows how all 12 training sessions come together in a real working project.
```

**Structure:**
```
sunrise-acres-example/
├── README.md (comprehensive, with badges and links)
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── equipment-repair.yml
│   │   ├── crop-task.yml
│   │   └── livestock-health.yml
│   └── workflows/
│       └── seasonal-reminder.yml (basic automation example)
├── crops/
│   ├── README.md
│   ├── 2026-planting-schedule.md
│   ├── crop-rotation-2025-2027.md
│   └── soil-test-results.md
├── livestock/
│   ├── README.md
│   ├── health-records.md
│   ├── breeding-records.md
│   └── feed-inventory.md
├── equipment/
│   ├── README.md
│   ├── maintenance-log.md
│   ├── service-schedule.md
│   └── parts-inventory.md
├── compliance/
│   ├── README.md
│   ├── grant-tracker.md
│   └── certifications.md
└── docs/
    ├── team-guidelines.md
    └── seasonal-workflow.md
```

**Pre-Created Content:**

| Component | Quantity | Description |
|-----------|----------|-------------|
| **Issues** | 25+ | Mix of open (10) and closed (15+) covering all farm areas |
| **Labels** | 15+ | Equipment, livestock, crops, priority levels, status indicators |
| **Milestones** | 4 | Spring Planting 2026, Summer Maintenance, Fall Harvest, Winter Planning |
| **Project Boards** | 2 | "Farm Operations" (Board view), "2026 Season" (Timeline view) |
| **Branches** | 3+ | `main`, `spring-prep`, `equipment-updates` (with open/merged PRs) |
| **Pull Requests** | 5+ | 3 merged, 2 open (showing code review process) |
| **Discussions** | 8+ | Categories: Announcements, Planning, Equipment Q&A, Crop Planning |
| **Iterations** | 6 | Named by month (March 2026, April 2026, etc.) |

**Key Features to Demonstrate:**

- **Project Board (Board View):** Columns: Backlog, To Do, In Progress, Done
- **Project Board (Table View):** Grouped by Assignee, sorted by Priority
- **Project Board (Timeline View):** Showing seasonal milestones with date ranges
- **Issue Templates:** Three templates matching farm workflows
- **Labels:** Color-coded system with priority, category, and status labels
- **Linked Issues:** Issues reference each other using `#` notation
- **PR with Changes:** At least 1 PR showing file edits to `crops/planting-schedule.md`
- **Discussion Thread:** Active discussion with multiple replies
- **README Badges:** Custom shields showing project status

**Session-Specific Use:**

- **Session 3:** Show as example of mature Project board
- **Session 6:** Demo Timeline view with seasonal milestones
- **Session 8:** Show PR workflow and code review
- **Session 11:** Reference during "Real-World Applications" discussion

---

### Repository: `template-starter`

**Purpose:** Minimal template repository learners can use to create their own farm repositories during exercises.

**Repository Settings:**
- Template repository: **Enabled** (via Settings > Template repository checkbox)
- Visibility: Public

**Description:**
```
Starter template for creating your own farm project repository. Includes basic folder structure and README template.
```

**Structure:**
```
template-starter/
├── README.md (template with placeholders)
├── crops/
│   └── README.md
├── livestock/
│   └── README.md
├── equipment/
│   └── README.md
└── compliance/
    └── README.md
```

**README.md Template:**
```markdown
# [Your Farm Name]

Welcome to the [Farm Name] repository.

## About This Farm

[Describe your farm operation here]

## Repository Structure

- **crops/** — Planting schedules, crop records, and soil data
- **livestock/** — Health records, feeding schedules, and vet logs
- **equipment/** — Maintenance logs, safety inspections, and inventory
- **compliance/** — Grant tracking and certifications

## Getting Started

1. Update this README with your farm name
2. Create Issues for upcoming farm tasks
3. Set up labels that match your workflow
4. Create a Project board to track work

---

*Repository created from the zircote template*
```

**Pre-Created Content:**
- 0 Issues (learners create their own)
- 0 Labels (learners create their own)
- README.md sections include placeholders like `[Your Farm Name]`

**Session-Specific Use:**

- **Session 1:** Instructor shows how to "Use this template" button works
- **Session 12:** Learners create their own repositories from this template

---

### Repository: `instructor-notes`

**Purpose:** Private repository for instructor resources, setup scripts, and session materials.

**Visibility:** Private (only organization Owners)

**Description:**
```
Private instructor resources for GitHub for Farmers training delivery. Contains setup scripts, answer keys, and facilitation notes.
```

**Structure:**
```
instructor-notes/
├── README.md
├── setup-scripts/
│   ├── create-github4farms-training-issues.md
│   ├── reset-environment.md
│   └── verify-org-settings.sh
├── answer-keys/
│   ├── session-01-lab-answers.md
│   ├── session-02-lab-answers.md
│   └── [... through session 12]
├── facilitation-notes/
│   ├── common-troubleshooting.md
│   ├── timing-adjustments.md
│   └── accessibility-accommodations.md
└── cohort-tracking/
    ├── cohort-template.md
    └── feedback-forms.md
```

**Key Files:**

- **setup-scripts/create-github4farms-training-issues.md:** Markdown checklist for creating all 8 Issues in `github4farms-training` before each cohort
- **setup-scripts/reset-environment.md:** Step-by-step guide for cleaning up between cohorts
- **answer-keys/:** Lab exercise answers for each session
- **facilitation-notes/common-troubleshooting.md:** Known issues and solutions (e.g., "Learner can't see Issues" → Check repository permissions)

**Session-Specific Use:**
- Instructor reference only
- Not shared with learners

---

## 3. Pre-Created Content per Repository

### `github4farms-training` Content

| Component | Quantity | Status | Details |
|-----------|----------|--------|---------|
| **Issues** | 8 minimum | Open | See `sessions/demo-repository-spec.md` for exact titles |
| **Labels** | 10 | Active | equipment, livestock, crops, maintenance, urgent, routine, compliance, fencing, health, deadline |
| **Milestones** | 2 | Active | "Spring 2026", "Q2 Compliance" |
| **Project Boards** | 1 | Active | "Farm Tasks" with Board view configured |
| **Branches** | 2 | Active | `main`, `equipment-updates` |
| **Pull Requests** | 1 | Merged | Example PR for Session 4 demo |
| **Discussions** | 3 | Active | Enabled for Session 5 demos |
| **Files** | 14+ | Committed | All files from repository structure spec |

### `sunrise-acres-example` Content

| Component | Quantity | Status | Details |
|-----------|----------|--------|---------|
| **Issues** | 25+ | 10 open, 15+ closed | Realistic mix showing project history |
| **Labels** | 15+ | Active | Full label taxonomy with priority, status, and category labels |
| **Milestones** | 4 | Active | Seasonal milestones spanning 2026 |
| **Project Boards** | 2 | Active | 1 with Board view, 1 with Timeline view |
| **Iterations** | 6 | Active | Monthly iterations (March-August 2026) |
| **Branches** | 3+ | Active | `main`, `spring-prep`, `equipment-updates` |
| **Pull Requests** | 5+ | 3 merged, 2 open | Showing review comments and approvals |
| **Discussions** | 8+ | Active | Multiple categories with replies |
| **Issue Templates** | 3 | Active | equipment-repair.yml, crop-task.yml, livestock-health.yml |

### `template-starter` Content

| Component | Quantity | Status | Details |
|-----------|----------|--------|---------|
| **Files** | 5 | Committed | README + 4 section READMEs |
| **Template** | Enabled | Active | Repository marked as template |

### `instructor-notes` Content

| Component | Quantity | Status | Details |
|-----------|----------|--------|---------|
| **Setup Scripts** | 3+ | Documented | Issue creation checklist, reset procedures, verification |
| **Answer Keys** | 12 | Complete | One per session |
| **Facilitation Notes** | 3+ | Documented | Troubleshooting, timing, accessibility |

---

## 4. Session-by-Session Setup Checklist

### Session 1: Introduction to GitHub

**Required Before Session:**
- [ ] `github4farms-training` repository is public and accessible
- [ ] All files in `github4farms-training` match specification (crops, livestock, equipment, compliance folders)
- [ ] README displays correctly
- [ ] No write access needed yet (read-only session)

**During Session:**
- Learners browse `github4farms-training` without GitHub accounts (public access)
- Lab exercise questions reference specific data in files

**Cleanup After Session:**
- No cleanup needed (read-only)

---

### Session 2: Issues and Task Tracking

**Required Before Session:**
- [ ] `github4farms-training` has 8+ Issues created with correct labels
- [ ] Issue #1 (fence post) has a photo attachment for demo
- [ ] Learners have GitHub accounts created
- [ ] Learners are invited to `zircote` organization as Members
- [ ] Learners can create Issues in `github4farms-training` (write access verified)

**During Session:**
- Instructor demos Issue creation using Issue #1 as example
- Learners create their own Issues in `github4farms-training`

**Cleanup After Session:**
- [ ] Review learner-created Issues
- [ ] Close or archive test Issues if needed
- [ ] Keep Issues for Session 3 Project board exercises

---

### Session 3: Project Boards

**Required Before Session:**
- [ ] `github4farms-training` has at least 8 Issues (learners need Issues to add to Projects)
- [ ] Clean up any leftover test Projects from previous cohorts
- [ ] Verify learners can create Projects in the organization
- [ ] `sunrise-acres-example` Project board is visible as reference

**During Session:**
- Learners create Project boards and add Issues from `github4farms-training`
- Instructor shows `sunrise-acres-example` as completed example

**Cleanup After Session:**
- [ ] Close learner test Projects or mark them archived
- [ ] Preserve 1-2 good examples for next cohort reference

---

### Session 4: Branching and Pull Requests

**Required Before Session:**
- [ ] `github4farms-training` has at least 1 merged PR visible in history
- [ ] Branch `equipment-updates` exists with 1+ commit ahead of `main`
- [ ] Learners have write access to create branches
- [ ] GitHub Desktop installed (if using live demonstration)

**During Session:**
- Instructor demos branching workflow
- Learners practice on `github4farms-training` or their own repositories

**Cleanup After Session:**
- [ ] Merge or close test branches created by learners
- [ ] Delete stale branches older than 30 days
- [ ] Keep 1-2 example PRs for reference

---

### Session 5: Discussions and Team Communication

**Required Before Session:**
- [ ] Discussions enabled in `github4farms-training`
- [ ] 3+ Discussion threads created in advance (categories: Announcements, Q&A, General)
- [ ] `sunrise-acres-example` has active Discussions for reference

**During Session:**
- Learners create Discussion posts and reply to threads
- Instructor demos pinning important Discussions

**Cleanup After Session:**
- [ ] Lock or archive off-topic Discussions
- [ ] Pin important threads for next cohort

---

### Session 6: Timeline View and Iterations

**Required Before Session:**
- [ ] `github4farms-training` Project board has Timeline view enabled
- [ ] At least 6 Issues have start and end dates set
- [ ] `sunrise-acres-example` has 6 Iterations configured
- [ ] Learners can edit Project boards

**During Session:**
- Learners add date fields and switch to Timeline view
- Instructor shows `sunrise-acres-example` Timeline as reference

**Cleanup After Session:**
- [ ] Verify Iterations are preserved for next session
- [ ] Clean up test date assignments

---

### Session 7: Issue Templates

**Required Before Session:**
- [ ] `sunrise-acres-example` has 3 Issue templates (.yml files)
- [ ] Learners have permissions to edit repository settings
- [ ] Sample template files available in instructor-notes

**During Session:**
- Learners create custom Issue templates in `github4farms-training` or their own repos
- Instructor demos using `sunrise-acres-example` templates

**Cleanup After Session:**
- [ ] Review learner-created templates
- [ ] Preserve good examples, remove malformed templates

---

### Session 8: Pull Requests In-Depth

**Required Before Session:**
- [ ] `sunrise-acres-example` has 2+ open PRs with comments and reviews
- [ ] Learners can create PRs in `github4farms-training`
- [ ] At least 1 PR shows merge conflict resolution example

**During Session:**
- Learners create PRs, request reviews, and merge changes
- Instructor demos code review workflow

**Cleanup After Session:**
- [ ] Merge or close test PRs
- [ ] Archive merged branches

---

### Session 9: Advanced Projects & Roadmaps

**Required Before Session:**
- [ ] `github4farms-training` Project board has Timeline view enabled
- [ ] At least 6 Issues have start and end dates set
- [ ] `sunrise-acres-example` has 6 Iterations configured
- [ ] Learners can edit Project boards

**During Session:**
- Learners add custom fields (date, dropdown, number) to Projects
- Configure iterations for seasonal planning
- Build a seasonal roadmap using Timeline view

**Cleanup After Session:**
- [ ] Verify Iterations are preserved for reference
- [ ] Clean up test date assignments

---

### Session 10: GitHub Copilot Basics

**Required Before Session:**
- [ ] Copilot is enabled for the organization (if using Copilot features)
- [ ] Sample Issues available for drafting exercises
- [ ] Learners have access to Copilot (or instructor demonstrates)

**During Session:**
- Learners use Copilot to draft Issue descriptions
- Evaluate and edit AI-generated content
- Compare manual vs. Copilot-assisted writing

**Cleanup After Session:**
- No cleanup needed (draft exercises)

---

### Session 11: GitHub Spark & Copilot Agents

**Required Before Session:**
- [ ] Pre-built Spark app example available (or instructor demonstrates)
- [ ] `sunrise-acres-example` is fully populated as reference
- [ ] Learners understand human-in-the-loop concepts

**During Session:**
- Explore pre-built Spark apps
- Understand agent capabilities and guardrails
- Discuss AI assistant governance

**Cleanup After Session:**
- No cleanup needed (exploration-based)

---

### Session 12: Next Steps and Certification

**Required Before Session:**
- [ ] `template-starter` is accessible and template setting enabled
- [ ] Certificates generated with learner names
- [ ] Post-training survey ready

**During Session:**
- Learners fork `template-starter` to create their own repositories
- Instructor distributes certificates

**Cleanup After Session:**
- [ ] Archive entire cohort data
- [ ] Reset environment for next cohort (see Section 6)

---

## 5. Account Setup for Learners

### Learner GitHub Account Requirements

**Pre-Training Preparation (2 weeks before Session 1):**

1. **Email learners with account creation instructions:**
   - Link: `https://github.com/signup`
   - Recommend username format: `firstname-lastname-farm` (e.g., `john-smith-farm`)
   - Free personal account is sufficient
   - No credit card required

2. **Collect GitHub usernames:**
   - Use pre-training survey or registration form
   - Maintain roster: Name → GitHub Username → Email

3. **Send organization invitations:**
   - Invite learners to `zircote` organization as Members
   - Invitations sent via email (learners must accept)
   - Reminder: Invitations expire in 7 days

**Permission Levels by Session:**

| Sessions | Access Level | Reason |
|---------|-------------|---------|
| 1 | None (public access only) | Read-only browsing |
| 2-12 | Organization Member (write access) | Create Issues, PRs, Projects |

**Fallback for Learners Without Accounts:**

Some learners may not be able to create GitHub accounts due to:
- Lack of email address
- Internet connectivity issues
- Technical barriers

**Observer Mode:**
- Learners can view `github4farms-training` and `sunrise-acres-example` without accounts (public repositories)
- Pair learners without accounts with learners who have accounts
- Provide paper-based exercises (e.g., "Draw what a Project board looks like")
- Follow up after training with account setup assistance

**Accessibility Considerations:**

- **Screen readers:** Ensure all demo repositories have descriptive alt text for images
- **Keyboard navigation:** Instructor should demo keyboard shortcuts
- **Visual impairments:** Use high-contrast labels and large fonts in demos
- **Low literacy:** Use visual aids and narrate all text-heavy screens

---

## 6. Reset Procedures

### Between Cohorts (Full Reset)

**Timing:** After Session 12 completion and before next cohort Session 1

**Reset Checklist:**

- [ ] **Archive cohort data:**
  - Export all learner-created Issues to CSV
  - Screenshot notable Project boards
  - Save learner repositories list to `instructor-notes/cohort-tracking/cohort-[date].md`

- [ ] **Remove learners from organization:**
  - Go to Organization > People
  - Remove all Members from previous cohort
  - Keep Owners (instructors)

- [ ] **Reset `github4farms-training` repository:**
  - Delete all learner-created Issues (keep the original 8)
  - Close or delete learner-created Projects
  - Delete all branches except `main` and `equipment-updates`
  - Delete test PRs (keep the 1 example merged PR)
  - Lock or archive Discussions (keep the 3 example threads)

- [ ] **Verify `sunrise-acres-example`:**
  - Ensure all 25+ Issues, Project boards, and Discussions are intact
  - No changes needed (reference repository stays stable)

- [ ] **Verify `template-starter`:**
  - No changes needed (template stays stable)

- [ ] **Clean up organization Projects:**
  - Archive or delete Projects created by previous cohort
  - Keep organization-level "Training Resources" Project (if exists)

- [ ] **Invite new cohort:**
  - Send organization invitations to new learner GitHub accounts

**Estimated Time:** 2-3 hours

---

### Between Sessions (Light Cleanup)

**When:** After each session if excessive test content created

**Light Cleanup Checklist:**

- [ ] Close duplicate or test Issues in `github4farms-training`
- [ ] Archive completed Projects
- [ ] Delete stale branches older than 7 days
- [ ] Pin important Discussions, lock off-topic ones

**Estimated Time:** 15-30 minutes

---

### Emergency Reset (Mid-Cohort)

**When:** Critical error (e.g., accidental deletion, data corruption, spam Issues)

**Emergency Procedure:**

1. **Assess damage:**
   - What repository/content was affected?
   - Can it be restored from Git history?

2. **Restore from backup:**
   - If `github4farms-training` files deleted: Restore from last known good commit
   - If Issues deleted: Recreate from `instructor-notes/setup-scripts/create-github4farms-training-issues.md`
   - If permissions broken: Verify organization settings and member roles

3. **Communicate with learners:**
   - Notify learners of temporary issue
   - Provide workaround (e.g., use `sunrise-acres-example` temporarily)

4. **Document incident:**
   - Add to `instructor-notes/facilitation-notes/common-troubleshooting.md`
   - Include resolution steps for future reference

---

## 7. Verification Checklist (Pre-Cohort)

**Complete this checklist 1 week before Session 1:**

### Organization Settings
- [ ] Organization `zircote` exists
- [ ] Organization is Public
- [ ] Discussions enabled
- [ ] Projects enabled
- [ ] Default repository permissions set to Write

### Repository: `github4farms-training`
- [ ] Repository is Public
- [ ] All files match specification (14+ files in 4 folders)
- [ ] 8+ Issues exist with correct labels
- [ ] Issue #1 has photo attachment
- [ ] 10 labels exist with correct colors
- [ ] 2 milestones exist (Spring 2026, Q2 Compliance)
- [ ] 1 Project board exists (Farm Tasks)
- [ ] 2 branches exist (`main`, `equipment-updates`)
- [ ] 1 merged PR exists in history
- [ ] Discussions enabled with 3+ example threads

### Repository: `sunrise-acres-example`
- [ ] Repository is Public
- [ ] 25+ Issues exist (10 open, 15+ closed)
- [ ] 15+ labels exist
- [ ] 4 milestones exist
- [ ] 2 Project boards exist (1 Board view, 1 Timeline view)
- [ ] 6 Iterations configured
- [ ] 5+ PRs exist (3 merged, 2 open)
- [ ] 8+ Discussions exist
- [ ] 3 Issue templates exist (.github/ISSUE_TEMPLATE/)

### Repository: `template-starter`
- [ ] Repository is Public
- [ ] Template repository enabled in settings
- [ ] 5 files exist (README + 4 section READMEs)

### Repository: `instructor-notes`
- [ ] Repository is Private
- [ ] Setup scripts exist
- [ ] Answer keys exist for all 12 sessions
- [ ] Facilitation notes exist

### Learner Accounts
- [ ] All learner GitHub usernames collected
- [ ] Organization invitations sent to all learners
- [ ] Reminder email sent 3 days before Session 1

### Instructor Preparation
- [ ] All slide decks tested (Sessions 1-12)
- [ ] Live demo URLs bookmarked
- [ ] Backup internet connection available
- [ ] Screen sharing software tested
- [ ] Accessibility accommodations confirmed

---

## 8. Troubleshooting Guide

### Issue: Learner Can't See Issues in `github4farms-training`

**Cause:** Repository permissions or learner not signed in

**Solution:**
1. Verify repository is Public (Settings > General > Danger Zone)
2. Ask learner to sign in to GitHub account
3. Verify learner accepted organization invitation

---

### Issue: Learner Can't Create Issues

**Cause:** Missing write permissions or learner is not organization member

**Solution:**
1. Check organization People page — is learner listed as Member?
2. Verify repository Settings > Collaborators and teams — organization Members should have write access
3. Ask learner to sign out and sign back in (refresh permissions)

---

### Issue: Project Board Not Loading

**Cause:** Browser cache or Projects not enabled

**Solution:**
1. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Verify organization Settings > Projects is enabled
3. Try different browser (Chrome, Firefox, Edge)

---

### Issue: Issue Templates Not Appearing

**Cause:** Template files have syntax errors or not in correct folder

**Solution:**
1. Verify templates are in `.github/ISSUE_TEMPLATE/` folder
2. Check YAML syntax using online validator
3. Commit and push templates to `main` branch

---

### Issue: Discussions Not Visible

**Cause:** Discussions not enabled or repository permissions

**Solution:**
1. Verify Settings > General > Features > Discussions is checked
2. Refresh page (Discussions tab appears after enabling)

---

### Issue: Timeline View Not Showing Dates

**Cause:** Issues missing start/end date fields

**Solution:**
1. Open Project board > Table view
2. Add custom fields: Start Date (Date), End Date (Date)
3. Assign dates to at least 3-5 Issues
4. Switch to Timeline view

---

*This specification ensures a consistent, professional training environment across all cohorts. All setup must be completed before Session 1.*
