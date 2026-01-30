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

function r(rowIdx, data, overrides) {
  const base = rowIdx % 2 === 0 ? ROW_A : ROW_B;
  const extra = overrides || {};
  return data.map((d) => {
    if (typeof d === "object" && d.text !== undefined) {
      return { text: d.text, options: { ...base, ...extra, ...d.options } };
    }
    return { text: d, options: { ...base, ...extra } };
  });
}

function h(data, overrides) {
  const extra = overrides || {};
  return data.map((d) => ({ text: d, options: { ...HDR, ...extra } }));
}

async function buildSession12Slides() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub4Farms Training";
  pptx.title = "Session 12: Capstone & Train-the-Trainer";
  pptx.subject = "GitHub Training for Farmers — Session 12 of 12";

  const slidesDir = path.join(__dirname, "slides");
  const totalSlides = 24;

  for (let i = 1; i <= totalSlides; i++) {
    const num = String(i).padStart(2, "0");
    const htmlFile = path.join(slidesDir, `slide-${num}.html`);
    console.log(`Processing slide ${i}/${totalSlides}: ${htmlFile}`);
    try {
      const { slide, placeholders } = await html2pptx(htmlFile, pptx);
      const ph = placeholders.find((p) => p.id === "table-placeholder");

      // Slide 4: Learning Journey table (11 rows, fontSize 10)
      if (i === 4 && ph) {
        const sm = { fontSize: 10 };
        const smHdr = { fontSize: 10 };
        addTableToSlide(
          slide,
          ph,
          [
            h(["Session", "What You Learned", "Farm Analogy"], smHdr),
            r(
              0,
              [
                "1",
                "GitHub navigation & repositories",
                "Your digital farm office",
              ],
              sm,
            ),
            r(
              1,
              ["2", "Issues & task tracking", "Work orders for the farm"],
              sm,
            ),
            r(
              0,
              ["3", "Projects & organization", "Your farm planning board"],
              sm,
            ),
            r(
              1,
              [
                "4",
                "Pull Requests & collaboration",
                "Reviewing a farmhand's work",
              ],
              sm,
            ),
            r(
              0,
              [
                "5",
                "Notifications & communication",
                "Farm radio / bulletin board",
              ],
              sm,
            ),
            r(
              1,
              [
                "6",
                "Templates & standardization",
                "Pre-printed work order forms",
              ],
              sm,
            ),
            r(
              0,
              ["7", "YAML & configuration basics", "Recipes for automation"],
              sm,
            ),
            r(
              1,
              [
                "8",
                "GitHub Actions & automation",
                "Automated irrigation timer",
              ],
              sm,
            ),
            r(0, ["9", "Advanced Projects", "The master farm calendar"], sm),
            r(1, ["10", "GitHub Copilot", "Your AI writing assistant"], sm),
            r(
              0,
              ["11", "Spark & Copilot Agents", "Your digital farmhand team"],
              sm,
            ),
          ],
          [0.8, 4, 4.2],
        );
      }

      // Slide 8: Rubric table (6 rows x 5 cols, fontSize 9)
      if (i === 8 && ph) {
        const sm = { fontSize: 9 };
        const smHdr = { fontSize: 9 };
        addTableToSlide(
          slide,
          ph,
          [
            h(
              [
                "Criterion",
                "Excellent (4)",
                "Good (3)",
                "Developing (2)",
                "Beginning (1)",
              ],
              smHdr,
            ),
            r(
              0,
              [
                { text: "Repository Setup", options: { bold: true } },
                "Name, README, clear description",
                "Name and README present",
                "Created, minimal README",
                "Repository exists",
              ],
              sm,
            ),
            r(
              1,
              [
                { text: "Issues (5+)", options: { bold: true } },
                "Detailed, labeled, well-written",
                "Adequate detail, most labeled",
                "Some Issues, few labels",
                "Fewer than 3 Issues",
              ],
              sm,
            ),
            r(
              0,
              [
                { text: "Project Board", options: { bold: true } },
                "Board + Timeline, custom fields, iterations",
                "Board with some custom fields",
                "Board, default settings",
                "No Project board",
              ],
              sm,
            ),
            r(
              1,
              [
                { text: "Templates", options: { bold: true } },
                "Works, matches farm needs",
                "Created with most fields",
                "Basic template exists",
                "No template",
              ],
              sm,
            ),
            r(
              0,
              [
                { text: "Copilot Use", options: { bold: true } },
                "Drafted, evaluated, edited",
                "Drafted and edited",
                "Drafted only, no edits",
                "No Copilot use",
              ],
              sm,
            ),
            r(
              1,
              [
                { text: "Overall Coherence", options: { bold: true } },
                "All pieces work as real system",
                "Most pieces connected",
                "Created but not integrated",
                "Disconnected elements",
              ],
              sm,
            ),
          ],
          [1.3, 1.9, 1.9, 1.9, 1.9],
        );
      }

      // Slide 11: Progress Check table (5 rows)
      if (i === 11 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Time Elapsed", "You Should Have Completed"]),
            r(0, ["10 minutes", "Repository, README, labels"]),
            r(1, [
              "20 minutes",
              "3+ Issues created (including 1 Copilot-drafted)",
            ]),
            r(0, ["30 minutes", "5 Issues, Issue template created"]),
            r(1, ["40 minutes", "Project board with custom fields"]),
            r(0, ["50 minutes", "Iterations, Timeline view, final review"]),
          ],
          [2.5, 6.5],
        );
      }

      // Slide 15: 4-Step Teaching Method table (4 rows)
      if (i === 15 && ph) {
        addTableToSlide(
          slide,
          ph,
          [
            h(["Step", "What You Do", "Farm Example"]),
            r(0, [
              { text: "1. SHOW", options: { bold: true } },
              "Demonstrate while they watch",
              '"Watch me start the tractor"',
            ]),
            r(1, [
              { text: "2. EXPLAIN", options: { bold: true } },
              "Talk through WHY each step matters",
              '"I check the oil first because..."',
            ]),
            r(0, [
              { text: "3. LET THEM TRY", options: { bold: true } },
              "Hand over control, let them practice",
              '"Now you start it"',
            ]),
            r(1, [
              { text: "4. GIVE FEEDBACK", options: { bold: true } },
              "What went well, what to adjust",
              '"Great start — check mirrors first"',
            ]),
          ],
          [1.8, 3.6, 3.6],
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

buildSession12Slides().catch((err) => {
  console.error("Build failed:", err.message);
  process.exit(1);
});
