# Quick-Reference Guide: Workflow Setup

> **Session 8: Automating Farm Tasks**
> Keep this guide handy — it covers everything you need to create, schedule, verify, and fix automated workflows.

---

## How to Enable a Workflow

### Step-by-step:

1. **Open your repository** on GitHub
2. Click the **"Actions"** tab at the top of the page
3. Click **"New workflow"** (or if this is your first workflow, you'll see a "Get started" page)
4. Click **"set up a workflow yourself"** (small link near the top)
5. **Change the file name** at the top of the editor (e.g., `my-reminder.yml`)
6. **Delete** the default content in the editor
7. **Paste or type** your workflow YAML (see sample below)
8. Click **"Commit changes..."** (green button, top right)
9. Select **"Commit directly to the main branch"**
10. Click **"Commit changes"**

Your workflow is now active. It will run on the schedule you set, or you can trigger it manually.

---

## Cron Schedule Cheat Sheet

A cron expression has **5 fields**. Think of it as setting an alarm clock with 5 dials:

```
 Minute   Hour   Day-of-Month   Month   Day-of-Week
   *        *         *            *         *
```

**The asterisk `*` means "every."**

### Five Common Schedules

| What You Want | Cron Expression | Explanation |
|---------------|----------------|-------------|
| **Every day at 8 AM UTC** | `0 8 * * *` | Minute 0, Hour 8, every day, every month, every day of week |
| **Every Monday at 1 PM UTC** | `0 13 * * 1` | Minute 0, Hour 13, every day of month, every month, Monday only |
| **First of every month at 2 PM UTC** | `0 14 1 * *` | Minute 0, Hour 14, Day 1 only, every month, every day of week |
| **Every weekday (Mon-Fri) at 9 AM UTC** | `0 9 * * 1-5` | Minute 0, Hour 9, every day of month, every month, Monday through Friday |
| **Every Wed and Fri at noon UTC** | `0 12 * * 3,5` | Minute 0, Hour 12, every day of month, every month, Wednesday and Friday |

### Day-of-Week Numbers

| Number | Day |
|--------|-----|
| 0 | Sunday |
| 1 | Monday |
| 2 | Tuesday |
| 3 | Wednesday |
| 4 | Thursday |
| 5 | Friday |
| 6 | Saturday |

### Time Zone Tip

GitHub uses **UTC time**. To convert to your local time:
- **US Eastern:** UTC minus 5 hours (minus 4 during daylight saving)
- **US Central:** UTC minus 6 hours (minus 5 during daylight saving)
- **US Mountain:** UTC minus 7 hours (minus 6 during daylight saving)
- **US Pacific:** UTC minus 8 hours (minus 7 during daylight saving)

**Example:** To run at 7 AM US Central, set the hour to `13` (7 + 6 = 13 UTC).

---

## How to Verify a Workflow Ran

1. Go to the **"Actions"** tab in your repository
2. Click your **workflow name** on the left sidebar
3. Look at the list of runs. Each run shows:
   - **Green checkmark** = Success
   - **Red X** = Failed
   - **Yellow circle** = In progress
4. **Click on a run** to see the details
5. **Click on a job** (e.g., "create-reminder") to see each step
6. **Click on a step** to see the full log output

### What to look for:
- Every step should have a green checkmark
- If the workflow creates an Issue, go to the **Issues tab** to verify it appeared
- The run log shows timestamps so you can confirm when it ran

---

## Common Errors and Fixes

| Error / Problem | What It Means | How to Fix It |
|-----------------|---------------|---------------|
| **"Invalid workflow file"** | YAML formatting or indentation is wrong | Edit the file. Check that every level uses exactly 2 spaces (not tabs). Make sure colons have a space after them. |
| **"Unexpected value"** | A keyword is misspelled or in the wrong place | Check spelling of `name`, `on`, `schedule`, `jobs`, `runs-on`, `steps`, `uses`, `with`. |
| **"Resource not accessible by integration"** | The workflow doesn't have permission to create Issues | Add `permissions: issues: write` under the job name. Or go to Settings > Actions > General > Workflow permissions > "Read and write permissions." |
| **"Cron expression is not valid"** | The cron format is wrong | Make sure there are exactly 5 fields. Use single quotes around the expression: `'0 13 * * 1'`. |
| **"Run workflow" button is missing** | `workflow_dispatch` is not in the YAML | Edit the file and add `workflow_dispatch:` under the `on:` section. Commit the change. |
| **No workflow run appears** | The scheduled time hasn't arrived yet | Use the "Run workflow" button to test manually, or wait for the next scheduled time. Scheduled runs can be delayed up to 15 minutes. |
| **Issue was created but has no labels** | The label doesn't exist in your repository | Go to Issues > Labels > "New label" and create the label name that matches your YAML (e.g., "equipment"). |
| **Workflow runs but no Issue appears** | The "Create issue" step may have failed silently | Click the workflow run, expand the step log, and look for error messages at the bottom. |

---

## Sample YAML: Farm Reminder Workflow

Copy this YAML to create a weekly farm reminder that opens an Issue every Monday:

```yaml
name: Weekly Farm Reminder

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
      - name: Create farm task issue
        uses: actions/github-script@v7
        with:
          script: |
            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Weekly Farm Tasks - ' + new Date().toLocaleDateString(),
              body: '## Weekly Checklist\n\n- [ ] Task 1: Check equipment\n- [ ] Task 2: Inspect fields or livestock\n- [ ] Task 3: Review supply levels\n- [ ] Task 4: Update farm records\n\nComplete all items and close this issue when done.',
              labels: ['recurring']
            })
```

### How to Customize This Template

| What to Change | Where in the YAML | Example |
|---------------|-------------------|---------|
| **Workflow name** | `name:` (line 1) | `name: Monthly Soil Test Reminder` |
| **Schedule** | `cron:` value | `'0 14 1 * *'` for the first of every month |
| **Issue title** | `title:` in the script | `'Monthly Soil Test - ' + new Date().toLocaleDateString()` |
| **Checklist items** | `body:` in the script | Change the `- [ ] Task` lines to your own tasks |
| **Labels** | `labels:` array | `['crops', 'recurring']` |

### YAML Formatting Rules

- Use **spaces**, not tabs
- Each indentation level is **exactly 2 spaces**
- Put a **space after every colon** (`name: value`, not `name:value`)
- Wrap the cron expression in **single quotes** (`'0 13 * * 1'`)
- The **pipe character** `|` after `script:` means "the next indented block is the script content"

---

## Key Vocabulary

| Term | Definition | Farm Analogy |
|------|-----------|--------------|
| **GitHub Actions** | GitHub's built-in automation system that runs tasks for you | An automated farmhand who follows your instructions |
| **Workflow** | A set of automated instructions saved as a YAML file in `.github/workflows/` | A recipe card with step-by-step instructions |
| **Cron schedule** | A 5-field expression that defines when a workflow runs | Your alarm clock settings |
| **Trigger** | The event that starts a workflow (schedule, manual, or event-based) | The motion sensor that turns on the barn light |
| **Workflow run** | One execution of a workflow, visible in the Actions tab | One time the farmhand completed the task |
| **Run log** | The detailed record of what happened during a workflow run | The farmhand's report of what they did |
| **`workflow_dispatch`** | A trigger that lets you run a workflow manually by clicking a button | A "Test" button on your alarm clock |
| **YAML** | The language used to write workflow files (uses careful spacing and colons) | The recipe card format with exact formatting rules |
| **Green checkmark** | Indicates a workflow run completed successfully | The farmhand finished the job |
| **Red X** | Indicates a workflow run failed | Something went wrong — check the report |
