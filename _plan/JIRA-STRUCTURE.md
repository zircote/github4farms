# JIRA Structure: GitHub Training Curriculum for Farmers

## Epic Hierarchy

```mermaid
mindmap
  root((GitHub Training<br/>Curriculum))
    Phase 1: Preparation
      EPIC-001[Project Initiation<br/>& Research]
      EPIC-002[Curriculum Design<br/>& Planning]
    Phase 2: Design
      EPIC-003[Sessions 1-3<br/>Content Prototype]
      EPIC-009[Accessibility<br/>Compliance & Testing]
    Phase 3: Development
      EPIC-004[Sessions 4-6<br/>Content Development]
      EPIC-005[Sessions 7-9<br/>Content Development]
      EPIC-006[Sessions 10-12<br/>Advanced Content]
      EPIC-007[Farming Project<br/>Templates]
      EPIC-008[Quick-Reference<br/>Guides & Job Aids]
    Phase 4: Delivery
      EPIC-010[Training Delivery<br/>Infrastructure]
      EPIC-011[Session Delivery<br/>Block 1 (1-4)]
      EPIC-012[Session Delivery<br/>Block 2 (5-8)]
      EPIC-013[Session Delivery<br/>Block 3 (9-12)]
      EPIC-014[Assessment<br/>& Evaluation]
      EPIC-015[Iteration &<br/>Train-the-Trainer]
```

---

## Phase 1: Preparation & Analysis (Weeks 1-4)

### EPIC-001: Project Initiation & Research

**Owner:** Curriculum Developer
**Duration:** 2 weeks
**Priority:** P0 (Critical)
**Dependencies:** None

**Description:** Establish project foundation through research, stakeholder analysis, and baseline documentation. Understand learner needs, constraints, and existing resources.

**Acceptance Criteria:**
- [ ] Learner needs survey created and distributed (or proxy analysis completed)
- [ ] Existing GitHub training materials reviewed and gap analysis documented
- [ ] Farm use case library created with 10+ scenarios
- [ ] Project constraints documented (budget, timeline, team, compliance, devices)
- [ ] Stakeholder map created (farmers, extension experts, accessibility consultants)

**Stories:**

#### STORY-001: Conduct Learner Needs Assessment
**As a** curriculum developer
**I want** to understand farmers' technology access, skill levels, and availability
**So that** I can design training that meets their actual needs and constraints

**Tasks:**
- [ ] Create survey questions (device access, prior tech experience, seasonal availability, learning preferences)
- [ ] Distribute survey to target farmer cohort (or conduct proxy analysis with extension educators)
- [ ] Analyze responses and identify common patterns (technology anxiety, device diversity, seasonal conflicts)
- [ ] Document findings in learner profile document

**Acceptance Criteria:**
- [ ] Survey completed by 5+ farmers or proxy analysis completed
- [ ] Learner profile document includes: technology access breakdown, skill level distribution, seasonal availability map
- [ ] Key insights documented (e.g., "60% use smartphones primarily," "100% unavailable May-June")

**Story Points:** 5

---

#### STORY-002: Research Existing GitHub Training Resources
**As a** curriculum developer
**I want** to review existing GitHub training materials
**So that** I can identify gaps for agricultural audiences and reuse applicable content

**Tasks:**
- [ ] Review GitHub Learning Pathways, Microsoft Learn GitHub modules, GitHub Skills
- [ ] Analyze existing materials for agricultural relevance (none expected)
- [ ] Identify reusable visuals, terminology, exercises
- [ ] Document gaps (no farming scenarios, assumes developer context, no accessibility focus)

**Acceptance Criteria:**
- [ ] Gap analysis document created comparing existing materials to farmer needs
- [ ] List of reusable resources compiled (GitHub terminology, interface screenshots, etc.)
- [ ] Recommendation documented: "Build custom curriculum; existing materials not suitable"

**Story Points:** 3

---

#### STORY-003: Build Farm Use Case Library
**As a** curriculum developer
**I want** to identify 10+ farming scenarios where GitHub solves real problems
**So that** I can make every training exercise relevant and practical

**Tasks:**
- [ ] Brainstorm farm management challenges (task tracking, record-keeping, team coordination, compliance)
- [ ] Map GitHub features to farm scenarios (repos for field data, issues for equipment repairs, projects for planting schedules)
- [ ] Document 10+ use cases with context and GitHub solution
- [ ] Validate use cases with agricultural extension expert or farmer (if available)

**Acceptance Criteria:**
- [ ] Farm use case library document includes 10+ scenarios
- [ ] Each use case includes: Farm problem, GitHub feature used, Expected outcome, Difficulty level (basic/intermediate/advanced)
- [ ] Use cases cover diverse farm types (crops, livestock, equipment, compliance)

**Examples:**
- "Track planting schedule by field using GitHub Projects with timeline view"
- "Create issues for equipment maintenance tasks with photo attachments"
- "Use repository for grant compliance documentation with commit history as audit trail"

**Story Points:** 5

---

#### STORY-004: Create Project Planning Artifacts
**As a** curriculum developer
**I want** to publish PROJECT-PLAN.md, JIRA-STRUCTURE.md, RISK-REGISTER.md, and other planning documents
**So that** the project has clear scope, timeline, and risk management from the start

**Tasks:**
- [ ] Write PROJECT-PLAN.md (phases, timeline, ROI, risks, next steps)
- [ ] Write JIRA-STRUCTURE.md (this document - epics, stories, sprints)
- [ ] Write RISK-REGISTER.md (technology anxiety, seasonal conflicts, accessibility, single point of failure)
- [ ] Write DEPENDENCY-ANALYSIS.md (critical path, parallel tracks, bottlenecks)
- [ ] Write RACI-CHART.md (single-person team assignments)

**Acceptance Criteria:**
- [ ] All planning artifacts published to repository root
- [ ] Cross-references between documents are accurate
- [ ] Planning artifacts follow template quality standards (Mermaid diagrams, tables, cross-links)

**Story Points:** 13

---

### EPIC-002: Curriculum Design & Planning

**Owner:** Curriculum Developer
**Duration:** 2 weeks
**Priority:** P0 (Critical)
**Dependencies:** EPIC-001

**Description:** Design curriculum structure, learning objectives, and session outlines. Apply instructional design frameworks (ADDIE, Bloom's Taxonomy, Kolb's Cycle) to create a coherent learning progression.

**Acceptance Criteria:**
- [ ] Learning objectives defined for all 8-12 sessions using Bloom's Taxonomy verbs
- [ ] Session outline template created following Kolb's Experiential Learning Cycle
- [ ] Content sequenced from basic (Remember: "What is a repository?") to advanced (Create: "Build your own farm project")
- [ ] Accessibility requirements integrated into session template
- [ ] Seasonal scheduling plan created with blackout periods identified

**Stories:**

#### STORY-005: Define Learning Objectives for All Sessions
**As a** curriculum developer
**I want** to write measurable learning objectives for each of 8-12 sessions
**So that** learners know what they'll achieve and I can assess skill acquisition

**Tasks:**
- [ ] Map curriculum to Bloom's Taxonomy progression (Sessions 1-2: Remember/Understand; 3-6: Apply/Analyze; 7-12: Evaluate/Create)
- [ ] Write 3-5 learning objectives per session using action verbs (navigate, create, design, evaluate, build)
- [ ] Ensure objectives are measurable via hands-on demonstrations
- [ ] Validate progression: each session builds on previous session skills

**Acceptance Criteria:**
- [ ] Learning objectives document includes 3-5 objectives per session (24-60 total)
- [ ] Objectives use Bloom's Taxonomy verbs appropriate to cognitive level
- [ ] Progression validated: Session 1 is foundational, Session 12 requires cumulative skills

**Example Objectives:**
- Session 1: "Learners will be able to navigate to a repository and identify its key components (README, files, issues, projects)"
- Session 6: "Learners will be able to design a project board workflow for a farm task and assign issues to team members"
- Session 12: "Learners will be able to create a complete farm management system in GitHub and train a peer farmer on its use"

**Story Points:** 8

---

#### STORY-006: Create Session Outline Template
**As a** curriculum developer
**I want** a reusable session structure following Kolb's Experiential Learning Cycle
**So that** every session follows a consistent, research-backed format

**Tasks:**
- [ ] Design template with sections: Learning Objectives, Why This Matters (farm context), Instructor Demo, Guided Practice, Independent Practice, Reflection, Application Assignment, Feedback Survey
- [ ] Include timing estimates for 2-3 hour sessions with breaks
- [ ] Add accessibility features checklist (captions, alt text, high contrast, keyboard navigation)
- [ ] Include facilitation notes section ("I do, we do, you do" scripts)

**Acceptance Criteria:**
- [ ] Session outline template document created
- [ ] Template includes all Kolb's Cycle stages (Concrete Experience, Reflective Observation, Abstract Conceptualization, Active Experimentation)
- [ ] Timing breakdown allocates 60-70% to hands-on practice (not lecture)
- [ ] Accessibility checklist integrated

**Story Points:** 5

---

#### STORY-007: Plan Seasonal Scheduling with Blackout Periods
**As a** curriculum developer
**I want** to create a delivery calendar that avoids planting and harvest seasons
**So that** farmers can attend without conflicts and knowledge retention is maximized

**Tasks:**
- [ ] Identify planting season blackout (May-June) and harvest season blackout (Sept-Oct)
- [ ] Design 3 training blocks: Block 1 (Sessions 1-4, March-April), Block 2 (Sessions 5-8, July-Aug), Block 3 (Sessions 9-12, Nov-Dec)
- [ ] Plan recap sessions after each gap to reinforce prior learning
- [ ] Develop asynchronous resources (video walkthroughs, guides) for makeup work during gaps

**Acceptance Criteria:**
- [ ] Seasonal scheduling calendar created showing 3 blocks with dates
- [ ] Blackout periods documented and training sessions scheduled around them
- [ ] Recap session plans created for post-gap sessions
- [ ] Asynchronous resource plan documented

**Story Points:** 3

---

#### STORY-008: Design Accessibility Compliance Checklist
**As a** curriculum developer
**I want** a comprehensive checklist of WCAG 2.2 Level AA and Section 508 requirements
**So that** every material I create meets accessibility standards

**Tasks:**
- [ ] Research WCAG 2.2 Level AA success criteria relevant to training materials
- [ ] Document Section 508 requirements for documents, slides, videos
- [ ] Create checklist with categories: Visual (contrast, fonts), Auditory (captions, transcripts), Navigation (keyboard access), Content (alt text, clear language)
- [ ] Identify tools for accessibility testing (WAVE, axe DevTools, screen readers)

**Acceptance Criteria:**
- [ ] Accessibility compliance checklist document created with 20+ checkpoints
- [ ] Checklist covers all material types (slides, videos, documents, exercises)
- [ ] Testing tools identified and documented
- [ ] Checklist integrated into session outline template

**Story Points:** 5

---

## Phase 2: Iterative Design (Weeks 5-10)

### EPIC-003: Sessions 1-3 Content Development (Prototype)

**Owner:** Curriculum Developer
**Duration:** 6 weeks
**Priority:** P0 (Critical)
**Dependencies:** EPIC-002

**Description:** Rapidly prototype first 3 sessions (Introduction, Issues, Projects) with full materials (slides, labs, assessments, guides). Test with pilot learner(s) and iterate based on feedback.

**Acceptance Criteria:**
- [ ] Session 1 (Intro to GitHub & Repositories) fully developed with slides, lab, guide, facilitation script
- [ ] Session 2 (GitHub Issues) fully developed
- [ ] Session 3 (GitHub Projects) fully developed
- [ ] Accessibility audit shows 90%+ compliance for all Session 1-3 materials
- [ ] Pilot testing completed with 1-2 learners or expert reviewers
- [ ] Materials iterated based on pilot feedback

**Stories:**

#### STORY-009: Develop Session 1 - Introduction to GitHub & Repositories
**As a** curriculum developer
**I want** to create Session 1 materials teaching farmers what GitHub is and how to navigate repositories
**So that** learners build foundational knowledge and confidence

**Tasks:**
- [ ] Create slide deck (20-25 slides): What is GitHub? Why use it for farming? Repository tour, README files, navigating files
- [ ] Develop hands-on lab: "Explore a sample farm repository - find the planting schedule, read the equipment log"
- [ ] Write quick-reference guide: "GitHub terminology cheat sheet"
- [ ] Create facilitation script with "I do, we do, you do" progression
- [ ] Add accessibility features: alt text on all images, high-contrast theme, large fonts (18pt+)

**Acceptance Criteria:**
- [ ] Slide deck created following session template structure
- [ ] Lab exercise uses farming scenario from use case library
- [ ] Quick-reference guide is 1-2 pages, printer-friendly
- [ ] Facilitation script includes timing, key talking points, troubleshooting tips
- [ ] Materials pass accessibility checklist (captions on videos, alt text, contrast ratio 4.5:1+)

**Story Points:** 13

---

#### STORY-010: Develop Session 2 - GitHub Issues for Task Tracking
**As a** curriculum developer
**I want** to teach farmers how to create, manage, and comment on Issues
**So that** they can use GitHub for farm task tracking

**Tasks:**
- [ ] Create slide deck: What are Issues? When to use them? Creating an issue, Adding labels and assignees, Commenting and closing
- [ ] Develop hands-on lab: "Create an issue for a broken fence repair. Add a photo, assign to yourself, comment with update, close when done."
- [ ] Write quick-reference guide: "Issue creation step-by-step"
- [ ] Create facilitation script
- [ ] Add accessibility features

**Acceptance Criteria:**
- [ ] Slide deck created with farm examples (equipment repairs, livestock health alerts, planting tasks)
- [ ] Lab exercise includes photo upload (test across devices)
- [ ] Quick-reference guide includes screenshots with clear callouts
- [ ] Materials pass accessibility checklist

**Story Points:** 13

---

#### STORY-011: Develop Session 3 - GitHub Projects for Planning
**As a** curriculum developer
**I want** to teach farmers how to use GitHub Projects for farm planning
**So that** they can organize tasks visually and track progress

**Tasks:**
- [ ] Create slide deck: What are Projects? Board vs Table vs Timeline views, Adding issues to projects, Organizing with columns/fields
- [ ] Develop hands-on lab: "Create a project board for spring planting. Add issues for each field. Organize by status (To Do, In Progress, Done)."
- [ ] Write quick-reference guide: "Project board setup checklist"
- [ ] Create facilitation script
- [ ] Add accessibility features

**Acceptance Criteria:**
- [ ] Slide deck demonstrates all 3 view types (Board, Table, Timeline)
- [ ] Lab exercise produces functional project board for farm scenario
- [ ] Quick-reference guide includes when to use each view type
- [ ] Materials pass accessibility checklist

**Story Points:** 13

---

#### STORY-012: Conduct Accessibility Audit of Sessions 1-3
**As a** curriculum developer
**I want** to test Session 1-3 materials with accessibility tools
**So that** I confirm WCAG 2.2 Level AA compliance before pilot testing

**Tasks:**
- [ ] Run WAVE accessibility checker on slide decks (exported as PDFs)
- [ ] Test videos with screen reader (NVDA or JAWS)
- [ ] Check color contrast ratios using WebAIM Contrast Checker
- [ ] Test keyboard navigation for all interactive elements
- [ ] Review alt text quality and completeness

**Acceptance Criteria:**
- [ ] Accessibility audit report created documenting findings and fixes
- [ ] 90%+ of checklist items pass
- [ ] Any failures remediated and re-tested
- [ ] Audit report includes screenshots of passing tests

**Story Points:** 5

---

#### STORY-013: Pilot Test Session 1-3 Materials
**As a** curriculum developer
**I want** to test prototype materials with 1-2 farmers or agricultural educators
**So that** I validate approach, identify confusion points, and assess cognitive load

**Tasks:**
- [ ] Recruit 1-2 pilot testers (farmers or agricultural extension educators)
- [ ] Deliver Session 1 (or provide materials for self-review)
- [ ] Collect feedback: Was content clear? Was pacing appropriate? Were farm examples relevant? Was technology overwhelming?
- [ ] Observe cognitive load: Did testers struggle with concepts? Were there too many new terms?
- [ ] Document lessons learned and needed revisions

**Acceptance Criteria:**
- [ ] Pilot testing completed with 1-2 testers
- [ ] Feedback collected via survey or interview
- [ ] Cognitive load assessment documented (low/medium/high per session)
- [ ] Revision list created with priority rankings

**Story Points:** 8

---

#### STORY-014: Iterate Session 1-3 Based on Pilot Feedback
**As a** curriculum developer
**I want** to revise prototype materials based on pilot testing findings
**So that** materials are refined before replicating structure to Sessions 4-12

**Tasks:**
- [ ] Review pilot feedback and cognitive load observations
- [ ] Revise slides to simplify overly complex sections
- [ ] Adjust lab exercises if too difficult or too easy
- [ ] Update facilitation scripts with troubleshooting notes from pilot
- [ ] Re-run accessibility audit on revised materials

**Acceptance Criteria:**
- [ ] All high-priority revisions implemented
- [ ] Revised materials re-tested with pilot tester if major changes made
- [ ] Session template updated with lessons learned
- [ ] Final Session 1-3 materials ready for delivery

**Story Points:** 5

---

### EPIC-009: Accessibility Compliance & Testing

**Owner:** Curriculum Developer
**Duration:** Ongoing (integrated into all development epics)
**Priority:** P0 (Critical)
**Dependencies:** EPIC-002 (checklist creation)

**Description:** Ensure all materials meet WCAG 2.2 Level AA and Section 508 standards. Conduct audits, remediate failures, and test with assistive technologies.

**Acceptance Criteria:**
- [ ] Accessibility compliance checklist applied to all materials
- [ ] 90%+ of materials pass WCAG 2.2 Level AA automated tests
- [ ] All videos include captions and transcripts
- [ ] All images include descriptive alt text
- [ ] Materials tested with screen readers and keyboard-only navigation

**Stories:**

#### STORY-015: Create Accessibility Testing Workflow
**As a** curriculum developer
**I want** a repeatable process for testing accessibility
**So that** every material I create is evaluated consistently

**Tasks:**
- [ ] Document step-by-step testing workflow: 1) Run WAVE/axe, 2) Test screen reader, 3) Check contrast, 4) Verify captions, 5) Test keyboard nav
- [ ] Create testing log template for documenting results
- [ ] Identify remediation resources (WCAG quick reference, alt text best practices)
- [ ] Schedule accessibility testing checkpoints in development timeline

**Acceptance Criteria:**
- [ ] Accessibility testing workflow document created
- [ ] Testing log template ready for use
- [ ] Workflow integrated into session development tasks

**Story Points:** 3

---

#### STORY-016: Implement Universal Design for Learning (UDL) Features
**As a** curriculum developer
**I want** to provide multiple means of representation, action, and engagement
**So that** learners with diverse needs and preferences can all succeed

**Tasks:**
- [ ] Add visual + verbal + hands-on components to every session (not just slides)
- [ ] Provide choice in practice scenarios (crops vs livestock vs equipment)
- [ ] Design assessments allowing multiple demonstration methods (verbal, written, hands-on)
- [ ] Create motivational opening ("Why this matters for YOUR farm") for each session
- [ ] Develop peer pairing strategy for varied skill levels

**Acceptance Criteria:**
- [ ] Every session includes at least 3 representation modes (visual, verbal, kinesthetic)
- [ ] Learners have choice in 2+ aspects per session (practice scenario, demonstration method)
- [ ] UDL principles checklist completed for all materials

**Story Points:** 8

---

## Phase 3: Iterative Development (Weeks 11-18)

### EPIC-004: Sessions 4-6 Content Development

**Owner:** Curriculum Developer
**Duration:** 3 weeks
**Priority:** P1 (High)
**Dependencies:** EPIC-003 (validated session template)

**Description:** Develop Sessions 4-6 covering Collaboration, Notifications, and Basic Workflows using validated session template.

**Acceptance Criteria:**
- [ ] Session 4 (Collaboration & Pull Requests) fully developed
- [ ] Session 5 (Notifications & Team Communication) fully developed
- [ ] Session 6 (Basic Workflows & Templates) fully developed
- [ ] All materials pass accessibility checklist
- [ ] Materials consistent with Session 1-3 structure and branding

**Stories:**

#### STORY-017: Develop Session 4 - Collaboration & Pull Requests (Simplified)
**Tasks:** [Similar structure to STORY-009, focused on forking, cloning (web UI), basic collaboration without CLI]
**Story Points:** 13

#### STORY-018: Develop Session 5 - Notifications & Team Communication
**Tasks:** [Watching repos, managing notifications, @mentions, Discussions]
**Story Points:** 8

#### STORY-019: Develop Session 6 - Basic Workflows & Templates
**Tasks:** [Using issue templates, saved replies, project templates]
**Story Points:** 8

---

### EPIC-005: Sessions 7-9 Content Development

**Owner:** Curriculum Developer
**Duration:** 3 weeks
**Priority:** P1 (High)
**Dependencies:** EPIC-004

**Description:** Develop Sessions 7-9 covering GitHub Actions automation, advanced Projects features, and workflow optimization.

**Acceptance Criteria:**
- [ ] Session 7 (Introduction to GitHub Actions) fully developed
- [ ] Session 8 (Automating Farm Tasks) fully developed
- [ ] Session 9 (Advanced Projects & Roadmaps) fully developed
- [ ] All materials pass accessibility checklist

**Stories:**

#### STORY-020: Develop Session 7 - Introduction to GitHub Actions
**Tasks:** [What are Actions? When to automate? Viewing workflow runs, Understanding YAML basics (conceptual, not coding)]
**Story Points:** 13

#### STORY-021: Develop Session 8 - Automating Farm Tasks
**Tasks:** [Setting up automated reminders, Using starter workflows, Customizing simple Actions]
**Story Points:** 13

#### STORY-022: Develop Session 9 - Advanced Projects & Roadmaps
**Tasks:** [Custom fields, Iterations, Roadmap view, Linking to repositories]
**Story Points:** 8

---

### EPIC-006: Sessions 10-12 Advanced Content

**Owner:** Curriculum Developer
**Duration:** 2 weeks
**Priority:** P2 (Medium)
**Dependencies:** EPIC-005

**Description:** Develop Sessions 10-12 covering advanced/emerging features (Copilot, Spark, Agents) and train-the-trainer skills.

**Acceptance Criteria:**
- [ ] Session 10 (GitHub Copilot Basics) fully developed
- [ ] Session 11 (GitHub Spark & Agents) fully developed
- [ ] Session 12 (Capstone Project & Train-the-Trainer) fully developed
- [ ] All materials pass accessibility checklist

**Stories:**

#### STORY-023: Develop Session 10 - GitHub Copilot Basics
**Tasks:** [What is Copilot? How to enable and use, AI-assisted issue creation, Prompting best practices]
**Story Points:** 8

#### STORY-024: Develop Session 11 - GitHub Spark & Agents
**Tasks:** [Introduction to Spark, Creating simple apps with Spark, Using GitHub Agents]
**Story Points:** 8

#### STORY-025: Develop Session 12 - Capstone Project & Train-the-Trainer
**Tasks:** [Learners build complete farm project from scratch, Peer teaching exercise, Train-the-trainer coaching for high performers]
**Story Points:** 13

---

### EPIC-007: Farming Project Templates

**Owner:** Curriculum Developer
**Duration:** 2 weeks
**Priority:** P1 (High)
**Dependencies:** EPIC-003 (farm use case library)

**Description:** Create 4-6 ready-to-use GitHub repository templates for common farm management scenarios.

**Acceptance Criteria:**
- [ ] 4-6 templates created covering diverse farm operations
- [ ] Each template includes README, sample issues, project board, workflow (if applicable)
- [ ] Templates tested by creating new repositories from them
- [ ] Templates include setup instructions for farmers

**Stories:**

#### STORY-026: Create Farm Task Tracker Template
**Tasks:** [Repo with issue templates for common farm tasks, labels (equipment, livestock, crops, maintenance), project board with workflow]
**Story Points:** 8

#### STORY-027: Create Planting Schedule Template
**Tasks:** [Repo with project board in timeline view, issues for each field/crop, custom fields for dates and status]
**Story Points:** 8

#### STORY-028: Create Equipment Maintenance Log Template
**Tasks:** [Repo for equipment records, issue templates for maintenance tasks, photo upload instructions]
**Story Points:** 5

#### STORY-029: Create Grant Compliance Tracker Template
**Tasks:** [Repo for grant documentation, issues for compliance milestones, commit history guidance for audit trail]
**Story Points:** 5

---

### EPIC-008: Quick-Reference Guides & Job Aids

**Owner:** Curriculum Developer
**Duration:** 2 weeks
**Priority:** P1 (High)
**Dependencies:** EPIC-006 (all session content finalized)

**Description:** Create cheat sheets, glossaries, and troubleshooting guides for learners to reference during and after training.

**Acceptance Criteria:**
- [ ] GitHub terminology glossary created
- [ ] Common tasks cheat sheet created (1-2 pages, printable)
- [ ] Troubleshooting guide created for common errors
- [ ] Device-specific guides created (laptop vs tablet vs phone)
- [ ] All guides pass accessibility checklist

**Stories:**

#### STORY-030: Create GitHub Terminology Glossary
**Tasks:** [Define 30+ terms in plain language with farm analogies, Include screenshots, Format for printing and screen reading]
**Story Points:** 5

#### STORY-031: Create Common Tasks Cheat Sheet
**Tasks:** [One-pagers for: Create issue, Add to project, Create repository, Invite collaborator, etc.]
**Story Points:** 5

#### STORY-032: Create Troubleshooting Guide
**Tasks:** [Common errors and solutions: "Can't find my repository", "Issue won't close", "Notifications overwhelming", etc.]
**Story Points:** 5

#### STORY-033: Create Device-Specific Guides
**Tasks:** [Annotated screenshots for laptop, tablet, phone showing key tasks on each device type]
**Story Points:** 8

---

## Phase 4: Implementation & Evaluation (Months 4-6)

### EPIC-010: Training Delivery Infrastructure

**Owner:** Curriculum Developer
**Duration:** 1 week
**Priority:** P1 (High)
**Dependencies:** EPIC-003 (materials ready for delivery)

**Description:** Prepare logistics for in-person training delivery: demo environment, equipment, seating, feedback mechanisms.

**Acceptance Criteria:**
- [ ] Demo GitHub account and repositories set up
- [ ] Projector/screen tested with slide decks
- [ ] Internet access verified (with backup mobile hotspot)
- [ ] Seating arranged for pair work
- [ ] Feedback surveys created in accessible format

**Stories:**

#### STORY-034: Set Up Demo GitHub Environment
**Tasks:** [Create demo organization, Populate with sample farm repositories, Create demo issues/projects for live demonstrations]
**Story Points:** 5

#### STORY-035: Prepare Delivery Equipment & Logistics
**Tasks:** [Test projector/screen, Arrange seating for pairs, Print handouts and cheat sheets, Set up backup internet (mobile hotspot)]
**Story Points:** 3

#### STORY-036: Create Feedback Survey Forms
**Tasks:** [Design Kirkpatrick L1 survey (session reaction), Create L2 assessment rubric (hands-on skills), Set up L3 tracking plan (GitHub usage), Plan L4 interview questions (farm productivity)]
**Story Points:** 5

---

### EPIC-011: Session Delivery Block 1 (Sessions 1-4)

**Owner:** Curriculum Developer
**Duration:** 4 weeks (bi-weekly sessions in March-April)
**Priority:** P0 (Critical)
**Dependencies:** EPIC-010

**Description:** Deliver Sessions 1-4 in-person, collect feedback, assess learning, and iterate materials.

**Acceptance Criteria:**
- [ ] Sessions 1-4 delivered with 75%+ attendance
- [ ] Feedback collected after each session (Kirkpatrick L1)
- [ ] Hands-on assessments completed (Kirkpatrick L2)
- [ ] Materials iterated based on real-world delivery lessons

**Stories:**

#### STORY-037: Deliver Session 1 - Introduction to GitHub & Repositories
**Tasks:** [Set up room, Deliver session following facilitation script, Monitor cognitive load and pacing, Collect feedback survey, Document lessons learned]
**Story Points:** 5

#### STORY-038-040: Deliver Sessions 2, 3, 4
**Tasks:** [Repeat for each session]
**Story Points:** 5 each

---

### EPIC-012: Session Delivery Block 2 (Sessions 5-8)

**Owner:** Curriculum Developer
**Duration:** 4 weeks (bi-weekly sessions in July-August)
**Priority:** P0 (Critical)
**Dependencies:** EPIC-011, Planting season break (May-June)

**Description:** Deliver Sessions 5-8 in-person after planting season break. Start with recap session to reinforce prior learning.

**Acceptance Criteria:**
- [ ] Recap session delivered covering Sessions 1-4 key concepts
- [ ] Sessions 5-8 delivered with 70%+ attendance (account for attrition)
- [ ] Feedback and assessments collected

**Stories:**

#### STORY-041: Deliver Recap Session Post-Planting Break
**Tasks:** [Quick review of Sessions 1-4, Q&A on GitHub usage during break, Re-energize cohort]
**Story Points:** 3

#### STORY-042-045: Deliver Sessions 5, 6, 7, 8
**Story Points:** 5 each

---

### EPIC-013: Session Delivery Block 3 (Sessions 9-12)

**Owner:** Curriculum Developer
**Duration:** 4 weeks (bi-weekly sessions in Nov-Dec)
**Priority:** P1 (High)
**Dependencies:** EPIC-012, Harvest season break (Sept-Oct)

**Description:** Deliver Sessions 9-12 in-person after harvest season break. Include capstone project and train-the-trainer coaching.

**Acceptance Criteria:**
- [ ] Recap session delivered covering Sessions 5-8 key concepts
- [ ] Sessions 9-12 delivered
- [ ] Capstone projects completed by learners
- [ ] Train-the-trainer candidates identified and coached

**Stories:**

#### STORY-046: Deliver Recap Session Post-Harvest Break
**Story Points:** 3

#### STORY-047-050: Deliver Sessions 9, 10, 11, 12
**Story Points:** 5 each (Session 12 = 8 points due to capstone + train-the-trainer)

---

### EPIC-014: Assessment & Evaluation

**Owner:** Curriculum Developer
**Duration:** Ongoing during delivery + 6 months post-training
**Priority:** P0 (Critical)
**Dependencies:** EPIC-011 (delivery begins)

**Description:** Collect Kirkpatrick Level 1-4 evaluation data to measure training effectiveness and inform iteration.

**Acceptance Criteria:**
- [ ] Kirkpatrick L1 (Reaction) data collected from 80%+ of learners
- [ ] Kirkpatrick L2 (Learning) assessments show 80%+ skill proficiency
- [ ] Kirkpatrick L3 (Behavior) tracked at 30, 60, 180 days showing 60%+ GitHub usage
- [ ] Kirkpatrick L4 (Results) documented via 3+ farm productivity improvement stories

**Stories:**

#### STORY-051: Collect Kirkpatrick Level 1 (Reaction) Data
**Tasks:** [Distribute feedback survey after each session, Analyze satisfaction and engagement trends, Document common themes (pacing, relevance, confidence)]
**Story Points:** 5

#### STORY-052: Conduct Kirkpatrick Level 2 (Learning) Assessments
**Tasks:** [Use hands-on demonstrations during sessions to assess skill acquisition, Track pass rates per learning objective, Identify struggling learners for additional support]
**Story Points:** 8

#### STORY-053: Track Kirkpatrick Level 3 (Behavior) Post-Training
**Tasks:** [Monitor GitHub activity at 30, 60, 180 days (repos created, issues managed, projects used), Interview learners about integration into farm operations, Document usage patterns and barriers]
**Story Points:** 8

#### STORY-054: Measure Kirkpatrick Level 4 (Results) Farm Outcomes
**Tasks:** [Conduct 6-month follow-up interviews, Collect stories of farm productivity improvements (time saved, better collaboration, compliance achieved), Quantify outcomes where possible]
**Story Points:** 8

---

### EPIC-015: Iteration & Train-the-Trainer

**Owner:** Curriculum Developer
**Duration:** Ongoing post-delivery
**Priority:** P2 (Medium)
**Dependencies:** EPIC-014

**Description:** Use evaluation data to refine curriculum for next cohort. Identify and coach high-performing learners for train-the-trainer role.

**Acceptance Criteria:**
- [ ] Lessons learned document created summarizing feedback and improvements
- [ ] Curriculum revised based on data (simplify confusing sections, add scaffolding)
- [ ] 1+ train-the-trainer candidate identified
- [ ] Train-the-trainer coaching plan executed

**Stories:**

#### STORY-055: Analyze Evaluation Data and Document Lessons Learned
**Tasks:** [Synthesize L1-4 data into insights, Identify what worked (celebrate wins), Identify what to improve (pain points, cognitive overload areas), Prioritize revisions for next cohort]
**Story Points:** 5

#### STORY-056: Revise Curriculum for Next Cohort
**Tasks:** [Simplify overly complex sessions, Add scaffolding to challenging concepts, Update farm scenarios based on learner feedback, Refresh accessibility audit]
**Story Points:** 13

#### STORY-057: Identify Train-the-Trainer Candidates
**Tasks:** [Evaluate learner performance across L2 assessments, Assess communication and leadership skills, Approach high performers about teaching next cohort]
**Story Points:** 3

#### STORY-058: Coach Train-the-Trainer Candidates
**Tasks:** [Provide facilitator guides and scripts, Conduct practice teaching session with feedback, Support candidate in delivering 1+ sessions with mentor observation]
**Story Points:** 13

---

## Issue Type Reference

| Type | When to Use | Example |
|------|-------------|---------|
| **Epic** | Large body of work spanning 1-6 weeks with multiple stories; represents a major deliverable or phase milestone | "Sessions 1-3 Content Development (Prototype)" |
| **Story** | User-facing functionality or deliverable; can be completed in 1 sprint; has acceptance criteria | "Develop Session 1 - Introduction to GitHub & Repositories" |
| **Task** | Sub-item of a story; technical work that doesn't directly deliver user value | "Create slide deck for Session 1", "Write facilitation script" |
| **Bug** | Defect in existing materials (post-delivery); requires fixing | "Session 2 lab exercise link broken on mobile devices" |
| **Spike** | Time-boxed research or investigation to reduce uncertainty | "Research best screen recording software for video walkthroughs" |

---

## Labels & Components

### Labels

| Label | Purpose | Color |
|-------|---------|-------|
| `phase-1-preparation` | Stories in Phase 1: Preparation & Analysis | Blue (#0366d6) |
| `phase-2-design` | Stories in Phase 2: Iterative Design | Green (#28a745) |
| `phase-3-development` | Stories in Phase 3: Iterative Development | Orange (#fb8c00) |
| `phase-4-delivery` | Stories in Phase 4: Implementation & Evaluation | Purple (#6f42c1) |
| `accessibility` | Accessibility-related work (compliance, testing, remediation) | Pink (#e83e8c) |
| `session-content` | Session development (slides, labs, guides) | Yellow (#ffd700) |
| `evaluation` | Assessment and evaluation activities | Teal (#17a2b8) |
| `train-the-trainer` | Train-the-trainer activities | Brown (#8b4513) |
| `blocked` | Story cannot proceed due to dependency or external issue | Red (#d73a4a) |
| `needs-review` | Story completed but awaiting review/approval | Light blue (#c5def5) |

### Components

| Component | Owner | Description |
|-----------|-------|-------------|
| **Curriculum Design** | Curriculum Developer | Learning objectives, session outlines, instructional strategies |
| **Content Development** | Curriculum Developer | Slides, labs, videos, guides, templates |
| **Accessibility** | Curriculum Developer | Compliance testing, UDL implementation, remediation |
| **Delivery & Facilitation** | Curriculum Developer | In-person session delivery, logistics, equipment |
| **Evaluation & Metrics** | Curriculum Developer | Kirkpatrick assessments, data collection, analysis |
| **Templates & Resources** | Curriculum Developer | Project templates, cheat sheets, troubleshooting guides |

---

## Sprint Planning

### Cadence
- **Sprint duration:** 2 weeks
- **Sprint ceremonies:** Planning (solo planning session), Daily standups (self-check-ins), Review (self-demo), Retrospective (lessons learned)
- **Total sprints:** 9 sprints (18 weeks development) + ongoing delivery sprints

### Sprint Allocation

| Sprint | Dates (Example) | Phase | Epics | Story Points | Focus |
|--------|----------------|-------|-------|--------------|-------|
| **Sprint 1** | Week 1-2 | Preparation | EPIC-001 | 26 | Project initiation, learner needs, farm use cases, planning artifacts |
| **Sprint 2** | Week 3-4 | Preparation | EPIC-002 | 21 | Learning objectives, session template, scheduling, accessibility checklist |
| **Sprint 3** | Week 5-6 | Design | EPIC-003 | 26 | Develop Session 1, Session 2 |
| **Sprint 4** | Week 7-8 | Design | EPIC-003 | 26 | Develop Session 3, accessibility audit, pilot testing |
| **Sprint 5** | Week 9-10 | Design | EPIC-003 | 13 | Iterate based on pilot feedback |
| **Sprint 6** | Week 11-12 | Development | EPIC-004 | 29 | Develop Sessions 4, 5, 6 |
| **Sprint 7** | Week 13-14 | Development | EPIC-005, EPIC-007 | 34 | Develop Sessions 7, 8; start project templates |
| **Sprint 8** | Week 15-16 | Development | EPIC-005, EPIC-006, EPIC-007 | 29 | Develop Session 9, 10; complete project templates |
| **Sprint 9** | Week 17-18 | Development | EPIC-006, EPIC-008, EPIC-009 | 29 | Develop Sessions 11, 12; create guides; final accessibility audit |
| **Sprint 10** | Week 19 | Delivery Prep | EPIC-010 | 13 | Training delivery infrastructure setup |
| **Sprints 11-14** | Weeks 20-27 | Delivery Block 1 | EPIC-011, EPIC-014 | 20/sprint | Deliver Sessions 1-4, collect feedback |
| **Break** | Weeks 28-35 | Planting Season | - | - | No formal sprints; asynchronous support |
| **Sprints 15-18** | Weeks 36-43 | Delivery Block 2 | EPIC-012, EPIC-014 | 23/sprint | Recap + deliver Sessions 5-8 |
| **Break** | Weeks 44-51 | Harvest Season | - | - | No formal sprints; asynchronous support |
| **Sprints 19-22** | Weeks 52-59 | Delivery Block 3 | EPIC-013, EPIC-014, EPIC-015 | 25/sprint | Recap + deliver Sessions 9-12, capstone, train-the-trainer |
| **Ongoing** | Post-delivery | Iteration | EPIC-015 | - | Evaluation, iteration, scaling |

**Total Story Points (Development Phase):** ~240 points across 9 sprints (~27 points/sprint average for solo developer)

**Note:** Sprint velocity will be calibrated after Sprint 1-2. Single-person team velocity typically ranges 15-30 points/sprint depending on complexity and availability.

---

## Team Assignments

| Area | Owner Team | Epic IDs |
|------|-----------|----------|
| **Project Initiation** | Curriculum Developer | EPIC-001 |
| **Curriculum Design** | Curriculum Developer | EPIC-002 |
| **Content Development (All Sessions)** | Curriculum Developer | EPIC-003, EPIC-004, EPIC-005, EPIC-006 |
| **Project Templates** | Curriculum Developer | EPIC-007 |
| **Guides & Job Aids** | Curriculum Developer | EPIC-008 |
| **Accessibility Compliance** | Curriculum Developer | EPIC-009 |
| **Training Delivery** | Curriculum Developer | EPIC-010, EPIC-011, EPIC-012, EPIC-013 |
| **Assessment & Evaluation** | Curriculum Developer | EPIC-014 |
| **Iteration & Scaling** | Curriculum Developer | EPIC-015 |

**External Consultation (Optional):**
- **Accessibility Review:** Accessibility consultant (if available) for audit of final materials
- **Domain Expertise:** Agricultural extension educator for farm scenario validation
- **Pilot Testing:** 1-2 farmer volunteers for prototype testing

---

## Summary Statistics

- **Total Epics:** 15
- **Total Stories:** 58
- **Development Phase Sprints:** 9 (18 weeks)
- **Delivery Phase Sprints:** 12 (24 weeks with seasonal breaks)
- **Estimated Story Points:** ~240 points (development phase)
- **Target Completion Rate:** 75%+ learner completion, 80%+ skill proficiency, 60%+ sustained GitHub usage

---

**Document Version:** 1.0
**Last Updated:** 2026-01-29
**Owner:** Curriculum Developer
**Review Cadence:** Weekly during development; bi-weekly during delivery
