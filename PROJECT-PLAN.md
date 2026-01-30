# Project Plan: GitHub Training Curriculum for Farmers

## Executive Summary

Farmers with no technical background face barriers to adopting GitHub as a platform for farm data management, team collaboration, grant tracking, and digital literacy. This project develops and delivers a comprehensive, accessible training curriculum to enable 1-25 farmers to independently use GitHub for farm operations within 3-6 months.

**Approach:** An experiential, accessibility-first curriculum using the SAM (Successive Approximation Model) for rapid, iterative development and Kolb's Experiential Learning Cycle for hands-on delivery. The curriculum spans 8-12 in-person training sessions delivered in modular blocks to accommodate agricultural seasons.

**Expected Outcome:** Farmers progress from zero GitHub knowledge to independent proficiency in repository navigation, issue/project management, and collaboration. Stretch goals include GitHub Actions automation, Copilot usage, and train-the-trainer capability.

**ROI:** This volunteer-led initiative (budget: $0) delivers qualitative value through improved farm record-keeping, reduced collaboration friction, enhanced compliance tracking, and digital literacy empowerment—establishing a foundation for long-term productivity gains.

---

## Current State Analysis

### Findings

| Category | Finding | Impact | Evidence |
|----------|---------|--------|----------|
| **Digital Literacy Gap** | Farmers have no prior GitHub or version control experience; many lack basic technical skills | High barrier to adoption; risk of early dropout due to frustration | PROJECT-CONTEXT.md constraint analysis |
| **Technology Anxiety** | Non-technical learners may resist or feel intimidated by developer tooling | Low engagement, reduced knowledge retention, abandonment of GitHub post-training | Domain research: 65-70% of farmers cite lack of technical skills as primary barrier to digital tool adoption |
| **Seasonal Availability** | Planting (May-June) and harvest (Sept-Oct) seasons make farmers unavailable for training | Attendance gaps, knowledge decay, incomplete curriculum completion | PROJECT-CONTEXT.md: "Training must accommodate agricultural seasons" |
| **Mixed Device Access** | Learners use varied devices (laptops, tablets, phones) with inconsistent internet access | Accessibility challenges, inability to complete exercises, unequal learning outcomes | PROJECT-CONTEXT.md: "Mixed/TBD device environment" |
| **Accessibility Compliance Risk** | Materials not yet developed; risk of non-compliance with ADA/Section 508 standards | Legal liability, exclusion of learners with disabilities, reduced learning effectiveness | Domain research: 40-55% of training materials meet basic accessibility standards (industry avg) |
| **Knowledge Transfer Bottleneck** | Single instructor/developer with no backup or succession plan | Project failure if instructor is unavailable; no scalability to additional cohorts | PROJECT-CONTEXT.md: Team size = 1 person |
| **No Baseline Data** | Zero existing training materials, learner surveys, or proven farm-GitHub use cases | Curriculum built from scratch; higher development risk; unknown learner needs | PROJECT-CONTEXT.md: Available data consists of external GitHub documentation only |

### Root Cause Analysis

**Primary Root Cause:** Absence of tailored GitHub training for non-technical agricultural audiences. Existing GitHub training assumes software development context, developer tooling fluency, and continuous availability—all incompatible with farming learner needs.

**Contributing Factors:**
1. GitHub perceived as "developer tool" rather than general-purpose collaboration platform
2. Lack of agricultural use case documentation (issues for field tasks, projects for planting schedules, etc.)
3. No precedent for seasonally-aware, accessibility-first technical training in this domain
4. Single-person volunteer effort lacks resources for rapid iteration or professional instructional design

### Top Problem Areas (Ranked)

1. **Technology anxiety and digital literacy barriers** - Without confidence-building and scaffolding, learners will disengage
2. **Accessibility compliance** - Failure to meet ADA/Section 508 excludes learners and creates legal risk
3. **Seasonal scheduling conflicts** - Poor scheduling results in attrition and incomplete learning
4. **Cognitive overload** - Teaching "all of GitHub" too quickly overwhelms non-technical learners
5. **Single point of failure** - Instructor unavailability derails entire program

---

## Project Goals

### Primary Objective

**Enable 1-25 farmers with no technical experience to independently use GitHub for farm operations by the end of a 3-6 month training program.**

**Success Metrics:**
- 75% of learners complete 8+ sessions (industry top quartile: 75-85% completion for experiential training)
- 80% of learners demonstrate independent GitHub navigation, issue creation, and project board usage (Kirkpatrick Level 2)
- 60% of learners actively use GitHub for farm tasks 60 days post-training (Kirkpatrick Level 3)
- 90% of training materials meet WCAG 2.2 Level AA accessibility standards

### Success Criteria Checklist

- [ ] Curriculum covers 8-12 sessions with clear learning objectives (Bloom's Taxonomy)
- [ ] All session materials include captions, alt text, high-contrast visuals, keyboard navigation (UDL)
- [ ] Hands-on labs use farm-relevant scenarios (livestock tracking, planting schedules, equipment maintenance)
- [ ] Training schedule accommodates planting/harvest blackout periods
- [ ] Learners progress from "What is a repository?" (Session 1) to "Build your own farm project" (Session 12)
- [ ] Formative assessments demonstrate skill acquisition at each session
- [ ] Post-training GitHub usage tracked at 30, 60, and 180 days
- [ ] At least 1 high-performing learner identified as potential train-the-trainer for next cohort

### Industry Alignment

This project aligns with:
- **ADDIE Model (Instructional Design):** Systematic curriculum development through Analysis, Design, Development, Implementation, Evaluation
- **Andragogy (Adult Learning Theory):** Respects farmers' experience, autonomy, and problem-centered learning needs
- **Agricultural Extension Education:** Proven hands-on, peer-to-peer, train-the-trainer approach for farmer education
- **Universal Design for Learning (UDL):** Accessibility-first design ensuring inclusive learning experiences
- **Kirkpatrick Model:** Four-level training evaluation from learner reactions to farm productivity results

Benchmarks:
- Agricultural technology adoption: Target 60-75% (vs. 30-45% industry avg without training)
- Knowledge retention: Target 75-90% via experiential methods (vs. 20-30% lecture-only)
- Accessibility compliance: Target 90%+ (vs. 40-55% industry avg)

---

## Project Timeline

### Phase Overview

| Phase | Name | Duration | Deliverable | Target Completion |
|-------|------|----------|-------------|-------------------|
| **Phase 1** | Preparation & Analysis | 4 weeks | Learner needs assessment, learning objectives, session outlines | Week 4 |
| **Phase 2** | Iterative Design | 6 weeks | Prototype first 3 sessions (slides, labs, assessments), pilot testing | Week 10 |
| **Phase 3** | Iterative Development | 8 weeks | Complete 8-12 sessions, accessibility compliance, project templates | Week 18 |
| **Phase 4** | Implementation & Evaluation | 12-24 weeks | Deliver training sessions, collect feedback, measure outcomes | Month 6 |

**Total Timeline:** 3-6 months (dependent on seasonal scheduling flexibility)

### Detailed Phase Descriptions

#### Phase 1: Preparation & Analysis (Weeks 1-4)

**Objectives:**
- Understand learner characteristics (technology access, skill levels, availability, learning preferences)
- Define measurable learning objectives for each of 8-12 sessions using Bloom's Taxonomy
- Map GitHub features to farm use cases (repos for field data, issues for task tracking, projects for schedules)
- Establish accessibility baseline (WCAG 2.2 Level AA requirements)
- Create project plan, JIRA structure, risk register, and success metrics

**Activities:**
1. Conduct learner needs survey (technology access, prior tech experience, seasonal availability)
2. Research existing GitHub training materials and identify gaps for agricultural audience
3. Define curriculum scope: 8-12 sessions covering Repos → Issues → Projects → Actions → Copilot/Spark
4. Develop session outline template following Kolb's Experiential Learning Cycle
5. Identify farm-relevant scenarios for hands-on labs (planting schedules, livestock health, equipment maintenance, grant tracking)
6. Audit accessibility requirements (Section 508, WCAG 2.2) and create compliance checklist

**Exit Criteria:**
- [ ] Session outlines created for all 8-12 sessions with learning objectives (Remember → Create progression)
- [ ] Learner needs assessment completed (minimum 5 farmer responses or proxy analysis)
- [ ] Farm use case library documented (10+ scenarios mapped to GitHub features)
- [ ] Accessibility compliance checklist created
- [ ] Project planning artifacts published (PROJECT-PLAN.md, JIRA-STRUCTURE.md, RISK-REGISTER.md, SUCCESS-METRICS.md)

**Epic Dependencies:** None (foundational phase)

---

#### Phase 2: Iterative Design (Weeks 5-10)

**Objectives:**
- Rapidly prototype first 3 sessions with draft slides, hands-on lab exercises, and assessments
- Test materials with pilot learner(s) if available to validate approach
- Iterate design based on feedback, cognitive load assessment, and accessibility review
- Refine instructional strategies and session structure template for remaining sessions

**Activities:**
1. Develop Session 1 (Introduction to GitHub & Repositories): Slides, lab exercise, quick-reference guide
2. Develop Session 2 (GitHub Issues for Task Tracking): Slides, lab exercise, quick-reference guide
3. Develop Session 3 (GitHub Projects for Planning): Slides, lab exercise, quick-reference guide
4. Create "I do, we do, you do" facilitation scripts for each session
5. Pilot test with 1-2 farmers or agricultural extension educators (if available)
6. Conduct accessibility audit of prototype materials using automated tools (WAVE, axe DevTools)
7. Revise based on pilot feedback, cognitive load observations, and accessibility findings

**Exit Criteria:**
- [ ] First 3 sessions fully developed with slides, labs, assessments, and facilitation scripts
- [ ] Pilot testing completed (or proxy review by agricultural education expert)
- [ ] Accessibility audit shows 90%+ compliance with WCAG 2.2 Level AA for prototype materials
- [ ] Cognitive load assessment confirms 3-5 key concepts per session (not overwhelming)
- [ ] Session structure template validated and ready for replication to Sessions 4-12

**Epic Dependencies:** Requires completion of Phase 1 session outlines and accessibility checklist

---

#### Phase 3: Iterative Development (Weeks 11-18)

**Objectives:**
- Build out remaining 5-9 sessions using validated session structure template
- Develop comprehensive assessment materials (formative checks during sessions, summative demonstrations)
- Create quick-reference guides, cheat sheets, and job aids for all GitHub features
- Produce farming-specific project templates (farm task tracker, planting schedule, equipment log, grant compliance tracker)
- Finalize all materials with full accessibility features (captions, transcripts, alt text, keyboard navigation)

**Activities:**
1. Develop Sessions 4-6 (Collaboration, Notifications, Basic Workflows)
2. Develop Sessions 7-9 (GitHub Actions, Automation Basics, Advanced Projects)
3. Develop Sessions 10-12 (Copilot, Spark, Agents, Train-the-Trainer)
4. Create 4-6 farming project templates with README guides
5. Design formative assessment scripts for each session (hands-on demonstration prompts)
6. Build summative assessment: "Create a complete farm project using GitHub" capstone exercise
7. Produce quick-reference guides (GitHub terminology glossary, common tasks cheat sheet, troubleshooting guide)
8. Record video walkthroughs for asynchronous learning and makeup work (with captions and transcripts)
9. Conduct final accessibility audit across all materials

**Exit Criteria:**
- [ ] All 8-12 sessions fully developed with consistent structure and branding
- [ ] Formative and summative assessments created and aligned with Bloom's Taxonomy objectives
- [ ] 4-6 farming project templates ready for learner use
- [ ] Quick-reference guides, cheat sheets, and troubleshooting materials completed
- [ ] Video walkthroughs recorded with captions and transcripts
- [ ] Final accessibility audit confirms 90%+ WCAG 2.2 Level AA compliance across all materials
- [ ] Materials tested across device types (laptop, tablet, phone)

**Epic Dependencies:** Requires completion of Phase 2 session template validation

---

#### Phase 4: Implementation & Evaluation (Months 4-6, 12-24 weeks)

**Objectives:**
- Deliver 8-12 in-person training sessions to 1-25 farmers
- Collect Kirkpatrick Level 1 (Reaction) feedback after each session
- Assess Kirkpatrick Level 2 (Learning) via hands-on demonstrations during sessions
- Monitor Kirkpatrick Level 3 (Behavior) through post-training GitHub usage tracking
- Measure Kirkpatrick Level 4 (Results) via farm productivity and collaboration improvements
- Iterate curriculum based on learner feedback and effectiveness data

**Activities:**
1. Schedule sessions in seasonal blocks to avoid planting/harvest conflicts
2. Deliver Session 1: Introduction to GitHub & Repositories (Week 1)
3. Deliver Session 2: GitHub Issues for Task Tracking (Week 3)
4. Deliver Session 3: GitHub Projects for Planning (Week 5)
5. Deliver Session 4: Collaboration & Notifications (Week 7)
6. **Break for planting season (May-June)** - Provide recap materials for knowledge retention
7. Deliver Sessions 5-8: Actions, Automation, Advanced Projects (Weeks 9-15, July-August)
8. **Break for harvest season (Sept-Oct)** - Provide asynchronous resources and one-on-one support
9. Deliver Sessions 9-12: Copilot, Spark, Train-the-Trainer (Weeks 17-23, Nov-Dec)
10. Collect session feedback surveys after each session (Kirkpatrick L1)
11. Conduct hands-on assessments during each session (Kirkpatrick L2)
12. Track GitHub usage at 30, 60, 180 days post-training (Kirkpatrick L3)
13. Interview farmers about farm productivity improvements at 6 months (Kirkpatrick L4)
14. Iterate materials based on feedback for next cohort
15. Identify and coach train-the-trainer candidates

**Exit Criteria:**
- [ ] 8-12 sessions delivered with 75%+ average attendance
- [ ] Session feedback collected from 80%+ of learners (Kirkpatrick L1)
- [ ] 80%+ of learners demonstrate independent GitHub skills in hands-on assessments (Kirkpatrick L2)
- [ ] 60%+ of learners actively using GitHub 60 days post-training (Kirkpatrick L3)
- [ ] At least 3 documented farm productivity improvements (Kirkpatrick L4)
- [ ] Lessons learned documented and curriculum revised for next cohort
- [ ] At least 1 train-the-trainer candidate identified and coached

**Epic Dependencies:** Requires completion of Phase 3 materials development

---

## JIRA Project Structure Overview

The project is organized into **15 epics** across 4 phases, decomposed into **60+ user stories** with acceptance criteria. Epics span curriculum development, accessibility compliance, training delivery, and evaluation.

**Key Epics:**
- EPIC-001: Project Initiation & Research
- EPIC-002: Curriculum Design & Planning
- EPIC-003: Session 1-3 Content Development (Prototype)
- EPIC-004: Session 4-6 Content Development
- EPIC-005: Session 7-9 Content Development
- EPIC-006: Session 10-12 Content Development (Advanced)
- EPIC-007: Farming Project Templates
- EPIC-008: Quick-Reference Guides & Job Aids
- EPIC-009: Accessibility Compliance & Testing
- EPIC-010: Training Delivery Infrastructure
- EPIC-011: Session Delivery Block 1 (Sessions 1-4)
- EPIC-012: Session Delivery Block 2 (Sessions 5-8)
- EPIC-013: Session Delivery Block 3 (Sessions 9-12)
- EPIC-014: Assessment & Evaluation
- EPIC-015: Iteration & Train-the-Trainer

See [JIRA-STRUCTURE.md](./_plan/JIRA-STRUCTURE.md) for complete epic/story breakdown, sprint planning, and team assignments.

---

## RACI Overview

Given the single-person team constraint, the RACI chart assigns all **Responsible** and **Accountable** roles to the Curriculum Developer/Instructor. External stakeholders (farmers, agricultural extension experts, accessibility consultants) serve in **Consulted** or **Informed** capacities.

**Key Roles:**
1. **Curriculum Developer/Instructor (R/A for all activities):** Solo project owner
2. **Farmer Learners (C/I):** Consulted for needs analysis and pilot testing; Informed of schedule and materials
3. **Agricultural Extension Experts (C):** Consulted for domain-specific best practices (optional)
4. **Accessibility Consultant (C):** Consulted for Section 508/WCAG compliance review (optional)

See [RACI-CHART.md](./RACI-CHART.md) for detailed activity assignments, decision authority matrix, and ongoing governance.

---

## Financial ROI

### Annual Value

**Note:** This is a volunteer-led project with $0 budget. ROI is calculated qualitatively based on documented benefits of digital literacy and GitHub adoption in organizational contexts. Quantified farm productivity gains will be measured post-training (Kirkpatrick Level 4).

| Value Category | Annual Estimate (Qualitative) | Calculation Basis |
|----------------|-------------------------------|-------------------|
| **Time Savings on Record-Keeping** | High - Reduced time searching for paper records, recreating lost data, manually tracking tasks | GitHub provides centralized, searchable, version-controlled records vs. paper/email |
| **Improved Collaboration** | Medium - Reduced miscommunication, missed tasks, duplicate work in multi-person farm operations | GitHub Issues and Projects provide transparency and accountability |
| **Enhanced Compliance Tracking** | Medium - Easier grant reporting, regulatory documentation, audit trails | GitHub commit history and issue comments create automatic documentation |
| **Digital Literacy Foundation** | High - Transferable skills to other platforms, increased confidence with technology | GitHub proficiency opens access to broader digital tools ecosystem |
| **Scalability via Train-the-Trainer** | High (Stretch Goal) - Each trained farmer can train 5-10 peers, multiplying impact | Agricultural extension train-the-trainer model proven effective |

**Total Qualitative Annual Value:** Significant improvements in farm operational efficiency, compliance, and digital literacy empowerment.

### Project Investment

| Investment Category | Cost | Notes |
|---------------------|------|-------|
| **Curriculum Development Time** | $0 (volunteer) | ~100-150 hours across 18 weeks (6-8 hours/week average) |
| **Training Delivery Time** | $0 (volunteer) | ~24-36 hours for 8-12 sessions (2-3 hours/session) |
| **Materials & Tools** | $0 | GitHub is free; training materials use free tools (Google Slides, Markdown, video recording) |
| **Infrastructure** | $0 | In-person delivery; no technology investment required |

**Total Project Investment:** $0 cash outlay; volunteer time donation

### 3-Year Net ROI

**Year 1:**
- Investment: $0 cash (volunteer time)
- Value: Foundation established; 1-25 farmers gain digital literacy and GitHub proficiency
- Net ROI: Infinite (qualitative value delivered at zero cost)

**Year 2:**
- Investment: $0 (curriculum already developed; delivery time only)
- Value: First cohort using GitHub for farm operations; potential train-the-trainer scaling
- Net ROI: Compounding value as GitHub usage becomes habitual and train-the-trainer reduces instructor burden

**Year 3:**
- Investment: $0
- Value: Multiple cohorts trained; train-the-trainer model established; documented farm productivity improvements
- Net ROI: Exponential impact through peer training network and community digital literacy transformation

**ROI Multiple:** Undefined (infinite return on $0 cash investment)

**Key ROI Drivers:**
1. **Volunteer-led model** eliminates direct costs while delivering professional-quality training
2. **Open-source tools (GitHub Free)** provide enterprise-grade collaboration platform at no cost
3. **Train-the-trainer approach** multiplies impact without additional instructor time
4. **Transferable digital literacy skills** benefit farmers beyond GitHub-specific use cases

---

## Risk Management Summary

**Top 5 Risks** (see [RISK-REGISTER.md](./RISK-REGISTER.md) for full details):

| ID | Risk | Likelihood | Impact | Score | Mitigation Strategy |
|----|------|------------|--------|-------|---------------------|
| R-001 | **Technology Anxiety & Learner Resistance** | High (3) | High (3) | 9 | Use agricultural analogies, celebrate small wins, normalize mistakes, share peer testimonials |
| R-002 | **Seasonal Availability Conflicts** | Very High (4) | Medium (2) | 8 | Modular curriculum design, recap sessions after gaps, asynchronous resources, flexible scheduling |
| R-003 | **Accessibility Compliance Failures** | Medium (2) | Very High (4) | 8 | Implement UDL from start, use accessibility checkers, test with assistive technologies |
| R-004 | **Single Point of Failure (Instructor)** | Medium (2) | Very High (4) | 8 | Develop comprehensive facilitator guides, record sessions, build buffer time, identify backup facilitator |
| R-005 | **Cognitive Overload** | High (3) | Medium (2) | 6 | Chunk content into micro-topics, slow pacing, use visual aids, provide job aids |

**Risk Monitoring Schedule:**
- **Weekly:** Learner engagement and attendance tracking during delivery phase
- **Bi-weekly:** Accessibility audit status updates during development phase
- **Monthly:** Risk register review and mitigation effectiveness assessment
- **Post-session:** Cognitive load and learner confidence checks via feedback surveys

See [RISK-REGISTER.md](./RISK-REGISTER.md) for detailed risk profiles, contingency plans, and early warning triggers.

---

## Immediate Next Steps

| # | Action | Owner | Timeline |
|---|--------|-------|----------|
| 1 | **Conduct learner needs assessment survey** (technology access, skill levels, seasonal availability) | Curriculum Developer | Week 1 |
| 2 | **Define learning objectives for all 8-12 sessions** using Bloom's Taxonomy progression | Curriculum Developer | Week 2 |
| 3 | **Create session outline template** following Kolb's Experiential Learning Cycle (experience → reflect → conceptualize → experiment) | Curriculum Developer | Week 2 |
| 4 | **Develop farm use case library** (10+ scenarios: planting schedules, livestock tracking, equipment maintenance, grant tracking) | Curriculum Developer | Week 3 |
| 5 | **Build accessibility compliance checklist** based on WCAG 2.2 Level AA and Section 508 requirements | Curriculum Developer | Week 3 |
| 6 | **Prototype Session 1 materials** (slides, lab exercise, quick-reference guide) with accessibility features | Curriculum Developer | Week 4-5 |
| 7 | **Conduct accessibility audit of Session 1** using automated tools (WAVE, axe DevTools) and manual review | Curriculum Developer | Week 6 |
| 8 | **Pilot test Session 1** with 1-2 farmers or proxy reviewers (agricultural extension educators) | Curriculum Developer | Week 7 |

---

## Project Artifacts

| Document | Description |
|----------|-------------|
| [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md) | Problem statement, stakeholders, constraints, desired outcomes |
| [PROJECT-PLAN.md](./PROJECT-PLAN.md) | This document - executive summary, phases, timeline, ROI, risks |
| [JIRA-STRUCTURE.md](./_plan/JIRA-STRUCTURE.md) | Epic hierarchy, user stories, sprint planning, story points |
| [GANTT-CHART.md](./GANTT-CHART.md) | Visual timeline, critical path, dependency matrix, milestones |
| [DEPENDENCY-ANALYSIS.md](./DEPENDENCY-ANALYSIS.md) | Critical path analysis, dependency graph, bottleneck identification |
| [RACI-CHART.md](./RACI-CHART.md) | Responsibility matrix, role definitions, decision authority |
| [RISK-REGISTER.md](./RISK-REGISTER.md) | Risk profiles, scoring, mitigation strategies, contingency plans |
| [SEVERITY-CLASSIFICATION.md](./SEVERITY-CLASSIFICATION.md) | Issue prioritization framework, escalation procedures |
| [BEST-PRACTICES.md](./_research/BEST-PRACTICES.md) | Framework applications (ADDIE, Bloom's, Andragogy, UDL, Kolb, etc.) |
| [SUCCESS-METRICS.md](./SUCCESS-METRICS.md) | KPIs, baselines, targets, measurement methods, dashboard design |
| [RUNBOOK-TEMPLATE.md](./RUNBOOK-TEMPLATE.md) | Operational procedures, troubleshooting guides, session facilitation scripts |
| [DOMAIN-RESEARCH.md](./_research/DOMAIN-RESEARCH.md) | Industry classification, terminology, frameworks, benchmarks, compliance |
| [README.md](./README.md) | GitHub landing page with project overview and artifact index |
| [CHANGELOG.md](./CHANGELOG.md) | Version history of planning artifacts |

---

## Appendices

### A. Framework Alignment

This project applies 9 authoritative frameworks documented in [BEST-PRACTICES.md](./_research/BEST-PRACTICES.md):

1. **ADDIE Model** - Systematic instructional design process
2. **Bloom's Taxonomy** - Cognitive level progression (Remember → Create)
3. **Andragogy** - Adult learning principles
4. **Kirkpatrick Model** - Four-level training evaluation
5. **Universal Design for Learning (UDL)** - Accessibility and inclusive design
6. **SAM (Successive Approximation Model)** - Agile curriculum development
7. **Cognitive Load Theory** - Managing learner mental effort
8. **Kolb's Experiential Learning Cycle** - Hands-on learning progression
9. **Agricultural Extension Education** - Farmer-focused training best practices

### B. Success Criteria Mapping to Desired Outcomes

| Desired Outcome (PROJECT-CONTEXT.md) | Success Criteria | Measurement Method |
|--------------------------------------|------------------|--------------------|
| Farmers can independently navigate GitHub web interface | 80%+ demonstrate navigation skills in hands-on assessment (Session 1-2) | Kirkpatrick Level 2 formative assessment |
| Farmers can create, manage, comment on Issues | 80%+ complete "Create issue for farm task" exercise (Session 2-3) | Kirkpatrick Level 2 formative assessment |
| Farmers can use GitHub Projects to track work | 80%+ build project board for planting schedule (Session 3-4) | Kirkpatrick Level 2 formative assessment |
| Farmers collaborate on shared repositories without hand-holding | 60%+ actively using GitHub 60 days post-training | Kirkpatrick Level 3 behavior tracking |
| (Stretch) Farmers use GitHub Actions and automated workflows | 40%+ create basic Actions workflow (Session 7-8) | Kirkpatrick Level 2 advanced assessment |
| (Stretch) Farmers leverage Copilot for AI-assisted work | 30%+ use Copilot during capstone project (Session 10-12) | Kirkpatrick Level 2 advanced assessment |
| (Stretch) Farmers become train-the-trainer | 1+ high-performing learner identified and coached | Train-the-trainer readiness evaluation |

### C. Glossary

See [DOMAIN-RESEARCH.md](./_research/DOMAIN-RESEARCH.md) Terminology Dictionary for complete definitions.

**Key Terms:**
- **ADDIE:** Analysis, Design, Development, Implementation, Evaluation - systematic instructional design framework
- **Andragogy:** The art and science of adult learning (vs. pedagogy for children)
- **Bloom's Taxonomy:** Hierarchical classification of learning objectives (Remember → Understand → Apply → Analyze → Evaluate → Create)
- **Cognitive Load Theory:** Theory addressing working memory limits and instructional design to minimize unnecessary mental effort
- **Kirkpatrick Model:** Four-level training evaluation framework (Reaction, Learning, Behavior, Results)
- **SAM:** Successive Approximation Model - agile instructional design approach using rapid prototyping
- **UDL:** Universal Design for Learning - framework for creating flexible, accessible learning environments
- **Section 508:** U.S. federal law requiring electronic content be accessible to people with disabilities
- **WCAG:** Web Content Accessibility Guidelines - international standards for web accessibility (currently WCAG 2.2 Level AA)

---

**Document Version:** 1.0
**Last Updated:** 2026-01-29
**Owner:** Curriculum Developer/Instructor
**Review Cadence:** Weekly during development phases; monthly during delivery phase
