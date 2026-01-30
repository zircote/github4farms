const pptxgen = require("pptxgenjs");
const path = require("path");
const html2pptx = require("/Users/AllenR1_1/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/pptx/scripts/html2pptx");

async function buildSession7Slides() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub4Farms Training";
  pptx.title = "Session 7: Introduction to GitHub Actions";
  pptx.subject = "GitHub Training for Farmers - Session 7 of 12";

  const slidesDir = path.join(__dirname, "slides");
  const totalSlides = 26;

  // Instructor notes per slide (from blockquotes in slides.md)
  const notes = {
    3: 'Instructor note: Let 2-3 learners answer. "What if GitHub could handle those reminders and routine tasks automatically - even while you\'re sleeping?"',
    17: "Instructor note: Use the demo repository with pre-built workflows. Walk slowly through the Actions tab, click a successful run, then click a failed run. Open the .github/workflows/ file to show the YAML.",
    18: "Instructor note: Pair learners. Distribute lab exercise handout. All learners will use the shared demo repository for this exercise since it has pre-built workflows.",
    19: "Instructor note: Pause at checkpoint. Walk around to confirm learners can identify the key parts.",
    24: 'Instructor note: Walk around and listen. Learners who connect Actions to their own farm needs are demonstrating "Evaluate" level thinking.',
  };

  for (let i = 1; i <= totalSlides; i++) {
    const num = String(i).padStart(2, "0");
    const htmlFile = path.join(slidesDir, `slide-${num}.html`);
    console.log(`Processing slide ${i}/${totalSlides}`);
    try {
      const { slide } = await html2pptx(htmlFile, pptx);

      // Add instructor notes
      if (notes[i]) {
        slide.addNotes(notes[i]);
      }

      // Slide 6: Trigger types table
      if (i === 6) {
        slide.addTable(
          [
            [
              {
                text: "Trigger Type",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 14,
                },
              },
              {
                text: "Farm Analogy",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 14,
                },
              },
              {
                text: "Example",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 14,
                },
              },
            ],
            [
              { text: "Schedule", options: { bold: true, fontSize: 13 } },
              {
                text: "Alarm clock - goes off at a set time",
                options: { fontSize: 13 },
              },
              {
                text: '"Every Monday at 8 AM, create the weekly equipment check Issue"',
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Event", options: { bold: true, fontSize: 13 } },
              {
                text: "Motion-sensor light - reacts when something happens",
                options: { fontSize: 13 },
              },
              {
                text: '"When a new Issue is created, add a welcome comment"',
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Manual", options: { bold: true, fontSize: 13 } },
              {
                text: "Push a button - you decide when",
                options: { fontSize: 13 },
              },
              {
                text: '"I click a button to run the end-of-season report"',
                options: { fontSize: 12 },
              },
            ],
          ],
          {
            x: 0.5,
            y: 1.35,
            w: 9.0,
            colW: [1.8, 3.2, 4.0],
            rowH: [0.4, 0.5, 0.5, 0.5],
            border: { pt: 1, color: "CCCCCC" },
            valign: "middle",
            color: "2C2C2C",
          },
        );
      }

      // Slide 13: Recipe card parts table
      if (i === 13) {
        slide.addTable(
          [
            [
              {
                text: "Recipe Card Part",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 14,
                },
              },
              {
                text: "YAML Part",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 14,
                },
              },
              {
                text: "What It Means",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 14,
                },
              },
            ],
            [
              { text: "Recipe name", options: { bold: true, fontSize: 13 } },
              {
                text: "name:",
                options: { fontSize: 13, fontFace: "Courier New" },
              },
              {
                text: "What this workflow is called",
                options: { fontSize: 13 },
              },
            ],
            [
              { text: "When to cook", options: { bold: true, fontSize: 13 } },
              {
                text: "on:",
                options: { fontSize: 13, fontFace: "Courier New" },
              },
              {
                text: "The trigger - what starts the workflow",
                options: { fontSize: 13 },
              },
            ],
            [
              {
                text: "Dish to prepare",
                options: { bold: true, fontSize: 13 },
              },
              {
                text: "jobs:",
                options: { fontSize: 13, fontFace: "Courier New" },
              },
              {
                text: "The job - a group of steps to complete",
                options: { fontSize: 13 },
              },
            ],
            [
              {
                text: "Step-by-step instructions",
                options: { bold: true, fontSize: 13 },
              },
              {
                text: "steps:",
                options: { fontSize: 13, fontFace: "Courier New" },
              },
              {
                text: "Each individual task, in order",
                options: { fontSize: 13 },
              },
            ],
          ],
          {
            x: 0.5,
            y: 1.2,
            w: 9.0,
            colW: [2.5, 1.8, 4.7],
            rowH: [0.4, 0.45, 0.45, 0.45, 0.45],
            border: { pt: 1, color: "CCCCCC" },
            valign: "middle",
            color: "2C2C2C",
          },
        );
      }

      // Slide 23: Key vocabulary review table
      if (i === 23) {
        slide.addTable(
          [
            [
              {
                text: "GitHub Term",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 13,
                },
              },
              {
                text: "Farm Analogy",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 13,
                },
              },
              {
                text: "Meaning",
                options: {
                  fill: { color: "1E5128" },
                  color: "FFFFFF",
                  bold: true,
                  fontSize: 13,
                },
              },
            ],
            [
              { text: "GitHub Actions", options: { bold: true, fontSize: 12 } },
              { text: "Automatic farm helpers", options: { fontSize: 12 } },
              {
                text: "A system that runs tasks automatically",
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Workflow", options: { bold: true, fontSize: 12 } },
              {
                text: "Written instructions for the hired hand",
                options: { fontSize: 12 },
              },
              {
                text: "A file that defines what to do, when, and how",
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Trigger", options: { bold: true, fontSize: 12 } },
              {
                text: "What tells the helper to start",
                options: { fontSize: 12 },
              },
              {
                text: "The event, schedule, or button that kicks off a workflow",
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Job", options: { bold: true, fontSize: 12 } },
              { text: "The assignment", options: { fontSize: 12 } },
              {
                text: "A group of steps that run together",
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Step", options: { bold: true, fontSize: 12 } },
              {
                text: "One task in the instructions",
                options: { fontSize: 12 },
              },
              {
                text: "A single action the workflow performs",
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "YAML", options: { bold: true, fontSize: 12 } },
              { text: "The recipe card format", options: { fontSize: 12 } },
              {
                text: "The file format used to write workflows",
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Workflow run", options: { bold: true, fontSize: 12 } },
              {
                text: "One time the helper did the job",
                options: { fontSize: 12 },
              },
              {
                text: "A single execution of a workflow",
                options: { fontSize: 12 },
              },
            ],
            [
              { text: "Status", options: { bold: true, fontSize: 12 } },
              { text: "The job report", options: { fontSize: 12 } },
              {
                text: "Green (success), red (failure), yellow (in progress)",
                options: { fontSize: 12 },
              },
            ],
          ],
          {
            x: 0.5,
            y: 1.0,
            w: 9.0,
            colW: [2.0, 3.0, 4.0],
            rowH: [0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38, 0.38],
            border: { pt: 1, color: "CCCCCC" },
            valign: "middle",
            color: "2C2C2C",
          },
        );
      }
    } catch (err) {
      console.error(`Error on slide ${i}: ${err.message}`);
      throw err;
    }
  }

  const outputPath = path.join(__dirname, "slides.pptx");
  await pptx.writeFile({ fileName: outputPath });
  console.log(`\nPresentation saved: ${outputPath}`);
  console.log(`Total slides: ${totalSlides}`);
}

buildSession7Slides().catch((err) => {
  console.error("Build failed:", err.message);
  process.exit(1);
});
