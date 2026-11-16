import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const scratchDir = 'C:/Users/GOKUL/.gemini/antigravity/scratch/gokul-portfolio-series';
const desktopDir = 'C:/Users/GOKUL/OneDrive/Desktop/cv';

async function main() {
  const portraitPath = path.join(scratchDir, 'public/assets/gokul-720.webp');
  const portrait = await sharp(portraitPath).resize({ height: 580 }).png().toBuffer();

  const svgOverlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <text x="64" y="270" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Impact, sans-serif" font-weight="900" font-size="88" fill="#f4f1ec" letter-spacing="2">GOKULA KANNAN</text>
    <text x="70" y="324" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-weight="800" font-size="24" fill="#e50914" letter-spacing="14">THE SERIES</text>
    <text x="70" y="380" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-weight="600" font-size="16" fill="#a7a6ad" letter-spacing="4">PYTHON &amp; WORDPRESS DEVELOPER • DATA ANALYST • MCA</text>
    <rect x="70" y="415" width="220" height="38" rx="6" fill="#e50914" />
    <text x="100" y="440" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-weight="700" font-size="14" fill="#ffffff" letter-spacing="2">▶ NOW STREAMING</text>
  </svg>`);

  const bgGradient = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g" cx="75%" cy="50%" r="55%">
        <stop offset="0%" stop-color="#e50914" stop-opacity="0.4" />
        <stop offset="60%" stop-color="#e50914" stop-opacity="0.08" />
        <stop offset="100%" stop-color="#07070a" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="glowLeft" cx="20%" cy="30%" r="40%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15" />
        <stop offset="100%" stop-color="#07070a" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#07070a" />
    <rect width="1200" height="630" fill="url(#g)" />
    <rect width="1200" height="630" fill="url(#glowLeft)" />
  </svg>`);

  const outJpg = await sharp(bgGradient)
    .composite([
      { input: portrait, gravity: 'southeast', top: 50, left: 660 },
      { input: svgOverlay, gravity: 'northwest' }
    ])
    .jpeg({ quality: 90 })
    .toBuffer();

  fs.writeFileSync(path.join(scratchDir, 'public/assets/og-image.jpg'), outJpg);
  fs.writeFileSync(path.join(desktopDir, 'public/assets/og-image.jpg'), outJpg);
  console.log('Successfully regenerated official Gokula Kannan og-image.jpg');
}

main().catch(console.error);
