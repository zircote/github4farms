# Accessibility Compliance Checklist

> **Standards:** WCAG 2.2 Level AA, Section 508
> **Scope:** All training materials — slide decks, handouts, lab exercises, videos, digital documents, printed guides
>
> **Date:** 2026-01-30
> **Target:** 90%+ of checkpoints passing for each material

---

## How to Use This Checklist

1. Complete this checklist for **every** session's materials before delivery
2. Record results in the Accessibility Testing Log (`curriculum/accessibility-testing-log-template.md`)
3. Any **FAIL** items must be remediated and re-tested before the material is used
4. Items marked **CRITICAL** must pass — no exceptions
5. Run automated tools first, then manual checks

---

## Testing Tools

| Tool | Purpose | Access |
|------|---------|--------|
| **WAVE** | Web accessibility evaluator — checks structure, contrast, alt text | [wave.webaim.org](https://wave.webaim.org/) (free, browser extension) |
| **axe DevTools** | Automated accessibility testing for web content | [deque.com/axe](https://www.deque.com/axe/) (free browser extension) |
| **WebAIM Contrast Checker** | Color contrast ratio calculator | [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/) |
| **VoiceOver (macOS)** | Built-in screen reader for testing reading order and alt text | System Preferences → Accessibility → VoiceOver |
| **NVDA** | Free screen reader for Windows | [nvaccess.org](https://www.nvaccess.org/) |
| **Hemingway Editor** | Readability level checker | [hemingwayapp.com](https://hemingwayapp.com/) |
| **PDF Accessibility Checker (PAC)** | Tests PDF accessibility against PDF/UA standard | [access-for-all.ch/en/pac](https://www.access-for-all.ch/en/pac) |
| **Color Oracle** | Color blindness simulator | [colororacle.org](https://colororacle.org/) |

---

## Checklist by Category

### A. Visual Accessibility (8 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| A1 | Body text is 14pt minimum; slide body text is 18pt minimum | WCAG 1.4.4 | CRITICAL | ☐ |
| A2 | Header text is 18pt minimum; slide headers are 24pt minimum | WCAG 1.4.4 | CRITICAL | ☐ |
| A3 | Color contrast ratio is 4.5:1 or higher for normal text (3:1 for large text 18pt+) | WCAG 1.4.3 | CRITICAL | ☐ |
| A4 | No information conveyed by color alone — shapes, labels, or patterns supplement color | WCAG 1.4.1 | CRITICAL | ☐ |
| A5 | All images have descriptive alt text (not "image", "screenshot", or empty) | WCAG 1.1.1 | CRITICAL | ☐ |
| A6 | Decorative images are marked as decorative (empty alt text `alt=""`) | WCAG 1.1.1 | HIGH | ☐ |
| A7 | Text is not embedded in images (use real text overlays instead) | WCAG 1.4.5 | HIGH | ☐ |
| A8 | Materials are readable when zoomed to 200% without horizontal scrolling | WCAG 1.4.10 | MEDIUM | ☐ |

---

### B. Auditory Accessibility (4 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| B1 | All video content has accurate captions (not auto-generated without review) | WCAG 1.2.2 | CRITICAL | ☐ |
| B2 | All audio content has a text transcript available | WCAG 1.2.1 | CRITICAL | ☐ |
| B3 | All verbal instructions during sessions are also displayed visually (slides or handouts) | Section 508 | HIGH | ☐ |
| B4 | No content relies on sound alone to convey information (e.g., error beeps) | WCAG 1.3.3 | HIGH | ☐ |

---

### C. Navigation & Motor Accessibility (4 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| C1 | All interactive elements are accessible via keyboard (Tab, Enter, Space, Arrow keys) | WCAG 2.1.1 | CRITICAL | ☐ |
| C2 | No exercise requires mouse-only interaction (drag-and-drop has keyboard alternative) | WCAG 2.1.1 | HIGH | ☐ |
| C3 | Focus order is logical and follows visual layout | WCAG 2.4.3 | HIGH | ☐ |
| C4 | No time-limited exercises without option to extend or disable timer | WCAG 2.2.1 | MEDIUM | ☐ |

---

### D. Content & Cognitive Accessibility (6 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| D1 | Written content is at grade 6–8 reading level (test with Hemingway Editor) | WCAG 3.1.5 | HIGH | ☐ |
| D2 | Technical jargon is defined with farm analogies on first use | Section 508 / UDL | CRITICAL | ☐ |
| D3 | New concepts limited to 3–5 per session (count them) | Cognitive Load Theory | HIGH | ☐ |
| D4 | Content is chunked into sections of 5–10 minutes with clear transitions | Cognitive Load Theory | HIGH | ☐ |
| D5 | Instructions are numbered and sequential (not paragraph-form) | WCAG 3.3.2 | MEDIUM | ☐ |
| D6 | Error messages and troubleshooting guidance use plain, non-blaming language | WCAG 3.3.3 | MEDIUM | ☐ |

---

### E. Structural Accessibility (5 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| E1 | Documents use proper heading hierarchy (H1 → H2 → H3, no skips) | WCAG 1.3.1 | HIGH | ☐ |
| E2 | Lists are formatted as actual HTML/Markdown lists (not simulated with dashes) | WCAG 1.3.1 | MEDIUM | ☐ |
| E3 | Tables have header rows and use proper table markup | WCAG 1.3.1 | HIGH | ☐ |
| E4 | Reading order is logical when navigated by screen reader (test with VoiceOver/NVDA) | WCAG 1.3.2 | HIGH | ☐ |
| E5 | Links have descriptive text (not "click here" or bare URLs) | WCAG 2.4.4 | MEDIUM | ☐ |

---

### F. Material-Specific Checks

#### F1. Slide Decks (3 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| F1a | Slides have unique, descriptive titles (not "Slide 1", "Slide 2") | WCAG 2.4.2 | MEDIUM | ☐ |
| F1b | Slide transitions and animations do not flash more than 3 times per second | WCAG 2.3.1 | CRITICAL | ☐ |
| F1c | Speaker notes included for screen reader users reviewing slides independently | Section 508 | MEDIUM | ☐ |

#### F2. Printed Handouts (3 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| F2a | Print-friendly layout (no dark backgrounds consuming ink; adequate margins) | UDL | MEDIUM | ☐ |
| F2b | Font size is 12pt+ for printed body text | Section 508 | HIGH | ☐ |
| F2c | Available in both print and digital formats | UDL | HIGH | ☐ |

#### F3. Videos (2 checkpoints)

| # | Checkpoint | Standard | Priority | Pass/Fail |
|---|-----------|----------|----------|-----------|
| F3a | Audio description available for visual-only content (e.g., screen demos without narration) | WCAG 1.2.5 | MEDIUM | ☐ |
| F3b | Video player controls are keyboard accessible | WCAG 2.1.1 | HIGH | ☐ |

---

## Checkpoint Summary

| Category | Checkpoints | Critical | High | Medium |
|----------|------------|----------|------|--------|
| A. Visual | 8 | 5 | 2 | 1 |
| B. Auditory | 4 | 2 | 2 | 0 |
| C. Navigation & Motor | 4 | 1 | 2 | 1 |
| D. Content & Cognitive | 6 | 1 | 3 | 2 |
| E. Structural | 5 | 0 | 3 | 2 |
| F. Material-Specific | 8 | 1 | 3 | 4 |
| **Total** | **35** | **10** | **15** | **10** |

**Pass threshold:** 90%+ of all checkpoints (32 of 35)
**Mandatory:** All 10 CRITICAL items must pass — no exceptions

---

## Remediation Resources

| Issue | Resource |
|-------|----------|
| Writing alt text | [WebAIM Alt Text Guide](https://webaim.org/techniques/alttext/) |
| Fixing contrast | [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) — enter foreground/background colors |
| Simplifying reading level | [Hemingway Editor](https://hemingwayapp.com/) — paste text, aim for grade 6–8 |
| Adding captions | [YouTube auto-caption + manual review](https://support.google.com/youtube/answer/2734796) or [Otter.ai](https://otter.ai/) |
| Keyboard navigation testing | Tab through all elements; verify Enter/Space activates buttons; Escape closes dialogs |
| Screen reader testing | VoiceOver: `Cmd+F5` (Mac) / NVDA: free download from [nvaccess.org](https://www.nvaccess.org/) |
| PDF accessibility | [PAC tool](https://www.access-for-all.ch/en/pac) for testing; Adobe Acrobat for remediation |
| Color blindness simulation | [Color Oracle](https://colororacle.org/) — test all visuals with deuteranopia, protanopia, tritanopia |

---

## Integration with Session Template

This checklist is referenced in the Session Outline Template (`curriculum/session-template.md`) under the "Accessibility Checklist (Per Session)" section. The session template includes a simplified per-session version; this document is the comprehensive reference.

**Workflow:**
1. Develop session materials
2. Run automated tools (WAVE, axe, Contrast Checker)
3. Complete manual checks from this checklist
4. Record results in Testing Log
5. Remediate any failures
6. Re-test remediated items
7. Sign off — material is ready for delivery

---

*This checklist should be reviewed when WCAG standards are updated. Current version aligned with WCAG 2.2 Level AA (2023 release, current as of 2026).*
