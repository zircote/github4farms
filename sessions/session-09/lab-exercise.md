# Lab Exercise: Advanced Projects & Roadmaps

> **Session 9: Advanced Projects & Roadmaps**
> **Duration:** 55 minutes (Guided: 20 min + Independent: 35 min)
> **Prerequisites:** GitHub account, repository you own, familiarity with Issues (Session 2) and Projects basics (Session 3)

---

## Overview

In this exercise, you'll add custom fields to a GitHub Project, create iterations that represent farm season time blocks, build a Timeline (Roadmap) view that spans 6+ months, link Issues from multiple repositories, and evaluate your roadmap for scheduling conflicts, resource bottlenecks, and missing dependencies.

---

## Part 1: Guided Practice (20 minutes)

**Follow along with the instructor.**

### Step 1: Open or Create a Project

1. Go to your GitHub profile by clicking your **avatar** in the top right, then click **"Your projects"**
2. If you have a Project from Session 3, click to open it
3. If you need a new Project:
   - Click **"New project"**
   - Choose **"Table"** as the starting layout
   - Name it **"My Farm Season Plan"**
   - Click **"Create project"**

**What you should see:** Your Project open in Table view, with any existing Issues listed (or an empty table if new).

### Step 2: Add Issues to Your Project (if starting fresh)

If your Project has fewer than 5 Issues, add some now:

1. Click **"Add item"** at the bottom of the table (the "+" button)
2. Click **"Create new issue"**
3. Select your farm repository
4. Add these Issues one at a time (type the title and press Enter):
   - "Soil testing — north field"
   - "Order corn seed"
   - "Plant corn — north field"
   - "Tractor spring service"
   - "Install irrigation lines"
   - "First harvest — corn"

**What you should see:** At least 6 Issues listed in your Project table.

### Step 3: Add a Date Custom Field

1. In Table view, look at the column headers (Title, Status, etc.)
2. Click the **"+"** button at the far right of the column headers
3. Click **"New field"**
4. Type the name: **"Target Date"**
5. Under "Field type," select **"Date"**
6. Click **"Save"**

**What you should see:** A new "Target Date" column appears in your table.

7. Click in the "Target Date" cell for your first Issue
8. Pick a date from the calendar popup (e.g., March 15 for "Soil testing")
9. Fill in Target Date for at least 4 Issues, spacing them across different months

### Step 4: Add a Dropdown Custom Field

1. Click the **"+"** button again at the far right of the column headers
2. Click **"New field"**
3. Type the name: **"Category"**
4. Under "Field type," select **"Single select"**
5. Add these options (click "Add option" for each):
   - Crops
   - Equipment
   - Livestock
   - Infrastructure
6. Click **"Save"**

**What you should see:** A new "Category" column with a dropdown for each Issue.

7. Click the "Category" cell for each Issue and select the appropriate option
   - "Soil testing" → Crops
   - "Order corn seed" → Crops
   - "Plant corn" → Crops
   - "Tractor spring service" → Equipment
   - "Install irrigation lines" → Infrastructure
   - "First harvest" → Crops

### Step 5: Add a Number Custom Field

1. Click the **"+"** again
2. Click **"New field"**
3. Type the name: **"Acres"**
4. Under "Field type," select **"Number"**
5. Click **"Save"**

**What you should see:** A new "Acres" column for entering numeric values.

6. Fill in the "Acres" field for relevant Issues (e.g., "Plant corn" → 80, "First harvest" → 80)

### Step 6: Create Iterations

1. Click the **"+"** button at the far right of the column headers
2. Click **"New field"**
3. Type the name: **"Season Phase"**
4. Under "Field type," select **"Iteration"**
5. Set the **start date** to the nearest upcoming season start (e.g., March 15)
6. Set the **duration** to 6 weeks
7. Click **"Save"**

Now add more iterations:

8. Click the **"Season Phase"** column header, then click **"Edit field"** (or go to Project Settings > Season Phase)
9. Click **"Add iteration"** and create:
   - **Spring Planting** — starts Mar 15, 6 weeks
   - **Growing Season** — starts May 1, 10 weeks
   - **Harvest** — starts Jul 15, 8 weeks
   - **Fall/Winter Prep** — starts Sep 15, 8 weeks
10. Rename the default first iteration to "Spring Planting" if needed

**What you should see:** A "Season Phase" column with a dropdown showing your iteration names.

11. Assign each Issue to an iteration:
    - "Soil testing" → Spring Planting
    - "Order corn seed" → Spring Planting
    - "Plant corn" → Spring Planting
    - "Tractor spring service" → Spring Planting
    - "Install irrigation lines" → Growing Season
    - "First harvest" → Harvest

### Step 7: Switch to Timeline View

1. Look at the **view tabs** at the top of your Project (you'll see "Table" or your current view name)
2. Click the **"+"** icon next to the view tabs to create a new view
3. Select **"Roadmap"** as the layout
4. GitHub will ask which date field to use — select **"Target Date"** (or "Iteration" if you prefer iteration-based grouping)
5. Your Issues now appear as bars on a horizontal calendar

**What you should see:** A visual timeline spanning several months with your Issues shown as colored bars.

6. Scroll left and right to see different months
7. Try zooming in (to see weeks) and zooming out (to see quarters)
8. Click on any bar to open the Issue details

### Guided Practice Checkpoint

- [ ] I added a Date custom field ("Target Date") and filled in dates for at least 4 Issues
- [ ] I added a Single select custom field ("Category") and assigned categories to all Issues
- [ ] I added a Number custom field ("Acres") and filled in values for relevant Issues
- [ ] I created iterations representing farm season phases
- [ ] I assigned Issues to iterations
- [ ] I switched to Timeline view and can see my Issues as bars on a calendar

**Raise your hand when you've completed the checkpoint.**

---

## Part 2: Independent Practice (35 minutes)

**Choose one of the three scenarios below and build a complete seasonal roadmap.**

### Choose Your Scenario

---

#### Scenario A: Crop Farm Seasonal Plan

**Build a 6-month roadmap covering planting through harvest for multiple crops.**

**Create these Issues** (or similar ones for YOUR crops):

| Issue Title | Category | Target Date | Acres | Season Phase |
|-------------|----------|-------------|-------|-------------|
| Soil test — north field | Crops | Mar 10 | 80 | Spring Planting |
| Soil test — south field | Crops | Mar 12 | 120 | Spring Planting |
| Order corn seed | Crops | Mar 1 | — | Spring Planting |
| Order soybean seed | Crops | Mar 5 | — | Spring Planting |
| Plant corn — north field | Crops | Apr 15 | 80 | Spring Planting |
| Plant soybeans — south field | Crops | May 1 | 120 | Growing Season |
| First fertilizer application | Crops | May 20 | 200 | Growing Season |
| Scout for pests — all fields | Crops | Jun 15 | 200 | Growing Season |
| Second fertilizer application | Crops | Jul 1 | 200 | Growing Season |
| Corn harvest — north field | Crops | Sep 15 | 80 | Harvest |
| Soybean harvest — south field | Crops | Oct 10 | 120 | Harvest |
| Post-harvest soil amendment | Crops | Nov 1 | 200 | Fall/Winter Prep |

**Custom fields to add:**
- **Crop Type** (single select): Corn, Soybeans, Wheat, Alfalfa
- **Target Date** (date): Use the dates above
- **Acres** (number): Field acreage

**Iterations to create:**
- Spring Planting (Mar 1 - Apr 30)
- Growing Season (May 1 - Jul 31)
- Harvest (Aug 1 - Oct 31)
- Fall/Winter Prep (Nov 1 - Dec 31)

**Evaluation task:** After building the Timeline, look for:
- Do any two field tasks overlap that require the same equipment?
- Is seed ordered early enough before planting dates?
- Are there idle weeks where nothing is scheduled? Should something be there?

---

#### Scenario B: Equipment Maintenance Calendar

**Build a 12-month roadmap for all major farm equipment service and inspections.**

**Create these Issues** (or similar ones for YOUR equipment):

| Issue Title | Category | Target Date | Est. Hours | Season Phase |
|-------------|----------|-------------|-----------|-------------|
| Tractor — annual service | Equipment | Feb 15 | 8 | Pre-Season |
| Combine — pre-season inspection | Equipment | Mar 1 | 6 | Pre-Season |
| Irrigation pump — winterization removal | Equipment | Mar 15 | 4 | Pre-Season |
| Planter calibration | Equipment | Apr 1 | 3 | Spring Service |
| Fence line inspection — all pastures | Infrastructure | Apr 15 | 12 | Spring Service |
| Irrigation system — pressure test | Equipment | May 1 | 4 | Spring Service |
| Mower — mid-season blade sharpen | Equipment | Jun 15 | 2 | Mid-Season |
| Tractor — oil change and filter | Equipment | Jul 1 | 3 | Mid-Season |
| Combine — pre-harvest tuning | Equipment | Aug 1 | 6 | Pre-Harvest |
| Grain dryer — annual inspection | Equipment | Aug 15 | 4 | Pre-Harvest |
| Irrigation system — end-of-season drain | Equipment | Oct 15 | 4 | Post-Season |
| All equipment — winterization | Equipment | Nov 15 | 16 | Post-Season |

**Custom fields to add:**
- **Equipment Type** (single select): Tractor, Combine, Irrigation, Planter, Mower, General
- **Target Date** (date): Use the dates above
- **Est. Hours** (number): Estimated labor hours

**Iterations to create:**
- Pre-Season (Feb 1 - Mar 31)
- Spring Service (Apr 1 - May 31)
- Mid-Season (Jun 1 - Jul 31)
- Pre-Harvest (Aug 1 - Sep 30)
- Post-Season (Oct 1 - Dec 31)

**Evaluation task:** After building the Timeline, look for:
- Are any two repairs scheduled for the same week that need the same mechanic?
- Is the combine inspected well BEFORE harvest begins?
- Is there a gap where equipment sits idle and could be serviced?

---

#### Scenario C: Livestock Management Year

**Build a 12-month roadmap covering breeding, health, feeding, and pasture rotation.**

**Create these Issues** (or similar ones for YOUR livestock):

| Issue Title | Category | Target Date | Head Count | Season Phase |
|-------------|----------|-------------|-----------|-------------|
| Annual vet visit — cattle | Livestock | Jan 15 | 50 | Winter Care |
| Order spring mineral supplements | Livestock | Feb 1 | 50 | Winter Care |
| Calving preparation — barn setup | Livestock | Feb 15 | — | Winter Care |
| Calving season begins | Livestock | Mar 1 | 50 | Spring Breeding |
| Pasture rotation — move to east field | Livestock | Apr 1 | 50 | Spring Breeding |
| Breeding season opens | Livestock | May 1 | 50 | Spring Breeding |
| Vaccinations — spring round | Livestock | May 15 | 50 | Summer Grazing |
| Pasture rotation — move to west field | Livestock | Jun 1 | 50 | Summer Grazing |
| Mid-summer parasite treatment | Livestock | Jul 15 | 50 | Summer Grazing |
| Weaning — separate calves | Livestock | Sep 1 | 25 | Fall Management |
| Fall vaccinations | Livestock | Oct 1 | 50 | Fall Management |
| Winter feeding program begins | Livestock | Nov 1 | 50 | Fall Management |

**Custom fields to add:**
- **Animal Group** (single select): Cattle, Calves, Bulls, Breeding Herd
- **Target Date** (date): Use the dates above
- **Head Count** (number): Number of animals involved

**Iterations to create:**
- Winter Care (Jan 1 - Feb 28)
- Spring Breeding (Mar 1 - May 15)
- Summer Grazing (May 16 - Aug 31)
- Fall Management (Sep 1 - Dec 31)

**Evaluation task:** After building the Timeline, look for:
- Does breeding season overlap with any vet visits that might stress animals?
- Is weaning scheduled far enough after calving?
- Are pasture rotations evenly spaced, or do animals stay too long in one field?

---

### Independent Practice Checklist

- [ ] I chose a scenario (A, B, or C)
- [ ] I created at least 6 Issues for my scenario
- [ ] I added 3 custom fields (date, single select, number)
- [ ] I filled in custom field values for all Issues
- [ ] I created at least 3 iterations (time blocks)
- [ ] I assigned all Issues to an iteration
- [ ] I switched to Timeline view and can see the full roadmap
- [ ] I evaluated my roadmap and identified at least one conflict, bottleneck, or missing dependency
- [ ] I fixed the problem (adjusted a date, added a new Issue, or reorganized)

---

## Stretch Challenges

**Finished early? Try one of these:**

1. **Cross-repository linking:** If you have a second repository, add 2-3 Issues from it into your Project. See them appear in the Timeline alongside your other Issues.

2. **Group by category:** In Timeline view, click the **"Group by"** option and select your dropdown field (Category, Crop Type, Equipment Type, or Animal Group). See how the view reorganizes by group.

3. **Filter the view:** Click **"Filter"** in Timeline view and filter by one category (e.g., show only "Equipment" Issues). This creates a focused sub-view.

4. **Add a second view:** Create another view (Table or Board) for the same Project using a different layout. Name it something descriptive like "By Category" or "Status Board."

5. **Build a second scenario:** Pick a different scenario from the ones above and add those Issues to the same Project. Now you have a cross-functional farm roadmap.

---

## Troubleshooting Guide

**If something goes wrong, check here first:**

| Problem | What to Check | How to Fix |
|---------|--------------|------------|
| I don't see the "+" button for new fields | Are you in Table view? | Switch to Table view — the "+" for columns appears only in Table view |
| My dropdown field has no options | Did you add options when creating the field? | Click the field column header > "Edit field" > add options |
| Issues don't appear in Timeline view | Did you assign dates or iterations? | Issues need a date or iteration value to appear on the timeline |
| Timeline shows a very short range | The zoom level is too close | Use the zoom controls to zoom out to see months or quarters |
| I can't find Issues from another repository | Are you typing the repo name correctly? | In "Add item," type `#` then start typing the repository name. The repo must belong to you or your organization |
| Bars on Timeline are just dots, not bars | You only set one date, not a range | To show bars, set both a start date and end date — or use iterations which have built-in start/end |
| "New field" option doesn't appear | You may not have edit access | You must be the Project owner or have write access |
| Iteration dates overlap | Two iterations cover the same period | Edit the field to adjust start dates and durations so they don't overlap |

**Still stuck?** Raise your hand and the instructor will help.

---

## Reflection Questions

After completing the exercise, discuss with your partner:

1. **What did your roadmap reveal that you didn't see before?** Did you spot any conflicts or gaps?
2. **How does a Timeline view compare to your current planning method** (calendar, notebook, spreadsheet)? What's better? What's missing?
3. **Would you use custom fields to track other farm data?** What fields would you add beyond what we practiced today?
4. **How would cross-repository linking help your farm?** Would you connect crops + equipment? Livestock + business?
5. **On a scale of 1-5, how confident do you feel building a roadmap on your own?** What would increase your confidence?

---

## Success Criteria

You have successfully completed this lab if:

- **Minimum:** You added at least one custom field, created at least one iteration, switched to Timeline view, and can see your Issues on the calendar
- **Target:** You built a complete roadmap with 3 custom fields, 3+ iterations, Timeline view spanning 6+ months, and identified at least one conflict or dependency
- **Stretch:** You linked Issues from a second repository, grouped or filtered the Timeline view, or built a second scenario
