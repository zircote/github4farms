# Facilitation Script: Session 11 --- GitHub Spark & Agents

> **Duration:** 165 minutes (2 hours 45 minutes; includes 15-minute buffer)
> **Bloom's Level:** Create
> **Practice Time:** 100 minutes (Demo follow-along 15 + Guided 20 + Independent 35 + Reflection/sharing 30) = ~61%
> **Prerequisites:** Sessions 1-10 (GitHub account, repository, Issues, Projects, Pull Requests, templates, YAML, Actions, advanced projects, Copilot basics)
> **Key Analogies:** Spark = Farmhand who builds simple tools from your description; Agent = Farmhand who handles a full job list; Human-in-the-loop = You check the farmhand's work before signing off; Prompt engineering = Giving clear directions to a new helper
> **Theme:** "AI tools that can follow multi-step instructions on their own"

---

## Pre-Session Checklist

- [ ] Demo repository is open in the browser on the projector
- [ ] **Spark access verified for ALL learners** --- check each GitHub account before the session begins
- [ ] If any learners lack Spark access, have a plan: pair them with a partner who has access, or prepare printed screenshots of Spark apps
- [ ] Pre-built Spark app is ready (Planting Date Calculator) --- test it before the session to confirm it loads and works
- [ ] Test Spark on the demo repository: create a new app and confirm the build process works
- [ ] Prepare 3 sample prompts in a text file for quick copy-paste during the demo:
  - Crops prompt (seed order calculator)
  - Equipment prompt (inspection checklist)
  - Livestock prompt (health log)
- [ ] Lab exercise handouts printed (one per learner)
- [ ] Spark & Agents Guide handouts printed (one per learner)
- [ ] Feedback surveys ready (paper or digital)
- [ ] Seating arranged for pairs
- [ ] Wi-Fi tested on instructor and learner devices
- [ ] Whiteboard or flip chart available for writing learner responses during the hook and sharing session
- [ ] Have backup: printed screenshots of Spark interface, sample prompts, and sample Spark app output in case of internet or service issues
- [ ] Review Session 10 post-session notes for AI comfort levels --- adjust pacing accordingly
- [ ] Prepare a "What agents are NOT" talking point: agents are not autonomous robots; they propose and you approve

---

## Session Timeline

| Time | Duration | Phase | Activity |
|------|----------|-------|----------|
| 0:00 | 10 min | Welcome & Hook | Why simple farm tools are hard to build; introduce Spark and agents |
| 0:10 | 20 min | Concrete Experience | Live demo --- build a seed calculator with Spark; introduce agents |
| 0:30 | 20 min | Reflective Observation | Guided practice --- explore pre-built Spark app, evaluate, refine |
| 0:50 | 15 min | Abstract Conceptualization | Prompt engineering for tools, human oversight, Copilot vs. Spark vs. agents |
| 1:05 | 15 min | **BREAK** | Stretch, questions, tech help |
| 1:20 | 35 min | Active Experimentation | Independent practice --- build your own Spark app (3 scenarios) |
| 1:55 | 20 min | Reflection & Sharing | Partner discussion + group sharing of built apps |
| 2:15 | 10 min | Wrap-Up | Vocabulary, preview Session 12 capstone, feedback survey |
| 2:25 | 5 min | Buffer | Catch-up, 1-on-1 help, survey collection |

**Practice Time:** 100 min (demo follow-along + guided + independent + reflection/sharing) = ~61%
**Lecture/Concept Time:** ~45 min

---

## Phase 1: Welcome & Hook (10 min) --- 0:00

**[Slide 1-2: Title, Welcome Back]**

> "Good [morning/afternoon]. Welcome to Session 11 --- our second-to-last session. You've built an impressive set of skills. You can create repositories, track tasks, organize projects, collaborate, automate workflows, and use Copilot to draft descriptions faster."

> "Today we're taking AI tools one step further. Last session, Copilot helped you write. Today you'll meet tools that can build things for you and handle multi-step tasks on their own."

**[Slide 3: Why This Matters for YOUR Farm]**

> "Quick question. Have you ever wished you had a simple tool for your farm --- not a fancy app, just something practical? Maybe a calculator that tells you how many bags of seed to order. Or a checklist you can pull up on your phone while you're out inspecting equipment. Or a log where you record animal health checks."

*Pause.*

> "Raise your hand if you've ever thought, 'I wish I had a simple tool for this, but I don't know how to build one.'"

*Most hands should go up.*

> "What kind of tool would help you? Give me some examples."

*Let 3-4 learners answer. Write key examples on the whiteboard.*

> "Great examples. Today you're going to build tools like these --- without writing a single line of code. You're going to describe what you need in plain English, and an AI tool called Spark will build it for you."

> "We're also going to talk about a concept called 'agents' --- AI that can follow a whole set of instructions, not just suggest one thing at a time. Think of it as the difference between a farmhand who answers one question and a farmhand you can give a full job to."

---

## Phase 2: Concrete Experience --- Live Demo (20 min) --- 0:10

**[Slide 4-6: What Is Spark, What It CAN Do, What It CANNOT Do]**

> "Let me introduce Spark. In Session 10, Copilot helped you write text --- Issue descriptions and checklists. Spark goes further. Spark builds simple web apps from plain English descriptions."

> "The analogy I want you to remember: Copilot is like a farmhand who finishes your sentences. Spark is like a farmhand who builds you a tool from your sketch. Both are helpful, but for different things."

> "What can Spark build? Simple calculators, interactive checklists, lookup tables, forms, and dashboards. Things you'd use on your phone or tablet while you're out in the field."

> "What can't it build? Large, complex software. It's not going to replace your accounting program or your precision ag platform. Think of it as building a rain gauge stand, not a weather station."

*Pause and make eye contact.*

> "And here's the same rule as Session 10: **You check its work.** If Spark builds a seed calculator, you verify the math before you rely on it. Just like you'd check a farmhand's measurements before cutting lumber."

**[Slide 7: How Spark Works]**

> "The process has three steps, and they'll feel familiar from Session 10."

> "Step one: Describe. You tell Spark what you want in plain English. Step two: Review. You look at what Spark built and test it. Step three: Refine. You tell Spark what to fix or improve. You repeat steps two and three until it works right."

> "Same cycle as Copilot --- prompt, evaluate, edit. The difference is you're building a tool, not writing text."

**[Slide 8: Live Demo]**

> "Let me show you. Watch my screen."

*Navigate to GitHub Spark.*

> "I'm going to build a seed order calculator for corn. Here's my prompt."

*Type slowly so learners can follow:*

> "I'm typing: 'Build me a simple seed order calculator. I enter my field size in acres and my target seeding rate in seeds per acre. It calculates the total seeds needed and how many bags to order. Each bag has 80,000 seeds. Show the result clearly with large numbers.'"

> "Notice I said what the tool does, what I put in, and what I get out. That's the key to a good Spark prompt."

*Submit the prompt. Wait for Spark to build the app.*

> "Here it is. Spark built a calculator. Let me test it with numbers I know."

*Enter 40 acres, 32,000 seeds per acre.*

> "40 acres times 32,000 seeds per acre is 1,280,000 seeds. Divided by 80,000 per bag is 16 bags. Let's see if Spark got it right."

*Check the result. If correct:*

> "It says 16 bags. That's correct. The math checks out."

*If incorrect:*

> "It says [wrong number]. That's wrong. This is exactly why we test. Let me ask Spark to fix it."

*Type a refinement prompt: "The calculation is wrong. 1,280,000 seeds divided by 80,000 seeds per bag should equal 16 bags. Fix the division."*

> "See? I told Spark exactly what was wrong and what the right answer should be. Now let me test again."

**[Slides 10-13: Agents and Human Oversight]**

> "Before you try Spark yourself, let me introduce one more concept: agents."

> "You've been using Copilot as a suggestion tool --- it helps you with one thing at a time. An agent takes that further. An agent can follow a plan with multiple steps."

> "Think of the difference this way. Copilot is like a farmhand you ask one question at a time. 'What should I write here?' An agent is like a farmhand you give a full job to: 'Go inspect the fence line, note any damage, and create repair tickets for each section.'"

> "Agents can read your repository, break a big request into steps, create multiple Issues, suggest changes, and work through a plan. But --- and this is the important part --- they still report back to you."

> "This is called 'human-in-the-loop.' The agent does the legwork, but you make the decisions. The agent proposes; you approve. Just like even the most capable farmhand still checks with you before buying expensive parts or changing the crop plan."

> "We're not going to dive deep into agents today --- they're newer and still evolving. But I want you to understand the concept: AI that can handle multi-step tasks, with you staying in charge."

---

## Phase 3: Reflective Observation --- Guided Practice (20 min) --- 0:30

**[Slide 15-16: Guided Practice]**

> "Your turn. We're going to explore a pre-built Spark app together, step by step. Open your lab exercise handout to Part 1: Guided Practice."

*Distribute handouts if not already done.*

> "I'm sharing a link to a Planting Date Calculator I built with Spark earlier. Open it in your browser."

*Share the link. Wait for all learners to open it.*

> "This app lets you select a crop and enter your hardiness zone, and it shows you a recommended planting window. Try it with a crop you grow."

*Give learners 2-3 minutes to test.*

> "Did everyone get a result? Thumbs up if it worked."

*Check the room.*

> "Now evaluate it, just like you evaluated Copilot output last session. On your handout, there's an evaluation checklist. Is the planting date accurate? Is it complete --- are your crops in the dropdown? Is it relevant --- would you actually use this?"

*Give learners 3-4 minutes to evaluate.*

> "Who found something wrong or missing?"

*Let 3-4 learners share. Write their feedback on the whiteboard.*

> "Great feedback. Now watch --- I'm going to use your suggestions to refine the app."

*Pick one suggestion (e.g., "add sweet corn to the dropdown" or "show frost date info"). Type a refinement prompt in Spark:*

> "I'm typing: 'Add sweet corn to the crop dropdown with a planting window of May 1 to June 15 for zones 5-7.' Let's see if Spark makes the change."

*Wait for Spark to update.*

> "There it is. Sweet corn is now in the dropdown. That's the refine step in action --- you test, you find a problem, you describe the fix, and Spark updates the tool."

### Guided Practice Checkpoint

> "Check your handout checkpoint. Show of hands. Who has:"
> - "Opened and tested the Spark app?" *Count hands.*
> - "Evaluated it for accuracy and relevance?" *Count hands.*
> - "Identified at least one thing to change?" *Count hands.*

> "Excellent. You've just done the full Spark workflow: test, evaluate, refine. Same pattern as Copilot, but now you're evaluating a tool instead of text."

---

## Phase 4: Abstract Conceptualization --- Concepts (15 min) --- 0:50

**[Slide 9: Writing Good Prompts for Spark]**

> "Let's talk about what makes a good Spark prompt different from a good Copilot prompt."

> "With Copilot, you were describing text you wanted written. With Spark, you're describing a tool you want built. That means you need to think about three things: What does the tool DO? What do you PUT IN? What do you GET OUT?"

*Show the weak vs. strong prompts table on Slide 9.*

> "Look at this table. 'Seed calculator' versus a detailed description of inputs, outputs, and display preferences. Which one do you think gives better results?"

*Let learners answer.*

> "The detailed one, every time. The more specific you are about what the tool does, the closer Spark gets on the first try. And even then, you'll probably need to refine."

**[Slide 13: Human-in-the-Loop]**

> "Now let's talk about the bigger picture. We've introduced three AI tools in this curriculum: Copilot, Spark, and agents. They all follow the same principle."

*Point to the comparison table on Slide 14.*

> "Copilot suggests text. Spark builds tools. Agents handle multi-step tasks. But in every case, YOU are the one who evaluates, approves, and makes the final call."

> "This principle --- human-in-the-loop --- is the most important concept in AI. It means a person is always part of the process. The AI does work, but a human checks and approves before it matters."

> "Why? Because AI tools can be wrong. They can misunderstand your instructions. They can produce something that looks right but has a subtle error. Your farming expertise is what catches those errors."

> "Think of guardrails on a mountain road. They don't drive the car for you, but they keep you from going off the edge. AI guardrails are the same idea --- limits that prevent the AI from doing something harmful without your approval."

> "Approval gates are checkpoints where the AI pauses and says, 'Here's what I'm about to do. Is that OK?' You see these in agents --- before an agent creates an Issue or makes a change, it should ask for your go-ahead."

> "The bottom line: start small, verify results, and build trust gradually. You wouldn't hand the farm keys to someone on their first day. Same idea with AI tools."

---

## BREAK (15 min) --- 1:05

**[Slide 17: Break]**

> "Take 15 minutes. When we come back, you're going to build your own Spark app from scratch. Look at Part 2 of your lab exercise and pick your scenario: crops calculator, equipment checklist, or livestock log."

**During the break:**
- Walk around and check if any learners are having Spark access issues
- Prepare the whiteboard for the sharing session after independent practice
- Check that all learners have both handouts (lab exercise and Spark & Agents guide)
- If any learners seem hesitant, encourage them: "Pick the scenario closest to your farm. There's no wrong choice."

---

## Phase 5: Active Experimentation --- Independent Practice (35 min) --- 1:20

**[Slide 18-19: Independent Practice]**

> "Welcome back. Time to build. Open Part 2 of your lab exercise."

> "You're going to build a simple farm tool with Spark. Here's the process:"
> - "Step 1: Describe what you want --- write a prompt for Spark. 5 minutes."
> - "Step 2: Review what Spark builds --- test it with real or realistic data. 10 minutes."
> - "Step 3: Refine --- ask Spark to fix or improve at least one thing. 10 minutes."
> - "Step 4: Compare --- think about how this compares to doing it manually. 5 minutes."
> - "Step 5: Reflect --- answer the reflection questions. 5 minutes."

> "Pick your scenario:"
> - "Scenario A --- Seed Order Calculator. For crop growers."
> - "Scenario B --- Equipment Inspection Checklist App. For those with machines and vehicles."
> - "Scenario C --- Daily Livestock Health Log. For animal operations."

> "Start with Step 1. Write your prompt now."

*Set a timer. Walk the room constantly.*

**Common support needs during independent practice:**

- **Learner says "I don't know what to describe":** Ask about their farm. "Walk me through what you do when you're calculating seed orders / inspecting equipment / checking on your animals. Now describe that as a tool."
- **Spark produces something very different from what was described:** Help them rewrite the prompt with more specific details about inputs and outputs. "Tell Spark exactly what fields you want and what the result should look like."
- **The calculations are wrong:** Show them how to refine: "Tell Spark exactly what the right answer should be and ask it to fix the math."
- **Learner can't access Spark:** Pair them with a neighbor. One person drives Spark, the other evaluates and suggests refinements.
- **Learner finishes early:** Point them to stretch challenges: try a second scenario, add features, explore agent capabilities, or peer-review a partner's app.
- **Learner is skeptical about Spark:** Validate their concern. "You're right that a tool is only useful if it works correctly. That's why the testing step is so important. The skill here is describing what you need clearly and verifying the output."
- **Learner wants to build something not in the scenarios:** Encourage it. "Go ahead and describe the tool you want. Use the same structure: what it does, what you put in, what you get out."

*At 5 minutes:*

> "If you've written your prompt, submit it to Spark. Start testing what it builds."

*At 15 minutes:*

> "If you're still testing, start identifying what needs to change. Move to the refine step --- ask Spark to fix or improve at least one thing."

*At 25 minutes:*

> "Five more minutes. If you're still refining, wrap up and move to the comparison and reflection on your handout."

*At 30 minutes:*

> "Last five minutes. Finish your comparison table and reflection questions. We'll share in a moment."

---

## Phase 6: Reflection & Sharing (20 min) --- 1:55

**[Slide 20: Sharing Your Results]**

> "Let's see what you built. Turn to your partner first and spend 3 minutes showing each other your Spark apps. Explain what it does and what you had to refine."

*Allow 3 minutes for partner sharing.*

> "Now let's share with the group. I want to see some of your apps."

*If possible, connect 2-3 learners' devices to the projector to show their Spark apps. Otherwise, ask them to describe what they built.*

> "Who wants to show us what they built?"

*Take 2-3 volunteers. For each:*

> "Tell us: What does it do? What was your prompt? Did it work on the first try? What did you refine?"

*After each sharing:*

> "Let's do a quick group evaluation. Does the math check out? Would you use this tool? What would make it better?"

*After all sharing:*

> "A few more questions for the group."

> "Who found that Spark built something useful on the first try?"

*Count hands.*

> "Who had to refine more than once?"

*Count hands.*

> "Who built something they'd actually consider using on their farm?"

*Count hands.*

> "Who tried the agent exploration? What happened?"

*Take 1-2 responses if applicable.*

**[Slide 22: Reflection]**

> "Here's the big takeaway from today. You now have three levels of AI assistance in your toolkit."

> "Level one: Copilot helps you write. Level two: Spark helps you build simple tools. Level three: Agents can handle multi-step tasks. In every case, you're the one in charge. You describe what you need, evaluate what you get, and decide whether to use it."

> "The skill you practiced today is Create-level thinking: designing and building something new with AI assistance. That's the highest level on Bloom's taxonomy. You're not just remembering facts or following steps --- you're creating tools for your farm."

> "Turn to your partner. Share one tool you'd want to build for your farm, and one thing you'd never trust AI to handle on its own. Three minutes."

*Allow 3 minutes for partner discussion.*

---

## Phase 7: Wrap-Up (10 min) --- 2:15

**[Slide 21: Key Vocabulary]**

> "Let's review today's new terms. I'll say the word, and you tell me what it means in your own words."

*Ask learners to explain each:*

- "What is GitHub Spark?"
- "What is an app, in this context?"
- "What is an agent --- how is it different from Copilot?"
- "What does 'natural language' mean?"
- "What is prompt engineering?"
- "What are guardrails?"
- "What does 'human-in-the-loop' mean?"

*For each term, confirm or gently correct.*

**[Slide 23: What's Next]**

> "Next session is our final session --- Session 12, the capstone project. You're going to bring together EVERYTHING you've learned across all 12 sessions to build a complete farm management workflow in GitHub."

> "You'll create a repository from scratch with Issues, a Project board, templates, an automated workflow, and AI-assisted content. It's your chance to show what you can do and walk away with something you can actually use on your farm."

> "Between now and next session, here's what I'd like you to try:"
> - "Open your Spark app and show it to someone on your farm. See if they'd use it."
> - "Try building a second Spark tool for a different task."
> - "Practice writing multi-step requests for Copilot and evaluate the results."
> - "Start thinking about what you'd want to include in your capstone project."

**[Slide 24: Feedback Survey]**

> "Please fill out the quick survey before you leave. Your honest feedback helps me make the final session the best it can be."

> "Thank you! You've gone from learning what a repository is to building your own AI-powered farm tools. That's remarkable progress. In our final session, you'll put all of these skills together. See you there!"

---

## Buffer (5 min) --- 2:25

Use this time for:
- Collecting remaining feedback surveys
- Helping learners who didn't finish the independent exercise
- Answering individual questions about Spark, agents, or human oversight
- Helping anyone with Spark access issues for between-session practice
- Discussing capstone project ideas with interested learners

---

## Guidance: Managing Learner Expectations About AI Autonomy

**Learners may have concerns about AI agents acting on their own. Here's how to handle common reactions:**

**The Worried Learner:** "Will the agent change things without asking me?"
> Response: "No. Agents propose actions, but you approve them. Think of it as a farmhand who writes up a plan and brings it to you before starting. Nothing happens without your say-so."

**The Over-Enthusiast:** "Can I have an agent run my whole repository?"
> Response: "Agents are best for specific, well-defined tasks --- like creating a set of Issues or reviewing a Pull Request. They're a capable helper, not a farm manager. You still set the priorities and make the decisions."

**The Skeptic:** "This is all just hype. Why would I use Spark when I have a notebook?"
> Response: "A notebook is a perfectly good tool. Spark is an option for when you want something interactive --- like a calculator that does the math for you, or a checklist you can check off on your phone. Try both and see which one works better for you."

**The Privacy-Concerned Learner:** "Is Spark sending my farm data somewhere?"
> Response: "Spark uses what you type to build the tool. It doesn't access files on your computer, your bank information, or anything outside of what you describe. If you're uncomfortable with any AI tool, you can always use the manual approach."

---

## Emergency Procedures

**Internet goes down:**
- Use printed screenshots of the Spark interface, sample prompts, and sample app output
- Have learners write Spark prompts on paper and discuss what they'd expect the tool to look like
- Focus on the evaluation and refinement concepts using printed examples
- Discuss agents conceptually using the comparison table from Slide 14

**Spark service is unavailable:**
- Explain that cloud services sometimes have outages --- this is normal
- Use pre-prepared screenshots of Spark interactions for the demo
- Print several sample Spark app screenshots (one per scenario) and distribute them
- Have learners evaluate and plan refinements for the printed app screenshots
- Pivot to an extended agent discussion and Copilot practice instead

**Projector fails:**
- Walk around and demonstrate on individual screens
- Pair experienced learners with those who need more help
- Use the printed lab exercise and Spark & Agents guide as primary references

**Learner's account doesn't have Spark access:**
- Pair them with a neighbor who does --- one person drives Spark, one person evaluates
- Provide printed Spark app screenshots for that learner to evaluate
- After the session, help them check GitHub settings and Spark eligibility

---

## L2 Observation Checklist

**During guided and independent practice, observe whether each learner can:**

- [ ] **Access Spark** --- Navigate to GitHub Spark and initiate a new app build from a natural language description
- [ ] **Write a tool prompt** --- Compose a description that includes what the tool does, what inputs it takes, and what outputs it produces (not just a one-word request)
- [ ] **Test an app** --- Use the Spark-built app with real or realistic data and verify that the output is correct
- [ ] **Refine with feedback** --- Identify a specific issue in the Spark app and write a clear refinement prompt that addresses it
- [ ] **Explain human oversight** --- Articulate why human review is necessary for AI-built tools and describe at least one example of when AI output needs correction

**Scoring guidance:**
- **Demonstrated independently** --- Learner completed the skill without instructor help
- **Demonstrated with help** --- Learner completed the skill after a prompt or hint from the instructor
- **Not yet demonstrated** --- Learner was unable to complete the skill during this session

**Notes space:**

| Learner | Access Spark | Write Tool Prompt | Test App | Refine with Feedback | Explain Human Oversight |
|---------|-------------|-------------------|----------|---------------------|------------------------|
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
- [ ] Common confusion points for Session 11 revision
- [ ] Which scenarios were most popular (crops, equipment, livestock)
- [ ] Quality of Spark prompts learners wrote --- do they need more practice with tool descriptions?
- [ ] How many learners successfully built a working Spark app?
- [ ] How many learners tried the agent exploration?
- [ ] Learner attitudes toward AI autonomy (comfortable, cautious, resistant)
- [ ] Any Spark or agent access/technical issues encountered
- [ ] Learner confidence levels from reflection discussion
- [ ] Capstone project ideas mentioned by learners --- helps plan Session 12 support
- [ ] Notes for Session 12 preparation: What skill levels can we assume? What topics need reinforcement?
