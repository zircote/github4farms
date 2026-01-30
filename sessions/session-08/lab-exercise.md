# Lab Exercise: Automating Farm Tasks

> **Session 8: Automating Farm Tasks**
> **Duration:** 55 minutes (Guided: 20 min + Independent: 35 min)
> **Prerequisites:** GitHub account, repository you own, familiarity with Issues (Session 2) and YAML basics (Session 7)

---

## Overview

In this exercise, you'll create an automated workflow that runs on a schedule and creates a GitHub Issue with a farm task checklist. You'll enable the workflow, customize the schedule, verify it runs, and troubleshoot any errors.

---

## Part 1: Guided Practice (20 minutes)

**Follow along with the instructor.**

### Step 1: Navigate to the Actions Tab

1. Go to your farm repository on GitHub
2. Click the **"Actions"** tab at the top of the page
3. You should see a page that says "Get started with GitHub Actions" (or a list of existing workflows)

**What you should see:** The Actions welcome page or your workflows list.

### Step 2: Create a New Workflow File

1. Click **"set up a workflow yourself"** (a small link near the top of the page)
   - If you already have workflows, click **"New workflow"** then **"set up a workflow yourself"**
2. GitHub opens a code editor with a file named `main.yml`
3. **Change the file name** at the top from `main.yml` to `equipment-check.yml`
4. **Select all** the default content in the editor and **delete it**

**What you should see:** An empty editor with the file path `.github/workflows/equipment-check.yml` at the top.

### Step 3: Paste the Workflow YAML

Copy and paste the following YAML into the editor. **Copy it exactly — every space matters.**

```yaml
name: Weekly Equipment Check Reminder

on:
  schedule:
    - cron: '0 13 * * 1'
  workflow_dispatch:

jobs:
  create-reminder:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Create equipment check issue
        uses: actions/github-script@v7
        with:
          script: |
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Weekly Equipment Check - ' + new Date().toLocaleDateString(),
              body: '## Monday Equipment Checklist\n\n- [ ] Check tractor oil level\n- [ ] Inspect irrigation lines for leaks\n- [ ] Test backup generator\n- [ ] Check tire pressure on all vehicles\n- [ ] Inspect barn doors and latches\n\nComplete all items and close this issue when done.',
              labels: ['equipment']
            })
```

> **Important:** Make sure there are exactly **2 spaces** for each indentation level. Do not use the Tab key.

### Step 4: Commit the Workflow File

1. Click the green **"Commit changes..."** button (top right)
2. In the popup:
   - Leave the commit message as-is or type: "Add weekly equipment check workflow"
   - Select **"Commit directly to the main branch"**
3. Click **"Commit changes"**

**What you should see:** GitHub saves the file and takes you back to the repository.

### Step 5: Test the Workflow Manually

1. Click the **"Actions"** tab
2. On the left side, click **"Weekly Equipment Check Reminder"**
3. Click the **"Run workflow"** dropdown button (on the right side)
4. Click the green **"Run workflow"** button in the dropdown
5. **Wait 10-15 seconds**, then refresh the page

**What you should see:** A new workflow run appears with a yellow circle (in progress) or green checkmark (complete).

### Step 6: Verify the Workflow Created an Issue

1. Click on the workflow run to see its details
2. Verify you see a **green checkmark** next to each step
3. Go to the **"Issues"** tab of your repository
4. You should see a new Issue titled "Weekly Equipment Check - [today's date]"
5. Open the Issue and verify the checklist is there

**What you should see:** A new Issue with the equipment checklist.

### Step 7: Modify the Schedule

1. Go to the **"Code"** tab of your repository
2. Navigate to `.github/workflows/equipment-check.yml`
3. Click the **pencil icon** (Edit this file) in the top right
4. Find the line that says `cron: '0 13 * * 1'`
5. Change it to `cron: '0 14 * * 3'` (this changes it to Wednesday at 2 PM UTC)
6. Click **"Commit changes..."** and commit

**What you changed:** The workflow now runs on Wednesdays instead of Mondays.

### Guided Practice Checkpoint

- [ ] I created a workflow file in `.github/workflows/`
- [ ] I pasted the YAML and committed it
- [ ] I triggered the workflow manually using "Run workflow"
- [ ] I saw a green checkmark in the Actions tab
- [ ] I found the new Issue in the Issues tab
- [ ] I modified the cron schedule and committed the change

**Raise your hand when you've completed the checkpoint.**

---

## Part 2: Independent Practice (35 minutes)

**Choose one of the three scenarios below and build a complete automated workflow.**

### Choose Your Scenario

---

#### Scenario A: Weekly Equipment Check (Equipment)

**Schedule:** Every Monday at 7 AM (your local time approximation)

**File name:** `equipment-weekly.yml`

**Copy this YAML:**

```yaml
name: Weekly Equipment Maintenance Reminder

on:
  schedule:
    - cron: '0 13 * * 1'
  workflow_dispatch:

jobs:
  create-reminder:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Create equipment maintenance issue
        uses: actions/github-script@v7
        with:
          script: |
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Weekly Equipment Maintenance - ' + new Date().toLocaleDateString(),
              body: '## Equipment Maintenance Checklist\n\n### Tractor\n- [ ] Check oil level\n- [ ] Inspect belts and hoses\n- [ ] Check tire pressure\n\n### Irrigation System\n- [ ] Walk all lines and check for leaks\n- [ ] Test pump pressure\n- [ ] Clean filters\n\n### General\n- [ ] Inspect barn doors and latches\n- [ ] Check fuel levels on all vehicles\n- [ ] Test backup generator\n\n---\nComplete all items and close this issue when done.',
              labels: ['equipment']
            })
```

**Your tasks:**
1. Create the workflow file in your repository
2. Customize the checklist — add or change items to match YOUR equipment
3. Trigger manually and verify it creates an Issue
4. Check the Actions tab for a green checkmark

---

#### Scenario B: Planting Season Reminder (Crops)

**Schedule:** First day of every month at 8 AM (your local time approximation)

**File name:** `planting-monthly.yml`

**Copy this YAML:**

```yaml
name: Monthly Planting Season Reminder

on:
  schedule:
    - cron: '0 14 1 * *'
  workflow_dispatch:

jobs:
  create-reminder:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Create planting season issue
        uses: actions/github-script@v7
        with:
          script: |
            const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            const now = new Date();
            const monthName = months[now.getMonth()];
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: monthName + ' Crop Planning Review',
              body: '## Monthly Crop Review - ' + monthName + '\n\n### Field Assessment\n- [ ] Walk all fields and check soil moisture\n- [ ] Check for pest or disease signs\n- [ ] Review weather forecast for the month\n\n### Planning\n- [ ] Review planting calendar for this month\n- [ ] Order seeds or supplies needed\n- [ ] Schedule equipment for upcoming field work\n\n### Records\n- [ ] Update crop journal with last month observations\n- [ ] Log any yield data from recent harvests\n- [ ] Note any changes to the season plan\n\n---\nComplete all items and close this issue when done.',
              labels: ['crops']
            })
```

**Your tasks:**
1. Create the workflow file in your repository
2. Customize the checklist — add items relevant to YOUR crops and fields
3. Trigger manually and verify it creates an Issue
4. Check the Actions tab for a green checkmark

---

#### Scenario C: Livestock Health Check Reminder (Livestock)

**Schedule:** Every Wednesday and Friday at 6 AM (your local time approximation)

**File name:** `livestock-health.yml`

**Copy this YAML:**

```yaml
name: Livestock Health Check Reminder

on:
  schedule:
    - cron: '0 12 * * 3,5'
  workflow_dispatch:

jobs:
  create-reminder:
    runs-on: ubuntu-latest
    permissions:
      issues: write
    steps:
      - name: Create livestock health check issue
        uses: actions/github-script@v7
        with:
          script: |
            const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            const now = new Date();
            const dayName = days[now.getDay()];
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: dayName + ' Livestock Health Check - ' + now.toLocaleDateString(),
              body: '## Livestock Health Check\n\n### Cattle\n- [ ] Visual inspection of all animals\n- [ ] Check water troughs are full and clean\n- [ ] Verify feed levels in all bins\n- [ ] Look for signs of illness or injury\n\n### Fencing & Shelter\n- [ ] Walk fence line and check for breaks\n- [ ] Inspect shelter for damage\n- [ ] Check bedding condition\n\n### Records\n- [ ] Log any health concerns\n- [ ] Note animals that need follow-up\n- [ ] Update medication or treatment records\n\n---\nComplete all items and close this issue when done.',
              labels: ['livestock']
            })
```

**Your tasks:**
1. Create the workflow file in your repository
2. Customize the checklist — change "Cattle" to your animals, adjust items for YOUR livestock
3. Trigger manually and verify it creates an Issue
4. Check the Actions tab for a green checkmark

---

### Independent Practice Checklist

- [ ] I chose a scenario (A, B, or C)
- [ ] I created a new workflow file with the correct name
- [ ] I pasted the YAML and customized the checklist for my farm
- [ ] I committed the workflow file
- [ ] I triggered the workflow manually using "Run workflow"
- [ ] I verified a green checkmark in the Actions tab
- [ ] I found the new Issue in the Issues tab with my checklist
- [ ] (If it failed) I read the error log and fixed the problem

---

## Stretch Challenges

**Finished early? Try one of these:**

1. **Change the schedule:** Modify the cron expression to a different day or time. Commit and verify the change appears in the workflow file.

2. **Add a second label:** In the YAML, change `labels: ['equipment']` to `labels: ['equipment', 'recurring']`. Commit and run the workflow to see both labels on the new Issue.

3. **Create a second workflow:** Pick a different scenario and create a second workflow file. You can have multiple workflows in the same repository.

4. **Customize the Issue body:** Add more checklist items, change the section headers, or add notes specific to your farm operation.

---

## Troubleshooting Guide

**If something goes wrong, check here first:**

| Problem | What to Check | How to Fix |
|---------|--------------|------------|
| "Run workflow" button is missing | Did you include `workflow_dispatch:` in the YAML? | Edit the file, add `workflow_dispatch:` under the `on:` section, commit |
| Workflow run shows a red X | Click the run, then click the failed step to see the error | Read the error message — usually indentation or a typo |
| "Invalid workflow file" error | YAML indentation is wrong | Make sure every level uses exactly 2 spaces (not tabs) |
| No Issue was created | The step may have failed silently | Check the run log for errors in the "Create ... issue" step |
| "Resource not accessible by integration" | Permissions are not set | Make sure `permissions: issues: write` is in the YAML, or go to Settings > Actions > General and enable "Read and write permissions" |
| Issue was created but has no labels | The label doesn't exist in your repository | Go to Issues > Labels and create the label first (e.g., "equipment") |
| Workflow doesn't run on schedule | GitHub scheduled workflows can be delayed up to 15 minutes | Wait, or use `workflow_dispatch` to test manually |

**Still stuck?** Raise your hand and the instructor will help.

---

## Reflection Questions

After completing the exercise, discuss with your partner:

1. **Which farm task did you automate?** Why did you choose that one?
2. **How would automated reminders change your weekly routine?** What would you spend that saved time on?
3. **What other tasks on your farm could you automate with scheduled workflows?**
4. **What was the hardest part of creating the workflow?** What helped you get past it?
5. **On a scale of 1-5, how confident do you feel creating a workflow on your own?** What would increase your confidence?

---

## Success Criteria

You have successfully completed this lab if:

- **Minimum:** You created one workflow file, committed it, triggered it manually, and verified it created an Issue (green checkmark in Actions tab)
- **Target:** You also customized the schedule and the Issue checklist to match your farm
- **Stretch:** You modified the schedule, added labels, or created a second workflow
