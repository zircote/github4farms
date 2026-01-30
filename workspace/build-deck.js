/**
 * Build executive briefing PowerPoint deck from HTML slide sources.
 *
 * Reads HTML slides from slides/ directory and assembles a PPTX file
 * with programmatic chart generation for the ROI slide.
 *
 * Usage: node build-deck.js
 * Output: GitHub-Training-for-Farmers-Executive-Briefing.pptx
 *
 * Customize:
 * - PROJECT_NAME: Change to your project name
 * - ROI_DATA: Update with your financial projections
 * - SLIDE_FILES: Add or remove slides as needed
 */

const pptxgen = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

// ── Configuration ──────────────────────────────────────────────

const PROJECT_NAME = "GitHub Training for Farmers";
const ORG_NAME = "Agricultural Digital Literacy Initiative";

const SLIDE_FILES = [
  "slide1-title.html",
  "slide2-problem.html",
  "slide3-before-after.html",
  "slide4-phases.html",
  "slide5-roi.html",
  "slide6-metrics.html",
  "slide7-risks.html",
  "slide8-next-steps.html",
];

// ROI chart data (qualitative impact representation)
// Note: This is a volunteer project with $0 cash investment
// Chart shows qualitative value categories over 3-year horizon
const ROI_DATA = {
  labels: ["Year 1", "Year 2", "Year 3"],
  categories: [
    "Time Savings (Record-Keeping)",
    "Collaboration Improvements",
    "Compliance & Documentation",
    "Digital Literacy Foundation",
    "Train-the-Trainer Scaling",
  ],
  // Qualitative impact scores (1-10 scale representing low to very high impact)
  year1: [5, 4, 3, 7, 2], // Foundation year: moderate immediate impact, high literacy gain
  year2: [7, 6, 5, 9, 5], // Compounding year: established usage, train-the-trainer starts
  year3: [9, 8, 7, 10, 9], // Exponential year: habitual use, network effects
};

// ── Build ──────────────────────────────────────────────────────

async function buildDeck() {
  console.log(`Building ${PROJECT_NAME} Executive Briefing...\n`);

  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = ORG_NAME;
  pptx.title = `${PROJECT_NAME} - Executive Briefing`;
  pptx.subject = "Executive Briefing Deck";

  const slidesDir = path.join(__dirname, "slides");

  // Add HTML-based slides
  for (const file of SLIDE_FILES) {
    const filePath = path.join(slidesDir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`  Skipping ${file} (not found)`);
      continue;
    }

    const slide = pptx.addSlide();
    const html = fs.readFileSync(filePath, "utf8");

    // Add slide background
    if (file.includes("title")) {
      slide.background = { color: "0f172a" };
    } else if (file.includes("next-steps")) {
      slide.background = { color: "1e3a5f" };
    } else {
      slide.background = { color: "f8fafc" };
    }

    // For the ROI slide, add a programmatic stacked bar chart showing qualitative impact
    if (file.includes("roi")) {
      slide.addChart(
        pptx.charts.BAR,
        [
          {
            name: "Year 1 Impact",
            labels: ROI_DATA.categories,
            values: ROI_DATA.year1,
          },
          {
            name: "Year 2 Impact",
            labels: ROI_DATA.categories,
            values: ROI_DATA.year2,
          },
          {
            name: "Year 3 Impact",
            labels: ROI_DATA.categories,
            values: ROI_DATA.year3,
          },
        ],
        {
          x: 0.5,
          y: 2.2,
          w: 9.0,
          h: 3.5,
          barDir: "bar",
          barGrouping: "clustered",
          showValue: true,
          valueFontSize: 9,
          catAxisOrientation: "minMax",
          valAxisMaxVal: 10,
          chartColors: ["3b82f6", "10b981", "8b5cf6"],
          showLegend: true,
          legendPos: "b",
          title: "Qualitative Impact Over 3 Years (1-10 Scale)",
          titleFontSize: 14,
          titleColor: "0f172a",
        },
      );
    }

    console.log(`  Added ${file}`);
  }

  const outputFile = `${PROJECT_NAME.replace(/\s+/g, "-")}-Executive-Briefing.pptx`;
  await pptx.writeFile({ fileName: path.join(__dirname, outputFile) });
  console.log(`\nDeck saved: ${outputFile}`);
}

buildDeck().catch(console.error);
