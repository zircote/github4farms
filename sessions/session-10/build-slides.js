const pptxgen = require("pptxgenjs");
const path = require("path");
const html2pptx = require("/Users/AllenR1_1/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/pptx/scripts/html2pptx");

const HDR = {
  fill: { color: "1E5128" },
  color: "FFFFFF",
  bold: true,
  fontSize: 11,
  align: "left",
  valign: "middle",
};
const ROW_A = {
  fill: { color: "F4F1DE" },
  fontSize: 11,
  align: "left",
  valign: "middle",
};
const ROW_B = {
  fill: { color: "FFFFFF" },
  fontSize: 11,
  align: "left",
  valign: "middle",
};
const TBL_OPTS = { border: { pt: 1, color: "CCCCCC" }, autoPage: false };

function addTableToSlide(slide, ph, tableData, colW) {
  slide.addTable(tableData, {
    x: ph.x,
    y: ph.y,
    w: ph.w,
    h: ph.h,
    ...TBL_OPTS,
    colW,
  });
}

function r(rowIdx, data) {
  const base = rowIdx % 2 === 0 ? ROW_A : ROW_B;
  return data.map((d) => {
    if (typeof d === "object" && d.text !== undefined) {
      return { text: d.text, options: { ...base, ...d.options } };
    }
    return { text: d, options: { ...base } };
  });
}

function h(data) {
  return data.map((d) => ({ text: d, options: HDR }));
}

async function buildSession10Slides() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub4Farms Training";
  pptx.title = "Session 10: GitHub Copilot Basics";
  pptx.subject = "GitHub Training for Farmers — Session 10 of 12";

  const slidesDir = path.join(__dirname, "slides");
  const totalSlides = 24;

  for (let i = 1; i <= totalSlides; i++) {
    const num = String(i).padStart(2, "0");
    const htmlFile = path.join(slidesDir, `slide-${num}.html`);
    console.log(`Processing slide ${i}/${totalSlides}: ${htmlFile}`);
    try {
      const { slide, placeholders } = await html2pptx(htmlFile, pptx);
      const ph = placeholders.find((p) => p.id === "table-placeholder");

      // Slide 7: Human + AI roles table
      if (i === 7 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Role", "What They Do"]),
            r(0, [
              { text: "You (the farmer)", options: { bold: true } },
              "Know your farm, set priorities, make decisions, verify accuracy",
            ]),
            r(1, [
              { text: "Copilot (the helper)", options: { bold: true } },
              "Suggests drafts, fills in structure, saves typing time",
            ]),
          ],
          [3, 6],
        );
      }

      // Slide 9: Weak vs strong prompts table
      if (i === 9 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Weak Prompt", "Strong Prompt"]),
            r(0, [
              '"planting"',
              '"Write an Issue for spring planting prep on a 40-acre corn farm, including soil testing and equipment calibration"',
            ]),
            r(1, [
              '"fix tractor"',
              '"Create a checklist for annual tractor maintenance: oil change, filters, tires, hydraulics for a John Deere 6M"',
            ]),
            r(0, [
              '"vaccinate cows"',
              '"Draft a vaccination schedule for 50-head beef cattle: spring boosters, deworming, state health certificates"',
            ]),
          ],
          [2.5, 6.5],
        );
      }

      // Slide 16: Side-by-side comparison table
      if (i === 16 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["", "Manual (No Copilot)", "With Copilot"]),
            r(0, [
              { text: "Time", options: { bold: true } },
              "10-15 min typing",
              "2-3 min prompt + 5 min editing",
            ]),
            r(1, [
              { text: "Effort", options: { bold: true } },
              "Think of every step yourself",
              "Copilot suggests, you review",
            ]),
            r(0, [
              { text: "Quality", options: { bold: true } },
              "Exactly what you want",
              "Good draft that needs your edits",
            ]),
            r(1, [
              { text: "Best for", options: { bold: true } },
              "Short, unique tasks",
              "Long, structured checklists",
            ]),
          ],
          [1.5, 3.75, 3.75],
        );
      }

      // Slide 21: Vocabulary review table
      if (i === 21 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Term", "Meaning"]),
            r(0, [
              { text: "GitHub Copilot", options: { bold: true } },
              "AI assistant that suggests text and drafts based on what you type",
            ]),
            r(1, [
              { text: "Prompt", options: { bold: true } },
              "The instruction you give Copilot to tell it what you need",
            ]),
            r(0, [
              { text: "Draft", options: { bold: true } },
              "The text Copilot generates for you to review and edit",
            ]),
            r(1, [
              { text: "Evaluate", options: { bold: true } },
              "Checking output for accuracy, completeness, and relevance",
            ]),
            r(0, [
              { text: "AI assistant", options: { bold: true } },
              "A tool that helps with tasks but requires human oversight",
            ]),
          ],
          [2.5, 6.5],
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

buildSession10Slides().catch((err) => {
  console.error("Build failed:", err.message);
  process.exit(1);
});
