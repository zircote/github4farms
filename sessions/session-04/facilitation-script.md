# Session 4: Facilitation Script — Collaboration & Pull Requests

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Apply / Analyze
> **Prerequisites:** Sessions 1-3
> **Key Analogy:** Fork = Photocopy; Pull Request = Marked-up copy for review; Merge = Accept the changes

---

## Pre-Session Checklist

- [ ] Demo farm repository accessible and clean (no leftover test PRs from previous sessions)
- [ ] Second GitHub account available for demo (or co-facilitator account) to show the "owner reviews" side
- [ ] Projector connected and GitHub displayed at readable zoom level
- [ ] Lab exercise handouts printed (one per learner)
- [ ] Quick-reference guide printed (one per learner)
- [ ] Feedback surveys ready (paper or digital)
- [ ] Seating arranged for pairs
- [ ] Wi-Fi tested on instructor and learner devices
- [ ] Learner GitHub accounts verified (all logged in from Session 1)
- [ ] Practice forking the demo repo yourself to confirm permissions work

---

## Session Timeline

| Time | Duration | Phase | Activity |
|------|----------|-------|----------|
| 0:00 | 10 min | Welcome & Hook | Why collaboration matters for YOUR farm |
| 0:10 | 20 min | Concrete Experience | Instructor demo — full fork/edit/PR/merge cycle |
| 0:30 | 20 min | Reflective Observation | Guided practice — paired collaboration (Round 1 + Round 2) |
| 0:50 | 20 min | Abstract Conceptualization | Concepts: fork vs. direct edit, when to use PRs |
| 1:10 | 15 min | **BREAK** | Stretch, questions, tech help |
| 1:25 | 35 min | Active Experimentation | Independent practice — full collaboration cycle |
| 2:00 | 10 min | Reflection | Farm application discussion |
| 2:10 | 10 min | Wrap-Up | Preview Session 5 + feedback survey |
| 2:20 | 10 min | Buffer | Catch-up, 1-on-1 help, survey collection |

**Practice Time:** 75 min (Guided 20 + Independent 35 + parts of demo/reflection) = ~55%+
**Lecture/Demo Time:** ~50 min

---

## Phase 1: Welcome & Hook (10 min) — 0:00

**Facilitation Script:**

> "Good [morning/afternoon]. Welcome to Session 4. Before we start, let me ask you a question."

> "How do you share farm plans with your partner, your employees, or your advisor right now? Does anyone pass a notebook back and forth? Send text messages? Print copies and mark them up?"

*Let 2-3 learners answer. Validate each response.*

> "Here's the challenge: when two people are working from different copies of the same plan, things get confusing fast. Which version is the latest? Did someone change something you didn't know about?"

> "Today we're going to learn GitHub's way of solving this problem. It's called a **Pull Request**, and it works like handing a marked-up copy of your farm plan to the manager for review. By the end of today, you'll have suggested a change, reviewed someone else's change, and merged an approved change — all on GitHub."

**Key Elements:**
- [ ] Open with a farm question about sharing plans
- [ ] Share the "marked-up photocopy" analogy
- [ ] State 2 learning outcomes in plain language
- [ ] Connect to prior sessions: "You already know how to create Issues and organize them into Projects. Today you'll learn to work together on the actual files."
- [ ] Acknowledge complexity: "This is the most multi-step process we've learned so far. We'll go slowly, and you'll have a partner to help."

---

## Phase 2: Concrete Experience — Instructor Demo (20 min) — 0:10

**"I Do" — Watch Me Do the Full Workflow**

> "I'm going to show you the entire collaboration workflow from start to finish. Just watch — you don't need to follow along yet. I'll go slowly and explain every click."

### Demo Steps

**Step 1: Fork the repository (3 min)**
> "First, I need my own copy of the farm repository. This is called **forking** — it's like photocopying a document so I can mark it up without changing the original."

1. Navigate to `zircote/github4farms-training`
2. Click the **Fork** button
3. Click **Create fork**

> "See how the page now says my name at the top, with 'forked from' below it? That tells me I'm on my copy."

**Step 2: Edit a file (4 min)**
> "Now I'm going to make a change. Let's say spring rains have delayed our planting, so I need to update the schedule."

1. Click `crops/` folder
2. Click `planting-schedule.md`
3. Click the pencil icon
4. Change Field 2 planting date from "May 1, 2026" to "May 15, 2026"
5. Scroll to "Commit changes"

> "Before I save, I need to write a **commit message** — a short note explaining what I changed. Think of it like a sticky note on your photocopy. I'll write: 'Update Field 2 planting date — delayed by spring rain.'"

6. Type the commit message
7. Click **Commit changes**

**Step 3: Create a Pull Request (4 min)**
> "I've made my change, but it only exists in my copy. To suggest this change to the official farm plan, I create a **Pull Request** — that's like handing my marked-up copy to the manager."

1. Go back to the fork's main page
2. Click **Contribute** → **Open pull request** (or show the Pull Requests tab method)

> "GitHub shows me exactly what I changed — the old date in red, the new date in green. Anyone reviewing this can see exactly what's different."

3. Add title: "Update Field 2 planting date — delayed by spring rain"
4. Add description: "Changed from May 1 to May 15. Weather forecast shows rain through the first week of May."
5. Click **Create pull request**

**Step 4: Review the Pull Request (5 min)**
> "Now I'm going to switch to the farm manager's view. When someone sends me a Pull Request, here's what I see."

*Switch to second account or have co-facilitator take over.*

1. Go to the original repository → Pull Requests tab
2. Click the new PR
3. Click **Files changed**

> "See the green and red? Red is what was there before. Green is what's being suggested. I can review this and decide: looks good, or needs changes."

4. Click **Review changes**
5. Type: "Looks good — the rain forecast confirms this delay. Approved."
6. Select **Approve**
7. Click **Submit review**

**Step 5: Merge (2 min)**
> "Now that it's approved, I can accept the changes into the official plan."

1. Click **Merge pull request**
2. Click **Confirm merge**

> "Done. The Pull Request is now marked 'Merged' in purple. The planting schedule in the official repository has been updated. And we have a complete record of who suggested the change, why, and who approved it."

**After Demo:**
> "That's the whole process: fork, edit, pull request, review, merge. Five steps. Now let's do it together."

---

## Phase 3: Reflective Observation — Guided Practice (20 min) — 0:30

**"We Do" — Paired Practice**

> "Now it's your turn. You and your partner are going to do what I just showed you. One person suggests a change, the other reviews and merges it. Then you'll switch roles."

> "Decide right now: who is Partner A and who is Partner B? Partner A goes first."

*Distribute lab exercise handouts.*

### Round 1: Partner A Suggests, Partner B Reviews (10 min)

Walk through each step on the projector while learners follow along:

1. **Partner A forks** the demo repository
   - Pause: "Raise your hand when you see your username at the top of the page with 'forked from' below it."

2. **Partner A edits** `crops/planting-schedule.md`
   - "Click the pencil icon. Change one date. Write a commit message."
   - Pause: "Raise your hand when you've committed your change."

3. **Partner A creates a Pull Request**
   - "Click Contribute, then Open pull request. Add a title and description."
   - Pause: "Raise your hand when you see your Pull Request page."

4. **Partner B reviews**
   - "Partner B: go to the original repository, click Pull Requests, find your partner's PR."
   - "Click Files changed — what do you see? Leave a comment and approve."

5. **Partner B merges**
   - "Click Merge pull request, then Confirm merge."

**Checkpoint:** "Raise your hand when the Pull Request shows 'Merged' in purple."

### Round 2: Switch Roles (10 min)

> "Now switch! Partner B suggests a change to a different file, Partner A reviews and merges."

*Repeat the same steps with roles reversed. Circulate and help.*

**Checkpoint:** "Both partners should have created and merged one Pull Request each. Raise your hand if you're done."

**Troubleshooting During Guided Practice:**

| Problem | Solution |
|---------|----------|
| Can't find Fork button | Top right area, near Star and Watch buttons |
| No pencil icon | Make sure you're on your fork, not the original |
| No "Contribute" banner | Use Pull Requests tab → New pull request instead |
| Merge button grayed out | Check repository permissions; instructor may need to adjust settings |
| Partner's PR doesn't appear | Confirm PR was created against the original repo, not the fork |

---

## Phase 4: Abstract Conceptualization (20 min) — 0:50

**"Now Let's Understand Why"**

> "You just completed your first collaboration cycle on GitHub. Let's talk about why this process exists and when you'd use it on your farm."

### Concept 1: Fork vs. Direct Edit (5 min)

> "You might be thinking: 'Why do I need to fork and create a Pull Request? Why can't I just edit the file directly?' Great question."

> "If you own the repository — it's your personal farm records — you can edit directly. No fork needed, no Pull Request needed. Just click the pencil and change it."

> "But if it's a **shared** repository — the whole farm team uses it — you want someone to review changes before they go live. That's when you fork and create a Pull Request."

Show the comparison table (Slide 13):

| Method | When to Use |
|--------|------------|
| Direct edit | Your own repo, small change, just you |
| Fork + PR | Shared repo, team review needed, important changes |

### Concept 2: The Value of Review (5 min)

> "The Pull Request process might feel like extra work. But here's what it gives you:"

- **Mistakes get caught** before they affect the official plan
- **Everyone knows** what changed and why
- **You have a record** — six months from now, you can see who changed the planting date and why
- **It's reversible** — if a change was wrong, you can find it and undo it

> "Think of it like this: on a paper plan, if someone erases a date and writes a new one, you have no idea who changed it or what it used to be. With Pull Requests, you always know."

### Discussion (10 min)

> "Turn to your partner. Discuss these two questions — you have 3 minutes:"

1. "Who on your farm would you collaborate with using GitHub?"
2. "What's one farm document that should be reviewed before changes go live?"

*After 3 minutes, ask 2-3 volunteers to share.*

> "Great examples. The fork and Pull Request workflow is what makes GitHub useful for teams — whether that's two people or twenty."

---

## BREAK (15 min) — 1:10

> "Take 15 minutes. Stretch, grab a drink, ask me any questions. We'll start back at [time]."

**During break:**
- [ ] Circulate to help anyone who fell behind in guided practice
- [ ] Check that all forks were created successfully
- [ ] Note any widespread confusion for post-break review
- [ ] Clean up any test PRs that might confuse learners in independent practice

---

## Phase 5: Active Experimentation — Independent Practice (35 min) — 1:25

**"You Do" — Practice on Your Own**

> "Now you're going to practice the full collaboration workflow on your own. Choose one of three farm scenarios from your lab exercise handout."

> "You'll fork, edit, create a Pull Request, and review a classmate's Pull Request. The instructions are on your handout — follow them step by step."

> "If you get stuck, check the troubleshooting table on the last page. If that doesn't help, raise your hand."

**Circulate and observe. Use the L2 checklist to note:**
- [ ] Can fork a repository
- [ ] Can edit a file using the pencil icon
- [ ] Writes a meaningful commit message (not just "Update")
- [ ] Can create a Pull Request with title and description
- [ ] Can review a PR (read changes, leave comment)
- [ ] Can merge a Pull Request

**For early finishers:**
> "If you're done, check the stretch challenges on your handout. Try creating a second Pull Request, or practice leaving a 'Request changes' review."

**Common issues during independent practice:**
- **Learners forgetting to fork first:** Remind them they need their own copy before editing
- **Vague commit messages ("Updated file"):** Gently suggest: "What if you add what you changed and why? Like 'Updated tractor service date — completed 500-hour maintenance.'"
- **Confusion about which repository is theirs:** Point to the username in the URL — "If you see your name, it's your fork. If you see zircote, it's the original."

---

## Phase 6: Reflection (10 min) — 2:00

> "Before we wrap up, let's think about what you accomplished today."

> "You forked a repository, edited a file, created a Pull Request, reviewed someone else's changes, and merged approved changes. That's real collaboration — and it's exactly how teams work on GitHub."

**Reflection Activity — Partner Share (5 min):**

> "Turn to your partner. Share your answers to these questions:"
> 1. "What's one thing about the collaboration process that surprised you?"
> 2. "Name one farm document or plan where you'd want changes reviewed before going live."

**Whole Group (5 min):**

> "Who'd like to share? What farm task would benefit from this review process?"

*Take 2-3 volunteers. Celebrate specific accomplishments:*
> "I saw [Name] write a great Pull Request description that explained exactly why the planting date needed to change. That's exactly how you'd use this on your farm."

---

## Phase 7: Wrap-Up (10 min) — 2:10

> "Great work today. Here's what we covered:"

1. **Fork** — making your own copy of a shared repository
2. **Edit + Commit** — making changes and leaving a note about what you did
3. **Pull Request** — asking for review before changes go live
4. **Review + Merge** — reading changes, giving feedback, and accepting them

> "Next session — **Session 5: Notifications & Team Communication** — you'll learn how to stay updated on what's happening in your repository without constantly checking it. Think of it like getting a text when something changes on the farm."

> "Optional practice before next time: create another Pull Request on the demo repository, or try editing a file in your own repository."

> "Please fill out the feedback survey before you leave — it helps me improve these sessions for you."

**Key Elements:**
- [ ] Summarize 4 key concepts
- [ ] Preview Session 5 and connection to today
- [ ] Distribute feedback survey
- [ ] Mention optional practice
- [ ] Thank learners

---

## Phase 8: Buffer (10 min) — 2:20

- [ ] Help any learner who didn't complete the exercise
- [ ] Collect remaining feedback surveys
- [ ] Note learners who may need extra support
- [ ] Answer remaining questions
- [ ] Clean up test Pull Requests from the demo repository if needed

---

## L2 Observation Checklist

Use during guided and independent practice. Check each skill when observed:

| Skill | Learner Demonstrated? |
|-------|----------------------|
| Fork a repository | ☐ |
| Edit a file using the web editor | ☐ |
| Write a meaningful commit message | ☐ |
| Create a Pull Request with title + description | ☐ |
| Review a Pull Request (read changes, comment) | ☐ |
| Merge a Pull Request | ☐ |

**Notes:**
_____________________________________________
_____________________________________________
