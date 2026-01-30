# Session 11: GitHub Spark & Agents

## Slide Deck

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Create
> **Prerequisites:** Sessions 1-10 (GitHub account, repositories, Issues, Projects, Pull Requests, notifications, templates, YAML, Actions, advanced projects, Copilot basics)
> **Theme:** "AI tools that can follow multi-step instructions on their own"
> **Format:** 24pt+ headers, 18pt+ body text, high-contrast, descriptive alt text on all images

---

### Slide 1 --- Title

**GitHub Spark & Agents**
*AI Tools That Can Follow Multi-Step Instructions on Their Own*

Session 11 of 12 --- GitHub Training for Farmers

---

### Slide 2 --- Welcome Back

**Welcome to Session 11!**

So far you've learned to:
- Navigate repositories and track tasks with Issues (Sessions 1-2)
- Organize work with Projects and collaborate with Pull Requests (Sessions 3-4)
- Stay connected with notifications and build templates (Sessions 5-6)
- Understand triggers, YAML, and automated workflows (Sessions 7-8)
- Build advanced project workflows (Session 9)
- Use Copilot as an AI writing assistant (Session 10)

Today you'll meet **two more AI tools** --- one that builds simple web apps from plain English descriptions, and another that can handle multi-step tasks on its own.

---

### Slide 3 --- Why This Matters for YOUR Farm

**Quick Question:**

Have you ever wished you had a simple tool for your farm --- a calculator, a checklist generator, a log --- but didn't know how to build it?

- A planting date calculator that adjusts for your frost zone
- An equipment inspection checklist you can pull up on your phone
- A daily livestock health log that keeps a running record

*What if you could describe what you need in plain English and have it built for you in minutes?*

> Instructor note: Let 3-4 learners share examples of simple tools or calculators they wish they had. Write them on the whiteboard. "Today we're going to learn how to build tools like these without writing a single line of code."

---

### Slide 4 --- What Is GitHub Spark?

**Spark = A Farmhand Who Can Build Simple Tools from Your Description**

Last session, Copilot helped you write text. Spark goes further --- it builds working mini-apps.

Imagine you told a farmhand:

> "I need a simple calculator where I type in my field size and seed rate, and it tells me how many bags of seed to order."

And the farmhand built it for you on the spot.

That's Spark. You describe what you want in plain English, and Spark creates a small, working web page or tool.

- No coding required --- you type what you need in everyday language
- The result is a simple web app you can use in your browser
- You can share it with others on your farm

---

### Slide 5 --- What Spark CAN Do

**Spark is good at:**

- Building simple calculators (seed rate, fertilizer amount, harvest yield estimate)
- Creating interactive checklists and forms
- Making lookup tables (planting dates by crop, vaccination schedules)
- Building simple dashboards that display information clearly
- Creating pages you can open on a phone or tablet in the field

**Think of it like:** A farmhand who can build you a simple clipboard tool overnight --- not a whole barn, but a handy gadget that makes one job easier.

---

### Slide 6 --- What Spark CANNOT Do

**Spark does NOT:**

- Build large or complex software applications
- Connect to external systems (weather APIs, market databases) without extra setup
- Replace professional software (accounting, herd management, precision ag platforms)
- Guarantee the calculations are correct --- you need to verify
- Know YOUR specific farm details unless you tell it

**Think of it like:** The farmhand can build you a rain gauge stand, but not a weather station. Spark makes simple tools, not enterprise software.

**You still need to check the output. If Spark builds a seed calculator, verify the math with a known answer before relying on it.**

---

### Slide 7 --- How Spark Works: The Three Steps

**Building with Spark is a simple cycle:**

| Step | What You Do | Farm Analogy |
|------|-------------|--------------|
| **1. Describe** | Type what you want in plain English | Telling a farmhand what tool you need |
| **2. Review** | Look at what Spark built and test it | Checking the farmhand's work before using it |
| **3. Refine** | Ask Spark to make changes or fix issues | Giving feedback: "Make the handle longer" |

You repeat steps 2 and 3 until the tool works the way you need.

**This is the same prompt-evaluate-edit cycle you learned with Copilot --- just applied to building tools instead of writing text.**

---

### Slide 8 --- Live Demo: Building a Seed Calculator with Spark

**Watch me build a simple seed calculator using Spark.**

I'm going to:
1. Open GitHub Spark
2. Describe what I want: "A seed order calculator for corn"
3. Show you what Spark builds
4. Test the calculator with real numbers
5. Ask Spark to make a change
6. Show the final result

**Just watch for now --- you'll build your own tool next.**

> Instructor note: Navigate to Spark. Type the prompt slowly: "Build me a simple seed order calculator. I enter my field size in acres and my target seeding rate in seeds per acre. It calculates the total seeds needed and how many bags to order (each bag has 80,000 seeds). Show the result clearly with large numbers." Walk through the result. Test with known numbers (e.g., 40 acres x 32,000 seeds/acre = 1,280,000 seeds = 16 bags). If the math is wrong, show learners how to refine: "The calculation is off. Each bag has 80,000 seeds, not 60,000. Fix the bags-per-bag number." This demonstrates the review-and-refine cycle.

---

### Slide 9 --- Writing Good Prompts for Spark

**The same prompting skills from Session 10 apply here --- but now you're describing a TOOL, not just text.**

| Weak Prompt | Strong Prompt |
|-------------|---------------|
| "seed calculator" | "Build a seed order calculator where I enter field size in acres and seeding rate per acre. Calculate total seeds and number of 80,000-seed bags to buy. Display results in large, easy-to-read text." |
| "equipment list" | "Build a checklist app for pre-season equipment inspection. List tractor, combine, planter, and sprayer. Each item has checkboxes for oil, tires, belts, and safety equipment. Show a progress bar at the top." |
| "animal log" | "Build a daily livestock health log where I select an animal ID from a dropdown, enter today's date, check boxes for appetite, movement, and temperature, and type notes. Save each entry in a list below the form." |

**Rule of thumb:** Describe what the tool DOES, what you PUT IN, and what you GET OUT.

---

### Slide 10 --- What Are Copilot Agents?

**Agents = A Farmhand Who Can Follow Multi-Step Instructions on Their Own**

In Session 10, Copilot helped you write --- one suggestion at a time. An **agent** is a step up: it can handle a whole sequence of tasks.

Imagine you told a farmhand:

> "Go check the north field fence line, note any damage, create repair tickets for each section that needs fixing, and put them in priority order."

An agent can do something similar in GitHub:

- Read through your repository
- Identify what needs to be done
- Create Issues, suggest changes, or organize tasks
- Work through multiple steps without you guiding each one

**The key difference:** Copilot suggests one thing at a time. An agent follows a plan with multiple steps.

---

### Slide 11 --- What Agents CAN Do

**Copilot agents are good at:**

- Breaking a big request into smaller steps and working through them
- Creating multiple Issues from a single description
- Suggesting code changes across several files
- Reading your repository to understand context before acting
- Following instructions like "Review this pull request and suggest improvements"

**Think of it like:** The difference between a farmhand who answers one question at a time (Copilot) and a farmhand you can give a full job to and come back later to check (agent).

---

### Slide 12 --- What Agents CANNOT Do

**Agents do NOT:**

- Make decisions about your farm priorities --- you set the direction
- Act without your review and approval on important steps
- Know your farm's specific context unless you explain it
- Replace your judgment about what matters most
- Work perfectly every time --- they can misunderstand or make mistakes

**Think of it like:** Even the most capable farmhand still reports back to you before making big decisions. Agents propose; you approve.

---

### Slide 13 --- Human-in-the-Loop: You Stay in Charge

**The most important concept in AI tools: HUMAN OVERSIGHT**

| Principle | What It Means | Farm Analogy |
|-----------|--------------|--------------|
| **Human-in-the-loop** | A person reviews AI work before it takes effect | Checking the farmhand's work before signing off |
| **Guardrails** | Limits on what AI can do without asking | A fence that keeps the farmhand in the right pasture |
| **Approval gates** | Points where you must say "yes" before the AI continues | The farmhand asks permission before buying supplies |

**Why this matters:**
- AI tools are powerful but not perfect
- Mistakes are easier to prevent than to fix
- Your farming expertise is what makes AI output useful
- Trust is built gradually --- start with small tasks and verify results

**You wouldn't hand the farm keys to someone on their first day. Same idea with agents.**

---

### Slide 14 --- Comparing Your AI Tools

**Three levels of AI help, from simple to advanced:**

| Tool | What It Does | Farm Analogy | You Learned It In |
|------|-------------|--------------|-------------------|
| **Copilot** | Suggests text as you write | A farmhand who finishes your sentences | Session 10 |
| **Spark** | Builds simple apps from descriptions | A farmhand who builds a tool from your sketch | Today |
| **Agents** | Follows multi-step instructions | A farmhand who handles a whole job list | Today |

**All three share the same foundation:**
1. You give clear instructions (prompt)
2. The AI does work for you (output)
3. You review and approve (evaluation)

The skills you practiced in Session 10 --- writing good prompts and evaluating output --- apply to ALL of these tools.

---

### Slide 15 --- Guided Practice Introduction

**Your turn! Follow along with me.**

We'll work through this together, step by step:
1. Explore a pre-built Spark app (a farm tool already created)
2. Test it with your own numbers
3. Identify what works and what you'd change
4. Build a simple modification using the refine step

**Open your lab exercise handout to Part 1.**

If you get stuck:
1. Check the Spark & Agents Guide
2. Ask your partner
3. Raise your hand

**Remember: You're learning to describe what you need and evaluate what you get. There's no wrong answer.**

> Instructor note: Distribute lab exercise and Spark & Agents Guide handouts. Pair learners. Have the pre-built Spark app ready on the projector. Move through steps slowly --- wait for all learners before proceeding.

---

### Slide 16 --- Guided Practice: Exploring a Pre-Built Spark App

**Let's look at a Spark app together.**

I've already built a simple "Planting Date Calculator" using Spark. It lets you:
- Select a crop from a dropdown
- Enter your USDA hardiness zone
- See the recommended planting window

**As a group, let's evaluate this app:**
- Does it give reasonable planting dates?
- What crops are missing that you'd want to add?
- What information would make it more useful?
- Would you trust this on its own, or would you verify with your county extension?

> Instructor note: Open the pre-built Spark app on the projector. Walk through each feature. Ask learners to test it with their own crops and zones. Collect feedback on what's missing or wrong. Use this to demonstrate the "refine" step: "Several of you said it's missing [crop]. Let me ask Spark to add it."

---

### Slide 17 --- BREAK (15 Minutes)

**Take 15 minutes.**

When we come back, you'll build your own Spark app from scratch.

Think about which scenario you want to try:
- **Crops:** Seed order calculator
- **Equipment:** Equipment inspection checklist app
- **Livestock:** Daily health log app

---

### Slide 18 --- Independent Practice

**Your challenge: Build a simple farm tool with Spark and evaluate the result.**

Choose your scenario from the lab exercise:
- **Option A:** Seed Order Calculator (Crops)
- **Option B:** Equipment Inspection Checklist App (Equipment)
- **Option C:** Daily Livestock Health Log (Livestock)

For your scenario:
1. **Describe:** Write a prompt telling Spark what to build --- 5 minutes
2. **Review:** Test what Spark creates with real numbers or data --- 10 minutes
3. **Refine:** Ask Spark to fix or improve at least one thing --- 10 minutes
4. **Compare:** How does this compare to doing it manually? --- 5 minutes
5. **Reflect:** When would you use Spark on your farm? --- 5 minutes

**Stretch challenge:** Try a second scenario, or experiment with adding features to your first app.

---

### Slide 19 --- Independent Practice: Agent Exploration

**Bonus activity: See an agent in action.**

If you finish your Spark app early, try this with your partner:

1. Open Copilot Chat in your farm repository
2. Try a multi-step request:
   - "Look at my open Issues and suggest which ones should be worked on first"
   - "Create three Issues for end-of-season tasks: equipment storage, field cleanup, and record review"
   - "Review my most recent Pull Request and suggest improvements"
3. Evaluate the agent's work: Did it understand your request? Did it break it into reasonable steps? Would you approve its suggestions?

**Remember: The agent proposes, you decide. Don't accept changes without reviewing them.**

> Instructor note: This activity is optional for early finishers. Walk around and help learners compose multi-step requests. If Copilot agent features are limited on free plans, use this as a discussion exercise: "What would you ask an agent to do if it could handle multi-step tasks in your repository?"

---

### Slide 20 --- Sharing Your Results

**Let's see what you built.**

- Who built a calculator? Does the math check out?
- Who built a checklist? Is it something you'd actually use in the field?
- Who built a log? How does it compare to paper records?
- What surprised you about what Spark could (or couldn't) do?
- Did anyone try the agent exploration? What happened?

> Instructor note: Ask 4-5 learners to share. If possible, display one or two Spark apps on the projector. Reinforce that the goal is learning to describe tools clearly and evaluate AI output critically.

---

### Slide 21 --- Key Vocabulary Review

**New terms from today:**

- **GitHub Spark** --- A tool that builds simple web apps from plain English descriptions
- **App** --- A small program or tool you can use in a web browser (like a calculator or form)
- **Agent** --- An AI that can follow multi-step instructions, working through a plan rather than one suggestion at a time
- **Natural language** --- Everyday English (or any spoken language), as opposed to code or technical commands
- **Prompt engineering** --- The skill of writing clear, specific instructions to get good results from AI tools
- **Guardrails** --- Limits built into AI tools that prevent them from taking actions without your permission
- **Human-in-the-loop** --- The principle that a person reviews and approves AI work before it takes effect

---

### Slide 22 --- Reflection

**Think about your farm:**

- What simple tool would save you the most time if Spark built it for you?
- How would you explain the difference between Copilot and an agent to a fellow farmer?
- What's one task you'd trust an agent to handle? What's one you wouldn't?

**Turn to your partner and share your answers. (3 minutes)**

> Instructor note: Walk around and listen. Note which use cases learners find most compelling and any concerns about AI autonomy. These observations will help prepare for the Session 12 capstone.

---

### Slide 23 --- What's Next

**Session 12: Capstone Project --- Putting It All Together**

In our final session, you'll bring together everything you've learned across all 12 sessions to build a complete farm management workflow in GitHub --- from creating a repository to setting up Issues, Projects, templates, automations, and AI tools.

**Optional between-session practice:**
- Open your Spark app and show it to someone on your farm --- get their feedback
- Try building a second Spark tool for a different task
- Practice writing multi-step requests for Copilot
- Think about what you'd include in your capstone project

---

### Slide 24 --- Feedback Survey

**Please fill out the 2-minute survey before you leave.**

---

**Thank you!**

You've gone from learning what a repository is to building your own AI-powered farm tools. That's a big deal. In our final session, you'll put all of these skills together into a complete project. See you there!

---

## UDL Implementation Notes

### Representation (3+ modes)
1. **Visual:** Projected slides with annotated screenshots of Spark interface, comparison tables, and step-by-step workflow diagrams
2. **Verbal:** Instructor narration using "Farmhand" analogy at three levels (suggests text, builds tools, handles jobs); live think-aloud during Spark demo
3. **Written:** Printed Spark & Agents Guide as a take-home quick-reference with prompt tips, vocabulary, and troubleshooting
4. **Tabular:** Comparison tables (Copilot vs. Spark vs. Agents, weak vs. strong prompts, CAN do vs. CANNOT do) provide structured reference
5. **Live demonstration:** Real-time Spark interaction showing prompt input, generated app, testing, and refinement cycle

### Engagement (learner choice)
- **Three scenario options** in lab exercise (crops, equipment, livestock) --- learners choose based on their farm operation
- **Customizable prompts** --- learners describe tools relevant to their specific farm needs
- **"Why This Matters for YOUR Farm"** opening connecting to real tool wishes
- **Optional agent exploration** for early finishers provides extension without pressure
- **Stretch challenges** (build a second app, add features, peer review)
- **Open reflection** --- no single "right answer" about when to use Spark or agents

### Action & Expression (multi-method assessment)
- **L1 (Reaction):** Paper feedback survey
- **L2 (Observation):** 5-skill checklist (access Spark, write a tool prompt, test an app, refine with feedback, explain human oversight)
- **Hands-on product:** Learners build a working Spark app, demonstrating Create-level Bloom's
- **Verbal reflection:** Partner discussion on "What tool would help your farm most?"
- **Written evaluation:** Learners complete a testing checklist for their Spark app in the lab exercise
- **Self-assessment:** Completion checklist embedded in lab exercise for learner self-monitoring
