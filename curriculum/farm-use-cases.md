# Farm Use Case Library

> **Purpose:** Map real farming challenges to GitHub features so that every training exercise uses practical, relevant scenarios.
>
> **Date:** 2026-01-30
>
> **Usage:** Reference this library when developing session materials. Each session should draw exercises from the use cases aligned to its topic.

---

## Use Case Summary

| # | Farm Problem | GitHub Feature | Difficulty | Session Alignment | Category |
|---|-------------|----------------|-----------|-------------------|----------|
| 1 | Track daily farm tasks and chores | Issues + Labels | Basic | Session 2 | Task Tracking |
| 2 | Plan spring planting schedule by field | Projects (Timeline view) | Intermediate | Session 3, 9 | Crops |
| 3 | Log equipment maintenance and repairs | Issues + Photo attachments | Basic | Session 2 | Equipment |
| 4 | Coordinate harvest crew assignments | Projects (Board view) | Intermediate | Session 3 | Crops |
| 5 | Monitor livestock health records | Issues + Labels per animal/herd | Basic | Session 2 | Livestock |
| 6 | Store and organize farm documentation | Repositories + README | Basic | Session 1 | Record-Keeping |
| 7 | Track grant compliance milestones | Projects + Commit history as audit trail | Intermediate | Session 3, 9 | Compliance |
| 8 | Collaborate on shared farm plans | Pull Requests (web UI) | Intermediate | Session 4 | Collaboration |
| 9 | Get automated reminders for recurring tasks | GitHub Actions (scheduled workflows) | Advanced | Session 7, 8 | Automation |
| 10 | Create reusable templates for common farm processes | Issue templates + Repository templates | Intermediate | Session 6 | Templates |
| 11 | Share farm knowledge with neighboring farms | Forking + GitHub Discussions | Intermediate | Session 4, 5 | Collaboration |
| 12 | Build a seasonal farm roadmap with milestones | Projects (Timeline + custom fields) | Advanced | Session 9 | Crops |
| 13 | Track irrigation system inspections | Issues + Checklists | Basic | Session 2 | Equipment |
| 14 | Use AI to draft farm task descriptions | GitHub Copilot | Advanced | Session 10 | AI-Assisted |
| 15 | Build a simple farm dashboard app | GitHub Spark | Advanced | Session 11 | AI-Assisted |

---

## Detailed Use Cases

### Use Case 1: Track Daily Farm Tasks and Chores

**Category:** Task Tracking
**Difficulty:** Basic
**Session Alignment:** Session 2 (GitHub Issues)

**Farm Problem:** Farmers manage dozens of daily tasks — feeding livestock, checking fences, irrigating fields, ordering supplies — using paper lists, whiteboards, or memory. Tasks get forgotten, especially during busy seasons. There is no record of what was done and when.

**GitHub Solution:** Use GitHub Issues as digital work orders. Each task becomes an Issue with a title, description, and optional photo. Labels categorize tasks by type (livestock, crops, equipment, maintenance, urgent, routine). Assigning Issues to yourself or team members creates accountability. Closing Issues when done creates a complete history of completed work.

**Expected Outcome:** Farmers have a searchable, timestamped record of all farm tasks. Nothing falls through the cracks. Team members can see what needs doing without being told in person.

**Exercise Sketch:** "Create 3 Issues for tasks you'd do this week on your farm. Add a label to each. Close one that's 'done.'"

---

### Use Case 2: Plan Spring Planting Schedule by Field

**Category:** Crops
**Difficulty:** Intermediate
**Session Alignment:** Session 3 (GitHub Projects), Session 9 (Advanced Projects)

**Farm Problem:** Planting involves coordinating multiple fields, crop varieties, planting dates, and equipment availability. Paper calendars and spreadsheets are hard to update and share. When plans change (weather delays, seed availability), updating is tedious.

**GitHub Solution:** Create a GitHub Project with Timeline view. Each field/crop combination is an Issue with custom fields for planting date, expected harvest date, and status. The Timeline view shows the full season at a glance. Dragging items adjusts dates. Filtering by crop type or field shows focused views.

**Expected Outcome:** A visual, interactive planting calendar that the whole farm team can view and update. Changes propagate instantly.

**Exercise Sketch:** "Create a Project board for spring planting. Add 4 Issues (one per field). Set planting dates using Timeline view. Filter to show only corn fields."

---

### Use Case 3: Log Equipment Maintenance and Repairs

**Category:** Equipment
**Difficulty:** Basic
**Session Alignment:** Session 2 (GitHub Issues)

**Farm Problem:** Tractors, combines, irrigation systems, and fencing need regular maintenance. When something breaks, the repair history is often lost — stored in a mechanic's memory or a box of receipts. This leads to repeated problems, missed preventive maintenance, and difficulty proving maintenance history for insurance or resale.

**GitHub Solution:** Create an Issue for each maintenance event. Include a description of the problem, photos of the issue (uploaded directly to the Issue), and the repair action taken. Labels categorize by equipment type (tractor, irrigation, fencing, tools). Closing the Issue with a comment documenting the fix creates a permanent, searchable maintenance log.

**Expected Outcome:** A complete, photo-documented maintenance history for every piece of equipment. Searchable by equipment type, date, or keyword.

**Exercise Sketch:** "Create an Issue for a broken fence post. Upload a photo. Add the 'fencing' label. Comment with the repair plan. Close when 'fixed.'"

---

### Use Case 4: Coordinate Harvest Crew Assignments

**Category:** Crops
**Difficulty:** Intermediate
**Session Alignment:** Session 3 (GitHub Projects)

**Farm Problem:** Harvest requires coordinating multiple workers across fields, equipment, and time slots. Communication is often verbal or text-based, leading to confusion about who is doing what and where.

**GitHub Solution:** Create a GitHub Project Board with columns for each status: Not Started, In Progress, Complete. Each field or task is an Issue assigned to a crew member. Moving cards across columns shows real-time progress. The Table view allows sorting by assignee to see each person's workload.

**Expected Outcome:** The entire harvest crew can see their assignments, check progress, and update status from any device.

**Exercise Sketch:** "Create a Project board with 3 columns. Add 5 harvest tasks as Issues. Assign each to a 'crew member.' Move 2 to 'In Progress.'"

---

### Use Case 5: Monitor Livestock Health Records

**Category:** Livestock
**Difficulty:** Basic
**Session Alignment:** Session 2 (GitHub Issues)

**Farm Problem:** Tracking vaccinations, vet visits, breeding records, and health incidents per animal or herd is difficult. Paper records get lost or damaged. When a vet asks for an animal's history, it takes time to reconstruct.

**GitHub Solution:** Use Issues with one Issue per health event. Labels identify the animal or herd (e.g., "Herd-A", "Bull-07"). Add photos, vet notes, and treatment details as comments. Pin important Issues (chronic conditions) for quick access.

**Expected Outcome:** A per-animal or per-herd health log accessible from any device. Vet visits, treatments, and vaccinations are recorded with dates and details.

**Exercise Sketch:** "Create an Issue for a vet visit. Label it with the animal's name. Add a comment with the treatment. Upload a photo of the record."

---

### Use Case 6: Store and Organize Farm Documentation

**Category:** Record-Keeping
**Difficulty:** Basic
**Session Alignment:** Session 1 (Repositories)

**Farm Problem:** Farm documents — operating procedures, safety protocols, crop rotation plans, vendor contacts, insurance records — are scattered across filing cabinets, email, and USB drives. Finding the right document takes time and they are vulnerable to loss.

**GitHub Solution:** Create a repository (a "digital barn") that stores all farm documents as files. The README serves as a table of contents. Folders organize documents by category (safety, crops, equipment, finances). Commit history provides version tracking — you can see when documents were added or changed.

**Expected Outcome:** A single, organized, searchable location for all farm documentation. Accessible from any device with internet.

**Exercise Sketch:** "Navigate the sample farm repository. Find the planting schedule file. Read the README to understand what's stored where."

---

### Use Case 7: Track Grant Compliance Milestones

**Category:** Compliance
**Difficulty:** Intermediate
**Session Alignment:** Session 3 (Projects), Session 9 (Advanced Projects)

**Farm Problem:** USDA grants, conservation programs (CRP, EQIP), and organic certifications require documenting specific activities, dates, and outcomes. Missing a reporting deadline or losing documentation can jeopardize funding.

**GitHub Solution:** Create a GitHub Project tracking each grant deliverable as an Issue. Custom fields record deadlines and completion status. The commit history serves as an automatic audit trail — every document added or updated is timestamped and attributed. Milestone grouping tracks multi-year programs.

**Expected Outcome:** Grant managers can verify compliance status at a glance. The audit trail demonstrates when work was completed. Reporting becomes a matter of exporting the project status rather than reconstructing records.

**Exercise Sketch:** "Create a Project for a sample USDA grant. Add 3 milestone Issues with deadlines. Mark one complete. Note how the commit history creates an audit trail."

---

### Use Case 8: Collaborate on Shared Farm Plans

**Category:** Collaboration
**Difficulty:** Intermediate
**Session Alignment:** Session 4 (Pull Requests)

**Farm Problem:** When multiple family members, employees, or neighboring farms need to contribute to shared plans (crop rotation, equipment sharing, cooperative marketing), coordinating changes via email or in-person meetings is slow and error-prone.

**GitHub Solution:** Share a repository containing the plan. Contributors fork the repo, make changes in the web editor, and submit a Pull Request. The PR shows exactly what changed, allows discussion through comments, and creates a record of who proposed what. Merging accepts the changes.

**Expected Outcome:** Structured, documented collaboration on shared farm plans with clear change tracking and approval workflow.

**Exercise Sketch:** "Fork the shared farm repository. Edit the planting schedule to add your field's plan. Submit a Pull Request. Review a partner's PR."

---

### Use Case 9: Get Automated Reminders for Recurring Tasks

**Category:** Automation
**Difficulty:** Advanced
**Session Alignment:** Session 7 (Intro to Actions), Session 8 (Automating Farm Tasks)

**Farm Problem:** Recurring tasks — weekly equipment checks, monthly soil tests, seasonal certifications — are easy to forget during busy periods. Setting up phone reminders for dozens of tasks is tedious.

**GitHub Solution:** Use GitHub Actions with a scheduled workflow (cron trigger) to automatically create Issues at set intervals. A simple workflow can create "Weekly Equipment Check" Issues every Monday morning, or "Monthly Soil Test" Issues on the first of each month.

**Expected Outcome:** Recurring tasks appear automatically as Issues in your repository. No manual reminder-setting required. The system works even during busy seasons.

**Exercise Sketch:** "Enable a pre-built workflow that creates a weekly 'Equipment Check' Issue every Monday. Verify it runs. Read the YAML to understand what it does."

---

### Use Case 10: Create Reusable Templates for Common Farm Processes

**Category:** Templates
**Difficulty:** Intermediate
**Session Alignment:** Session 6 (Workflows & Templates)

**Farm Problem:** The same types of tasks recur constantly — equipment inspections always need the same checklist, new season prep follows the same steps, employee onboarding covers the same topics. Starting from scratch each time wastes time and risks forgetting steps.

**GitHub Solution:** Create Issue Templates with pre-filled forms for common farm processes. A "Equipment Inspection" template includes checkboxes for tires, fluids, belts, safety equipment, etc. A "New Season Prep" template lists all pre-season tasks. Templates standardize processes across the team.

**Expected Outcome:** Common farm tasks start from a consistent template. New team members follow the same process. Nothing gets skipped.

**Exercise Sketch:** "Create an Issue Template for 'Equipment Maintenance Request.' Include fields for equipment name, problem description, urgency, and a checklist."

---

### Use Case 11: Share Farm Knowledge with Neighboring Farms

**Category:** Collaboration
**Difficulty:** Intermediate
**Session Alignment:** Session 4 (Pull Requests), Session 5 (Discussions)

**Farm Problem:** Farming knowledge is often informal — shared over fences, at the co-op, or at county fairs. Best practices for specific crops, pests, or soil conditions are difficult to document and share broadly.

**GitHub Solution:** Create a shared repository (or organization) where farmers can contribute knowledge. GitHub Discussions provide a Q&A and conversation forum. Forking allows each farm to customize shared templates for their specific needs while staying connected to updates.

**Expected Outcome:** A growing knowledge base accessible to the local farming community. Farmers help each other without needing to be in the same place at the same time.

**Exercise Sketch:** "Post a question in the farm community Discussions forum. Reply to a peer's question. Fork the shared crop guide to customize for your farm."

---

### Use Case 12: Build a Seasonal Farm Roadmap with Milestones

**Category:** Crops
**Difficulty:** Advanced
**Session Alignment:** Session 9 (Advanced Projects)

**Farm Problem:** Planning an entire growing season involves coordinating dozens of activities across fields, equipment, labor, and external factors (weather, market conditions). A high-level roadmap that shows the full season timeline is essential but hard to maintain.

**GitHub Solution:** Use GitHub Projects with custom fields (date, status, crop type, field) and the Roadmap/Timeline view to build a season-long visual plan. Iterations can represent planting windows or harvest weeks. Multiple repositories (one per major farm operation) can feed into a single Project for cross-functional visibility.

**Expected Outcome:** A visual, interactive seasonal roadmap showing all major activities, dependencies, and timelines.

**Exercise Sketch:** "Build a 6-month roadmap Project using Timeline view. Add custom fields for crop type and field name. Create 6 milestone Issues across the season."

---

### Use Case 13: Track Irrigation System Inspections

**Category:** Equipment
**Difficulty:** Basic
**Session Alignment:** Session 2 (GitHub Issues)

**Farm Problem:** Irrigation systems require regular inspection — checking for leaks, testing pressure, clearing nozzles, verifying timers. Missed inspections lead to crop loss or water waste. There is no easy way to document what was checked and when.

**GitHub Solution:** Create Issues with checklists (using GitHub's task list syntax: `- [ ] Check pressure`, `- [ ] Clear nozzles`, etc.). Each inspection run is a new Issue with the checklist. Photos of any problems are attached directly. The complete inspection history is searchable.

**Expected Outcome:** Documented inspection history with photo evidence. Checklist ensures consistency. Missing inspections are visible as gaps in the Issue timeline.

**Exercise Sketch:** "Create an Issue for an irrigation inspection with a 5-item checklist. Check off 3 items. Upload a photo of a 'problem.'"

---

### Use Case 14: Use AI to Draft Farm Task Descriptions

**Category:** AI-Assisted
**Difficulty:** Advanced
**Session Alignment:** Session 10 (GitHub Copilot)

**Farm Problem:** Writing detailed task descriptions, maintenance checklists, or project plans takes time. Farmers know what needs doing but may struggle to organize it in writing, especially for tasks they want to delegate.

**GitHub Solution:** Use GitHub Copilot to help draft Issue descriptions, checklists, and project plans. Prompt Copilot with a brief description ("weekly equipment check for tractor") and it generates a detailed checklist. Review and edit the output rather than writing from scratch.

**Expected Outcome:** Faster creation of detailed, well-structured farm task descriptions. Reduces the "blank page" barrier for farmers who are not confident writers.

**Exercise Sketch:** "Use Copilot to draft an Issue description for 'Spring Planting Prep.' Edit the result to match your specific farm. Compare your edited version with the AI draft."

---

### Use Case 15: Build a Simple Farm Dashboard App

**Category:** AI-Assisted
**Difficulty:** Advanced
**Session Alignment:** Session 11 (GitHub Spark)

**Farm Problem:** Farmers want a simple at-a-glance view of key farm data — today's tasks, weather, upcoming deadlines, equipment status — without needing to navigate multiple systems or websites.

**GitHub Solution:** Use GitHub Spark to create a simple web app that displays farm information. Spark allows natural-language app creation — describe what you want ("a daily farm checklist app with weather") and Spark generates a working app. No coding required.

**Expected Outcome:** A personalized farm dashboard accessible from any device. Created by the farmer themselves using natural language.

**Exercise Sketch:** "Use Spark to create a 'Farm Weather Checklist' app. Describe what you want in plain English. Customize the result. Share it with a partner."

---

## Category Coverage Summary

| Category | Use Cases | Sessions Covered |
|----------|----------|-----------------|
| Task Tracking | 1 | 2 |
| Crops | 2, 4, 12 | 3, 9 |
| Equipment | 3, 13 | 2 |
| Livestock | 5 | 2 |
| Record-Keeping | 6 | 1 |
| Compliance | 7 | 3, 9 |
| Collaboration | 8, 11 | 4, 5 |
| Automation | 9 | 7, 8 |
| Templates | 10 | 6 |
| AI-Assisted | 14, 15 | 10, 11 |

**Coverage:** 10 categories across 15 use cases covering 4+ farm operation types (crops, livestock, equipment, compliance) as required.

---

## Difficulty Distribution

| Difficulty | Count | Sessions |
|-----------|-------|----------|
| Basic | 6 | Sessions 1–2 |
| Intermediate | 6 | Sessions 3–6, 9 |
| Advanced | 3 | Sessions 7–11 |

This distribution mirrors the Bloom's Taxonomy progression: basic concepts early, application mid-curriculum, creation and evaluation in later sessions.

---

*This use case library should be validated with agricultural extension educators or pilot testers and expanded with real examples from the cohort as training progresses.*
