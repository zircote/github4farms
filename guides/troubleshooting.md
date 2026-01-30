# GitHub Troubleshooting Guide

> **Quick Reference for Farmers** --- Solutions to the most common problems you'll encounter

---

## Account & Access Issues

### 1. I can't log in to GitHub

**Symptoms:** Login page rejects your password or email.

**Solutions:**
- Double-check your email address (case doesn't matter, but spelling does)
- Click **"Forgot password?"** on the login page to reset
- Check your email inbox (and spam folder) for the reset link
- If using a phone, try logging in on a computer first --- some phone browsers have issues with GitHub's login

---

### 2. I can't find my repository

**Symptoms:** Your repository doesn't appear on the GitHub homepage.

**Solutions:**
- Click your **profile avatar** (top-right) → **"Your repositories"**
- Check if you're signed into the **correct account** (look at the avatar in the top-right)
- Use the **search bar** at the top of the page to search for your repository name
- If someone else created it, check if it's in an **organization** rather than your personal account

---

### 3. I don't see the Copilot icon

**Symptoms:** No sparkle or Copilot icon appears in the Issue editor.

**Solutions:**
- Go to **Settings** → **Copilot** in your GitHub account and verify Copilot is enabled
- Try refreshing the page (Ctrl+R or Cmd+R)
- Make sure you're in the **description box** of an Issue, not just the title
- Copilot may not be available on all account types --- check with your instructor

---

## Issues & Labels

### 4. My Issue didn't save

**Symptoms:** You typed a description but the Issue isn't there.

**Solutions:**
- Make sure you clicked **"Submit new issue"** (green button) at the bottom
- Check that you have an **internet connection** --- GitHub won't save without it
- Look in your browser's **back button** --- your draft may still be there
- In the future, write long descriptions in a text file first, then paste into GitHub

---

### 5. Labels aren't showing on my Issues

**Symptoms:** You created labels but they don't appear on Issues.

**Solutions:**
- Labels must be **applied** to each Issue individually --- creating a label doesn't automatically attach it
- Open the Issue → click **"Labels"** on the right sidebar → select the label
- Make sure you're looking at labels in the **correct repository** (labels are per-repository, not global)

---

### 6. My Issue template doesn't appear when I create a new Issue

**Symptoms:** You set up a template but don't see it as an option.

**Solutions:**
- Make sure you **committed** the template (clicked "Propose changes" and then "Commit changes")
- Go to **Issues** → **New issue** --- templates appear on that page, not inside the editor
- Check **Settings** → scroll to **Features** → verify the template file exists
- Templates live in `.github/ISSUE_TEMPLATE/` --- make sure the file is there

---

## Projects & Views

### 7. My Project board is empty

**Symptoms:** You created a Project but no Issues appear.

**Solutions:**
- Issues must be **manually added** to Projects --- they don't appear automatically
- In your Project, click **"+ Add item"** at the bottom of any column
- Search for your Issues by typing `#` and selecting your repository
- If Issues still don't appear, make sure they exist in the repository (check the Issues tab)

---

### 8. Timeline / Roadmap view is blank

**Symptoms:** You created a Roadmap view but no Issues appear on the timeline.

**Solutions:**
- Issues need **date values** to appear on a timeline
- Switch to **Table view** → add a **Date** field if one doesn't exist
- Fill in **start and end dates** for each Issue
- Switch back to **Roadmap view** --- Issues should now appear
- Make sure the date range on the timeline includes the dates you set (zoom in/out or scroll)

---

### 9. Custom fields disappeared from my Project

**Symptoms:** The fields you added (Priority, Season, etc.) aren't visible.

**Solutions:**
- Click the **"+"** next to column headers in Board or Table view to show hidden fields
- Go to **Project Settings** → **Custom fields** to verify they still exist
- In Table view, click the **column header area** and check which fields are visible
- Custom fields are per-Project --- if you're looking at a different Project, the fields won't be there

---

## Collaboration & Pull Requests

### 10. I can't edit someone else's repository

**Symptoms:** There's no edit button or you get a "permission denied" error.

**Solutions:**
- You need **write access** to edit directly --- ask the repository owner to add you as a collaborator
- Alternatively, **fork** the repository (click "Fork" at the top-right), make changes in your copy, then create a **Pull Request** to suggest your changes
- If you're in an organization, check with the admin about your access level

---

### 11. My Pull Request has merge conflicts

**Symptoms:** GitHub says your PR can't be merged automatically.

**Solutions:**
- This happens when someone else changed the same file you changed
- Click the **"Resolve conflicts"** button on the PR page
- GitHub will show you the conflicting sections --- choose which version to keep
- If the conflict is complex, ask a collaborator or instructor for help
- To prevent conflicts: always start from the latest version of `main` before making changes

---

## Notifications & Settings

### 12. I'm getting too many notifications

**Symptoms:** Your inbox is flooded with GitHub emails and alerts.

**Solutions:**
- Click the **bell icon** (top-right) → **"Manage notifications"**
- For noisy repositories: click **"Watch"** → change to **"Participating and @mentions"**
- Go to **Settings** → **Notifications** to configure email preferences
- Use the **"Done"** button in the notification inbox to clear items you've read

---

### 13. I'm not getting any notifications

**Symptoms:** Activity is happening but you don't see alerts.

**Solutions:**
- Check that you're **watching** the repository (click "Watch" and select a notification level)
- Go to **Settings** → **Notifications** → verify your email is correct
- Check your **spam folder** for GitHub emails
- Make sure notifications aren't going to a different email address
- Try the **GitHub notification inbox** (bell icon) instead of relying on email

---

## General Tips

### 14. The page looks broken or buttons don't work

**Solutions:**
- **Refresh the page** (Ctrl+R or Cmd+R)
- **Clear your browser cache** (Settings → Clear browsing data → Cached images and files)
- Try a **different browser** (Chrome, Firefox, Edge, or Safari)
- Check GitHub's status page: **githubstatus.com**
- If on a phone or tablet, try switching to **desktop mode** in your browser

---

### 15. I accidentally deleted something

**Solutions:**
- **Issues:** Deleted Issues can sometimes be restored --- check with your instructor or organization admin
- **Files:** If you committed before deleting, the file is still in your **commit history** (click "Commits" on the repository page to find earlier versions)
- **Repository:** Deleted repositories can be restored within 90 days --- go to Settings → Repositories → "Deleted repositories"
- **Prevention:** GitHub rarely deletes things permanently. Most actions can be undone.

---

*If your problem isn't listed here, ask your instructor or search GitHub Docs at docs.github.com. You can also ask in the GitHub Community forums at github.community.*
