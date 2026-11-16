import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const scratchDir = 'C:/Users/GOKUL/.gemini/antigravity/scratch/gokul-portfolio-series';
const desktopDir = 'C:/Users/GOKUL/OneDrive/Desktop/cv';

// 1. Favicon SVG (64x64)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="favGGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff2a4b" />
      <stop offset="55%" stop-color="#e50914" />
      <stop offset="100%" stop-color="#9a040d" />
    </linearGradient>
    <filter id="favGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#e50914" flood-opacity="0.5" />
    </filter>
  </defs>
  <rect width="64" height="64" rx="14" fill="#07070a" />
  <g filter="url(#favGlow)">
    <path
      d="M46 21 C41 15 32 13 25 17 C16 22 15 35 20 43 C25 49 35 50 42 46 C45 44 46.5 41 47 38 L47 33 L32 33"
      fill="none"
      stroke="url(#favGGrad)"
      stroke-width="7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
</svg>`;

async function main() {
  const dirs = [scratchDir, desktopDir];
  for (const d of dirs) {
    const pub = path.join(d, 'public');
    if (!fs.existsSync(pub)) continue;
    try {
      fs.writeFileSync(path.join(pub, 'favicon.svg'), faviconSvg);
      await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(path.join(pub, 'favicon-32x32.png'));
      await sharp(Buffer.from(faviconSvg)).resize(64, 64).png().toFile(path.join(pub, 'favicon.png'));
      await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile(path.join(pub, 'apple-touch-icon.png'));
      await sharp(Buffer.from(faviconSvg)).resize(192, 192).png().toFile(path.join(pub, 'icon-192.png'));
      await sharp(Buffer.from(faviconSvg)).resize(512, 512).png().toFile(path.join(pub, 'icon-512.png'));
      console.log('Generated icons in ' + pub);
    } catch (e) {
      console.error('Error writing to ' + pub, e.message);
    }
  }
}
main();
