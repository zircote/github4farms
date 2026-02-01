# Context Brief: GitHub Training Curriculum for Farmers

> Read this file first to understand the project before executing the plan.

## What This Project Is

Farmers with no technical background need to learn GitHub for farm data management, collaboration, compliance tracking, and digital literacy. This project develops and delivers a comprehensive 8-12 session in-person training curriculum, taking learners from "What is a repository?" to independently managing farm operations in GitHub. The curriculum uses experiential learning methods (SAM, Kolb's Cycle, Bloom's Taxonomy) and must meet WCAG 2.2 Level AA accessibility standards. All development is volunteer-led ($0 budget) by a single curriculum developer serving a cohort of 1-25 farmers.

## Key Decisions Already Made

1. **Delivery format:** In-person sessions only (not remote/virtual)
2. **GitHub interface:** Web UI only — no CLI, no Git desktop, no terminal commands
3. **Session count:** 8-12 sessions covering Repos → Issues → Projects → Collaboration → Actions → Copilot/Spark
4. **Seasonal scheduling:** 3 training blocks avoiding planting (May-June) and harvest (Sept-Oct) seasons
5. **Instructional design:** SAM (Successive Approximation Model) for iterative development; Kolb's Experiential Learning Cycle for session structure
6. **Assessment framework:** Kirkpatrick 4-level model (Reaction, Learning, Behavior, Results)
7. **Accessibility standard:** WCAG 2.2 Level AA / Section 508 compliance required at 90%+
8. **Team size:** 1 person (curriculum developer/instructor) — all RACI roles are R/A
9. **Budget:** $0 — volunteer effort using free tools (GitHub Free, Google Slides/Docs, free accessibility checkers)
10. **Minimum viable outcome:** Learners navigate repos, create issues, use projects, collaborate without help
11. **Stretch goals:** GitHub Actions, Copilot, Spark, train-the-trainer

## Terminology

| Term | Definition |
|------|-----------|
| **SAM** | Successive Approximation Model — agile instructional design using rapid prototyping and iteration |
| **Kolb's Cycle** | Experiential Learning Cycle: Concrete Experience → Reflective Observation → Abstract Conceptualization → Active Experimentation |
| **Bloom's Taxonomy** | Cognitive level progression: Remember → Understand → Apply → Analyze → Evaluate → Create |
| **Kirkpatrick Model** | 4-level training evaluation: L1 Reaction, L2 Learning, L3 Behavior, L4 Results |
| **UDL** | Universal Design for Learning — multiple means of representation, action, engagement |
| **WCAG 2.2 AA** | Web Content Accessibility Guidelines Level AA — international accessibility standard |
| **Section 508** | U.S. federal law requiring accessible electronic content |
| **Andragogy** | Adult learning theory — learners are autonomous, experience-driven, problem-centered |
| **CLT** | Cognitive Load Theory — managing intrinsic, extraneous, and germane cognitive load |
| **NPS** | Net Promoter Score — learner satisfaction metric (0-10 scale; target +60) |
| **Seasonal blackout** | Planting (May-June) and harvest (Sept-Oct) periods when farmers are unavailable |
| **Train-the-trainer** | High-performing learner coached to deliver training to future cohorts |
| **Farm use case** | Mapping of farm operation (e.g., equipment repair tracking) to GitHub feature (e.g., Issues) |

## File Map

| File | Contains | Read When |
|------|----------|-----------|
| `PROJECT-CONTEXT.md` | Original problem statement, stakeholders, constraints, outcomes | Understanding scope and requirements |
| `PROJECT-PLAN.md` | Phase structure, timeline, ROI, success criteria, next steps | Planning work order and understanding phases |
| `JIRA-STRUCTURE.md` | 15 epics, 58 stories, sprint planning, story points | Detailed task reference and dependencies |
| `DEPENDENCY-ANALYSIS.md` | Critical path, parallel tracks, bottlenecks, milestone dependencies | Understanding what blocks what |
| `RACI-CHART.md` | Role assignments, decision authority matrix | Knowing who owns what (spoiler: it's all the curriculum developer) |
| `RISK-REGISTER.md` | 13 risks with scoring, mitigation strategies, contingency plans | Encountering issues or making risk-aware decisions |
| `SEVERITY-CLASSIFICATION.md` | Priority framework, escalation procedures | Triaging problems during development or delivery |
| `SUCCESS-METRICS.md` | 14 KPIs, measurement instruments, dashboard spec, closure criteria | Verifying completion and measuring outcomes |
| `RUNBOOK-TEMPLATE.md` | Operational procedures, troubleshooting, facilitation scripts | Running training sessions |
| `GANTT-CHART.md` | Visual timeline with critical path | Scheduling and progress tracking |
| `CHANGELOG.md` | Version history of all artifacts | Tracking changes across iterations |
| `README.md` | GitHub landing page with project overview | Quick project orientation |

## Constraints and Guardrails

- **Budget:** $0 — no paid tools, consultants, or materials allowed unless donated
- **Timeline:** 3-6 months development; 12-24 weeks delivery with seasonal breaks; ~47 weeks total calendar time
- **Team:** 1 person does everything — watch for burnout (Risk R-010)
- **Compliance:** ADA/Section 508 — materials MUST meet WCAG 2.2 Level AA (90%+ pass rate)
- **Devices:** Learners use mixed devices (laptops, tablets, phones) — all materials must work across device types
- **Delivery:** In-person only — classroom/workshop setting with live demo and guided practice
- **Seasonal:** No training during May-June (planting) or September-October (harvest)
- **Scope:** GitHub web UI only — no CLI, no local Git, no desktop apps
- **Pacing:** 3-5 concepts max per session; 60-70% hands-on practice time
- **Reading level:** Materials at grade 8 reading level; plain language; farm analogies for all technical terms

## How to Start

1. Read `_plan/EXECUTION-PLAN.md` for the full work breakdown with implementation steps
2. Or read `_plan/RUNSHEET.md` for a sprint-by-sprint checklist
3. Begin with Phase 1, Sprint 1 items (EPIC-001: Project Initiation & Research)
4. Use `_plan/TASK-MANIFEST.json` for programmatic task tracking
5. Reference `RISK-REGISTER.md` when encountering obstacles
6. Reference `SUCCESS-METRICS.md` when verifying completion criteria
