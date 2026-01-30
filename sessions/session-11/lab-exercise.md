# Lab Exercise: GitHub Spark & Agents

> **Session 11: GitHub Spark & Agents**
> **Duration:** 65 minutes (Guided: 20 min + Independent: 35 min + Sharing: 10 min)
> **Prerequisites:** GitHub account, repository you own, familiarity with Copilot prompts (Session 10), Spark access
> **Theme:** "AI tools that can follow multi-step instructions on their own"

---

## Overview

In this exercise, you'll explore a pre-built Spark app, build your own simple farm tool using natural language descriptions, test and refine it, and compare AI-built tools to doing things manually. By the end, you'll understand when Spark and agents save time and when your own approach is the better choice.

---

## Part 1: Guided Practice --- Explore a Pre-Built Spark App (20 minutes)

**Follow along with the instructor.**

### Step 1: Open the Pre-Built Spark App

1. The instructor will share a link to a pre-built Spark app (a Planting Date Calculator)
2. Open the link in your browser
3. You should see a simple web page with a dropdown for crop type and a field for your hardiness zone

**What you should see:** A working web app with input fields and a results area.

### Step 2: Test the App

Try using the app with your own farm information:

1. Select a crop you grow from the dropdown
2. Enter your USDA hardiness zone (check the guide if you're unsure)
3. Read the recommended planting window it displays

**Test with at least 2 different crops.** Write down the results:

| Crop | Zone | Planting Window Shown | Does This Match What You Know? |
|------|------|----------------------|-------------------------------|
| | | | Yes / No / Unsure |
| | | | Yes / No / Unsure |
| | | | Yes / No / Unsure |

### Step 3: Evaluate the App

Ask yourself the same three questions from Session 10:

**Accuracy Check:**
- [ ] Are the planting dates reasonable for my area?
- [ ] Are any dates clearly wrong?
- [ ] Does the app handle edge cases (very early or late zones)?

**Completeness Check:**
- [ ] Are the crops I grow included in the dropdown?
- [ ] Is there enough detail in the planting window (just a month, or specific date ranges)?
- [ ] Is any important information missing (soil temperature requirements, frost considerations)?

**Relevance Check:**
- [ ] Would I actually use this tool on my farm?
- [ ] Does it work for my region and growing conditions?
- [ ] What would make it more useful for MY operation?

**Write your evaluation notes here:**

| Question | Your Answer |
|----------|-------------|
| What does the app get right? | |
| What does the app get wrong or miss? | |
| What one change would make it most useful for YOUR farm? | |

### Step 4: Watch the Instructor Refine the App

The instructor will take your feedback and ask Spark to make a change to the app (for example, adding a missing crop or showing more detail in the planting window).

**Observe:**
- What prompt does the instructor use to request the change?
- How quickly does Spark make the update?
- Does the change look right, or does it need more refining?

### Guided Practice Checkpoint

- [ ] I opened and tested the pre-built Spark app
- [ ] I tested it with at least 2 crops and my hardiness zone
- [ ] I evaluated the app for accuracy, completeness, and relevance
- [ ] I identified at least one thing I would change
- [ ] I watched the instructor refine the app based on feedback

**Raise your hand when you've completed the checkpoint.**

---

## Part 2: Build Your Own --- Independent Practice (35 minutes)

**Build a simple farm tool with Spark, then test and refine it.**

### Choose Your Scenario

Pick the scenario that best matches your farm:

---

#### Scenario A: Seed Order Calculator (Crops)

**What you'll build:** A calculator where you enter field size and seeding rate, and it tells you how many seed bags to order.

**Step 1 --- Describe (5 minutes):**

Open GitHub Spark and write a prompt. Here's a starting point (customize it for your farm):

> Build a seed order calculator for [YOUR CROP]. I enter my field size in acres and my target seeding rate in [seeds/plants] per acre. The calculator shows the total seeds needed and the number of bags to order. Each bag contains [YOUR BAG SIZE] seeds. Display the results in large, clear text. Add a note at the bottom reminding me to order 10% extra for replanting.

**Step 2 --- Review (10 minutes):**

Test the calculator with numbers you know:

| Test | Field Size | Seeding Rate | Expected Result | Spark's Result | Correct? |
|------|-----------|-------------|----------------|---------------|----------|
| Test 1 | | | | | Yes / No |
| Test 2 | | | | | Yes / No |
| Test 3 | | | | | Yes / No |

**Step 3 --- Refine (10 minutes):**

Based on your testing, ask Spark to fix or improve at least one thing. Examples:
- "The bag size is wrong --- change it to 80,000 seeds per bag"
- "Add a second crop option so I can calculate for both corn and soybeans"
- "Add a field for seed cost per bag so it also shows total cost"
- "Make the text bigger and add a farm-green color scheme"

Write the refinement prompt you used:
> _________________________________________________________

Did the refinement work? What changed?
> _________________________________________________________

---

#### Scenario B: Equipment Inspection Checklist App (Equipment)

**What you'll build:** An interactive checklist for pre-season equipment inspection that you can use on a phone or tablet.

**Step 1 --- Describe (5 minutes):**

Open GitHub Spark and write a prompt. Here's a starting point (customize it for your equipment):

> Build an equipment inspection checklist app for a farm. Include sections for: [YOUR EQUIPMENT, e.g., "tractor, combine, planter, and sprayer"]. Each piece of equipment has checkboxes for: oil and fluid levels, tires or tracks, belts and hoses, safety equipment, and lights. Show a progress bar at the top that fills up as I check items off. Add a notes field at the bottom for each piece of equipment.

**Step 2 --- Review (10 minutes):**

Go through the checklist as if you were inspecting your equipment:

| Equipment | All Items Listed? | Missing Items? | Notes Field Works? | Would You Use This? |
|-----------|------------------|---------------|--------------------|--------------------|
| | Yes / No | | Yes / No | Yes / No |
| | Yes / No | | Yes / No | Yes / No |
| | Yes / No | | Yes / No | Yes / No |

**Step 3 --- Refine (10 minutes):**

Ask Spark to improve the app. Examples:
- "Add my ATV to the equipment list with checkboxes for battery, brakes, and tires"
- "Add a date field at the top so I know when the inspection was done"
- "Change the order so tractor comes first, then combine"
- "Add a 'Pass / Fail' button for each piece of equipment"

Write the refinement prompt you used:
> _________________________________________________________

Did the refinement work? What changed?
> _________________________________________________________

---

#### Scenario C: Daily Livestock Health Log (Livestock)

**What you'll build:** A simple form for recording daily animal health observations.

**Step 1 --- Describe (5 minutes):**

Open GitHub Spark and write a prompt. Here's a starting point (customize it for your animals):

> Build a daily livestock health log for a [YOUR HERD SIZE]-head [YOUR ANIMAL TYPE] operation. The form has: a date field (defaults to today), a dropdown to select animal ID or name, checkboxes for appetite (normal/reduced/none), movement (normal/limping/not moving), and body condition (good/fair/poor). Add a text box for notes. When I click "Save Entry," it adds the record to a list below the form showing all entries for the day.

**Step 2 --- Review (10 minutes):**

Test the log by entering sample records:

| Entry | Animal ID | Appetite | Movement | Notes | Saved Correctly? |
|-------|----------|----------|----------|-------|-----------------|
| 1 | | | | | Yes / No |
| 2 | | | | | Yes / No |
| 3 | | | | | Yes / No |

**Step 3 --- Refine (10 minutes):**

Ask Spark to improve the log. Examples:
- "Add a temperature field where I can enter the animal's temperature in Fahrenheit"
- "Add a dropdown for treatment given (none, antibiotics, anti-inflammatory, dewormer, other)"
- "Color-code the saved entries: green for all-normal, yellow for any concern, red for multiple concerns"
- "Add my animal names to the dropdown: [list your animals]"

Write the refinement prompt you used:
> _________________________________________________________

Did the refinement work? What changed?
> _________________________________________________________

---

### Part 3: Compare Manual vs. AI-Built Approaches (5 minutes)

Think about the tool you just built. Now imagine doing the same task WITHOUT Spark:

| Comparison | With Spark | Without Spark (Manual Approach) |
|------------|-----------|-------------------------------|
| **How would you do this task?** | Built an app | (e.g., paper form, spreadsheet, mental math) |
| **Time to create the tool** | ___ minutes | ___ minutes (estimate) |
| **Can you update it easily?** | Yes --- ask Spark to change it | Depends on the format |
| **Can you use it on your phone?** | Yes --- it's a web page | Depends |
| **How accurate is it?** | Needs testing | Depends on your method |
| **Would you trust it for real decisions?** | After verifying | After verifying |

**Answer these questions:**

1. What's the biggest advantage of building with Spark?
2. What's the biggest risk or limitation?
3. Would you use this tool on your farm? Why or why not?
4. What manual method (paper, spreadsheet, memory) does this replace --- or does it?

---

### Independent Practice Checklist

- [ ] I chose a scenario (A, B, or C)
- [ ] I wrote a description prompt for Spark
- [ ] Spark built a working app from my description
- [ ] I tested the app with real or realistic data
- [ ] I identified at least one thing to improve
- [ ] I asked Spark to refine the app and it made the change
- [ ] I compared the Spark approach to doing the task manually
- [ ] I answered the reflection questions

---

## Stretch Challenges

**Finished early? Try one of these:**

1. **Try a different scenario:** Pick a second scenario from the list and build a second tool. Is the process faster the second time?

2. **Add features:** Ask Spark to add two more features to your app. For example, add export to a printable list, add a summary section, or add color coding.

3. **Agent exploration:** Open Copilot Chat in your farm repository and try a multi-step request: "Look at my open Issues and suggest which three to work on this week, in priority order." Evaluate the agent's response --- did it understand your repository?

4. **Peer review:** Show your Spark app to your partner. Have them test it. Can they break it? Do they suggest improvements you didn't think of?

5. **Teach the concept:** Write a 3-sentence explanation of Spark that you could share with a fellow farmer who has never heard of it. Use plain language and a farm analogy.

---

## Troubleshooting Guide

**If something goes wrong, check here first:**

| Problem | What to Check | How to Fix |
|---------|--------------|------------|
| I can't access Spark | Your account may need Spark enabled | Check GitHub settings or ask the instructor |
| Spark isn't building anything | Your prompt may be too vague | Add more detail: what the tool does, what inputs it takes, what output it shows |
| The app doesn't work correctly | The calculations or logic may be wrong | Test with known answers and ask Spark to fix specific errors: "The bag calculation is wrong --- 1,280,000 divided by 80,000 should be 16 bags" |
| The app looks confusing | The layout may need improvement | Ask Spark: "Simplify the layout. Put inputs at the top and results at the bottom in large text" |
| I can't figure out how to refine | Refinement is just another prompt | Type what you want changed in plain English: "Add a date field" or "Change the color to green" |
| Spark built something completely different from what I asked | Your description may have been ambiguous | Rewrite with more specific details about inputs, outputs, and what the tool should do |
| The app doesn't save data | Spark apps may not persist data | This is a limitation; ask the instructor about alternatives for data storage |

**Still stuck?** Raise your hand and the instructor will help.

---

## Reflection Questions

After completing the exercise, discuss with your partner:

1. **What surprised you most about Spark?** Was it easier or harder than you expected to build a tool?
2. **How does building a tool compare to writing an Issue with Copilot?** What's similar? What's different?
3. **What simple tool would help your farm the most?** Describe it in one sentence.
4. **When would you trust a Spark-built tool?** What would you need to verify first?
5. **How do you feel about agents handling multi-step tasks?** What would you want to approve before the agent acts?
6. **On a scale of 1-5, how confident do you feel using Spark to build a simple tool?** What would increase your confidence?

---

## Evaluation Checklist

Use this checklist to evaluate your Spark app before sharing it with others:

### Functionality
- [ ] The app accepts the inputs I described
- [ ] The app produces the outputs I expected
- [ ] Calculations or logic are correct (verified with known answers)
- [ ] The app handles edge cases (zero, very large numbers, empty fields)

### Usability
- [ ] The layout is clear and easy to understand
- [ ] Labels tell you what to enter in each field
- [ ] Results are displayed in a way that's easy to read
- [ ] The app works on a phone-sized screen (if applicable)

### Relevance
- [ ] The tool addresses a real task on my farm
- [ ] The inputs and outputs match my actual needs
- [ ] I would consider using this tool (after verification)

---

## Success Criteria

You have successfully completed this lab if:

- **Minimum:** You explored the pre-built Spark app, built your own Spark app from a description, and tested it
- **Target:** You also refined your app based on testing, compared Spark to manual approaches, and articulated when each is most useful
- **Stretch:** You built a second app, explored agent capabilities, or peer-reviewed a partner's Spark app
