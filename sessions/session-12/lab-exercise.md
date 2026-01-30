# Lab Exercise: Capstone & Train-the-Trainer

> **Session 12: Capstone & Train-the-Trainer**
> **Duration:** 100 minutes (Capstone: 60 min + Peer Teaching: 20 min + Showcase: 20 min)
> **Prerequisites:** Sessions 1-11 (GitHub account, repository experience, Issues, Projects, Pull Requests, notifications, templates, Actions, advanced projects, Copilot, Spark/Agents)
> **Theme:** "Putting it all together and teaching others"

---

## Overview

This is the final exercise of the course. You will build a complete farm repository from scratch using every GitHub skill you've learned across twelve sessions. Then you'll practice teaching a GitHub concept to a peer. By the end, you'll have a working farm management system and the confidence to help others get started.

---

## Part 1: Capstone Project (60 minutes)

### Choose Your Scenario

Pick the scenario that best matches your farm, or create your own:

---

#### Scenario A: Diversified Crop Farm

**Farm context:** You manage a multi-crop operation with several fields. You need to track planting schedules, soil testing, harvest planning, equipment prep, crop rotation, and seasonal labor.

**Suggested repository name:** `[your-farm-name]-crop-management`

**Suggested Issues to create:**
1. Spring soil testing schedule for all fields
2. Seed ordering and variety selection for the season
3. Planting schedule by field and crop
4. Mid-season crop scouting plan
5. Harvest logistics and equipment prep
6. (Stretch) Cover crop plan for post-harvest
7. (Stretch) Crop rotation plan for next year

**Suggested labels:** `planting`, `harvest`, `soil-health`, `equipment`, `urgent`, `planning`, `field-north`, `field-south`

**Suggested custom fields:** Priority (High/Medium/Low), Season (Spring/Summer/Fall/Winter), Field Name (text), Estimated Cost (number)

**Issue template idea:** "Seasonal Field Prep" template with sections for Field Name, Tasks Required, Equipment Needed, Target Date, and Notes.

---

#### Scenario B: Equipment Fleet Management

**Farm context:** You manage a fleet of tractors, implements, trucks, and shop tools. You need to track maintenance schedules, inspections, repairs, parts inventory, and seasonal readiness.

**Suggested repository name:** `[your-farm-name]-equipment-tracker`

**Suggested Issues to create:**
1. Spring pre-season inspection for all tractors
2. Combine maintenance before harvest
3. Truck fleet oil change and tire rotation schedule
4. Implement storage and winterization checklist
5. Shop tool inventory and replacement list
6. (Stretch) Parts ordering for upcoming maintenance
7. (Stretch) Equipment upgrade research and budget

**Suggested labels:** `tractor`, `combine`, `truck`, `implement`, `routine-maintenance`, `repair`, `urgent`, `parts-needed`

**Suggested custom fields:** Priority (High/Medium/Low), Equipment Type (single select), Last Service Date (date), Estimated Cost (number)

**Issue template idea:** "Maintenance Work Order" template with sections for Equipment Name/ID, Problem Description, Parts Needed, Assigned To, and Due Date.

---

#### Scenario C: Livestock Operation

**Farm context:** You manage a herd or flock and need to track animal health, feeding schedules, breeding records, veterinary visits, facility maintenance, and regulatory compliance.

**Suggested repository name:** `[your-farm-name]-livestock-management`

**Suggested Issues to create:**
1. Spring vaccination and deworming schedule
2. Breeding season planning and record keeping
3. Pasture rotation schedule for the season
4. Veterinary visit planning and follow-ups
5. Facility maintenance --- fencing, water systems, shelters
6. (Stretch) Feed inventory and ordering schedule
7. (Stretch) Regulatory compliance checklist (health certificates, inspections)

**Suggested labels:** `animal-health`, `breeding`, `pasture`, `facility`, `vet-visit`, `urgent`, `feed`, `compliance`

**Suggested custom fields:** Priority (High/Medium/Low), Animal Group (single select), Veterinarian Required (checkbox/single select), Target Date (date)

**Issue template idea:** "Animal Health Task" template with sections for Animal Group, Task Description, Supplies/Medications Needed, Veterinarian Required (yes/no), and Due Date.

---

### Capstone Requirements Checklist

Use this checklist to track your progress. Check each box as you complete it.

#### Repository Setup
- [ ] Created a new repository with a descriptive name
- [ ] Added a README that describes the farm operation (2-3 sentences minimum)
- [ ] Repository description is filled in (the short line under the repo name)

#### Issues (5 minimum)
- [ ] Created at least 5 Issues with descriptive titles
- [ ] Each Issue has a detailed description (not just a title)
- [ ] Issues use checkboxes (`- [ ]`) where appropriate
- [ ] At least 1 Issue was drafted using GitHub Copilot, then evaluated and edited

#### Labels (4 minimum)
- [ ] Created at least 4 custom labels relevant to your operation
- [ ] Applied labels to your Issues (each Issue should have at least 1 label)

#### Issue Template (1 minimum)
- [ ] Created at least 1 Issue template for a recurring task type
- [ ] Template includes relevant sections and placeholder text
- [ ] Template works when you click "New issue" (test it)

#### Project Board
- [ ] Created a Project and linked it to your repository
- [ ] Board view is set up with columns (e.g., To Do, In Progress, Done)
- [ ] Issues are added to the Project board

#### Custom Fields (2 minimum)
- [ ] Added at least 2 custom fields to your Project (e.g., Priority, Season, Cost)
- [ ] Custom fields are filled in for at least 3 Issues

#### Iterations
- [ ] Set up iterations (e.g., weekly or monthly sprints)
- [ ] Assigned at least 3 Issues to specific iterations

#### Timeline View
- [ ] Created a Timeline (Roadmap) view on your Project
- [ ] Issues appear on the timeline with dates
- [ ] Timeline shows a realistic schedule for your farm tasks

#### Copilot-Drafted Issue
- [ ] Used Copilot to generate a draft for at least 1 Issue
- [ ] Evaluated the draft for accuracy, completeness, and relevance
- [ ] Edited the draft to fit your specific farm operation
- [ ] Can describe what you changed and why

---

### Capstone Scoring Rubric

| Criterion | Excellent (4) | Good (3) | Developing (2) | Beginning (1) | Your Score |
|-----------|--------------|----------|----------------|---------------|-----------|
| **Repository Setup** | Descriptive name, detailed README, clear description | Name and README present, basic description | Repository created, minimal README | Repository exists but incomplete | |
| **Issues (5+)** | 5+ detailed Issues, all labeled, checkboxes used, well-written descriptions | 5 Issues with adequate detail, most labeled | 3-4 Issues created, some labels | Fewer than 3 Issues | |
| **Project Board** | Board + Timeline views, custom fields filled, iterations assigned | Board view with custom fields, some iterations | Board created with default settings | No Project board | |
| **Templates** | Template works, matches farm needs, includes helpful sections | Template created with most fields populated | Basic template exists | No template | |
| **Copilot Use** | Drafted, evaluated, and edited with clear improvements documented | Drafted and edited | Drafted only, minimal edits | No Copilot use | |
| **Overall Coherence** | All pieces work together as a realistic farm management system | Most pieces connected and logical | Pieces created but not well integrated | Disconnected, placeholder content | |

**Scoring:**
- **22-24:** Outstanding --- ready to use this system on your real farm
- **18-21:** Strong --- a solid foundation with minor gaps
- **14-17:** Developing --- key pieces are in place, needs more detail
- **Below 14:** Keep building --- review the checklist and fill in missing pieces

**My total score:** _____ / 24

---

## Part 2: Peer Teaching Exercise (20 minutes)

### Your Assignment

You will teach ONE GitHub concept to a partner using the 4-step method.

### Step 1: Choose Your Topic (1 minute)

Pick the skill you feel MOST confident about:

- [ ] How to create an Issue with labels
- [ ] How to set up a Project board
- [ ] How to create an Issue template
- [ ] How to use Copilot to draft an Issue
- [ ] How to add custom fields to a Project
- [ ] How to set up iterations on a Project
- [ ] How to use the Timeline view
- [ ] Other: _________________________________

### Step 2: Prepare Your Mini-Lesson (5 minutes)

Use this framework to plan:

**What is the skill?** (One sentence)

_____________________________________________________________

**Why does it matter for a farm?** (One sentence)

_____________________________________________________________

**How do you do it?** (3-5 steps)

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________
4. _____________________________________________________________
5. _____________________________________________________________

**What's one common mistake or tip?**

_____________________________________________________________

### Step 3: Teach Your Partner (5 minutes)

Follow the 4-step method:

| Step | What You Do | Check |
|------|------------|-------|
| **SHOW** | Demonstrate the skill on your screen while your partner watches | [ ] |
| **EXPLAIN** | Talk through WHY each step matters, not just what to click | [ ] |
| **LET THEM TRY** | Have your partner do it on their own screen | [ ] |
| **GIVE FEEDBACK** | Tell them what went well and one thing to adjust | [ ] |

### Step 4: Switch Roles (5 minutes)

Now your partner teaches you their topic using the same 4-step method.

### Step 5: Debrief Together (4 minutes)

Discuss with your partner:

1. What was the hardest part about teaching?
2. Did explaining the skill help you understand it better?
3. What question did your partner ask that surprised you?
4. Would you feel comfortable teaching this to someone outside this class?

**Give your partner feedback:**

- One thing they did well as a teacher: _________________________________
- One suggestion for next time: _________________________________

---

## Part 3: Capstone Showcase (20 minutes)

### Showcase Guidelines

If you volunteer (or are selected) to present:

1. **Show your repository and README** (30 seconds) --- What's your farm? What does this repo manage?
2. **Show your Project board with Timeline view** (30 seconds) --- How did you organize your work?
3. **Show your Copilot-drafted Issue** (30 seconds) --- What did Copilot suggest? What did you change?
4. **What would you add next?** (30 seconds) --- If you had another hour, what would you build?

**Total: 2 minutes per presenter**

### Audience Role

While watching presentations:
- Note one idea from each presenter that you'd like to try
- Think about how their approach differs from yours
- Be ready to share what impressed you

**Ideas I want to try from the showcase:**

1. _____________________________________________________________
2. _____________________________________________________________
3. _____________________________________________________________

---

## Reflection Questions

After completing the capstone and peer teaching, answer these questions:

1. **Which part of the capstone was easiest for you?** Which skill felt most natural?

2. **Which part was hardest?** What would you want to practice more?

3. **How did teaching a concept change your understanding of it?**

4. **What's the first real task you'll track in GitHub after this course ends?**

5. **If a neighboring farmer asked you "What's GitHub and why should I care?" --- what would you say in 2-3 sentences?**

6. **On a scale of 1-5, how confident do you feel using GitHub independently?**
   - 1 = I need a lot more practice
   - 3 = I can do the basics on my own
   - 5 = I could set up a new project and teach someone else

7. **What's one thing you wish had been covered differently in this 12-session course?**

---

## Stretch Challenges

**Finished early? Try one of these:**

1. **Add a GitHub Action:** Create a simple workflow (even just a label bot or welcome message) for your capstone repository using what you learned in Sessions 7-8.

2. **Create a second Issue template:** Build a template for a different type of recurring task on your farm.

3. **Cross-reference Issues:** Link related Issues together using `#issue-number` references in descriptions or comments.

4. **Teach a second topic:** Prepare and deliver a second mini-lesson to a different partner.

5. **Write a "Getting Started" guide:** In your README, add a section that explains how a new team member would use this repository. Think of it as onboarding instructions for a new farmhand.

6. **Plan your next season:** Create a new iteration set for the upcoming season and add placeholder Issues for major tasks.

---

## Troubleshooting Guide

| Problem | What to Check | How to Fix |
|---------|--------------|------------|
| I can't create a new repository | Check that you're signed in to GitHub | Sign in at github.com, then click **+** > **New repository** |
| My Issues don't appear on the Project board | Issues must be added to the Project | Open the Project, click **+ Add item**, search for your Issues |
| I can't find where to create an Issue template | Templates are in Settings | Go to **Settings** > **General** > scroll to **Features** > **Set up templates** |
| Custom fields aren't showing on my board | Fields need to be added to the Project | In your Project, click **+** next to existing column headers or go to Settings |
| Timeline view shows no dates | Issues need start/end dates set | In the Project, set date fields for each Issue in the table or board view |
| Copilot isn't available | Your account may need Copilot enabled | Check **Settings** > **Copilot** or ask the instructor |
| My iteration doesn't show Issues | Issues must be assigned to the iteration | In the Project board, set the Iteration field for each Issue |
| I'm running out of time | Focus on the requirements checklist | Prioritize: Issues first, then Project board, then template, then Copilot |

**Still stuck?** Check your Capstone Guide handout or raise your hand.

---

## Success Criteria

You have successfully completed this capstone if:

- **Minimum:** You created a repository with 5+ Issues, a Project board, and at least one Copilot-drafted Issue, and you participated in peer teaching
- **Target:** You also created custom fields, iterations, a Timeline view, and an Issue template, and you taught a concept using the 4-step method
- **Stretch:** You scored 22+ on the rubric, taught multiple topics, added a GitHub Action or extra templates, and volunteered for the showcase
