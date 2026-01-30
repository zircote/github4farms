/**
 * Build Session 8 PowerPoint deck: "Automating Farm Tasks"
 *
 * Generates slides.pptx from the slides.md content with the
 * GitHub4Farms forest/sage/cream color theme.
 *
 * Usage: node build-slides.js
 * Output: slides.pptx (same directory)
 */

const pptxgen = require("pptxgenjs");
const path = require("path");

// ── Theme Colors ────────────────────────────────────────────────
const FOREST_GREEN = "1E5128";
const SAGE = "4E9F3D";
const CREAM = "F4F1DE";
const CHARCOAL = "2C2C2C";
const WHITE = "FFFFFF";

// ── Font sizes (accessible) ────────────────────────────────────
const TITLE_SIZE = 30;
const HEADER_SIZE = 26;
const BODY_SIZE = 18;
const SMALL_SIZE = 14;
const TABLE_HEADER_SIZE = 14;
const TABLE_BODY_SIZE = 12;

// ── Layout helpers ──────────────────────────────────────────────

function addHeader(slide, text) {
  slide.addText(text, {
    x: 0.6,
    y: 0.3,
    w: 8.8,
    h: 0.8,
    fontSize: HEADER_SIZE,
    fontFace: "Arial",
    color: FOREST_GREEN,
    bold: true,
    valign: "middle",
  });
}

function addBody(slide, text, opts = {}) {
  const y = opts.y || 1.3;
  const h = opts.h || 4.2;
  slide.addText(text, {
    x: 0.6,
    y,
    w: 8.8,
    h,
    fontSize: opts.fontSize || BODY_SIZE,
    fontFace: "Arial",
    color: CHARCOAL,
    valign: "top",
    lineSpacingMultiple: 1.3,
    ...opts,
  });
}

function addBullets(slide, items, opts = {}) {
  const textRows = items.map((item) => ({
    text: item,
    options: {
      bullet: { type: "number" in opts ? "number" : true, color: SAGE },
      fontSize: opts.fontSize || BODY_SIZE,
      color: CHARCOAL,
      lineSpacingMultiple: 1.3,
      indentLevel: 0,
    },
  }));
  slide.addText(textRows, {
    x: opts.x || 0.6,
    y: opts.y || 1.3,
    w: opts.w || 8.8,
    h: opts.h || 4.2,
    fontFace: "Arial",
    valign: "top",
  });
}

function addNotes(slide, text) {
  slide.addNotes(text);
}

function addFooter(slide, slideNum) {
  slide.addText(
    `Session 8 of 12  |  Automating Farm Tasks  |  Slide ${slideNum}`,
    {
      x: 0.3,
      y: 5.0,
      w: 9.4,
      h: 0.4,
      fontSize: 10,
      fontFace: "Arial",
      color: SAGE,
      align: "center",
      valign: "bottom",
    },
  );
}

function addTable(slide, headers, rows, opts = {}) {
  const tableRows = [];
  // Header row
  tableRows.push(
    headers.map((h) => ({
      text: h,
      options: {
        bold: true,
        fontSize: TABLE_HEADER_SIZE,
        fontFace: "Arial",
        color: WHITE,
        fill: { color: FOREST_GREEN },
        align: "left",
        valign: "middle",
      },
    })),
  );
  // Data rows
  rows.forEach((row, i) => {
    tableRows.push(
      row.map((cell) => ({
        text: cell,
        options: {
          fontSize: TABLE_BODY_SIZE,
          fontFace: "Arial",
          color: CHARCOAL,
          fill: { color: i % 2 === 0 ? WHITE : CREAM },
          align: "left",
          valign: "middle",
        },
      })),
    );
  });

  slide.addTable(tableRows, {
    x: opts.x || 0.6,
    y: opts.y || 1.4,
    w: opts.w || 8.8,
    colW: opts.colW,
    border: { type: "solid", pt: 0.5, color: SAGE },
    rowH: opts.rowH || 0.42,
    autoPage: false,
  });
}

function addCodeBlock(slide, code, opts = {}) {
  slide.addShape("rect", {
    x: opts.x || 0.6,
    y: opts.y || 1.4,
    w: opts.w || 8.8,
    h: opts.h || 3.6,
    fill: { color: "1E1E1E" },
    rectRadius: 0.1,
  });
  slide.addText(code, {
    x: (opts.x || 0.6) + 0.2,
    y: (opts.y || 1.4) + 0.15,
    w: (opts.w || 8.8) - 0.4,
    h: (opts.h || 3.6) - 0.3,
    fontSize: opts.fontSize || 13,
    fontFace: "Courier New",
    color: "D4D4D4",
    valign: "top",
    lineSpacingMultiple: 1.2,
  });
}

// ── Build Deck ──────────────────────────────────────────────────

async function buildDeck() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub Training for Farmers";
  pptx.title = "Session 8: Automating Farm Tasks";
  pptx.subject = "Setting Up Your First Automated Workflow";

  let slideNum = 0;

  function newSlide(bgColor) {
    slideNum++;
    const slide = pptx.addSlide();
    slide.background = { color: bgColor || CREAM };
    addFooter(slide, slideNum);
    return slide;
  }

  // ── Slide 1: Title ────────────────────────────────────────────
  {
    const slide = pptx.addSlide();
    slideNum++;
    slide.background = { color: FOREST_GREEN };
    slide.addText("Automating Farm Tasks", {
      x: 0.6,
      y: 1.2,
      w: 8.8,
      h: 1.2,
      fontSize: 36,
      fontFace: "Arial",
      color: WHITE,
      bold: true,
      align: "center",
      valign: "middle",
    });
    slide.addText("Setting Up Your First Automated Workflow", {
      x: 0.6,
      y: 2.5,
      w: 8.8,
      h: 0.8,
      fontSize: 22,
      fontFace: "Arial",
      color: CREAM,
      italic: true,
      align: "center",
      valign: "middle",
    });
    slide.addText("Session 8 of 12 \u2014 GitHub Training for Farmers", {
      x: 0.6,
      y: 3.8,
      w: 8.8,
      h: 0.6,
      fontSize: BODY_SIZE,
      fontFace: "Arial",
      color: SAGE,
      align: "center",
      valign: "middle",
    });
    addFooter(slide, slideNum);
  }

  // ── Slide 2: Welcome Back ─────────────────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Welcome to Session 8!");
    addBullets(
      slide,
      [
        "Navigate repositories (Session 1)",
        "Track tasks with Issues (Session 2)",
        "Organize with Projects (Session 3)",
        "Collaborate with Pull Requests (Session 4)",
        "Stay connected with notifications (Session 5)",
        "Build templates for reusable tasks (Session 6)",
        "Understand triggers and YAML basics (Session 7)",
      ],
      { y: 1.2, h: 3.0 },
    );
    addBody(
      slide,
      "Today you\u2019ll build your first automated workflow \u2014 a task that runs by itself on a schedule, like setting an alarm clock for your farm chores.",
      {
        y: 4.0,
        h: 0.8,
        bold: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 3: Why This Matters ─────────────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Why This Matters for YOUR Farm");
    addBody(
      slide,
      "Quick Question: What farm task would you love to have done automatically?",
      {
        y: 1.2,
        h: 0.7,
        bold: true,
        fontSize: 20,
      },
    );
    addBullets(
      slide,
      [
        "A weekly equipment check reminder every Monday?",
        "A monthly soil test reminder on the first of the month?",
        "A daily livestock health check prompt every morning?",
        "A seasonal planting reminder at the start of each quarter?",
      ],
      { y: 2.1, h: 2.2 },
    );
    addBody(
      slide,
      "What if GitHub could remind you \u2014 automatically \u2014 without you having to remember?",
      {
        y: 4.2,
        h: 0.6,
        italic: true,
        color: SAGE,
        fontSize: 20,
      },
    );
    addNotes(
      slide,
      'Instructor note: Let 3-4 learners answer. Write responses on the whiteboard. "These are all things GitHub Actions can do for you."',
    );
  }

  // ── Slide 4: Quick Review from Session 7 ──────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Quick Review from Session 7");
    addBody(slide, "Last session, you learned:", {
      y: 1.2,
      h: 0.5,
      bold: true,
    });
    addBullets(
      slide,
      [
        "Triggers \u2014 events that start a workflow (like a motion sensor turning on a barn light)",
        "YAML \u2014 the language workflows are written in (like a recipe card with exact formatting)",
        "Workflow file \u2014 lives in the .github/workflows/ folder of your repository",
        "Three trigger types: manual (workflow_dispatch), event-based (push, issues), and scheduled (schedule)",
      ],
      { y: 1.8, h: 2.6 },
    );
    addBody(
      slide,
      "Today we focus on scheduled triggers \u2014 the alarm clock of GitHub Actions.",
      {
        y: 4.2,
        h: 0.6,
        bold: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 5: What Are GitHub Actions? ─────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "What Are GitHub Actions?");
    addBody(slide, "GitHub Actions = Your Automated Farmhand", {
      y: 1.2,
      h: 0.5,
      bold: true,
      fontSize: 22,
      color: SAGE,
    });
    addBody(slide, "Imagine you could hire a helper who:", { y: 1.8, h: 0.4 });
    addBullets(
      slide,
      [
        "Shows up at the exact same time every week",
        "Does the same task perfectly every time",
        "Never forgets, never takes a day off",
        "Leaves a log of everything they did",
      ],
      { y: 2.3, h: 2.0 },
    );
    addBody(
      slide,
      "That\u2019s GitHub Actions. You write the instructions once, and GitHub runs them on your schedule.",
      {
        y: 4.2,
        h: 0.6,
        bold: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 6: Starter Workflow Templates ───────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Starter Workflow Templates");
    addBody(
      slide,
      "GitHub gives you pre-built templates \u2014 like buying a pre-made fence kit instead of cutting every board yourself.",
      {
        y: 1.2,
        h: 0.7,
        italic: true,
        color: SAGE,
        fontSize: 20,
      },
    );
    addBody(
      slide,
      "GitHub\u2019s Actions Marketplace has hundreds of templates:",
      { y: 2.0, h: 0.4 },
    );
    addBullets(
      slide,
      [
        "Ready-to-use workflows for common tasks",
        "Created by GitHub and the community",
        "You pick one, customize it, and you\u2019re done",
      ],
      { y: 2.5, h: 1.5 },
    );
    addBody(
      slide,
      "Today we\u2019ll start with a template and then modify it to fit your farm.",
      {
        y: 4.2,
        h: 0.6,
        bold: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 7: How to Enable a Starter Workflow ─────────────────
  {
    const slide = newSlide();
    addHeader(slide, "How to Enable a Starter Workflow");
    addBullets(
      slide,
      [
        "Go to your repository on GitHub",
        'Click the "Actions" tab at the top',
        'You\u2019ll see a page that says "Get started with GitHub Actions"',
        "Browse the suggested workflows or search for one",
        'Click "Configure" on the template you want',
        "Review the YAML file (we\u2019ll walk through it)",
        'Click "Commit changes" to save it',
      ],
      { y: 1.2, h: 3.5 },
    );
    addBody(
      slide,
      "That\u2019s it \u2014 the workflow is now active in your repository.",
      {
        y: 4.3,
        h: 0.5,
        bold: true,
        color: FOREST_GREEN,
      },
    );
    addNotes(
      slide,
      'Instructor note: Emphasize that clicking "Configure" does NOT activate the workflow yet. Learners must commit the file to enable it.',
    );
  }

  // ── Slide 8: Understanding the Schedule: Cron Syntax ──────────
  {
    const slide = newSlide();
    addHeader(slide, "Understanding the Schedule: Cron Syntax");
    addBody(slide, "Cron = Your Alarm Clock Settings", {
      y: 1.2,
      h: 0.4,
      bold: true,
      color: SAGE,
      fontSize: 22,
    });
    addBody(
      slide,
      "A cron schedule has 5 fields \u2014 think of setting an alarm:",
      { y: 1.7, h: 0.4 },
    );
    const cronDiagram =
      " *    *    *    *    *\n" +
      " |    |    |    |    |\n" +
      " |    |    |    |    +--- Day of week (0=Sun ... 6=Sat)\n" +
      " |    |    |    +-------- Month (1-12)\n" +
      " |    |    +------------- Day of month (1-31)\n" +
      " |    +------------------ Hour (0-23)\n" +
      " +----------------------- Minute (0-59)";
    addCodeBlock(slide, cronDiagram, { y: 2.2, h: 2.3, fontSize: 14 });
    addBody(
      slide,
      "Think of it like: Minute, Hour, Day-of-Month, Month, Day-of-Week",
      {
        y: 4.5,
        h: 0.4,
        bold: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 9: Cron Examples for Farmers ────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Cron Examples for Farmers");
    addTable(
      slide,
      ["What You Want", "Cron Expression", "Plain English"],
      [
        ["Every day at 8 AM", "0 8 * * *", "Minute 0, Hour 8, every day"],
        ["Every Monday at 7 AM", "0 7 * * 1", "Minute 0, Hour 7, Monday"],
        [
          "First of every month at 6 AM",
          "0 6 1 * *",
          "Minute 0, Hour 6, Day 1",
        ],
        ["Every weekday at 9 AM", "0 9 * * 1-5", "Minute 0, Hour 9, Mon-Fri"],
        ["Every Sunday at 5 PM", "0 17 * * 0", "Minute 0, Hour 17, Sunday"],
      ],
      { y: 1.3, colW: [3.2, 2.4, 3.2], rowH: 0.45 },
    );
    addBody(
      slide,
      'Key: An asterisk * means "every" \u2014 like saying "any day" or "any month."',
      {
        y: 4.2,
        h: 0.6,
        bold: true,
        color: FOREST_GREEN,
      },
    );
    addNotes(
      slide,
      'Instructor note: Use the alarm clock analogy. "If you set your phone alarm for 7 AM every Monday, the cron is 0 7 * * 1. Zero minutes past 7, every month, every day-of-month, but only on Monday."',
    );
  }

  // ── Slide 10: Important Note About Time Zones ─────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Important Note About Time Zones");
    addBody(
      slide,
      "GitHub Actions uses UTC time (Coordinated Universal Time).",
      {
        y: 1.2,
        h: 0.5,
        bold: true,
        color: SAGE,
        fontSize: 20,
      },
    );
    addBullets(
      slide,
      [
        "If your farm is in the US Central Time zone, UTC is 6 hours ahead (or 5 during daylight saving)",
        "To get a Monday 7 AM Central reminder, you\u2019d set 1 PM UTC: 0 13 * * 1",
        "Don\u2019t worry about getting this perfect today \u2014 we\u2019ll keep it simple",
      ],
      { y: 1.9, h: 2.0 },
    );
    addBody(
      slide,
      "Tip: For now, just know your workflow might run a few hours earlier or later than expected. You can adjust later.",
      {
        y: 4.0,
        h: 0.8,
        italic: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 11: Reading a Workflow File ─────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Reading a Workflow File");
    addBody(slide, "Let\u2019s read a workflow file like a recipe card:", {
      y: 1.1,
      h: 0.4,
      bold: true,
    });
    const yaml =
      "name: Weekly Equipment Check Reminder\n\n" +
      "on:\n" +
      "  schedule:\n" +
      "    - cron: '0 13 * * 1'\n\n" +
      "jobs:\n" +
      "  create-reminder:\n" +
      "    runs-on: ubuntu-latest\n" +
      "    steps:\n" +
      "      - name: Create equipment check issue\n" +
      "        uses: actions/github-script@v7\n" +
      "        with:\n" +
      "          script: |\n" +
      "            await github.rest.issues.create({\n" +
      "              owner: context.repo.owner,\n" +
      "              repo: context.repo.repo,\n" +
      "              title: 'Weekly Equipment Check - '\n" +
      "                     + new Date().toLocaleDateString(),\n" +
      "              body: '## Equipment Check Checklist\\n'\n" +
      "                    + '- [ ] Check tractor oil\\n'\n" +
      "                    + '- [ ] Inspect irrigation lines',\n" +
      "              labels: ['equipment', 'recurring']\n" +
      "            })";
    addCodeBlock(slide, yaml, { y: 1.5, h: 3.6, fontSize: 11 });
    addBody(
      slide,
      "Don\u2019t panic! We\u2019ll break this down piece by piece.",
      {
        y: 5.0,
        h: 0.3,
        italic: true,
        color: SAGE,
        fontSize: 14,
      },
    );
  }

  // ── Slide 12: Breaking Down the Recipe ────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Breaking Down the Recipe");
    addBody(slide, "Line by line, like reading a recipe card:", {
      y: 1.1,
      h: 0.3,
      bold: true,
      fontSize: 16,
    });
    addTable(
      slide,
      ["Line", "What It Does", "Farm Analogy"],
      [
        ["name:", "Names the workflow", "Title on the recipe card"],
        ["on: schedule:", "Sets the trigger", '"Make this every Monday"'],
        [
          "cron: '0 13 * * 1'",
          "The exact schedule",
          '"At 1 PM UTC on Mondays"',
        ],
        ["jobs:", "The work to do", '"Here are the steps"'],
        ["runs-on:", "Which computer runs it", '"Use the kitchen stove"'],
        ["steps:", "Individual actions", '"Step 1: Preheat. Step 2: Mix."'],
        ["uses:", "A pre-built tool", '"Use the stand mixer"'],
        ["title:", "The Issue title", '"What to write on the work order"'],
        ["body:", "The Issue content", '"The checklist inside the work order"'],
      ],
      { y: 1.35, colW: [2.6, 2.6, 3.6], rowH: 0.36 },
    );
  }

  // ── Slide 13: Verifying Your Workflow Runs ────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Verifying Your Workflow Runs");
    addBody(slide, "How do you know it worked?", {
      y: 1.2,
      h: 0.4,
      bold: true,
      color: SAGE,
      fontSize: 22,
    });
    addBullets(
      slide,
      [
        'Go to the "Actions" tab in your repository',
        "You\u2019ll see a list of workflow runs",
        "Look for the status icon:",
      ],
      { y: 1.7, h: 1.3 },
    );
    // Status icons as sub-items
    addBullets(
      slide,
      [
        "\u2705  Green checkmark = Success (the task completed)",
        "\u274C  Red X = Failed (something went wrong)",
        "\uD83D\uDFE1  Yellow circle = In progress (still running)",
        "Click on a run to see the details and log",
      ],
      { y: 3.0, h: 1.4, x: 1.2, w: 7.6 },
    );
    addBody(
      slide,
      "Think of it like checking your alarm clock history \u2014 did it go off? Did you hear it?",
      {
        y: 4.3,
        h: 0.5,
        italic: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 14: Reading the Run Log ─────────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Reading the Run Log");
    addBody(slide, "When you click on a workflow run, you see:", {
      y: 1.2,
      h: 0.4,
      bold: true,
    });
    addBullets(
      slide,
      [
        "Summary page \u2014 shows which jobs ran and their status",
        "Job details \u2014 click a job name to see each step",
        "Step logs \u2014 click a step to see exactly what happened",
      ],
      { y: 1.7, h: 1.5 },
    );
    addBody(slide, "What to look for:", {
      y: 3.2,
      h: 0.4,
      bold: true,
    });
    addBullets(
      slide,
      [
        "Green checkmarks next to each step = everything worked",
        "A red X next to a step = that step failed",
        "The error message tells you what went wrong",
      ],
      { y: 3.6, h: 1.2 },
    );
    addNotes(
      slide,
      "Instructor note: Show a real workflow run log on the projector. Point out the expandable sections and green checkmarks.",
    );
  }

  // ── Slide 15: Troubleshooting: Common Errors ──────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Troubleshooting: Common Errors");
    addTable(
      slide,
      ["Error Message", "What It Means", "How to Fix It"],
      [
        [
          '"Invalid workflow file"',
          "YAML formatting is wrong",
          "Check indentation (spaces, not tabs)",
        ],
        [
          '"Unexpected value"',
          "A field has a typo",
          "Check spelling of keywords",
        ],
        [
          '"Resource not accessible"',
          "Permissions issue",
          "Settings > Actions > General, enable R/W permissions",
        ],
        [
          '"Cron expression is invalid"',
          "Schedule format is wrong",
          "Check 5 fields, use single quotes",
        ],
        [
          "No run appears at all",
          "Workflow not triggered yet",
          "Wait, or add workflow_dispatch to test manually",
        ],
      ],
      { y: 1.3, colW: [2.9, 2.5, 3.4], rowH: 0.52 },
    );
    addBody(
      slide,
      "Number one cause of errors: Indentation. YAML uses spaces (not tabs) and every level must line up exactly.",
      {
        y: 4.3,
        h: 0.6,
        bold: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 16: Live Demo ───────────────────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Live Demo: Weekly Equipment Check Workflow");
    addBody(slide, "Watch me build an automated reminder from scratch.", {
      y: 1.2,
      h: 0.4,
      bold: true,
      color: SAGE,
      fontSize: 20,
    });
    addBullets(
      slide,
      [
        "Go to my demo repository",
        "Click the Actions tab",
        'Choose "set up a workflow yourself"',
        "Paste the Weekly Equipment Check workflow",
        "Commit the file",
        "Trigger it manually to test",
        "Check the Actions tab for the green checkmark",
        "Open the Issue it created",
      ],
      { y: 1.8, h: 2.8 },
    );
    addBody(
      slide,
      "Just watch for now \u2014 you\u2019ll build your own next.",
      {
        y: 4.3,
        h: 0.5,
        bold: true,
        color: FOREST_GREEN,
      },
    );
    addNotes(
      slide,
      "Instructor note: Have the YAML pre-typed in a text file to paste during the demo. Show each step slowly. After committing, trigger manually using workflow_dispatch if the schedule hasn't fired yet. Walk through the run log step by step.",
    );
  }

  // ── Slide 17: Adding Manual Trigger for Testing ───────────────
  {
    const slide = newSlide();
    addHeader(slide, "Adding Manual Trigger for Testing");
    addBody(slide, "Pro tip: Add workflow_dispatch so you can test anytime.", {
      y: 1.2,
      h: 0.4,
      bold: true,
      color: SAGE,
      fontSize: 20,
    });
    const yaml =
      "on:\n" +
      "  schedule:\n" +
      "    - cron: '0 13 * * 1'\n" +
      "  workflow_dispatch:";
    addCodeBlock(slide, yaml, { y: 1.8, h: 1.6, fontSize: 16 });
    addBody(
      slide,
      'Adding workflow_dispatch means you can also click "Run workflow" in the Actions tab to test it immediately \u2014 instead of waiting until the scheduled time.',
      {
        y: 3.6,
        h: 0.8,
      },
    );
    addBody(
      slide,
      'Think of it like adding a "Test" button to your alarm clock so you can make sure it works before Monday.',
      {
        y: 4.3,
        h: 0.6,
        italic: true,
        color: FOREST_GREEN,
      },
    );
  }

  // ── Slide 18: Guided Practice Introduction ────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Guided Practice: Your Turn!");
    addBody(slide, "We\u2019ll work through this together, step by step:", {
      y: 1.2,
      h: 0.4,
      bold: true,
    });
    addBullets(
      slide,
      [
        "Open your farm repository",
        "Go to the Actions tab",
        "Create a new workflow file",
        "Paste the Weekly Equipment Check YAML",
        "Modify the schedule",
        "Commit and test it",
      ],
      { y: 1.7, h: 2.2 },
    );
    addBody(slide, "Open your lab exercise handout to Part 1.", {
      y: 3.7,
      h: 0.4,
      bold: true,
      color: FOREST_GREEN,
    });
    addBody(
      slide,
      "If you get stuck: (1) Check the quick-reference guide, (2) Ask your partner, (3) Raise your hand.",
      {
        y: 4.1,
        h: 0.4,
        fontSize: 16,
      },
    );
    addBody(
      slide,
      "You can\u2019t break anything. If something goes wrong, we\u2019ll fix it together.",
      {
        y: 4.5,
        h: 0.4,
        bold: true,
        italic: true,
        color: SAGE,
      },
    );
    addNotes(
      slide,
      "Instructor note: Pair learners. Distribute lab exercise and workflow setup guide handouts. Move through steps slowly \u2014 wait for all hands down before proceeding.",
    );
  }

  // ── Slide 19: Break ───────────────────────────────────────────
  {
    const slide = newSlide(FOREST_GREEN);
    slide.addText("BREAK", {
      x: 0.6,
      y: 1.4,
      w: 8.8,
      h: 1.0,
      fontSize: 40,
      fontFace: "Arial",
      color: WHITE,
      bold: true,
      align: "center",
      valign: "middle",
    });
    slide.addText("15 Minutes", {
      x: 0.6,
      y: 2.5,
      w: 8.8,
      h: 0.7,
      fontSize: 28,
      fontFace: "Arial",
      color: CREAM,
      align: "center",
      valign: "middle",
    });
    slide.addText(
      "When we come back, you\u2019ll create your own automated farm workflow from scratch!\n\nThink about which scenario you want to try:\n\u2022 Equipment: Weekly equipment check reminder\n\u2022 Crops: Planting season preparation reminder\n\u2022 Livestock: Livestock health check reminder",
      {
        x: 1.0,
        y: 3.4,
        w: 8.0,
        h: 1.8,
        fontSize: BODY_SIZE,
        fontFace: "Arial",
        color: CREAM,
        align: "center",
        valign: "top",
        lineSpacingMultiple: 1.3,
      },
    );
  }

  // ── Slide 20: Independent Practice ────────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Independent Practice: Your Challenge");
    addBody(
      slide,
      "Create an automated farm reminder workflow. Choose your scenario:",
      {
        y: 1.2,
        h: 0.4,
        bold: true,
      },
    );
    addBullets(
      slide,
      [
        "Option A: Weekly Equipment Check \u2014 every Monday at 7 AM",
        "Option B: Planting Season Reminder \u2014 first of each month at 8 AM",
        "Option C: Livestock Health Check \u2014 every Wednesday and Friday at 6 AM",
      ],
      { y: 1.7, h: 1.3, fontSize: 16 },
    );
    addBody(slide, "Steps:", { y: 3.0, h: 0.3, bold: true });
    addBullets(
      slide,
      [
        "Create a new workflow file in .github/workflows/",
        "Copy the YAML template for your scenario",
        "Customize the Issue title and checklist",
        "Add workflow_dispatch for testing",
        "Commit, test, and verify in the Actions tab",
        "If it fails, read the error log and fix the problem",
      ],
      { y: 3.3, h: 2.0, fontSize: 16 },
    );
    addBody(
      slide,
      "Stretch challenge: Modify the cron schedule to a different day or time.",
      {
        y: 4.8,
        h: 0.3,
        italic: true,
        color: SAGE,
        fontSize: 14,
      },
    );
  }

  // ── Slide 21: Key Vocabulary Review ───────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Key Vocabulary Review");
    addTable(
      slide,
      ["Term", "Definition"],
      [
        [
          "GitHub Actions",
          "GitHub\u2019s automation system that runs tasks for you",
        ],
        ["Workflow", "A set of automated instructions stored as a YAML file"],
        [
          "Cron schedule",
          "A 5-field time expression that controls when a workflow runs",
        ],
        [
          "Workflow run",
          "One execution of your workflow (visible in the Actions tab)",
        ],
        [
          "Run log",
          "The detailed record of what happened during a workflow run",
        ],
        [
          "workflow_dispatch",
          "A trigger that lets you run a workflow manually",
        ],
      ],
      { y: 1.3, colW: [2.8, 6.0], rowH: 0.5 },
    );
  }

  // ── Slide 22: Reflection ──────────────────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "Reflection");
    addBody(slide, "Think about your farm:", {
      y: 1.2,
      h: 0.4,
      bold: true,
      color: SAGE,
      fontSize: 22,
    });
    addBullets(
      slide,
      [
        "What recurring task would save you the most time if it were automated?",
        "How often would you want the reminder \u2014 daily, weekly, monthly?",
        "What information would you include in the automated Issue?",
      ],
      { y: 1.8, h: 2.0, fontSize: 20 },
    );
    addBody(slide, "Turn to your partner and share your answers. (3 minutes)", {
      y: 4.0,
      h: 0.5,
      bold: true,
      color: FOREST_GREEN,
      fontSize: 22,
    });
    addNotes(
      slide,
      "Instructor note: Walk around and listen. Note which scenarios are most popular \u2014 this informs Session 9 planning.",
    );
  }

  // ── Slide 23: What's Next ─────────────────────────────────────
  {
    const slide = newSlide();
    addHeader(slide, "What\u2019s Next: Session 9");
    addBody(slide, "Session 9: Advanced Projects", {
      y: 1.2,
      h: 0.5,
      bold: true,
      color: SAGE,
      fontSize: 22,
    });
    addBody(
      slide,
      "You\u2019ll learn to build more complex workflows and connect automation to your project boards \u2014 like having your automated farmhand not only create the work order but also pin it to your planning board.",
      {
        y: 1.8,
        h: 1.0,
      },
    );
    addBody(slide, "Optional between-session practice:", {
      y: 2.9,
      h: 0.4,
      bold: true,
    });
    addBullets(
      slide,
      [
        "Let your scheduled workflow run at least once on its own",
        "Check the Actions tab to verify it created an Issue",
        "Try modifying the checklist in your workflow file",
        "Experiment with a different cron schedule",
      ],
      { y: 3.3, h: 1.6 },
    );
  }

  // ── Slide 24: Feedback / Thank You ────────────────────────────
  {
    const slide = newSlide(FOREST_GREEN);
    slide.addText("Please fill out the 2-minute survey\nbefore you leave.", {
      x: 0.6,
      y: 1.2,
      w: 8.8,
      h: 1.2,
      fontSize: 24,
      fontFace: "Arial",
      color: CREAM,
      align: "center",
      valign: "middle",
      lineSpacingMultiple: 1.4,
    });
    slide.addText("Thank You!", {
      x: 0.6,
      y: 2.8,
      w: 8.8,
      h: 1.0,
      fontSize: 40,
      fontFace: "Arial",
      color: WHITE,
      bold: true,
      align: "center",
      valign: "middle",
    });
    slide.addText(
      "You now have an automated farmhand working for you\non GitHub. It will show up on time, every time,\nand never forget a task.",
      {
        x: 1.0,
        y: 3.8,
        w: 8.0,
        h: 1.2,
        fontSize: BODY_SIZE,
        fontFace: "Arial",
        color: CREAM,
        align: "center",
        valign: "middle",
        lineSpacingMultiple: 1.3,
      },
    );
  }

  // ── Write File ────────────────────────────────────────────────
  const outputPath = path.join(__dirname, "slides.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`Deck saved: ${outputPath}`);
  console.log(`Total slides: ${slideNum}`);
}

buildDeck().catch(console.error);
