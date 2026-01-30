/**
 * Generate PNG assets for executive briefing deck.
 *
 * Produces gradient backgrounds, phase timeline bars, arrow indicators,
 * and milestone diamond markers used by the HTML slide sources.
 *
 * Usage: node generate-assets.js
 * Output: slides/*.png
 */

const sharp = require("sharp");
const path = require("path");

const SLIDES_DIR = path.join(__dirname, "slides");

// Phase color palette (customize per project)
const COLORS = {
  phase1: "#3b82f6",
  phase2: "#10b981",
  phase3: "#f59e0b",
  phase4: "#8b5cf6",
  success: "#10b981",
  dark1: "#0f172a",
  dark2: "#1e3a5f",
  light1: "#f8fafc",
  light2: "#f1f5f9",
  accent1: "#1e3a5f",
  accent2: "#0f172a",
};

async function createGradient(w, h, color1, color2, filename) {
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1}"/>
      <stop offset="100%" style="stop-color:${color2}"/>
    </linearGradient></defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(SLIDES_DIR, filename));
  console.log(`  Created ${filename}`);
}

async function createPhaseBar(w, h, filename) {
  const segW = w / 4;
  const colors = [COLORS.phase1, COLORS.phase2, COLORS.phase3, COLORS.phase4];
  const rects = colors
    .map(
      (c, i) =>
        `<rect x="${i * segW}" y="0" width="${segW}" height="${h}" fill="${c}"/>`,
    )
    .join("");
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    ${rects}
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(SLIDES_DIR, filename));
  console.log(`  Created ${filename}`);
}

async function createArrow(w, h, color, filename) {
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <polygon points="0,${h * 0.2} ${w * 0.7},${h * 0.2} ${w * 0.7},0 ${w},${h / 2} ${w * 0.7},${h} ${w * 0.7},${h * 0.8} 0,${h * 0.8}" fill="${color}"/>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(SLIDES_DIR, filename));
  console.log(`  Created ${filename}`);
}

async function createDiamond(size, color, filename) {
  const half = size / 2;
  const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${half},0 ${size},${half} ${half},${size} 0,${half}" fill="${color}"/>
  </svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(SLIDES_DIR, filename));
  console.log(`  Created ${filename}`);
}

async function main() {
  console.log("Generating slide assets...\n");

  // Backgrounds
  await createGradient(1280, 720, COLORS.dark1, COLORS.dark2, "bg-title.png");
  await createGradient(1280, 720, COLORS.light1, COLORS.light2, "bg-light.png");
  await createGradient(
    1280,
    720,
    COLORS.accent1,
    COLORS.accent2,
    "bg-blue-accent.png",
  );

  // Phase bar
  await createPhaseBar(800, 24, "phase-bar.png");

  // Arrow
  await createArrow(120, 60, COLORS.success, "arrow-green.png");

  // Milestone diamonds
  await createDiamond(24, COLORS.phase1, "diamond-blue.png");
  await createDiamond(24, COLORS.phase2, "diamond-green.png");
  await createDiamond(24, COLORS.phase3, "diamond-amber.png");
  await createDiamond(24, COLORS.phase4, "diamond-purple.png");

  console.log("\nAll assets generated.");
}

main().catch(console.error);
