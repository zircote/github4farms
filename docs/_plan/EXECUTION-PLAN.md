# Execution Plan: GitHub Training Curriculum for Farmers

> This file is a complete execution plan for implementing the project work.
> It was generated from JIRA-STRUCTURE.md and the project planning artifacts.
> To execute: open a Claude Code session in this repository and say:
> "Read _plan/EXECUTION-PLAN.md and begin executing the work items"

Generated: 2026-01-30T00:00:00Z
Domain: Education — Digital Literacy for Agriculture
Project: Develop and deliver a comprehensive GitHub training curriculum enabling 1-25 farmers with no technical experience to independently use GitHub for farm data management, collaboration, and compliance tracking.

## How to Execute This Plan

Read this file, then work through each epic and its stories sequentially within each phase.
For each work item:
1. Check prerequisites and blocking dependencies
2. Read the relevant context files listed
3. Execute the work described — write documents, create templates, build slide decks, design exercises, etc.
4. Verify acceptance criteria are met
5. Mark complete and move to the next item

Epics within the same phase that have no cross-dependencies can be worked in parallel.

## Project Summary

This project creates a multi-session (8-12 sessions) in-person training curriculum teaching farmers with zero technical background how to use GitHub for farm operations. The curriculum follows an experiential, accessibility-first design using the SAM (Successive Approximation Model) for iterative development and Kolb's Experiential Learning Cycle for hands-on delivery.

The curriculum progresses from "What is a repository?" through Issues, Projects, collaboration, GitHub Actions automation, and advanced features (Copilot, Spark, Agents). All materials must meet WCAG 2.2 Level AA / Section 508 accessibility standards. Training is delivered in 3 seasonal blocks (March-April, July-August, November-December) to accommodate planting and harvest seasons.

The project includes curriculum development (18 weeks), delivery (12 weeks active + 16 weeks seasonal breaks), and evaluation using Kirkpatrick's 4-level model. A train-the-trainer stretch goal aims to create a self-sustaining peer training network.

## Success Criteria

- 75% of learners complete 8+ sessions
- 80% of learners demonstrate independent GitHub skills in hands-on assessments (Kirkpatrick Level 2)
- 60% of learners actively use GitHub 60 days post-training (Kirkpatrick Level 3)
- 90% of training materials meet WCAG 2.2 Level AA accessibility standards
- 3+ documented farm productivity improvements (Kirkpatrick Level 4)
- NPS +60 or higher across all sessions
- 75% knowledge retention at 30-day follow-up
- 1+ train-the-trainer candidate identified and coached

## Risk Awareness

| Risk | Score | Mitigation |
|------|-------|------------|
| **Technology Anxiety & Learner Resistance (R-001)** | 9 | Use agricultural analogies, celebrate small wins, normalize mistakes, slow pacing with frequent check-ins |
| **Mixed Device Access (R-006)** | 9 | Test across device types, focus on GitHub web UI only, provide device-specific guides, backup mobile hotspot |
| **Learner Attrition & Dropout (R-007)** | 9 | Build early wins, make content immediately relevant, create peer community, flexible attendance, proactive outreach |
| **Seasonal Availability Conflicts (R-002)** | 8 | Modular 3-block design, recap sessions after breaks, asynchronous resources, flexible scheduling |
| **Accessibility Compliance Failures (R-003)** | 8 | UDL from start, automated checkers at each sprint, test with assistive tech, consult specialist |

---

## Phase 1: Preparation & Analysis (Weeks 1-4)

### Epic EPIC-001: Project Initiation & Research
- **Owner:** Curriculum Developer
- **Duration:** 2 weeks
- **Priority:** P0 (Critical)
- **Dependencies:** None
- **Phase exit criteria:** Learner needs assessed, gap analysis complete, 10+ farm use cases documented, planning artifacts published

#### Story STORY-001: Conduct Learner Needs Assessment
- **Description:** As a curriculum developer, I want to understand farmers' technology access, skill levels, and availability, so that I can design training that meets their actual needs and constraints
- **Context files:** `PROJECT-CONTEXT.md` (stakeholder info, constraints)
- **Work to do:**
  - [ ] Create survey questions covering: device access (laptop/tablet/phone), prior tech experience (none/basic/moderate), seasonal availability calendar, learning preferences (visual/verbal/hands-on), accessibility needs
  - [ ] Distribute survey to target farmer cohort (1-25 farmers) OR conduct proxy analysis by interviewing agricultural extension educators familiar with the cohort
  - [ ] Analyze responses to identify patterns: primary device types, skill level distribution, seasonal blackout dates, technology anxiety indicators
  - [ ] Write `curriculum/learner-profile.md` documenting findings: technology access breakdown, skill level distribution, seasonal availability map, key insights
- **Acceptance criteria:**
  - [ ] Survey completed by 5+ farmers or proxy analysis completed with extension educators
  - [ ] Learner profile document includes: technology access breakdown, skill level distribution, seasonal availability map
  - [ ] Key insights documented (e.g., "60% use smartphones primarily," "100% unavailable May-June")
- **Verification:** Learner profile document exists and contains all required sections with data-driven insights

---

#### Story STORY-002: Research Existing GitHub Training Resources
- **Description:** As a curriculum developer, I want to review existing GitHub training materials, so that I can identify gaps for agricultural audiences and reuse applicable content
- **Context files:** `PROJECT-CONTEXT.md` (available data section referencing `../github` repository)
- **Work to do:**
  - [ ] Review GitHub Learning Pathways, Microsoft Learn GitHub modules, GitHub Skills courses
  - [ ] Review the `../github` repository: `docs/COMPREHENSIVE_GUIDE.md`, `docs/GITHUB_ECOSYSTEM_BEST_PRACTICES.md`, `docs/ADOPTION.md`, `docs/research/`, `templates/`
  - [ ] Analyze all existing materials for agricultural relevance (expected result: none tailored to farming)
  - [ ] Identify reusable resources: GitHub terminology lists, interface screenshots, exercise patterns
  - [ ] Write `curriculum/gap-analysis.md` documenting gaps: no farming scenarios, developer-assumed context, no accessibility focus, no seasonal scheduling consideration
- **Acceptance criteria:**
  - [ ] Gap analysis document created comparing existing materials to farmer needs
  - [ ] List of reusable resources compiled (GitHub terminology, interface screenshots, etc.)
  - [ ] Recommendation documented: "Build custom curriculum; existing materials not suitable for target audience"
- **Verification:** Gap analysis document exists with comparison table and reusable resource list

---

#### Story STORY-003: Build Farm Use Case Library
- **Description:** As a curriculum developer, I want to identify 10+ farming scenarios where GitHub solves real problems, so that I can make every training exercise relevant and practical
- **Context files:** `PROJECT-CONTEXT.md` (desired outcomes), `../github` repository (`docs/USE_CASES.md`, `docs/case-studies/`)
- **Work to do:**
  - [ ] Brainstorm farm management challenges across categories: task tracking, record-keeping, team coordination, compliance/grants, equipment maintenance, livestock health, planting/harvest scheduling
  - [ ] Map each challenge to specific GitHub features: repositories for field data, issues for equipment repairs, projects for planting schedules, Actions for automated reminders, etc.
  - [ ] Write `curriculum/farm-use-cases.md` with 10+ use cases, each containing: Farm problem, GitHub feature used, Expected outcome, Difficulty level (basic/intermediate/advanced), Session alignment
  - [ ] Validate use cases with agricultural extension expert or farmer if available
- **Acceptance criteria:**
  - [ ] Farm use case library includes 10+ scenarios
  - [ ] Each use case includes: Farm problem, GitHub feature used, Expected outcome, Difficulty level
  - [ ] Use cases cover diverse farm types (crops, livestock, equipment, compliance)
- **Verification:** Use case library document contains 10+ entries covering at least 4 farm operation categories

**Examples to include:**
- Track planting schedule by field using GitHub Projects with timeline view
- Create issues for equipment maintenance tasks with photo attachments
- Use repository for grant compliance documentation with commit history as audit trail
- Monitor livestock health records using Issues with labels per animal/herd
- Coordinate harvest crew assignments using Project boards

---

#### Story STORY-004: Create Project Planning Artifacts
- **Description:** As a curriculum developer, I want to publish planning documents so that the project has clear scope, timeline, and risk management
- **Context files:** All existing planning artifacts in repository root
- **Work to do:**
  - [ ] Review and finalize `PROJECT-PLAN.md` — ensure phases, timeline, ROI, and next steps are complete
  - [ ] Review and finalize `JIRA-STRUCTURE.md` — ensure all epics, stories, and sprint allocations are complete
  - [ ] Review and finalize `RISK-REGISTER.md` — verify all 13 risks have mitigation strategies
  - [ ] Review and finalize `DEPENDENCY-ANALYSIS.md` — confirm critical path and bottleneck analysis
  - [ ] Review and finalize `RACI-CHART.md` — confirm role assignments
  - [ ] Verify all cross-references between documents are accurate (fix broken links to `BEST-PRACTICES.md` and `_research/DOMAIN-RESEARCH.md`)
- **Acceptance criteria:**
  - [ ] All planning artifacts published to repository root
  - [ ] Cross-references between documents are accurate
  - [ ] Planning artifacts include Mermaid diagrams, tables, and cross-links
- **Verification:** All referenced files exist; no broken internal links

---

### Epic EPIC-002: Curriculum Design & Planning
- **Owner:** Curriculum Developer
- **Duration:** 2 weeks
- **Priority:** P0 (Critical)
- **Dependencies:** EPIC-001 (learner needs data, use case library)
- **Phase exit criteria:** Learning objectives defined for all sessions, session template created, seasonal schedule planned, accessibility checklist created

#### Story STORY-005: Define Learning Objectives for All Sessions
- **Description:** As a curriculum developer, I want to write measurable learning objectives for each of 8-12 sessions, so that learners know what they'll achieve and I can assess skill acquisition
- **Context files:** `curriculum/farm-use-cases.md`, `curriculum/learner-profile.md`, `PROJECT-CONTEXT.md`
- **Work to do:**
  - [ ] Map curriculum to Bloom's Taxonomy progression: Sessions 1-2 (Remember/Understand), Sessions 3-6 (Apply/Analyze), Sessions 7-12 (Evaluate/Create)
  - [ ] Write 3-5 learning objectives per session using Bloom's action verbs (navigate, create, design, evaluate, build)
  - [ ] Ensure every objective is measurable via hands-on demonstration (not written test)
  - [ ] Validate progression: each session builds on previous session skills
  - [ ] Write `curriculum/learning-objectives.md` with all objectives organized by session
- **Acceptance criteria:**
  - [ ] Learning objectives document includes 3-5 objectives per session (24-60 total)
  - [ ] Objectives use Bloom's Taxonomy verbs appropriate to cognitive level
  - [ ] Progression validated: Session 1 is foundational, Session 12 requires cumulative skills
- **Verification:** Learning objectives document exists with correct Bloom's level assignments per session

---

#### Story STORY-006: Create Session Outline Template
- **Description:** As a curriculum developer, I want a reusable session structure following Kolb's Experiential Learning Cycle, so that every session follows a consistent, research-backed format
- **Context files:** `curriculum/learning-objectives.md`, `RUNBOOK-TEMPLATE.md`
- **Work to do:**
  - [ ] Design template with sections: Learning Objectives, Why This Matters (farm context), Instructor Demo (Concrete Experience), Guided Practice (Reflective Observation), Concept Explanation (Abstract Conceptualization), Independent Practice (Active Experimentation), Reflection, Application Assignment, Feedback Survey
  - [ ] Include timing estimates for 2.5-hour sessions with breaks (15-min break at midpoint)
  - [ ] Add accessibility features checklist (captions, alt text, high contrast, keyboard navigation, large fonts)
  - [ ] Include "I do, we do, you do" facilitation script sections
  - [ ] Write `curriculum/session-template.md`
- **Acceptance criteria:**
  - [ ] Session outline template document created
  - [ ] Template includes all Kolb's Cycle stages
  - [ ] Timing breakdown allocates 60-70% to hands-on practice
  - [ ] Accessibility checklist integrated into template
- **Verification:** Template exists with all required sections; timing adds up to ~150 minutes with practice time >= 90 minutes

---

#### Story STORY-007: Plan Seasonal Scheduling with Blackout Periods
- **Description:** As a curriculum developer, I want to create a delivery calendar that avoids planting and harvest seasons, so that farmers can attend without conflicts
- **Context files:** `curriculum/learner-profile.md` (seasonal availability), `PROJECT-CONTEXT.md`
- **Work to do:**
  - [ ] Define blackout periods: Planting (May-June), Harvest (September-October)
  - [ ] Design 3 training blocks: Block 1 (Sessions 1-4, March-April), Block 2 (Sessions 5-8, July-August), Block 3 (Sessions 9-12, November-December)
  - [ ] Plan recap sessions: 30-minute review at start of Block 2 and Block 3
  - [ ] Plan asynchronous resources for seasonal gaps: video walkthroughs, "GitHub Refresher" one-pager, optional check-in via GitHub Discussions
  - [ ] Write `curriculum/seasonal-schedule.md` with calendar, block assignments, recap plans, and async resources
- **Acceptance criteria:**
  - [ ] Seasonal scheduling calendar created showing 3 blocks with dates
  - [ ] Blackout periods documented and training sessions scheduled around them
  - [ ] Recap session plans created for post-gap sessions
  - [ ] Asynchronous resource plan documented
- **Verification:** Schedule document exists with non-overlapping blocks and no sessions during May-June or September-October

---

#### Story STORY-008: Design Accessibility Compliance Checklist
- **Description:** As a curriculum developer, I want a comprehensive checklist of WCAG 2.2 Level AA and Section 508 requirements, so that every material I create meets accessibility standards
- **Context files:** `RUNBOOK-TEMPLATE.md` (operational procedures)
- **Work to do:**
  - [ ] Research WCAG 2.2 Level AA success criteria relevant to training materials (documents, slides, videos, web content)
  - [ ] Document Section 508 requirements for each material type
  - [ ] Create checklist with categories: Visual (contrast ratio 4.5:1+, fonts 14pt+ body/18pt+ headers), Auditory (captions, transcripts), Navigation (keyboard access, no mouse-only actions), Content (alt text, clear language, reading level), Structure (headings, lists, logical order)
  - [ ] Identify testing tools: WAVE, axe DevTools, WebAIM Contrast Checker, NVDA/JAWS screen readers
  - [ ] Write `curriculum/accessibility-checklist.md` with 20+ checkpoints organized by material type
- **Acceptance criteria:**
  - [ ] Accessibility compliance checklist created with 20+ checkpoints
  - [ ] Checklist covers all material types (slides, videos, documents, exercises)
  - [ ] Testing tools identified and documented with download/access instructions
  - [ ] Checklist integrated into session outline template
- **Verification:** Checklist document exists with 20+ items; cross-referenced in session template

---

## Phase 2: Iterative Design (Weeks 5-10)

### Epic EPIC-003: Sessions 1-3 Content Development (Prototype)
- **Owner:** Curriculum Developer
- **Duration:** 6 weeks
- **Priority:** P0 (Critical)
- **Dependencies:** EPIC-002 (session template, learning objectives, accessibility checklist)
- **Phase exit criteria:** Sessions 1-3 fully developed, accessibility audit passed at 90%+, pilot tested, iterated based on feedback

#### Story STORY-009: Develop Session 1 — Introduction to GitHub & Repositories
- **Description:** As a curriculum developer, I want to create Session 1 materials teaching farmers what GitHub is and how to navigate repositories, so that learners build foundational knowledge and confidence
- **Context files:** `curriculum/session-template.md`, `curriculum/learning-objectives.md`, `curriculum/farm-use-cases.md`, `curriculum/accessibility-checklist.md`
- **Work to do:**
  - [ ] Create slide deck (20-25 slides): What is GitHub? (farm analogy: "digital barn"), Why use it for farming?, Repository tour (README, files, folders), Navigating the interface, GitHub account creation walkthrough
  - [ ] Develop hands-on lab exercise: "Explore a sample farm repository — find the planting schedule, read the equipment log, locate the README"
  - [ ] Write quick-reference guide: "GitHub Terminology Cheat Sheet" — 15+ terms with farm analogies (repository = barn, issue = work order, commit = field log entry)
  - [ ] Create facilitation script with "I do, we do, you do" progression, timing, key talking points, common questions, troubleshooting tips
  - [ ] Apply accessibility: alt text on all images, high-contrast theme, 18pt+ fonts, keyboard-navigable elements
  - [ ] Save all materials to `sessions/session-01/` directory
- **Acceptance criteria:**
  - [ ] Slide deck created following session template structure
  - [ ] Lab exercise uses farming scenario from use case library
  - [ ] Quick-reference guide is 1-2 pages, printer-friendly
  - [ ] Facilitation script includes timing, key talking points, troubleshooting tips
  - [ ] Materials pass accessibility checklist (alt text, contrast 4.5:1+, 18pt+ fonts)
- **Verification:** `sessions/session-01/` contains slides, lab, guide, and script files; all images have alt text

---

#### Story STORY-010: Develop Session 2 — GitHub Issues for Task Tracking
- **Description:** As a curriculum developer, I want to teach farmers how to create, manage, and comment on Issues, so that they can use GitHub for farm task tracking
- **Context files:** `curriculum/session-template.md`, `curriculum/learning-objectives.md`, `curriculum/farm-use-cases.md`
- **Work to do:**
  - [ ] Create slide deck: What are Issues? When to use them? Creating an issue (title, description, photos), Adding labels (equipment, livestock, crops, maintenance) and assignees, Commenting with updates, Closing completed issues
  - [ ] Develop hands-on lab: "Create an issue for a broken fence repair. Add a photo, assign to yourself, comment with update, close when done."
  - [ ] Write quick-reference guide: "Issue Creation Step-by-Step" with annotated screenshots
  - [ ] Create facilitation script
  - [ ] Apply accessibility features
  - [ ] Save to `sessions/session-02/`
- **Acceptance criteria:**
  - [ ] Slide deck created with farm examples (equipment repairs, livestock health alerts, planting tasks)
  - [ ] Lab exercise includes photo upload (tested across devices)
  - [ ] Quick-reference guide includes screenshots with clear callouts
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-02/` contains all required materials; lab includes device-compatibility notes

---

#### Story STORY-011: Develop Session 3 — GitHub Projects for Planning
- **Description:** As a curriculum developer, I want to teach farmers how to use GitHub Projects for farm planning, so that they can organize tasks visually and track progress
- **Context files:** `curriculum/session-template.md`, `curriculum/learning-objectives.md`, `curriculum/farm-use-cases.md`
- **Work to do:**
  - [ ] Create slide deck: What are Projects? Board vs Table vs Timeline views, Adding issues to projects, Organizing with columns/fields, Filtering and sorting
  - [ ] Develop hands-on lab: "Create a project board for spring planting. Add issues for each field. Organize by status (To Do, In Progress, Done)."
  - [ ] Write quick-reference guide: "Project Board Setup Checklist"
  - [ ] Create facilitation script
  - [ ] Apply accessibility features
  - [ ] Save to `sessions/session-03/`
- **Acceptance criteria:**
  - [ ] Slide deck demonstrates all 3 view types (Board, Table, Timeline)
  - [ ] Lab exercise produces functional project board for farm scenario
  - [ ] Quick-reference guide includes when to use each view type
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-03/` contains all materials; slide deck covers Board, Table, and Timeline views

---

#### Story STORY-012: Conduct Accessibility Audit of Sessions 1-3
- **Description:** As a curriculum developer, I want to test Session 1-3 materials with accessibility tools, so that I confirm WCAG 2.2 Level AA compliance before pilot testing
- **Context files:** `curriculum/accessibility-checklist.md`, `sessions/session-01/`, `sessions/session-02/`, `sessions/session-03/`
- **Work to do:**
  - [ ] Run WAVE accessibility checker on slide decks (export as PDF first)
  - [ ] Test any video content with screen reader (NVDA or VoiceOver)
  - [ ] Check color contrast ratios on all slides using WebAIM Contrast Checker (target 4.5:1+)
  - [ ] Test keyboard navigation for all interactive elements
  - [ ] Review all images for alt text quality (descriptive, not just "image")
  - [ ] Write `curriculum/accessibility-audit-sessions-1-3.md` documenting findings, pass/fail per checkpoint, remediation actions
- **Acceptance criteria:**
  - [ ] Accessibility audit report created documenting findings and fixes
  - [ ] 90%+ of checklist items pass
  - [ ] Any failures remediated and re-tested
  - [ ] Audit report includes screenshots of passing tests
- **Verification:** Audit report shows 90%+ pass rate; all critical failures resolved

---

#### Story STORY-013: Pilot Test Session 1-3 Materials
- **Description:** As a curriculum developer, I want to test prototype materials with 1-2 farmers or agricultural educators, so that I validate approach, identify confusion points, and assess cognitive load
- **Context files:** `sessions/session-01/`, `sessions/session-02/`, `sessions/session-03/`, `curriculum/learner-profile.md`
- **Work to do:**
  - [ ] Recruit 1-2 pilot testers: farmers from target cohort OR agricultural extension educators as proxies
  - [ ] Deliver Session 1 materials to testers (in-person walkthrough or guided self-review)
  - [ ] Collect feedback via survey or interview: Was content clear? Was pacing appropriate? Were farm examples relevant? Was technology overwhelming? What confused you?
  - [ ] Observe cognitive load: Did testers struggle with concepts? Were there too many new terms? How long did exercises take?
  - [ ] Write `curriculum/pilot-test-report.md` with feedback, cognitive load assessment (low/medium/high per session), and revision priority list
- **Acceptance criteria:**
  - [ ] Pilot testing completed with 1-2 testers
  - [ ] Feedback collected via survey or interview
  - [ ] Cognitive load assessment documented (low/medium/high per session)
  - [ ] Revision list created with priority rankings (must-fix, should-fix, nice-to-have)
- **Verification:** Pilot test report exists with tester feedback and prioritized revision list

---

#### Story STORY-014: Iterate Session 1-3 Based on Pilot Feedback
- **Description:** As a curriculum developer, I want to revise prototype materials based on pilot testing findings, so that materials are refined before replicating to Sessions 4-12
- **Context files:** `curriculum/pilot-test-report.md`, `sessions/session-01/`, `sessions/session-02/`, `sessions/session-03/`
- **Work to do:**
  - [ ] Review pilot feedback and cognitive load observations
  - [ ] Revise slides to simplify overly complex sections (reduce text density, add more visuals)
  - [ ] Adjust lab exercises if too difficult (add scaffolding steps) or too easy (add stretch challenges)
  - [ ] Update facilitation scripts with troubleshooting notes from pilot
  - [ ] Re-run accessibility audit on revised materials
  - [ ] Update `curriculum/session-template.md` with lessons learned for replication to Sessions 4-12
- **Acceptance criteria:**
  - [ ] All high-priority (must-fix) revisions implemented
  - [ ] Revised materials re-tested with pilot tester if major changes made
  - [ ] Session template updated with lessons learned
  - [ ] Final Session 1-3 materials ready for delivery
- **Verification:** Pilot test report revisions marked complete; session template shows version 2.0 with updates

---

### Epic EPIC-009: Accessibility Compliance & Testing
- **Owner:** Curriculum Developer
- **Duration:** Ongoing (integrated into all development epics)
- **Priority:** P0 (Critical)
- **Dependencies:** EPIC-002 (accessibility checklist)
- **Phase exit criteria:** Accessibility testing workflow established, UDL features implemented across all materials

#### Story STORY-015: Create Accessibility Testing Workflow
- **Description:** As a curriculum developer, I want a repeatable process for testing accessibility, so that every material is evaluated consistently
- **Context files:** `curriculum/accessibility-checklist.md`
- **Work to do:**
  - [ ] Write `curriculum/accessibility-testing-workflow.md` with step-by-step process: 1) Run WAVE/axe on exported PDF, 2) Test with screen reader (VoiceOver or NVDA), 3) Check contrast ratios, 4) Verify captions on videos, 5) Test keyboard navigation, 6) Document results in testing log
  - [ ] Create testing log template (`curriculum/accessibility-testing-log-template.md`) with columns: Material, Date, Tester, Tool Used, Pass/Fail, Issues Found, Remediation, Re-test Date
  - [ ] List remediation resources: WCAG Quick Reference, alt text best practices guide, caption editing tools
  - [ ] Schedule accessibility testing checkpoints in development timeline (after each session development)
- **Acceptance criteria:**
  - [ ] Accessibility testing workflow document created with 6-step process
  - [ ] Testing log template ready for use
  - [ ] Workflow integrated into session development tasks
- **Verification:** Workflow and template documents exist; workflow referenced in session template

---

#### Story STORY-016: Implement Universal Design for Learning (UDL) Features
- **Description:** As a curriculum developer, I want to provide multiple means of representation, action, and engagement, so that learners with diverse needs can all succeed
- **Context files:** `curriculum/session-template.md`, `curriculum/accessibility-checklist.md`
- **Work to do:**
  - [ ] Add visual + verbal + hands-on components to every session (slides for visual, narration for verbal, exercises for hands-on)
  - [ ] Provide choice in practice scenarios: each session offers 2+ farm context options (crops vs livestock vs equipment)
  - [ ] Design assessments allowing multiple demonstration methods: verbal explanation, hands-on demonstration, or written response
  - [ ] Create motivational opening ("Why this matters for YOUR farm") for each session using farm-relevant examples
  - [ ] Develop peer pairing strategy for varied skill levels (pair advanced with novice, rotate pairs each session)
  - [ ] Write `curriculum/udl-implementation-guide.md` documenting UDL features and how they're applied
- **Acceptance criteria:**
  - [ ] Every session includes at least 3 representation modes (visual, verbal, kinesthetic)
  - [ ] Learners have choice in 2+ aspects per session (practice scenario, demonstration method)
  - [ ] UDL principles checklist completed for all materials
- **Verification:** UDL guide exists; session materials show multiple representation modes

---

## Phase 3: Iterative Development (Weeks 11-18)

### Epic EPIC-004: Sessions 4-6 Content Development
- **Owner:** Curriculum Developer
- **Duration:** 3 weeks
- **Priority:** P1 (High)
- **Dependencies:** EPIC-003 (validated session template from prototype)
- **Phase exit criteria:** Sessions 4-6 fully developed with consistent structure, all pass accessibility checklist

#### Story STORY-017: Develop Session 4 — Collaboration & Pull Requests (Simplified)
- **Description:** As a curriculum developer, I want to teach farmers simplified collaboration concepts using GitHub web UI only (no CLI)
- **Context files:** `curriculum/session-template.md`, `curriculum/learning-objectives.md`, `sessions/session-01/` through `sessions/session-03/` (for consistency)
- **Work to do:**
  - [ ] Create slide deck: What is collaboration on GitHub? Forking a repository (web UI), Making changes to files (web editor), Creating a Pull Request, Reviewing and merging changes
  - [ ] Develop hands-on lab: "Fork the sample farm repository, edit the planting schedule file, submit a Pull Request to update it"
  - [ ] Write quick-reference guide: "Collaboration Basics"
  - [ ] Create facilitation script
  - [ ] Apply accessibility features
  - [ ] Save to `sessions/session-04/`
- **Acceptance criteria:**
  - [ ] Slide deck avoids CLI/terminal — web UI only
  - [ ] Lab exercise demonstrates fork → edit → PR workflow
  - [ ] Materials consistent with Sessions 1-3 structure and branding
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-04/` contains all materials; no CLI references in content

**Story Points:** 13

---

#### Story STORY-018: Develop Session 5 — Notifications & Team Communication
- **Description:** As a curriculum developer, I want to teach farmers how to manage GitHub notifications and communicate with team members
- **Work to do:**
  - [ ] Create slide deck: Watching repositories, Managing notification settings, @mentions, GitHub Discussions for Q&A
  - [ ] Develop hands-on lab: "Watch the farm repository, @mention a peer in an issue comment, check your notifications"
  - [ ] Write quick-reference guide and facilitation script
  - [ ] Apply accessibility features; save to `sessions/session-05/`
- **Acceptance criteria:**
  - [ ] Materials cover notification management and @mentions
  - [ ] Lab exercise involves peer interaction
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-05/` exists with all materials

**Story Points:** 8

---

#### Story STORY-019: Develop Session 6 — Basic Workflows & Templates
- **Description:** As a curriculum developer, I want to teach farmers how to use issue templates, saved replies, and project templates
- **Work to do:**
  - [ ] Create slide deck: Issue templates (pre-filled forms for common farm tasks), Saved replies for common responses, Project board templates, Repository templates
  - [ ] Develop hands-on lab: "Create an issue template for equipment maintenance requests"
  - [ ] Write quick-reference guide and facilitation script
  - [ ] Apply accessibility features; save to `sessions/session-06/`
- **Acceptance criteria:**
  - [ ] Materials cover issue templates, saved replies, project templates
  - [ ] Lab exercise produces a reusable issue template
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-06/` exists with all materials

**Story Points:** 8

---

### Epic EPIC-005: Sessions 7-9 Content Development
- **Owner:** Curriculum Developer
- **Duration:** 3 weeks
- **Priority:** P1 (High)
- **Dependencies:** EPIC-004
- **Phase exit criteria:** Sessions 7-9 fully developed, all pass accessibility checklist

#### Story STORY-020: Develop Session 7 — Introduction to GitHub Actions
- **Description:** As a curriculum developer, I want to introduce farmers to GitHub Actions automation concepts
- **Work to do:**
  - [ ] Create slide deck: What are Actions? (farm analogy: "automatic farm helpers"), When to automate?, Viewing workflow runs (read-only first), Understanding YAML basics (conceptual — show structure, don't require writing)
  - [ ] Develop hands-on lab: "View a pre-built workflow that sends a reminder when issues are overdue"
  - [ ] Write quick-reference guide: "GitHub Actions Overview"
  - [ ] Create facilitation script; apply accessibility; save to `sessions/session-07/`
- **Acceptance criteria:**
  - [ ] Slide deck introduces Actions conceptually without requiring coding skills
  - [ ] Lab exercise is read-only exploration of existing workflow
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-07/` exists; content treats YAML as read-only, not write

**Story Points:** 13

---

#### Story STORY-021: Develop Session 8 — Automating Farm Tasks
- **Description:** As a curriculum developer, I want to teach farmers how to set up simple automated workflows
- **Work to do:**
  - [ ] Create slide deck: Automated reminders for recurring tasks, Using starter workflow templates, Customizing simple Actions (changing schedule, notification targets)
  - [ ] Develop hands-on lab: "Enable a starter workflow that sends weekly reminders for equipment checks"
  - [ ] Write quick-reference guide: "Setting Up Your First Workflow"
  - [ ] Create facilitation script; apply accessibility; save to `sessions/session-08/`
- **Acceptance criteria:**
  - [ ] Lab exercise results in a working automated workflow
  - [ ] Instructions are step-by-step with no assumed coding knowledge
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-08/` exists; lab produces working workflow

**Story Points:** 13

---

#### Story STORY-022: Develop Session 9 — Advanced Projects & Roadmaps
- **Description:** As a curriculum developer, I want to teach advanced GitHub Projects features
- **Work to do:**
  - [ ] Create slide deck: Custom fields (date, dropdown, number), Iterations/sprints, Roadmap view, Linking projects to multiple repositories
  - [ ] Develop hands-on lab: "Build a seasonal farm roadmap using timeline view with custom fields for each crop/field"
  - [ ] Write quick-reference guide: "Advanced Projects Features"
  - [ ] Create facilitation script; apply accessibility; save to `sessions/session-09/`
- **Acceptance criteria:**
  - [ ] Slide deck covers custom fields, iterations, and roadmap view
  - [ ] Lab exercise produces a seasonal roadmap
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-09/` exists with all materials

**Story Points:** 8

---

### Epic EPIC-006: Sessions 10-12 Advanced Content
- **Owner:** Curriculum Developer
- **Duration:** 2 weeks
- **Priority:** P2 (Medium)
- **Dependencies:** EPIC-005
- **Phase exit criteria:** Sessions 10-12 fully developed, capstone project designed, train-the-trainer materials included

#### Story STORY-023: Develop Session 10 — GitHub Copilot Basics
- **Description:** As a curriculum developer, I want to introduce farmers to GitHub Copilot for AI-assisted work
- **Work to do:**
  - [ ] Create slide deck: What is Copilot? How to enable it, AI-assisted issue creation (drafting issue descriptions), Prompting best practices ("Ask Copilot to help write a farm task description")
  - [ ] Develop hands-on lab: "Use Copilot to help draft an issue for tracking spring planting tasks"
  - [ ] Write quick-reference guide: "Getting Started with Copilot"
  - [ ] Create facilitation script; apply accessibility; save to `sessions/session-10/`
- **Acceptance criteria:**
  - [ ] Slide deck introduces Copilot as a helpful assistant, not a replacement
  - [ ] Lab exercise demonstrates practical AI assistance for farm tasks
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-10/` exists with all materials

**Story Points:** 8

---

#### Story STORY-024: Develop Session 11 — GitHub Spark & Agents
- **Description:** As a curriculum developer, I want to introduce GitHub Spark and Agents features
- **Work to do:**
  - [ ] Create slide deck: What is GitHub Spark? Creating simple apps with Spark (e.g., a farm task dashboard), Introduction to GitHub Agents, How Agents assist with workflow
  - [ ] Develop hands-on lab: "Use Spark to create a simple farm weather checklist app"
  - [ ] Write quick-reference guide; create facilitation script; apply accessibility; save to `sessions/session-11/`
- **Acceptance criteria:**
  - [ ] Slide deck introduces Spark and Agents conceptually
  - [ ] Lab exercise produces a working Spark app
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-11/` exists with all materials

**Story Points:** 8

---

#### Story STORY-025: Develop Session 12 — Capstone Project & Train-the-Trainer
- **Description:** As a curriculum developer, I want learners to build a complete farm project and practice teaching peers
- **Work to do:**
  - [ ] Create capstone project brief: "Build a complete farm management system in GitHub" — repository with README, 5+ issues, project board, labels, at least 1 workflow
  - [ ] Create capstone rubric aligned with Bloom's Taxonomy "Create" level
  - [ ] Design peer teaching exercise: Each learner teaches one skill to a partner farmer (5-10 min each)
  - [ ] Create train-the-trainer coaching outline for high performers: facilitator guide walkthrough, practice session, observation checklist
  - [ ] Write facilitation script; apply accessibility; save to `sessions/session-12/`
- **Acceptance criteria:**
  - [ ] Capstone project brief and rubric created
  - [ ] Peer teaching exercise designed with clear instructions
  - [ ] Train-the-trainer coaching outline documented
  - [ ] Materials pass accessibility checklist
- **Verification:** `sessions/session-12/` exists with capstone brief, rubric, peer teaching plan, and train-the-trainer outline

**Story Points:** 13

---

### Epic EPIC-007: Farming Project Templates
- **Owner:** Curriculum Developer
- **Duration:** 2 weeks
- **Priority:** P1 (High)
- **Dependencies:** EPIC-003 (farm use case library validated)
- **Phase exit criteria:** 4-6 GitHub repository templates created, each tested by creating new repositories from them

#### Story STORY-026: Create Farm Task Tracker Template
- **Work to do:**
  - [ ] Create GitHub repository with: README explaining purpose and setup, Issue templates for common farm tasks (equipment repair, livestock check, field inspection), Labels (equipment, livestock, crops, maintenance, urgent, routine), Project board with columns (To Do, In Progress, Done)
  - [ ] Write setup instructions for farmers: "How to use this template"
  - [ ] Test by creating a new repository from the template
  - [ ] Save template to `templates/farm-task-tracker/`
- **Acceptance criteria:**
  - [ ] Template repository contains README, issue templates, labels config, project board
  - [ ] Template tested by creating new repo from it
  - [ ] Setup instructions included and written at grade 8 reading level
- **Verification:** Template directory exists; test repo creation succeeds

**Story Points:** 8

---

#### Story STORY-027: Create Planting Schedule Template
- **Work to do:**
  - [ ] Create GitHub repository with: README, Project board in timeline view, Issues for each field/crop with custom fields (planting date, expected harvest, status), Sample data for demonstration
  - [ ] Write setup instructions
  - [ ] Test template; save to `templates/planting-schedule/`
- **Acceptance criteria:**
  - [ ] Template uses timeline view with date-based custom fields
  - [ ] Sample data demonstrates realistic planting schedule
  - [ ] Template tested successfully
- **Verification:** Template directory exists with all files

**Story Points:** 8

---

#### Story STORY-028: Create Equipment Maintenance Log Template
- **Work to do:**
  - [ ] Create GitHub repository with: README, Issue templates for maintenance tasks (routine, repair, inspection), Labels (tractor, irrigation, fencing, tools), Photo upload instructions in issue template
  - [ ] Write setup instructions; test template; save to `templates/equipment-maintenance/`
- **Acceptance criteria:**
  - [ ] Template includes photo upload guidance in issue templates
  - [ ] Labels cover common equipment categories
  - [ ] Template tested successfully
- **Verification:** Template directory exists with all files

**Story Points:** 5

---

#### Story STORY-029: Create Grant Compliance Tracker Template
- **Work to do:**
  - [ ] Create GitHub repository with: README explaining how GitHub provides audit trail, Issues for compliance milestones, Project board tracking grant deliverables, Guidance on using commit history for documentation trail
  - [ ] Write setup instructions; test template; save to `templates/grant-compliance/`
- **Acceptance criteria:**
  - [ ] Template demonstrates audit trail capability via commit history
  - [ ] Issues represent realistic grant compliance milestones
  - [ ] Template tested successfully
- **Verification:** Template directory exists with all files

**Story Points:** 5

---

### Epic EPIC-008: Quick-Reference Guides & Job Aids
- **Owner:** Curriculum Developer
- **Duration:** 2 weeks
- **Priority:** P1 (High)
- **Dependencies:** EPIC-006 (all session content finalized)
- **Phase exit criteria:** All guides created, printer-friendly, pass accessibility checklist

#### Story STORY-030: Create GitHub Terminology Glossary
- **Work to do:**
  - [ ] Define 30+ GitHub terms in plain language with farm analogies (repository = digital barn, issue = work order, commit = field log entry, branch = crop experiment, pull request = sharing your harvest plan)
  - [ ] Include annotated screenshots for key terms
  - [ ] Format for both screen reading and printing (PDF-friendly)
  - [ ] Save to `guides/github-glossary.md` (and PDF export)
- **Acceptance criteria:**
  - [ ] Glossary includes 30+ terms with plain-language definitions and farm analogies
  - [ ] Screenshots included for visual learners
  - [ ] Printer-friendly format
- **Verification:** Glossary file exists with 30+ entries

**Story Points:** 5

---

#### Story STORY-031: Create Common Tasks Cheat Sheet
- **Work to do:**
  - [ ] Create one-page (front and back) quick-reference for: Create an issue, Add issue to project, Create a repository, Invite a collaborator, Create a project board, Upload a photo to an issue, Close an issue
  - [ ] Use numbered steps with annotated screenshots
  - [ ] Format as printable PDF (high contrast, large text)
  - [ ] Save to `guides/common-tasks-cheatsheet.md` (and PDF)
- **Acceptance criteria:**
  - [ ] Cheat sheet covers 7+ common tasks
  - [ ] Each task has numbered steps with screenshots
  - [ ] Fits on 1-2 printed pages
- **Verification:** Cheat sheet file exists; content covers listed tasks

**Story Points:** 5

---

#### Story STORY-032: Create Troubleshooting Guide
- **Work to do:**
  - [ ] Document common problems and solutions: "Can't find my repository" (check URL, bookmarks, organization), "Issue won't close" (check permissions), "Notifications overwhelming" (configure settings), "Can't upload photos" (file size, format), "Forgot my password" (reset flow), "Page looks different than instructor's" (GitHub UI updates)
  - [ ] Format as FAQ-style document with screenshots
  - [ ] Save to `guides/troubleshooting.md`
- **Acceptance criteria:**
  - [ ] Guide covers 10+ common problems with step-by-step solutions
  - [ ] Solutions include screenshots where helpful
  - [ ] Written at accessible reading level
- **Verification:** Troubleshooting guide exists with 10+ entries

**Story Points:** 5

---

#### Story STORY-033: Create Device-Specific Guides
- **Work to do:**
  - [ ] Create annotated screenshot guides showing key GitHub tasks on: Laptop/Desktop (primary), Tablet (iPad/Android), Smartphone (iPhone/Android)
  - [ ] Highlight device-specific differences: where buttons move, what features are limited on mobile, GitHub mobile app vs mobile web
  - [ ] Format each as 2-4 page printable guide
  - [ ] Save to `guides/device-laptop.md`, `guides/device-tablet.md`, `guides/device-phone.md`
- **Acceptance criteria:**
  - [ ] Guides created for laptop, tablet, and phone
  - [ ] Screenshots annotated with callouts
  - [ ] Device-specific limitations noted (e.g., "Project timeline view not available on phone")
- **Verification:** Three device guide files exist with annotated screenshots

**Story Points:** 8

---

## Phase 4: Implementation & Evaluation (Months 4-6)

### Epic EPIC-010: Training Delivery Infrastructure
- **Owner:** Curriculum Developer
- **Duration:** 1 week
- **Priority:** P1 (High)
- **Dependencies:** EPIC-003 (materials ready)
- **Phase exit criteria:** Demo environment set up, logistics confirmed, feedback surveys created

#### Story STORY-034: Set Up Demo GitHub Environment
- **Work to do:**
  - [ ] Create GitHub organization (e.g., `github4farms-training`) for demonstration purposes
  - [ ] Populate with sample farm repositories: farm-task-tracker (with issues, labels, project board), planting-schedule (with timeline project), equipment-log (with photo-containing issues)
  - [ ] Create demo issues and projects for live demonstrations during sessions
  - [ ] Set up learner accounts or prepare account creation walkthrough
  - [ ] Save setup documentation to `delivery/demo-environment-setup.md`
- **Acceptance criteria:**
  - [ ] Demo organization created with 3+ sample repositories
  - [ ] Sample data is realistic and uses farming scenarios
  - [ ] Account creation process documented
- **Verification:** GitHub organization exists with populated repositories

**Story Points:** 5

---

#### Story STORY-035: Prepare Delivery Equipment & Logistics
- **Work to do:**
  - [ ] Test projector/screen with slide decks (verify text readability at back of room, contrast, font size)
  - [ ] Arrange seating for pair work (tables for 2, power outlets accessible)
  - [ ] Print handouts: cheat sheets, glossary, troubleshooting guide (one set per learner)
  - [ ] Set up backup internet (mobile hotspot, test with 10+ simultaneous users if possible)
  - [ ] Prepare sign-in sheets, name tags, feedback survey forms
  - [ ] Write `delivery/logistics-checklist.md` with setup and teardown procedures
- **Acceptance criteria:**
  - [ ] Projector tested with slide decks
  - [ ] Seating arranged for pair work
  - [ ] Handouts printed (or digital copies distributed)
  - [ ] Backup internet device available and tested
- **Verification:** Logistics checklist exists; all items marked ready

**Story Points:** 3

---

#### Story STORY-036: Create Feedback Survey Forms
- **Work to do:**
  - [ ] Design Kirkpatrick Level 1 post-session survey: satisfaction, relevance, pacing, confidence, NPS (0-10), open feedback (per instrument in SUCCESS-METRICS.md Appendix A)
  - [ ] Create Kirkpatrick Level 2 instructor assessment rubric: observation checklist of skills demonstrated during hands-on practice (per Appendix B)
  - [ ] Set up Kirkpatrick Level 3 tracking plan: GitHub activity monitoring at 30/60/180 days, follow-up survey (per Appendix D)
  - [ ] Draft Kirkpatrick Level 4 interview questions: semi-structured 20-30 min interview protocol for 6-month follow-up (per Appendix E)
  - [ ] Create both paper and digital versions (Google Forms or equivalent) for accessibility
  - [ ] Save all instruments to `delivery/evaluation/`
- **Acceptance criteria:**
  - [ ] L1 survey created in accessible format (paper + digital)
  - [ ] L2 assessment rubric created with per-session skill checklists
  - [ ] L3 tracking plan documented with timeline and data sources
  - [ ] L4 interview protocol drafted
- **Verification:** `delivery/evaluation/` directory contains all four instrument files

**Story Points:** 5

---

### Epic EPIC-011: Session Delivery Block 1 (Sessions 1-4)
- **Owner:** Curriculum Developer
- **Duration:** 4 weeks (bi-weekly sessions, March-April)
- **Priority:** P0 (Critical)
- **Dependencies:** EPIC-010 (infrastructure ready)
- **Phase exit criteria:** Sessions 1-4 delivered with 75%+ attendance, feedback collected, assessments completed

#### Story STORY-037: Deliver Session 1 — Introduction to GitHub & Repositories
- **Work to do:**
  - [ ] Set up room: projector, seating for pairs, handouts distributed, sign-in sheet, backup internet
  - [ ] Deliver session following `sessions/session-01/` facilitation script
  - [ ] Monitor cognitive load and pacing: watch for confusion signals, adjust tempo
  - [ ] Collect L1 feedback survey at session end
  - [ ] Conduct L2 hands-on assessment during practice portion
  - [ ] Write session debrief notes: `delivery/session-01-debrief.md` (what worked, what to adjust, timing accuracy)
- **Acceptance criteria:**
  - [ ] Session delivered following facilitation script
  - [ ] Attendance recorded
  - [ ] L1 feedback survey collected from 80%+ of attendees
  - [ ] L2 assessment data recorded
  - [ ] Debrief notes documented
- **Verification:** Debrief file exists with attendance count, feedback summary, and adjustment notes

**Story Points:** 5

---

#### Stories STORY-038, STORY-039, STORY-040: Deliver Sessions 2, 3, 4
- **Work to do:** Same structure as STORY-037 for each respective session
- **Context files:** `sessions/session-02/`, `sessions/session-03/`, `sessions/session-04/` respectively
- **Acceptance criteria:** Same as STORY-037 for each session
- **Verification:** Debrief files exist for each session

**Story Points:** 5 each (15 total)

---

### Epic EPIC-012: Session Delivery Block 2 (Sessions 5-8)
- **Owner:** Curriculum Developer
- **Duration:** 4 weeks (bi-weekly sessions, July-August)
- **Priority:** P0 (Critical)
- **Dependencies:** EPIC-011, Planting season break (May-June)
- **Phase exit criteria:** Recap delivered, Sessions 5-8 delivered with 70%+ attendance

#### Story STORY-041: Deliver Recap Session Post-Planting Break
- **Work to do:**
  - [ ] Prepare 30-minute recap covering Sessions 1-4 key concepts: repository navigation, issue creation, project boards, collaboration basics
  - [ ] Create quick hands-on refresher exercises to rebuild muscle memory
  - [ ] Conduct Q&A on any GitHub usage learners attempted during the break
  - [ ] Re-energize cohort: celebrate returning learners, acknowledge the gap, normalize forgetting
  - [ ] Assess knowledge retention (informal): "Show me how to create an issue" spot-checks
  - [ ] Write debrief notes: `delivery/recap-post-planting-debrief.md`
- **Acceptance criteria:**
  - [ ] Recap session delivered covering Sessions 1-4 key concepts
  - [ ] Knowledge retention informally assessed
  - [ ] Debrief notes documented
- **Verification:** Recap debrief file exists

**Story Points:** 3

---

#### Stories STORY-042 through STORY-045: Deliver Sessions 5, 6, 7, 8
- **Work to do:** Same delivery structure as STORY-037 for each session
- **Context files:** `sessions/session-05/` through `sessions/session-08/`
- **Acceptance criteria:** Same as STORY-037; 70%+ attendance target (account for some attrition)
- **Verification:** Debrief files exist for each session

**Story Points:** 5 each (20 total)

---

### Epic EPIC-013: Session Delivery Block 3 (Sessions 9-12)
- **Owner:** Curriculum Developer
- **Duration:** 4 weeks (bi-weekly sessions, November-December)
- **Priority:** P1 (High)
- **Dependencies:** EPIC-012, Harvest season break (September-October)
- **Phase exit criteria:** Recap delivered, Sessions 9-12 delivered, capstone projects completed, train-the-trainer candidates identified

#### Story STORY-046: Deliver Recap Session Post-Harvest Break
- **Work to do:** Same structure as STORY-041, covering Sessions 5-8 key concepts
- **Verification:** Recap debrief file exists

**Story Points:** 3

---

#### Stories STORY-047 through STORY-050: Deliver Sessions 9, 10, 11, 12
- **Work to do:** Same delivery structure as STORY-037 for each session
- **Note:** Session 12 includes capstone project completion and peer teaching exercise — allocate extra time
- **Context files:** `sessions/session-09/` through `sessions/session-12/`
- **Verification:** Debrief files exist for each session; Session 12 debrief includes capstone completion rate and train-the-trainer candidate notes

**Story Points:** 5 each (Session 12 = 8 points); 23 total

---

### Epic EPIC-014: Assessment & Evaluation
- **Owner:** Curriculum Developer
- **Duration:** Ongoing during delivery + 6 months post-training
- **Priority:** P0 (Critical)
- **Dependencies:** EPIC-011 (delivery begins)
- **Phase exit criteria:** All four Kirkpatrick levels measured and documented

#### Story STORY-051: Collect Kirkpatrick Level 1 (Reaction) Data
- **Work to do:**
  - [ ] Distribute L1 feedback survey after each session (paper or digital)
  - [ ] Compile responses into tracking spreadsheet or document
  - [ ] Analyze satisfaction and engagement trends across sessions
  - [ ] Document common themes: pacing feedback, relevance ratings, confidence progression, NPS trends
  - [ ] Write `evaluation/kirkpatrick-L1-report.md`
- **Acceptance criteria:**
  - [ ] L1 data collected from 80%+ of learners across all sessions
  - [ ] Trend analysis documented (satisfaction improving, declining, or stable)
  - [ ] Common feedback themes identified
- **Verification:** L1 report exists with data from all delivered sessions

**Story Points:** 5

---

#### Story STORY-052: Conduct Kirkpatrick Level 2 (Learning) Assessments
- **Work to do:**
  - [ ] Use hands-on demonstration checklists during each session to assess skill acquisition
  - [ ] Track pass rates per learning objective per session
  - [ ] Identify struggling learners for additional support (offer one-on-one tutoring)
  - [ ] Write `evaluation/kirkpatrick-L2-report.md` with pass rates and intervention notes
- **Acceptance criteria:**
  - [ ] L2 assessment data collected for all sessions
  - [ ] Pass rates documented per session and per learning objective
  - [ ] Struggling learners identified and support offered
- **Verification:** L2 report exists with per-session pass rate data

**Story Points:** 8

---

#### Story STORY-053: Track Kirkpatrick Level 3 (Behavior) Post-Training
- **Work to do:**
  - [ ] Monitor GitHub activity at 30, 60, 180 days post-final session: repositories created/modified, issues created/closed, projects used, comments made
  - [ ] Distribute 60-day usage survey (per instrument in SUCCESS-METRICS.md Appendix D)
  - [ ] Interview learners about integration of GitHub into farm operations
  - [ ] Document usage patterns and barriers to adoption
  - [ ] Write `evaluation/kirkpatrick-L3-report.md`
- **Acceptance criteria:**
  - [ ] GitHub activity tracked at 30, 60, 180 days
  - [ ] 60-day survey distributed and responses collected
  - [ ] Usage patterns and barriers documented
- **Verification:** L3 report exists with quantified usage data at each interval

**Story Points:** 8

---

#### Story STORY-054: Measure Kirkpatrick Level 4 (Results) Farm Outcomes
- **Work to do:**
  - [ ] Conduct 6-month follow-up interviews using semi-structured protocol (per SUCCESS-METRICS.md Appendix E)
  - [ ] Collect stories of farm productivity improvements (time saved, better collaboration, compliance achieved)
  - [ ] Quantify outcomes where possible (e.g., "2 hours/week saved on record-keeping")
  - [ ] Write 3+ case studies documenting specific improvements
  - [ ] Write `evaluation/kirkpatrick-L4-report.md` with case studies and impact summary
- **Acceptance criteria:**
  - [ ] 6-month interviews conducted with available learners
  - [ ] 3+ documented farm productivity improvements
  - [ ] Case studies written with farmer quotes and specific outcomes
- **Verification:** L4 report exists with 3+ case studies

**Story Points:** 8

---

### Epic EPIC-015: Iteration & Train-the-Trainer
- **Owner:** Curriculum Developer
- **Duration:** Ongoing post-delivery
- **Priority:** P2 (Medium)
- **Dependencies:** EPIC-013 (all delivery complete), EPIC-014 (evaluation data available)
- **Phase exit criteria:** Lessons learned documented, curriculum revised, 1+ train-the-trainer candidate identified

#### Story STORY-055: Analyze Evaluation Data and Document Lessons Learned
- **Work to do:**
  - [ ] Synthesize Kirkpatrick L1-L4 data into actionable insights
  - [ ] Identify what worked well (celebrate wins: high engagement sessions, effective exercises, strong retention)
  - [ ] Identify what to improve (pain points: cognitive overload areas, low-satisfaction sessions, accessibility gaps)
  - [ ] Prioritize revisions for next cohort (must-fix, should-fix, nice-to-have)
  - [ ] Write `evaluation/lessons-learned.md` with insights, celebrations, and prioritized improvement list
- **Acceptance criteria:**
  - [ ] Lessons learned document created with data-driven insights
  - [ ] What worked and what to improve clearly identified
  - [ ] Revision priorities ranked for next cohort
- **Verification:** Lessons learned document exists with prioritized action items

**Story Points:** 5

---

#### Story STORY-056: Revise Curriculum for Next Cohort
- **Work to do:**
  - [ ] Simplify overly complex sessions based on L1 pacing feedback and L2 pass rate data
  - [ ] Add scaffolding to challenging concepts (more guided practice steps, additional examples)
  - [ ] Update farm scenarios based on learner feedback (use real farm examples from cohort 1 if learners consent)
  - [ ] Refresh all screenshots for any GitHub UI changes
  - [ ] Re-run accessibility audit on revised materials
  - [ ] Update CHANGELOG.md with revision summary
- **Acceptance criteria:**
  - [ ] All high-priority revisions implemented
  - [ ] Accessibility audit confirms 90%+ compliance on revised materials
  - [ ] CHANGELOG.md updated
- **Verification:** Revised session materials exist; CHANGELOG.md shows revision entry

**Story Points:** 13

---

#### Story STORY-057: Identify Train-the-Trainer Candidates
- **Work to do:**
  - [ ] Review L2 assessment data to identify top-performing learners (consistent 90%+ pass rates)
  - [ ] Assess communication and leadership skills observed during peer exercises
  - [ ] Approach 1-2 high performers about interest in teaching next cohort
  - [ ] Document candidate profiles in `evaluation/train-the-trainer-candidates.md`
- **Acceptance criteria:**
  - [ ] At least 1 candidate identified based on performance data
  - [ ] Candidate expressed interest in train-the-trainer role
  - [ ] Candidate profile documented
- **Verification:** Candidate document exists with at least 1 profiled learner

**Story Points:** 3

---

#### Story STORY-058: Coach Train-the-Trainer Candidates
- **Work to do:**
  - [ ] Provide complete facilitator guides and scripts to candidates
  - [ ] Walk candidates through session preparation process
  - [ ] Conduct practice teaching session: candidate delivers 15-30 min of Session 1 or 2 to instructor, receive feedback
  - [ ] Support candidate in co-delivering 1+ sessions with mentor observation during next cohort
  - [ ] Create coaching log: `evaluation/train-the-trainer-coaching-log.md`
- **Acceptance criteria:**
  - [ ] Facilitator guides provided to candidates
  - [ ] Practice teaching session completed with feedback
  - [ ] Candidate ready to co-deliver at least 1 session
- **Verification:** Coaching log exists with practice session notes and readiness assessment

**Story Points:** 13
