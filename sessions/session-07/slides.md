# Session 7: Introduction to GitHub Actions

## Slide Deck

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Analyze / Evaluate
> **Prerequisites:** Sessions 1-6 (GitHub account, repositories, Issues, Projects, Pull Requests, notifications, templates)
> **Theme:** "Automatic farm helpers that work while you sleep"
> **Format:** 24pt+ headers, 18pt+ body text, high-contrast, descriptive alt text on all images
> **Note:** YAML is read-only in this session. Farmers view but do not write YAML.

---

### Slide 1 --- Title

**Introduction to GitHub Actions**
*Automatic Farm Helpers That Work While You Sleep*

Session 7 of 12 --- GitHub Training for Farmers

---

### Slide 2 --- Welcome Back

**Welcome to Session 7!**

So far you've learned to:
- Navigate repositories (Session 1)
- Track tasks with Issues (Session 2)
- Organize with Projects (Session 3)
- Collaborate with Pull Requests (Session 4)
- Stay connected with notifications (Session 5)
- Build reusable templates (Session 6)

Today you'll learn about **GitHub Actions** --- automatic helpers that do tasks for you, on a schedule or when something happens.

---

### Slide 3 --- Why This Matters for YOUR Farm

**Quick Question:**

Think about the repetitive tasks on your farm that happen on a schedule or when something changes:

- Do you check equipment every Monday morning?
- Do you need a reminder when a vet visit is overdue?
- Should the team be notified when a new seasonal task is added?
- Do you wish someone would nag about overdue maintenance?

*How much time do you spend just remembering to do these things --- or reminding others?*

> Instructor note: Let 2-3 learners answer. "What if GitHub could handle those reminders and routine tasks automatically --- even while you're sleeping?"

---

### Slide 4 --- The Problem

**Some tasks need to happen automatically.**

- You forget to send the weekly equipment check reminder
- Nobody notices an Issue has been open for 2 weeks
- New team members don't get a welcome message
- Seasonal tasks don't get created until someone remembers
- You're the bottleneck because everything depends on you remembering

**What if you could hire a helper who never forgets, never sleeps, and follows your instructions exactly?**

---

### Slide 5 --- What Are GitHub Actions?

**GitHub Actions = Automatic Farm Helpers**

Think of GitHub Actions as a **hired hand who follows written instructions**:

- You write down the instructions once (a **workflow**)
- You tell the helper when to start working (a **trigger**)
- The helper does the tasks in order (the **steps**)
- The helper reports back whether the work got done (the **status**)

**The helper works 24/7. It never forgets. It never calls in sick.**

Just like posting a list of instructions on the barn door for a farmhand: "Every Monday at 6 AM, check these five pieces of equipment and report back."

---

### Slide 6 --- Three Ways to Start an Automatic Helper

**Trigger Types --- What Tells the Helper to Start Working?**

| Trigger Type | Farm Analogy | Example |
|-------------|-------------|---------|
| **Schedule** | Alarm clock --- goes off at a set time | "Every Monday at 8 AM, create the weekly equipment check Issue" |
| **Event** | Motion-sensor light --- reacts when something happens | "When a new Issue is created, add a welcome comment" |
| **Manual** | Push a button --- you decide when | "I click a button to run the end-of-season report" |

**Schedule** = alarm clock that rings on a timer
**Event** = motion-sensor light that turns on when something happens
**Manual** = you push a button when you're ready

---

### Slide 7 --- Schedule Triggers: The Alarm Clock

**Schedule = The helper starts at a set time, automatically.**

Examples:
- Every Monday at 8 AM --- create a weekly equipment checklist Issue
- First of every month --- remind the team about monthly safety inspection
- Every Friday at 5 PM --- post a summary of open Issues

**Farm analogy:** Like setting your alarm clock to feed the chickens at 6 AM. You set it once, and it goes off every day whether you remember or not.

**Technical name:** GitHub uses something called "cron" to set schedules. You don't need to memorize this --- just know that schedules can be set to any day, time, or interval.

---

### Slide 8 --- Event Triggers: The Motion-Sensor Light

**Event = The helper starts when something specific happens in your repository.**

Examples:
- When someone creates a new Issue --- automatically add a "needs review" label
- When a Pull Request is opened --- notify the team lead
- When an Issue is labeled "urgent" --- post a comment with emergency contacts

**Farm analogy:** Like a motion-sensor light in the barn. You don't flip a switch --- the light turns on automatically when someone walks in. The "event" (motion) triggers the "action" (light turns on).

---

### Slide 9 --- Manual Triggers: Push a Button

**Manual = You decide when to run the helper by clicking a button.**

Examples:
- Run a quarterly inventory check when you're ready
- Generate a seasonal planning report on demand
- Create a batch of Issues for spring planting tasks

**Farm analogy:** Like a button on the wall that starts the grain auger. The system is ready to go, but it only runs when you push the button.

---

### Slide 10 --- Viewing the Actions Tab

**Where do you see your automatic helpers at work?**

Every repository has an **Actions** tab (next to Issues, Pull Requests, etc.).

Click the **Actions** tab to see:
- A list of **workflow runs** --- each time a helper did its work
- The **status** of each run:
  - Green checkmark = **Success** --- the helper finished the job correctly
  - Red X = **Failure** --- something went wrong, the helper couldn't finish
  - Yellow dot = **In progress** --- the helper is working right now

**Farm analogy:** Think of the Actions tab as the **job board in the farm office**. Each completed job has a green check (done right) or a red X (problem). Jobs in progress have a yellow dot (working on it).

---

### Slide 11 --- Reading a Workflow Status

**How to Tell If the Helper Did Its Job**

When you click on a workflow run, you see:
- **Which workflow** ran (the name of the instructions)
- **When** it ran (date and time)
- **What triggered** it (schedule, event, or manual)
- **How long** it took
- **The result** --- success or failure

**You don't need to understand the technical details.** Just look for:
- Green checkmark = All good. The automatic task completed.
- Red X = Something went wrong. Ask for help or check the error message.
- Yellow dot = Still working. Check back in a few minutes.

---

### Slide 12 --- Reading a YAML File (Read-Only)

**The workflow instructions are written in a file called YAML.**

YAML is like a **recipe card** for your automatic helper. Today, you'll learn to **read** a YAML file, not write one. Think of it as reading a recipe someone else wrote --- you want to understand what it does, not write your own recipe yet.

Here's what a simple workflow looks like:

```yaml
name: Weekly Equipment Reminder        # Recipe name
on:                                     # When to start
  schedule:
    - cron: '0 8 * * MON'              # Every Monday at 8 AM
jobs:                                   # The work to do
  send-reminder:                        # Job name
    runs-on: ubuntu-latest
    steps:                              # Steps in order
      - name: Create reminder Issue
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Weekly Equipment Check',
              body: 'Time for the weekly equipment inspection.'
            })
```

**Don't worry about every line.** Focus on the parts we'll highlight next.

---

### Slide 13 --- The Recipe Card: Key Parts of a Workflow

**Every workflow has these key parts, just like a recipe card:**

| Recipe Card Part | YAML Part | What It Means |
|-----------------|-----------|---------------|
| **Recipe name** | `name:` | What this workflow is called |
| **When to cook** | `on:` | The trigger --- what starts the workflow (schedule, event, or manual) |
| **Dish to prepare** | `jobs:` and job name | The job --- a group of steps to complete |
| **Step-by-step instructions** | `steps:` | Each individual task the helper performs, in order |

**Reading a workflow is like reading a recipe:**
1. What's it called? (name)
2. When do we make it? (trigger)
3. What are we making? (job)
4. What are the steps? (steps)

---

### Slide 14 --- Example Workflow 1: Weekly Equipment Check Reminder

**Name:** Weekly Equipment Reminder
**Trigger:** Schedule --- every Monday at 8 AM
**Job:** Create an Issue reminding the team to do the weekly equipment inspection
**Steps:**
1. Create a new Issue titled "Weekly Equipment Check"
2. Add a checklist of equipment to inspect

**Farm analogy:** Like setting an alarm clock that posts a note on the barn door every Monday morning: "Time to check the equipment."

---

### Slide 15 --- Example Workflow 2: Overdue Issue Alert

**Name:** Overdue Issue Notification
**Trigger:** Event --- runs on a schedule, checks for Issues older than 14 days
**Job:** Add a comment to any Issue that's been open too long
**Steps:**
1. Search for Issues open more than 14 days
2. Add a comment: "This Issue has been open for over 2 weeks. Does it still need attention?"

**Farm analogy:** Like a calendar reminder that nudges you: "That fence repair has been on the list for two weeks --- time to deal with it."

---

### Slide 16 --- Example Workflow 3: Welcome New Team Members

**Name:** Welcome Message
**Trigger:** Event --- when a new Issue is created by a first-time contributor
**Job:** Post an automatic welcome comment
**Steps:**
1. Check if the Issue author is new
2. Post a comment: "Welcome to the farm team! Here's how we work together..."

**Farm analogy:** Like a welcome packet you leave on the desk for a new hire --- except it appears automatically the moment they start.

---

### Slide 17 --- Live Demo: Viewing a Pre-Built Workflow

**Watch me explore a workflow in the Actions tab.**

I'm going to:
1. Go to the demo repository's **Actions** tab
2. Look at the list of workflow runs --- green, red, and yellow statuses
3. Click on a completed workflow run to see what happened
4. Open the workflow YAML file and identify: name, trigger, job, steps

**Just watch --- you'll explore these yourself next.**

> Instructor note: Use the demo repository with pre-built workflows. Walk slowly through the Actions tab, click a successful run, then click a failed run. Open the `.github/workflows/` file to show the YAML.

---

### Slide 18 --- Guided Practice Introduction

**Your turn! Follow along with me.**

You're going to explore pre-built workflows in the demo repository.

I'll walk through each step. Follow along on your screen.

If you get stuck:
1. Ask your partner
2. Raise your hand

**You're reading workflows, not writing them --- so nothing can break. Explore freely!**

> Instructor note: Pair learners. Distribute lab exercise handout. All learners will use the shared demo repository for this exercise since it has pre-built workflows.

---

### Slide 19 --- Guided Practice Steps

**Follow along with me:**

1. Go to the **demo repository** (URL on your handout)
2. Click the **"Actions"** tab
3. Look at the list of workflow runs --- find one with a green checkmark
4. Click on it to see the details
5. Answer: What triggered this workflow? When did it run?
6. Find a run with a red X --- what does that tell you?
7. Go to the repository's code: navigate to `.github/workflows/`
8. Click on a `.yml` file --- can you spot the name, trigger, job, and steps?

**Checkpoint:** Raise your hand when you can point to the name, trigger, and steps in the YAML file.

> Instructor note: Pause at checkpoint. Walk around to confirm learners can identify the key parts.

---

### Slide 20 --- BREAK (15 Minutes)

**Take 15 minutes.**

When we come back, you'll evaluate workflows on your own and match farm tasks to automation types!

---

### Slide 21 --- Independent Practice

**Your challenge: Explore workflows and think about automation for your farm.**

**Task 1: Explore 3 Pre-Built Workflows (15 min)**

In the demo repository, find and explore 3 different workflows:
- What is each workflow called?
- What triggers each one?
- Did it succeed or fail?
- Can you identify the steps?

**Task 2: Match Farm Tasks to Automation (10 min)**

Choose your farm scenario (crops, equipment, or livestock) and identify 3 tasks that could be automated. For each one, decide: should it use a schedule, event, or manual trigger?

**Task 3: Evaluate a Workflow (10 min)**

Look at a workflow run that failed. Can you figure out what went wrong? What would you check first?

**Details and success criteria are on your lab handout.**

---

### Slide 22 --- Stretch Challenges

**Finished early? Try these:**

- Find a workflow with a manual trigger and run it (ask the instructor for permission)
- Compare two workflow YAML files --- what's the same and what's different?
- Design (on paper) a dream automation for your farm --- what would it do, and what trigger would it use?
- Help a classmate identify which trigger type fits their farm tasks

---

### Slide 23 --- Key Vocabulary Review

| GitHub Term | Farm Analogy | Meaning |
|------------|-------------|---------|
| **GitHub Actions** | Automatic farm helpers | A system that runs tasks automatically |
| **Workflow** | Written instructions for the hired hand | A file that defines what to do, when, and how |
| **Trigger** | What tells the helper to start | The event, schedule, or button that kicks off a workflow |
| **Job** | The assignment | A group of steps that run together |
| **Step** | One task in the instructions | A single action the workflow performs |
| **YAML** | The recipe card format | The file format used to write workflows |
| **Workflow run** | One time the helper did the job | A single execution of a workflow |
| **Status** | The job report | Green (success), red (failure), yellow (in progress) |

---

### Slide 24 --- Reflection

**Think about your farm:**

- What are 3 tasks you do on a regular schedule that you sometimes forget?
- What should happen automatically when something changes (a new Issue, an overdue task)?
- If you could have one automatic helper, what would it do?

**Turn to your partner and share your answers. (3 minutes)**

**Bonus:** On your handout, write a plain-English "recipe card" for your dream automatic helper:
- Name: ___
- When it starts: ___
- What it does: ___

> Instructor note: Walk around and listen. Learners who connect Actions to their own farm needs are demonstrating "Evaluate" level thinking.

---

### Slide 25 --- What's Next

**Session 8: Collaboration & Team Workflows**

Next time, you'll learn how to work together with your team on GitHub --- assigning tasks, reviewing each other's work, and using branches so multiple people can work at the same time without stepping on each other's toes.

**Optional between-session practice:**
- Visit the demo repository's Actions tab again and explore more workflows
- Look at the YAML files and practice identifying name, trigger, job, and steps
- Write out (on paper) 3 farm tasks you'd like to automate and which trigger type you'd use
- Think about what tasks your team does that could benefit from automatic helpers

---

### Slide 26 --- Feedback Survey

**Please fill out the 2-minute survey before you leave.**

---

**Thank you!**

You now understand how GitHub Actions can work as automatic farm helpers --- doing tasks on a schedule, when something happens, or when you push a button. Next session, we'll put these ideas to work with your team.

---

## UDL Implementation Notes

### Representation (3+ modes)
1. **Visual:** Projected slides with color-coded workflow status indicators (green/red/yellow), annotated YAML "recipe card" diagram, trigger type comparison table
2. **Verbal:** Instructor narration using "hired hand / alarm clock / motion-sensor light / push button" analogies throughout
3. **Written:** Printed quick-reference guide with annotated YAML example and vocabulary table (take-home)
4. **Kinesthetic/Spatial:** Learners navigate the Actions tab and click through workflow runs on their own screens
5. **Diagrammatic:** YAML file annotated with recipe card labels (name = recipe name, on = when to cook, steps = instructions) provides a structural mapping between familiar and technical concepts

### Engagement (learner choice)
- **Three farm scenario options** in lab exercise (crops, equipment, livestock) --- learners choose the context closest to their operation
- **Open-ended "dream automation"** activity invites personal creativity and farm-specific thinking
- **Stretch challenges** for fast finishers (run a manual workflow, compare YAML files, design on paper, help a classmate)
- **"Why This Matters for YOUR Farm"** opening connects directly to learners' daily routines
- **Reflection** includes designing a plain-English "recipe card" --- bridging to future YAML writing sessions

### Action & Expression (multi-method assessment)
- **L1 (Reaction):** Paper feedback survey
- **L2 (Observation):** 5-skill checklist (navigate Actions tab, identify run status, read YAML components, evaluate workflow output, match farm tasks to trigger types)
- **Verbal identification:** Learners point to YAML components during guided practice checkpoint
- **Written analysis:** Lab exercise requires written answers identifying triggers, steps, and farm-to-automation mapping
- **Partner discussion:** Reflection activity surfaces understanding through peer explanation
- **Multiple output formats:** Learners demonstrate understanding through navigation (clicking), reading (YAML), writing (farm task mapping), and speaking (partner share)
