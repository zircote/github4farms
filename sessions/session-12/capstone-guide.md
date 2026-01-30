# Capstone Guide

> **Session 12 Quick Reference --- Keep this handout open while you build**
> **Capstone & Train-the-Trainer: Build Your Complete Farm Repository**

---

## Capstone Requirements Summary

Your completed repository must include:

| # | Requirement | Done? |
|---|------------|-------|
| 1 | Repository with descriptive name and README | [ ] |
| 2 | At least 5 Issues with detailed descriptions | [ ] |
| 3 | At least 4 custom labels applied to Issues | [ ] |
| 4 | At least 1 Issue template for recurring tasks | [ ] |
| 5 | Project board linked to your repository | [ ] |
| 6 | At least 2 custom fields on your Project | [ ] |
| 7 | Iterations set up (weekly or monthly) | [ ] |
| 8 | Timeline (Roadmap) view showing your Issues | [ ] |
| 9 | At least 1 Copilot-drafted Issue (prompted, evaluated, edited) | [ ] |
| 10 | Board view with organized columns | [ ] |

---

## Step-by-Step Setup Checklist

### Step 1: Create Your Repository (5 minutes)

1. Go to **github.com** and sign in
2. Click the **+** button in the top-right corner
3. Select **"New repository"**
4. Enter a **repository name** that describes your farm operation:
   - Crops example: `sunrise-acres-crop-plan`
   - Equipment example: `smith-ranch-equipment`
   - Livestock example: `hillside-livestock-mgmt`
5. Add a short **description** (the line under the name): e.g., "Seasonal crop management for Sunrise Acres, a 120-acre diversified farm"
6. Select **"Public"** (or Private if you prefer)
7. Check **"Add a README file"**
8. Click **"Create repository"**
9. Click the **pencil icon** on the README to edit it
10. Write 2-3 sentences describing your farm operation and what this repository manages
11. Click **"Commit changes"**

**You should now see:** A repository with a README displayed on the main page.

---

### Step 2: Create Custom Labels (5 minutes)

1. Click the **"Issues"** tab
2. Click **"Labels"** (next to the Milestones button)
3. Click **"New label"**
4. Enter a **label name**, pick a **color**, and add a short **description**
5. Click **"Create label"**
6. Repeat to create at least 4 labels

**Suggested labels by scenario:**

| Crops | Equipment | Livestock |
|-------|-----------|-----------|
| `planting` | `tractor` | `animal-health` |
| `harvest` | `routine-maintenance` | `breeding` |
| `soil-health` | `repair` | `pasture` |
| `equipment` | `parts-needed` | `facility` |
| `planning` | `inspection` | `vet-visit` |
| `urgent` | `urgent` | `urgent` |

**Tip:** Choose colors that make sense to you --- green for growing, red for urgent, blue for planning, etc.

---

### Step 3: Create Issues (15 minutes)

1. Click the **"Issues"** tab
2. Click the green **"New issue"** button
3. Enter a **title** that clearly describes the task
4. In the **description box**, write the details:
   - What needs to be done
   - Use checkboxes: `- [ ] Step one` (type a dash, space, open bracket, space, close bracket, space, then the text)
   - Include any relevant dates, quantities, or locations
5. On the right sidebar, click **"Labels"** and apply at least 1 label
6. Click **"Submit new issue"**
7. Repeat to create at least 5 Issues total

**For at least 1 Issue, use Copilot** (see Step 3b below).

**Tip:** Your Issues should cover different types of farm tasks. Don't create 5 Issues that are all the same type.

---

### Step 3b: Create a Copilot-Drafted Issue (included in the 15 minutes above)

1. Click **"New issue"**
2. Type a descriptive **title**
3. Click in the **description box**
4. Look for the **Copilot icon** (sparkle icon) near the text toolbar
5. Click the icon to open Copilot
6. Type a **detailed prompt**, for example:
   - Crops: "Write an Issue description for spring planting preparation on a [size]-acre [crop] farm in [state]. Include a checklist with soil testing, seed ordering, equipment calibration, and field prep. Use markdown checkboxes."
   - Equipment: "Write an Issue description for pre-season tractor inspection covering fluid levels, tire condition, safety equipment, and PTO check for a [brand] [model]. Use markdown checkboxes."
   - Livestock: "Write an Issue description for spring vaccination schedule for a [number]-head [animal] herd, including vaccines, deworming, vet coordination, and record keeping. Use markdown checkboxes."
7. Review what Copilot generates and ask yourself:
   - **Accurate?** Are the facts and steps correct?
   - **Complete?** Is anything important missing?
   - **Relevant?** Does it match MY specific farm?
8. **Edit the draft:** Delete anything wrong, add what's missing, rewrite for your operation
9. Apply labels and click **"Submit new issue"**

**Tip:** The more detail you put in your prompt, the better the draft. Include your farm size, location, specific crops/animals/equipment, and what format you want.

---

### Step 4: Create an Issue Template (5 minutes)

1. Go to your repository's main page
2. Click **"Settings"** (the gear icon tab)
3. Scroll down to **"Features"** section
4. Next to Issues, click **"Set up templates"**
5. Click **"Add template"** and choose **"Custom template"**
6. Fill in:
   - **Template name:** e.g., "Seasonal Field Prep" or "Maintenance Work Order" or "Animal Health Task"
   - **About:** A one-sentence description of when to use this template
   - **Template content:** Write the sections you want every Issue of this type to include
7. Click **"Propose changes"**, then **"Commit changes"**

**Example template content for a Crop Farm:**

```
## Field Information
- **Field name:**
- **Acreage:**
- **Current crop/status:**

## Tasks Required
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

## Equipment Needed
-

## Target Completion Date
-

## Notes
-
```

**Example template content for Equipment:**

```
## Equipment Details
- **Equipment name/ID:**
- **Make/Model:**
- **Hours/Mileage:**

## Maintenance Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

## Parts Needed
-

## Assigned To
-

## Due Date
-
```

**Example template content for Livestock:**

```
## Animal Group
- **Group/Herd:**
- **Head count:**
- **Location/Pasture:**

## Health Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

## Supplies/Medications Needed
-

## Veterinarian Required?
- [ ] Yes / [ ] No

## Target Date
-

## Notes
-
```

**To test your template:** Go to Issues > New issue. You should see your template as an option.

---

### Step 5: Create a Project Board (10 minutes)

1. Go to your **GitHub profile** (click your avatar > "Your projects") OR click the **"Projects"** tab on your repository
2. Click **"New project"**
3. Choose **"Board"** layout (or Table --- you can add Board view later)
4. Name your Project (e.g., "Spring 2026 Farm Plan")
5. Click **"Create project"**

**Add Issues to your Project:**
6. In the Project, click **"+ Add item"** at the bottom of a column
7. Type **#** and select your repository, then pick an Issue
8. Repeat for all your Issues

**Add Custom Fields (at least 2):**
9. In the Project, click the **"+"** button next to the existing column headers (or go to **Settings** > **Custom fields**)
10. Add at least 2 fields. Suggested options:
    - **Priority** (Single select: High, Medium, Low)
    - **Season** (Single select: Spring, Summer, Fall, Winter)
    - **Estimated Cost** (Number)
    - **Category** (Single select: based on your operation)
11. Fill in the custom field values for your Issues

**Set Up Board View Columns:**
12. Your board should have columns like **To Do**, **In Progress**, and **Done** (these may be created by default)
13. Drag Issues into the appropriate columns

---

### Step 6: Set Up Iterations (5 minutes)

1. In your Project, go to **Settings** (gear icon)
2. Under **Custom fields**, click **"New field"**
3. Select **"Iteration"** as the field type
4. Name it (e.g., "Sprint" or "Week" or "Month")
5. Set the **duration** (1 week, 2 weeks, or 1 month --- whatever matches your planning cycle)
6. Click **"Save"**
7. Back in the board or table view, set the iteration for at least 3 of your Issues

**Tip:** Think about when each task actually needs to happen. Spread your Issues across 2-3 iterations rather than putting everything in the first one.

---

### Step 7: Create a Timeline View (5 minutes)

1. In your Project, click the **"+"** tab (or **"New view"**) at the top
2. Select **"Roadmap"** (this is the Timeline view)
3. Name the view (e.g., "Season Timeline")
4. You should see your Issues displayed on a date-based timeline
5. If Issues don't appear or have no dates:
   - Switch to the **Table view**
   - Add a **Date** field (or use an existing one) for start and end dates
   - Fill in dates for your Issues
   - Switch back to the **Roadmap view** --- Issues should now appear on the timeline

**Tip:** Set dates that match your real farming calendar. If spring planting starts in April, put those Issues in April.

---

### Step 8: Final Review (5 minutes)

Go through the requirements checklist one more time:

- [ ] Repository has a descriptive name and README
- [ ] 5+ Issues with descriptions, checklists, and labels
- [ ] 4+ custom labels created and applied
- [ ] 1+ Issue template created and tested
- [ ] Project board with Board view and organized columns
- [ ] 2+ custom fields added and filled in
- [ ] Iterations set up with Issues assigned
- [ ] Timeline/Roadmap view shows Issues on a calendar
- [ ] 1+ Issue drafted with Copilot, evaluated, and edited
- [ ] Everything works together as a coherent farm management system

**If you're missing something:** Focus on the items you haven't done yet. Prioritize Issues, Project board, and Copilot --- those are worth the most on the rubric.

---

## Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| **"I can't find the + button to create a repository"** | Look in the top-right corner of any GitHub page, next to your profile avatar |
| **"My README is empty"** | Click the pencil icon on the README file to edit it. Write a few sentences and commit |
| **"I don't know what to write in my Issues"** | Think about what you'd tell a new farmhand. What needs to happen? What steps are involved? What supplies are needed? |
| **"My labels disappeared"** | Labels are per-repository. Go to Issues > Labels to see them. You apply them when creating or editing an Issue |
| **"I can't find Settings for templates"** | Click the "Settings" tab on your repository (not your profile settings). Scroll to Features > Issues > Set up templates |
| **"My template doesn't show up when I create an Issue"** | Make sure you committed the template. Go to Issues > New issue --- templates appear as options on that page |
| **"Issues aren't on my Project board"** | You must manually add them. In the Project, click "+ Add item" and search for your Issues |
| **"Custom fields don't appear"** | In your Project, click the + next to existing column headers, or go to Settings > Custom fields |
| **"I set up iterations but Issues aren't assigned"** | In the table or board view, click the iteration field for each Issue and select the correct iteration |
| **"Timeline view is blank"** | Issues need date values. In the table view, add/fill in date fields, then switch to Roadmap view |
| **"Copilot icon isn't showing"** | Check Settings > Copilot on your GitHub profile. If unavailable, ask the instructor or pair with a neighbor |
| **"Copilot gave me irrelevant content"** | Rewrite your prompt with more detail: farm size, location, specific crops/animals/equipment, desired format |
| **"I'm running out of time"** | Prioritize: Issues (most important), then Project board, then template, then Copilot. Skip Timeline if needed |

---

## Peer Teaching Tips

When it's time to teach a concept to your partner:

**Before you teach:**
- Pick the skill you're most comfortable with
- Think of 3-5 steps (keep it simple)
- Know one tip or common mistake to share

**While you teach:**
1. **SHOW first** --- Do it on your screen while they watch
2. **EXPLAIN why** --- Don't just say "click here." Say "click here BECAUSE this is where..."
3. **Let them TRY** --- Hand over control. Let them struggle a little before helping
4. **Give FEEDBACK** --- "You got that right. Next time, try checking the label before you submit."

**Common teaching mistakes to avoid:**
- Grabbing the mouse/keyboard back when they struggle (let them figure it out)
- Going too fast (slow down, pause after each step)
- Only showing WHERE to click without explaining WHY
- Forgetting to let them practice (watching is not learning)

**If your partner gets stuck:**
- Ask them: "What do you think the next step is?" before giving the answer
- Point to the right area of the screen instead of clicking for them
- Say: "You're close --- look at the menu on the left"

---

## Quick Reference: Where to Find Things in GitHub

| What You Need | Where to Find It |
|--------------|-----------------|
| Create a new repository | **+** button (top-right) > **New repository** |
| Edit the README | Click the **pencil icon** on the README file |
| Create an Issue | **Issues** tab > **New issue** |
| Manage labels | **Issues** tab > **Labels** |
| Create an Issue template | **Settings** tab > scroll to **Features** > **Set up templates** |
| Create a Project | **Projects** tab > **New project** (or from your profile) |
| Add Issues to a Project | In the Project, click **+ Add item** |
| Add custom fields | In the Project, click **+** next to columns or go to **Settings** |
| Set up iterations | Project **Settings** > **Custom fields** > **New field** > **Iteration** |
| Create a Timeline view | In the Project, click **+** tab (New view) > **Roadmap** |
| Access Copilot | In an Issue description box, click the **Copilot icon** (sparkle) |
| Test your Issue template | **Issues** > **New issue** --- your template should appear as an option |
