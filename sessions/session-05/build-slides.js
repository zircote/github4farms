const pptxgen = require("pptxgenjs");
const path = require("path");
const html2pptx = require("/Users/AllenR1_1/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/pptx/scripts/html2pptx");

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
      await html2pptx(htmlFile, pptx);
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
