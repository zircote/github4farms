# Session 6 Lab Exercise: Basic Workflows & Templates

> **Duration:** 55 minutes total (Guided Practice 20 min + Independent Practice 35 min)
> **Prerequisites:** GitHub account, Issues experience (Session 2)
> **Materials:** Computer with browser, your own GitHub repository (or create one during the exercise)
> **Format:** Guided template creation, then independent design and testing

---

## Part 1: Guided Practice — Create Your First Issue Template (20 minutes)

### Before You Start

You need a repository where you are the **owner** (only owners can access Settings). If you don't have one:

1. Click the **"+"** icon (top right of any GitHub page)
2. Click **"New repository"**
3. Name it something like **"my-farm"** or **"[your-name]-farm"**
4. Select **"Public"** (so classmates can see your templates)
5. Check **"Add a README file"**
6. Click **"Create repository"**

**Write down your repository name:** _______________________

---

### Step 1: Open Template Settings (3 min)

1. Go to your repository
2. Click **"Settings"** (right side of the tab bar — you'll only see this if you're the owner)
3. Scroll down to the **"Features"** section
4. Next to **"Issues"**, click **"Set up templates"**

**Can't find Settings?** You might not be on your own repository. Check that your username appears in the URL.

**Checkpoint:** You should see a page titled "Issue templates" with an "Add template" button.

---

### Step 2: Create an Equipment Maintenance Template (10 min)

1. Click **"Add template"**
2. Choose **"Custom template"**
3. Click the **pencil icon** next to the template to edit it
4. Fill in:

**Template name:**
> Equipment Maintenance Request

**About:**
> Use this template to report equipment issues or request maintenance service.

**Template content** (copy this into the body):

```
## Equipment Information
- **Equipment name:**
- **Location:**
- **Current hours/mileage:**

## Problem Description
Describe what's wrong or what maintenance is needed:


## Urgency
Select one:
- [ ] Emergency — equipment is unsafe or non-functional
- [ ] High — needed within 2 days
- [ ] Medium — needed this week
- [ ] Low — can wait until next scheduled maintenance

## Steps Already Taken
List anything you've already checked or tried:
-

## Checklist
- [ ] Photo of the problem attached
- [ ] Service manual consulted
- [ ] Parts identified (list below if known)
- [ ] Repair completed
- [ ] Post-repair test done
```

5. Click **"Propose changes"** (green button at top)
6. Click **"Commit changes"**

**Checkpoint:** Go to your repository's **Issues** tab. Click **"New issue"**. You should see "Equipment Maintenance Request" as a template option.

---

### Step 3: Test Your Template (5 min)

1. From the template chooser, click **"Get started"** next to "Equipment Maintenance Request"
2. Fill in the blanks with a realistic scenario:
   - Equipment name: John Deere 6120M Tractor
   - Location: Equipment shed
   - Problem: Engine stalls when idling for more than 2 minutes
   - Urgency: Medium
   - Steps taken: Checked oil level (normal), cleaned air filter
3. Click **"Submit new issue"**

**Checkpoint:** Your Issue should appear with all the sections neatly formatted.

---

### Step 4: Create a Saved Reply (2 min)

1. Click your **profile icon** (top right) → **"Settings"**
2. Click **"Saved replies"** (left menu, under "Code, planning, and automation")
3. Click **"Add a saved reply"**
4. Title: **"Repair completed"**
5. Reply text: **"Repair completed and tested. Equipment is back in service. Closing this Issue."**
6. Click **"Add saved reply"**

**Checkpoint:** Go back to the Issue you just created. In the comment box, look for the **arrow icon** in the toolbar. Click it — your saved reply should appear.

---

## Part 2: Independent Practice — Design Farm Templates (35 minutes)

### Task 1: Create 2 More Issue Templates (20 min)

Choose 2 templates from the list below. For each one, go to Settings → Issue Templates → Add template → Custom template.

**Option A: Crop Issue Report**

Suggested sections:
- Field name/number
- Crop and growth stage
- Issue description (what you're seeing)
- Photo attachment prompt
- Urgency level (checkboxes)
- Possible causes
- Action taken

**Option B: Livestock Health Record**

Suggested sections:
- Animal ID or group name
- Type (cattle, sheep, poultry, etc.)
- Symptoms or observation
- Veterinarian contacted? (yes/no)
- Treatment given
- Follow-up needed (checkboxes)
- Photo attachment prompt

**Option C: Weekly Safety Inspection**

Suggested sections:
- Date of inspection
- Area inspected
- Equipment checked (checklist)
- Hazards found
- Action required
- Inspector name
- Follow-up deadline

**Option D: Seasonal Planning Task**

Suggested sections:
- Season (Spring/Summer/Fall/Winter)
- Task category (planting, harvest, maintenance, compliance)
- Description
- Deadline
- Resources needed
- Dependencies (what needs to happen first)
- Completion checklist

**Option E: Supply Order Request**

Suggested sections:
- Item(s) needed
- Quantity
- Preferred supplier
- Urgency (routine/urgent/emergency)
- Budget estimate
- Delivery deadline
- Approval needed from

**Option F: Design Your Own**

Create a template for something specific to your farm that isn't listed above.

**Need ideas?** Think about what tasks you create most often. What information do you always need?

---

### Task 2: Create 2 More Saved Replies (5 min)

Go to Settings → Saved replies. Create 2 replies you'd use often:

**Suggested replies:**

| Title | Reply Text |
|-------|-----------|
| Parts ordered | "Parts ordered. Expected delivery: [date]. Will update when they arrive." |
| Reassigning | "Reassigning to @[name] — this is in their area of responsibility." |
| Thank you | "Thank you for reporting this. I'll check on it today and update this Issue." |
| Needs more info | "Can you add more details? Specifically: [what you need]. This will help me prioritize the task." |
| Scheduled | "This has been scheduled for [date]. I'll update when complete." |

Or write your own — think about what comments you type most often.

---

### Task 3: Test Your Templates (10 min)

1. Go to your Issues tab and click **"New issue"**
2. You should see all your templates listed
3. Create a new Issue using **each** of your templates
4. Fill in the blanks with realistic farm scenarios
5. Use a **Saved Reply** to add a comment to at least 1 Issue

**Write down how many templates you created:** _______

### Success Criteria

You have completed this exercise when:
- [ ] You created at least 2 Issue Templates (plus the 1 from guided practice = 3 total)
- [ ] Each template has at least 3 guided sections and 1 checklist
- [ ] You created at least 2 Saved Replies (plus the 1 from guided practice = 3 total)
- [ ] You tested at least 1 template by creating a real Issue with it
- [ ] You used at least 1 Saved Reply in a comment

### Stretch Challenges (for those who finish early)

- [ ] Add **default labels** to your templates (in the template settings, there's a Labels field)
- [ ] Create a template for **every common task** on your farm (aim for 5+)
- [ ] Visit a classmate's repository and create an Issue using one of **their** templates — give them feedback on how it worked
- [ ] Create a new repository specifically for your farm and add all your templates to it
- [ ] Design a template that includes **assignee** and **project** defaults

---

## Reflection Questions

Answer these on your lab sheet or discuss with your partner:

1. **How many Issue Templates did you create?** _______

2. **Which template will be most useful on your farm?** Why?
   _____________________________________________

3. **What information did you include in your template that you might have forgotten without it?**
   _____________________________________________

4. **Who else on your farm would benefit from using your templates?**
   _____________________________________________

5. **Farm application:** List your farm's 3 most common recurring tasks. Which ones should have templates?
   - Task 1: _________________________ → Template? Yes / No
   - Task 2: _________________________ → Template? Yes / No
   - Task 3: _________________________ → Template? Yes / No

6. **Saved Replies:** What comment do you type most often when updating a task? Write it as a Saved Reply:
   - Title: _________________________
   - Text: _____________________________________________

---

## Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| Can't find Settings | You can only access Settings on repositories you own. Make sure the URL shows your username |
| "Set up templates" not visible | Scroll down in Settings to the "Features" section. The link is next to "Issues" |
| Template not appearing in Issue chooser | After committing the template, go back to Issues → New Issue. You may need to refresh the page |
| Template content looks wrong | Check your Markdown formatting — make sure checklists use `- [ ]` (dash, space, bracket, space, bracket) |
| Can't find Saved Replies in Settings | Click profile icon → Settings → scroll left menu to "Code, planning, and automation" → "Saved replies" |
| Arrow icon not showing in comment box | The Saved Replies icon is a small arrow in the comment toolbar. It may look like a down arrow or a bookmark icon depending on your browser |
| Accidentally committed the wrong template | Go to Settings → Issue Templates. You can edit or delete any template |
| Want to reorder templates | Templates appear in the order they were created. To reorder, you'll need to edit the files directly (advanced — ask the instructor) |

---

## Sample Template: Livestock Health Record

Use this as a reference when designing your own templates:

```
## Animal Information
- **Animal ID:**
- **Type:** (cattle / sheep / goat / horse / poultry / other)
- **Breed:**
- **Age:**

## Observation
What did you notice? Describe symptoms or behavior:


## Photos
Attach photos if applicable:


## Urgency
- [ ] Emergency — animal in distress, call vet immediately
- [ ] High — needs vet attention within 24 hours
- [ ] Medium — schedule vet visit this week
- [ ] Low — monitor and note at next regular checkup

## Veterinarian
- [ ] Vet contacted
- [ ] Vet visit scheduled: [date]
- [ ] Vet visit completed

## Treatment
Describe any treatment given:


## Follow-Up
- [ ] Recheck in 24 hours
- [ ] Recheck in 1 week
- [ ] Medication course: [duration]
- [ ] No follow-up needed
```

---

*Templates turn your expertise into a system. Once you build them, anyone on your farm can create a proper, complete task report — even on their first day.*
