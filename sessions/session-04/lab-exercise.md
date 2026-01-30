# Session 4 Lab Exercise: Collaboration & Pull Requests

> **Duration:** 55 minutes total (Guided Practice 20 min + Independent Practice 35 min)
> **Prerequisites:** GitHub account (Session 1), Issues experience (Session 2), Projects experience (Session 3)
> **Materials:** Computer with browser, access to demo farm repository
> **Format:** Paired practice (Round 1 + Round 2), then individual practice

---

## Part 1: Guided Practice — Paired Collaboration (20 minutes)

You and your partner will practice the collaboration workflow together. One person suggests a change, the other reviews it, then you switch.

**Decide who is Partner A and who is Partner B before starting.**

### Round 1 — Partner A Suggests, Partner B Reviews (10 min)

**Partner A — Follow these steps:**

**Step 1: Fork the demo farm repository**
1. Go to the demo farm repository: `https://github.com/github4farms-training/demo-farm`
2. Click the **"Fork"** button (top right area of the page)
3. On the "Create a new fork" page, leave everything as-is
4. Click **"Create fork"**

**Checkpoint:** You should now be on a page that shows **your username / demo-farm** at the top, with "forked from github4farms-training/demo-farm" below it.

**Step 2: Edit a file**
1. Click the `crops/` folder
2. Click `planting-schedule.md`
3. Click the **pencil icon** (top right of the file) to edit
4. Change one planting date — for example, change Field 2's planting date from "May 1, 2026" to "May 15, 2026"
5. Scroll down to **"Commit changes"**
6. In the commit message box, type: **"Update Field 2 planting date — delayed by rain"**
7. Click **"Commit changes"**

**Checkpoint:** You should see the file with your updated date.

**Step 3: Create a Pull Request**
1. Go back to the main page of your fork (click the repository name at the top)
2. You should see a banner saying **"This branch is 1 commit ahead."** Click **"Contribute"** then **"Open pull request"**
3. **If you don't see the banner:** Click the **"Pull requests"** tab, then **"New pull request"**
4. Add a title: **"Update Field 2 planting date — [Your Name]"**
5. In the description, type: **"Changed planting date from May 1 to May 15 because of expected rain delays."**
6. Click **"Create pull request"**

**Checkpoint:** You should see your Pull Request page with your title and description.

---

**Partner B — Follow these steps:**

**Step 4: Review the Pull Request**
1. Go to the original demo farm repository: `https://github.com/github4farms-training/demo-farm`
2. Click the **"Pull requests"** tab
3. Find Partner A's Pull Request and click it
4. Click **"Files changed"** to see what was modified
5. You should see the old date in red and the new date in green

**Step 5: Leave a comment and approve**
1. Click **"Review changes"** (green button on the right)
2. Type a comment: **"Looks good — rain delay makes sense."**
3. Select **"Approve"**
4. Click **"Submit review"**

**Step 6: Merge the Pull Request**
1. Scroll down on the Pull Request page
2. Click **"Merge pull request"**
3. Click **"Confirm merge"**

**Checkpoint:** The Pull Request should now show a purple **"Merged"** badge. Partner A's change is now in the original repository.

---

### Round 2 — Switch Roles (10 min)

Now switch! **Partner B** suggests a change, **Partner A** reviews and merges.

**Partner B:**
1. Fork the demo farm repository (if you haven't already)
2. Edit a **different** file — try `livestock/health-records.md` or `equipment/maintenance-log.md`
3. Make a small change (update a date, add a note)
4. Write a commit message explaining your change
5. Create a Pull Request

**Partner A:**
1. Go to the Pull requests tab on the original repository
2. Find Partner B's Pull Request
3. Review the changes, leave a comment
4. Approve and merge

**Checkpoint:** Both partners have now created and merged one Pull Request each.

---

## Part 2: Independent Practice — Full Collaboration Cycle (35 minutes)

Now practice the full workflow on your own, using a farm scenario of your choice.

### Choose Your Scenario

Pick the scenario that fits your farm:

**Option A: Crop Farming — Weather-Delayed Planting**
You need to update the planting schedule because spring rains have delayed fieldwork by two weeks.
- Edit `crops/planting-schedule.md`
- Update at least 2 planting dates
- In your PR description, explain the weather situation

**Option B: Equipment Maintenance — Overdue Service**
The tractor's 500-hour service was completed. Update the maintenance log.
- Edit `equipment/maintenance-log.md`
- Update the tractor's last service date and hours
- In your PR description, note what service was performed

**Option C: Livestock Health — New Vet Visit**
The veterinarian visited and updated vaccination records.
- Edit `livestock/health-records.md`
- Update at least 1 animal's vet visit date and notes
- In your PR description, summarize the vet's findings

### Your Tasks

1. **Fork** the demo farm repository (or use your existing fork)
2. **Edit** the file for your scenario — make realistic changes
3. **Commit** with a clear message describing what you changed and why
4. **Create a Pull Request** with:
   - A descriptive title (not just "Update" — say what changed)
   - A description explaining why the change was needed
5. **Review** a classmate's Pull Request:
   - Read the changes in "Files changed"
   - Leave a helpful comment
   - Approve (or request a small change)
6. **Merge** a Pull Request you've been asked to review

### Success Criteria

You have completed this exercise when:
- [ ] You created a Pull Request with a descriptive title and explanation
- [ ] Your commit message explains what changed and why
- [ ] You reviewed and commented on at least 1 classmate's Pull Request
- [ ] At least 1 Pull Request you were involved in was merged

### Stretch Challenges (for those who finish early)

- [ ] Create a **second Pull Request** editing a different file
- [ ] Leave a **"Request changes"** review on someone's PR — ask them to fix something small (like a typo), then approve after they fix it
- [ ] Browse the **closed Pull Requests** list — what can you learn from the history?
- [ ] Edit a file in your **own** repository (not a fork) — notice how you can edit directly without a PR

---

## Reflection Questions

Answer these on your lab sheet or discuss with your partner:

1. **Your Pull Request number:** #_______

2. **What file did you edit?** _______________________

3. **What was your commit message?** Write it here:
   _____________________________________________

4. **What did the green and red highlighting show you** when reviewing a Pull Request?
   _____________________________________________

5. **Farm application:** Think about your farm. Name one document or plan that would benefit from a review process (Pull Request) before changes go live:
   _____________________________________________

6. **When would you use direct editing** (no Pull Request) vs. **fork + Pull Request** on your farm?
   _____________________________________________

---

## Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| Can't find the Fork button | Look at the top right area of the repository page, near the "Star" and "Watch" buttons |
| Don't see the pencil icon to edit | Make sure you're on **your fork** (your username in the URL), not the original repository. You can only edit files in repositories you own or have permission to edit |
| No "Contribute" banner after editing | Click the **"Pull requests"** tab on your fork, then **"New pull request"** — this is an alternative way to create a PR |
| Pull Request says "Can't automatically merge" | This usually means someone else changed the same file. Ask the instructor for help — this is normal in team collaboration |
| Accidentally edited the wrong file | Create the Pull Request anyway, then ask your reviewer to reject it. Or click the pencil icon and fix the file. You can always edit again |
| Partner's Pull Request doesn't appear | Make sure your partner created the PR to the **original** repository (github4farms-training/demo-farm), not to their own fork |
| "Merge" button is grayed out | You may not have permission to merge. Ask the instructor to check repository settings |
| Made a typo in commit message | You can't edit a commit message after committing, but you can explain the correction in your Pull Request description. This is normal — everyone does it |

---

*Remember: You can't break anything. Every change is tracked and can be undone. The collaboration workflow is designed so that mistakes are caught during review — that's the whole point!*
