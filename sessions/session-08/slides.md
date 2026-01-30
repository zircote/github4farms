# Session 8: Automating Farm Tasks

## Slide Deck

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Evaluate / Apply
> **Prerequisites:** Sessions 1-7 (GitHub account, repositories, Issues, Projects, Pull Requests, notifications, templates, YAML basics)
> **Format:** 24pt+ headers, 18pt+ body text, high-contrast, descriptive alt text on all images

---

### Slide 1 — Title

**Automating Farm Tasks**
*Setting Up Your First Automated Workflow*

Session 8 of 12 — GitHub Training for Farmers

---

### Slide 2 — Welcome Back

**Welcome to Session 8!**

So far you've learned to:
- Navigate repositories (Session 1)
- Track tasks with Issues (Session 2)
- Organize with Projects (Session 3)
- Collaborate with Pull Requests (Session 4)
- Stay connected with notifications (Session 5)
- Build templates for reusable tasks (Session 6)
- Understand triggers and YAML basics (Session 7)

Today you'll build your first **automated workflow** — a task that runs by itself on a schedule, like setting an alarm clock for your farm chores.

---

### Slide 3 — Why This Matters for YOUR Farm

**Quick Question:**

What farm task would you love to have done automatically?

- A weekly equipment check reminder every Monday?
- A monthly soil test reminder on the first of the month?
- A daily livestock health check prompt every morning?
- A seasonal planting reminder at the start of each quarter?

*What if GitHub could remind you — automatically — without you having to remember?*

> Instructor note: Let 3-4 learners answer. Write responses on the whiteboard. "These are all things GitHub Actions can do for you."

---

### Slide 4 — Quick Review from Session 7

**Last session, you learned:**

- **Triggers** — events that start a workflow (like a motion sensor turning on a barn light)
- **YAML** — the language workflows are written in (like a recipe card with exact formatting)
- **Workflow file** — lives in the `.github/workflows/` folder of your repository
- **Three trigger types:** manual (`workflow_dispatch`), event-based (`push`, `issues`), and scheduled (`schedule`)

Today we focus on **scheduled triggers** — the alarm clock of GitHub Actions.

---

### Slide 5 — What Are GitHub Actions?

**GitHub Actions = Your Automated Farmhand**

Imagine you could hire a helper who:
- Shows up at the exact same time every week
- Does the same task perfectly every time
- Never forgets, never takes a day off
- Leaves a log of everything they did

That's GitHub Actions. You write the instructions once, and GitHub runs them on your schedule.

---

### Slide 6 — Starter Workflow Templates

**GitHub gives you pre-built templates — like buying a pre-made fence kit instead of cutting every board yourself.**

GitHub's Actions Marketplace has hundreds of templates:
- Ready-to-use workflows for common tasks
- Created by GitHub and the community
- You pick one, customize it, and you're done

Today we'll start with a template and then modify it to fit your farm.

---

### Slide 7 — How to Enable a Starter Workflow

**Step-by-step:**

1. Go to your repository on GitHub
2. Click the **"Actions"** tab at the top
3. You'll see a page that says "Get started with GitHub Actions"
4. Browse the suggested workflows or search for one
5. Click **"Configure"** on the template you want
6. Review the YAML file (we'll walk through it)
7. Click **"Commit changes"** to save it

That's it — the workflow is now active in your repository.

> Instructor note: Emphasize that clicking "Configure" does NOT activate the workflow yet. Learners must commit the file to enable it.

---

### Slide 8 — Understanding the Schedule: Cron Syntax

**Cron = Your Alarm Clock Settings**

A cron schedule has 5 fields — think of setting an alarm:

```
 *    *    *    *    *
 |    |    |    |    |
 |    |    |    |    +--- Day of week (0=Sun, 1=Mon ... 6=Sat)
 |    |    |    +-------- Month (1-12)
 |    |    +------------- Day of month (1-31)
 |    +------------------ Hour (0-23)
 +----------------------- Minute (0-59)
```

**Think of it like:** Minute, Hour, Day-of-Month, Month, Day-of-Week

---

### Slide 9 — Cron Examples for Farmers

**Common schedules you'll use:**

| What You Want | Cron Expression | Plain English |
|---------------|----------------|---------------|
| Every day at 8 AM | `0 8 * * *` | Minute 0, Hour 8, every day |
| Every Monday at 7 AM | `0 7 * * 1` | Minute 0, Hour 7, Monday |
| First of every month at 6 AM | `0 6 1 * *` | Minute 0, Hour 6, Day 1 |
| Every weekday at 9 AM | `0 9 * * 1-5` | Minute 0, Hour 9, Mon-Fri |
| Every Sunday at 5 PM | `0 17 * * 0` | Minute 0, Hour 17, Sunday |

**Key:** An asterisk `*` means "every" — like saying "any day" or "any month."

> Instructor note: Use the alarm clock analogy. "If you set your phone alarm for 7 AM every Monday, the cron is 0 7 * * 1. Zero minutes past 7, every month, every day-of-month, but only on Monday."

---

### Slide 10 — Important Note About Time Zones

**GitHub Actions uses UTC time (Coordinated Universal Time).**

- If your farm is in the US Central Time zone, UTC is **6 hours ahead** (or 5 during daylight saving)
- To get a Monday 7 AM Central reminder, you'd set 1 PM UTC: `0 13 * * 1`
- Don't worry about getting this perfect today — we'll keep it simple

**Tip:** For now, just know your workflow might run a few hours earlier or later than expected. You can adjust later.

---

### Slide 11 — Reading a Workflow File

**Let's read a workflow file like a recipe card:**

```yaml
name: Weekly Equipment Check Reminder

on:
  schedule:
    - cron: '0 13 * * 1'

jobs:
  create-reminder:
    runs-on: ubuntu-latest
    steps:
      - name: Create equipment check issue
        uses: actions/github-script@v7
        with:
          script: |
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Weekly Equipment Check - ' + new Date().toLocaleDateString(),
              body: '## Equipment Check Checklist\n- [ ] Check tractor oil level\n- [ ] Inspect irrigation lines\n- [ ] Test backup generator\n- [ ] Check tire pressure on all vehicles',
              labels: ['equipment', 'recurring']
            })
```

Don't panic! We'll break this down piece by piece.

---

### Slide 12 — Breaking Down the Recipe

**Line by line, like reading a recipe card:**

| Line | What It Does | Farm Analogy |
|------|-------------|--------------|
| `name:` | Names the workflow | Title on the recipe card |
| `on: schedule:` | Sets the trigger | "Make this every Monday" |
| `cron: '0 13 * * 1'` | The exact schedule | "At 1 PM UTC on Mondays" |
| `jobs:` | The work to do | "Here are the steps" |
| `runs-on:` | Which computer runs it | "Use the kitchen stove" |
| `steps:` | Individual actions | "Step 1: Preheat. Step 2: Mix." |
| `uses:` | A pre-built tool | "Use the stand mixer" |
| `title:` | The Issue title | "What to write on the work order" |
| `body:` | The Issue content | "The checklist inside the work order" |

---

### Slide 13 — Verifying Your Workflow Runs

**How do you know it worked?**

1. Go to the **"Actions"** tab in your repository
2. You'll see a list of workflow runs
3. Look for the status icon:
   - **Green checkmark** = Success (the task completed)
   - **Red X** = Failed (something went wrong)
   - **Yellow circle** = In progress (still running)
4. Click on a run to see the details and log

**Think of it like checking your alarm clock history — did it go off? Did you hear it?**

---

### Slide 14 — Reading the Run Log

**When you click on a workflow run, you see:**

- **Summary page** — shows which jobs ran and their status
- **Job details** — click a job name to see each step
- **Step logs** — click a step to see exactly what happened

**What to look for:**
- Green checkmarks next to each step = everything worked
- A red X next to a step = that step failed
- The error message tells you what went wrong

> Instructor note: Show a real workflow run log on the projector. Point out the expandable sections and green checkmarks.

---

### Slide 15 — Troubleshooting: Common Errors

**When something goes wrong, here's how to fix it:**

| Error Message | What It Means | How to Fix It |
|---------------|---------------|--------------|
| "Invalid workflow file" | YAML formatting is wrong | Check indentation (spaces, not tabs) |
| "Unexpected value" | A field has a typo | Check spelling of keywords |
| "Resource not accessible" | Permissions issue | Go to Settings > Actions > General, enable "Read and write permissions" |
| "Cron expression is invalid" | Schedule format is wrong | Check 5 fields, use single quotes |
| No run appears at all | Workflow not triggered yet | Wait for the scheduled time, or add `workflow_dispatch` to test manually |

**Number one cause of errors:** Indentation. YAML uses spaces (not tabs) and every level must line up exactly.

---

### Slide 16 — Live Demo: Creating a Weekly Equipment Check Workflow

**Watch me build an automated reminder from scratch.**

I'm going to:
1. Go to my demo repository
2. Click the **Actions** tab
3. Choose "set up a workflow yourself"
4. Paste the Weekly Equipment Check workflow
5. Commit the file
6. Trigger it manually to test
7. Check the Actions tab for the green checkmark
8. Open the Issue it created

**Just watch for now — you'll build your own next.**

> Instructor note: Have the YAML pre-typed in a text file to paste during the demo. Show each step slowly. After committing, trigger manually using workflow_dispatch if the schedule hasn't fired yet. Walk through the run log step by step.

---

### Slide 17 — Adding Manual Trigger for Testing

**Pro tip: Add `workflow_dispatch` so you can test anytime.**

```yaml
on:
  schedule:
    - cron: '0 13 * * 1'
  workflow_dispatch:
```

Adding `workflow_dispatch` means you can also click **"Run workflow"** in the Actions tab to test it immediately — instead of waiting until the scheduled time.

**Think of it like adding a "Test" button to your alarm clock so you can make sure it works before Monday.**

---

### Slide 18 — Guided Practice Introduction

**Your turn! Follow along with me.**

We'll work through this together, step by step:
1. Open your farm repository
2. Go to the Actions tab
3. Create a new workflow file
4. Paste the Weekly Equipment Check YAML
5. Modify the schedule
6. Commit and test it

**Open your lab exercise handout to Part 1.**

If you get stuck:
1. Check the quick-reference guide
2. Ask your partner
3. Raise your hand

**You can't break anything. If something goes wrong, we'll fix it together.**

> Instructor note: Pair learners. Distribute lab exercise and workflow setup guide handouts. Move through steps slowly — wait for all hands down before proceeding.

---

### Slide 19 — BREAK (15 Minutes)

**Take 15 minutes.**

When we come back, you'll create your own automated farm workflow from scratch!

Think about which scenario you want to try:
- **Equipment:** Weekly equipment check reminder
- **Crops:** Planting season preparation reminder
- **Livestock:** Livestock health check reminder

---

### Slide 20 — Independent Practice

**Your challenge: Create an automated farm reminder workflow.**

Choose your scenario from the lab exercise:
- **Option A:** Weekly Equipment Check — every Monday at 7 AM
- **Option B:** Planting Season Reminder — first of each month at 8 AM
- **Option C:** Livestock Health Check — every Wednesday and Friday at 6 AM

For your workflow:
1. Create a new workflow file in `.github/workflows/`
2. Copy the YAML template for your scenario
3. Customize the Issue title and checklist
4. Add `workflow_dispatch` for testing
5. Commit, test, and verify in the Actions tab
6. If it fails, read the error log and fix the problem

**Stretch challenge:** Modify the cron schedule to a different day or time.

---

### Slide 21 — Key Vocabulary Review

**New terms from today:**

- **GitHub Actions** — GitHub's automation system that runs tasks for you
- **Workflow** — A set of automated instructions stored as a YAML file
- **Cron schedule** — A 5-field time expression that controls when a workflow runs
- **Workflow run** — One execution of your workflow (visible in the Actions tab)
- **Run log** — The detailed record of what happened during a workflow run
- **`workflow_dispatch`** — A trigger that lets you run a workflow manually

---

### Slide 22 — Reflection

**Think about your farm:**

- What recurring task would save you the most time if it were automated?
- How often would you want the reminder — daily, weekly, monthly?
- What information would you include in the automated Issue?

**Turn to your partner and share your answers. (3 minutes)**

> Instructor note: Walk around and listen. Note which scenarios are most popular — this informs Session 9 planning.

---

### Slide 23 — What's Next

**Session 9: Advanced Projects**

You'll learn to build more complex workflows and connect automation to your project boards — like having your automated farmhand not only create the work order but also pin it to your planning board.

**Optional between-session practice:**
- Let your scheduled workflow run at least once on its own
- Check the Actions tab to verify it created an Issue
- Try modifying the checklist in your workflow file
- Experiment with a different cron schedule

---

### Slide 24 — Feedback Survey

**Please fill out the 2-minute survey before you leave.**

---

**Thank you!**

You now have an automated farmhand working for you on GitHub. It will show up on time, every time, and never forget a task.

---

## UDL Implementation Notes

### Representation (3+ modes)
1. **Visual:** Projected slides with annotated screenshots of the Actions tab, workflow runs, and run logs
2. **Verbal:** Instructor narration using "Automated Farmhand" and "Alarm Clock" analogies throughout
3. **Written:** Printed workflow setup quick-reference guide with cron cheat sheet (take-home reference)
4. **Tabular:** Cron examples table and troubleshooting table provide structured reference for detail-oriented learners
5. **Code walkthrough:** Line-by-line breakdown of YAML with farm analogy mapping (recipe card format)

### Engagement (learner choice)
- **Three scenario options** in lab exercise (equipment, crops, livestock) — learners choose based on their farm
- **Customizable checklist** — learners write their own Issue body content relevant to their operation
- **"Why This Matters for YOUR Farm"** opening with group brainstorm of automatable tasks
- **Manual trigger for immediate feedback** — learners don't have to wait for the schedule to see results
- **Stretch challenges** for early finishers (modify schedule, add labels, change checklist)

### Action & Expression (multi-method assessment)
- **L1 (Reaction):** Paper feedback survey
- **L2 (Observation):** 5-skill checklist (create workflow file, modify cron schedule, commit and trigger, verify run, troubleshoot errors)
- **Hands-on product:** Learners produce a working scheduled workflow that creates an Issue with a farm-relevant checklist
- **Verbal reflection:** Partner discussion on "Which recurring farm task would you automate?"
- **Written checklist:** Completion checklist embedded in lab exercise for self-assessment
- **Troubleshooting practice:** Learners read error logs and apply fixes, demonstrating Evaluate-level Bloom's skills
