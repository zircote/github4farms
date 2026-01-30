# Template Design Guide — Quick-Reference

> **Session 6: Basic Workflows & Templates**
> Keep this guide handy when building templates for your farm.

---

## Creating an Issue Template

1. Go to your repository → **Settings**
2. Scroll to **Features** → click **"Set up templates"** (next to Issues)
3. Click **"Add template"** → **"Custom template"**
4. Click the **pencil icon** to edit
5. Fill in the **name**, **description**, and **template content**
6. Click **"Propose changes"** → **"Commit changes"**

**To test:** Go to Issues → New Issue — your template appears in the chooser.

---

## Parts of a Good Template

Every template should have:

| Part | Purpose | Example |
|------|---------|---------|
| **Name** | Identifies the template in the chooser | "Equipment Maintenance Request" |
| **Description** | Tells users when to use this template | "Report equipment issues or request maintenance" |
| **Guided sections** | Prompt for specific information | Equipment name, Location, Problem |
| **Urgency level** | Checkboxes for priority | Emergency / High / Medium / Low |
| **Checklist** | Track steps to completion | Photo attached, Parts ordered, Repair done |

---

## Writing Template Content

Use this structure as a starting point:

```
## [Category] Information
- **[Field 1]:**
- **[Field 2]:**
- **[Field 3]:**

## Description
[Prompt for what happened or what's needed]

## Urgency
- [ ] Emergency — [definition]
- [ ] High — [definition]
- [ ] Medium — [definition]
- [ ] Low — [definition]

## Steps Already Taken
-

## Checklist
- [ ] [Step 1]
- [ ] [Step 2]
- [ ] [Step 3]
```

**Tip:** Write your template as if you're explaining to someone on their first day. What would they need to tell you?

---

## Markdown Formatting Reminders

| What You Want | What to Type |
|---------------|-------------|
| **Bold text** | `**Bold text**` |
| Checkbox (unchecked) | `- [ ] Task item` |
| Checkbox (checked) | `- [x] Completed item` |
| Heading | `## Section Title` |
| Bullet point | `- Item` |
| Blank line for user to fill in | Leave an empty line after the prompt |

**Important:** For checklists, the format is: dash, space, open bracket, space, close bracket, space, text.
`- [ ] Photo attached` (correct)
`-[] Photo attached` (will not work)

---

## Creating a Saved Reply

1. Click your **profile icon** (top right) → **"Settings"**
2. Click **"Saved replies"** (left menu)
3. Click **"Add a saved reply"**
4. Enter a **title** (for your reference) and the **reply text**
5. Click **"Add saved reply"**

**To use:** In any comment box, click the **arrow icon** in the toolbar → select your reply → edit bracketed parts → post.

---

## Ready-Made Saved Replies

Copy any of these:

| Title | Reply Text |
|-------|-----------|
| Repair completed | Repair completed and tested. Equipment is back in service. Closing this Issue. |
| Parts ordered | Parts ordered. Expected delivery: [date]. Will update when they arrive. |
| Reassigning | Reassigning to @[name] — this is in their area of responsibility. |
| Thank you | Thank you for reporting this. I'll check on it today and update this Issue. |
| Needs more info | Can you add more details? Specifically: [what you need]. This will help me prioritize. |
| Scheduled | This has been scheduled for [date]. I'll update when complete. |

---

## Farm Template Ideas

| Template Name | Use For |
|--------------|---------|
| Equipment Maintenance Request | Breakdowns, scheduled service, repairs |
| Crop Issue Report | Pest damage, disease, weather damage, soil problems |
| Livestock Health Record | Illness, injury, vet visits, vaccinations |
| Weekly Safety Inspection | Equipment checks, hazard reports |
| Seasonal Planning Task | Planting, harvest, winter prep |
| Supply Order Request | Seeds, parts, feed, chemicals |

---

## When to Use Each Template Type

| Need | Use This |
|------|----------|
| Same kind of Issue every time | **Issue Template** |
| Same comment typed repeatedly | **Saved Reply** |
| Same project board layout | **Project Template** (Session 9) |

---

## Key Vocabulary

| Term | Meaning |
|------|---------|
| **Issue Template** | Pre-filled form for creating Issues |
| **Saved Reply** | Reusable comment text |
| **Custom Template** | A template you design yourself |
| **Template Chooser** | The menu shown when you click "New Issue" |

---

## Editing or Deleting Templates

- Go to **Settings → Issue Templates**
- Click the **pencil icon** to edit a template
- Click the **trash icon** to delete one
- Click **"Propose changes"** → **"Commit changes"** to save

**You can always change your templates later** — so don't worry about getting them perfect the first time.

---

*A good template captures your expertise in a form. Build it once, use it every week.*
