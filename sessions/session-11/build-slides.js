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

async function buildSession11Slides() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub4Farms Training";
  pptx.title = "Session 11: GitHub Spark & Agents";
  pptx.subject = "GitHub Training for Farmers — Session 11 of 12";

  const slidesDir = path.join(__dirname, "slides");
  const totalSlides = 24;

  for (let i = 1; i <= totalSlides; i++) {
    const num = String(i).padStart(2, "0");
    const htmlFile = path.join(slidesDir, `slide-${num}.html`);
    console.log(`Processing slide ${i}/${totalSlides}: ${htmlFile}`);
    try {
      const { slide, placeholders } = await html2pptx(htmlFile, pptx);
      const ph = placeholders.find((p) => p.id === "table-placeholder");

      // Slide 7: How Spark Works — three steps table
      if (i === 7 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Step", "What You Do", "Farm Analogy"]),
            r(0, [
              { text: "1. Describe", options: { bold: true } },
              "Type what you want in plain English",
              "Telling a farmhand what tool you need",
            ]),
            r(1, [
              { text: "2. Review", options: { bold: true } },
              "Look at what Spark built and test it",
              "Checking the farmhand's work before using it",
            ]),
            r(0, [
              { text: "3. Refine", options: { bold: true } },
              "Ask Spark to make changes or fix issues",
              'Giving feedback: "Make the handle longer"',
            ]),
          ],
          [2, 3.5, 3.5],
        );
      }

      // Slide 9: Writing Good Prompts — weak vs strong
      if (i === 9 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Weak Prompt", "Strong Prompt"]),
            r(0, [
              '"seed calculator"',
              '"Build a seed order calculator: enter field size in acres and seeding rate. Calculate total seeds and number of 80,000-seed bags."',
            ]),
            r(1, [
              '"equipment list"',
              '"Build a checklist for pre-season equipment inspection. List tractor, combine, planter. Checkboxes for oil, tires, belts, safety."',
            ]),
            r(0, [
              '"animal log"',
              '"Build a daily livestock health log: select animal ID, enter date, check appetite/movement/temp, type notes. Save entries in a list."',
            ]),
          ],
          [2.5, 6.5],
        );
      }

      // Slide 13: Human-in-the-Loop table
      if (i === 13 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Principle", "What It Means", "Farm Analogy"]),
            r(0, [
              { text: "Human-in-the-loop", options: { bold: true } },
              "A person reviews AI work before it takes effect",
              "Checking the farmhand's work before signing off",
            ]),
            r(1, [
              { text: "Guardrails", options: { bold: true } },
              "Limits on what AI can do without asking",
              "A fence that keeps the farmhand in the right pasture",
            ]),
            r(0, [
              { text: "Approval gates", options: { bold: true } },
              "Points where you must say 'yes' before AI continues",
              "Farmhand asks permission before buying supplies",
            ]),
          ],
          [2.2, 3.4, 3.4],
        );
      }

      // Slide 14: Comparing Your AI Tools table
      if (i === 14 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Tool", "What It Does", "Farm Analogy", "Learned In"]),
            r(0, [
              { text: "Copilot", options: { bold: true } },
              "Suggests text as you write",
              "Farmhand who finishes your sentences",
              "Session 10",
            ]),
            r(1, [
              { text: "Spark", options: { bold: true } },
              "Builds simple apps from descriptions",
              "Farmhand who builds a tool from your sketch",
              "Today",
            ]),
            r(0, [
              { text: "Agents", options: { bold: true } },
              "Follows multi-step instructions",
              "Farmhand who handles a whole job list",
              "Today",
            ]),
          ],
          [1.5, 2.5, 3, 2],
        );
      }

      // Slide 21: Key Vocabulary table
      if (i === 21 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Term", "Meaning"]),
            r(0, [
              { text: "GitHub Spark", options: { bold: true } },
              "Builds simple web apps from plain English descriptions",
            ]),
            r(1, [
              { text: "App", options: { bold: true } },
              "A small program you use in a web browser (calculator, form)",
            ]),
            r(0, [
              { text: "Agent", options: { bold: true } },
              "AI that follows multi-step instructions through a plan",
            ]),
            r(1, [
              { text: "Natural language", options: { bold: true } },
              "Everyday English, as opposed to code or commands",
            ]),
            r(0, [
              { text: "Prompt engineering", options: { bold: true } },
              "Writing clear instructions to get good AI results",
            ]),
            r(1, [
              { text: "Guardrails", options: { bold: true } },
              "Limits that prevent AI from acting without permission",
            ]),
            r(0, [
              { text: "Human-in-the-loop", options: { bold: true } },
              "A person reviews and approves AI work before it takes effect",
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

buildSession11Slides().catch((err) => {
  console.error("Build failed:", err.message);
  process.exit(1);
});
