# GitHub Actions Overview --- Quick-Reference Guide

> **Session 7: Introduction to GitHub Actions**
> Keep this guide handy when exploring workflows in any GitHub repository.

---

## What Are GitHub Actions?

GitHub Actions are **automatic helpers** built into every GitHub repository. You write a set of instructions once (called a **workflow**), tell the helper when to start (a **trigger**), and it does the work for you --- on a schedule, when something happens, or when you push a button. Think of it as a hired hand who follows written instructions perfectly, works 24/7, never forgets, and never calls in sick. Actions can create Issues, post comments, send notifications, add labels, and much more --- all without you lifting a finger.

---

## Three Trigger Types

| Trigger Type | Farm Analogy | What It Does | Example |
|-------------|-------------|-------------|---------|
| **Schedule** | Alarm clock | Runs at a set time automatically | Every Monday at 8 AM, create a weekly equipment check Issue |
| **Event** | Motion-sensor light | Runs when something happens in the repository | When a new Issue is created, add a welcome comment |
| **Manual** | Push a button | Runs when you click "Run workflow" | Click to generate an end-of-season report |

**How to choose:**
- Use **schedule** when the task needs to happen at a regular time regardless of what else is going on
- Use **event** when the task should react to a change (new Issue, label added, Pull Request opened)
- Use **manual** when you want to control exactly when the task runs

---

## How to View Workflow Runs

1. Go to any repository on GitHub
2. Click the **"Actions"** tab (in the tab row near the top of the page)
   - If you don't see it, click the **"..."** (three dots) to reveal hidden tabs
3. The **left sidebar** lists workflow names --- click one to filter its runs
4. The **center area** shows workflow runs with status icons:

| Icon | Status | Meaning |
|------|--------|---------|
| Green checkmark | **Success** | The helper finished the job correctly |
| Red X | **Failure** | Something went wrong --- the helper couldn't finish |
| Yellow dot | **In progress** | The helper is working right now |

5. **Click a run** to see details: what triggered it, when it ran, and how long it took
6. **Click the job name** (colored box) to expand and see individual steps

---

## Reading a YAML Workflow File (Annotated Diagram)

Workflow files live in the repository at: **Code tab > `.github` > `workflows` > `filename.yml`**

Here is a simple workflow with each part labeled:

```
name: Weekly Equipment Reminder          <-- RECIPE NAME
                                              What is this helper called?

on:                                      <-- TRIGGER (when to start)
  schedule:                                   This one uses a schedule
    - cron: '0 8 * * MON'                    (Every Monday at 8 AM)

jobs:                                    <-- JOBS (the work to do)
  send-reminder:                         <-- JOB NAME (the assignment)
    runs-on: ubuntu-latest                    (Technical detail --- ignore for now)
    steps:                               <-- STEPS (instructions in order)
      - name: Create reminder Issue      <-- STEP 1 name
        uses: actions/github-script@v7        (The tool this step uses)
        with:                                 (Settings for the tool)
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Weekly Equipment Check',
              body: 'Time for the weekly inspection.'
            })
```

**Focus on these four parts only:**

| Part | Keyword | What to Look For |
|------|---------|-----------------|
| **Recipe name** | `name:` | Near the top of the file |
| **Trigger** | `on:` | Look for `schedule`, `issues`, `pull_request`, or `workflow_dispatch` |
| **Job** | `jobs:` then a name below it | The name of the assignment (e.g., `send-reminder`) |
| **Steps** | `steps:` | A list of tasks, each starting with `- name:` |

**Common trigger keywords you'll see:**

| In the YAML | Trigger Type | Plain English |
|-------------|-------------|---------------|
| `schedule:` | Schedule | Runs on a timer (alarm clock) |
| `issues:` | Event | Runs when an Issue is created, edited, labeled, etc. |
| `pull_request:` | Event | Runs when a Pull Request is opened or updated |
| `workflow_dispatch:` | Manual | Runs when you click "Run workflow" |

---

## Farm Automation Ideas

| Farm Task | Trigger Type | How It Would Work |
|-----------|-------------|-------------------|
| Weekly equipment inspection reminder | Schedule | Every Monday, create an Issue with an equipment checklist |
| Overdue task alert | Schedule | Daily, check for Issues open longer than 14 days and post a comment |
| Welcome message for new team members | Event | When someone creates their first Issue, post a welcome comment |
| Urgent Issue notification | Event | When an Issue is labeled "emergency," post contact information |
| Monthly safety inspection reminder | Schedule | First of every month, create a safety inspection Issue |
| End-of-season summary report | Manual | Click a button to generate a report of all open and closed Issues |
| New seasonal planning tasks | Manual | Click a button to create a batch of spring/fall/winter planning Issues |
| Automatic label for crop issues | Event | When an Issue title contains "field" or "crop," add a "crop" label |
| Veterinary visit reminder | Schedule | Every quarter, create an Issue for scheduled vet visits |
| Supply reorder alert | Event | When a supply Issue is closed, create a follow-up to verify delivery |

---

## Key Vocabulary

| Term | Farm Analogy | Meaning |
|------|-------------|---------|
| **GitHub Actions** | Automatic farm helpers | A system built into GitHub that runs tasks automatically |
| **Workflow** | Written instructions for the hired hand | A YAML file that defines what to do, when, and how |
| **Trigger** | What tells the helper to start | The schedule, event, or button that kicks off a workflow |
| **Schedule trigger** | Alarm clock | Runs at a set time (daily, weekly, monthly) |
| **Event trigger** | Motion-sensor light | Runs when something happens in the repository |
| **Manual trigger** | Push a button | Runs when you click "Run workflow" |
| **Job** | The assignment | A named group of steps that run together |
| **Step** | One task in the instructions | A single action the workflow performs |
| **YAML** | Recipe card format | The file format (.yml) used to write workflow instructions |
| **Workflow run** | One time the helper did the job | A single execution of a workflow, visible in the Actions tab |
| **Status** | The job report | Green checkmark (success), red X (failure), yellow dot (in progress) |
| **Cron** | Alarm clock settings | The schedule format GitHub uses (you don't need to write this yet) |

---

## Troubleshooting Tips

| Problem | What to Do |
|---------|-----------|
| **Can't find the Actions tab** | Look in the tab row near the top of the repository page. If your screen is narrow, click the "..." (three dots) to reveal hidden tabs |
| **Actions tab says "no workflows"** | The repository may not have any workflows set up. Check that you're in the correct repository |
| **Workflow runs aren't showing** | Click a workflow name in the left sidebar to filter. Or try refreshing the page |
| **YAML file looks confusing** | Focus only on four keywords: `name:`, `on:`, `jobs:`, and `steps:`. Ignore everything else |
| **Can't find the `.github/workflows/` folder** | Go to the Code tab (not Actions). Look for a folder called `.github` at the root of the repository. Click it, then click `workflows` |
| **Workflow run failed (red X)** | Click the run, click the job name, find the step with the red X. Read the error message. You don't need to fix it --- just identify where it broke |
| **Don't understand the error message** | That's okay! Write down what you see and ask the instructor or a teammate. Knowing WHERE the error is matters more than understanding the code |
| **Accidentally clicked "Run workflow"** | No problem. If the workflow is set up safely, it will just run. Check the Actions tab to see the result |

---

## Reading a Workflow Run: Step by Step

1. Go to the **Actions** tab
2. Click a **workflow run** (any row in the list)
3. Read the summary: workflow name, trigger, date, duration
4. Click the **job name** (colored box) to expand
5. See each **step** with its own status icon
6. Green steps = completed successfully
7. Red step = this is where the problem happened (click to see the error)
8. If all steps are green = the workflow ran successfully

---

*Automatic helpers don't replace your farming expertise. They handle the routine so you can focus on the decisions that need your judgment.*
