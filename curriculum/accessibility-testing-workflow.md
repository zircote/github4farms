# Accessibility Testing Workflow

> **Purpose:** A repeatable 6-step process for testing every training material against WCAG 2.2 Level AA and Section 508 standards.
>
> **When to Run:** After developing each session's materials and before pilot testing or delivery.
>
> **Reference:** Full checklist at `curriculum/accessibility-checklist.md`
>
> **Date:** 2026-01-30

---

## 6-Step Testing Process

### Step 1: Automated Scan — WAVE / axe DevTools

**What:** Run automated accessibility checkers on all digital materials.

**How:**
1. Export slide decks to PDF or HTML
2. Open in browser
3. Run WAVE browser extension (wave.webaim.org) — click the extension icon
4. Run axe DevTools extension — open DevTools (F12) → axe tab → "Scan All of My Page"
5. Record all errors and warnings

**What to Look For:**
- Missing alt text on images
- Empty headings or links
- Missing form labels
- Structural issues (skipped heading levels)
- ARIA violations

**Pass Criteria:** Zero errors. Warnings reviewed and justified or fixed.

**Time Required:** 10–15 minutes per material

---

### Step 2: Color Contrast Check

**What:** Verify all text meets minimum contrast ratios.

**How:**
1. Open WebAIM Contrast Checker (webaim.org/resources/contrastchecker)
2. For each slide/page, identify the foreground text color and background color
3. Enter hex values into the checker
4. Verify: Normal text ≥ 4.5:1 ratio, Large text (18pt+) ≥ 3:1 ratio
5. Test with Color Oracle (colororacle.org) for color blindness simulation

**What to Look For:**
- Light gray text on white backgrounds (common fail)
- Colored text on colored backgrounds
- Text over images without solid background overlay
- Charts/graphs using color alone to convey meaning

**Pass Criteria:** All text meets 4.5:1 (normal) or 3:1 (large text) contrast ratio. No information conveyed by color alone.

**Time Required:** 5–10 minutes per material

---

### Step 3: Screen Reader Test

**What:** Navigate all materials using a screen reader to verify reading order and alt text quality.

**How:**
1. **macOS:** Enable VoiceOver (Cmd+F5), navigate with Tab and arrow keys
2. **Windows:** Open NVDA (free from nvaccess.org), navigate with Tab and arrow keys
3. Listen to how the screen reader announces each element
4. Verify images are described meaningfully (not "image" or "screenshot")
5. Verify headings are announced with correct levels
6. Verify reading order matches visual layout

**What to Look For:**
- Images announced as "image" or "graphic" without description
- Headings skipped or out of order
- Reading order jumps illogically (e.g., sidebar read before main content)
- Links announced as URLs instead of descriptive text
- Decorative images not marked as decorative (should be skipped)

**Pass Criteria:** All content is understandable when heard, not seen. Alt text is descriptive and useful.

**Time Required:** 15–20 minutes per material

---

### Step 4: Keyboard Navigation Test

**What:** Verify all interactive elements are accessible without a mouse.

**How:**
1. Set mouse aside — use only keyboard
2. Press Tab to move between interactive elements (links, buttons, form fields)
3. Press Enter or Space to activate elements
4. Press Escape to close dialogs or menus
5. Use arrow keys within groups (radio buttons, menus)
6. Verify focus is visible (highlighted outline on the active element)

**What to Look For:**
- Elements that can't be reached by Tab
- Elements that can't be activated by Enter/Space
- Focus "traps" where Tab can't escape
- Invisible focus (no visual indicator of which element is active)
- Drag-and-drop without keyboard alternative

**Pass Criteria:** All interactive elements reachable and operable by keyboard. Focus visible at all times.

**Time Required:** 10–15 minutes per material

---

### Step 5: Content Readability Check

**What:** Verify written content is at appropriate reading level and uses plain language.

**How:**
1. Copy text into Hemingway Editor (hemingwayapp.com)
2. Check reading level — target grade 6–8
3. Review all technical terms — each should be defined with a farm analogy on first use
4. Count new concepts per session — target 3–5 maximum
5. Verify instructions are numbered and sequential, not paragraph-form

**What to Look For:**
- Sentences longer than 20 words (simplify)
- Passive voice (convert to active)
- Technical jargon without definition
- More than 5 new concepts in a single session
- Instructions written as paragraphs instead of numbered steps

**Pass Criteria:** Reading level grade 6–8. All jargon defined. 3–5 new concepts max per session.

**Time Required:** 10–15 minutes per material

---

### Step 6: Document Results

**What:** Record all findings in the Accessibility Testing Log.

**How:**
1. Open `curriculum/accessibility-testing-log-template.md`
2. Create a copy named `curriculum/accessibility-testing-log-session-NN.md`
3. Fill in one row per test item
4. Mark each checkpoint Pass or Fail
5. For failures, describe the issue and remediation needed
6. After remediation, re-test and record the re-test date

**Pass Criteria:** Log completed with all steps documented. All Critical items pass. 90%+ overall pass rate.

**Time Required:** 5–10 minutes to document

---

## Total Time Per Session

| Step | Time |
|------|------|
| 1. Automated scan | 10–15 min |
| 2. Contrast check | 5–10 min |
| 3. Screen reader test | 15–20 min |
| 4. Keyboard navigation | 10–15 min |
| 5. Readability check | 10–15 min |
| 6. Document results | 5–10 min |
| **Total** | **55–85 min per session** |

---

## Testing Schedule

| Checkpoint | When | Materials Tested |
|-----------|------|-----------------|
| Sprint 3 | After Sessions 1–2 developed | Session 1, Session 2 |
| Sprint 4 | After Session 3 developed | Session 3; full audit of 1–3 |
| Sprint 6 | After Sessions 4–6 developed | Sessions 4–6 |
| Sprint 7 | After Sessions 7–8 developed | Sessions 7–8 |
| Sprint 8 | After Sessions 9–10 developed | Sessions 9–10 |
| Sprint 9 | After Sessions 11–12 developed | Sessions 11–12; final audit of all materials |

---

## Remediation Resources

| Issue Type | Resource | Link |
|-----------|----------|------|
| Alt text writing | WebAIM Alt Text Guide | webaim.org/techniques/alttext/ |
| Contrast fixing | WebAIM Contrast Checker | webaim.org/resources/contrastchecker/ |
| Reading level | Hemingway Editor | hemingwayapp.com |
| Caption creation | YouTube auto-caption + review | support.google.com/youtube/answer/2734796 |
| PDF accessibility | PAC tool | access-for-all.ch/en/pac |
| Color blindness | Color Oracle simulator | colororacle.org |
| Screen reader | NVDA (Windows, free) | nvaccess.org |
| Keyboard testing | No tool needed | Use Tab, Enter, Space, Escape, Arrow keys |

---

*This workflow is referenced in the session template (`curriculum/session-template.md`) and should be followed for every material produced.*
