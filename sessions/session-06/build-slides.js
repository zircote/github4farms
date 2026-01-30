/**
 * Build Session 6 PowerPoint deck from slides.md content.
 *
 * Theme: Forest Green / Sage / Cream / Charcoal
 * Usage: node build-slides.js
 * Output: slides.pptx
 */

const pptxgen = require("../../workspace/node_modules/pptxgenjs");
const path = require("path");

// ── Theme Colors ─────────────────────────────────────────────
const COLORS = {
  forestGreen: "1E5128",
  sage: "4E9F3D",
  cream: "F4F1DE",
  charcoal: "2C2C2C",
  white: "FFFFFF",
};

// ── Helpers ──────────────────────────────────────────────────
function addFooter(slide, slideNum, total) {
  slide.addText(
    `Session 6 of 12 — GitHub Training for Farmers  |  Slide ${slideNum} of ${total}`,
    {
      x: 0.5,
      y: 5.2,
      w: 9.0,
      h: 0.3,
      fontSize: 10,
      color: COLORS.sage,
      fontFace: "Arial",
    },
  );
}

function titleSlideBackground(slide) {
  slide.background = { color: COLORS.forestGreen };
}

function contentSlideBackground(slide) {
  slide.background = { color: COLORS.cream };
  // Top accent bar
  slide.addShape("rect", {
    x: 0,
    y: 0,
    w: 10,
    h: 0.08,
    fill: { color: COLORS.forestGreen },
  });
  // Bottom accent bar
  slide.addShape("rect", {
    x: 0,
    y: 5.55,
    w: 10,
    h: 0.08,
    fill: { color: COLORS.sage },
  });
}

function sectionSlideBackground(slide) {
  slide.background = { color: COLORS.forestGreen };
}

function addHeading(slide, text, opts = {}) {
  slide.addText(text, {
    x: opts.x || 0.5,
    y: opts.y || 0.3,
    w: opts.w || 9.0,
    h: opts.h || 0.7,
    fontSize: opts.fontSize || 28,
    bold: true,
    color: opts.color || COLORS.forestGreen,
    fontFace: "Arial",
  });
}

function addBody(slide, text, opts = {}) {
  // When text is an array of {text, options} objects, ensure each gets breakLine
  let formattedText = text;
  if (Array.isArray(text)) {
    formattedText = text.map((item, idx) => {
      if (typeof item === "object" && item.text !== undefined) {
        const newItem = { ...item, options: { ...item.options } };
        // Add breakLine to all items except the last
        if (idx < text.length - 1 && newItem.options.breakLine === undefined) {
          newItem.options.breakLine = true;
        }
        return newItem;
      }
      return item;
    });
  }
  slide.addText(formattedText, {
    x: opts.x || 0.5,
    y: opts.y || 1.1,
    w: opts.w || 9.0,
    h: opts.h || 3.8,
    fontSize: opts.fontSize || 18,
    color: opts.color || COLORS.charcoal,
    fontFace: "Arial",
    valign: "top",
    lineSpacingMultiple: 1.2,
    paraSpaceBefore: opts.paraSpaceBefore || 4,
    ...(opts.bullet !== undefined ? { bullet: opts.bullet } : {}),
  });
}

function addNotes(slide, text) {
  slide.addNotes(text);
}

function addTable(slide, rows, opts = {}) {
  const tableRows = rows.map((row, idx) => {
    const isHeader = idx === 0;
    return row.map((cell) => ({
      text: cell,
      options: {
        fontSize: 14,
        fontFace: "Arial",
        bold: isHeader,
        color: isHeader ? COLORS.white : COLORS.charcoal,
        fill: {
          color: isHeader
            ? COLORS.forestGreen
            : idx % 2 === 1
              ? COLORS.cream
              : COLORS.white,
        },
        border: { pt: 0.5, color: COLORS.sage },
        valign: "middle",
        paraSpaceBefore: 2,
        paraSpaceAfter: 2,
      },
    }));
  });

  slide.addTable(tableRows, {
    x: opts.x || 0.5,
    y: opts.y || 1.3,
    w: opts.w || 9.0,
    colW: opts.colW,
    rowH: opts.rowH || 0.45,
    border: { pt: 0.5, color: COLORS.sage },
  });
}

// ── Slides ───────────────────────────────────────────────────
const TOTAL_SLIDES = 26;

function buildSlides(pptx) {
  // ── Slide 1: Title ──
  let slide = pptx.addSlide();
  titleSlideBackground(slide);
  slide.addText("Basic Workflows & Templates", {
    x: 0.8,
    y: 1.2,
    w: 8.4,
    h: 1.2,
    fontSize: 40,
    bold: true,
    color: COLORS.white,
    fontFace: "Arial",
  });
  slide.addText("Building Reusable Processes So You Never Start from Scratch", {
    x: 0.8,
    y: 2.5,
    w: 8.4,
    h: 0.8,
    fontSize: 22,
    italic: true,
    color: COLORS.cream,
    fontFace: "Arial",
  });
  slide.addText("Session 6 of 12 — GitHub Training for Farmers", {
    x: 0.8,
    y: 3.6,
    w: 8.4,
    h: 0.5,
    fontSize: 18,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  slide.addShape("rect", {
    x: 0.8,
    y: 3.4,
    w: 2.5,
    h: 0.04,
    fill: { color: COLORS.sage },
  });

  // ── Slide 2: Welcome Back ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Welcome to Session 6!");
  addBody(slide, [
    {
      text: "So far you've learned to:",
      options: {
        fontSize: 18,
        color: COLORS.charcoal,
        bold: true,
        paraSpaceBefore: 4,
        breakType: "none",
      },
    },
    {
      text: "Navigate repositories (Session 1)",
      options: {
        fontSize: 18,
        color: COLORS.charcoal,
        bullet: { code: "2022" },
        indentLevel: 0,
      },
    },
    {
      text: "Track tasks with Issues (Session 2)",
      options: {
        fontSize: 18,
        color: COLORS.charcoal,
        bullet: { code: "2022" },
        indentLevel: 0,
      },
    },
    {
      text: "Organize with Projects (Session 3)",
      options: {
        fontSize: 18,
        color: COLORS.charcoal,
        bullet: { code: "2022" },
        indentLevel: 0,
      },
    },
    {
      text: "Collaborate with Pull Requests (Session 4)",
      options: {
        fontSize: 18,
        color: COLORS.charcoal,
        bullet: { code: "2022" },
        indentLevel: 0,
      },
    },
    {
      text: "Stay connected with notifications and @mentions (Session 5)",
      options: {
        fontSize: 18,
        color: COLORS.charcoal,
        bullet: { code: "2022" },
        indentLevel: 0,
      },
    },
    { text: "", options: { fontSize: 10, breakType: "none" } },
    {
      text: "Today you'll learn to create templates — pre-built forms so you never write the same thing from scratch twice.",
      options: { fontSize: 18, color: COLORS.forestGreen, bold: true },
    },
  ]);
  addFooter(slide, 2, TOTAL_SLIDES);

  // ── Slide 3: Why This Matters ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Why This Matters for YOUR Farm");
  slide.addText("Quick Question:", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.4,
    fontSize: 20,
    bold: true,
    italic: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  addBody(
    slide,
    [
      {
        text: "Do you ever create the same type of work order over and over?",
        options: { fontSize: 18, color: COLORS.charcoal, paraSpaceBefore: 8 },
      },
      {
        text: "Weekly equipment checks?",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Seasonal planting tasks?",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Recurring maintenance schedules?",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Veterinary visit reports?",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      { text: "", options: { fontSize: 10 } },
      {
        text: "How much time do you spend re-writing the same kind of task each time?",
        options: { fontSize: 18, italic: true, color: COLORS.forestGreen },
      },
    ],
    { y: 1.5 },
  );
  addNotes(
    slide,
    "Instructor note: Let 2-3 learners answer. 'What if you could fill out a pre-printed form instead of writing everything from scratch?'",
  );
  addFooter(slide, 3, TOTAL_SLIDES);

  // ── Slide 4: The Problem ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "The Problem");
  slide.addText("Repetitive tasks waste time and lose details.", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: COLORS.forestGreen,
    fontFace: "Arial",
  });
  addBody(
    slide,
    [
      {
        text: "You write the same type of Issue over and over",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Each time, you forget to include some detail",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Different people write the same task differently — no consistency",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "New team members don't know what information to include",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "You wish you had a standard form for common requests",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      { text: "", options: { fontSize: 10 } },
      {
        text: "What if GitHub could give you a pre-filled form every time you create a common task?",
        options: { fontSize: 20, bold: true, color: COLORS.forestGreen },
      },
    ],
    { y: 1.6 },
  );
  addFooter(slide, 4, TOTAL_SLIDES);

  // ── Slide 5: What Is an Issue Template? ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "What Is an Issue Template?");
  slide.addText("Issue Template = Pre-Printed Work Order Form", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.4,
    fontSize: 22,
    bold: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  addBody(
    slide,
    [
      {
        text: "An Issue Template is a form that pre-fills parts of a new Issue for you.",
        options: { fontSize: 16, color: COLORS.charcoal, paraSpaceBefore: 8 },
      },
      { text: "", options: { fontSize: 6 } },
      {
        text: "Instead of a blank page, you get:",
        options: { fontSize: 16, color: COLORS.charcoal },
      },
      {
        text: "A pre-written title structure",
        options: { fontSize: 16, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Guided sections (What happened? Where? How urgent?)",
        options: { fontSize: 16, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Checklists already set up",
        options: { fontSize: 16, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Labels automatically applied",
        options: { fontSize: 16, color: COLORS.charcoal, bullet: true },
      },
      { text: "", options: { fontSize: 6 } },
      {
        text: "Think of it like a pre-printed form at the vet's office — you fill in the blanks instead of writing everything on a blank sheet.",
        options: { fontSize: 14, italic: true, color: COLORS.forestGreen },
      },
    ],
    { y: 1.55 },
  );
  addFooter(slide, 5, TOTAL_SLIDES);

  // ── Slide 6: Before and After Templates ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Before and After Templates");
  // Without template box
  slide.addShape("rect", {
    x: 0.5,
    y: 1.2,
    w: 4.2,
    h: 2.0,
    fill: { color: COLORS.white },
    shadow: { type: "outer", blur: 4, offset: 2, color: "CCCCCC" },
  });
  slide.addText("WITHOUT a template:", {
    x: 0.7,
    y: 1.25,
    w: 3.8,
    h: 0.35,
    fontSize: 14,
    bold: true,
    color: COLORS.charcoal,
    fontFace: "Arial",
  });
  slide.addText(
    [
      {
        text: 'Title: "Tractor problem"\n',
        options: { fontSize: 13, color: COLORS.charcoal },
      },
      {
        text: 'Description: "The tractor isn\'t working right."\n\n',
        options: { fontSize: 13, color: COLORS.charcoal },
      },
      {
        text: "Missing: Which tractor? What's wrong? How urgent? Who should fix it?",
        options: { fontSize: 12, italic: true, color: "CC0000" },
      },
    ],
    { x: 0.7, y: 1.65, w: 3.8, h: 1.4, fontFace: "Arial", valign: "top" },
  );

  // With template box
  slide.addShape("rect", {
    x: 5.3,
    y: 1.2,
    w: 4.2,
    h: 3.6,
    fill: { color: COLORS.white },
    shadow: { type: "outer", blur: 4, offset: 2, color: "CCCCCC" },
  });
  slide.addText("WITH a template:", {
    x: 5.5,
    y: 1.25,
    w: 3.8,
    h: 0.35,
    fontSize: 14,
    bold: true,
    color: COLORS.forestGreen,
    fontFace: "Arial",
  });
  slide.addText(
    [
      {
        text: 'Title: "Equipment Issue: John Deere 6120M — Engine stalls"\n\n',
        options: { fontSize: 12, bold: true, color: COLORS.charcoal },
      },
      {
        text: "Equipment: John Deere 6120M Tractor\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "Problem: Engine stalls when idling\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "Location: Equipment shed\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "Urgency: Medium — needs attention this week\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "Steps taken: Checked oil, cleaned air filter\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "☐ Parts needed  ☐ Manual consulted  ☐ Repair done",
        options: { fontSize: 11, color: COLORS.sage },
      },
    ],
    { x: 5.5, y: 1.65, w: 3.8, h: 3.0, fontFace: "Arial", valign: "top" },
  );

  slide.addText("Every important detail, every time.", {
    x: 0.5,
    y: 4.9,
    w: 9.0,
    h: 0.3,
    fontSize: 18,
    bold: true,
    italic: true,
    color: COLORS.forestGreen,
    fontFace: "Arial",
    align: "center",
  });
  addFooter(slide, 6, TOTAL_SLIDES);

  // ── Slide 7: Types of Templates ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Types of Templates on GitHub");
  addTable(
    slide,
    [
      ["Template Type", "What It Does", "Farm Analogy"],
      [
        "Issue Template",
        "Pre-fills a new Issue with guided sections",
        "Pre-printed work order form",
      ],
      [
        "Saved Reply",
        "A pre-written comment you can reuse",
        "Stamp with a standard message",
      ],
      [
        "Project Template",
        "Pre-built project board with columns and settings",
        "Ready-made seasonal planning board",
      ],
    ],
    { y: 1.2, colW: [2.2, 3.8, 3.0], rowH: 0.55 },
  );
  slide.addText("Today we'll focus on Issue Templates and Saved Replies.", {
    x: 0.5,
    y: 3.8,
    w: 9.0,
    h: 0.4,
    fontSize: 18,
    bold: true,
    color: COLORS.forestGreen,
    fontFace: "Arial",
  });
  slide.addText(
    "We'll cover Project Templates in Session 9 (Advanced Projects).",
    {
      x: 0.5,
      y: 4.2,
      w: 9.0,
      h: 0.4,
      fontSize: 16,
      color: COLORS.charcoal,
      fontFace: "Arial",
    },
  );
  addFooter(slide, 7, TOTAL_SLIDES);

  // ── Slide 8: How Issue Templates Work ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Issue Templates: How They Work");
  addBody(slide, [
    {
      text: "When someone creates a new Issue in a repository with templates, they see a choice:",
      options: { fontSize: 18, color: COLORS.charcoal, paraSpaceBefore: 4 },
    },
    { text: "", options: { fontSize: 8 } },
    {
      text: "Instead of a blank page, they see:",
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    {
      text: '"Equipment Maintenance Request"',
      options: {
        fontSize: 18,
        color: COLORS.forestGreen,
        bullet: true,
        bold: true,
      },
    },
    {
      text: '"Crop Issue Report"',
      options: {
        fontSize: 18,
        color: COLORS.forestGreen,
        bullet: true,
        bold: true,
      },
    },
    {
      text: '"Livestock Health Record"',
      options: {
        fontSize: 18,
        color: COLORS.forestGreen,
        bullet: true,
        bold: true,
      },
    },
    {
      text: '"General Task"',
      options: {
        fontSize: 18,
        color: COLORS.forestGreen,
        bullet: true,
        bold: true,
      },
    },
    { text: "", options: { fontSize: 8 } },
    {
      text: "They pick the one that fits, and the form appears with sections ready to fill in.",
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 8 } },
    {
      text: "Anyone creating an Issue sees the templates — so even a new team member knows what information to provide.",
      options: { fontSize: 18, bold: true, color: COLORS.sage },
    },
  ]);
  addNotes(
    slide,
    "Instructor note: Show a repository with Issue Templates enabled. Click 'New Issue' to show the template chooser.",
  );
  addFooter(slide, 8, TOTAL_SLIDES);

  // ── Slide 9: Creating an Issue Template ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Creating an Issue Template");
  addBody(slide, [
    {
      text: "How to create an Issue Template:",
      options: {
        fontSize: 20,
        bold: true,
        color: COLORS.forestGreen,
        paraSpaceBefore: 4,
      },
    },
    { text: "", options: { fontSize: 6 } },
    {
      text: "1.  Go to your repository",
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    {
      text: '2.  Click "Settings" (you need to be the repository owner)',
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    {
      text: '3.  Scroll down to "Features" section',
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    {
      text: '4.  Next to Issues, click "Set up templates"',
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    {
      text: '5.  Click "Add template" and choose a starter:',
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    {
      text: "     Bug report — Feature request — Custom template",
      options: { fontSize: 16, color: COLORS.sage },
    },
    {
      text: "6.  Edit the template with your content",
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    {
      text: '7.  Click "Propose changes" then "Commit changes"',
      options: { fontSize: 18, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 8 } },
    {
      text: 'For farm use: Choose "Custom template" so you can write sections that make sense for your farm.',
      options: { fontSize: 18, bold: true, color: COLORS.forestGreen },
    },
  ]);
  addNotes(
    slide,
    "Instructor note: Walk through each step on the projector. Use 'Custom template' for the demo.",
  );
  addFooter(slide, 9, TOTAL_SLIDES);

  // ── Slide 10: Designing a Good Template ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Designing a Good Template");
  addBody(slide, [
    {
      text: "A good template has three parts:",
      options: {
        fontSize: 18,
        bold: true,
        color: COLORS.forestGreen,
        paraSpaceBefore: 4,
      },
    },
    { text: "", options: { fontSize: 4 } },
    {
      text: '1.  Title format — e.g., "Equipment Issue: [Name] — [Problem]"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 3 } },
    {
      text: "2.  Guided sections — Prompts: What happened? Where? How urgent?",
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 3 } },
    {
      text: "3.  Checklist:",
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: "     ☐ Photos attached\n     ☐ Parts identified\n     ☐ Assigned",
      options: { fontSize: 13, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 6 } },
    {
      text: "Tip: Write your template as if explaining to someone new on the farm.\nWhat information would they need to give you?",
      options: { fontSize: 13, italic: true, color: COLORS.forestGreen },
    },
  ]);
  addFooter(slide, 10, TOTAL_SLIDES);

  // ── Slide 11: Equipment Maintenance Template Example ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Example: Equipment Maintenance Template");
  slide.addText("Template name: Equipment Maintenance Request", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  slide.addShape("rect", {
    x: 0.5,
    y: 1.55,
    w: 9.0,
    h: 3.5,
    fill: { color: COLORS.white },
    shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
  });
  slide.addText(
    [
      {
        text: "## Equipment Information\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "Equipment name: [e.g., John Deere 6120M Tractor]\nLocation: [e.g., Equipment shed, Field 2]\nCurrent hours/mileage: [if applicable]\n\n",
        options: { fontSize: 10, color: COLORS.charcoal },
      },
      {
        text: "## Problem Description\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "[Describe what's wrong or what maintenance is needed]\n\n",
        options: { fontSize: 10, color: "888888" },
      },
      {
        text: "## Urgency\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "☐ Emergency  ☐ High (2 days)  ☐ Medium (this week)  ☐ Low\n\n",
        options: { fontSize: 10, color: COLORS.charcoal },
      },
      {
        text: "## Checklist\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "☐ Photo attached  ☐ Service manual consulted  ☐ Parts identified\n☐ Repair completed  ☐ Post-repair test done",
        options: { fontSize: 10, color: COLORS.charcoal },
      },
    ],
    { x: 0.7, y: 1.6, w: 8.6, h: 3.3, fontFace: "Courier New", valign: "top" },
  );
  addFooter(slide, 11, TOTAL_SLIDES);

  // ── Slide 12: Crop Issue Template Example ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Example: Crop Issue Template");
  slide.addText("Template name: Crop Issue Report", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.35,
    fontSize: 18,
    bold: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  slide.addShape("rect", {
    x: 0.5,
    y: 1.55,
    w: 9.0,
    h: 3.5,
    fill: { color: COLORS.white },
    shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
  });
  slide.addText(
    [
      {
        text: "## Field Information\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "Field name/number: [e.g., Field 3]\nCrop: [e.g., Soybeans]\nGrowth stage: [e.g., V3, flowering, mature]\n\n",
        options: { fontSize: 10, color: COLORS.charcoal },
      },
      {
        text: "## Issue Description\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "[Describe what you're seeing — discoloration, pests, wilting, etc.]\n\n",
        options: { fontSize: 10, color: "888888" },
      },
      {
        text: "## Photos\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "[Attach 1-2 photos of the issue]\n\n",
        options: { fontSize: 10, color: "888888" },
      },
      {
        text: "## Urgency\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "☐ Immediate — crop at risk  ☐ This week  ☐ Monitor\n\n",
        options: { fontSize: 10, color: COLORS.charcoal },
      },
      {
        text: "## Possible Causes / Action Taken\n",
        options: { fontSize: 12, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "[Your best guess or observations / Steps already taken]",
        options: { fontSize: 10, color: "888888" },
      },
    ],
    { x: 0.7, y: 1.6, w: 8.6, h: 3.3, fontFace: "Courier New", valign: "top" },
  );
  addFooter(slide, 12, TOTAL_SLIDES);

  // ── Slide 13: Saved Replies ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Saved Replies: Stamp Messages");
  slide.addText("Saved Replies = Pre-Written Comments You Can Reuse", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  addBody(
    slide,
    [
      {
        text: "If you find yourself typing the same comment over and over, save it as a Saved Reply.",
        options: { fontSize: 14, color: COLORS.charcoal, paraSpaceBefore: 4 },
      },
      { text: "", options: { fontSize: 4 } },
      {
        text: "Examples:",
        options: { fontSize: 14, bold: true, color: COLORS.forestGreen },
      },
      {
        text: '"Repair completed and tested. Closing this Issue."',
        options: { fontSize: 13, color: COLORS.charcoal, bullet: true },
      },
      {
        text: '"Parts ordered. Expected delivery: [date]. Will update when received."',
        options: { fontSize: 13, color: COLORS.charcoal, bullet: true },
      },
      {
        text: '"Reassigning to @[name] — this is in their area."',
        options: { fontSize: 13, color: COLORS.charcoal, bullet: true },
      },
      {
        text: '"Thank you for reporting this. I\'ll check on it today."',
        options: { fontSize: 13, color: COLORS.charcoal, bullet: true },
      },
      { text: "", options: { fontSize: 4 } },
      {
        text: "Where to find: When typing a comment, look for the arrow icon near the comment box toolbar.",
        options: { fontSize: 12, italic: true, color: COLORS.forestGreen },
      },
    ],
    { y: 1.55 },
  );
  addFooter(slide, 13, TOTAL_SLIDES);

  // ── Slide 14: Creating a Saved Reply ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Creating a Saved Reply");
  addBody(slide, [
    {
      text: "How to create a Saved Reply:",
      options: {
        fontSize: 16,
        bold: true,
        color: COLORS.forestGreen,
        paraSpaceBefore: 4,
      },
    },
    { text: "", options: { fontSize: 4 } },
    {
      text: '1.  Click your profile icon (top right) → "Settings"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '2.  Click "Saved replies" (left menu, under "Code, planning, and automation")',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '3.  Click "Add a saved reply"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '4.  Give it a title (e.g., "Parts ordered")',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: "5.  Write the reply text",
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '6.  Click "Add saved reply"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 4 } },
    {
      text: "To use it: In any comment box, click the arrow icon in the toolbar and select your saved reply. Edit the [bracketed] parts before posting.",
      options: { fontSize: 13, bold: true, color: COLORS.forestGreen },
    },
  ]);
  addNotes(
    slide,
    "Instructor note: Demo creating a saved reply, then using it in an Issue comment. Show the arrow icon in the comment toolbar.",
  );
  addFooter(slide, 14, TOTAL_SLIDES);

  // ── Slide 15: Project Templates Preview ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Project Templates (Preview)");
  addBody(slide, [
    {
      text: "GitHub also has Project Templates — pre-built planning boards.",
      options: { fontSize: 14, color: COLORS.charcoal, paraSpaceBefore: 4 },
    },
    { text: "", options: { fontSize: 4 } },
    {
      text: "When you create a new Project, you can choose from starter templates:",
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: "Board — Todo / In Progress / Done columns",
      options: { fontSize: 14, color: COLORS.charcoal, bullet: true },
    },
    {
      text: "Team backlog — Columns with priority levels",
      options: { fontSize: 14, color: COLORS.charcoal, bullet: true },
    },
    {
      text: "Roadmap — Timeline-based planning",
      options: { fontSize: 14, color: COLORS.charcoal, bullet: true },
    },
    { text: "", options: { fontSize: 4 } },
    {
      text: "You can also copy an existing Project to reuse your own custom board setup.",
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 4 } },
    {
      text: "We'll explore Project Templates in depth in Session 9 (Advanced Projects). For now, know they exist.",
      options: { fontSize: 14, bold: true, color: COLORS.forestGreen },
    },
  ]);
  addNotes(
    slide,
    "Instructor note: Briefly show the template options when creating a new Project. Don't go deep — this is a preview.",
  );
  addFooter(slide, 15, TOTAL_SLIDES);

  // ── Slide 16: When to Use Each Template Type ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "When to Use Each Template Type");
  addTable(
    slide,
    [
      ["Need", "Template Type", "Example"],
      [
        "Same kind of Issue repeatedly",
        "Issue Template",
        "Equipment maintenance requests, crop issue reports",
      ],
      [
        "Same comment over and over",
        "Saved Reply",
        '"Parts ordered," "Repair completed," "Reassigning to..."',
      ],
      [
        "Same project board structure",
        "Project Template",
        "Seasonal planning board, weekly task board",
      ],
    ],
    { y: 1.2, colW: [2.5, 2.0, 4.5], rowH: 0.6 },
  );
  slide.addText(
    "Start with Issue Templates — they save the most time and ensure consistency.",
    {
      x: 0.5,
      y: 4.0,
      w: 9.0,
      h: 0.4,
      fontSize: 20,
      bold: true,
      color: COLORS.forestGreen,
      fontFace: "Arial",
    },
  );
  addFooter(slide, 16, TOTAL_SLIDES);

  // ── Slide 17: Live Demo ──
  slide = pptx.addSlide();
  sectionSlideBackground(slide);
  slide.addText("LIVE DEMO", {
    x: 0.5,
    y: 0.5,
    w: 9.0,
    h: 0.6,
    fontSize: 18,
    color: COLORS.sage,
    fontFace: "Arial",
    bold: true,
  });
  slide.addText("Creating a Farm Issue Template", {
    x: 0.5,
    y: 1.2,
    w: 9.0,
    h: 0.8,
    fontSize: 32,
    bold: true,
    color: COLORS.white,
    fontFace: "Arial",
  });
  slide.addText(
    [
      {
        text: "Watch me:",
        options: { fontSize: 20, bold: true, color: COLORS.cream },
      },
      {
        text: "\n1.  Go to repository Settings",
        options: { fontSize: 18, color: COLORS.cream },
      },
      {
        text: "\n2.  Set up an Issue Template (Custom)",
        options: { fontSize: 18, color: COLORS.cream },
      },
      {
        text: "\n3.  Fill in equipment maintenance sections",
        options: { fontSize: 18, color: COLORS.cream },
      },
      { text: "\n4.  Save it", options: { fontSize: 18, color: COLORS.cream } },
      {
        text: "\n5.  Create a new Issue using the template",
        options: { fontSize: 18, color: COLORS.cream },
      },
      {
        text: "\n\nJust watch — you'll build your own template next.",
        options: { fontSize: 18, bold: true, italic: true, color: COLORS.sage },
      },
    ],
    { x: 0.8, y: 2.2, w: 8.4, h: 3.0, fontFace: "Arial", valign: "top" },
  );
  addNotes(
    slide,
    "Instructor note: Demo the full workflow. After saving the template, go to Issues → New Issue to show the template chooser. Click the template to show the pre-filled form.",
  );

  // ── Slide 18: Guided Practice Introduction ──
  slide = pptx.addSlide();
  sectionSlideBackground(slide);
  slide.addText("GUIDED PRACTICE", {
    x: 0.5,
    y: 0.5,
    w: 9.0,
    h: 0.6,
    fontSize: 18,
    color: COLORS.sage,
    fontFace: "Arial",
    bold: true,
  });
  slide.addText("Your Turn! Follow Along with Me.", {
    x: 0.5,
    y: 1.3,
    w: 9.0,
    h: 0.8,
    fontSize: 32,
    bold: true,
    color: COLORS.white,
    fontFace: "Arial",
  });
  slide.addText(
    [
      {
        text: "You're going to create your own Issue Template for a common farm task.",
        options: { fontSize: 18, color: COLORS.cream },
      },
      {
        text: "\n\nI'll walk through each step. Follow along on your screen.",
        options: { fontSize: 16, color: COLORS.cream },
      },
      {
        text: "\n\nIf you get stuck:",
        options: { fontSize: 16, color: COLORS.cream },
      },
      {
        text: "\n1.  Ask your partner",
        options: { fontSize: 16, color: COLORS.cream },
      },
      {
        text: "\n2.  Raise your hand",
        options: { fontSize: 16, color: COLORS.cream },
      },
      {
        text: "\n\nYou can always edit or delete a template later — so don't worry about getting it perfect.",
        options: { fontSize: 16, bold: true, italic: true, color: COLORS.sage },
      },
    ],
    { x: 0.8, y: 2.2, w: 8.4, h: 3.0, fontFace: "Arial", valign: "top" },
  );
  addNotes(
    slide,
    "Instructor note: Pair learners. Distribute lab exercise handout. Learners will need to use their own repository (not the shared demo) since templates require Settings access.",
  );

  // ── Slide 19: Guided Practice Steps ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Guided Practice Steps");
  addBody(slide, [
    {
      text: "Follow along with me:",
      options: {
        fontSize: 20,
        bold: true,
        color: COLORS.forestGreen,
        paraSpaceBefore: 4,
      },
    },
    { text: "", options: { fontSize: 4 } },
    {
      text: "1.  Go to your own repository (you need to be the owner)",
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '2.  Click "Settings"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '3.  Scroll to "Features" → next to Issues, click "Set up templates"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '4.  Click "Add template" → choose "Custom template"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    { text: "5.  Fill in:", options: { fontSize: 14, color: COLORS.charcoal } },
    {
      text: '     Name: "Equipment Maintenance Request"',
      options: { fontSize: 12, color: COLORS.sage },
    },
    {
      text: '     About: "Use this template to report equipment issues"',
      options: { fontSize: 12, color: COLORS.sage },
    },
    {
      text: "     Content: Copy from your handout (or write your own)",
      options: { fontSize: 12, color: COLORS.sage },
    },
    {
      text: '6.  Click "Propose changes"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    {
      text: '7.  Click "Commit changes"',
      options: { fontSize: 14, color: COLORS.charcoal },
    },
    { text: "", options: { fontSize: 6 } },
    {
      text: 'Checkpoint: Go to Issues tab → "New Issue" — you should see your template listed.',
      options: { fontSize: 14, bold: true, color: COLORS.forestGreen },
    },
  ]);
  addNotes(
    slide,
    'Instructor note: Pause at checkpoint. "Raise your hand when you see your template in the Issue chooser."',
  );
  addFooter(slide, 19, TOTAL_SLIDES);

  // ── Slide 20: Break ──
  slide = pptx.addSlide();
  sectionSlideBackground(slide);
  slide.addText("BREAK", {
    x: 0.5,
    y: 1.5,
    w: 9.0,
    h: 1.0,
    fontSize: 44,
    bold: true,
    color: COLORS.white,
    fontFace: "Arial",
    align: "center",
  });
  slide.addText("15 Minutes", {
    x: 0.5,
    y: 2.5,
    w: 9.0,
    h: 0.6,
    fontSize: 28,
    color: COLORS.sage,
    fontFace: "Arial",
    align: "center",
  });
  slide.addText(
    "When we come back, you'll design your own farm templates from scratch!",
    {
      x: 1.0,
      y: 3.5,
      w: 8.0,
      h: 0.6,
      fontSize: 20,
      italic: true,
      color: COLORS.cream,
      fontFace: "Arial",
      align: "center",
    },
  );

  // ── Slide 21: Independent Practice ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Independent Practice");
  slide.addText(
    "Your challenge: Create farm templates that save your team time.",
    {
      x: 0.5,
      y: 1.05,
      w: 9.0,
      h: 0.4,
      fontSize: 18,
      bold: true,
      color: COLORS.sage,
      fontFace: "Arial",
    },
  );

  // Task 1
  slide.addShape("rect", {
    x: 0.3,
    y: 1.55,
    w: 4.5,
    h: 2.3,
    fill: { color: COLORS.white },
    shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
    rectRadius: 0.05,
  });
  slide.addText("Task 1: Create 2 Issue Templates (20 min)", {
    x: 0.5,
    y: 1.6,
    w: 4.1,
    h: 0.35,
    fontSize: 14,
    bold: true,
    color: COLORS.forestGreen,
    fontFace: "Arial",
  });
  slide.addText(
    [
      {
        text: "Choose 2 from:\n",
        options: { fontSize: 12, color: COLORS.charcoal },
      },
      {
        text: "• Equipment Maintenance Request\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "• Crop Issue Report\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "• Livestock Health Record\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "• Weekly Safety Inspection\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "• Seasonal Planning Task\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "• Supply Order Request\n\n",
        options: { fontSize: 11, color: COLORS.charcoal },
      },
      {
        text: "Each template needs: 3+ sections, 1+ checklist, urgency levels",
        options: { fontSize: 11, bold: true, color: COLORS.sage },
      },
    ],
    { x: 0.5, y: 2.0, w: 4.1, h: 1.7, fontFace: "Arial", valign: "top" },
  );

  // Task 2
  slide.addShape("rect", {
    x: 5.2,
    y: 1.55,
    w: 4.5,
    h: 1.1,
    fill: { color: COLORS.white },
    shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
    rectRadius: 0.05,
  });
  slide.addText("Task 2: Create 2 Saved Replies (5 min)", {
    x: 5.4,
    y: 1.6,
    w: 4.1,
    h: 0.35,
    fontSize: 14,
    bold: true,
    color: COLORS.forestGreen,
    fontFace: "Arial",
  });
  slide.addText(
    'e.g., "Repair completed," "Parts ordered," "Reassigning," "Thank you for reporting"',
    {
      x: 5.4,
      y: 2.0,
      w: 4.1,
      h: 0.6,
      fontSize: 11,
      color: COLORS.charcoal,
      fontFace: "Arial",
      valign: "top",
    },
  );

  // Task 3
  slide.addShape("rect", {
    x: 5.2,
    y: 2.8,
    w: 4.5,
    h: 1.25,
    fill: { color: COLORS.white },
    shadow: { type: "outer", blur: 3, offset: 1, color: "CCCCCC" },
    rectRadius: 0.05,
  });
  slide.addText("Task 3: Test Your Templates (10 min)", {
    x: 5.4,
    y: 2.85,
    w: 4.1,
    h: 0.35,
    fontSize: 14,
    bold: true,
    color: COLORS.forestGreen,
    fontFace: "Arial",
  });
  slide.addText(
    "1. Create a new Issue using a template\n2. Fill in blanks with a real scenario\n3. Use a Saved Reply to comment",
    {
      x: 5.4,
      y: 3.2,
      w: 4.1,
      h: 0.8,
      fontSize: 11,
      color: COLORS.charcoal,
      fontFace: "Arial",
      valign: "top",
    },
  );

  // Success criteria — compact horizontal layout
  slide.addShape("rect", {
    x: 0.3,
    y: 4.05,
    w: 9.4,
    h: 0.45,
    fill: { color: COLORS.forestGreen },
    rectRadius: 0.05,
  });
  slide.addText(
    "Success:  ☐ 2+ Issue Templates   ☐ Guided sections & checklists   ☐ 2+ Saved Replies   ☐ Tested a template",
    {
      x: 0.5,
      y: 4.05,
      w: 9.0,
      h: 0.45,
      fontSize: 12,
      bold: true,
      color: COLORS.white,
      fontFace: "Arial",
      valign: "middle",
    },
  );
  addFooter(slide, 21, TOTAL_SLIDES);

  // ── Slide 22: Stretch Challenges ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Stretch Challenges");
  slide.addText("Finished early? Try these:", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  addBody(
    slide,
    [
      {
        text: "Create a third Issue Template for a different farm category",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Add default labels to your templates (in the template settings)",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Create a new repository for your own farm and add all your templates to it",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Help a classmate design a template for their specific farm needs",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
    ],
    { y: 1.6 },
  );
  addFooter(slide, 22, TOTAL_SLIDES);

  // ── Slide 23: Key Vocabulary Review ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Key Vocabulary Review");
  addTable(
    slide,
    [
      ["GitHub Term", "Farm Analogy", "Meaning"],
      [
        "Issue Template",
        "Pre-printed work order form",
        "Pre-filled Issue form with guided sections",
      ],
      [
        "Saved Reply",
        "Rubber stamp message",
        "Pre-written comment you can insert anywhere",
      ],
      [
        "Project Template",
        "Ready-made planning board",
        "Pre-built project board structure",
      ],
      [
        "Custom Template",
        "Your own form design",
        "A template you design from scratch",
      ],
      [
        "Template Chooser",
        "Stack of forms",
        "The menu shown when creating a new Issue",
      ],
    ],
    { y: 1.2, colW: [2.2, 2.8, 4.0], rowH: 0.5 },
  );
  addFooter(slide, 23, TOTAL_SLIDES);

  // ── Slide 24: Reflection ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "Reflection");
  slide.addText("Think about your farm:", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.4,
    fontSize: 20,
    bold: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  addBody(
    slide,
    [
      {
        text: "What are the 3 most common types of tasks you create repeatedly?",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "What information do you always need for those tasks?",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Who else on your farm would benefit from having templates?",
        options: { fontSize: 18, color: COLORS.charcoal, bullet: true },
      },
      { text: "", options: { fontSize: 12 } },
      {
        text: "Turn to your partner and share your answers. (3 minutes)",
        options: { fontSize: 20, bold: true, color: COLORS.forestGreen },
      },
      { text: "", options: { fontSize: 8 } },
      {
        text: "Bonus: Sketch out a template for your farm's most common recurring task — what sections would it have?",
        options: { fontSize: 16, italic: true, color: COLORS.sage },
      },
    ],
    { y: 1.55 },
  );
  addNotes(
    slide,
    "Instructor note: Walk around and listen. Learners designing their own templates shows 'Create' level thinking (Bloom's highest level).",
  );
  addFooter(slide, 24, TOTAL_SLIDES);

  // ── Slide 25: What's Next ──
  slide = pptx.addSlide();
  contentSlideBackground(slide);
  addHeading(slide, "What's Next");
  slide.addText("Session 7: Introduction to GitHub Actions", {
    x: 0.5,
    y: 1.1,
    w: 9.0,
    h: 0.5,
    fontSize: 22,
    bold: true,
    color: COLORS.sage,
    fontFace: "Arial",
  });
  addBody(
    slide,
    [
      {
        text: "Next time, you'll learn how GitHub can automatically do things for you — like sending a reminder when an equipment check is due, or notifying the team when a task is overdue. No coding required!",
        options: { fontSize: 14, color: COLORS.charcoal, paraSpaceBefore: 4 },
      },
      { text: "", options: { fontSize: 6 } },
      {
        text: "Optional between-session practice:",
        options: { fontSize: 14, bold: true, color: COLORS.forestGreen },
      },
      {
        text: "Add another Issue Template to your repository",
        options: { fontSize: 14, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Use your templates to create a few real farm Issues",
        options: { fontSize: 14, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Try using a Saved Reply when commenting on an Issue",
        options: { fontSize: 14, color: COLORS.charcoal, bullet: true },
      },
      {
        text: "Think about what farm tasks you'd like to automate",
        options: { fontSize: 14, color: COLORS.charcoal, bullet: true },
      },
    ],
    { y: 1.7 },
  );
  addFooter(slide, 25, TOTAL_SLIDES);

  // ── Slide 26: Feedback Survey ──
  slide = pptx.addSlide();
  sectionSlideBackground(slide);
  slide.addText("Please fill out the 2-minute survey\nbefore you leave.", {
    x: 0.8,
    y: 1.2,
    w: 8.4,
    h: 1.5,
    fontSize: 28,
    color: COLORS.white,
    fontFace: "Arial",
    align: "center",
  });
  slide.addShape("rect", {
    x: 3.5,
    y: 3.0,
    w: 3.0,
    h: 0.06,
    fill: { color: COLORS.sage },
  });
  slide.addText("Thank you!", {
    x: 0.8,
    y: 3.3,
    w: 8.4,
    h: 0.8,
    fontSize: 36,
    bold: true,
    color: COLORS.cream,
    fontFace: "Arial",
    align: "center",
  });
  slide.addText(
    "You now know how to create reusable templates that save time\nand ensure consistency on your farm.",
    {
      x: 1.0,
      y: 4.2,
      w: 8.0,
      h: 0.7,
      fontSize: 18,
      italic: true,
      color: COLORS.sage,
      fontFace: "Arial",
      align: "center",
    },
  );
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub Training for Farmers";
  pptx.title = "Session 6: Basic Workflows & Templates";
  pptx.subject = "Building Reusable Processes So You Never Start from Scratch";

  buildSlides(pptx);

  const outputPath = path.join(__dirname, "slides.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`Deck saved: ${outputPath}`);
  console.log(`Total slides: ${TOTAL_SLIDES}`);
}

main().catch(console.error);
