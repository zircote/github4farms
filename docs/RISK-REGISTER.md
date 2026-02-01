# Risk Register: GitHub Training Curriculum for Farmers

## Risk Assessment Overview

```mermaid
quadrantChart
    title Risk Matrix: Likelihood vs Impact
    x-axis Low Impact --> High Impact
    y-axis Low Likelihood --> High Likelihood
    quadrant-1 Monitor (Low L, High I)
    quadrant-2 Mitigate Immediately (High L, High I)
    quadrant-3 Accept (Low L, Low I)
    quadrant-4 Watch Closely (High L, Low I)

    Technology Anxiety: [0.75, 0.75]
    Seasonal Conflicts: [0.9, 0.5]
    Accessibility Failures: [0.5, 0.9]
    Single Point of Failure: [0.5, 0.9]
    Cognitive Overload: [0.75, 0.5]
    Mixed Device Access: [0.65, 0.6]
    Learner Attrition: [0.6, 0.65]
    Knowledge Decay: [0.7, 0.4]
    Content Scope Creep: [0.55, 0.45]
    Instructor Burnout: [0.5, 0.7]
    GitHub Feature Changes: [0.4, 0.5]
    Limited Digital Literacy: [0.65, 0.55]
    Lack of Post-Training Support: [0.6, 0.5]
```

---

## Risk Scoring Methodology

### Likelihood Scale (1-4)

| Score | Level | Description | Probability |
|-------|-------|-------------|-------------|
| **1** | **Rare** | Unlikely to occur; exceptional circumstances only | <10% |
| **2** | **Possible** | Could occur under certain conditions | 10-40% |
| **3** | **Likely** | Expected to occur in most circumstances | 40-70% |
| **4** | **Very Likely** | Almost certain to occur; historical precedent | >70% |

### Impact Scale (1-4)

| Score | Level | Description | Consequences |
|-------|-------|-------------|--------------|
| **1** | **Minimal** | Negligible effect on project; easily recovered | Minor schedule delay (<1 week); no quality impact |
| **2** | **Minor** | Limited effect; workarounds available | Schedule delay (1-2 weeks); reduced learner satisfaction |
| **3** | **Moderate** | Significant effect; mitigation required | Schedule delay (2-4 weeks); some learners fail to achieve objectives |
| **4** | **Major** | Severe effect; project objectives threatened | Project failure; legal/compliance violations; learner exclusion |

### Risk Score Calculation

**Risk Score = Likelihood × Impact** (Range: 1-16)

| Score | Priority | Action |
|-------|----------|--------|
| **12-16** | **Critical** | Immediate mitigation required; active monitoring |
| **8-11** | **High** | Mitigation plan developed; regular monitoring |
| **4-7** | **Medium** | Contingency plan defined; periodic review |
| **1-3** | **Low** | Accept and monitor; document only |

---

## Risk Summary

| ID | Risk | Category | L | I | Score | Owner | Status |
|----|------|----------|---|---|-------|-------|--------|
| R-001 | Technology Anxiety & Learner Resistance | Organizational | 3 | 3 | 9 | Curriculum Developer | Active |
| R-002 | Seasonal Availability Conflicts | Operational | 4 | 2 | 8 | Curriculum Developer | Active |
| R-003 | Accessibility Compliance Failures | Compliance | 2 | 4 | 8 | Curriculum Developer | Active |
| R-004 | Single Point of Failure (Instructor Unavailability) | Operational | 2 | 4 | 8 | Curriculum Developer | Active |
| R-005 | Cognitive Overload & Information Overload | Technical | 3 | 2 | 6 | Curriculum Developer | Active |
| R-006 | Mixed Device Access & Technical Infrastructure | Technical | 3 | 3 | 9 | Curriculum Developer | Active |
| R-007 | Learner Attrition & Dropout | Organizational | 3 | 3 | 9 | Curriculum Developer | Active |
| R-008 | Knowledge Decay During Seasonal Breaks | Operational | 3 | 2 | 6 | Curriculum Developer | Active |
| R-009 | Content Scope Creep | Operational | 2 | 2 | 4 | Curriculum Developer | Active |
| R-010 | Instructor Burnout | Operational | 2 | 3 | 6 | Curriculum Developer | Active |
| R-011 | GitHub Platform Feature Changes | External | 2 | 2 | 4 | Curriculum Developer | Monitoring |
| R-012 | Limited Baseline Digital Literacy | Technical | 3 | 2 | 6 | Curriculum Developer | Active |
| R-013 | Lack of Post-Training Support | Operational | 3 | 2 | 6 | Curriculum Developer | Active |

---

## Detailed Risk Profiles

### R-001: Technology Anxiety & Learner Resistance

**Category:** Organizational
**Owner:** Curriculum Developer
**Detection Method:** Pre-training survey; session observations; feedback surveys; learner engagement metrics

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 3 (Likely) |
| **Likelihood Rationale** | Domain research shows 65-70% of farmers cite lack of technical skills as primary barrier to digital tool adoption. Non-technical learners commonly experience technology anxiety when introduced to developer tools like GitHub. |
| **Impact** | 3 (Moderate) |
| **Impact Rationale** | High anxiety leads to low engagement, reduced knowledge retention, early dropout, and failure to adopt GitHub post-training. Could prevent 30-50% of learners from achieving minimum viable outcome. |
| **Risk Score** | 9 (High Priority) |
| **Current Status** | Active - Mitigation strategies embedded in curriculum design |

#### Mitigation Strategies

1. **Use Agricultural Analogies**: Translate technical terminology into farming language
   - Repositories = "Digital barns for storing information"
   - Issues = "Task cards like work orders for equipment"
   - Commits = "Saving a record, like marking a field log entry"
   - Normalize GitHub as a "farm management tool" not a "developer tool"

2. **Celebrate Small Wins Early and Often**
   - Session 1 achievement: "You just navigated a repository!"
   - Session 2 achievement: "You created your first issue!"
   - Build confidence through incremental progress and public recognition

3. **Normalize Mistakes as Learning Opportunities**
   - Instructor models making mistakes and recovering
   - "There's nothing you can break in GitHub that can't be fixed"
   - Create safe practice environment with demo repositories

4. **Share Peer Farmer Testimonials**
   - Collect success stories from other farmers using collaboration tools
   - Emphasize "if they can do it, so can you" message
   - Use local examples if available (extension network success stories)

5. **Slow Pacing with Frequent Check-Ins**
   - Build in more time than typical technical training (2-3 hours per session vs. 1 hour)
   - Ask "Is everyone following along?" frequently
   - Provide one-on-one assistance during independent practice

#### Contingency Plan

If technology anxiety causes widespread disengagement or dropout:
1. Add "Computer Basics 101" pre-session covering mouse use, typing, web browsing
2. Extend curriculum from 8-12 sessions to 12-16 sessions with slower pacing
3. Implement mandatory peer pairing (advanced with novice) for all exercises
4. Offer one-on-one catch-up sessions between group sessions
5. Survey learners to identify specific anxiety triggers and address individually

#### Triggers / Early Warning Signs

- Pre-training survey responses indicating "I'm not good with computers" or "This isn't for people like me"
- Learners avoiding hands-on exercises, watching instead of doing
- Session 1-2 feedback showing low confidence scores ("I don't think I can do this")
- Body language during sessions: arms crossed, lack of eye contact, not touching computer
- Increased absences starting Session 3-4 without explanation

---

### R-002: Seasonal Availability Conflicts

**Category:** Operational
**Owner:** Curriculum Developer
**Detection Method:** Seasonal calendar; attendance tracking; learner communication

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 4 (Very Likely) |
| **Likelihood Rationale** | Planting season (May-June) and harvest season (Sept-Oct) are guaranteed periods when farmers are unavailable. Historical data from agricultural extension programs shows 25-35% attrition due to seasonal conflicts in standard programs. |
| **Impact** | 2 (Minor) |
| **Impact Rationale** | Scheduling around seasons is manageable with modular design, but attendance gaps cause knowledge decay and require recap sessions. If scheduling is poorly managed, could increase attrition to 35%+. |
| **Risk Score** | 8 (High Priority) |
| **Current Status** | Active - Scheduling plan implemented with blackout periods |

#### Mitigation Strategies

1. **Modular Curriculum Design with Clear Blocks**
   - Block 1: Sessions 1-4 (March-April, pre-planting)
   - Planting Break: May-June (no formal sessions)
   - Block 2: Sessions 5-8 (July-August, mid-summer)
   - Harvest Break: Sept-Oct (no formal sessions)
   - Block 3: Sessions 9-12 (Nov-Dec, post-harvest)

2. **Recap Sessions After Each Seasonal Gap**
   - Post-planting recap (Session 5 opening): 30-minute review of Sessions 1-4 key concepts
   - Post-harvest recap (Session 9 opening): 30-minute review of Sessions 5-8
   - Include quick hands-on refresher exercises to rebuild muscle memory

3. **Asynchronous Resources for Makeup Work**
   - Record video walkthroughs of all sessions with captions and transcripts
   - Provide downloadable quick-reference guides for offline access
   - Create "GitHub Refresher" one-pager for use during breaks

4. **Flexible "Make-Up" Sessions**
   - Offer optional drop-in office hours during gaps for learners who want to stay engaged
   - Allow learners to join next cohort at their stopping point if they must skip a block

5. **Negotiate Schedule with Cohort**
   - Survey learners in advance for specific blackout dates (e.g., local fair weeks, livestock sales)
   - Adjust session dates collaboratively to maximize attendance
   - Build in 1-week buffer before each seasonal break to accommodate late-season delays

#### Contingency Plan

If seasonal conflicts cause >35% attrition or extended disruptions:
1. Extend breaks and offer smaller "bonus sessions" during off-peak weeks
2. Shift to fully asynchronous model for Blocks 2-3 with optional in-person practice sessions
3. Create peer study groups for mutual support during instructor-absent periods
4. Record all sessions and allow learners to complete at their own pace with monthly check-ins
5. Consider winter-only condensed curriculum (Jan-March, 8 weeks) for next cohort

#### Triggers / Early Warning Signs

- >25% of learners miss Session 3-4 (indicating early seasonal conflicts)
- Learners communicate: "I won't be available for the next few weeks"
- Local agricultural events (e.g., planting start) occurring earlier than planned due to weather
- Attendance drops significantly (>30%) after first seasonal break despite recap session
- Feedback indicating "the break was too long, I forgot everything"

---

### R-003: Accessibility Compliance Failures

**Category:** Compliance
**Owner:** Curriculum Developer
**Detection Method:** Accessibility audit tools (WAVE, axe DevTools); assistive technology testing; compliance reviews

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 2 (Possible) |
| **Likelihood Rationale** | Industry baseline shows 40-55% of training materials meet basic accessibility standards without intentional UDL implementation. First-time accessibility compliance efforts often miss requirements. |
| **Impact** | 4 (Major) |
| **Impact Rationale** | Non-compliance with ADA/Section 508/WCAG 2.2 Level AA creates legal liability, excludes learners with disabilities, violates ethical commitments to inclusive education, and may disqualify curriculum from institutional use. |
| **Risk Score** | 8 (High Priority) |
| **Current Status** | Active - Accessibility checklist in place; audits scheduled |

#### Mitigation Strategies

1. **Implement UDL Framework from Project Start**
   - Use CAST UDL Guidelines 3.0 as design foundation (not retrofit)
   - Multiple means of representation: slides + videos + printed handouts + hands-on practice
   - Multiple means of action/expression: verbal, written, demonstration assessments
   - Multiple means of engagement: choice in scenarios, peer pairing, varied difficulty levels

2. **Use Accessibility Checkers for All Digital Content**
   - WAVE (Web Accessibility Evaluation Tool) for slide decks exported as PDFs
   - axe DevTools for any web-based materials
   - Color Contrast Analyzer for visual elements (target 4.5:1 minimum)
   - Run checks during development (Sprint 3, 5, 7, 9) not just at the end

3. **Test with Assistive Technologies**
   - Screen reader testing (NVDA or JAWS) for all digital materials
   - Keyboard-only navigation testing (no mouse required)
   - Zoom to 200% testing for low-vision users
   - Closed caption quality check for videos (auto-generated captions are insufficient)

4. **Provide Required Accessibility Features**
   - Alt text for all images (descriptive, not just "image")
   - Captions and transcripts for all videos and audio
   - High-contrast slide themes (18pt+ fonts, avoid red-green color coding)
   - Keyboard-accessible interactive elements
   - Printable materials in accessible formats (not just scanned images)

5. **Consult Accessibility Specialist**
   - Engage disability services professional or UDL expert for prototype review (Phase 2)
   - Conduct final audit before delivery (Phase 3)
   - Budget 8-12 hours of consultant time if available (volunteer or paid)

#### Contingency Plan

If accessibility audit reveals major non-compliance (<70% pass rate):
1. Pause content development; prioritize remediation of existing materials
2. Revise content creation workflow to embed accessibility checks at each step
3. Hire accessibility consultant for comprehensive audit and remediation guidance
4. Extend development timeline by 2-4 weeks to address failures
5. Document lessons learned to prevent recurrence in future materials
6. Offer alternative formats immediately (e.g., large print, audio-only, 1:1 instruction) to learners with disabilities

#### Triggers / Early Warning Signs

- Automated accessibility checker shows <90% pass rate on any material
- Manual review identifies missing alt text, poor contrast, or inaccessible PDFs
- Learner with disability requests accommodation that materials don't support
- Screen reader testing reveals content that is unreadable or confusing
- Videos lack captions or captions are poor quality (auto-generated without editing)
- Legal/compliance review flags ADA/Section 508 violations

---

### R-004: Single Point of Failure (Instructor Unavailability)

**Category:** Operational
**Owner:** Curriculum Developer
**Detection Method:** Calendar tracking; health monitoring; contingency trigger events

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 2 (Possible) |
| **Likelihood Rationale** | Single-person teams face unavoidability risks: illness, family emergency, unexpected life events. Over a 6-month project, 10-20% likelihood of 1+ week disruption. |
| **Impact** | 4 (Major) |
| **Impact Rationale** | Instructor absence disrupts delivery schedule, breaks learner momentum, and could derail entire program if absence is prolonged (>2 weeks). No backup facilitator available. |
| **Risk Score** | 8 (High Priority) |
| **Current Status** | Active - Contingency resources being developed |

#### Mitigation Strategies

1. **Develop Comprehensive Facilitator Guides**
   - Create detailed "I do, we do, you do" scripts for each session
   - Include timing, key talking points, common questions, troubleshooting tips
   - Make guides usable by a substitute facilitator with minimal preparation (e.g., extension educator stepping in)

2. **Record All Sessions for Asynchronous Access**
   - Video record each session during delivery (with learner consent)
   - Provide recordings with captions to learners for review and makeup work
   - Allow curriculum to continue asynchronously if instructor is temporarily unavailable

3. **Build Buffer Time into Schedule**
   - Add 1-week buffer between blocks (allows rescheduling 1 missed session)
   - Design curriculum to tolerate 1-2 session cancellations without catastrophic failure
   - Avoid back-to-back sessions; use bi-weekly cadence to allow flexibility

4. **Identify Backup Facilitator Early**
   - Approach agricultural extension educator or adult education instructor as backup
   - Provide facilitator guides and offer shadow/co-facilitation opportunity in Block 1
   - Designate high-performing learner as peer leader by Block 2 to assist with exercises

5. **Develop "Self-Guided Session" Materials**
   - Create standalone packets with slides, lab instructions, self-check assessments
   - Allow learners to work independently or in small groups if instructor is absent
   - Schedule makeup Q&A session when instructor returns

#### Contingency Plan

If instructor is unavailable for 1-2 weeks:
1. Notify learners immediately; reschedule missed sessions to buffer weeks
2. Provide recorded session videos and self-guided materials for asynchronous learning
3. Activate backup facilitator if available to deliver missed session(s)
4. Offer extended office hours or one-on-one catch-up sessions upon return

If instructor is unavailable for >2 weeks:
1. Pause curriculum delivery; communicate revised timeline to learners
2. Offer asynchronous completion option: learners work through materials independently with periodic check-ins
3. Transfer facilitator responsibilities to backup or co-facilitator if identified
4. Consider train-the-trainer acceleration for advanced learner to take over delivery
5. Document lessons learned; establish formal co-facilitator for next cohort

#### Triggers / Early Warning Signs

- Instructor illness or family emergency requiring extended absence
- Instructor expresses burnout or overwhelm (see R-010)
- No backup facilitator identified by Block 1 delivery start
- Facilitator guides incomplete or not tested with potential substitute
- Session recordings not being captured or stored reliably

---

### R-005: Cognitive Overload & Information Overload

**Category:** Technical
**Owner:** Curriculum Developer
**Detection Method:** Formative assessments; learner confusion during sessions; feedback surveys

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 3 (Likely) |
| **Likelihood Rationale** | Non-technical learners face high intrinsic cognitive load when learning GitHub. Attempt to teach "all of GitHub" in one session overwhelms working memory. Common instructional design error. |
| **Impact** | 2 (Minor) |
| **Impact Rationale** | Overload causes learner frustration, reduced retention, slower progress, and confidence decline. Manageable with pacing adjustments but requires vigilant monitoring. |
| **Risk Score** | 6 (Medium Priority) |
| **Current Status** | Active - Content chunking and CLT principles applied |

#### Mitigation Strategies

1. **Chunk Content into Micro-Topics (Cognitive Load Theory)**
   - Session 1: Repositories ONLY (not issues, projects, or commits)
   - Session 2: Issues ONLY (not projects or workflows)
   - Session 3: Projects ONLY (not Actions or automation)
   - Limit each session to 3-5 key concepts maximum

2. **Slow Pacing with Frequent Practice**
   - Allocate 60-70% of session time to hands-on practice (not lecture)
   - Use "I do, we do, you do" progression with ample time for each phase
   - Avoid rushing to "cover everything"; depth over breadth

3. **Use Visual Aids and Job Aids**
   - Provide one-page cheat sheets for multi-step processes (e.g., "How to Create an Issue")
   - Use annotated screenshots with clear callouts
   - Create visual glossary of GitHub terms with icons/images

4. **Provide Repetition Across Sessions**
   - Every session starts with brief review of prior session key concepts
   - Use same farm scenarios across sessions to reduce novelty load
   - Practice previously learned skills in new contexts (spiral curriculum)

5. **Monitor Cognitive Load in Real-Time**
   - Watch for confusion signals: blank stares, off-task behavior, questions about basics covered earlier
   - Use "Fist to Five" checks: "How well do you understand? Show me on your fingers (1-5)"
   - Slow down or add scaffolding immediately when overload detected

#### Contingency Plan

If cognitive overload is widespread (>40% of learners show confusion):
1. Pause new content introduction; consolidate and review current material
2. Add extra practice time or bonus review session before next topic
3. Simplify explanations; eliminate technical jargon
4. Break session into smaller sub-topics over multiple weeks (e.g., Session 2a: Creating issues, Session 2b: Managing issues)
5. Provide one-on-one tutoring for learners falling behind
6. Revise materials to reduce extraneous load (cleaner slides, simpler language)

#### Triggers / Early Warning Signs

- Learners ask to repeat instructions multiple times
- Formative assessments show <60% skill demonstration success
- Feedback surveys indicate "too much, too fast" or "overwhelming"
- Learners express frustration: "I don't understand what I'm doing"
- Session runs significantly over time due to repeated explanations
- Attrition increases after particularly complex session

---

### R-006: Mixed Device Access & Technical Infrastructure

**Category:** Technical
**Owner:** Curriculum Developer
**Detection Method:** Learner needs survey; device testing; in-session troubleshooting

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 3 (Likely) |
| **Likelihood Rationale** | PROJECT-CONTEXT.md specifies "Mixed/TBD device environment — learners may use personal laptops, shared computers, tablets, or phones." Inconsistent device access is guaranteed. |
| **Impact** | 3 (Moderate) |
| **Impact Rationale** | Device limitations (e.g., small phone screens, tablet input challenges) reduce learning effectiveness, prevent completion of exercises, and create unequal learning outcomes. Some learners may be unable to participate fully. |
| **Risk Score** | 9 (High Priority) |
| **Current Status** | Active - Device-agnostic design and testing planned |

#### Mitigation Strategies

1. **Test All Materials Across Device Types**
   - Validate GitHub web interface usability on laptop, tablet, phone
   - Test lab exercises on smallest expected screen size (phone)
   - Identify device-specific workarounds (e.g., mobile GitHub interface differences)

2. **Teach GitHub Web Interface (Not CLI)**
   - Focus exclusively on GitHub.com web interface (accessible from any device)
   - Avoid command-line tools, desktop apps, or local git installation
   - Emphasize mobile app features when applicable

3. **Provide Offline Alternatives Where Possible**
   - Printable quick-reference guides and cheat sheets
   - Downloadable PDF slide decks for offline viewing
   - Paper worksheets for exercises if internet access is unreliable

4. **Prepare Backup Mobile Hotspot**
   - Instructor brings mobile hotspot device to in-person sessions
   - Provide Wi-Fi access code to learners with device but no data plan
   - Test hotspot capacity before sessions (simultaneous user limit)

5. **Create Device-Specific Guides**
   - Annotated screenshots showing GitHub tasks on laptop, tablet, phone
   - "How to [task] on your phone" one-pagers
   - Acknowledge device limitations (e.g., "Some tasks are easier on a laptop")

6. **Offer Device Loaner Program (If Possible)**
   - Partner with library or extension office to provide loaner laptops/tablets
   - Coordinate device pickup before sessions
   - Create device setup guide for loaners

#### Contingency Plan

If device limitations prevent learner participation:
1. Pair learners with compatible devices for shared screen viewing and exercises
2. Provide printed step-by-step guides for phone users to follow along
3. Offer separate "mobile-only" session demonstrating GitHub app features
4. Extend session time for learners requiring extra support on limited devices
5. Coordinate device loaner program through local library, extension office, or grant funding
6. Create asynchronous video series showing tasks on multiple device types

#### Triggers / Early Warning Signs

- Pre-training survey reveals >30% of learners using smartphones as primary device
- Learners unable to see screen content during Session 1 (too small)
- Exercises fail on specific device types (e.g., file upload on tablet)
- Internet connectivity issues during in-person sessions
- Learners express frustration: "I can't do this on my phone"
- Increased time spent troubleshooting device-specific issues vs. teaching content

---

### R-007: Learner Attrition & Dropout

**Category:** Organizational
**Owner:** Curriculum Developer
**Detection Method:** Attendance tracking; exit surveys; learner communication

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 3 (Likely) |
| **Likelihood Rationale** | Industry benchmarks show 45-60% completion rate for traditional instructor-led technical training, though experiential training improves to 75-85%. Seasonal conflicts, technology anxiety, and cognitive overload all contribute to attrition risk. |
| **Impact** | 3 (Moderate) |
| **Impact Rationale** | Attrition reduces cohort size, diminishes peer learning opportunities, lowers Kirkpatrick Level 3-4 outcomes, and signals curriculum deficiencies. If attrition exceeds 25%, project may be perceived as failure. |
| **Risk Score** | 9 (High Priority) |
| **Current Status** | Active - Engagement strategies embedded in curriculum |

#### Mitigation Strategies

1. **Build Early Wins and Confidence (Sessions 1-3)**
   - Celebrate first repository navigation, first issue created, first project board
   - Provide positive reinforcement frequently
   - Share progress milestones: "You've learned 3 major GitHub features already!"

2. **Make Content Immediately Relevant (Andragogy)**
   - Every session starts with "Why this matters for your farm"
   - Use farm scenarios learners recognize and care about solving
   - Demonstrate ROI: "This will save you [X] hours per week on record-keeping"

3. **Create Peer Learning Community**
   - Pair learners for exercises; rotate pairs to build relationships
   - Facilitate peer sharing: "Show your partner what you built"
   - Create optional peer study group or online discussion space (e.g., Discord, Slack, or GitHub Discussions)

4. **Flexible Attendance Policies**
   - Allow 1-2 missed sessions with makeup via recorded videos and office hours
   - Offer "rejoin next cohort at your stopping point" option
   - No penalties for seasonal absences

5. **Proactive Outreach to Struggling Learners**
   - Identify learners at risk (missed sessions, low assessment scores, low confidence feedback)
   - Reach out individually: "How can I help you succeed?"
   - Offer one-on-one tutoring or extra practice sessions

6. **Collect Feedback and Iterate Quickly (SAM)**
   - Session feedback surveys identify pain points in real-time
   - Adjust pacing, difficulty, or approach based on cohort needs
   - Demonstrate responsiveness: "I heard you found Session 3 too fast, so I'm slowing down"

#### Contingency Plan

If attrition exceeds 25% by mid-program:
1. Pause delivery after current block; conduct learner interviews to identify root causes
2. Revise curriculum to address specific dropout triggers (pacing, relevance, difficulty)
3. Offer "restart from beginning" option for dropouts who want to rejoin
4. Extend program timeline to accommodate slower pacing or additional review sessions
5. Shift to smaller cohort model with more individualized attention
6. Document lessons learned for next cohort recruitment and curriculum design

#### Triggers / Early Warning Signs

- Attendance drops below 75% for 2+ consecutive sessions
- Session feedback shows declining satisfaction or confidence scores
- Learners express: "I don't have time for this" or "This isn't what I expected"
- Multiple learners miss same session without prior notice
- Low engagement during sessions: learners not attempting exercises, off-task behavior
- Exit communications: "I'm dropping out" without clear reason

---

### R-008: Knowledge Decay During Seasonal Breaks

**Category:** Operational
**Owner:** Curriculum Developer
**Detection Method:** Recap session assessments; post-break formative checks; learner feedback

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 3 (Likely) |
| **Likelihood Rationale** | 4-8 week breaks during planting and harvest seasons are guaranteed. Research shows knowledge retention declines significantly without practice; technical skills are particularly vulnerable. |
| **Impact** | 2 (Minor) |
| **Impact Rationale** | Decay requires recap sessions and slows progress, but doesn't derail curriculum. Learners may feel discouraged if they "forgot everything," impacting confidence. |
| **Risk Score** | 6 (Medium Priority) |
| **Current Status** | Active - Recap sessions and asynchronous resources planned |

#### Mitigation Strategies

1. **Deliver Recap Sessions After Each Break**
   - Post-planting recap (Session 5): 30-minute review of Sessions 1-4
   - Post-harvest recap (Session 9): 30-minute review of Sessions 5-8
   - Use quick hands-on exercises to rebuild muscle memory
   - Frame as "refresher" not "you forgot everything"

2. **Provide "GitHub Refresher" One-Pagers**
   - Create printable cheat sheet: "GitHub Quick Reference - Top 10 Tasks"
   - Distribute before breaks with encouragement to review during downtime
   - Include visual reminders of key concepts

3. **Encourage Practice During Breaks**
   - Application assignment: "Use GitHub for one real farm task during the break"
   - Set up simple project board for break period (e.g., "Track harvest tasks")
   - Optional check-in: Instructor posts GitHub Discussion asking learners to share progress

4. **Record Video Walkthroughs for Review**
   - Learners can re-watch key sessions during breaks
   - Provide "Best of" compilation video highlighting critical skills

5. **Normalize Forgetting and Relearning**
   - Instructor acknowledges: "It's been 8 weeks, so let's review"
   - Celebrate relearning: "You picked that back up quickly!"
   - Emphasize: "This is why we have recap sessions built in"

#### Contingency Plan

If post-break assessments show severe knowledge decay (>50% of learners cannot demonstrate basic skills):
1. Extend recap session to full session length (2-3 hours)
2. Add bonus "skills refresh" session before resuming new content
3. Provide individualized review materials for struggling learners
4. Adjust Block 2/3 content to include more review and less new material
5. Offer optional "GitHub Practice Hour" weekly during breaks (low-commitment)
6. Document decay patterns for next cohort planning (e.g., shorten breaks if possible)

#### Triggers / Early Warning Signs

- Recap session assessments show <60% skill retention
- Learners express: "I forgot how to do that" or "We learned this already?"
- Post-break session requires significant reteaching of prior content
- Feedback indicates low confidence after breaks
- Learners did not engage with GitHub during break period (trackable via activity logs)

---

### R-009: Content Scope Creep

**Category:** Operational
**Owner:** Curriculum Developer
**Detection Method:** Scope change requests; session timing overruns; developer workload tracking

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 2 (Possible) |
| **Likelihood Rationale** | Volunteer projects with unclear boundaries are prone to scope creep ("just add one more topic"). Single-person teams lack formal scope governance. |
| **Impact** | 2 (Minor) |
| **Impact Rationale** | Scope creep delays development timeline, increases workload, and risks cognitive overload for learners. Could extend 18-week development to 24+ weeks. |
| **Risk Score** | 4 (Medium Priority) |
| **Current Status** | Active - Scope defined in PROJECT-CONTEXT.md; monitoring required |

#### Mitigation Strategies

1. **Enforce Defined Scope from PROJECT-CONTEXT.md**
   - 8-12 sessions covering: Repos → Issues → Projects → Collaboration → Actions → Copilot/Spark
   - Minimum viable outcome: Repository navigation, issue/project management, collaboration
   - Stretch goals: Actions, Copilot, train-the-trainer

2. **Use "Parking Lot" for Out-of-Scope Requests**
   - Document learner requests for additional topics (e.g., "Can we learn GitHub Pages?")
   - Acknowledge requests but defer: "Great idea! Let's cover in an advanced session later."
   - Evaluate parking lot items after completing core curriculum

3. **Apply "One In, One Out" Rule**
   - If new topic is added, remove or shorten another topic
   - Maintain 8-12 session limit; do not expand to 15+ sessions

4. **Focus on Depth Over Breadth**
   - Better to master 6 core features than superficially cover 15 features
   - Prioritize hands-on practice over feature tours

5. **Set Clear "Not in Scope" Boundaries**
   - Not covering: Git CLI, advanced branching, GitHub Pages, GitHub Packages, GitHub Codespaces
   - Focus: GitHub web interface for farm management use cases

#### Contingency Plan

If scope creep occurs (development extends beyond 18 weeks):
1. Conduct scope review: Identify non-essential additions
2. Cut or defer lowest-priority content to restore timeline
3. Simplify overly complex sessions to reduce development time
4. Accept "good enough" materials rather than perfect materials (SAM philosophy)
5. Shift delayed content to "Advanced GitHub for Farmers" follow-up curriculum

#### Triggers / Early Warning Signs

- Development timeline extends beyond planned 18 weeks
- Session count increases beyond 12 without removing other content
- Instructor workload exceeds sustainable levels (see R-010)
- Learners request many out-of-scope features during sessions
- Materials include features not listed in PROJECT-CONTEXT.md

---

### R-010: Instructor Burnout

**Category:** Operational
**Owner:** Curriculum Developer
**Detection Method:** Self-assessment; workload tracking; burnout symptom monitoring

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 2 (Possible) |
| **Likelihood Rationale** | Volunteer projects with single-person teams face burnout risk, especially when juggling development, delivery, and personal commitments. 6-month timeline with 100-150 hours of work is significant. |
| **Impact** | 3 (Moderate) |
| **Impact Rationale** | Burnout leads to reduced quality, delayed timeline, or project abandonment. Impacts instructor's health and well-being. Could trigger R-004 (single point of failure). |
| **Risk Score** | 6 (Medium Priority) |
| **Current Status** | Active - Workload management strategies needed |

#### Mitigation Strategies

1. **Set Sustainable Work Pace**
   - Target 6-8 hours/week average (not 15-20 hours)
   - Use SAM rapid prototyping to avoid perfectionism paralysis
   - Accept "good enough" materials; iterate based on learner feedback

2. **Build Buffer Time into Timeline**
   - Development: 18 weeks planned, but allow up to 22 weeks if needed
   - Delivery: Bi-weekly sessions (not weekly) to allow preparation time between sessions

3. **Delegate Where Possible**
   - Engage agricultural extension expert for scenario validation (reduces research time)
   - Use peer mentors to assist with learner support during sessions (reduces 1:1 burden)
   - Leverage existing GitHub documentation rather than creating from scratch

4. **Schedule Personal Breaks**
   - Take 1 week off during each seasonal break (no curriculum work during planting/harvest)
   - Plan 1-2 week vacation buffer after development phase (before delivery)

5. **Monitor Burnout Symptoms**
   - Weekly self-check: "Am I feeling overwhelmed, exhausted, or resentful?"
   - If yes, reduce workload immediately: cut scope, extend timeline, seek help
   - Prioritize personal health over project perfection

#### Contingency Plan

If burnout symptoms emerge:
1. Pause development immediately for 1 week
2. Conduct workload assessment: Identify tasks to cut, defer, or delegate
3. Extend project timeline by 2-4 weeks to reduce weekly workload
4. Simplify remaining materials (reuse existing content, reduce custom creation)
5. Engage co-facilitator to share delivery burden
6. Consider condensing curriculum to 8 sessions (minimum viable scope) instead of 12

#### Triggers / Early Warning Signs

- Instructor working >10 hours/week consistently on volunteer project
- Feelings of dread or resentment about curriculum work
- Missing self-imposed deadlines repeatedly
- Declining quality of materials due to rushing
- Physical symptoms: fatigue, headaches, sleep disruption
- Considering abandoning project or "just getting it done" without care for quality

---

### R-011: GitHub Platform Feature Changes

**Category:** External
**Owner:** Curriculum Developer
**Detection Method:** GitHub changelog monitoring; feature deprecation notices

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 2 (Possible) |
| **Likelihood Rationale** | GitHub releases feature updates regularly. Over 6-month project timeline, minor UI changes are likely; major feature deprecations are possible but less common. |
| **Impact** | 2 (Minor) |
| **Impact Rationale** | Feature changes require updating screenshots, instructions, and videos. Minor UI changes are easily adapted; major feature removals could require curriculum revisions. |
| **Risk Score** | 4 (Low Priority) |
| **Current Status** | Monitoring - No immediate action required |

#### Mitigation Strategies

1. **Focus on Core Stable Features**
   - Teach fundamental concepts (repos, issues, projects) unlikely to change drastically
   - Avoid bleeding-edge features (e.g., newly released betas)

2. **Use Conceptual Teaching Over Click-by-Click**
   - Emphasize "what you're trying to accomplish" over "click this exact button"
   - Example: "Find the 'New Issue' button" vs. "Click the green button in the top right"

3. **Monitor GitHub Changelog**
   - Subscribe to GitHub Blog and Changelog
   - Review feature updates monthly during development
   - Flag changes affecting curriculum content

4. **Build Modular Materials**
   - Screenshots and step-by-step instructions in separate documents (easy to update)
   - Slide decks reference concepts, not exact UI elements
   - Video walkthroughs include narration: "The interface may look slightly different, but the concept is the same"

5. **Plan for Annual Review**
   - Schedule annual curriculum review to update screenshots and instructions
   - Incorporate learner feedback: "This doesn't look like my GitHub"

#### Contingency Plan

If major GitHub feature change impacts curriculum during development or delivery:
1. Assess impact: Does change affect learning objectives or just UI appearance?
2. Update affected materials immediately (screenshots, instructions)
3. Notify learners: "GitHub updated this feature; here's what changed"
4. Provide supplemental "What's New in GitHub" one-pager
5. Re-record affected video segments if necessary

#### Triggers / Early Warning Signs

- GitHub announces deprecation of feature taught in curriculum (e.g., Projects v1 → v2)
- UI changes make screenshots or instructions inaccurate
- Learners report: "My screen doesn't look like yours"
- GitHub introduces new feature that should be added to curriculum (requires scope decision)

---

### R-012: Limited Baseline Digital Literacy

**Category:** Technical
**Owner:** Curriculum Developer
**Detection Method:** Pre-training survey; Session 1 observations; learner questions

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 3 (Likely) |
| **Likelihood Rationale** | PROJECT-CONTEXT.md specifies "zero technical background." Some learners may lack basic computer skills (mouse use, typing, web browser navigation). |
| **Impact** | 2 (Minor) |
| **Impact Rationale** | Low digital literacy slows learning pace and requires additional scaffolding, but doesn't prevent success with appropriate support. |
| **Risk Score** | 6 (Medium Priority) |
| **Current Status** | Active - Foundational support strategies planned |

#### Mitigation Strategies

1. **Include "Computer Basics 101" Pre-Session if Needed**
   - Cover: Mouse use (click, double-click, right-click), typing basics, web browser navigation
   - Offer optional 1-hour pre-session before Session 1 for learners who want it
   - No shame; frame as "making sure everyone starts on equal footing"

2. **Pair Advanced with Novice Learners**
   - Peer mentoring: More experienced computer users support novices during exercises
   - Rotate pairs to build relationships and reduce dependency

3. **Slow Pacing with Frequent Check-Ins**
   - Assume zero knowledge; explain every step explicitly
   - Demonstrate mouse movements, typing, browser navigation on projector
   - Ask: "Has everyone opened a web browser before?" not "Everyone knows how to open a browser, right?"

4. **Use Large, Clear Visual Aids**
   - Annotated screenshots with arrows and labels
   - Step-by-step written instructions (not just verbal)
   - Avoid jargon: Say "type" not "input," "click" not "select"

5. **Provide One-on-One Catch-Up Support**
   - Offer 30-minute pre-session tutoring for learners struggling with basics
   - No learner left behind philosophy

#### Contingency Plan

If baseline digital literacy is lower than anticipated (>40% of learners lack basic computer skills):
1. Add mandatory "Computer Basics 101" as Session 0 before GitHub curriculum
2. Slow Session 1 pacing significantly; add extra practice time
3. Extend curriculum from 8-12 sessions to 12-16 sessions to accommodate slower pace
4. Provide printed step-by-step guides for all exercises
5. Offer optional "Computer Lab Hour" weekly for extra practice and support

#### Triggers / Early Warning Signs

- Pre-training survey reveals learners "never or rarely use computers"
- Session 1 observations: Learners struggle to use mouse, type, or navigate browser
- Questions about basic computer operation (not GitHub-specific)
- Session 1 runs significantly over time due to computer basics instruction
- Learners express: "I don't know how to use a computer"

---

### R-013: Lack of Post-Training Support

**Category:** Operational
**Owner:** Curriculum Developer
**Detection Method:** Post-training follow-up surveys; GitHub usage tracking (Kirkpatrick L3)

| Attribute | Value |
|-----------|-------|
| **Likelihood** | 3 (Likely) |
| **Likelihood Rationale** | Volunteer project with limited resources; no formal support structure post-training. Learners may encounter issues without access to help, leading to GitHub abandonment. |
| **Impact** | 2 (Minor) |
| **Impact Rationale** | Lack of support reduces Kirkpatrick Level 3 (behavior) outcomes; learners may revert to old methods. Doesn't prevent training completion but undermines long-term adoption. |
| **Risk Score** | 6 (Medium Priority) |
| **Current Status** | Active - Post-training support plan needed |

#### Mitigation Strategies

1. **Create Comprehensive Troubleshooting Guide**
   - "Common GitHub Problems and How to Fix Them" document
   - Cover: Can't find repository, issue won't close, notifications overwhelming, etc.
   - Distribute during final session

2. **Facilitate Peer Learning Community**
   - Set up GitHub Discussions space or Slack/Discord channel for cohort
   - Encourage learners to ask questions and help each other
   - Instructor monitors periodically but learners provide primary support

3. **Offer Limited Office Hours (3 months post-training)**
   - Monthly 1-hour drop-in Q&A sessions (virtual or in-person)
   - Learners can bring questions, share successes, troubleshoot issues
   - Tapers off after 3 months as learners become self-sufficient

4. **Build Train-the-Trainer Network**
   - High-performing learners become peer support resources
   - Provide contact list of peer mentors willing to help future cohorts

5. **Provide GitHub Official Resources**
   - Curated list of GitHub Help documentation, tutorials, community forums
   - Teach learners how to use GitHub's built-in help resources during training

#### Contingency Plan

If post-training GitHub usage drops below 60% at 60 days:
1. Conduct exit interviews: Why did learners stop using GitHub?
2. Offer "Refresher Session" addressing common pain points
3. Increase office hours frequency (weekly instead of monthly)
4. Create targeted resources for top 3 barriers (e.g., "How to Use GitHub on Your Phone")
5. Pair inactive learners with active peer mentors for 1:1 support

#### Triggers / Early Warning Signs

- 30-day follow-up shows <70% GitHub usage
- Learners express: "I don't know who to ask when I have a problem"
- Common questions repeating post-training (suggests troubleshooting guide gaps)
- Peer learning community is inactive (no posts/discussions)
- Learners revert to old methods (paper, email) despite completing training

---

## Risk Categories

| Category | Count | Highest Score | Focus Area |
|----------|-------|---------------|------------|
| **Operational** | 6 | 8 (R-002, R-004) | Scheduling, single-person team, support |
| **Organizational** | 2 | 9 (R-001, R-007) | Learner anxiety, attrition |
| **Technical** | 3 | 9 (R-006) | Devices, digital literacy, cognitive load |
| **Compliance** | 1 | 8 (R-003) | Accessibility standards |
| **External** | 1 | 4 (R-011) | GitHub platform changes |

---

## Risk Monitoring Schedule

| Cadence | Activity | Participants | Output |
|---------|----------|--------------|--------|
| **Weekly (During Development)** | Review development timeline and workload | Curriculum Developer | Burnout check, scope creep alert |
| **Bi-Weekly (During Delivery)** | Track session attendance and feedback | Curriculum Developer | Attrition alert, cognitive overload detection |
| **After Each Session** | Collect Kirkpatrick L1 feedback | Curriculum Developer, Learners | Session quality assessment, immediate adjustments |
| **Monthly** | Comprehensive risk register review | Curriculum Developer | Risk status updates, mitigation effectiveness |
| **Post-Seasonal Break** | Assess knowledge retention | Curriculum Developer | Knowledge decay mitigation needs |
| **30/60/180 Days Post-Training** | Track GitHub usage (Kirkpatrick L3) | Curriculum Developer, Learners | Post-training support needs |
| **Annually** | Review curriculum for GitHub changes | Curriculum Developer | Platform update requirements |

---

## Cross-Reference to Project Artifacts

- **PROJECT-PLAN.md**: Risk summary table aligns with Phase-specific risks
- **JIRA-STRUCTURE.md**: Risk mitigation activities embedded in epic acceptance criteria
- **RACI-CHART.md**: Risk owners map to RACI Accountable roles
- **SEVERITY-CLASSIFICATION.md**: Risk impacts inform severity level definitions
- **BEST-PRACTICES.md**: Framework applications address multiple risk categories (UDL for R-003, CLT for R-005, etc.)

---

**Document Version:** 1.0
**Last Updated:** 2026-01-30
**Owner:** Curriculum Developer/Instructor
**Review Cadence:** Monthly during development and delivery; quarterly post-delivery
