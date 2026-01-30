# Session 7: Facilitation Script --- Introduction to GitHub Actions

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Analyze / Evaluate
> **Prerequisites:** Sessions 1-6
> **Theme:** "Automatic farm helpers that work while you sleep"
> **Key Analogies:** GitHub Actions = Automatic farm helpers / hired hand; Trigger = alarm clock, motion-sensor light, push button; Workflow = written instructions; YAML = recipe card
> **Note:** YAML is read-only in this session. Farmers view but do not write YAML.

---

## Pre-Session Checklist

- [ ] Demo repository has GitHub Actions enabled and visible in the tab bar
- [ ] At least 3 pre-built workflows exist in the demo repository's `.github/workflows/` folder:
  - One with a **schedule** trigger (e.g., weekly equipment reminder)
  - One with an **event** trigger (e.g., welcome message on new Issue)
  - One with a **manual** trigger (`workflow_dispatch`)
- [ ] At least 2 **successful** workflow runs (green checkmark) visible in the Actions tab
- [ ] At least 1 **failed** workflow run (red X) visible in the Actions tab (intentionally create one if needed)
- [ ] Projector connected and GitHub displayed at readable zoom level (zoom browser to 125-150%)
- [ ] Lab exercise handouts printed (one per learner)
- [ ] Quick-reference guide printed (one per learner)
- [ ] Feedback surveys ready (paper or digital)
- [ ] Seating arranged for pairs
- [ ] Wi-Fi tested on instructor and learner devices
- [ ] Demo repository URL written on the whiteboard or included on the handout
- [ ] Verify all learners can access the demo repository (public repo or learners have access)
- [ ] Test that learners can see the Actions tab (some org settings may restrict visibility)

---

## Session Timeline

| Time | Duration | Phase | Activity |
|------|----------|-------|----------|
| 0:00 | 10 min | Welcome & Hook | Why automation matters for YOUR farm |
| 0:10 | 20 min | Concrete Experience | Instructor demo --- navigate Actions tab, view runs, read YAML |
| 0:30 | 20 min | Reflective Observation | Guided practice --- explore Actions tab and YAML together |
| 0:50 | 20 min | Abstract Conceptualization | Trigger types, workflow components, farm automation concepts |
| 1:10 | 15 min | **BREAK** | Stretch, questions, tech help |
| 1:25 | 35 min | Active Experimentation | Independent practice --- analyze workflows, match farm tasks to triggers |
| 2:00 | 10 min | Reflection | Farm automation planning discussion |
| 2:10 | 10 min | Wrap-Up | Preview Session 8 + feedback survey |
| 2:20 | 10 min | Buffer | Catch-up, 1-on-1 help, survey collection |

**Practice Time:** 85 min (Guided 20 + Independent 35 + Reflection activities + stretch) = ~55%+
**Lecture/Demo Time:** ~50 min

---

## Phase 1: Welcome & Hook (10 min) --- 0:00

**Facilitation Script:**

> "Good [morning/afternoon]. Welcome to Session 7. I've got a question for you."

> "How many of you have a task on your farm that needs to happen on a schedule --- every Monday, or every month, or every season --- and sometimes it just... slips through the cracks? Maybe the weekly equipment check doesn't get done because everybody was busy with harvest. Or a supply order reminder gets forgotten. Raise your hand if that's happened to you."

*Most hands should go up.*

> "Now, what about things that should happen automatically when something changes? Like --- when a new person joins your team, they should get a welcome message. When an Issue has been open for two weeks, someone should check on it. But nobody remembers to do that because life gets busy."

> "Today we're going to learn about **GitHub Actions** --- automatic helpers that do tasks for you. Think of them as a hired hand who follows written instructions perfectly, works 24 hours a day, 7 days a week, never forgets, and never calls in sick."

> "By the end of today, you'll be able to look at an automatic helper's instructions, understand what it does, tell whether it worked, and identify farm tasks on YOUR operation that could benefit from this kind of automation."

> "And here's the good news: today is read-only. You're going to explore and analyze --- not write any code. Think of it like reading a recipe before you cook. You want to understand the ingredients and steps before you turn on the stove."

**Key Elements:**
- [ ] Open with a question about forgetting scheduled tasks
- [ ] Share the "hired hand who never forgets" analogy
- [ ] State outcomes in plain language
- [ ] Emphasize read-only --- no pressure to write code
- [ ] Connect to prior sessions: "You built templates in Session 6. Actions take that further --- they run tasks automatically."

---

## Phase 2: Concrete Experience --- Instructor Demo (20 min) --- 0:10

**"I Do" --- Watch Me Explore Workflows and Read a YAML File**

> "I'm going to show you three things: how to find the Actions tab, how to read a workflow run's status, and how to read a YAML workflow file. Just watch."

### Demo 1: Finding the Actions Tab (3 min)

> "Let me go to our demo repository."

1. Navigate to the demo repository
2. Point to the tabs: Code, Issues, Pull requests, **Actions**

> "See this tab that says Actions? This is the control center for all your automatic helpers. Every repository can have Actions. Let me click on it."

3. Click the **Actions** tab

> "Here's what you see: on the left, a list of workflow names --- these are the different helpers we've set up. In the center, a list of workflow runs --- every time a helper did its job. Think of this as the job board in the farm office."

### Demo 2: Reading Workflow Run Status (7 min)

> "Let's look at these runs. Notice the icons next to each one."

1. Point to a run with a **green checkmark**

> "Green checkmark means success. The helper did its job and everything went fine. Like a farmhand coming back and saying 'All done, boss. No problems.'"

2. Point to a run with a **red X**

> "Red X means failure. Something went wrong. The helper tried but couldn't finish. Like a farmhand coming back and saying 'I ran into a problem on step 3 --- the gate was locked and I couldn't get through.'"

3. If visible, point to a run with a **yellow dot** (or describe it)

> "Yellow dot means it's still running. The helper is working right now. Check back in a few minutes."

4. Click on the **green checkmark run** to open the details

> "When I click on a run, I see the details: which workflow ran, when it ran, what triggered it, and how long it took. Let me click on the job name to see the individual steps."

5. Click the job name to expand the steps

> "Look --- each step has its own green checkmark. Step 1 done, step 2 done, step 3 done. The helper followed every instruction and they all succeeded."

6. Go back and click on the **red X run**

> "Now let me look at the failed one. Same layout, but look --- step 1 is green, step 2 is green, but step 3 has a red X. That's where the problem happened. If I click on step 3, I can see an error message."

7. Click the failed step to show the error

> "Don't worry about understanding the technical error. The important skill is knowing WHERE to look. You found the broken step. That's what you'd tell someone who can fix it: 'Step 3 failed. Here's the error.'"

### Demo 3: Reading a YAML File (10 min)

> "Now let me show you the actual instructions the helper follows. These are written in a file called YAML --- think of it as a recipe card."

1. Go to the **Code** tab
2. Click `.github` folder, then `workflows` folder

> "All the workflow files live in this special folder: dot-github, then workflows. Each file ending in .yml is one set of instructions for one helper."

3. Click on a `.yml` file

> "Here's the recipe card. I know it looks technical, but we're only going to focus on four parts. Let me walk through them."

4. Point to each part:

> "First: **name**. Right here at the top --- this is the recipe name. It says 'Weekly Equipment Reminder.' That tells us what this helper does."

> "Second: **on**. This is the trigger --- what tells the helper to start. See where it says 'schedule' and then 'cron'? That's the alarm clock. This one is set to go off every Monday at 8 AM. You don't need to memorize that 'cron' line --- just know that 'schedule' means 'alarm clock.'"

> "Third: **jobs**. This is the assignment --- the work to do. This job is called 'send-reminder.' Think of it as the name of the task on the to-do list."

> "Fourth: **steps**. These are the individual instructions, in order. Step 1: create a new Issue with the title 'Weekly Equipment Check.' That's it --- one step in this case. Some workflows have many steps."

> "So to summarize this recipe card: The helper is named 'Weekly Equipment Reminder.' It starts every Monday at 8 AM. Its job is to create an Issue reminding the team to check the equipment. Simple."

5. Open a second YAML file briefly

> "Let me show you one more. This one is called 'Welcome Message.' The trigger is 'on: issues: types: opened' --- that means 'when a new Issue is created.' That's an event trigger, like a motion-sensor light. Someone creates an Issue, and this helper automatically posts a welcome comment."

**Key Elements:**
- [ ] Show all three status types (green, red, yellow)
- [ ] Click into run details and show individual steps
- [ ] Show a failed run and identify which step broke
- [ ] Open a YAML file and identify name, trigger, job, steps
- [ ] Use recipe card analogy throughout
- [ ] Move slowly --- this is new territory

---

## Phase 3: Reflective Observation --- Guided Practice (20 min) --- 0:30

**"We Do" --- Explore the Actions Tab Together**

> "Now it's your turn. You're going to explore the same demo repository. I'll walk you through each step."

> "Open the demo repository URL from your handout. Everyone find the Actions tab."

*Distribute lab exercise handouts.*

**Step 1: Navigate to the Actions tab (3 min)**

> "Click the Actions tab. Raise your hand when you see the list of workflow runs."

- Pause until 80%+ of learners have hands up
- Help anyone who can't find the tab ("Look for the row of tabs near the top --- Code, Issues, Pull Requests, Actions. It might be behind the three-dot menu if your screen is narrow.")

**Step 2: Identify workflow run statuses (5 min)**

> "Now look at the runs. Find one with a green checkmark --- that's a success. Write down the workflow name and when it ran on your handout."

- Pause: "Raise your hand when you've found a green checkmark run."

> "Now find a red X --- that's a failure. Write down its name too."

- Pause: "Raise your hand when you've found both a success and a failure."

**Step 3: View run details (5 min)**

> "Click on the green checkmark run. Look at the details page. Can you see what triggered it and how long it took? Now click the job name to see the individual steps."

> "Now go back and click the red X run. Find the step that failed --- it'll have a red X next to it."

- Circulate and help learners navigate the details pages

**Step 4: Read a YAML file (7 min)**

> "Now go back to the Code tab. Click the `.github` folder, then `workflows`. Click on any `.yml` file."

> "Look for the four parts we talked about: name, on (the trigger), jobs, and steps. On your handout, write down what you find."

- Pause: "Raise your hand when you can point to the name, trigger, job, and steps in the YAML file."
- Walk around to confirm. Help learners who are lost.

> "Don't worry if you can't understand every line. We're building the skill of knowing WHAT to look for, not reading every detail."

**Checkpoint:**

> "Quick check. Who can tell me what the name of their workflow is? [Take 1-2 answers.] And what type of trigger does it use --- schedule, event, or manual? [Take 1-2 answers.] Great --- you just read a YAML recipe card."

**Troubleshooting During Guided Practice:**

| Problem | Solution |
|---------|----------|
| Can't find the Actions tab | Check the URL --- must be the demo repository. Look for hidden tabs behind the "..." menu |
| Actions tab shows nothing | Click a workflow name on the left sidebar to filter. Or the runs may not have loaded --- refresh the page |
| Can't find `.github/workflows/` | Go to the Code tab first. The `.github` folder is at the root level. It starts with a dot |
| YAML file looks overwhelming | Point learners to just the four keywords: `name:`, `on:`, `jobs:`, `steps:`. Ignore everything else |
| Workflow run details are confusing | Help the learner click on the job name (colored box) to expand and see individual steps |
| Learner accidentally clicks "Run workflow" | No harm done if the workflow is safe. Use it as a teaching moment about manual triggers |

---

## Phase 4: Abstract Conceptualization (20 min) --- 0:50

**"Now Let's Understand the Concepts Behind What You Just Explored"**

> "You just explored real workflows. Now let's step back and understand the ideas behind them."

### Concept 1: The Three Trigger Types (8 min)

> "We talked about three types of triggers --- three ways to tell the helper to start. Let's make sure these are clear."

**Schedule trigger:**

> "The alarm clock. You set a time, and the helper wakes up and does its job. Every Monday at 8 AM. First of every month. Every Friday afternoon. The helper doesn't need you to do anything --- the clock triggers it."

> "On a farm, this is great for: weekly equipment checks, monthly safety inspections, seasonal planning reminders."

**Event trigger:**

> "The motion-sensor light. Something happens in your repository, and the helper reacts. Someone creates a new Issue --- the helper adds a label. An Issue is open for two weeks --- the helper posts a reminder. A new team member shows up --- the helper sends a welcome message."

> "You don't push any button. The event triggers the helper automatically."

**Manual trigger:**

> "The button on the wall. The helper is ready to go, but it waits for you to push the button. You decide when to run it. Great for quarterly reports, seasonal setups, or anything where timing is your call."

> "Which type do you think would be most useful on your farm? Quick show of hands --- schedule? Event? Manual?"

*Take the vote and acknowledge responses.*

### Concept 2: Workflows as Recipe Cards (5 min)

> "Every workflow is a recipe card with four parts:"

Write on the whiteboard or point to the slide:
1. **Name** --- what's the recipe called?
2. **Trigger** --- when do we make it?
3. **Job** --- what are we making?
4. **Steps** --- what are the instructions, in order?

> "When you looked at the YAML file, you found all four. That's all you need to understand what a workflow does. You don't need to understand the code inside the steps --- just what the step is called and what it does in plain language."

### Concept 3: Evaluating Whether a Workflow Worked (5 min)

> "One of the most important skills is knowing whether the helper did its job. You learned this already: green checkmark means success, red X means failure."

> "But how do you evaluate a failure? You do the same thing you'd do on the farm. If a farmhand says 'I couldn't finish the job,' you ask: 'Which part couldn't you finish? What happened?' In GitHub Actions, you click the failed run, find the step with the red X, and read the error message."

> "You don't need to be a programmer to do this. You just need to know WHERE to look."

### Turn and Talk (2 min)

> "Turn to your partner. In one sentence each, explain: What is a GitHub Action? Use your own words."

*After 1 minute, ask 2-3 learners to share.*

> "Great. If you said something like 'an automatic helper that follows instructions when something happens or on a schedule' --- you've got it."

---

## BREAK (15 min) --- 1:10

> "Take 15 minutes. Stretch, grab a drink, ask me any questions. We'll start back at [time]."

**During break:**
- [ ] Help anyone who had trouble during guided practice
- [ ] Check that all learners can access the demo repository
- [ ] Note any widespread confusion for post-break review
- [ ] If learners are excited, point them to the stretch challenges in the handout

---

## Phase 5: Active Experimentation --- Independent Practice (35 min) --- 1:25

**"You Do" --- Analyze Workflows and Plan Your Farm's Automation**

> "Now you're going to work more independently. You have three tasks on your handout."

> "Task 1: Explore 3 different workflows in the demo repository. Fill in the analysis table --- name, trigger type, what it does, status, number of steps. You've done this with guidance; now do it on your own."

> "Task 2: Choose a farm scenario --- crops, equipment, or livestock --- and identify 3 farm tasks that could be automated. For each one, decide whether it should use a schedule, event, or manual trigger. Explain why."

> "Task 3: Find a failed workflow run and evaluate it. Where did it break? What do you think went wrong?"

> "Work at your own pace. If you finish early, check the stretch challenges. I'll be walking around to help."

**Circulate and observe. Use the L2 checklist to note:**
- [ ] Can navigate to the Actions tab independently
- [ ] Can identify workflow run status (green/red/yellow)
- [ ] Can read YAML and identify key components (name, trigger, job, steps)
- [ ] Can evaluate a failed workflow run
- [ ] Can match farm tasks to appropriate trigger types

**Coaching prompts for learners who are stuck:**

- **Task 1 --- can't find 3 workflows:** "Look at the left sidebar on the Actions page. Each name there is a different workflow. Click one to filter its runs."
- **Task 2 --- can't think of farm tasks:** "Think about your weekly routine. What do you do every Monday? Every month? What should happen when something goes wrong? Those are your schedule and event triggers."
- **Task 2 --- confused about trigger types:** "Ask yourself: Does this task need to happen at a specific time? That's a schedule. Does it need to happen when something changes? That's an event. Do you want to decide when? That's manual."
- **Task 3 --- intimidated by the failed run:** "You don't need to fix it. Just find it. Click the run, click the job, find the step with the red X. Write down what you see. That's the skill."

**For early finishers:**

> "Check the stretch challenges on your handout. Try comparing two YAML files, or write a plain-English recipe card for your dream farm automation."

---

## Phase 6: Reflection (10 min) --- 2:00

> "Let's step back and think about what you learned today."

**Partner Share (5 min):**

> "Turn to your partner. Share your answers to these questions:"
> 1. "Which trigger type --- schedule, event, or manual --- would be most useful on your farm? Why?"
> 2. "If you could have one automatic helper for your farm, what would it do?"

**Whole Group (5 min):**

> "Who'd like to share their automatic helper idea?"

*Take 3-4 volunteers. Connect their ideas to trigger types:*

> "[Name] wants an automatic reminder for weekly equipment checks --- that's a perfect schedule trigger."

> "[Name] wants an alert when an animal health Issue is marked urgent --- that's an event trigger. The helper reacts to the change."

> "Notice how you're already thinking like automation designers. You don't need to write any code to know WHAT should be automated and WHEN it should trigger. That's the hard part --- the code is just the last step."

---

## Phase 7: Wrap-Up (10 min) --- 2:10

> "Great work today. Here's what we covered:"

1. **GitHub Actions** are automatic helpers that do tasks on a schedule, when something happens, or when you push a button
2. **Three trigger types:** schedule (alarm clock), event (motion-sensor light), manual (push a button)
3. **The Actions tab** shows you workflow runs with green (success), red (failure), and yellow (in progress) status
4. **YAML workflow files** are recipe cards with four parts: name, trigger, job, and steps
5. **Evaluating workflow runs** means finding where something succeeded or failed and understanding the output

> "Next session --- **Session 8: Collaboration & Team Workflows** --- you'll learn how to work together with your team on GitHub. Assigning tasks, reviewing each other's work, and making sure multiple people can contribute without stepping on each other's toes."

> "Optional practice before next time: visit the demo repository's Actions tab again and explore more workflows. Look at the YAML files and practice finding the four parts. Write out three farm tasks you'd automate and which trigger type you'd use. The more you explore, the more comfortable you'll be."

> "Please fill out the feedback survey before you leave."

**Key Elements:**
- [ ] Summarize 5 key concepts
- [ ] Reinforce the farm analogies one more time
- [ ] Preview Session 8 and connection to today (automation supports team collaboration)
- [ ] Distribute feedback survey
- [ ] Mention optional practice
- [ ] Thank learners

---

## Phase 8: Buffer (10 min) --- 2:20

- [ ] Help any learner who didn't complete the exercise
- [ ] Collect remaining feedback surveys
- [ ] Note learners who may need extra support
- [ ] Answer remaining questions
- [ ] If time allows, run a manual workflow together as a group to show the "push a button" trigger in action

---

## L2 Observation Checklist

| Skill | Learner Demonstrated? |
|-------|----------------------|
| Navigate to the Actions tab and find workflow runs | &#9744; |
| Identify workflow run status: success (green), failure (red), in progress (yellow) | &#9744; |
| Read a YAML workflow file and identify key components: name, trigger, job, steps | &#9744; |
| Evaluate a workflow run's output to determine success or failure (click into run details) | &#9744; |
| Match farm tasks to appropriate trigger types (schedule, event, manual) with reasoning | &#9744; |

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________
