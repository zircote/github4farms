# Facilitation Script: Session 8 — Automating Farm Tasks

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Evaluate / Apply
> **Practice Time:** 90 minutes (Guided 20 + Independent 35 + Reflection activities 10 + Demo follow-along 25) = ~55%+
> **Prerequisites:** Sessions 1-7 (GitHub account, repository, Issues, YAML basics)
> **Key Analogies:** GitHub Actions = Automated farmhand; Cron schedule = Alarm clock; Workflow file = Recipe card; Run log = Farmhand's daily report

---

## Pre-Session Checklist

- [ ] Demo repository is open in the browser on the projector
- [ ] GitHub Actions is enabled on the demo repository (Settings > Actions > General > "Allow all actions")
- [ ] Workflow permissions set to "Read and write permissions" on demo repo (Settings > Actions > General > Workflow permissions)
- [ ] **Test run completed:** Create and run a test workflow on the demo repo before the session to confirm it works
- [ ] Delete the test workflow run and Issue so the demo starts clean
- [ ] YAML content for the Weekly Equipment Check workflow is saved in a text file for quick copy-paste during demo
- [ ] Lab exercise handouts printed (one per learner)
- [ ] Workflow setup quick-reference guides printed (one per learner)
- [ ] Feedback surveys ready (paper or digital)
- [ ] Seating arranged for pairs
- [ ] Wi-Fi tested on instructor and learner devices
- [ ] Verify all learners have a repository they own (from earlier sessions)
- [ ] Verify all learner repositories have Actions enabled (or plan 5 minutes at the start of guided practice to enable it)
- [ ] Have backup: printed screenshots of the Actions tab, workflow editor, run log, and created Issue in case of internet issues
- [ ] Whiteboard or flip chart available for writing learner responses during the hook

---

## Session Timeline

| Time | Duration | Phase | Activity |
|------|----------|-------|----------|
| 0:00 | 10 min | Welcome & Hook | Why automation matters for YOUR farm |
| 0:10 | 5 min | Review | Quick review of Session 7 (triggers, YAML) |
| 0:15 | 25 min | Concrete Experience | Live demo — build a workflow end-to-end |
| 0:40 | 20 min | Reflective Observation | Guided practice — follow along creating a workflow |
| 1:00 | 15 min | Abstract Conceptualization | Cron syntax, troubleshooting concepts, reading logs |
| 1:15 | 15 min | **BREAK** | Stretch, questions, tech help |
| 1:30 | 35 min | Active Experimentation | Independent practice — choose scenario, build workflow |
| 2:05 | 10 min | Reflection | Farm application discussion |
| 2:15 | 10 min | Wrap-Up | Preview Session 9 + feedback survey |
| 2:25 | 10 min | Buffer | Catch-up, 1-on-1 help, survey collection |

**Practice Time:** 90 min (demo follow-along + guided + independent + reflection) = ~55%
**Lecture/Concept Time:** ~50 min

---

## Phase 1: Welcome & Hook (10 min) — 0:00

**[Slide 1-2: Title, Welcome Back]**

> "Good [morning/afternoon]. Welcome to Session 8. Today is the session a lot of you have been waiting for — we're going to teach GitHub to do work for you, automatically, without you lifting a finger."

> "Over the past seven sessions, you've learned to track tasks, organize plans, collaborate, set up templates, and understand how workflows are structured. Today, you put it all together. By the end of this session, you'll have a working automated workflow that creates a task for you every week — like hiring a farmhand who never forgets."

**[Slide 3: Why This Matters for YOUR Farm]**

> "Let me ask you this: What's one farm task you do over and over — every week, every month — that you sometimes forget or wish you didn't have to remember?"

*Pause. Let 3-4 learners answer. Write their answers on the whiteboard.*

> "Equipment checks, health inspections, ordering supplies, checking fence lines... all of these are repeating tasks. What if GitHub could create a reminder for you automatically — every Monday, every month, whatever schedule you set? That's what we're building today."

> "By the end of this session, you'll have set up a workflow that automatically creates a checklist Issue on a schedule you choose. Your own automated farmhand."

---

## Phase 2: Quick Review (5 min) — 0:10

**[Slide 4: Review from Session 7]**

> "Quick review from last session. Who can remind us — what is a trigger?"

*Wait for a learner to answer. Reinforce:*

> "Right — a trigger is the event that starts a workflow. Like a motion sensor turning on a barn light. Last session we learned three types: manual, event-based, and scheduled. Today we're using scheduled triggers — the alarm clock type."

> "And what language are workflows written in?"

*Wait for answer.*

> "YAML — that recipe card format with the careful spacing. Today you're going to write and edit YAML for the first time. Don't worry — I'll give you the recipe to copy, and we'll go step by step."

---

## Phase 3: Concrete Experience — Live Demo (25 min) — 0:15

**[Slide 5-6: What Are GitHub Actions, Starter Templates]**

> "GitHub Actions is GitHub's automation system. Think of it as an automated farmhand. You write instructions once — as a YAML file — and GitHub follows those instructions on whatever schedule you set."

> "GitHub even gives you starter templates — pre-built workflows you can use right away. It's like buying a pre-made fence kit instead of cutting every board yourself."

**[Slide 7: How to Enable a Starter Workflow]**

> "Let me show you how this works. Watch my screen."

*Switch to the browser. Navigate to the demo repository.*

> "I'm in my demo farm repository. I'm going to click the Actions tab at the top."

*Click the Actions tab.*

> "GitHub shows me a page to get started. I could pick one of these starter templates, but today I'm going to click 'set up a workflow yourself' so we can see exactly what's happening."

*Click "set up a workflow yourself."*

> "GitHub opened a code editor for me. See the file path at the top? It says `.github/workflows/main.yml`. I'm going to change that file name to `equipment-check.yml`."

*Change the file name.*

> "Now I'm going to delete everything in the editor and paste my workflow."

*Select all, delete, then paste the Weekly Equipment Check YAML from your prepared text file.*

**[Slide 11-12: Reading the Workflow File, Breaking Down the Recipe]**

> "Let me read this out loud, like a recipe card."

*Point to each section as you explain:*

> "`name: Weekly Equipment Check Reminder` — that's the name of our workflow. Like the title on a recipe card."

> "`on: schedule: cron: '0 13 * * 1'` — this is our alarm clock. It says: run this at minute 0, hour 13 (that's 1 PM UTC, which is about 7 or 8 AM Central), every Monday. The 1 at the end means Monday."

> "`workflow_dispatch:` — this is our test button. It lets us click 'Run workflow' anytime instead of waiting until Monday."

> "`jobs:` and `steps:` — these are the instructions. Our workflow has one job: create an Issue. The step uses a pre-built tool called `github-script` that talks to GitHub for us."

> "`title:` and `body:` — this is what goes in the Issue. The title includes today's date, and the body has our equipment checklist."

> "Now I'm going to commit this file."

*Click "Commit changes...", leave the default message, select "Commit directly to the main branch", click "Commit changes."*

**[Slide 13: Verifying Workflow Runs]**

> "Now let's test it. I'll click the Actions tab."

*Click Actions tab.*

> "I see my workflow listed on the left: 'Weekly Equipment Check Reminder'. I'll click on it."

*Click the workflow name.*

> "Now I'll click 'Run workflow' to test it right now instead of waiting until Monday."

*Click "Run workflow" dropdown, then the green "Run workflow" button. Wait 10-15 seconds, then refresh.*

> "There it is — see the yellow circle? That means it's running. Let me refresh... and now I see a green checkmark. That means it worked!"

*Click on the workflow run.*

**[Slide 14: Reading the Run Log]**

> "Let me click on the run to see the details. I can see the job 'create-reminder' with a green checkmark. If I click on it, I can see each step. See how every step has a green checkmark? That means everything worked."

> "Now let's check the Issues tab."

*Click the Issues tab.*

> "There it is! 'Weekly Equipment Check' with today's date. Let me open it."

*Open the Issue.*

> "See the checklist? Check tractor oil, inspect irrigation lines, test backup generator, check tire pressure, inspect barn doors. All automatically created. Every Monday, this same Issue will appear — without you doing anything."

*Pause for effect.*

> "That's the power of automation. You set it up once, and it works for you forever."

**[Slide 15: Troubleshooting Common Errors]**

> "Now, what if something goes wrong? Let me show you what an error looks like."

*If you have a pre-prepared broken workflow, trigger it now. Otherwise, describe verbally:*

> "If you see a red X instead of a green checkmark, don't panic. Click on the run, click on the failed step, and read the error message. The most common problems are: YAML indentation is wrong — remember, spaces not tabs, and every level needs exactly 2 spaces. Or there's a typo in a keyword. The error message usually tells you exactly what's wrong and which line to look at."

---

## Phase 4: Reflective Observation — Guided Practice (20 min) — 0:40

**[Slide 18: Guided Practice Introduction]**

> "Your turn! We're going to do this together, step by step. Open your lab exercise handout to Part 1: Guided Practice."

*Distribute handouts if not already done.*

> "Everyone, open your farm repository in your browser. Got it? Good. Now click the Actions tab."

*Wait. Scan the room.*

> "If you see a page about getting started with Actions, you're in the right place. If you see a message about Actions being disabled, raise your hand and I'll help you enable it."

*Help anyone who needs Actions enabled: Settings > Actions > General > Allow all actions.*

> "Now click 'set up a workflow yourself.' You should see a code editor."

*Wait for everyone.*

> "Change the file name from `main.yml` to `equipment-check.yml`. The file name is at the top of the editor."

*Wait. Walk around and verify.*

> "Now, select all the default text in the editor and delete it. We're going to paste fresh content."

> "Look at your lab handout, Step 3. You'll see a YAML block. Copy that YAML exactly. If you're reading from the printed handout, type it carefully — every space matters. If you have the digital version, copy and paste."

*Walk around the room. This is the step where learners need the most help. Check every screen.*

**YAML Editing Guidance for Instructors:**

Common mistakes to watch for during this step:
- **Tabs instead of spaces:** Some keyboards auto-insert tabs. Make sure learners use the space bar. In the GitHub editor, tabs are converted to spaces, but double-check alignment.
- **Missing colons:** Every key needs a colon after it (`name:` not `name`)
- **Missing single quotes around cron:** The cron expression must be in single quotes: `'0 13 * * 1'`
- **Wrong indentation level:** Each level is 2 spaces. `on:` is at the root. `schedule:` is 2 spaces in. `- cron:` is 4 spaces in.
- **Missing the dash before `cron`:** It must be `- cron:` with a dash and space.
- **Copying extra whitespace:** If learners copy from a PDF, extra spaces may appear. Have them check the beginning of each line.

> "Everyone have the YAML in the editor? Let me walk around and check before we commit."

*Walk the room. Fix any issues.*

> "Now click 'Commit changes,' leave the default message, make sure 'Commit directly to the main branch' is selected, and click 'Commit changes.'"

*Wait for everyone.*

> "Go to the Actions tab. Click your workflow name on the left. Click 'Run workflow,' then click the green 'Run workflow' button."

*Wait 15 seconds.*

> "Refresh the page. Do you see a green checkmark? Raise your hand when you do."

*Wait for most hands. Help anyone with a red X — have them click the failed step and read the error out loud to you.*

> "Now go to the Issues tab. Do you see a new Issue? Open it. That checklist was created automatically by your workflow. Congratulations — you just automated your first farm task!"

*Pause for celebration.*

> "One more step. Go back to Code, navigate to `.github/workflows/equipment-check.yml`, click the pencil icon to edit, and change the cron from `'0 13 * * 1'` to `'0 14 * * 3'`. That changes it from Monday to Wednesday. Commit the change."

### Guided Practice Checkpoint

> "Let me see a show of hands. Who has:"
> - "A green checkmark in the Actions tab?" *Count hands.*
> - "A new Issue with a checklist in the Issues tab?" *Count hands.*
> - "Changed the cron schedule?" *Count hands.*

> "Excellent. You've just built, tested, and modified an automated workflow."

---

## Phase 5: Abstract Conceptualization — Concepts (15 min) — 1:00

**[Slide 8-9: Cron Syntax]**

> "Now that you've seen it work, let's understand the cron schedule a little deeper."

> "Cron has 5 fields. Think of it like setting an alarm clock with 5 dials."

*Point to the slide:*

> "Minute, Hour, Day-of-Month, Month, Day-of-Week. An asterisk means 'every.' So `0 8 * * *` means: at minute 0, hour 8, every day of the month, every month, every day of the week. That's daily at 8 AM."

> "Let's practice. What would 'every Monday at 7 AM' look like?"

*Let learners try. Answer: `0 7 * * 1`*

> "What about the first day of every month at 6 AM?"

*Let learners try. Answer: `0 6 1 * *`*

> "And here's an important detail —"

**[Slide 10: Time Zones]**

> "GitHub uses UTC time. If you're in US Central, that's 6 hours ahead. So if you want 7 AM Central, you'd set 13 in the hour field — 1 PM UTC. Don't worry about getting this perfect right now. You can always adjust after you see when it actually runs."

**[Slide 15: Troubleshooting]**

> "Let's talk about what to do when things go wrong. The most important skill in automation isn't setting things up — it's figuring out why they broke."

> "Step 1: Go to the Actions tab. Step 2: Click the failed run (the red X). Step 3: Click the failed step. Step 4: Read the error message. The message tells you what's wrong."

> "The number one cause of errors is indentation. YAML is picky — every space has to be in the right place. If you get an error that says 'Invalid workflow file,' check your spaces first."

*Show the troubleshooting table on the slide. Walk through 2-3 examples.*

---

## BREAK (15 min) — 1:15

**[Slide 19: Break]**

> "Take 15 minutes. When we come back, you'll build your own automated farm workflow from scratch. Look at Part 2 of your lab exercise and start thinking about which scenario you want: equipment, crops, or livestock."

---

## Phase 6: Active Experimentation — Independent Practice (35 min) — 1:30

**[Slide 20: Independent Practice]**

> "Now you're going to build a complete automated workflow on your own. Open Part 2 of your lab exercise."

> "You have three scenarios to choose from. Pick the one that fits your farm best:"
> - "Scenario A — Weekly Equipment Check. For those of you who manage tractors, irrigation systems, or machinery."
> - "Scenario B — Monthly Planting Season Reminder. For those of you who grow crops and need to plan field work."
> - "Scenario C — Livestock Health Check. For those of you who manage animals and need regular health monitoring."

> "Each scenario gives you the complete YAML to copy. Your job is to: create the workflow file, customize the checklist for YOUR farm, commit it, trigger it manually, and verify it worked. The full steps are on your handout."

> "You have 35 minutes. If you finish early, try the stretch challenges on the handout."

*Set a timer for 35 minutes. Walk the room constantly.*

**Common support needs during independent practice:**

- **Learner can't find "set up a workflow yourself":** If they already have workflows, they need to click "New workflow" first, then "set up a workflow yourself."
- **YAML paste includes wrong indentation:** Have them select all and delete, then paste again. If copying from the printed handout, check each line carefully.
- **"Run workflow" button doesn't appear:** They likely forgot `workflow_dispatch:` in the YAML. Have them edit the file, add it, and commit.
- **Red X on the workflow run:** Have them click the run, click the failed step, and read the error message to you. Guide them to the fix rather than fixing it for them.
- **Issue created but no labels:** The label must exist in the repository first. Have them go to Issues > Labels > New label and create it.
- **Learner finishes early:** Point them to the stretch challenges: change the schedule, add a second label, create a second workflow, or customize the Issue body.
- **Learner is stuck on choosing a scenario:** Ask about their farm. "Do you have equipment? Animals? Crops?" Pick whichever matches.

*At 10 minutes remaining:*

> "Ten more minutes! If you haven't triggered your workflow yet, do that now. Make sure you see a green checkmark and a new Issue."

*At 5 minutes remaining:*

> "Five minutes! Finish up and check your results. If you got a red X, read the error message — that's part of the exercise."

---

## Phase 7: Reflection (10 min) — 2:05

**[Slide 22: Reflection]**

> "Let's pause and think about what you built today."

> "Turn to your partner and discuss these questions:"
> - "Which farm task did you automate? Why that one?"
> - "How would automated reminders change your weekly routine?"
> - "What other tasks on your farm could you automate?"

*Allow 4 minutes for partner discussion.*

> "Who wants to share? What did you automate, and what would you automate next?"

*Take 3-4 responses from the group. Acknowledge each one.*

> "Every one of those is something GitHub Actions can do for you. You now have the foundation to set up as many automated reminders as you want."

---

## Phase 8: Wrap-Up (10 min) — 2:15

**[Slide 21: Key Vocabulary]**

> "Let's review the new terms from today."

*Go through each term. Ask learners to explain in their own words:*

- "Who can tell me what GitHub Actions is in their own words?"
- "What is a cron schedule?"
- "What does `workflow_dispatch` do?"
- "Where do you go to check if your workflow ran successfully?"

**[Slide 23: What's Next]**

> "Next session — Session 9 — we'll take this further with advanced projects. You'll learn to connect your automated workflows to project boards, and build more complex automations. Think of it as upgrading from one farmhand to a whole crew."

> "Before next session, here's what I want you to do:"
> - "Let your scheduled workflow run at least once on its own — don't trigger it manually, just wait and check."
> - "Go to the Actions tab after the scheduled time and verify it created an Issue."
> - "If you're feeling adventurous, try changing the cron schedule or adding more checklist items."

**[Slide 24: Feedback Survey]**

> "Please fill out the quick survey before you leave. Your feedback makes these sessions better."

> "Thank you! You now have an automated farmhand on GitHub. It'll show up on time, every time, and never forget a task. See you next session!"

---

## Buffer (10 min) — 2:25

Use this time for:
- Collecting remaining feedback surveys
- Helping learners who didn't finish the independent exercise
- Answering individual questions about cron schedules or YAML
- Helping learners troubleshoot red X runs they didn't resolve

---

## Emergency Procedures

**Internet goes down:**
- Use printed screenshots of the Actions tab, workflow editor, and run log
- Walk through the YAML on the projector using a local text file
- Have learners write their cron schedule on paper and explain what it means
- Focus on the conceptual understanding of cron and troubleshooting

**Projector fails:**
- Walk around and demonstrate on individual screens
- Pair experienced learners with those who need more help
- Use the printed lab exercise as the primary guide

**GitHub Actions is slow or not triggering:**
- Scheduled workflows can be delayed up to 15 minutes — reassure learners this is normal
- Use `workflow_dispatch` to test manually instead of waiting for the schedule
- If Actions is fully down, switch to a walkthrough using printed screenshots and have learners write their YAML on paper for later entry

**Learner's repository doesn't have Actions enabled:**
- Go to repository Settings > Actions > General > "Allow all actions and reusable workflows"
- If the learner doesn't see the Settings tab, they may not own the repository — have them create a new one

**Learner finishes early:**
- Try the stretch challenges (change schedule, add labels, create second workflow)
- Help a neighboring learner who is stuck
- Explore the Actions Marketplace for other templates
- Customize their Issue body with more detailed checklists

---

## L2 Observation Checklist

**During guided and independent practice, observe whether each learner can:**

- [ ] **Create a workflow file** — Navigate to Actions tab, open the workflow editor, name the file correctly in `.github/workflows/`
- [ ] **Modify a cron schedule** — Edit the cron expression to change the day or time, understanding what each field controls
- [ ] **Commit and trigger a workflow** — Commit the YAML file and use `workflow_dispatch` to run the workflow manually
- [ ] **Verify a workflow run** — Navigate to the Actions tab, identify the green checkmark, and confirm the Issue was created
- [ ] **Troubleshoot a failed run** — Click a failed run, read the error log, and identify or fix the problem (even with instructor help)

**Scoring guidance:**
- **Demonstrated independently** — Learner completed the skill without instructor help
- **Demonstrated with help** — Learner completed the skill after a prompt or hint from the instructor
- **Not yet demonstrated** — Learner was unable to complete the skill during this session

**Notes space:**

| Learner | Create File | Modify Cron | Commit/Trigger | Verify Run | Troubleshoot |
|---------|-------------|-------------|----------------|------------|--------------|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

---

## Post-Session Notes

After the session, document:
- [ ] Attendance count
- [ ] L1 feedback survey results
- [ ] L2 observation notes (skills demonstrated/not demonstrated)
- [ ] Common confusion points for Session 8 revision
- [ ] Which scenarios were most popular (equipment, crops, livestock)
- [ ] Any technical issues encountered (Actions permissions, YAML errors, browser-specific issues)
- [ ] Learner confidence levels from reflection discussion
