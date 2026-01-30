const pptxgen = require("pptxgenjs");
const path = require("path");
const html2pptx = require("/Users/AllenR1_1/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/pptx/scripts/html2pptx");

// Table styling constants
const HDR = { fill: { color: "1E5128" }, color: "FFFFFF", bold: true, fontSize: 11, align: "left", valign: "middle" };
const ROW_A = { fill: { color: "F4F1DE" }, fontSize: 11, align: "left", valign: "middle" };
const ROW_B = { fill: { color: "FFFFFF" }, fontSize: 11, align: "left", valign: "middle" };
const TBL_OPTS = { border: { pt: 1, color: "CCCCCC" }, autoPage: false };

function addTableToSlide(slide, ph, tableData, colW) {
  slide.addTable(tableData, { x: ph.x, y: ph.y, w: ph.w, h: ph.h, ...TBL_OPTS, colW });
}

function r(rowIdx, data) {
  const base = rowIdx % 2 === 0 ? ROW_A : ROW_B;
  return data.map(d => {
    if (typeof d === "object" && d.text !== undefined) {
      return { text: d.text, options: { ...base, ...d.options } };
    }
    return { text: d, options: { ...base } };
  });
}

function h(data) {
  return data.map(d => ({ text: d, options: HDR }));
}

async function buildSession5Slides() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "GitHub4Farms Training";
  pptx.title = "Session 5: Notifications & Team Communication";
  pptx.subject = "GitHub Training for Farmers — Session 5 of 12";

  const slidesDir = path.join(__dirname, "slides");
  const totalSlides = 25;

  for (let i = 1; i <= totalSlides; i++) {
    const num = String(i).padStart(2, "0");
    const htmlFile = path.join(slidesDir, `slide-${num}.html`);
    console.log(`Processing slide ${i}/${totalSlides}: ${htmlFile}`);
    try {
      const { slide, placeholders } = await html2pptx(htmlFile, pptx);
      const ph = placeholders.find(p => p.id === "table-placeholder");

      if (i === 11 && ph) {
        addTableToSlide(slide, ph, [
          h(["Situation", "@mention Comment"]),
          r(0, ["Irrigation check", "\"@tom Pump in Field 2 making noise. Check before Friday?\""]),
          r(1, ["Vet visit", "\"@maria Vet confirmed Tuesday 9am, Herd B vaccinations.\""]),
          r(0, ["Equipment order", "\"@allen Replacement nozzle ordered. Arrives Thursday.\""]),
          r(1, ["Grant deadline", "\"@sarah EQIP report due June 15. Review draft this week?\""])
        ], [2.5, 6.5]);
      }

      if (i === 12 && ph) {
        addTableToSlide(slide, ph, [
          h(["", "Issue", "Discussion"]),
          r(0, [{ text: "Purpose", options: { bold: true } }, "A task to be done", "A conversation to have"]),
          r(1, [{ text: "Outcome", options: { bold: true } }, "Gets closed when done", "Stays open for ongoing talk"]),
          r(0, [{ text: "Example", options: { bold: true } }, "\"Fix fence in north pasture\"", "\"What cover crops work best?\""])
        ], [2, 3.5, 3.5]);
      }

      if (i === 14 && ph) {
        addTableToSlide(slide, ph, [
          h(["Situation", "Best Tool", "Why"]),
          r(0, ["\"Fix the broken fence\"", { text: "Issue", options: { bold: true } }, "Task with a clear end"]),
          r(1, ["\"Check irrigation pump\"", { text: "@mention", options: { bold: true } }, "Directing to a person"]),
          r(0, ["\"Best cover crops?\"", { text: "Discussion", options: { bold: true } }, "Open-ended question"]),
          r(1, ["\"Available Saturday?\"", { text: "Discussion", options: { bold: true } }, "Group coordination"]),
          r(0, ["\"PR ready for review\"", { text: "@mention", options: { bold: true } }, "Reviewer's attention"]),
          r(1, ["Stay up to date", { text: "Watch", options: { bold: true } }, "Automatic notifications"])
        ], [3, 2, 4]);
      }

      if (i === 22 && ph) {
        addTableToSlide(slide, ph, [
          h(["GitHub Term", "Farm Analogy", "Meaning"]),
          r(0, [{ text: "Watch", options: { bold: true } }, "Sign up for alerts", "Subscribe to updates from a repository"]),
          r(1, [{ text: "Notification", options: { bold: true } }, "Text alert", "A message telling you something happened"]),
          r(0, [{ text: "@mention", options: { bold: true } }, "Tap on the shoulder", "Tag a specific person to get their attention"]),
          r(1, [{ text: "Discussion", options: { bold: true } }, "Bulletin board", "Forum for questions and conversations"]),
          r(0, [{ text: "Unsubscribe", options: { bold: true } }, "Cancel alerts", "Stop getting notifications for one thread"]),
          r(1, [{ text: "Inbox (bell)", options: { bold: true } }, "Mailbox", "Where your notifications appear on GitHub"])
        ], [2, 2.5, 4.5]);
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

buildSession5Slides().catch((err) => {
  console.error("Build failed:", err.message);
  process.exit(1);
});
