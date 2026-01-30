# Project Planning Template - CLAUDE.md

## Overview

This repository is a **GitHub template** for generating comprehensive, professional project planning artifacts for ANY problem domain. It uses Claude agents and skills to research the domain and produce industry-appropriate documentation.

## How to Use

### Step 1: Create Repository from Template
Click "Use this template" on GitHub to create your project repository.

### Step 2: Define Project Context

**Option A: Interactive Interview (Recommended)**

Run the guided elicitation in Claude Code:
```
/project-context
```
This walks you through a structured interview covering problem statement, domain, stakeholders, constraints, available data, and desired outcomes.

**Option B: Manual Creation**

Create `PROJECT-CONTEXT.md` at the repository root:

```markdown
# Project Context

## Problem Statement
[Describe the problem you're solving with quantified impact if available]

## Domain / Industry
[e.g., SaaS Operations, Healthcare IT, Manufacturing, Financial Services]

## Stakeholders
[Key roles, teams, and organizational structure]

## Constraints
- Budget: [amount or TBD]
- Timeline: [duration or deadline]
- Team size: [number of people]
- Compliance: [regulatory requirements]

## Available Data
[Existing analysis, metrics, reports, or datasets]

## Desired Outcomes
[What success looks like, quantified if possible]
```

### Step 3: Generate All Artifacts
Invoke the master orchestrator:

```
/project-architect Generate complete project planning artifacts based on PROJECT-CONTEXT.md
```

Or generate individual artifacts:
```
/project-context
/domain-research
/project-plan
/gantt-chart
/jira-structure
/raci-chart
/risk-register
/severity-classification
/best-practices
/success-metrics
/runbook-template
/readme-generator
/changelog
/svg-gantt-generator
/infographic-generator
/executive-briefing
/dependency-analyzer
```

## Agent Directory

| Agent | Purpose | Use When |
|-------|---------|----------|
| `project-architect` | Master orchestrator - full artifact set | Starting a new project |
| `context-elicitor` | Interactive context interview | Need help defining project scope |
| `research-specialist` | Domain research and best practices | Need industry context |
| `timeline-architect` | Gantt, JIRA, dependencies | Planning schedule |
| `governance-architect` | RACI, risk, severity | Setting up governance |
| `metrics-architect` | KPIs, dashboards, exec briefing | Defining measurement |
| `documentation-architect` | README, changelog, infographics | Final documentation |

## Generated Artifacts

After execution, you will have:

| Artifact | File | Purpose |
|----------|------|---------|
| Master Plan | `PROJECT-PLAN.md` | Executive summary, phases, ROI |
| Gantt Chart | `GANTT-CHART.md` + `.github/gantt-chart.svg` | Visual timeline |
| Work Breakdown | `JIRA-STRUCTURE.md` | Epics, stories, sprints |
| RACI | `RACI-CHART.md` | Responsibility matrix |
| Risks | `RISK-REGISTER.md` | Risk management |
| Severity | `SEVERITY-CLASSIFICATION.md` | Priority framework |
| Best Practices | `BEST-PRACTICES.md` | Industry standards |
| Metrics | `SUCCESS-METRICS.md` | KPIs and measurement |
| Runbooks | `RUNBOOK-TEMPLATE.md` | Operational procedures |
| README | `README.md` | GitHub landing page |
| Changelog | `CHANGELOG.md` | Version history |
| Infographic | `.github/readme-infographic.svg` | Visual summary |
| Social Preview | `.github/social-preview.svg` | GitHub social image |
| Exec Deck | `workspace/*.pptx` | Executive briefing |

## Quality Standards

All artifacts MUST:
- Use consistent terminology from the domain research
- Include quantified metrics with baselines and targets
- Reference industry frameworks with citations
- Contain Mermaid diagrams or SVG visualizations
- Cross-reference related artifacts
- Match the exemplar quality standard (project-sre)

## Build Commands

```bash
cd workspace && npm install
node generate-assets.js   # Generate PNG assets
node build-deck.js        # Build executive deck
```

## Customization

- **Industry sources**: Edit `.claude/skills/domain-research/SKILL.md` adaptation rules
- **Visual branding**: Edit `.claude/skills/svg-gantt-generator/SKILL.md` color scheme
- **Artifact structure**: Edit individual skill templates in `.claude/skills/`
- **Agent workflows**: Edit orchestration in `.claude/agents/`
