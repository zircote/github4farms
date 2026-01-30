# Session 7 Lab Exercise: Introduction to GitHub Actions

> **Duration:** 55 minutes total (Guided Practice 20 min + Independent Practice 35 min)
> **Prerequisites:** GitHub account, Sessions 1-6 completed
> **Materials:** Computer with browser, access to the shared demo repository (URL provided by instructor)
> **Format:** Guided exploration of pre-built workflows, then independent analysis and farm-task mapping
> **Note:** You will read workflows and view results in this session. You will NOT write any code or YAML.

---

## Part 1: Guided Practice --- Explore the Actions Tab and Read a Workflow (20 minutes)

### Before You Start

You will use the **shared demo repository** for this exercise. The instructor will provide the URL.

**Write down the demo repository URL:** _______________________

This repository has pre-built workflows already set up. Your job is to explore them and understand what they do.

---

### Step 1: Navigate to the Actions Tab (3 min)

1. Go to the demo repository URL
2. Look at the row of tabs near the top: **Code**, **Issues**, **Pull requests**, **Actions**, etc.
3. Click the **"Actions"** tab

**Can't find the Actions tab?** It may be hidden behind a **"..."** menu if your screen is narrow. Click the three dots to reveal it.

**Checkpoint:** You should see a page with a list of workflow runs on the left side and workflow names on the right.

---

### Step 2: View Workflow Runs (5 min)

1. Look at the list of workflow runs in the center of the page
2. Each run has a **status icon** next to it:
   - Green checkmark = **Success** (the helper finished the job)
   - Red X = **Failure** (something went wrong)
   - Yellow dot = **In progress** (the helper is still working)
3. Find one run with a **green checkmark** and note:
   - **Workflow name:** _______________________
   - **When it ran:** _______________________
   - **What triggered it:** _______________________

4. Find one run with a **red X** and note:
   - **Workflow name:** _______________________
   - **When it ran:** _______________________

**Checkpoint:** Raise your hand when you can point to a green (success) and a red (failure) run.

---

### Step 3: View Run Details (5 min)

1. Click on a workflow run with a **green checkmark**
2. You'll see a details page showing:
   - The workflow name at the top
   - The trigger (what caused it to run)
   - The job(s) that ran
   - How long it took
3. Click on the **job name** to expand the steps
4. Look at the individual steps --- each one has its own green checkmark

**Write down:**
- **How many steps** did this workflow have? _______
- **How long** did it take to complete? _______

5. Now go back and click on a run with a **red X**
6. Look at the steps --- which step has the red X?

**Write down:**
- **Which step failed?** _______________________

**Checkpoint:** Raise your hand when you've viewed both a successful and a failed run.

---

### Step 4: Read a YAML Workflow File (7 min)

1. Go back to the repository's **Code** tab
2. Click on the `.github` folder
3. Click on the `workflows` folder
4. You should see one or more `.yml` files --- click on one

**You are reading a "recipe card" for the automatic helper.** Look for these parts:

| What to Find | What It Looks Like | Write What You See |
|-------------|-------------------|-------------------|
| **Name** (recipe name) | `name:` near the top | _______________________ |
| **Trigger** (when it starts) | `on:` section | _______________________ |
| **Job name** (the assignment) | Indented under `jobs:` | _______________________ |
| **Steps** (the individual tasks) | Listed under `steps:` | How many? _______ |

**Don't worry about understanding every line.** Focus on the four parts above.

**Checkpoint:** Raise your hand when you can point to the name, trigger, job, and steps in the YAML file.

---

## Part 2: Independent Practice --- Analyze Workflows and Plan Farm Automation (35 minutes)

### Task 1: Explore 3 Pre-Built Workflows (15 min)

In the demo repository, find and explore **3 different workflows**. For each one, fill in this table:

**Workflow 1:**
- **Name:** _______________________
- **Trigger type:** Schedule / Event / Manual (circle one)
- **What does it do?** _______________________
- **Status of most recent run:** Success / Failure / In Progress (circle one)
- **Number of steps:** _______

**Workflow 2:**
- **Name:** _______________________
- **Trigger type:** Schedule / Event / Manual (circle one)
- **What does it do?** _______________________
- **Status of most recent run:** Success / Failure / In Progress (circle one)
- **Number of steps:** _______

**Workflow 3:**
- **Name:** _______________________
- **Trigger type:** Schedule / Event / Manual (circle one)
- **What does it do?** _______________________
- **Status of most recent run:** Success / Failure / In Progress (circle one)
- **Number of steps:** _______

**How to find the workflows:**
- **Actions tab** shows the runs (click a run to see details)
- **Code tab** > `.github/workflows/` shows the YAML files (click a file to read the "recipe card")

---

### Task 2: Match Farm Tasks to Automation Types (10 min)

**Choose the scenario closest to your farm operation:**

---

#### Scenario A: Crop Farm

You manage a crop farm with multiple fields. Think about tasks that happen regularly or in response to events.

**Identify 3 tasks that could be automated. For each, choose the trigger type and explain why:**

| Farm Task | Trigger Type | Why This Trigger? |
|-----------|-------------|-------------------|
| *Example: Send a weekly irrigation check reminder* | *Schedule* | *It needs to happen every week, same day* |
| 1. _______________________ | Schedule / Event / Manual | _______________________ |
| 2. _______________________ | Schedule / Event / Manual | _______________________ |
| 3. _______________________ | Schedule / Event / Manual | _______________________ |

**Ideas to get you started:**
- Weekly soil moisture check reminder
- Alert when a new pest issue is reported
- Monthly crop rotation planning task
- Seasonal planting checklist (on demand)
- Notification when a field issue is marked urgent

---

#### Scenario B: Equipment & Operations

You manage farm equipment and daily operations. Think about maintenance schedules and operational alerts.

**Identify 3 tasks that could be automated. For each, choose the trigger type and explain why:**

| Farm Task | Trigger Type | Why This Trigger? |
|-----------|-------------|-------------------|
| *Example: Create monthly oil change reminder* | *Schedule* | *Happens every month regardless* |
| 1. _______________________ | Schedule / Event / Manual | _______________________ |
| 2. _______________________ | Schedule / Event / Manual | _______________________ |
| 3. _______________________ | Schedule / Event / Manual | _______________________ |

**Ideas to get you started:**
- Weekly equipment inspection checklist
- Alert when a maintenance Issue is overdue
- End-of-season winterization reminder
- Notification when a repair is marked "emergency"
- Quarterly inventory count (run when ready)

---

#### Scenario C: Livestock

You manage livestock and animal health records. Think about care schedules and health monitoring.

**Identify 3 tasks that could be automated. For each, choose the trigger type and explain why:**

| Farm Task | Trigger Type | Why This Trigger? |
|-----------|-------------|-------------------|
| *Example: Daily feeding schedule reminder* | *Schedule* | *Must happen every day at the same time* |
| 1. _______________________ | Schedule / Event / Manual | _______________________ |
| 2. _______________________ | Schedule / Event / Manual | _______________________ |
| 3. _______________________ | Schedule / Event / Manual | _______________________ |

**Ideas to get you started:**
- Weekly herd health check reminder
- Alert when a livestock health Issue is marked "emergency"
- Monthly vaccination schedule notification
- Welcome message when a new team member reports their first animal observation
- Quarterly breeding program review (run when ready)

---

### Task 3: Evaluate a Workflow Run (10 min)

Find a workflow run with a **red X** (failure) in the demo repository.

**Answer these questions:**

1. **What is the workflow name?** _______________________

2. **When did it run?** _______________________

3. **What triggered it?** _______________________

4. **Which step failed?** (Click the job name to see the steps)
   _______________________

5. **What error message do you see?** (Look in the failed step's output)
   _______________________

6. **What do you think went wrong?** (Your best guess in plain language)
   _______________________

7. **If this were a farm task, what would you check first?**
   _______________________

**Don't worry about understanding the technical error.** The goal is to practice the skill of finding where something went wrong and thinking about what to do next.

---

## Success Criteria

You have completed this exercise when:
- [ ] You navigated to the Actions tab and found workflow runs
- [ ] You identified the status (green/red/yellow) of at least 3 workflow runs
- [ ] You opened a YAML file and identified the name, trigger, job, and steps
- [ ] You explored 3 different workflows and filled in the analysis table
- [ ] You matched 3 farm tasks to appropriate trigger types (schedule, event, or manual)
- [ ] You evaluated a failed workflow run and identified where it broke

---

## Stretch Challenges

- [ ] Find a workflow with a **manual trigger** --- can you find the "Run workflow" button on the Actions page? (Ask the instructor before running it)
- [ ] Compare two YAML files side by side --- what do they have in common? What's different?
- [ ] Write a plain-English "recipe card" for a dream farm automation: Name, Trigger, Steps (no YAML needed --- just words)
- [ ] Help a classmate identify the best trigger type for their farm tasks
- [ ] Find the longest-running workflow in the demo repository --- how long did it take?

---

## Reflection Questions

Answer these on your lab sheet or discuss with your partner:

1. **What was the most interesting workflow you found?** Why?
   _____________________________________________

2. **Which trigger type (schedule, event, manual) would be most useful on your farm?** Why?
   _____________________________________________

3. **What farm task do you most wish could run automatically?**
   _____________________________________________

4. **When you saw a failed workflow, how did you figure out what went wrong?**
   _____________________________________________

5. **Farm application:** List 3 farm tasks you'd automate and the trigger type for each:
   - Task 1: _________________________ --- Trigger: Schedule / Event / Manual
   - Task 2: _________________________ --- Trigger: Schedule / Event / Manual
   - Task 3: _________________________ --- Trigger: Schedule / Event / Manual

6. **On a scale of 1-5, how confident do you feel reading a YAML workflow file?**
   (1 = not at all, 5 = very confident) _______
   What would help you feel more confident? _____________________________________________

---

## Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| Can't find the Actions tab | Look for the tab row near the top of the repository. If your screen is narrow, click the **"..."** (three dots) to reveal hidden tabs |
| Actions tab shows "no workflows" | Make sure you're in the correct demo repository (check the URL on your handout). The demo repo has pre-built workflows |
| Can't see workflow runs | Click "Actions" tab, then click a workflow name on the left sidebar to filter runs |
| YAML file looks confusing | Focus only on `name:`, `on:`, `jobs:`, and `steps:` --- ignore everything else for now |
| Don't understand the error in a failed run | That's okay! The goal is to find WHERE it failed (which step), not to fix it. Write down what you see |
| Page is loading slowly | GitHub Actions pages can take a moment. Wait 10-15 seconds. If still slow, refresh the page |
| Can't find `.github/workflows/` folder | Go to the Code tab (not Actions). Click `.github` folder first, then `workflows` inside it |
| Workflow run details page is confusing | Look for the job name (usually a colored box). Click it to expand and see individual steps |

---

*Automatic helpers don't replace your farming expertise --- they make sure the routine tasks happen every time, so you can focus on the work that needs your judgment.*
