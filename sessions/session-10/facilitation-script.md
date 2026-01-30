# Facilitation Script: Session 10 --- GitHub Copilot Basics

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Evaluate / Create
> **Practice Time:** 95 minutes (Demo follow-along 15 + Guided 20 + Independent 35 + Reflection/sharing 25) = ~58%
> **Prerequisites:** Sessions 1-9 (GitHub account, repository, Issues, Projects, Pull Requests, templates, YAML, Actions, advanced projects)
> **Key Analogies:** Copilot = Knowledgeable farmhand who suggests what to write; Prompt = Giving directions to a new helper; Evaluation = Checking the farmhand's work; Editing = Making corrections before posting the work order
> **Theme:** "Your AI assistant for farm task writing"

---

## Pre-Session Checklist

- [ ] Demo repository is open in the browser on the projector
- [ ] **Copilot access verified for ALL learners** --- check each GitHub account before the session begins (Settings > Copilot)
- [ ] If any learners lack Copilot access, have a plan: pair them with a partner who has access, or prepare printed screenshots of Copilot output
- [ ] Test Copilot on the demo repository: create a new Issue and confirm Copilot suggestions appear (inline or via Copilot Chat)
- [ ] Prepare 3 sample prompts in a text file for quick copy-paste during the demo:
  - Crops prompt (spring planting prep)
  - Equipment prompt (maintenance schedule)
  - Livestock prompt (vaccination plan)
- [ ] Lab exercise handouts printed (one per learner)
- [ ] Copilot Getting Started Guide handouts printed (one per learner)
- [ ] Feedback surveys ready (paper or digital)
- [ ] Seating arranged for pairs
- [ ] Wi-Fi tested on instructor and learner devices
- [ ] Whiteboard or flip chart available for writing learner responses during the hook and sharing session
- [ ] Have backup: printed screenshots of Copilot interface, sample prompts, and sample Copilot output in case of internet or Copilot service issues
- [ ] Prepare a short "What Copilot is NOT" talking point to set expectations early --- learners may have heard hype or fears about AI

---

## Session Timeline

| Time | Duration | Phase | Activity |
|------|----------|-------|----------|
| 0:00 | 10 min | Welcome & Hook | Why writing task descriptions is hard; introduce the AI helper |
| 0:10 | 15 min | Concrete Experience | Live demo --- use Copilot to draft a farm Issue |
| 0:25 | 20 min | Reflective Observation | Guided practice --- learners use Copilot, evaluate, and edit |
| 0:45 | 20 min | Abstract Conceptualization | Prompting tips, evaluation framework, manual vs. Copilot |
| 1:05 | 15 min | **BREAK** | Stretch, questions, tech help |
| 1:20 | 35 min | Active Experimentation | Independent practice --- manual vs. Copilot comparison |
| 1:55 | 15 min | Reflection & Sharing | Partner discussion + group sharing |
| 2:10 | 10 min | Wrap-Up | Vocabulary, preview Session 11, feedback survey |
| 2:20 | 10 min | Buffer | Catch-up, 1-on-1 help, survey collection |

**Practice Time:** 95 min (demo follow-along + guided + independent + reflection/sharing) = ~58%
**Lecture/Concept Time:** ~45 min

---

## Phase 1: Welcome & Hook (10 min) --- 0:00

**[Slide 1-2: Title, Welcome Back]**

> "Good [morning/afternoon]. Welcome to Session 10. You've come a long way --- nine sessions in, and you can track tasks, organize projects, collaborate, build templates, and automate workflows. Today we're adding one more tool to your belt --- an AI assistant that helps you write."

> "The tool is called GitHub Copilot, and by the end of today, you'll know how to use it, when to use it, and --- just as importantly --- when NOT to use it."

**[Slide 3: Why This Matters for YOUR Farm]**

> "Let me ask you something. Raise your hand if you've ever sat down to write a task description --- maybe an Issue for spring planting prep or an equipment checklist --- and thought, 'I know exactly what needs to happen, but writing it all out is going to take a while.'"

*Pause. Most hands should go up.*

> "That's normal. Farming knowledge lives in your head and your hands. Turning it into written words takes time and effort. What if you had someone who could write the first draft for you --- and then you just checked their work and made corrections?"

> "That's what Copilot does. It's like a knowledgeable farmhand who's read a lot of farming books. You tell it what you need, and it suggests a draft. But here's the key --- it doesn't know YOUR farm. You're the expert. Copilot is just the helper."

> "Who wants to share a task that's hard to write up? Something where you know what to do but writing it down takes forever?"

*Let 3-4 learners answer. Write key examples on the whiteboard.*

> "Great examples. Those are exactly the kinds of tasks where Copilot can save you time. Let's see how it works."

---

## Phase 2: Concrete Experience --- Live Demo (15 min) --- 0:10

**[Slide 4-6: What Is Copilot, What It CAN Do, What It CANNOT Do]**

> "Before I show you Copilot, let me set expectations. Copilot is an AI tool built into GitHub. Think of it as a knowledgeable farmhand who suggests what to write next."

> "What can Copilot do? It can draft Issue descriptions, suggest checklists, help you organize your thoughts, and save you typing time. That's the good part."

> "What can't it do? It doesn't know your farm. It doesn't know your specific fields, your particular tractor model, or your local soil conditions. It can also be wrong --- it might suggest steps that don't apply to your operation, or miss steps that are critical for you."

*Pause and make eye contact.*

> "This is important: **You are the expert. Copilot is the helper.** You always review its work before using it. Just like you'd check a new farmhand's work before trusting them to do it unsupervised."

**[Slide 7: The Human + AI Partnership]**

> "Think of it as a partnership. You provide the context and make the decisions. Copilot provides the speed and the first draft."

**[Slide 8: How to Access Copilot]**

> "Now let me show you how it works. Watch my screen."

*Switch to the browser. Navigate to the demo repository.*

> "I'm in my demo farm repository. I'm going to click the Issues tab, then 'New issue.'"

*Click Issues > New issue.*

> "I'll type a title: 'Spring Planting Prep - North Field.' Now I'll click in the description box."

*Click in the description area.*

> "See this icon here? [Point to the Copilot icon.] That's Copilot. I'm going to click it."

*Click the Copilot icon or open Copilot Chat.*

**[Slide 11: Live Demo]**

> "Now I need to tell Copilot what I want. This is called a 'prompt' --- it's just the instructions I give the helper. Watch what I type."

*Type the prompt slowly so learners can follow:*

> "I'm typing: 'Write an Issue description for spring planting preparation on a 40-acre corn and soybean farm in central Illinois. Include a checklist with soil testing, seed ordering, equipment calibration, and field preparation. Use markdown checkboxes.'"

> "Notice how specific I'm being. I said the farm size, the crops, the location, and exactly what sections I want. The more detail I give, the better the draft I get back."

*Submit the prompt. Wait for Copilot to generate output.*

> "Look at that. Copilot just wrote a full draft in a few seconds. Let me read through it with you."

*Read through the output slowly. Point to specific items.*

> "Soil testing --- yes, that's right. Seed ordering --- good. Calibrate planter --- makes sense."

*Now point to something generic or incorrect.*

> "But look here --- Copilot suggested 'prepare rice paddies.' I don't grow rice. And here it says 'schedule aerial spraying' --- I don't do aerial spraying on 40 acres. These are the kinds of things Copilot gets wrong because it doesn't know MY farm."

> "So what do I do? I keep the good parts and fix the rest."

*Edit the draft in the description box: delete irrelevant items, add farm-specific details, reorder if needed.*

> "I deleted the rice paddy step, changed 'aerial spraying' to 'calibrate ground sprayer,' and added 'file crop insurance paperwork' because that's something I always need to do but Copilot didn't mention."

> "Now I'll submit the Issue."

*Click Submit new issue. Open the Issue to show the final result.*

> "That took me about 3 minutes total --- prompting, reviewing, editing. If I'd written that from scratch, it would have taken 10-15 minutes. That's the value of Copilot: it gets you started fast, and you finish it with your expertise."

**Managing Expectations:**

> "A few things to keep in mind. Copilot will give different results every time, even with the same prompt. Your output won't look exactly like mine. That's fine --- the goal is a useful starting point, not a perfect first draft."

---

## Phase 3: Reflective Observation --- Guided Practice (20 min) --- 0:25

**[Slide 17: Guided Practice Introduction]**

> "Your turn. We're going to do this together, step by step. Open your lab exercise handout to Part 1: Guided Practice."

*Distribute handouts if not already done.*

> "Everyone, open your farm repository in your browser. Click the Issues tab, then 'New issue.' Got it?"

*Wait. Scan the room.*

> "Type this title: 'Spring Planting Prep - Practice Issue.'"

*Wait for everyone.*

> "Now click in the description box and find the Copilot icon. If you see it, click it. If you don't see it, raise your hand."

*Walk around. Help anyone who doesn't see Copilot. For learners without access, pair them with a neighbor.*

> "Now write a prompt. You can use the one on your handout or write your own. Remember the tips: be specific, give context, and tell Copilot what format you want."

*Give learners 2-3 minutes to write and submit their prompt.*

> "Did everyone get a response? Hold up a thumb if Copilot gave you a draft."

*Check the room. Help anyone who didn't get a response.*

> "Great. Now here's the important part. Don't just accept what Copilot wrote. Evaluate it. On your handout, Step 4 has an evaluation checklist. Go through it: Is the draft accurate? Is it complete? Is it relevant to YOUR farm? Write your notes in the table."

*Give learners 3-4 minutes to evaluate.*

> "Who found something Copilot got wrong?"

*Let 2-3 learners share examples. Reinforce that this is normal and expected.*

> "Perfect. That's exactly why we evaluate. Now edit the draft. Delete what doesn't belong, add what's missing, fix the wording. Make it yours."

*Give learners 3-4 minutes to edit.*

> "When you're done editing, submit the Issue. Then check the guided practice checkpoint on your handout."

*Walk around and verify. Help anyone who is stuck.*

### Guided Practice Checkpoint

> "Show of hands. Who has:"
> - "Used Copilot to generate a draft?" *Count hands.*
> - "Evaluated the draft and found something to change?" *Count hands.*
> - "Edited the draft and submitted the Issue?" *Count hands.*

> "Excellent. You've just completed the full cycle: prompt, evaluate, edit, submit. That's the workflow you'll use every time."

---

## Phase 4: Abstract Conceptualization --- Concepts (20 min) --- 0:45

**[Slide 9-10: Writing Good Prompts]**

> "Now let's talk about WHY some prompts work better than others."

> "Think of it this way. If you hired a new farmhand and said, 'Go do some planting,' they wouldn't know where to start. But if you said, 'Go to the north field, check the soil moisture at 3 spots, then calibrate the planter for 30-inch rows of Pioneer P1093 corn seed' --- now they have clear instructions."

> "The same applies to Copilot. Vague prompts give vague results. Specific prompts give useful results."

*Show the weak vs. strong prompts table on Slide 9.*

> "Look at this table. 'Planting' versus 'Write an Issue description for spring planting prep on a 40-acre corn and soybean farm in Iowa, including soil testing, seed ordering, and equipment calibration.' Which one do you think gives better results?"

*Let learners answer.*

> "Let's go through five tips for better prompts."

*Walk through each tip on Slide 10. For each one, give the farm analogy:*

> "Tip 1: Be specific. Don't say 'fix tractor.' Say 'Create a checklist for annual maintenance on a John Deere 6M.' Name the thing."

> "Tip 2: Give context. Mention your farm size, location, and season. 'On a 50-head cattle ranch in east Texas' gives Copilot much more to work with."

> "Tip 3: Say what format you want. 'Write a checklist with checkboxes' or 'Create a step-by-step plan with section headers.' Copilot follows formatting instructions well."

> "Tip 4: Include key details. Dates, quantities, names of fields or animals. The more you give, the less you have to add later."

> "Tip 5: Ask for what's missing. If you want a supplies section or a timeline, say so in the prompt."

**[Slide 12-13: Evaluating Copilot Output]**

> "Now let's talk about evaluation. This is the most important skill you'll learn today. Copilot gives you a draft --- your job is to judge whether it's good enough."

> "Three questions. One: Is it accurate? Are the facts right, the steps in order, nothing made up? Two: Is it complete? Is anything missing that you know matters? Three: Is it relevant? Does it match YOUR farm, not some generic farm?"

*Show the evaluation example on Slide 13.*

> "Here's an example. Copilot drafted spring planting prep and included 'check irrigation system for winter damage.' But the farmer does dryland farming --- no irrigation. That's a relevance problem. Copilot didn't know, but the farmer does. Delete that step."

> "Copilot also missed 'file crop insurance paperwork.' That's a completeness problem. Copilot doesn't know your paperwork requirements. Add it yourself."

> "The draft is a starting point, not a finished product. Your farming knowledge is what makes it useful."

**[Slide 14-16: Editing and Manual vs. Copilot Comparison]**

> "After you evaluate, you edit. Keep the good, delete the bad, add what's missing. Five steps: accept what's correct, delete what's wrong, add your details, reorder if needed, and add context like field names and deadlines."

> "Finally, let's talk about when to use Copilot versus writing manually."

*Show the comparison table on Slide 16.*

> "Copilot is most helpful for long checklists, repeating tasks, and getting past a blank page. Manual writing is better for short tasks, highly specific notes, and when you want full control."

> "Nobody's saying you have to use Copilot for everything. The goal is knowing when it helps and when it doesn't. After the break, you'll test both approaches and decide for yourself."

---

## BREAK (15 min) --- 1:05

**[Slide 18: Break]**

> "Take 15 minutes. When we come back, you're going to write one Issue manually and one with Copilot, then compare them. Look at Part 2 of your lab exercise and pick your scenario: crops, equipment, or livestock."

**During the break:**
- Walk around and check if any learners are having Copilot access issues
- Prepare the whiteboard for the sharing session after independent practice
- Check that all learners have both handouts (lab exercise and getting started guide)

---

## Phase 5: Active Experimentation --- Independent Practice (35 min) --- 1:20

**[Slide 19: Independent Practice]**

> "Welcome back. Time for the main event. Open Part 2 of your lab exercise."

> "Here's what you're going to do. You'll create TWO Issues. First, you'll write one completely manually --- no Copilot, just your own knowledge. Then you'll use Copilot to draft a second Issue for a related task. After that, you'll compare the two."

> "Pick your scenario:"
> - "Scenario A --- Spring Planting Prep Checklist. For crop growers."
> - "Scenario B --- Equipment Maintenance Schedule. For those with machines and vehicles."
> - "Scenario C --- Livestock Vaccination Plan. For animal operations."

> "Task 1 is manual writing. You have about 10 minutes. Task 2 is Copilot-assisted. Another 10 minutes. Task 3 is comparing your results --- about 10 minutes. The handout has all the details."

> "Start with Task 1. Write your manual Issue now. No Copilot for this one."

*Set a timer. Walk the room constantly.*

**Common support needs during independent practice:**

- **Learner says "I don't know what to write manually":** Ask them about their farm. "Walk me through what you do when you're getting ready for planting. Now write each step as a checkbox."
- **Copilot gives a very short or unhelpful response:** Help them rewrite the prompt with more detail. Refer them to the 5 tips on the Getting Started Guide.
- **Copilot gives code instead of text:** Add "This is for a GitHub Issue description, not code" to the prompt.
- **Learner can't find Copilot:** Check the Copilot icon location. If unavailable, pair with a neighbor.
- **Learner finishes early:** Point them to stretch challenges: try a second scenario, experiment with different prompts, or peer-review a partner's output.
- **Learner is skeptical about Copilot:** Validate their concern. "That's a great observation. Not every tool is right for every task. The point of this exercise is for you to decide when it helps."

*At 10 minutes:*

> "If you're still on Task 1, wrap up your manual Issue and move to Task 2 --- the Copilot-assisted version."

*At 20 minutes:*

> "If you're still on Task 2, finish editing your Copilot draft and move to Task 3 --- the comparison. Open both Issues and fill out the comparison table on your handout."

*At 30 minutes:*

> "Five more minutes! Finish your comparison and answer the reflection questions on the handout."

---

## Phase 6: Reflection & Sharing (15 min) --- 1:55

**[Slide 20: Sharing Your Results]**

> "Let's hear what you found. Turn to your partner first and spend 3 minutes sharing your comparison. Which approach did you prefer, and why?"

*Allow 3 minutes for partner discussion.*

> "Now let's share with the group. I have a few questions for you."

*Write these on the whiteboard and ask for volunteers:*

> "Who found that Copilot saved them time? How much time?"

*Take 2 responses.*

> "Who found something Copilot got wrong? What was it?"

*Take 2 responses. Use these to reinforce the evaluation skill.*

> "Who ended up preferring the manual version? Why?"

*Take 1-2 responses. Validate that manual is sometimes better.*

> "What was the most useful thing Copilot suggested --- something you might not have included on your own?"

*Take 1-2 responses.*

**[Slide 22: Reflection]**

> "Here's the big takeaway. Copilot is a tool, like any other tool on your farm. A tractor doesn't replace knowing how to farm --- it makes the physical work faster. Copilot doesn't replace knowing your operation --- it makes the writing work faster."

> "The skill you practiced today is Evaluate-level thinking: judging AI output against your own expertise. That's a skill that applies far beyond GitHub. Any time someone --- or something --- gives you a suggestion, you evaluate it before acting on it. That's what experienced farmers do."

---

## Phase 7: Wrap-Up (10 min) --- 2:10

**[Slide 21: Key Vocabulary]**

> "Let's review today's new terms."

*Ask learners to explain each in their own words:*

- "What is GitHub Copilot in your own words?"
- "What is a prompt?"
- "What does it mean to evaluate Copilot's output?"
- "When is Copilot most helpful?"

**[Slide 23: What's Next]**

> "Next session --- Session 11 --- we're going further with AI tools. You'll learn about GitHub Spark and Copilot Agents. Think of it as upgrading from a farmhand who suggests what to write to one who can follow multi-step instructions on their own."

> "Between now and next session, here's what I'd like you to try:"
> - "Use Copilot to draft at least one real Issue for your farm --- not a practice one, a real task."
> - "Try different prompts and see how the output changes."
> - "Practice evaluating and editing --- remember the three questions: accurate, complete, relevant?"

**[Slide 24: Feedback Survey]**

> "Please fill out the quick survey before you leave. Your honest feedback helps me make these sessions better."

> "Thank you! You now have an AI writing assistant in your toolkit. It won't replace your farming expertise, but it can save you time on the paperwork --- so you can focus on what matters most: your farm. See you next session!"

---

## Buffer (10 min) --- 2:20

Use this time for:
- Collecting remaining feedback surveys
- Helping learners who didn't finish the independent exercise
- Answering individual questions about Copilot, prompts, or evaluation
- Helping anyone with Copilot access issues for between-session practice
- Pairing learners who want to continue experimenting

---

## Guidance: Managing Learner Expectations About AI

**Learners may arrive with strong opinions about AI. Here's how to handle common reactions:**

**The Skeptic:** "AI is going to take over / I don't trust it."
> Response: "That's a fair concern. Today we're going to use Copilot as a writing assistant --- like a spell-checker that can also suggest sentences. You're always in control. Nothing happens without your approval. By the end of today, you'll have the experience to decide for yourself whether it's useful."

**The Over-Enthusiast:** "Can Copilot run my whole farm?"
> Response: "Copilot is great at drafting text, but it doesn't know your farm, your soil, your animals, or your local conditions. Think of it as a helper who's read a lot of books but has never set foot on your property. You're the expert."

**The Worried Learner:** "Am I going to break something?"
> Response: "No. Copilot only suggests text. It doesn't change your repository, create Issues on its own, or do anything without you clicking Submit. You're in the driver's seat."

**The Privacy-Concerned Learner:** "Is it reading my data?"
> Response: "Copilot uses what you type in the prompt to generate a response. It doesn't access your personal files, your farm records outside GitHub, or anything you haven't typed into the prompt box. If you're ever uncomfortable, you can always write manually instead."

---

## Emergency Procedures

**Internet goes down:**
- Use printed screenshots of the Copilot interface, sample prompts, and sample output
- Have learners write prompts on paper and discuss what they'd expect Copilot to generate
- Focus on the evaluation framework --- show printed Copilot output and have learners evaluate it in groups
- Continue with the manual writing portion of the independent practice

**Copilot service is unavailable:**
- Explain that cloud services sometimes have outages --- this is normal
- Use pre-prepared screenshots of Copilot interactions for the demo
- Print several sample Copilot outputs (one per scenario) and distribute them
- Have learners evaluate and edit the printed samples as if Copilot had generated them
- The manual writing portion of independent practice can proceed normally

**Projector fails:**
- Walk around and demonstrate on individual screens
- Pair experienced learners with those who need more help
- Use the printed lab exercise and getting started guide as primary references

**Learner's account doesn't have Copilot access:**
- Pair them with a neighbor who does --- one person drives, one person evaluates
- Provide printed Copilot output for that learner to evaluate and edit
- After the session, help them check GitHub settings and Copilot eligibility

---

## L2 Observation Checklist

**During guided and independent practice, observe whether each learner can:**

- [ ] **Access Copilot** --- Locate and open the Copilot interface within a GitHub Issue (Copilot icon, chat panel, or inline suggestions)
- [ ] **Write an effective prompt** --- Compose a prompt that includes specific task details, farm context, and desired format (not just a one-word request)
- [ ] **Evaluate Copilot output** --- Review a generated draft and identify at least one item that is inaccurate, incomplete, or not relevant to their farm
- [ ] **Edit a Copilot draft** --- Modify the generated text by deleting irrelevant content, adding farm-specific details, or reorganizing the structure
- [ ] **Compare approaches** --- Articulate at least one difference between manual and Copilot-assisted writing and describe when each is more useful

**Scoring guidance:**
- **Demonstrated independently** --- Learner completed the skill without instructor help
- **Demonstrated with help** --- Learner completed the skill after a prompt or hint from the instructor
- **Not yet demonstrated** --- Learner was unable to complete the skill during this session

**Notes space:**

| Learner | Access Copilot | Write Prompt | Evaluate Output | Edit Draft | Compare Approaches |
|---------|---------------|-------------|----------------|------------|-------------------|
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
- [ ] Common confusion points for Session 10 revision
- [ ] Which scenarios were most popular (crops, equipment, livestock)
- [ ] Learner attitudes toward AI/Copilot (skeptical, enthusiastic, neutral)
- [ ] Quality of prompts learners wrote --- do they need more prompting instruction?
- [ ] Any Copilot access or technical issues encountered
- [ ] Learner confidence levels from reflection discussion
- [ ] Notes for Session 11 preparation (what level of AI comfort can we assume?)
