# GitHub for Farms — Training Curriculum

> 12 hands-on sessions that take farmers from zero GitHub experience to independent usage — accessible, farm-relevant, and ready to deliver.

[![Version](https://img.shields.io/badge/version-0.1.0-1E5128)](./CHANGELOG.md) [![License: MIT](https://img.shields.io/badge/license-MIT-4E9F3D)](./LICENSE) [![Sessions](https://img.shields.io/badge/sessions-12-F4F1DE?labelColor=1E5128)](./sessions/) [![WCAG 2.2 AA](https://img.shields.io/badge/WCAG_2.2-AA_compliant-4E9F3D)](./curriculum/accessibility-checklist.md) [![Templates](https://img.shields.io/badge/farm_templates-4-F4F1DE?labelColor=1E5128)](./templates/)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset=".github/readme-infographic.svg">
  <img src=".github/readme-infographic.svg" alt="Project Overview Infographic" width="800">
</picture>

## What This Is

A complete, ready-to-deliver training curriculum that teaches farmers how to use GitHub for farm management — task tracking, team collaboration, automation, and AI-assisted writing. Every session includes a slide deck (HTML + PowerPoint), lab exercise, topic-specific guide, and facilitation script.

**No coding required.** Everything uses the GitHub web interface. Farm analogies ground every concept in familiar territory.

## Sessions at a Glance

| # | Session | What Learners Do | Farm Analogy |
|---|---------|------------------|--------------|
| 1 | **Repositories & Navigation** | Explore a farm repository | Your digital farm office |
| 2 | **Issues & Task Tracking** | Create Issues with photos and labels | Work orders for the farm |
| 3 | **Projects & Planning** | Build a Board with drag-and-drop | Your farm planning board |
| 4 | **Pull Requests & Collaboration** | Fork, edit, review, merge in pairs | Reviewing a farmhand's work |
| 5 | **Notifications & Communication** | @mention peers, start a Discussion | Farm radio / bulletin board |
| 6 | **Templates & Standardization** | Create Issue Templates and Saved Replies | Pre-printed work order forms |
| 7 | **GitHub Actions Intro** | Read a YAML workflow (no coding) | Automatic farm helpers |
| 8 | **Automating Farm Tasks** | Set up a weekly reminder workflow | Automated irrigation timer |
| 9 | **Advanced Projects & Roadmaps** | Build a seasonal farm roadmap with Timeline view | The master farm calendar |
| 10 | **GitHub Copilot Basics** | Draft Issue descriptions with AI | Your AI writing assistant |
| 11 | **Spark & Copilot Agents** | Explore a pre-built Spark app | Your digital farmhand team |
| 12 | **Capstone & Train-the-Trainer** | Build a complete farm repository from scratch | Graduation day |

## What's Included

### Per Session (`sessions/session-NN/`)

Each session folder contains:

- **`slides.md`** — Full content outline with speaker notes
- **`slides/`** — Individual HTML slides (720pt x 405pt, 16:9)
- **`slides.pptx`** — Ready-to-present PowerPoint deck
- **`lab-exercise.md`** — Hands-on activity with 3 farm scenario options
- **`*-guide.md`** — Topic-specific printer-friendly handout (e.g., `issue-creation-guide.md`, `spark-agents-guide.md`)
- **`facilitation-script.md`** — Timing, talking points, troubleshooting
- **`accessibility-testing-log.md`** — WCAG 2.2 AA audit results

### Guides (`guides/`)

| Guide | Description |
|-------|-------------|
| [Glossary](./guides/glossary.md) | 40+ terms with plain-language definitions and farm analogies |
| [Cheat Sheet](./guides/cheat-sheet.md) | 10 common tasks with step-by-step instructions |
| [Troubleshooting](./guides/troubleshooting.md) | 15 common problems organized by category |
| [Device Guides](./guides/device-guides.md) | Laptop, tablet, and phone instructions |

### Farm Repository Templates (`templates/`)

| Template | Use Case |
|----------|----------|
| [Farm Task Tracker](./templates/farm-task-tracker/) | General farm operations with equipment, livestock, field Issues |
| [Planting Schedule](./templates/planting-schedule/) | Seasonal planting with Timeline view and crop tracking |
| [Equipment Maintenance](./templates/equipment-maintenance/) | Repair requests, routine maintenance, inspection logs |
| [Grant Compliance](./templates/grant-compliance/) | Milestone tracking, reporting deadlines, audit trails |

### Delivery Infrastructure (`delivery/`)

- [Demo Environment Spec](./delivery/demo-environment-spec.md) — 4 pre-configured repositories for live demos
- [Logistics Checklist](./delivery/logistics-checklist.md) — Venue setup, print matrix, emergency fallbacks
- [Evaluation Framework](./delivery/evaluation/) — Kirkpatrick L1-L4 surveys and tracking tools

### Curriculum Design (`curriculum/`)

- [Learning Objectives](./curriculum/learning-objectives.md) — 60 measurable objectives mapped to Bloom's Taxonomy
- [Farm Use Cases](./curriculum/farm-use-cases.md) — 15 scenarios across 10 farm categories
- [Seasonal Schedule](./curriculum/seasonal-schedule.md) — 3 delivery blocks with planting/harvest breaks
- [Accessibility Checklist](./curriculum/accessibility-checklist.md) — 35 WCAG 2.2 AA checkpoints

## Design Principles

**Accessible first.** 100% WCAG 2.2 AA compliance verified across all materials. Minimum 24pt headers, 18pt body text in slides. High-contrast forest green/cream palette. No color-as-sole-indicator.

**Farm-relevant.** Every concept is grounded in farming: repositories are "your digital farm office," Issues are "work orders," Pull Requests are "reviewing a farmhand's work." Three scenario options per lab (crops, livestock, equipment).

**No prerequisites.** Learners start from zero. No command line, no coding, no prior GitHub knowledge. Web UI only. "I Do / We Do / You Do" facilitation model with 60-70% hands-on practice time.

**Seasonal awareness.** Three delivery blocks (Mar-Apr, Jul-Aug, Nov-Dec) with planting and harvest breaks built in. Asynchronous bridge activities keep momentum between blocks.

## Getting Started

### For Instructors

1. Clone this repository
2. Review [SESSION-TEMPLATE.md](./curriculum/session-template.md) for the facilitation model
3. Set up the [demo environment](./delivery/demo-environment-spec.md)
4. Print handouts per the [logistics checklist](./delivery/logistics-checklist.md)
5. Present using the PPTX decks in each session folder

### For Curriculum Developers

To rebuild slide decks after editing HTML:

```bash
cd workspace && npm install

# Rebuild a single session
export NODE_PATH=$(pwd)/node_modules
cd ../sessions/session-01 && node build-slides.js

# Rebuild all sessions
export NODE_PATH=/path/to/workspace/node_modules
for s in 01 02 03 04 05 06 07 08 09 10 11 12; do
  cd /path/to/sessions/session-$s
  node build-slides.js
done
```

## Project Planning Artifacts

This curriculum was developed using structured project planning. The full artifact set is included:

<details>
<summary>Planning and governance documents</summary>

| Document | Description |
|----------|-------------|
| [PROJECT-CONTEXT.md](./PROJECT-CONTEXT.md) | Problem statement, stakeholders, constraints |
| [PROJECT-PLAN.md](./PROJECT-PLAN.md) | 4-phase timeline, ROI analysis |
| [JIRA-STRUCTURE.md](./_plan/JIRA-STRUCTURE.md) | 15 epics, 58 stories, sprint planning |
| [DEPENDENCY-ANALYSIS.md](./DEPENDENCY-ANALYSIS.md) | Critical path, parallel work tracks |
| [RACI-CHART.md](./RACI-CHART.md) | Responsibility matrix |
| [RISK-REGISTER.md](./RISK-REGISTER.md) | 13 risks with mitigation strategies |
| [SEVERITY-CLASSIFICATION.md](./SEVERITY-CLASSIFICATION.md) | Priority framework |
| [SUCCESS-METRICS.md](./SUCCESS-METRICS.md) | Kirkpatrick L1-L4 KPIs |
| [GANTT-CHART.md](./GANTT-CHART.md) | 47-week timeline |
| [BEST-PRACTICES.md](./_research/BEST-PRACTICES.md) | 9 instructional design frameworks |
| [DOMAIN-RESEARCH.md](./_research/DOMAIN-RESEARCH.md) | Industry analysis and compliance requirements |
| [RUNBOOK-TEMPLATE.md](./RUNBOOK-TEMPLATE.md) | Operational procedures |
| [CHANGELOG.md](./CHANGELOG.md) | Version history |

</details>

## Instructional Design Frameworks

| Framework | How It's Applied |
|-----------|-----------------|
| **Bloom's Taxonomy** | Learning objectives progress from Remember to Create across 12 sessions |
| **Kolb's Experiential Learning** | Every session follows Experience, Reflect, Conceptualize, Apply |
| **UDL** | Multiple representation modes, engagement options, assessment methods |
| **Kirkpatrick Model** | 4-level evaluation: reaction surveys, skill observation, behavior follow-up, farm outcomes |
| **Cognitive Load Theory** | Chunked content, farm analogies reduce extraneous load |
| **SAM** | Rapid prototyping with pilot testing and iterative revision |
| **Agricultural Extension** | Train-the-trainer model adapted from USDA cooperative extension |

## License

MIT — See [LICENSE](./LICENSE)
