# Session 4: Collaboration & Pull Requests

## Slide Deck

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Apply / Analyze
> **Prerequisites:** Sessions 1-3 (GitHub account, repository navigation, Issues, Projects)
> **Format:** 24pt+ headers, 18pt+ body text, high-contrast, descriptive alt text on all images

---

### Slide 1 — Title

**Collaboration & Pull Requests**
*Working Together on Shared Farm Plans*

Session 4 of 12 — GitHub Training for Farmers

---

### Slide 2 — Welcome Back

**Welcome to Session 4!**

So far you've learned to:
- Navigate a repository (Session 1)
- Create Issues to track tasks (Session 2)
- Organize tasks with Projects (Session 3)

Today you'll learn to **work together** — making changes to shared farm documents and getting them reviewed before they go live.

---

### Slide 3 — Why This Matters for YOUR Farm

**Quick Question:**

How do you share farm plans with a partner, employee, or advisor right now?

- Passing a notebook back and forth?
- Texting photos of notes?
- Printing and marking up copies?
- Just telling them what changed?

*What happens when two people change the same plan at the same time?*

> Instructor note: Let 2-3 learners answer. "Has anyone ever had a miscommunication about what was the latest version of a plan?"

---

### Slide 4 — The Problem

**Sharing documents is messy.**

- Two copies of the same plan — which one is current?
- Someone changes something and nobody knows
- No record of what was changed or why
- Hard to suggest changes without overwriting the original
- If a change is wrong, there's no easy way to undo it

**What if you could suggest a change, get it reviewed, and keep a record — all in one place?**

---

### Slide 5 — The Collaboration Workflow

**GitHub has a simple process for teamwork:**

1. **Fork** — Make your own copy of the shared repository
2. **Edit** — Make changes in your copy
3. **Pull Request** — Ask the owner to review and accept your changes
4. **Merge** — Owner approves and the changes become official

Think of it like this:
- Fork = "Photocopy the farm plan"
- Edit = "Mark up your copy with suggested changes"
- Pull Request = "Hand your marked-up copy to the manager for review"
- Merge = "Manager accepts the changes and updates the official plan"

---

### Slide 6 — What Is a Fork?

**Fork = Your Own Copy**

When you **fork** a repository, GitHub creates a complete copy under your account.

- The original stays untouched
- You can change anything in your copy without affecting the original
- When you're ready, you can ask the owner to accept your changes

It's like photocopying a recipe — you can write all over your copy without changing the original.

**Your fork stays connected** to the original, so GitHub knows where it came from.

---

### Slide 7 — How to Fork a Repository

**Forking takes one click:**

1. Go to the repository you want to copy
2. Click the **"Fork"** button (near the top right of the page)
3. GitHub creates a copy under your account
4. You're now on **your copy** — notice your username in the URL

**How do I know I'm on my fork?**
Look at the top of the page. You'll see:
- **Your username / repository name**
- Below it: "forked from [original owner / repository name]"

> Instructor note: Show the Fork button on the projector. After forking, point to the "forked from" text.

---

### Slide 8 — Editing a File on GitHub

**You can edit any file directly on GitHub — no special software needed.**

1. Navigate to the file you want to change
2. Click the **pencil icon** (top right of the file view) to edit
3. Make your changes in the text editor
4. Scroll down to **"Commit changes"**
5. Add a short message describing what you changed
6. Click **"Commit changes"**

Think of the commit message like writing a note on a sticky tag: "Updated planting dates for Field 2."

**Made a mistake?** You can always edit again — click the pencil icon and fix it.

> Instructor note: Demo editing slowly. Emphasize the commit message — "This is how you leave a note for yourself and others about what you changed."

---

### Slide 9 — What Is a Pull Request?

**Pull Request = "Please Review My Changes"**

After you make changes in your fork, you send a **Pull Request** (PR) to the original repository.

A Pull Request:
- Shows exactly what you changed (highlighted in green and red)
- Lets the owner review your changes before accepting
- Allows discussion — the owner can ask questions or suggest edits
- Keeps a permanent record of the change and why it was made

It's like handing your marked-up copy to the farm manager and saying: "Here's what I suggest we change. What do you think?"

---

### Slide 10 — Creating a Pull Request

**After editing your fork, create a Pull Request:**

1. Go to your forked repository
2. You may see a banner: **"This branch is 1 commit ahead"** — click **"Contribute"** then **"Open pull request"**
3. Or: Click the **"Pull requests"** tab, then **"New pull request"**
4. GitHub shows you what changed (green = added, red = removed)
5. Add a **title** describing the change
6. Add a **description** explaining why you made the change
7. Click **"Create pull request"**

**Good PR titles (same rules as Issue titles):**
- "Update planting dates for Field 2 — delayed by rain"
- "Add equipment safety checklist for summer interns"
- "Fix livestock vaccination dates — vet rescheduled"

> Instructor note: Walk through both paths to creating a PR (banner method and tab method). The banner is easier for beginners.

---

### Slide 11 — Reviewing a Pull Request

**The owner (or reviewer) sees the Pull Request and can:**

1. **Read** the changes (green = added, red = removed)
2. **Comment** — ask questions or suggest edits
3. **Approve** — "Looks good, let's use these changes"
4. **Request changes** — "Please fix this part first"

To leave a review:
1. Open the Pull Request
2. Click **"Files changed"** to see what was modified
3. Click **"Review changes"** (green button)
4. Choose: **Comment**, **Approve**, or **Request changes**
5. Click **"Submit review"**

> Instructor note: Show a sample PR. Point out the green/red highlighting. Emphasize that reviewing is just reading and giving feedback — like proofreading a document.

---

### Slide 12 — Merging a Pull Request

**When the review is done, the owner merges the changes.**

1. On the Pull Request page, scroll to the bottom
2. Click **"Merge pull request"**
3. Click **"Confirm merge"**

After merging:
- The changes become part of the original repository
- The Pull Request is marked "Merged" (purple)
- The full history is preserved — who suggested what, who approved it, when it happened

It's like the farm manager saying: "Great suggestion — I've updated the official plan."

---

### Slide 13 — When to Use Fork & PR vs. Direct Editing

**Two ways to make changes on GitHub:**

| Method | When to Use | Example |
|--------|------------|---------|
| **Direct edit** (on your own repo) | You own it, small change, just you | Fix a typo in your own planting schedule |
| **Fork + Pull Request** | Shared repo, team review needed, important changes | Update the official farm plan that the whole team uses |

**Rule of thumb:** If other people depend on the document, use a Pull Request so someone can review before it goes live.

---

### Slide 14 — The Full Workflow: Visual Summary

**The collaboration cycle:**

```
1. FORK          →  Make your own copy
2. EDIT          →  Make changes in your copy
3. PULL REQUEST  →  Ask for review
4. REVIEW        →  Get feedback
5. MERGE         →  Changes go live
```

This cycle repeats every time someone wants to suggest a change. It keeps your shared farm information accurate and reviewed.

---

### Slide 15 — Live Demo: Complete Collaboration Workflow

**Watch me do the full workflow.**

I'm going to:
1. Fork the demo farm repository
2. Edit the planting schedule — change Field 2's planting date
3. Create a Pull Request with a description of why
4. Review the changes (I'll switch to the "owner" view)
5. Merge the Pull Request

**Just watch for now — you'll do this yourself next.**

> Instructor note: Use a second GitHub account or have a co-facilitator act as the owner. Demo the full cycle end-to-end. Go slowly.

---

### Slide 16 — Guided Practice Introduction

**Your turn! Follow along with me.**

You and your partner will practice the collaboration workflow together.

One of you will **suggest a change** (fork + edit + PR).
The other will **review and merge** it.
Then you'll **switch roles**.

If you get stuck:
1. Ask your partner
2. Raise your hand — I'll come to you

**You can't break anything. The original demo repository is safe.**

> Instructor note: Pair learners. Distribute the lab exercise handout. Explain that each pair needs to decide who goes first.

---

### Slide 17 — Guided Practice Steps

**Round 1 — Partner A suggests, Partner B reviews:**

1. **Partner A:** Fork the demo farm repository
2. **Partner A:** Edit `crops/planting-schedule.md` — change one date
3. **Partner A:** Commit the change with a message
4. **Partner A:** Create a Pull Request
5. **Partner B:** Open the Pull Request, read the changes
6. **Partner B:** Leave a comment (e.g., "Looks good!")
7. **Partner B:** Approve and merge

**Checkpoint:** Partner A's change should now appear in the original repository.

> Instructor note: Walk through each step on projector. Pause at checkpoint. "Raise your hand when Partner B has merged the Pull Request."

---

### Slide 18 — Guided Practice: Switch Roles

**Round 2 — Partner B suggests, Partner A reviews.**

Repeat the same steps, but switch roles.

**Partner B:** Fork, edit a different file, create a PR.
**Partner A:** Review, comment, and merge.

**Checkpoint:** Both partners have created and merged one Pull Request each.

---

### Slide 19 — BREAK (15 Minutes)

**Take 15 minutes.**

When we come back, you'll practice the full collaboration workflow on your own!

---

### Slide 20 — Independent Practice

**Your challenge: Complete a collaboration cycle using a farm scenario.**

Choose your scenario:
- **Option A:** Update the planting schedule — a crop date has changed due to weather
- **Option B:** Add a new entry to the equipment maintenance log
- **Option C:** Update livestock health records with a new veterinary visit

Your tasks:
1. Fork the demo farm repository (if you haven't already)
2. Edit the relevant file with your farm scenario change
3. Write a clear commit message
4. Create a Pull Request with a descriptive title and explanation
5. Review a classmate's Pull Request — leave a comment and approve
6. Merge a Pull Request you've been asked to review

**Success criteria:**
- [ ] You created a Pull Request with a clear title and description
- [ ] You reviewed and commented on someone else's Pull Request
- [ ] At least one Pull Request was merged

---

### Slide 21 — Stretch Challenge

**Finished early? Try these:**

- Create a second Pull Request that edits a different file
- Leave a "Request changes" review (ask the author to fix something small, then approve after they fix it)
- Look at the **closed Pull Requests** list — what does the history tell you about changes made?

---

### Slide 22 — Key Vocabulary Review

| GitHub Term | Farm Analogy | Meaning |
|------------|-------------|---------|
| Fork | Photocopy | Your own copy of a shared repository |
| Commit | Sticky note | Saving changes with a description of what you did |
| Pull Request | Marked-up copy for review | A request to merge your changes into the original |
| Review | Proofreading | Reading someone's changes and giving feedback |
| Merge | Accept the changes | Making suggested changes part of the official version |
| Approve | "Looks good to me" | Signing off that the changes are ready |

---

### Slide 23 — Reflection

**Think about your farm:**

- Who would you collaborate with on GitHub? (Partner, employee, advisor, extension agent?)
- What farm document would benefit from a review process before changes go live?
- When would direct editing be fine, and when would a Pull Request be better?

**Turn to your partner and share your answers. (3 minutes)**

> Instructor note: Walk around and listen. Note examples that connect to future sessions (Session 7+ automation).

---

### Slide 24 — What's Next

**Session 5: Notifications & Team Communication**

Learn how to stay updated on what's happening in your farm repository without checking constantly — like getting a text when something changes.

**Optional between-session practice:**
- Create another Pull Request on the demo farm repository
- Review and merge a classmate's Pull Request
- Try editing a file in your own repository (no fork needed for your own!)

---

### Slide 25 — Feedback Survey

**Please fill out the 2-minute survey before you leave.**

---

**Thank you!**

You now know how to suggest, review, and accept changes as a team on GitHub.

---

## UDL Implementation Notes

### Representation (3+ modes)
1. **Visual:** Projected slides with green/red change highlighting, workflow diagram
2. **Verbal:** Instructor narration using "photocopy → mark up → hand back" analogy throughout
3. **Written:** Printed collaboration basics quick-reference guide (take-home)
4. **Kinesthetic:** Hands-on fork/edit/PR/review/merge cycle — learners physically perform the workflow
5. **Social:** Paired practice with role-switching (suggest vs. review)

### Engagement (learner choice)
- **Three scenario options** in lab exercise (crops, equipment, livestock)
- **Role switching** — each learner experiences both sides of collaboration
- **Stretch challenges** for fast finishers (second PR, request changes, history exploration)
- **"Why This Matters for YOUR Farm"** opening with partner discussion
- **Reflection** connecting collaboration to real farm relationships

### Action & Expression (multi-method assessment)
- **L1 (Reaction):** Paper feedback survey
- **L2 (Observation):** 6-skill checklist (fork, edit, commit with message, create PR, review/comment, merge)
- **Hands-on product:** Each learner produces at least 1 Pull Request and 1 review — observable artifacts
- **Verbal reflection:** Partner discussion on "Who would you collaborate with?"
- **Written:** Commit messages and PR descriptions demonstrate understanding
