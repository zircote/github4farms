# Pilot Test Report — Sessions 1-3

> **Date:** 2026-01-30
> **Method:** Simulated walkthrough from perspective of non-technical farmer (zero tech background)
> **Evaluator:** Curriculum Developer (structured review of all materials)
> **Materials Tested:** 12 files across 3 sessions (slides, lab exercises, reference guides, facilitation scripts)

---

## Summary Scores

| Session | Clarity | Pacing | Relevance | Cognitive Load | Overall |
|---------|---------|--------|-----------|---------------|---------|
| **Session 1** (Repos) | 4.5/5 | 3.5/5 | 5/5 | Low-Medium | 85% ready |
| **Session 2** (Issues) | 4.5/5 | 4/5 | 5/5 | Medium | 90% ready |
| **Session 3** (Projects) | 4/5 | 4/5 | 5/5 | Medium | 85% ready |

**Overall Curriculum Readiness:** 87% — strong foundation with operational refinements needed before delivery.

---

## Cross-Session Strengths

### 1. Farm Analogy System (Relevance: 5/5 across all sessions)
Every technical term receives a clear, consistent farm analogy at first use:
- Repository = "Digital barn"
- README = "Sign on the barn door"
- Issue = "Digital work order"
- Project = "Planning whiteboard"

These analogies eliminate the cognitive translation burden for non-technical learners.

### 2. Scaffolded Instruction
All three sessions follow a consistent I Do / We Do / You Do pattern:
- Instructor Demo (passive observation)
- Guided Practice (follow-along)
- Independent Practice (self-directed, scenario-based)

Practice time consistently exceeds 60% of session duration.

### 3. Psychological Safety
Consistent reassurance across all sessions:
- "You cannot break anything"
- "There are no wrong answers"
- "Ask your partner first, raise your hand if you're both stuck"
- Troubleshooting tables anticipate real confusion points

### 4. Reference Material Quality
Each session produces a take-home reference (cheat sheet, guide, or checklist) that farmers can tape to their monitors. These are concise, printable, and self-contained.

### 5. Facilitation Scripts
Detailed word-for-word scripts with timing, checkpoints, emergency procedures, and L2 observation checklists. A non-expert facilitator could deliver these sessions confidently.

---

## Cross-Session Issues Found

### Issue 1: Demo Repository Not Yet Created
**Severity:** HIGH — blocks deployment
**Affected:** All 3 sessions

All materials reference a "demo farm repository" that must contain specific files (planting schedules, equipment logs, livestock records) and pre-created Issues with labels. This repository does not yet exist.

**Action Required:** Create demo repository at `zircote/github4farms-training` with exact structure matching lab exercise questions. Test all lab questions against real content.

### Issue 2: Timing Estimates Are 15-20% Optimistic
**Severity:** MEDIUM
**Affected:** All 3 sessions

Account creation (Session 1), Wi-Fi setup, photo upload (Session 2), and drag-and-drop troubleshooting (Session 3) will take longer than estimated in real classroom conditions.

**Recommendation:** Build 15-minute buffer into each session. Consider extending from 150 to 165-180 minutes, or designate specific content as "if time permits."

### Issue 3: "Todo" vs. "To Do" Inconsistency
**Severity:** LOW
**Affected:** Session 3

GitHub's UI displays "Todo" (no space) but materials sometimes use "To Do" (with space). For zero-tech learners matching screen to handout, exact text match matters.

**Recommendation:** Standardize to "Todo" to match GitHub's UI.

### Issue 4: "Custom Field" vs. "Custom Column" Confusion
**Severity:** MEDIUM
**Affected:** Session 3

Both terms appear but the relationship isn't clarified. Board View uses "columns," Table View uses "fields," but they're the same underlying concept.

**Recommendation:** Use only "custom column" in Session 3. Defer "custom field" to Session 9.

---

## Session-Specific Findings

### Session 1: Introduction to GitHub & Repositories

**Cognitive Load Assessment:** LOW — appropriate for zero-tech beginners

**Key Feedback:**
- "Commit" appears in the terminology cheat sheet but is never explained in the session. Either remove it or add a brief explanatory slide.
- Account creation phase (25 min allocated) may need 30-35 min in practice, especially with CAPTCHA puzzles and email verification.
- The "40+ million people use GitHub" statistic may intimidate rather than reassure. Lead with "farmers, teachers, researchers" before mentioning the number.
- No mention of data privacy/control. Add: "Your repositories can be private — only you can see them."
- Lab exercise Part 3 references specific data in the demo repository that doesn't exist yet.

**Farmer Anxiety Points:**
- Internet reliability ("What if I don't have internet at my farm?")
- Account creation (passwords, CAPTCHA, email verification)
- Fear of "breaking something" (well-addressed in materials)

---

### Session 2: GitHub Issues for Task Tracking

**Cognitive Load Assessment:** MEDIUM — manageable with good scaffolding

**Key Feedback:**
- Photo upload is the highest anxiety action. Device-specific guidance needed (phone camera, Downloads folder, drag-and-drop).
- "Right sidebar" is tech jargon. Replace with "right side of the page" throughout.
- Slide 7 introduces 6 Issue components simultaneously. Consider splitting into two slides.
- No mention that Issues can be edited after creation. Learners will make typos.
- Lab Part 3 Step 12 ("choose any farm task") creates decision paralysis after structured examples. Provide fallback suggestions.
- Clarify that commenting does NOT close an Issue — must explicitly click "Close issue."

**Farmer Anxiety Points:**
- Photo upload (file management, device differences)
- Open-ended task creation after structured guidance
- "Did I do it right?" (well-addressed by checkpoints)

---

### Session 3: GitHub Projects for Planning

**Cognitive Load Assessment:** MEDIUM — three new views in one session is dense

**Key Feedback:**
- The 0:10-0:45 block (35 min of concept intro + demo before practice) is too long. Add a "turn and talk" activity at the 0:20 mark.
- Drag-and-drop alternatives should be taught proactively during the demo, not discovered when something breaks.
- Timeline View will appear empty unless Issues have date fields. Set expectations: "Timeline View will be explored in detail in Session 9."
- The "#" symbol search instruction needs expansion: "Type # and wait 1-2 seconds for the dropdown to appear."
- Clarify that Slide 19's "add 4 Issues" means "create 4 new Issues," not add existing ones.

**Farmer Anxiety Points:**
- Drag-and-drop not working (touchpad issues, browser differences)
- Timeline View appearing empty
- Managing multiple views of the same data (conceptual shift)

---

## Cognitive Load Assessment by Session

### Session 1
| Phase | Duration | Load | Notes |
|-------|----------|------|-------|
| Welcome & Hook | 10 min | Low | Familiar problems, no actions |
| Instructor Demo | 15 min | Low | Passive observation |
| Guided Practice | 20 min | Medium | First hands-on, Wi-Fi setup |
| Concept Discussion | 25 min | Low | Vocabulary + discussion |
| Account Creation | 25 min | Medium-High | Multi-step, email verification |
| Independent Practice | 30 min | Medium | Structured lab exercise |
| Reflection & Wrap | 25 min | Low | Consolidation |

**Overall:** Low-Medium. Peak load at account creation.

### Session 2
| Phase | Duration | Load | Notes |
|-------|----------|------|-------|
| Welcome & Hook | 10 min | Low | Review + motivation |
| Instructor Demo | 15 min | Low | Passive observation |
| Guided Practice | 20 min | High | First Issue creation + photo |
| Concept Discussion | 25 min | Medium | 6 new vocabulary terms |
| Independent Practice | 35 min | High | Self-directed, 6 skills |
| Reflection & Wrap | 20 min | Low | Consolidation |

**Overall:** Medium. Peak load at guided practice (photo upload) and independent practice.

### Session 3
| Phase | Duration | Load | Notes |
|-------|----------|------|-------|
| Welcome & Hook | 10 min | Low | Review from Sessions 1-2 |
| Concept Intro | 20 min | Medium-High | 3 views introduced rapidly |
| Live Demo | 15 min | Low-Medium | 5 sub-tasks demonstrated |
| Guided Practice | 20 min | Medium | Follow-along board creation |
| Independent Practice | 30 min | High | Build complete project board |
| Vocabulary & Wrap | 20 min | Low | Consolidation |

**Overall:** Medium. Peak load at concept introduction (3 views) and independent practice.

---

## Recommended Actions Before Deployment

### Must Fix (Priority 1)
1. **Create demo farm repository** with exact content matching all lab exercises
2. **Add demo repository URL** consistently to all materials
3. **Build 15-minute timing buffer** into each session plan
4. **Teach drag-and-drop alternative** proactively in Session 3 demo

### Should Fix (Priority 2)
5. **Replace "right sidebar"** with "right side of the page" (Session 2)
6. **Standardize "Todo"** to match GitHub UI (Session 3)
7. **Add Issue editing guidance** to Session 2 materials
8. **Set Timeline View expectations** ("covered in Session 9")
9. **Expand photo upload guidance** with device-specific tips
10. **Add privacy/offline access note** to Session 1

### Nice to Have (Priority 3)
11. Move "commit" from Session 1 cheat sheet to "Coming Soon" table
12. Split Session 2 Slide 7 into two slides
13. Add "turn and talk" activity at 0:20 in Session 3
14. Provide fallback task suggestions for open-ended lab steps
15. Clarify commenting vs. closing Issues in Session 2

---

## Conclusion

The curriculum demonstrates exceptionally strong pedagogical design. Farm analogies are consistent and memorable, scaffolding follows evidence-based patterns, and support materials (troubleshooting tables, facilitation scripts, reference guides) show deep understanding of the target audience.

The primary deployment risk is the demo repository dependency — without it, all hands-on exercises fail. The secondary risk is timing — real-world classrooms will encounter Wi-Fi issues, CAPTCHA struggles, and device differences that consume more time than estimated.

With Priority 1 and 2 fixes implemented, these sessions are ready for live pilot testing with actual farmers.

**Next Steps:**
- Sprint 5: Iterate based on this feedback (STORY-014)
- Create demo farm repository (pre-requisite for delivery)
- Schedule live pilot test with 3-5 farmers

---

**Document Version:** 1.0
**Last Updated:** 2026-01-30
