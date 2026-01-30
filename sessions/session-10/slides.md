# Session 10: GitHub Copilot Basics

## Slide Deck

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Evaluate / Create
> **Prerequisites:** Sessions 1-9 (GitHub account, repositories, Issues, Projects, Pull Requests, notifications, templates, YAML, Actions, advanced projects)
> **Theme:** "Your AI assistant for farm task writing"
> **Format:** 24pt+ headers, 18pt+ body text, high-contrast, descriptive alt text on all images

---

### Slide 1 --- Title

**GitHub Copilot Basics**
*Your AI Assistant for Farm Task Writing*

Session 10 of 12 --- GitHub Training for Farmers

---

### Slide 2 --- Welcome Back

**Welcome to Session 10!**

So far you've learned to:
- Navigate repositories and track tasks with Issues (Sessions 1-2)
- Organize work with Projects and collaborate with Pull Requests (Sessions 3-4)
- Stay connected with notifications and build templates (Sessions 5-6)
- Understand triggers, YAML, and automated workflows (Sessions 7-8)
- Build advanced project workflows (Session 9)

Today you'll meet your **AI writing assistant** --- a tool that helps you draft task descriptions faster so you can spend more time farming and less time typing.

---

### Slide 3 --- Why This Matters for YOUR Farm

**Quick Question:**

Have you ever stared at a blank Issue and thought, "I know what needs doing, but writing it all out takes forever"?

- Describing every step of spring planting prep
- Writing out a full equipment maintenance checklist
- Detailing a livestock vaccination schedule with dates, dosages, and animals

*Writing detailed task descriptions takes time. What if you had a helper who could write a first draft for you?*

> Instructor note: Let 3-4 learners share examples of tasks that are hard to put into writing. "Today we're going to meet a tool that gives you a head start on that writing."

---

### Slide 4 --- What Is GitHub Copilot?

**Copilot = A Knowledgeable Farmhand Who Suggests What to Write**

Imagine you hired an experienced farmhand. You say:

> "I need to write up the spring planting prep checklist."

And the farmhand says:

> "How about this? Step 1: Test soil moisture. Step 2: Order seeds. Step 3: Calibrate the planter..."

That's Copilot. You give it a brief description, and it **suggests a draft** for you.

- It reads what you've started typing and offers the next words
- It can draft entire Issue descriptions from a short prompt
- It works right inside GitHub --- no extra software needed

---

### Slide 5 --- What Copilot CAN Do

**Copilot is good at:**

- Drafting Issue descriptions from a short prompt
- Suggesting checklists and step-by-step task breakdowns
- Filling in common details you might forget to include
- Helping you organize your thoughts into a clear structure
- Writing faster than typing everything from scratch

**Think of it like:** A farmhand who has read a lot of farming books and can suggest what to include in your work orders.

---

### Slide 6 --- What Copilot CANNOT Do

**Copilot does NOT:**

- Know YOUR specific farm (your fields, your animals, your equipment)
- Replace your farming knowledge and experience
- Guarantee accuracy --- it can suggest wrong information
- Make decisions for you about what tasks to prioritize
- Know your local conditions, soil type, or climate

**Think of it like:** The farmhand is knowledgeable but brand new to YOUR farm. They'll suggest reasonable things, but you need to check their work and correct anything that doesn't fit your operation.

**You are the expert on your farm. Copilot is just the helper.**

---

### Slide 7 --- The Human + AI Partnership

**How to Think About Copilot:**

| Role | What They Do |
|------|-------------|
| **You (the farmer)** | Know your farm, set priorities, make decisions, verify accuracy |
| **Copilot (the helper)** | Suggests drafts, fills in structure, saves typing time |

**The best results come from working together:**
1. You provide the context ("I need a spring planting checklist for my 40-acre corn field")
2. Copilot drafts a suggestion
3. You review, edit, and approve

*Your knowledge + Copilot's speed = better task descriptions in less time.*

---

### Slide 8 --- How to Access Copilot in GitHub

**Accessing Copilot on the Web:**

1. Go to your repository on GitHub
2. Click the **Issues** tab
3. Click **"New issue"**
4. In the Issue description box, look for the **Copilot icon** (a small sparkle or robot icon)
5. Click the icon or start typing and watch for Copilot suggestions

**You may also see Copilot in:**
- Pull Request descriptions
- Comment boxes
- The Copilot Chat sidebar (a chat panel on the right side of the screen)

> Instructor note: Show the exact location of the Copilot icon on the projector. If learners have GitHub Free accounts, Copilot Chat may have limited access --- verify before the session. Show both the inline suggestion and the chat sidebar.

---

### Slide 9 --- Writing Good Prompts: How to Ask Copilot for Help

**A prompt is what you type to tell Copilot what you need.**

**The secret to good Copilot results: Be specific and provide context.**

| Weak Prompt | Strong Prompt |
|-------------|---------------|
| "planting" | "Write an Issue description for spring planting prep on a 40-acre corn and soybean farm in Iowa, including soil testing, seed ordering, and equipment calibration" |
| "fix tractor" | "Create a checklist for annual tractor maintenance including oil change, filter replacement, tire inspection, and hydraulic system check for a John Deere 6M series" |
| "vaccinate cows" | "Draft a livestock vaccination schedule for a 50-head beef cattle herd, covering spring boosters, deworming, and required state health certificates" |

**Rule of thumb:** The more detail you give, the better the draft you get back.

---

### Slide 10 --- Five Tips for Better Prompts

**When asking Copilot for help, remember these five tips:**

1. **Be specific** --- Name the task, the crop, the animal, or the equipment
2. **Give context** --- Mention your farm size, location, or season
3. **Say what format you want** --- "Write a checklist," "Create a step-by-step plan," "Draft an Issue with sections"
4. **Include key details** --- Dates, quantities, names of fields or animals
5. **Ask for what's missing** --- "Include a section for supplies needed" or "Add estimated time for each step"

**Think of it like giving directions to a new farmhand.** The clearer your instructions, the better they can help.

---

### Slide 11 --- Live Demo: Using Copilot to Draft a Farm Issue

**Watch me use Copilot to draft a spring planting prep Issue.**

I'm going to:
1. Open my demo repository
2. Click **Issues** > **New issue**
3. Type a title: "Spring Planting Prep - North Field"
4. Use Copilot to generate a draft description
5. Show you what Copilot suggests
6. Review the draft for accuracy and completeness
7. Edit the draft to fit my specific farm

**Just watch for now --- you'll do this yourself next.**

> Instructor note: Type the prompt slowly so learners can follow along. Use Copilot Chat or inline suggestions depending on what is available. Narrate your thought process: "I'm going to ask Copilot to write a checklist for spring planting. Let me be specific about what I need..." After receiving the suggestion, deliberately point out something Copilot got wrong or generic. "See here, Copilot suggested rice paddy preparation --- that doesn't apply to my corn farm. I need to change that."

---

### Slide 12 --- Evaluating Copilot's Output

**After Copilot gives you a draft, ask yourself three questions:**

**1. Is it ACCURATE?**
- Are the facts correct?
- Are the steps in the right order?
- Did it suggest anything wrong or irrelevant?

**2. Is it COMPLETE?**
- Did it cover all the steps I need?
- Is anything missing that I know is important?
- Are there enough details for someone else to follow?

**3. Is it RELEVANT to MY farm?**
- Does it match my specific crops, animals, or equipment?
- Does it reflect my local conditions and practices?
- Would this actually work on MY operation?

**Think of it like reviewing a new farmhand's work.** You wouldn't just accept it without checking --- you'd read it over and make corrections.

---

### Slide 13 --- Evaluation Example

**Copilot drafted this for "spring planting prep":**

> - Test soil pH and nutrient levels
> - Order seeds based on last year's yield data
> - Calibrate planter for correct seed spacing
> - Check irrigation system for winter damage
> - Prepare herbicide application schedule
> - Schedule field crew for planting week

**Farmer's Evaluation:**

- Accurate? Mostly --- but we do no-till, so "prepare herbicide schedule" should say "prepare cover crop termination plan"
- Complete? Missing --- need to add "check seed treatment" and "file crop insurance paperwork"
- Relevant? Close --- but we don't have an irrigation system, we're dryland. Remove that step.

**Result:** A good starting point, but needs editing before it's ready.

---

### Slide 14 --- Editing and Customizing Copilot Drafts

**How to Edit a Copilot Draft:**

1. **Accept the parts that are correct** --- keep what works
2. **Delete anything wrong or irrelevant** --- remove steps that don't apply
3. **Add your own details** --- fill in farm-specific information
4. **Reorder if needed** --- put steps in the right sequence for your operation
5. **Add context** --- include field names, equipment models, deadlines

**This is the most important step.** Copilot gives you the raw material; you shape it into something useful for YOUR farm.

*The draft is a starting point, not a finished product.*

---

### Slide 15 --- Manual vs. Copilot: When Is AI Most Helpful?

**When Copilot saves you the most time:**

- Long, detailed checklists with many steps
- Repeating tasks you need to describe clearly
- Tasks where you know WHAT to do but struggle with WRITING it out
- Getting past a blank page when you're not sure where to start

**When writing manually is better:**

- Short, simple tasks ("Fix broken fence post in north pasture")
- Highly specific tasks only you understand
- When you want full control over every word
- Quick notes that don't need structure

**The best approach:** Use Copilot for the first draft, then edit. Save your typing energy for the parts that require your expertise.

---

### Slide 16 --- Side-by-Side Comparison

**The same task, two approaches:**

| | Manual (No Copilot) | With Copilot |
|---|---------------------|--------------|
| **Time** | 10-15 minutes typing | 2-3 minutes prompting + 5 minutes editing |
| **Effort** | Think of every step yourself | Copilot suggests steps, you review |
| **Quality** | Exactly what you want from the start | Good draft that needs your edits |
| **Best for** | Short, unique tasks | Long, structured checklists |

**Neither approach is always better.** The goal is knowing when each one helps most.

---

### Slide 17 --- Guided Practice Introduction

**Your turn! Follow along with me.**

We'll work through this together, step by step:
1. Open your farm repository
2. Create a new Issue
3. Use Copilot to generate a draft description
4. Evaluate the draft (accurate? complete? relevant?)
5. Edit the draft to fit your farm

**Open your lab exercise handout to Part 1.**

If you get stuck:
1. Check the Copilot Getting Started Guide
2. Ask your partner
3. Raise your hand

**Remember: There's no wrong answer. You're learning to work WITH an AI tool, not to get a perfect result on the first try.**

> Instructor note: Distribute lab exercise and Copilot Getting Started Guide handouts. Pair learners. Move through steps slowly --- wait for all learners before proceeding.

---

### Slide 18 --- BREAK (15 Minutes)

**Take 15 minutes.**

When we come back, you'll create Issues both WITH and WITHOUT Copilot and compare the results.

Think about which scenario you want to try:
- **Crops:** Spring planting prep checklist
- **Equipment:** Equipment maintenance schedule
- **Livestock:** Livestock vaccination plan

---

### Slide 19 --- Independent Practice

**Your challenge: Compare manual writing vs. Copilot-assisted writing.**

Choose your scenario from the lab exercise:
- **Option A:** Spring Planting Prep Checklist (Crops)
- **Option B:** Equipment Maintenance Schedule (Equipment)
- **Option C:** Livestock Vaccination Plan (Livestock)

For your scenario:
1. **First:** Write an Issue description manually (no Copilot) --- 10 minutes
2. **Then:** Use Copilot to draft an Issue for a related task --- 10 minutes
3. **Compare:** Which was faster? Which was more complete? Which did you prefer?
4. **Reflect:** When would you use Copilot on your farm?

**Stretch challenge:** Try a second scenario, or experiment with different prompts to see how the output changes.

---

### Slide 20 --- Sharing Your Results

**Let's see what you created.**

- Who found that Copilot saved them time? How much?
- Who found something Copilot got wrong? What was it?
- Who ended up preferring the manual version? Why?
- What was the most useful thing Copilot suggested?

> Instructor note: Ask 4-5 learners to share. Reinforce that there are no wrong answers --- the goal is to understand when AI is helpful and when it isn't.

---

### Slide 21 --- Key Vocabulary Review

**New terms from today:**

- **GitHub Copilot** --- An AI assistant built into GitHub that suggests text and drafts based on what you type
- **Prompt** --- The instruction or description you give Copilot to tell it what you need
- **Draft** --- The text Copilot generates for you to review and edit
- **Evaluate** --- Checking Copilot's output for accuracy, completeness, and relevance
- **AI assistant** --- A tool that helps with tasks but requires human oversight and judgment

---

### Slide 22 --- Reflection

**Think about your farm:**

- What task description would save you the most time if Copilot helped draft it?
- How would you explain Copilot to a fellow farmer who has never seen it?
- When would you trust Copilot's suggestions, and when would you write from scratch?

**Turn to your partner and share your answers. (3 minutes)**

> Instructor note: Walk around and listen. Note which use cases learners find most compelling and any remaining skepticism about AI tools.

---

### Slide 23 --- What's Next

**Session 11: GitHub Spark and Copilot Agents**

You'll learn about more advanced AI tools that can do more than just suggest text --- they can help you build small apps and automate tasks. Think of it as upgrading from a farmhand who suggests what to write to one who can follow multi-step instructions on their own.

**Optional between-session practice:**
- Use Copilot to draft at least one real Issue for your farm repository
- Try different prompts and compare the results
- Practice evaluating and editing Copilot drafts
- Note which tasks Copilot helped with most

---

### Slide 24 --- Feedback Survey

**Please fill out the 2-minute survey before you leave.**

---

**Thank you!**

You now have an AI writing assistant at your fingertips. It won't replace your farming expertise, but it can save you time on the paperwork so you can focus on what matters --- your farm.

---

## UDL Implementation Notes

### Representation (3+ modes)
1. **Visual:** Projected slides with annotated screenshots of Copilot interface, prompt/response examples, and side-by-side comparison tables
2. **Verbal:** Instructor narration using "Knowledgeable Farmhand" analogy throughout; live think-aloud during demo showing evaluation thought process
3. **Written:** Printed Copilot Getting Started Guide as a take-home quick-reference with prompt tips and evaluation checklist
4. **Tabular:** Comparison tables (manual vs. Copilot, weak vs. strong prompts, CAN do vs. CANNOT do) provide structured reference
5. **Live demonstration:** Real-time Copilot interaction showing prompt input, generated output, evaluation, and editing process

### Engagement (learner choice)
- **Three scenario options** in lab exercise (crops, equipment, livestock) --- learners choose based on their farm operation
- **Customizable prompts** --- learners write their own prompts relevant to their specific farm context
- **"Why This Matters for YOUR Farm"** opening connecting to real writing frustrations
- **Manual vs. Copilot comparison** gives learners evidence to form their own opinions about AI usefulness
- **Stretch challenges** for early finishers (try a second scenario, experiment with different prompts)
- **Open reflection** --- no single "right answer" about when to use Copilot

### Action & Expression (multi-method assessment)
- **L1 (Reaction):** Paper feedback survey
- **L2 (Observation):** 5-skill checklist (access Copilot, write a prompt, evaluate output, edit a draft, compare approaches)
- **Hands-on product:** Learners produce both a manually written Issue and a Copilot-assisted Issue, demonstrating comparison at Evaluate level
- **Verbal reflection:** Partner discussion on "When would you use Copilot on your farm?"
- **Written evaluation:** Learners annotate Copilot output with accuracy/completeness/relevance notes in the lab exercise
- **Self-assessment:** Completion checklist embedded in lab exercise for learner self-monitoring
