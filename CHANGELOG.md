# Changelog

All notable changes to this project's planning artifacts are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

#### Sprint 1 — EPIC-001: Project Initiation & Research
- **[Curriculum]**: Learner needs assessment with proxy analysis covering device access, skill levels, seasonal availability, technology anxiety indicators, and accessibility needs (`curriculum/learner-profile.md`)
- **[Curriculum]**: Gap analysis of existing GitHub training resources (GitHub Skills, Microsoft Learn, `../github` repo) — 18 of 20 requirements fully unmet; recommendation to build custom curriculum (`curriculum/gap-analysis.md`)
- **[Curriculum]**: Farm use case library with 15 scenarios across 10 categories (crops, livestock, equipment, compliance, collaboration, automation, templates, AI-assisted) mapped to GitHub features with difficulty levels and session alignment (`curriculum/farm-use-cases.md`)

#### Sprint 2 — EPIC-002: Curriculum Design & Planning
- **[Curriculum]**: Learning objectives for all 12 sessions — 60 measurable objectives mapped to Bloom's Taxonomy progression (Remember → Create) with prerequisite chain (`curriculum/learning-objectives.md`)
- **[Curriculum]**: Session outline template following Kolb's Experiential Learning Cycle with 150-minute timeline, "I Do / We Do / You Do" facilitation model, 60-70% practice time allocation, integrated accessibility checklist (`curriculum/session-template.md`)
- **[Curriculum]**: Seasonal training schedule with 3 delivery blocks (Mar–Apr, Jul–Aug, Nov–Dec), planting/harvest blackout periods, recap session designs, and asynchronous bridge activities (`curriculum/seasonal-schedule.md`)
- **[Curriculum]**: Accessibility compliance checklist with 35 checkpoints across 6 categories (visual, auditory, navigation, content, structural, material-specific), 10 CRITICAL items, 8 testing tools with access instructions (`curriculum/accessibility-checklist.md`)

#### Sprint 3 — EPIC-003 / EPIC-009: Sessions 1-2 Prototype + Accessibility Workflow
- **[Session 1]**: Complete session materials for "Introduction to GitHub & Repositories" — 25-slide deck with farm analogies, "Explore a farm repository" lab exercise with 3 scenario options, 15-term terminology cheat sheet with farm analogies, full facilitation script with timing, troubleshooting, and emergency procedures (`sessions/session-01/`)
- **[Session 2]**: Complete session materials for "GitHub Issues for Task Tracking" — 24-slide deck with farm task examples, lab exercise creating 3 Issues with photos/labels/comments, "Issue Creation Step-by-Step" printer-friendly guide, full facilitation script with L2 observation checklist (`sessions/session-02/`)
- **[Accessibility]**: 6-step accessibility testing workflow with tool-by-tool instructions, time estimates, and testing schedule (`curriculum/accessibility-testing-workflow.md`)
- **[Accessibility]**: Testing log template with 27 checkpoints mapped to WCAG 2.2 AA categories, remediation tracking, and sign-off section (`curriculum/accessibility-testing-log-template.md`)

#### PPTX Slide Decks — Sessions 1-3
- **[Session 1 PPTX]**: 25-slide PowerPoint deck for "Introduction to GitHub & Repositories" — forest green/cream theme, 24pt+ headers, 19pt body, farm analogies throughout, validated via thumbnail grid (`sessions/session-01/slides.pptx`)
- **[Session 2 PPTX]**: 24-slide PowerPoint deck for "GitHub Issues for Task Tracking" — matching theme, two-column layouts for dense content, farm task examples, validated via thumbnail grid (`sessions/session-02/slides.pptx`)
- **[Session 3 PPTX]**: 23-slide PowerPoint deck for "GitHub Projects for Planning" — visual board/table/timeline demos, drag-flow visualization, seasonal calendar mockup, validated via thumbnail grid (`sessions/session-03/slides.pptx`)

#### Sprint 4 — EPIC-003: Session 3 Prototype (Part 2)
- **[Session 3]**: Complete session materials for "GitHub Projects for Planning" — 23-slide deck with Board/Table/Timeline view demos, "Spring planting project board" lab exercise with 3 scenario options, "Project Board Setup Checklist" quick-reference guide, full facilitation script with L2 observation checklist (`sessions/session-03/`)

#### Sprint 4 — EPIC-009: Accessibility Audit + Pilot Test
- **[Accessibility]**: Accessibility testing logs for Sessions 1-3 — 27-checkpoint WCAG 2.2 AA audit per session, contrast ratio calculations, font size analysis, structural review, content/cognitive assessment. All sessions achieved 100% pass rate (of applicable checkpoints) with justified exceptions for data-dense visual demo slides (`sessions/session-0{1,2,3}/accessibility-testing-log.md`)
- **[Pilot Test]**: Simulated pilot test report for Sessions 1-3 — clarity/pacing/relevance/cognitive load scoring, cross-session issue analysis, farmer persona walkthroughs, prioritized remediation recommendations. Overall readiness: 87% (`sessions/pilot-test-report.md`)

#### Sprint 5 — EPIC-003: Iterate Sessions 1-3 Based on Pilot Feedback
- **[Session 1]**: Reworded Slide 6 to lead with people ("Farmers, teachers, researchers") instead of numbers; added data privacy note to Slide 5 and facilitation script; moved "Commit" term from cheat sheet to "Coming Soon" section (`sessions/session-01/`)
- **[Session 2]**: Split Slide 7 into two slides (7 and 7b) to reduce cognitive load; expanded photo upload guidance with device-specific instructions and "skip for now" fallback; added editing tip for typos; clarified that commenting does not close Issues; replaced "right sidebar" with "right side of the page" across all materials; rebalanced lab exercise timing; added fallback task suggestions for open-ended steps (`sessions/session-02/`)
- **[Session 3]**: Added dropdown method as primary alternative to drag-and-drop for Board View; set Timeline View expectations ("covered in Session 9"); standardized "To Do" → "Todo" to match GitHub UI across slides, HTML, lab exercise, and checklist; added Turn and Talk activity at 0:20; reordered demo to teach dropdown first (`sessions/session-03/`)
- **[Template]**: Updated session template to v2.0 with "Lessons Learned from Pilot Testing" section covering timing, terminology, interaction design, photo management, cognitive load, privacy, demo repository, and assessment patterns (`curriculum/session-template.md`)
- **[Demo Repo]**: Created demo farm repository specification with exact file structure, content, pre-created Issues/Labels, and per-session verification checklist (`sessions/demo-repository-spec.md`)

#### Sprint 5 — EPIC-009: UDL Implementation
- **[Sessions 1-3]**: Added UDL Implementation Notes section to all three slide decks documenting 3+ representation modes, engagement options with learner choice, and multi-method assessment strategies per session
- **[Sessions 1-3]**: Verified "Why This Matters for YOUR Farm" openings with partner discussion in all three sessions; confirmed 3 scenario options (crops, livestock, equipment) in all lab exercises; confirmed multi-method assessment (L1 surveys, L2 observation checklists, hands-on artifacts, verbal sharing, written reflection)

#### Sprint 5 — Accessibility Re-Audit
- **[Accessibility]**: Re-audited Sessions 1-3 against 27 WCAG 2.2 AA checkpoints post-revision; all sessions maintained 100% pass rate; Session 3 C2 checkpoint upgraded from PARTIAL to PASS (dropdown method now taught proactively); Sprint 5 remediation entries added to all testing logs (`sessions/session-0{1,2,3}/accessibility-testing-log.md`)

#### Sprint 6 — EPIC-004: Sessions 4-6 Content Development
- **[Session 4]**: Complete session materials for "Collaboration & Pull Requests" — 25-slide deck with fork/edit/PR/review/merge workflow, paired collaboration lab with role-switching (suggest vs. review), "Collaboration Basics" quick-reference guide, full facilitation script with L2 observation checklist. Web UI only, no CLI references. Farm analogy: "photocopy → mark up → hand back for review" (`sessions/session-04/`)
- **[Session 5]**: Complete session materials for "Notifications & Team Communication" — 25-slide deck covering Watch settings, @mentions, GitHub Discussions, and notification management. Lab exercise with real-time peer @mention exchange, Discussion posting, and notification inbox management. "Notification & Communication Settings" quick-reference guide, full facilitation script with L2 checklist. Farm analogy: "text alerts / tap on the shoulder / bulletin board" (`sessions/session-05/`)
- **[Session 6]**: Complete session materials for "Basic Workflows & Templates" — 26-slide deck covering Issue Templates, Saved Replies, and Project Templates preview. Lab exercise creating 3+ custom Issue Templates and 3+ Saved Replies with farm scenarios (equipment, crops, livestock, safety, seasonal, supply). "Template Design Guide" quick-reference with Markdown formatting help. Full facilitation script with L2 checklist. Farm analogy: "pre-printed work order form / rubber stamp" (`sessions/session-06/`)

### Fixed
- **[Content]**: Added explanation for Markdown checkbox syntax `- [ ]` in Session 2 slides.md — farmers may not recognize raw Markdown syntax
- **[Content]**: Defined "custom field" term in Session 3 slides.md and slide-06.html — parenthetical explanation "(extra columns you create yourself)"
- **[Content]**: Converted Session 3 project-board-checklist.md workflow steps from bullet points to numbered steps for accessibility compliance (D5: sequential instructions)
- **[PPTX]**: Converted all HTML `<table>` elements to `<div>`-based grid layouts across Sessions 1-3 (6 slides total) — html2pptx does not render `<table>` elements, resulting in empty slides in PowerPoint

### Fixed
- **[Cross-references]**: Corrected 4 broken links to `BEST-PRACTICES.md` in PROJECT-PLAN.md, RUNBOOK-TEMPLATE.md, and SUCCESS-METRICS.md (changed `./BEST-PRACTICES.md` → `./_research/BEST-PRACTICES.md`)

---

## [1.0.0] - 2026-01-30

### Added

#### Core Planning Documents
- [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md): Problem statement, stakeholder analysis, constraints, and desired outcomes for GitHub training curriculum targeting farmers with zero technical background
- [PROJECT-PLAN.md](./PROJECT-PLAN.md): Comprehensive 4-phase project plan with current state analysis, goals, timeline (47 weeks), JIRA overview, RACI summary, ROI model, and risk management summary
- [JIRA-STRUCTURE.md](./JIRA-STRUCTURE.md): Complete work breakdown structure with 15 epics, 58 user stories, acceptance criteria, sprint planning (~240 story points), and team assignments
- [DEPENDENCY-ANALYSIS.md](./DEPENDENCY-ANALYSIS.md): Critical path analysis, dependency graph, bottleneck identification, parallel work tracks, and risk-adjusted scheduling

#### Governance & Risk Management
- [RACI-CHART.md](./RACI-CHART.md): Responsibility matrix adapted for single-person team, decision authority matrix, role definitions, and ongoing governance activities
- [RISK-REGISTER.md](./RISK-REGISTER.md): 13 identified risks with likelihood/impact scoring, detailed mitigation strategies, contingency plans, and monitoring schedule (including technology anxiety, seasonal conflicts, accessibility compliance, and single point of failure)
- [SEVERITY-CLASSIFICATION.md](./SEVERITY-CLASSIFICATION.md): 4-tier priority framework (P0-P3), decision tree, escalation procedures, SLA definitions, and issue triage workflows

#### Timeline & Scheduling
- [GANTT-CHART.md](./GANTT-CHART.md): Detailed 47-week timeline with phase breakdown, dependency matrix, 9 milestones, parallel work tracks, seasonal constraint analysis, and risk-adjusted scenarios
- [.github/gantt-chart.svg](./.github/gantt-chart.svg): Hand-crafted SVG Gantt chart visualization with color-coded phases (blue/green/amber/purple), critical path highlighting, and seasonal break indicators

#### Measurement & Quality
- [SUCCESS-METRICS.md](./SUCCESS-METRICS.md): Kirkpatrick 4-level evaluation framework with 8 primary metrics, 6 secondary metrics, dashboard specification (4-section layout), data sources, reporting cadence, and project closure criteria
- [BEST-PRACTICES.md](./_research/BEST-PRACTICES.md): Application of 9 authoritative frameworks (ADDIE, Bloom's Taxonomy, Andragogy, Kirkpatrick, UDL, SAM, Cognitive Load Theory, Kolb's Experiential Learning, Agricultural Extension Education) with industry benchmarks, citations, and implementation guidance
- [DOMAIN-RESEARCH.md](./_research/DOMAIN-RESEARCH.md): Industry classification (Education - Digital Literacy for Agriculture), terminology dictionary, regulatory compliance requirements (ADA, Section 508, WCAG 2.2 Level AA), and effectiveness benchmarks
- [RUNBOOK-TEMPLATE.md](./RUNBOOK-TEMPLATE.md): Operational procedures template with session facilitation scripts, troubleshooting guides, accessibility checklists, and learner support protocols

#### Documentation & Visuals
- [README.md](./README.md): GitHub landing page with project overview, problem/approach summary, framework table, financial impact, complete artifact index, team structure, timeline highlights, and quick start guide
- [.github/readme-infographic.svg](./.github/readme-infographic.svg): Visual summary infographic showing before/after comparison, ROI highlights, 4-phase timeline bar, phase deliverables, and key metrics
- [CHANGELOG.md](./CHANGELOG.md): This document - version history of all planning artifacts

#### Executive Materials
- [workspace/slides/01-cover.html](./workspace/slides/01-cover.html): Executive briefing cover slide with project title and tagline
- [workspace/slides/02-problem.html](./workspace/slides/02-problem.html): Problem statement slide with current state metrics table
- [workspace/slides/03-approach.html](./workspace/slides/03-approach.html): Solution approach slide with 4-phase overview and instructional design frameworks
- [workspace/slides/04-timeline.html](./workspace/slides/04-timeline.html): Timeline slide with 47-week Gantt visualization and critical milestones
- [workspace/slides/05-governance.html](./workspace/slides/05-governance.html): Governance slide with RACI summary and top 5 risks
- [workspace/slides/06-metrics.html](./workspace/slides/06-metrics.html): Success metrics slide with Kirkpatrick 4-level KPIs and dashboard preview
- [workspace/slides/07-outcomes.html](./workspace/slides/07-outcomes.html): Expected outcomes slide with ROI model and 3-year impact projection
- [workspace/slides/08-next-steps.html](./workspace/slides/08-next-steps.html): Next steps slide with immediate action items and contact information

#### Build Infrastructure
- [workspace/package.json](./workspace/package.json): NPM dependencies for asset generation (Puppeteer for PNG screenshots, PptxGenJS for PowerPoint deck)
- [workspace/generate-assets.js](./workspace/generate-assets.js): Build script to generate PNG assets from HTML slides using Puppeteer
- [workspace/build-deck.js](./workspace/build-deck.js): Build script to generate PowerPoint executive deck from HTML slide sources

#### GitHub Templates & Workflows
- [.github/ISSUE_TEMPLATE/epic.md](./.github/ISSUE_TEMPLATE/epic.md): Epic issue template with phase, priority, dependencies, acceptance criteria, and story breakdown
- [.github/ISSUE_TEMPLATE/story.md](./.github/ISSUE_TEMPLATE/story.md): User story issue template with tasks, acceptance criteria, story points, and INVEST checklist
- [.github/ISSUE_TEMPLATE/risk.md](./.github/ISSUE_TEMPLATE/risk.md): Risk issue template with likelihood/impact scoring, mitigation strategies, triggers, and monitoring plan
- [.github/workflows/build-visuals.yml](./.github/workflows/build-visuals.yml): GitHub Actions workflow for automated visual asset generation
- [.github/workflows/validate-artifacts.yml](./.github/workflows/validate-artifacts.yml): GitHub Actions workflow for artifact consistency validation (cross-reference checks)

#### Documentation Guides
- [docs/COMMAND-GUIDE.md](./docs/COMMAND-GUIDE.md): Reference guide for all Claude agent slash commands with invocation examples and use cases
- [QUICKSTART.md](./QUICKSTART.md): Abbreviated quick start guide for template users

### Project Statistics

- **Total Planning Artifacts:** 20 core documents
- **Total Epics:** 15 across 4 phases
- **Total User Stories:** 58 with acceptance criteria
- **Estimated Story Points:** ~240 points (development phase)
- **Project Duration:** 47 weeks (19 weeks development + 28 weeks delivery with seasonal breaks)
- **Frameworks Applied:** 9 industry-standard instructional design and evaluation models
- **Identified Risks:** 13 with detailed mitigation strategies
- **Success Metrics Defined:** 14 metrics (8 primary, 6 secondary) mapped to Kirkpatrick 4-level evaluation
- **Visual Assets:** 3 SVG infographics + 8 HTML executive slides
- **Lines of Markdown:** ~10,000+ across all artifacts
- **Accessibility Compliance Target:** 90%+ WCAG 2.2 Level AA

---

## Version History Legend

**[Major.Minor.Patch]** - YYYY-MM-DD

### Categories
- **Added:** New artifacts, sections, or features
- **Changed:** Updates to existing artifacts
- **Deprecated:** Soon-to-be-removed artifacts or sections
- **Removed:** Deleted artifacts or sections
- **Fixed:** Bug fixes, broken links, or content corrections
- **Security:** Security-related updates

---

**Document Version:** 1.0.0
**Last Updated:** 2026-01-30
**Owner:** Curriculum Developer/Instructor
**Next Review:** Post-Phase 1 completion (Week 4)
