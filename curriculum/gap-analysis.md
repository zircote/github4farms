# Gap Analysis — Existing GitHub Training Resources

> **Date:** 2026-01-30
>
> **Purpose:** Evaluate existing GitHub training materials for suitability to the target audience (farmers with no technical experience) and identify what can be reused vs. what must be built from scratch.

---

## 1. Resources Reviewed

### External GitHub Training Platforms

| Resource | URL | Format | Target Audience |
|----------|-----|--------|----------------|
| GitHub Skills | github.com/skills | Interactive repos | Developers new to GitHub |
| GitHub Learning Pathways | resources.github.com/learn/pathways | Guided courses | Software teams, DevOps |
| Microsoft Learn — GitHub modules | learn.microsoft.com | Self-paced modules | IT professionals, developers |
| GitHub Docs | docs.github.com | Reference documentation | All GitHub users |
| GitHub for Beginners (YouTube) | YouTube | Video series | General beginners |

### Internal Reference — `../github` Repository

| File/Directory | Content | Relevance |
|----------------|---------|-----------|
| `docs/COMPREHENSIVE_GUIDE.md` | Full GitHub ecosystem guide covering repos, Actions, security, templates | HIGH reference value; developer-focused language |
| `docs/GITHUB_ECOSYSTEM_BEST_PRACTICES.md` | Best practices for GitHub workflows, CI/CD, security | LOW — too technical for farmer audience |
| `docs/ADOPTION.md` | How to adopt the GitHub ecosystem; CLI-heavy setup | LOW — assumes developer context |
| `docs/USE_CASES.md` | Use cases for solo devs, teams, open source, non-code projects | MEDIUM — "Non-Code Projects" section has reusable patterns |
| `docs/case-studies/` | Case studies of GitHub ecosystem adoption | LOW — enterprise/developer focused |
| `docs/TROUBLESHOOTING.md` | Common GitHub issues and fixes | MEDIUM — some items adaptable (permissions, notifications) |
| `docs/GOTCHAS_AND_TIPS.md` | Tips and common pitfalls | MEDIUM — some transferable to beginners |
| `docs/research/` | Research briefs on Copilot, content automation | LOW — too advanced for initial sessions |
| `templates/` | 15+ project templates (Python, Go, TypeScript, etc.) | LOW — code-focused; not applicable to farm use cases |
| `org-github/` | Organization-level configs (labels, workflows, security) | MEDIUM — label concepts and workflow patterns are adaptable |

---

## 2. Gap Analysis

### Comparison Matrix: Existing Materials vs. Farmer Needs

| Requirement | GitHub Skills | Microsoft Learn | GitHub Docs | `../github` Repo | Gap? |
|-------------|:---:|:---:|:---:|:---:|:---:|
| **Zero technical background assumed** | No | No | No | No | **GAP** |
| **Farm-specific scenarios and analogies** | No | No | No | No | **GAP** |
| **In-person workshop format (facilitation scripts, timing)** | No | No | No | No | **GAP** |
| **Slide decks for classroom delivery** | No | No | No | No | **GAP** |
| **Hands-on labs with farm context** | No | No | No | No | **GAP** |
| **Seasonal scheduling accommodation** | No | No | No | No | **GAP** |
| **WCAG 2.2 AA / Section 508 compliance focus** | Partial | Partial | Yes | No | **PARTIAL GAP** |
| **Web UI only (no CLI/terminal)** | Partial | No | Mixed | No | **GAP** |
| **Agricultural terminology and mental models** | No | No | No | No | **GAP** |
| **Cognitive load management for non-tech adults** | No | No | No | No | **GAP** |
| **Technology anxiety mitigation strategies** | No | No | No | No | **GAP** |
| **Kirkpatrick evaluation framework** | No | No | No | No | **GAP** |
| **GitHub terminology with farm analogies** | No | No | No | No | **GAP** |
| **Device-agnostic guides (phone, tablet, laptop)** | No | Partial | Yes | No | **PARTIAL GAP** |
| **Print-friendly quick-reference materials** | No | No | Partial | No | **GAP** |
| **GitHub Projects coverage (Board, Table, Timeline)** | Limited | Limited | Yes | No | **PARTIAL GAP** |
| **GitHub Actions for non-developers** | No | No | Limited | No | **GAP** |
| **GitHub Copilot for non-code tasks** | No | No | Limited | No | **GAP** |
| **GitHub Spark and Agents intro** | No | No | Limited | No | **GAP** |
| **Train-the-trainer framework** | No | No | No | No | **GAP** |

### Gap Summary

- **18 of 20 requirements** have full gaps — no existing materials address farmer audiences
- **2 requirements** have partial gaps — some existing materials partially applicable but need significant adaptation
- **0 requirements** are fully met by existing resources

---

## 3. Reusable Resources

Despite the significant gaps, the following resources can be adapted or referenced:

### Directly Reusable (with adaptation)

| Resource | Source | How to Reuse |
|----------|--------|-------------|
| GitHub terminology definitions | GitHub Docs glossary | Adapt definitions to plain language; add farm analogies |
| Interface navigation paths | GitHub Docs | Reference the step sequences; replace developer context with farm context |
| GitHub Projects feature descriptions | GitHub Docs | Use as technical reference for slide content accuracy |
| Label concept and structure | `../github` repo `org-github/` | Adapt label categories from developer (bug, feature) to farm (equipment, livestock, crops) |
| Workflow YAML structure overview | `../github` repo docs | Simplify for read-only conceptual introduction in Session 7 |
| Troubleshooting common issues | `../github` repo `TROUBLESHOOTING.md` + GitHub Docs | Adapt permission, notification, and UI navigation problems |
| Non-code project patterns | `../github` repo `USE_CASES.md` | Adapt "Non-Code Projects" section for farm record-keeping |

### Reference Only (for instructor preparation)

| Resource | Source | Use |
|----------|--------|-----|
| GitHub Skills interactive exercises | github.com/skills | Study exercise design patterns for inspiration |
| Microsoft Learn module structure | learn.microsoft.com | Reference self-paced module design for async bridge materials |
| GitHub Actions documentation | docs.github.com | Technical reference for building Session 7–8 content |
| Copilot documentation | docs.github.com | Technical reference for Session 10 content |
| `COMPREHENSIVE_GUIDE.md` | `../github` repo | Feature coverage checklist to ensure curriculum completeness |

### Not Reusable

| Resource | Reason |
|----------|--------|
| All code templates (`templates/`) | Language-specific developer templates; no farm applicability |
| CI/CD workflow examples | Too technical; curriculum covers Actions conceptually only |
| Security policy configurations | Enterprise/developer scope; not relevant to farmer training |
| Research briefs on content automation | Advanced topic beyond curriculum scope |
| Case studies (enterprise onboarding) | Wrong audience context entirely |

---

## 4. Recommendation

**Build custom curriculum from scratch.** Existing GitHub training materials are not suitable for the target audience. Every resource reviewed assumes:

1. **Developer context** — Prior knowledge of code, version control, and software development workflows
2. **Self-directed learning** — Ability to navigate documentation independently
3. **CLI comfort** — Many resources default to terminal/command-line instructions
4. **English technical literacy** — Jargon-heavy content without plain-language alternatives
5. **Individual learning** — No facilitation guides, pair exercises, or classroom delivery support

The curriculum must be purpose-built for farmers with zero technical background, using farm-specific analogies, hands-on exercises with agricultural scenarios, and in-person facilitation scripts. The reusable resources listed above provide technical accuracy references and design inspiration, but all content must be created new.

### Effort Estimate

| Component | Estimated Effort | Reuse Level |
|-----------|-----------------|-------------|
| Session slide decks (12) | Build from scratch | 0% reuse |
| Lab exercises (12) | Build from scratch | 0% reuse |
| Facilitation scripts (12) | Build from scratch | 0% reuse |
| Quick-reference guides (4+) | Build from scratch; reference GitHub Docs for accuracy | 5–10% reference |
| Terminology glossary | Adapt from GitHub Docs glossary | 20–30% adaptation |
| Troubleshooting guide | Adapt from GitHub Docs + `../github` troubleshooting | 15–20% adaptation |
| Farm project templates (4) | Build from scratch with farm scenarios | 0% reuse |
| Accessibility compliance | Build from scratch; reference WCAG standards | 0% reuse |
| Evaluation instruments | Build from scratch; reference Kirkpatrick framework | 0% reuse |

---

## 5. External Resources to Monitor

These resources should be checked periodically during curriculum development for updates:

- **GitHub Changelog** (github.blog/changelog) — UI changes that affect screenshots and instructions
- **GitHub Docs** (docs.github.com) — Feature documentation updates
- **GitHub Skills** (github.com/skills) — New courses that might offer design inspiration
- **WCAG 2.2 updates** (w3.org/WAI/WCAG22/) — Accessibility standard changes

---

*This gap analysis confirms that a fully custom curriculum is required. Reusable resources are limited to terminology references and technical accuracy checks.*
