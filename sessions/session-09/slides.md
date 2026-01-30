# Session 9: Advanced Projects & Roadmaps

## Slide Deck

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Analyze / Evaluate
> **Prerequisites:** Sessions 1-8 (GitHub account, repositories, Issues, Projects basics, Pull Requests, notifications, templates, YAML, Actions)
> **Format:** 24pt+ headers, 18pt+ body text, high-contrast, descriptive alt text on all images

---

### Slide 1 — Title

**Advanced Projects & Roadmaps**
*Seeing Your Whole Season at a Glance*

Session 9 of 12 — GitHub Training for Farmers

---

### Slide 2 — Welcome Back

**Welcome to Session 9!**

So far you've learned to:
- Navigate repositories (Session 1)
- Track tasks with Issues (Session 2)
- Organize with Projects (Session 3)
- Collaborate with Pull Requests (Session 4)
- Stay connected with notifications (Session 5)
- Build templates for reusable tasks (Session 6)
- Understand triggers and YAML basics (Session 7)
- Automate farm tasks with workflows (Session 8)

Today you'll build a **seasonal roadmap** — a bird's-eye view of your entire farm year on a single screen.

---

### Slide 3 — Why This Matters for YOUR Farm

**Quick Question:**

How do you currently see your whole farm season at once?

- A wall calendar with sticky notes?
- A spreadsheet with color-coded rows?
- A planner book you flip through month by month?
- Keeping it all in your head?

*What if you could see every planting date, harvest window, equipment service, and livestock milestone on one screen — and move things around when weather or markets change?*

> Instructor note: Let 3-4 learners answer. "Today we're going from looking at one task at a time to seeing the full picture — like climbing the water tower to see all your fields at once."

---

### Slide 4 — From Board View to Roadmap View

**In Session 3, you learned:**

- **Board view** — a whiteboard with columns (To Do, In Progress, Done)
- **Table view** — a spreadsheet-like list of your Issues

Those are great for daily work. But they don't show you **when** things happen across the season.

**Today we're adding:**
- **Custom fields** — extra details like crop type, field name, planting date, expected yield
- **Iterations** — time blocks that divide your season (planting window, growing period, harvest weeks)
- **Timeline view** — a visual calendar that stretches across months, showing when everything starts and ends

This is the difference between a to-do list and a **seasonal plan**.

---

### Slide 5 — What Are Custom Fields?

**Custom Fields = Extra Columns on Your Farm Ledger**

In a paper ledger, you might have columns for:
- Date planted
- Crop type
- Field name
- Expected yield per acre

Custom fields add these same columns to your GitHub Project. Every Issue in the Project can have these extra details filled in.

**Three types of custom fields we'll use today:**

| Field Type | What It Stores | Farm Example |
|------------|---------------|--------------|
| **Date** | A calendar date | Planting date, harvest date |
| **Single select (dropdown)** | One choice from a list | Crop type, field name, priority |
| **Number** | A numeric value | Expected yield, acres, head count |

---

### Slide 6 — Adding Custom Fields Step-by-Step

**How to add a custom field:**

1. Open your Project
2. In **Table view**, click the **"+"** button at the far right of the column headers
3. Click **"New field"**
4. Type a name (e.g., "Crop Type")
5. Choose the field type (Text, Number, Date, Single select, or Iteration)
6. For **Single select**: add your options (e.g., Corn, Soybeans, Wheat, Alfalfa)
7. Click **"Save"**

The new column appears in your Table view. You can fill in values for each Issue.

**Think of it like adding a new column to a paper ledger — once the column exists, you fill it in for every row.**

> Instructor note: Show this on the projector. Create a "Crop Type" single select field with 4-5 crop options during the demo.

---

### Slide 7 — What Are Iterations?

**Iterations = Time Blocks for Your Season**

On a farm, you think in seasons and windows:
- **Planting window:** March 15 - April 30
- **Growing period:** May 1 - August 15
- **Harvest window:** August 16 - October 31
- **Winter prep:** November 1 - December 15

Iterations divide your Project into these same time blocks. Each Issue gets assigned to an iteration — telling you not just WHAT to do, but WHEN to do it.

**Think of iterations like chapters in your farm year. Each chapter has a start date, an end date, and a set of tasks that belong to it.**

---

### Slide 8 — Setting Up Iterations

**How to create iterations:**

1. In your Project, click **"+"** to add a new field
2. Choose **"Iteration"** as the field type
3. Name it (e.g., "Season Phase")
4. Set the **start date** and **duration** for the first iteration
5. Click **"Add iteration"** to create more time blocks
6. Customize each iteration's name, start date, and duration

**Example setup:**

| Iteration Name | Start Date | Duration |
|---------------|------------|----------|
| Spring Planting | Mar 15 | 6 weeks |
| Early Growing | May 1 | 8 weeks |
| Mid-Season | Jul 1 | 6 weeks |
| Harvest | Aug 15 | 10 weeks |
| Winter Prep | Nov 1 | 6 weeks |

Now you can assign any Issue to one of these time blocks.

---

### Slide 9 — The Timeline View

**Timeline View = Your Season at a Glance**

The Timeline view (sometimes called Roadmap view) shows your Issues as **bars on a calendar** — stretching across weeks and months.

**What you see:**
- A horizontal calendar spanning 6+ months
- Each Issue appears as a colored bar
- The bar starts on the start date and ends on the end date
- Issues in the same iteration cluster together
- Overlapping tasks are easy to spot
- Gaps — periods with nothing planned — jump out immediately

**Think of it like a wall-sized planting calendar where every task is a sticky note stretched across the weeks it covers.**

---

### Slide 10 — Switching to Timeline View

**How to open Timeline view:**

1. Open your Project
2. Click the **view tabs** at the top (you'll see "Board" or "Table")
3. Click **"New view"** (the "+" icon next to the tabs)
4. Select **"Roadmap"** from the layout options
5. Choose which **Date field** to use for start and end (or use Iteration)
6. Your Issues appear as bars on the calendar

**Navigation:**
- Scroll left/right to move through months
- Zoom in/out using the controls to see weeks or quarters
- Click any bar to open the Issue details
- Drag bars to change dates

> Instructor note: This is the "wow moment" for many learners. Show a pre-built timeline with 15-20 Issues spanning 6 months so the visual impact is clear.

---

### Slide 11 — Linking Issues from Multiple Repositories

**One Project, Many Barns**

Your farm isn't just one thing. You might have:
- A **crops** repository for field work
- An **equipment** repository for maintenance
- A **livestock** repository for animal management
- A **business** repository for finances and permits

A GitHub Project can pull Issues from **all of these repositories** into one view. This is like having one master planning board for the whole farm, even though tasks are organized in different barns.

**How to add Issues from another repository:**

1. Open your Project
2. Click **"Add item"** (the "+" at the bottom of the table or board)
3. Type **#** and then the repository name (e.g., `#equipment`)
4. GitHub will show Issues from that repository
5. Click the Issue to add it to your Project

Now your seasonal roadmap shows crops, equipment, AND livestock all in one timeline.

---

### Slide 12 — Why Cross-Repository Linking Matters

**Seeing the connections:**

Without cross-repo linking:
- Your equipment maintenance schedule is in one place
- Your planting schedule is in another
- You don't see that tractor service is due the same week as spring planting

With cross-repo linking:
- One Project shows everything
- You spot the conflict: tractor service overlaps with planting week
- You reschedule service to the week before planting
- No surprises, no downtime during your busiest week

**This is the power of a roadmap — it shows you what you'd otherwise miss.**

---

### Slide 13 — Evaluating Your Roadmap

**Building the roadmap is step one. Evaluating it is where the real value lives.**

Three things to look for:

**1. Scheduling Conflicts**
- Two tasks that need the same equipment at the same time
- Planting and harvesting windows that overlap for different fields
- Multiple high-effort tasks in the same week

**2. Resource Bottlenecks**
- One person assigned to too many tasks in the same period
- Equipment needed in two places at once
- Supply orders that need to arrive before a planting window opens

**3. Missing Dependencies**
- Soil testing needs to happen BEFORE planting, not during
- Equipment service needs to happen BEFORE the busy season
- Seed orders need lead time — did you plan for that?

---

### Slide 14 — Evaluating: Farm Examples

**Example conflicts to spot on a roadmap:**

| What You See | The Problem | The Fix |
|-------------|-------------|---------|
| Tractor service bar overlaps spring planting bar | Tractor is in the shop when you need it in the field | Move service to 2 weeks before planting |
| Corn planting and soybean planting start the same week | Not enough labor/equipment for both at once | Stagger: corn Week 1, soybeans Week 3 |
| Harvest bar starts before growing period ends | Harvest scheduled too early | Move harvest start date back 2 weeks |
| No bar between "Order seed" and "Plant corn" | Missing dependency — seed delivery takes 2 weeks | Add a "Receive seed delivery" task in between |
| Three equipment repairs all in the same week | Bottleneck — mechanic can't do three at once | Spread repairs across three different weeks |

> Instructor note: Walk through each row. Ask learners: "Has anyone experienced something like this on their farm? Where you realized two things needed the same resource at the same time?"

---

### Slide 15 — Live Demo: Building a Seasonal Farm Roadmap

**Watch me build a complete seasonal roadmap from scratch.**

I'm going to:
1. Open a Project with several farm Issues already created
2. Add custom fields: Crop Type (dropdown), Planting Date (date), Expected Yield (number)
3. Create iterations for the farm season (Spring Planting, Growing, Harvest, Winter Prep)
4. Assign Issues to iterations and fill in custom fields
5. Switch to Timeline view and see the whole season
6. Add an Issue from a different repository
7. Spot a scheduling conflict and fix it by dragging a bar

**Just watch for now — you'll build your own next.**

> Instructor note: Have a demo Project pre-loaded with 10-15 Issues (mix of crops, equipment, livestock tasks). Pre-create the second repository with 3-4 Issues ready to link. The demo should take about 15 minutes. Go slowly on the Timeline view — let the visual impact land.

---

### Slide 16 — Guided Practice Introduction

**Your turn! Follow along with me.**

We'll work through this together, step by step:
1. Open your farm Project (from Session 3) — or create a new one
2. Add custom fields: a date field, a dropdown field, and a number field
3. Create iterations for your farm season
4. Switch to Timeline view
5. See your Issues on the calendar

**Open your lab exercise handout to Part 1.**

If you get stuck:
1. Check the quick-reference guide
2. Ask your partner
3. Raise your hand

**Nothing you do here is permanent. You can always change fields, move dates, or delete what you don't need.**

> Instructor note: Pair learners. Distribute lab exercise and advanced projects quick-reference guide handouts. Move through steps slowly — wait for all hands down before proceeding.

---

### Slide 17 — BREAK (15 Minutes)

**Take 15 minutes.**

When we come back, you'll build a complete seasonal roadmap for your farm.

Think about which scenario you want to try:
- **Crops:** A full crop season plan — planting to harvest
- **Equipment:** A year-round equipment maintenance calendar
- **Livestock:** A livestock management plan for the year

---

### Slide 18 — Independent Practice

**Your challenge: Build a complete seasonal roadmap.**

Choose your scenario from the lab exercise:
- **Option A:** Crop Farm Seasonal Plan — planting windows, growing periods, harvest weeks for multiple crops
- **Option B:** Equipment Maintenance Calendar — service schedules, inspections, seasonal prep across 12 months
- **Option C:** Livestock Management Year — breeding, veterinary, feeding cycles, pasture rotation

For your roadmap:
1. Create at least **6 Issues** for your scenario
2. Add **3 custom fields** (date, dropdown, number)
3. Set up **at least 3 iterations** (time blocks)
4. Assign Issues to iterations and fill in custom field values
5. Switch to **Timeline view** and review the visual
6. **Evaluate** your roadmap: find at least one conflict, bottleneck, or missing dependency
7. Fix what you found by adjusting dates or adding a new Issue

**Stretch challenge:** Add Issues from a second repository into your Project.

---

### Slide 19 — Evaluation Practice

**As you build your roadmap, look for these problems:**

Use this checklist while reviewing your Timeline view:

- [ ] Are any two high-effort tasks scheduled for the same week?
- [ ] Does any task depend on another task that hasn't been scheduled yet?
- [ ] Is there a period with no tasks? Should there be something there?
- [ ] Is any single person or piece of equipment over-committed?
- [ ] Are there enough buffer weeks between dependent tasks?

**Write down what you find. We'll share discoveries as a group.**

---

### Slide 20 — Group Share: Roadmap Discoveries

**What did you find when you evaluated your roadmap?**

- Did anyone spot a scheduling conflict?
- Did anyone find a missing dependency?
- Did anyone discover a bottleneck they hadn't noticed before?

*Seeing these problems on a screen is exactly why roadmaps matter. You find the issues in January — not in the middle of planting season.*

> Instructor note: Take 3-4 responses. Celebrate discoveries. "Finding a conflict now, before the season starts, is worth more than any tool. The roadmap just made it visible."

---

### Slide 21 — Key Vocabulary Review

**New terms from today:**

- **Custom field** — An extra column you add to a Project (date, dropdown, or number) to track farm-specific details
- **Single select field** — A dropdown with predefined options (e.g., crop types: Corn, Soybeans, Wheat)
- **Iteration** — A named time block in a Project with a start date and duration (e.g., "Spring Planting: Mar 15 - Apr 30")
- **Timeline view (Roadmap)** — A visual calendar that shows Issues as horizontal bars spanning their start and end dates
- **Cross-repository linking** — Adding Issues from different repositories into a single Project for a unified view
- **Scheduling conflict** — Two tasks that need the same resource at the same time
- **Resource bottleneck** — A period where demand on a person, machine, or supply exceeds availability
- **Missing dependency** — A task that must be completed before another can start, but isn't on the schedule

---

### Slide 22 — Reflection

**Think about your farm:**

- How would a seasonal roadmap change the way you plan your year?
- What conflicts or bottlenecks do you already know about — but haven't had a way to visualize?
- Would linking Issues from different areas (crops, equipment, livestock) help you see the full picture?

**Turn to your partner and share your answers. (3 minutes)**

> Instructor note: Walk around and listen. Note which use cases resonate most — this informs future sessions.

---

### Slide 23 — What's Next

**Session 10: Copilot for Farm Communication**

You'll learn to use GitHub Copilot to help write Issue descriptions, improve documentation, and draft communication — like having a farmhand who's also great with paperwork.

**Optional between-session practice:**
- Add more Issues to your seasonal roadmap
- Try grouping your Timeline view by different fields (crop type, field name)
- Experiment with dragging bars on the Timeline to adjust dates
- Create a second Project for a different area of your farm

---

### Slide 24 — Feedback Survey

**Please fill out the 2-minute survey before you leave.**

---

**Thank you!**

You now have a bird's-eye view of your farm season. Every planting date, harvest window, service appointment, and milestone — all on one screen. When plans change (and they always do), you can adjust the roadmap instead of rewriting your calendar.

---

## UDL Implementation Notes

### Representation (3+ modes)
1. **Visual:** Projected slides with annotated screenshots of custom fields, iterations setup, and Timeline view spanning multiple months
2. **Verbal:** Instructor narration using "water tower view," "farm ledger columns," and "chapters of your farm year" analogies throughout
3. **Written:** Printed advanced projects quick-reference guide with step-by-step instructions and field type cheat sheet (take-home reference)
4. **Tabular:** Evaluation examples table, iteration setup table, and custom fields table provide structured reference for detail-oriented learners
5. **Spatial/Calendar:** Timeline view itself serves as a spatial representation — learners interact with a visual calendar, reinforcing time-based planning concepts through direct manipulation

### Engagement (learner choice)
- **Three scenario options** in lab exercise (crops, equipment, livestock) — learners choose based on their farm operation
- **Customizable fields and iterations** — learners define their own crop types, field names, time blocks, and yield targets
- **"Why This Matters for YOUR Farm"** opening with group discussion of current season-planning methods
- **Evaluation checklist** gives learners a detective-style framework to find problems in their own roadmaps
- **Stretch challenges** for early finishers (cross-repository linking, grouping/filtering timeline, adding more Issues)
- **Group share** after independent practice validates individual discoveries through peer learning

### Action & Expression (multi-method assessment)
- **L1 (Reaction):** Paper feedback survey
- **L2 (Observation):** 5-skill checklist (add custom field, create iteration, build Timeline view, link cross-repo Issues, evaluate roadmap for conflicts)
- **Hands-on product:** Learners produce a complete seasonal roadmap with custom fields, iterations, Timeline view, and at least one identified conflict or dependency
- **Verbal reflection:** Partner discussion on "How would a roadmap change your planning?"
- **Written evaluation:** Learners document at least one scheduling conflict, bottleneck, or missing dependency they discovered
- **Group presentation:** Volunteer learners share roadmap discoveries with the class, demonstrating Evaluate-level Bloom's skills
