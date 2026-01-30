const pptxgen = require("pptxgenjs");
const path = require("path");
const html2pptx = require("/Users/AllenR1_1/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/pptx/scripts/html2pptx");

// Table styling constants
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

async function buildSession9Slides() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub4Farms Training";
  pptx.title = "Session 9: Advanced Projects & Roadmaps";
  pptx.subject = "GitHub Training for Farmers — Session 9 of 12";

  const slidesDir = path.join(__dirname, "slides");
  const totalSlides = 24;

  for (let i = 1; i <= totalSlides; i++) {
    const num = String(i).padStart(2, "0");
    const htmlFile = path.join(slidesDir, `slide-${num}.html`);
    console.log(`Processing slide ${i}/${totalSlides}: ${htmlFile}`);
    try {
      const { slide, placeholders } = await html2pptx(htmlFile, pptx);
      const ph = placeholders.find((p) => p.id === "table-placeholder");

      // Slide 5: Custom field types table
      if (i === 5 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Field Type", "What It Stores", "Farm Example"]),
            r(0, [
              { text: "Date", options: { bold: true } },
              "A calendar date",
              "Planting date, harvest date",
            ]),
            r(1, [
              { text: "Single select", options: { bold: true } },
              "One choice from a list",
              "Crop type, field name, priority",
            ]),
            r(0, [
              { text: "Number", options: { bold: true } },
              "A numeric value",
              "Expected yield, acres, head count",
            ]),
          ],
          [2.5, 3, 3.5],
        );
      }

      // Slide 8: Iteration setup example table
      if (i === 8 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Iteration Name", "Start Date", "Duration"]),
            r(0, ["Spring Planting", "Mar 15", "6 weeks"]),
            r(1, ["Early Growing", "May 1", "8 weeks"]),
            r(0, ["Mid-Season", "Jul 1", "6 weeks"]),
            r(1, ["Harvest", "Aug 15", "10 weeks"]),
            r(0, ["Winter Prep", "Nov 1", "6 weeks"]),
          ],
          [3, 3, 3],
        );
      }

      // Slide 14: Evaluation examples table
      if (i === 14 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["What You See", "The Problem", "The Fix"]),
            r(0, [
              "Tractor service overlaps planting",
              "Tractor in the shop when needed in the field",
              "Move service to 2 weeks before planting",
            ]),
            r(1, [
              "Corn & soybean planting same week",
              "Not enough labor/equipment for both",
              "Stagger: corn Week 1, soybeans Week 3",
            ]),
            r(0, [
              "Harvest starts before growing ends",
              "Harvest scheduled too early",
              "Move harvest start date back 2 weeks",
            ]),
            r(1, [
              "No bar between seed order & planting",
              "Missing dependency — delivery takes 2 weeks",
              'Add "Receive seed delivery" task',
            ]),
            r(0, [
              "3 equipment repairs same week",
              "Mechanic can't do three at once",
              "Spread repairs across 3 different weeks",
            ]),
          ],
          [2.5, 3, 3.5],
        );
      }

      // Slide 21: Vocabulary review table
      if (i === 21 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["GitHub Term", "Farm Analogy", "Meaning"]),
            r(0, [
              { text: "Custom field", options: { bold: true } },
              "Ledger column",
              "Extra column you add to a Project",
            ]),
            r(1, [
              { text: "Single select", options: { bold: true } },
              "Dropdown menu",
              "A field with predefined options",
            ]),
            r(0, [
              { text: "Iteration", options: { bold: true } },
              "Season chapter",
              "Named time block with start/end dates",
            ]),
            r(1, [
              { text: "Timeline view", options: { bold: true } },
              "Wall calendar",
              "Visual calendar showing Issues as bars",
            ]),
            r(0, [
              { text: "Cross-repo linking", options: { bold: true } },
              "One master board",
              "Adding Issues from different repos into one Project",
            ]),
            r(1, [
              { text: "Scheduling conflict", options: { bold: true } },
              "Double-booking",
              "Two tasks needing the same resource at once",
            ]),
            r(0, [
              { text: "Resource bottleneck", options: { bold: true } },
              "Traffic jam",
              "Demand exceeds availability in a period",
            ]),
            r(1, [
              { text: "Missing dependency", options: { bold: true } },
              "Forgot a step",
              "A prerequisite task not on the schedule",
            ]),
          ],
          [2, 2.5, 4.5],
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

buildSession9Slides().catch((err) => {
  console.error("Build failed:", err.message);
  process.exit(1);
});
