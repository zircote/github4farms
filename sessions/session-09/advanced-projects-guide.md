# Quick-Reference Guide: Advanced Projects & Roadmaps

> **Session 9: Advanced Projects & Roadmaps**
> Keep this guide handy — it covers everything you need to add custom fields, set up iterations, build a Timeline view, link Issues across repositories, and evaluate your seasonal roadmap.

---

## Custom Fields: How to Add and Use Each Type

Custom fields are extra columns you add to your Project to track farm-specific details — like adding new columns to a paper ledger.

### Adding a Custom Field

1. Open your Project in **Table view**
2. Click the **"+"** button at the far right of the column headers
3. Click **"New field"**
4. Type a name for your field
5. Choose the field type (see below)
6. Click **"Save"**

### Field Types

| Field Type | What It Stores | How to Use It | Farm Examples |
|------------|---------------|---------------|---------------|
| **Date** | A single calendar date | Click the cell, pick a date from the popup | Planting date, harvest date, service due date |
| **Single select** | One choice from a list you define | Click the cell, pick from the dropdown | Crop type, field name, equipment type, priority |
| **Number** | A numeric value | Click the cell, type a number | Acres, expected yield, head count, estimated hours |

### Tips for Custom Fields

- **You can add as many fields as you need** — but start with 3-4 to keep it manageable
- **Single select options can be added later** — edit the field to add new dropdown choices anytime
- **Custom fields appear in Table view as columns** — you can reorder columns by dragging the headers
- **Custom field values are per-Issue** — each Issue in the Project gets its own value for each field

### Editing or Deleting a Field

1. Click the **column header** for the field you want to change
2. Click **"Edit field"** to rename it, change options, or adjust settings
3. To delete: click the column header, then **"Delete field"** (this removes the field from all Issues)

---

## Iterations: Setup and Configuration

Iterations are named time blocks that divide your season into phases — like chapters in your farm year. Each iteration has a start date and a duration.

### Creating an Iteration Field

1. In **Table view**, click the **"+"** at the far right of the column headers
2. Click **"New field"**
3. Type a name (e.g., "Season Phase")
4. Choose **"Iteration"** as the field type
5. Set the **start date** for your first iteration
6. Set the **duration** (in weeks)
7. Click **"Save"**

### Adding More Iterations

1. Click the **column header** for your iteration field
2. Click **"Edit field"**
3. Click **"Add iteration"**
4. Name the iteration, set its start date and duration
5. Repeat for each time block you need
6. Click **"Save changes"**

### Example Iteration Setup

| Iteration Name | Start Date | Duration | What Happens |
|---------------|------------|----------|-------------|
| Spring Planting | Mar 15 | 6 weeks | Soil prep, planting, early irrigation |
| Growing Season | May 1 | 10 weeks | Fertilizing, pest scouting, irrigation |
| Harvest | Jul 15 | 8 weeks | Harvesting, drying, storage |
| Fall/Winter Prep | Sep 15 | 8 weeks | Equipment winterization, soil amendment |

### Assigning Issues to Iterations

1. In Table view, click the **iteration cell** for any Issue
2. Select the iteration from the dropdown
3. The Issue now belongs to that time block

### Tips for Iterations

- **Iterations should not overlap** — adjust start dates and durations so each time block ends before the next begins
- **You can rename iterations** anytime by editing the field
- **Not every Issue needs an iteration** — but Issues without one won't appear grouped in iteration-based views
- **Iterations work alongside date fields** — you can use both to get precise dates AND seasonal grouping

---

## Timeline View: Navigation and Features

The Timeline view (also called Roadmap) shows your Issues as horizontal bars on a calendar — your whole season at a glance.

### Opening Timeline View

1. Open your Project
2. Click the **"+"** icon next to the view tabs at the top
3. Select **"Roadmap"** from the layout options
4. Choose which **date field** or **iteration** to use for positioning Issues on the calendar
5. Your Issues appear as bars spanning the calendar

### Navigation Controls

| Action | How to Do It |
|--------|-------------|
| **Scroll through months** | Click and drag left/right on the calendar, or use the scroll bar |
| **Zoom in** (see weeks) | Use the zoom controls at the top right of the Timeline |
| **Zoom out** (see quarters) | Use the zoom controls at the top right of the Timeline |
| **Open an Issue** | Click on any bar to see the Issue details in a side panel |
| **Change a date** | Drag the left or right edge of a bar to adjust start or end dates |
| **Move an Issue** | Drag the entire bar left or right to shift it in time |

### Grouping and Filtering

- **Group by a field:** Click **"Group by"** above the Timeline and select a field (e.g., Category, Crop Type). Issues cluster by group.
- **Filter:** Click **"Filter"** and set conditions (e.g., Category = Equipment) to show only matching Issues.
- **Save the view:** Name your view (click the view tab name to rename it) so you can return to this exact configuration later.

### Tips for Timeline View

- **Issues need dates to appear** — if an Issue doesn't show up, check that it has a date or iteration assigned
- **Bars vs. dots:** If you see dots instead of bars, the Issue has only one date. For bars, you need a start and end date, or use iterations (which provide automatic start/end ranges).
- **Multiple views are helpful** — create one Timeline grouped by crop type and another grouped by category. Switch between them using the view tabs.
- **Drag to reschedule** — the Timeline is interactive. Drag bars to adjust dates directly on the calendar.

---

## Linking Cross-Repository Issues

A single Project can include Issues from multiple repositories — like having one master planning board for the entire farm, even when tasks live in different barns.

### How to Add Issues from Another Repository

1. Open your Project
2. Click **"Add item"** (the "+" at the bottom of the table or board)
3. Type **#** followed by the repository name (e.g., `#equipment-repo`)
4. GitHub will show matching Issues from that repository
5. Click an Issue to add it to your Project

### Requirements

- The repository must belong to **you** or to an **organization** you belong to
- You must have **read access** to the repository
- The Issue must already exist in the other repository — you can't create new Issues from the Project add dialog

### Why This Matters

| Without Cross-Repo Linking | With Cross-Repo Linking |
|---------------------------|------------------------|
| Equipment schedule is separate from crop plan | One roadmap shows both |
| Can't see that tractor service overlaps with planting | Overlap is immediately visible |
| Have to check three different places for the full picture | Everything in one Timeline view |

### Tips

- **Add a Category field** to distinguish which repository an Issue came from (e.g., Crops, Equipment, Livestock)
- **Use grouping** in Timeline view to cluster Issues by repository or category
- **You can remove an Issue from a Project** without deleting it from the repository — it just removes it from this view

---

## Roadmap Evaluation Checklist

After building your roadmap, review it for these common problems. This is where the real planning value lives.

### Scheduling Conflicts

Look for two tasks that need the **same resource at the same time**:

- [ ] Are any two field tasks scheduled for the same week that require the same equipment (tractor, planter, combine)?
- [ ] Are planting dates for different crops too close together for available labor?
- [ ] Does any equipment service overlap with a period when that equipment is needed in the field?

**How to fix:** Drag one task to a different week, or add buffer time between tasks.

### Resource Bottlenecks

Look for periods where **demand exceeds capacity**:

- [ ] Is one person assigned to too many tasks in the same week?
- [ ] Are there multiple equipment repairs all scheduled for the same period?
- [ ] Do supply deliveries and field work compete for the same crew?

**How to fix:** Spread tasks across more weeks, or assign additional resources during peak periods.

### Missing Dependencies

Look for tasks where **Task B can't start until Task A is done**, but Task A isn't scheduled (or is scheduled too late):

- [ ] Is seed ordered far enough in advance of planting? (Delivery takes time.)
- [ ] Is soil testing completed before planting decisions are made?
- [ ] Is equipment serviced before the season when it's needed most?
- [ ] Are there "receive delivery" or "wait for results" tasks between ordering and using?

**How to fix:** Add the missing task as a new Issue, schedule it before the dependent task, and leave buffer time.

### Gaps

Look for periods with **nothing scheduled**:

- [ ] Are there empty weeks where something should be happening?
- [ ] Is there a transition period between seasons that needs planning?
- [ ] Are off-season maintenance or planning tasks accounted for?

**How to fix:** Add Issues for tasks that fill the gap, or confirm the gap is intentional (rest/recovery time).

---

## Key Vocabulary

| Term | Definition | Farm Analogy |
|------|-----------|-------------|
| **Custom field** | An extra column you add to a Project to track specific data (date, dropdown, number) | New column in your farm ledger |
| **Single select field** | A dropdown with options you define | A checklist where you pick one item |
| **Iteration** | A named time block with a start date and duration | A chapter in your farm year |
| **Timeline view** | A visual calendar showing Issues as horizontal bars across weeks and months | Climbing the water tower to see all fields at once |
| **Roadmap** | Another name for the Timeline view — a plan laid out over time | Your season plan on one wall-sized calendar |
| **Cross-repository linking** | Adding Issues from different repositories into one Project | One master board for the whole farm |
| **Scheduling conflict** | Two tasks that need the same resource at the same time | Trying to be in two fields at once |
| **Resource bottleneck** | A period where demand on a person, machine, or supply exceeds availability | One tractor, three jobs, same week |
| **Missing dependency** | A task that must happen before another, but isn't on the schedule | Planting before the seed arrives |

---

## Quick Steps Cheat Sheet

### Add a custom field
"+" button (column headers) > New field > Name it > Pick type > Save

### Create iterations
"+" button > New field > Name it > Iteration type > Set start/duration > Save > Edit field to add more

### Switch to Timeline view
"+" next to view tabs > Roadmap > Choose date field > Done

### Link a cross-repo Issue
Add item (+) > Type # and repo name > Select Issue > Done

### Evaluate your roadmap
Scan for overlapping bars > Check for empty gaps > Verify dependencies are in order > Look for overloaded weeks
