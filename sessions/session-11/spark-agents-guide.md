# Spark & Agents Guide

> **Session 11 Quick Reference --- Keep this handout for future use**
> **GitHub Spark & Agents: AI Tools That Build and Act for You**

---

## What Is GitHub Spark?

GitHub Spark is an AI tool that builds simple web apps from plain English descriptions. Think of it as a farmhand who can build you a simple tool --- a calculator, a checklist, a form --- from just your description of what you need. You don't need to write any code. You describe what the tool should do, Spark builds it, you test it, and you tell Spark to fix anything that isn't right.

Spark apps run in your web browser, so you can use them on a computer, phone, or tablet --- even out in the field.

---

## How to Access Spark

1. Go to **github.com** and sign in to your account
2. Navigate to **GitHub Spark** (your instructor will provide the direct link)
3. Click **"Create new app"** or the equivalent button
4. Type your description in the prompt box
5. Wait for Spark to build the app
6. Test the app in your browser
7. To make changes, type a new prompt describing what to fix or add

**If you can't access Spark:** Check your GitHub account settings or ask the instructor to verify your access.

---

## Building with Spark: The Three-Step Cycle

### Step 1: Describe

Tell Spark what you want in plain English. Be specific about:
- **What the tool does** (calculates, tracks, logs, displays)
- **What you put in** (field size, animal name, equipment type)
- **What you get out** (number of bags, pass/fail, health record)

### Step 2: Review

Test the app Spark builds:
- Try it with real numbers or data you know the answer to
- Check that calculations are correct
- Make sure all the fields and buttons work
- Read the labels and text for clarity

### Step 3: Refine

Tell Spark what to fix or improve:
- Be specific about what's wrong ("The bag size should be 80,000, not 60,000")
- Describe what you want added ("Add a date field at the top")
- Request layout changes ("Make the result text bigger")

Repeat steps 2 and 3 until the tool works the way you need.

---

## Tips for Writing Good Spark Prompts

### Tip 1: Describe Inputs and Outputs

Tell Spark what you'll type in and what you want to see come out.

| Instead of... | Try... |
|--------------|--------|
| "seed calculator" | "A calculator where I enter field size in acres and seeding rate per acre, and it shows total seeds and number of bags to order" |
| "equipment checklist" | "A checklist with sections for tractor, combine, and planter, each with checkboxes for oil, tires, belts, and safety equipment" |

### Tip 2: Specify Layout and Display

Tell Spark how you want things arranged.

**Examples:**
- "Display the results in large, easy-to-read text"
- "Show a progress bar at the top"
- "Put inputs on the left and results on the right"
- "Use a simple, clean layout that works on a phone screen"

### Tip 3: Include Farm-Specific Details

Give Spark your actual numbers and equipment names.

**Example prompt with details:**
> "Build a seed order calculator for corn. I enter field size in acres (usually 20-80 acres) and seeding rate (usually 30,000-34,000 seeds per acre). Each bag holds 80,000 seeds. Show total seeds needed and bags to order, rounded up. Add a note to order 10% extra."

### Tip 4: Ask for Features You Need

Don't wait for Spark to guess what you want.

**Examples:**
- "Add a notes field at the bottom"
- "Include a reset button to clear all fields"
- "Save each entry in a list below the form"
- "Add a print-friendly version"

### Tip 5: Fix Problems with Specific Feedback

When refining, tell Spark exactly what's wrong and what the right answer should be.

| Vague Refinement | Specific Refinement |
|-----------------|---------------------|
| "Fix the math" | "40 acres times 32,000 seeds equals 1,280,000 seeds. Divided by 80,000 per bag equals 16 bags. The calculator is showing 15. Fix the rounding." |
| "Change the list" | "Add 'ATV' to the equipment list between 'sprayer' and 'trailer,' with checkboxes for battery, brakes, and tires" |

---

## What Are Copilot Agents?

An **agent** is an AI that can follow multi-step instructions --- not just suggest one thing at a time. Think of it as a farmhand you can give a full job to, rather than asking one question at a time.

**What agents can do:**
- Break a big request into smaller steps
- Create multiple Issues from a single description
- Read your repository to understand context
- Suggest changes across several files
- Follow a plan with multiple actions

**What agents cannot do:**
- Make decisions about your priorities
- Act without your review on important steps
- Know your farm's specifics unless you explain them
- Work perfectly every time

---

## Human Oversight Principles

The most important concept for all AI tools: **you stay in charge.**

### Human-in-the-Loop

A person reviews AI work before it takes effect. The AI proposes; you approve.

**Farm analogy:** A farmhand writes up a repair plan and brings it to you before starting the work.

### Guardrails

Limits on what AI can do without asking permission. AI tools have built-in boundaries that prevent them from taking big actions without your say-so.

**Farm analogy:** A fence that keeps the farmhand working in the right pasture.

### Approval Gates

Checkpoints where the AI pauses and waits for your "go ahead" before continuing.

**Farm analogy:** The farmhand asks, "I'm about to order parts. Should I go ahead?" before spending money.

### Building Trust Gradually

Start with small, low-stakes tasks. Verify the results. As you see the AI perform well, you can try bigger tasks.

**Farm analogy:** You wouldn't hand the farm keys to someone on their first day. You start them on simple jobs and work up.

---

## Comparing Your AI Tools

| Tool | What It Does | Best For | You Learned It In |
|------|-------------|----------|-------------------|
| **Copilot** | Suggests text as you write | Drafting Issue descriptions, checklists, and comments | Session 10 |
| **Spark** | Builds simple apps from descriptions | Calculators, checklists, forms, and simple dashboards | Session 11 |
| **Agents** | Follows multi-step instructions | Creating multiple Issues, reviewing PRs, organizing tasks | Session 11 |

**All three share the same workflow:**
1. You give clear instructions (prompt)
2. The AI does work (output)
3. You review and approve (evaluation)

---

## Common Issues and Solutions

| Problem | Solution |
|---------|----------|
| I can't access Spark | Check GitHub settings or ask the instructor to verify access |
| Spark built something different from what I asked | Rewrite your prompt with more specific details about inputs, outputs, and what the tool should do |
| The calculations are wrong | Test with known numbers, then tell Spark exactly what the right answer is and ask it to fix the math |
| The app looks confusing or cluttered | Ask Spark: "Simplify the layout. Put inputs at the top and results at the bottom in large text" |
| I want to add a feature | Describe the feature clearly: "Add a dropdown with these options: [list them]" |
| The app doesn't save my data between sessions | This is a common limitation of simple Spark apps; ask the instructor about data persistence options |
| Copilot agent gave an unexpected response | Try rephrasing your multi-step request with clearer steps and more context about your repository |
| I'm not sure whether to trust the AI output | Always verify with known answers or established references (county extension, equipment manual, vet guidelines) |

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| **GitHub Spark** | A tool that builds simple web apps from plain English descriptions |
| **App** | A small program or tool you use in a web browser (like a calculator or form) |
| **Agent** | An AI that can follow multi-step instructions, working through a plan rather than one suggestion at a time |
| **Natural language** | Everyday English (or any spoken language), as opposed to code or technical commands |
| **Prompt engineering** | The skill of writing clear, specific instructions to get good results from AI tools |
| **Guardrails** | Limits built into AI tools that prevent them from taking actions without your permission |
| **Human-in-the-loop** | The principle that a person reviews and approves AI work before it takes effect |
| **Refine** | Asking Spark to fix or improve an app by describing what needs to change |
| **Approval gate** | A checkpoint where AI pauses and waits for your permission before continuing |

---

*Keep this guide in your folder for future reference. The more you practice with Spark and AI tools, the better your prompts and evaluations will become.*
