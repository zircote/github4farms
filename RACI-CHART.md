# RACI Chart: GitHub Training Curriculum for Farmers

## Overview

This RACI chart maps responsibilities across all project phases and activities for the GitHub training curriculum. Given the single-person development team, the matrix is adapted to show which activities involve learners, external consultants, and ongoing governance roles.

**Note:** While the Curriculum Developer/Instructor is Responsible and Accountable for most activities, this chart highlights where learners participate actively (Consulted) and where external expertise may be engaged (Consulted).

---

## Legend

| Code | Meaning | Description |
|------|---------|-------------|
| **R** | **Responsible** | The person(s) who performs the work to complete the task |
| **A** | **Accountable** | The person ultimately answerable for the correct and thorough completion; only ONE per activity |
| **C** | **Consulted** | The person(s) whose opinions are sought; two-way communication |
| **I** | **Informed** | The person(s) who are kept up-to-date on progress; one-way communication |

---

## Role Definitions

| # | Role | Description | Typical Title |
|---|------|-------------|---------------|
| 1 | **Curriculum Developer/Instructor** | Solo project owner responsible for all research, design, development, delivery, and evaluation activities. Creates materials, delivers training, and assesses outcomes. | Instructor, Curriculum Designer, Training Facilitator |
| 2 | **Farmer Learners** | Primary training participants (1-25 individuals) with no prior GitHub experience. Provide feedback, complete exercises, and participate in assessments. | Training Participant, Student, Learner |
| 3 | **Agricultural Extension Expert** | Optional consultant providing domain expertise on farming practices, terminology, and training delivery methods for agricultural audiences. | Extension Educator, Agricultural Specialist, Cooperative Extension Agent |
| 4 | **Accessibility Consultant** | Optional consultant providing specialized review of materials for ADA/Section 508/WCAG 2.2 Level AA compliance. | Accessibility Specialist, Disability Services Professional, UDL Expert |
| 5 | **Peer Mentor** | High-performing farmer learner who assists peers during sessions and may progress to train-the-trainer role (stretch goal). | Advanced Learner, Peer Coach, Co-Facilitator |

---

## Phase 1: Preparation & Analysis (Weeks 1-4)

| Activity | Epic | Curriculum Developer | Farmer Learners | Extension Expert | Accessibility Consultant | Peer Mentor |
|----------|------|---------------------|----------------|-----------------|------------------------|------------|
| Conduct learner needs assessment | EPIC-001 | **R, A** | **C** | **C** | I | - |
| Review existing GitHub training materials | EPIC-001 | **R, A** | I | **C** | I | - |
| Build farm use case library | EPIC-001 | **R, A** | **C** | **C** | I | - |
| Create project planning artifacts | EPIC-001 | **R, A** | I | I | I | - |
| Define learning objectives (Bloom's) | EPIC-002 | **R, A** | I | **C** | I | - |
| Create session outline template | EPIC-002 | **R, A** | I | **C** | I | - |
| Plan seasonal scheduling | EPIC-002 | **R, A** | **C** | **C** | I | - |
| Design accessibility compliance checklist | EPIC-002 | **R, A** | I | I | **C** | - |

**Phase 1 Notes:**
- Learners are **Consulted** for needs assessment, use cases, and scheduling to ensure curriculum meets real-world constraints.
- Extension Expert is **Consulted** to validate farming scenarios and adult learning approach.
- Accessibility Consultant is **Consulted** to establish compliance baseline.

---

## Phase 2: Iterative Design (Weeks 5-10)

| Activity | Epic | Curriculum Developer | Farmer Learners | Extension Expert | Accessibility Consultant | Peer Mentor |
|----------|------|---------------------|----------------|-----------------|------------------------|------------|
| Develop Session 1 materials | EPIC-003 | **R, A** | I | I | I | - |
| Develop Session 2 materials | EPIC-003 | **R, A** | I | I | I | - |
| Develop Session 3 materials | EPIC-003 | **R, A** | I | I | I | - |
| Conduct accessibility audit (Sessions 1-3) | EPIC-003 | **R, A** | I | I | **C** | - |
| Pilot test Session 1-3 materials | EPIC-003 | **R, A** | **C** | **C** | I | - |
| Iterate materials based on pilot feedback | EPIC-003 | **R, A** | **C** | I | I | - |
| Implement UDL features | EPIC-009 | **R, A** | I | I | **C** | - |
| Test materials across device types | EPIC-009 | **R, A** | **C** | I | I | - |

**Phase 2 Notes:**
- Learners are **Consulted** during pilot testing to validate content clarity, pacing, and relevance.
- Accessibility Consultant is **Consulted** for audit review and UDL implementation.

---

## Phase 3: Iterative Development (Weeks 11-18)

| Activity | Epic | Curriculum Developer | Farmer Learners | Extension Expert | Accessibility Consultant | Peer Mentor |
|----------|------|---------------------|----------------|-----------------|------------------------|------------|
| Develop Sessions 4-6 materials | EPIC-004 | **R, A** | I | I | I | - |
| Develop Sessions 7-9 materials | EPIC-005 | **R, A** | I | I | I | - |
| Develop Sessions 10-12 materials | EPIC-006 | **R, A** | I | I | I | - |
| Create farming project templates | EPIC-007 | **R, A** | **C** | **C** | I | - |
| Create quick-reference guides | EPIC-008 | **R, A** | **C** | I | I | - |
| Develop troubleshooting guide | EPIC-008 | **R, A** | I | I | I | - |
| Create device-specific guides | EPIC-008 | **R, A** | **C** | I | I | - |
| Conduct final accessibility audit | EPIC-009 | **R, A** | I | I | **C** | - |
| Record video walkthroughs with captions | EPIC-003-006 | **R, A** | I | I | **C** | - |

**Phase 3 Notes:**
- Learners are **Consulted** for project templates and guides to ensure practical utility.
- Extension Expert is **Consulted** for farm template validation.
- Accessibility Consultant is **Consulted** for final compliance review.

---

## Phase 4: Implementation & Evaluation (Months 4-6)

| Activity | Epic | Curriculum Developer | Farmer Learners | Extension Expert | Accessibility Consultant | Peer Mentor |
|----------|------|---------------------|----------------|-----------------|------------------------|------------|
| Set up training delivery infrastructure | EPIC-010 | **R, A** | I | I | I | - |
| Deliver Session 1 | EPIC-011 | **R, A** | **R** | I | I | - |
| Deliver Session 2 | EPIC-011 | **R, A** | **R** | I | I | - |
| Deliver Session 3 | EPIC-011 | **R, A** | **R** | I | I | **C** |
| Deliver Session 4 | EPIC-011 | **R, A** | **R** | I | I | **C** |
| Deliver recap session (post-planting) | EPIC-012 | **R, A** | **R** | I | I | **C** |
| Deliver Sessions 5-8 | EPIC-012 | **R, A** | **R** | I | I | **R** |
| Deliver recap session (post-harvest) | EPIC-013 | **R, A** | **R** | I | I | **R** |
| Deliver Sessions 9-12 | EPIC-013 | **R, A** | **R** | I | I | **R** |
| Collect session feedback (Kirkpatrick L1) | EPIC-014 | **R, A** | **R** | I | I | I |
| Conduct hands-on assessments (L2) | EPIC-014 | **R, A** | **R** | I | I | **C** |
| Track GitHub usage (L3: 30/60/180 days) | EPIC-014 | **R, A** | **C** | I | I | I |
| Measure farm productivity outcomes (L4) | EPIC-014 | **R, A** | **C** | I | I | I |
| Identify train-the-trainer candidates | EPIC-015 | **R, A** | I | I | I | **C** |
| Coach train-the-trainer candidates | EPIC-015 | **R, A** | **R** | I | I | **C** |
| Revise curriculum for next cohort | EPIC-015 | **R, A** | **C** | I | I | **C** |

**Phase 4 Notes:**
- Learners are **Responsible** for session participation, completing exercises, providing feedback, and usage tracking.
- Peer Mentors emerge from high-performing learners starting Session 3-4; they assist peers and may become **Consulted** for train-the-trainer activities.
- Curriculum Developer remains **Accountable** for delivery quality, assessment rigor, and iteration decisions.

---

## Ongoing Governance (Post-Delivery)

| Activity | Curriculum Developer | Farmer Learners | Extension Expert | Accessibility Consultant | Peer Mentor |
|----------|---------------------|----------------|-----------------|------------------------|------------|
| Monitor learner GitHub usage and engagement | **R, A** | **C** | I | I | **C** |
| Provide one-on-one support for struggling learners | **R, A** | **R** | I | I | **R** |
| Update materials for GitHub feature changes | **R, A** | I | I | **C** | I |
| Review accessibility compliance (annual) | **R, A** | I | I | **C** | I |
| Plan and deliver next cohort training | **A** | I | I | I | **R** |
| Maintain farm project template library | **R, A** | **C** | **C** | I | **C** |
| Facilitate peer learning community | **A** | **R** | I | I | **R** |
| Advocate for digital literacy funding/resources | **R, A** | I | **C** | I | I |

**Ongoing Notes:**
- Peer Mentors may transition to **Responsible** for delivering next cohort training (train-the-trainer stretch goal).
- Curriculum Developer shifts from direct delivery to oversight and continuous improvement.
- Learner community becomes self-sustaining through peer support networks.

---

## Decision Authority Matrix

| Decision Type | Authority | Escalation Path | Consulted Parties |
|---------------|-----------|----------------|-------------------|
| **Curriculum Scope & Structure** | Curriculum Developer | N/A (sole decision-maker) | Learners (needs), Extension Expert (domain) |
| **Learning Objectives & Assessment Design** | Curriculum Developer | N/A | Extension Expert, Accessibility Consultant |
| **Accessibility Compliance Standards** | Curriculum Developer | Legal counsel if non-compliant | Accessibility Consultant |
| **Training Schedule & Timing** | Curriculum Developer | Negotiation with learners if conflicts arise | Learners (availability), Extension Expert (seasonal norms) |
| **Session Content & Materials** | Curriculum Developer | N/A | Learners (pilot testing), Extension Expert (farm scenarios) |
| **Delivery Method & Facilitation** | Curriculum Developer | N/A | Extension Expert (adult learning best practices) |
| **Budget Allocation** | Curriculum Developer | N/A (no budget) | N/A |
| **Risk Mitigation Strategies** | Curriculum Developer | N/A | Learners (impact assessment) |
| **Evaluation Metrics & Methods** | Curriculum Developer | N/A | Learners (data collection), Extension Expert (relevance) |
| **Train-the-Trainer Selection** | Curriculum Developer | N/A | Learners (self-nomination), Peer Mentors (readiness) |
| **Curriculum Iteration Priorities** | Curriculum Developer | N/A | Learners (feedback), Extension Expert (impact) |
| **Technology Platform Changes** | Curriculum Developer | GitHub (if platform changes) | Learners (device compatibility) |

**Authority Notes:**
- Single-person team structure means Curriculum Developer has final authority for all decisions.
- **Consulted** parties provide input but Curriculum Developer is **Accountable** for outcomes.
- Escalation paths are minimal due to project scale; primary escalation is to learners if schedule conflicts arise or to legal/compliance if accessibility violations occur.

---

## Workload Distribution Analysis

| Role | Responsible (R) Count | Accountable (A) Count | Workload Distribution |
|------|----------------------|-----------------------|-----------------------|
| **Curriculum Developer** | 50+ | 50+ | 100% of project work |
| **Farmer Learners** | 8 | 0 | Active participation in sessions, assessments, feedback |
| **Agricultural Extension Expert** | 0 | 0 | Advisory only (Consulted 10+ activities) |
| **Accessibility Consultant** | 0 | 0 | Advisory only (Consulted 6+ activities) |
| **Peer Mentor** | 4 | 0 | Emerges mid-project; assists with delivery and coaching |

**Workload Mitigation:**
- Peer Mentors reduce Curriculum Developer burden during delivery phase by assisting learners with exercises.
- External consultants provide specialized expertise without requiring ongoing work.
- SAM methodology's rapid prototyping reduces perfectionism and accelerates development.
- Modular curriculum design allows focus on one session at a time rather than entire program.

---

## RACI Validation Checklist

- [x] Every activity has exactly **ONE** Accountable (A)
- [x] Every activity has at least one Responsible (R)
- [x] Curriculum Developer is not R or A for more than 60% of activities (Note: Exception due to single-person team; 100% R/A is unavoidable)
- [x] All phases covered (Preparation, Design, Development, Delivery, Evaluation)
- [x] Ongoing governance activities defined
- [x] Decision authority matrix included
- [x] External consultation roles clearly defined
- [x] Learner participation activities identified
- [x] Train-the-trainer progression mapped

---

## Cross-Reference to Project Artifacts

- **JIRA-STRUCTURE.md**: All EPIC IDs referenced in Activity column; see JIRA structure for story-level assignments
- **PROJECT-PLAN.md**: Phase descriptions align with RACI phase sections
- **RISK-REGISTER.md**: Risk owners map to RACI Accountable roles (primarily Curriculum Developer)
- **SEVERITY-CLASSIFICATION.md**: Escalation procedures reference Decision Authority Matrix
- **SUCCESS-METRICS.md**: Kirkpatrick evaluation activities (L1-L4) detailed in Phase 4 RACI

---

**Document Version:** 1.0
**Last Updated:** 2026-01-30
**Owner:** Curriculum Developer/Instructor
**Review Cadence:** Monthly during development; quarterly post-delivery
