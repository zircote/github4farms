# Session 6: Basic Workflows & Templates

## Slide Deck

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Apply / Analyze
> **Prerequisites:** Sessions 1-5 (GitHub account, repositories, Issues, Projects, Pull Requests, notifications)
> **Format:** 24pt+ headers, 18pt+ body text, high-contrast, descriptive alt text on all images

---

### Slide 1 — Title

**Basic Workflows & Templates**
*Building Reusable Processes So You Never Start from Scratch*

Session 6 of 12 — GitHub Training for Farmers

---

### Slide 2 — Welcome Back

**Welcome to Session 6!**

So far you've learned to:
- Navigate repositories (Session 1)
- Track tasks with Issues (Session 2)
- Organize with Projects (Session 3)
- Collaborate with Pull Requests (Session 4)
- Stay connected with notifications and @mentions (Session 5)

Today you'll learn to create **templates** — pre-built forms so you never write the same thing from scratch twice.

---

### Slide 3 — Why This Matters for YOUR Farm

**Quick Question:**

Do you ever create the same type of work order over and over?

- Weekly equipment checks?
- Seasonal planting tasks?
- Recurring maintenance schedules?
- Veterinary visit reports?

*How much time do you spend re-writing the same kind of task each time?*

> Instructor note: Let 2-3 learners answer. "What if you could fill out a pre-printed form instead of writing everything from scratch?"

---

### Slide 4 — The Problem

**Repetitive tasks waste time and lose details.**

- You write the same type of Issue over and over
- Each time, you forget to include some detail
- Different people write the same task differently — no consistency
- New team members don't know what information to include
- You wish you had a standard form for common requests

**What if GitHub could give you a pre-filled form every time you create a common task?**

---

### Slide 5 — What Is an Issue Template?

**Issue Template = Pre-Printed Work Order Form**

An Issue Template is a form that pre-fills parts of a new Issue for you.

Instead of a blank page, you get:
- A **pre-written title** structure
- **Guided sections** (What happened? Where? How urgent?)
- **Checklists** already set up
- **Labels** automatically applied

Think of it like a pre-printed form at the vet's office — you fill in the blanks instead of writing everything on a blank sheet.

---

### Slide 6 — Before and After Templates

**Without a template:**

> Title: "Tractor problem"
> Description: "The tractor isn't working right."

*Missing: Which tractor? What's wrong? How urgent? Who should fix it?*

**With a template:**

> Title: "Equipment Issue: [Equipment Name] — [Brief Description]"
> Description:
> - **Equipment:** John Deere 6120M Tractor
> - **Problem:** Engine stalls when idling
> - **Location:** Equipment shed
> - **Urgency:** Medium — can still use, but needs attention this week
> - **Steps already taken:** Checked oil level (normal), cleaned air filter
> - [ ] Parts needed
> - [ ] Service manual consulted
> - [ ] Repair completed

*Every important detail, every time.*

---

### Slide 7 — Types of Templates on GitHub

**GitHub has three types of templates:**

| Template Type | What It Does | Farm Analogy |
|--------------|-------------|--------------|
| **Issue Template** | Pre-fills a new Issue with guided sections | Pre-printed work order form |
| **Saved Reply** | A pre-written comment you can reuse | Stamp with a standard message |
| **Project Template** | Pre-built project board with columns and settings | Ready-made seasonal planning board |

Today we'll focus on **Issue Templates** and **Saved Replies**. We'll touch on Project Templates in Session 9 (Advanced Projects).

---

### Slide 8 — Issue Templates: How They Work

**When someone creates a new Issue in a repository with templates, they see a choice:**

Instead of a blank page, they see:
- "Equipment Maintenance Request"
- "Crop Issue Report"
- "Livestock Health Record"
- "General Task"

They pick the one that fits, and the form appears with sections ready to fill in.

**Anyone creating an Issue sees the templates** — so even a new team member knows what information to provide.

> Instructor note: Show a repository with Issue Templates enabled. Click "New Issue" to show the template chooser.

---

### Slide 9 — Creating an Issue Template

**How to create an Issue Template:**

1. Go to your repository
2. Click **"Settings"** (you need to be the repository owner)
3. Scroll down to **"Features"** section
4. Next to Issues, click **"Set up templates"**
5. Click **"Add template"** and choose a starter:
   - **Bug report** — for reporting problems
   - **Feature request** — for suggesting improvements
   - **Custom template** — start from scratch
6. Edit the template with your content
7. Click **"Propose changes"** then **"Commit changes"**

**For farm use:** Choose **"Custom template"** so you can write sections that make sense for your farm.

> Instructor note: Walk through each step on the projector. Use "Custom template" for the demo.

---

### Slide 10 — Designing a Good Template

**A good template has three parts:**

1. **Title format** — A structure like: "Equipment Issue: [Name] — [Problem]"
2. **Guided sections** — Prompts that tell the person what to write:
   - What happened?
   - Where?
   - How urgent?
   - What's been tried already?
3. **Checklist** — Steps to complete:
   - [ ] Photos attached
   - [ ] Parts needed identified
   - [ ] Assigned to someone

**Tip:** Write your template as if you're explaining to someone who just started working on the farm. What information would they need to give you?

---

### Slide 11 — Example: Equipment Maintenance Template

**Template name:** Equipment Maintenance Request

**Template content:**

```
## Equipment Information
- **Equipment name:** [e.g., John Deere 6120M Tractor]
- **Location:** [e.g., Equipment shed, Field 2]
- **Current hours/mileage:** [if applicable]

## Problem Description
[Describe what's wrong or what maintenance is needed]

## Urgency
- [ ] Emergency — equipment is unsafe or non-functional
- [ ] High — needed within 2 days
- [ ] Medium — needed this week
- [ ] Low — can wait until next scheduled maintenance

## Steps Already Taken
- [List anything you've already checked or tried]

## Checklist
- [ ] Photo of the problem attached
- [ ] Service manual consulted
- [ ] Parts identified (list below if known)
- [ ] Repair completed
- [ ] Post-repair test done
```

---

### Slide 12 — Example: Crop Issue Template

**Template name:** Crop Issue Report

**Template content:**

```
## Field Information
- **Field name/number:** [e.g., Field 3]
- **Crop:** [e.g., Soybeans]
- **Growth stage:** [e.g., V3, flowering, mature]

## Issue Description
[Describe what you're seeing — discoloration, pests, wilting, etc.]

## Photos
[Attach 1-2 photos of the issue]

## Urgency
- [ ] Immediate — crop at risk
- [ ] This week — needs attention soon
- [ ] Monitor — watch for changes

## Possible Causes
- [Your best guess or observations]

## Action Taken
- [List any steps already taken]
```

---

### Slide 13 — Saved Replies: Stamp Messages

**Saved Replies = Pre-Written Comments You Can Reuse**

If you find yourself typing the same comment over and over, save it as a **Saved Reply**.

**Examples:**
- "Repair completed and tested. Closing this Issue."
- "Parts ordered. Expected delivery: [date]. Will update when received."
- "Reassigning to @[name] — this is in their area."
- "Thank you for reporting this. I'll check on it today."

**Where to find Saved Replies:**
When typing a comment, look for the **arrow icon** near the comment box toolbar. Click it to insert a saved reply.

---

### Slide 14 — Creating a Saved Reply

**How to create a Saved Reply:**

1. Click your **profile icon** (top right) → **"Settings"**
2. Click **"Saved replies"** (left menu, under "Code, planning, and automation")
3. Click **"Add a saved reply"**
4. Give it a **title** (for your reference — e.g., "Parts ordered")
5. Write the **reply text** (e.g., "Parts ordered. Expected delivery: [date]. Will update when received.")
6. Click **"Add saved reply"**

**To use it:** In any comment box, click the **arrow icon** in the toolbar and select your saved reply. Edit the [bracketed] parts before posting.

> Instructor note: Demo creating a saved reply, then using it in an Issue comment. Show the arrow icon in the comment toolbar.

---

### Slide 15 — Project Templates (Preview)

**GitHub also has Project Templates — pre-built planning boards.**

When you create a new Project, you can choose from starter templates:
- **Board** — Todo / In Progress / Done columns
- **Team backlog** — Columns with priority levels
- **Roadmap** — Timeline-based planning

You can also **copy an existing Project** to reuse your own custom board setup.

**We'll explore Project Templates in depth in Session 9 (Advanced Projects).** For now, know they exist.

> Instructor note: Briefly show the template options when creating a new Project. Don't go deep — this is a preview.

---

### Slide 16 — When to Use Each Template Type

| Need | Template Type | Example |
|------|--------------|---------|
| Same kind of Issue repeatedly | **Issue Template** | Equipment maintenance requests, crop issue reports |
| Same comment over and over | **Saved Reply** | "Parts ordered," "Repair completed," "Reassigning to..." |
| Same project board structure | **Project Template** | Seasonal planning board, weekly task board |

**Start with Issue Templates** — they save the most time and ensure consistency.

---

### Slide 17 — Live Demo: Creating a Farm Issue Template

**Watch me create an equipment maintenance template.**

I'm going to:
1. Go to repository Settings
2. Set up an Issue Template (Custom)
3. Fill in the template with equipment maintenance sections
4. Save it
5. Create a new Issue using the template — see how it works

**Just watch — you'll build your own template next.**

> Instructor note: Demo the full workflow. After saving the template, go to Issues → New Issue to show the template chooser. Click the template to show the pre-filled form.

---

### Slide 18 — Guided Practice Introduction

**Your turn! Follow along with me.**

You're going to create your own Issue Template for a common farm task.

I'll walk through each step. Follow along on your screen.

If you get stuck:
1. Ask your partner
2. Raise your hand

**You can always edit or delete a template later — so don't worry about getting it perfect.**

> Instructor note: Pair learners. Distribute lab exercise handout. Learners will need to use their own repository (not the shared demo) since templates require Settings access.

---

### Slide 19 — Guided Practice Steps

**Follow along with me:**

1. Go to **your own repository** (you need to be the owner to access Settings)
   - If you don't have one: Click the **"+"** icon (top right) → **"New repository"** → Name it → Click **"Create repository"**
2. Click **"Settings"**
3. Scroll to **"Features"** → next to Issues, click **"Set up templates"**
4. Click **"Add template"** → choose **"Custom template"**
5. Fill in:
   - **Template name:** "Equipment Maintenance Request"
   - **About:** "Use this template to report equipment issues or request maintenance"
   - **Template content:** Copy from your handout (or write your own sections)
6. Click **"Propose changes"**
7. Click **"Commit changes"**

**Checkpoint:** Go to your Issues tab, click "New Issue" — you should see your template listed.

> Instructor note: Pause at checkpoint. "Raise your hand when you see your template in the Issue chooser."

---

### Slide 20 — BREAK (15 Minutes)

**Take 15 minutes.**

When we come back, you'll design your own farm templates from scratch!

---

### Slide 21 — Independent Practice

**Your challenge: Create farm templates that save your team time.**

**Task 1: Create 2 Issue Templates (20 min)**

Choose 2 from this list (or design your own):
- Equipment Maintenance Request
- Crop Issue Report
- Livestock Health Record
- Weekly Safety Inspection
- Seasonal Planning Task
- Supply Order Request

For each template, include:
- A clear name
- At least 3 guided sections
- At least 1 checklist
- Urgency level options

**Task 2: Create 2 Saved Replies (5 min)**

Go to Settings → Saved Replies and create 2 that you'd use regularly:
- A "task completed" reply
- A "parts/supplies ordered" reply
- A "reassigning" reply
- A "thank you for reporting" reply

**Need ideas?** Try these:
- "Repair completed and tested. Closing this Issue."
- "Supplies ordered. Expected delivery: [date]. Will update when they arrive."
- "Reassigning to @[name] — this falls in their area of responsibility."

**Task 3: Test Your Templates (10 min)**

1. Create a new Issue using one of your templates
2. Fill in the blanks with a realistic farm scenario
3. Use one of your Saved Replies to comment on the Issue

**Success criteria:**
- [ ] You created at least 2 Issue Templates
- [ ] Each template has guided sections and a checklist
- [ ] You created at least 2 Saved Replies
- [ ] You tested a template by creating a real Issue with it

---

### Slide 22 — Stretch Challenges

**Finished early? Try these:**

- Create a **third** Issue Template for a different farm category
- Add **default labels** to your templates (in the template settings)
- Create a new repository for your own farm and add all your templates to it
- Help a classmate design a template for their specific farm needs

---

### Slide 23 — Key Vocabulary Review

| GitHub Term | Farm Analogy | Meaning |
|------------|-------------|---------|
| Issue Template | Pre-printed work order form | Pre-filled Issue form with guided sections |
| Saved Reply | Rubber stamp message | Pre-written comment you can insert anywhere |
| Project Template | Ready-made planning board | Pre-built project board structure |
| Custom Template | Your own form design | A template you design from scratch |
| Template Chooser | Stack of forms | The menu shown when creating a new Issue |

---

### Slide 24 — Reflection

**Think about your farm:**

- What are the 3 most common types of tasks you create repeatedly?
- What information do you always need for those tasks?
- Who else on your farm would benefit from having templates?

**Turn to your partner and share your answers. (3 minutes)**

**Bonus:** Sketch out a template for your farm's most common recurring task — what sections would it have?

> Instructor note: Walk around and listen. Learners designing their own templates shows "Create" level thinking (Bloom's highest level).

---

### Slide 25 — What's Next

**Session 7: Introduction to GitHub Actions**

Next time, you'll learn how GitHub can **automatically do things for you** — like sending a reminder when an equipment check is due, or notifying the team when a task is overdue. No coding required!

**Optional between-session practice:**
- Add another Issue Template to your repository
- Use your templates to create a few real farm Issues
- Try using a Saved Reply when commenting on an Issue
- Think about what farm tasks you'd like to automate

---

### Slide 26 — Feedback Survey

**Please fill out the 2-minute survey before you leave.**

---

**Thank you!**

You now know how to create reusable templates that save time and ensure consistency on your farm.

---

## UDL Implementation Notes

### Representation (3+ modes)
1. **Visual:** Projected slides with before/after template comparison, template editor screenshots
2. **Verbal:** Instructor narration using "pre-printed work order form / rubber stamp" analogies
3. **Written:** Printed template design guide with example templates (take-home)
4. **Structural:** Template content itself models organized information architecture (sections, checklists, categories)
5. **Comparative:** Before-and-after examples show the value of templates concretely

### Engagement (learner choice)
- **Six template options** in lab exercise (equipment, crop, livestock, safety, seasonal, supply)
- **Custom template design** — learners can create templates for their specific farm needs
- **Stretch challenges** for fast finishers (third template, default labels, help a classmate)
- **"Why This Matters for YOUR Farm"** opening with repetitive task scenario
- **Reflection** includes sketching a custom template — highest Bloom's level (Create)

### Action & Expression (multi-method assessment)
- **L1 (Reaction):** Paper feedback survey
- **L2 (Observation):** 4-skill checklist (create Issue Template, design guided sections, create Saved Reply, test template)
- **Hands-on product:** Each learner produces 2+ Issue Templates and 2+ Saved Replies — observable, persistent artifacts
- **Verbal reflection:** Partner discussion on "What 3 recurring tasks would you template?"
- **Written design:** Template content itself demonstrates understanding of structured information
