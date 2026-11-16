import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const scratchDir = 'C:\\Users\\GOKUL\\.gemini\\antigravity\\scratch\\gokul-portfolio-series';
const desktopDir = 'C:\\Users\\GOKUL\\OneDrive\\Desktop\\cv';
const userDesktop = 'C:\\Users\\GOKUL\\OneDrive\\Desktop';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const slidesDir = path.join(scratchDir, 'public/assets/linkedin');

const slideNames = [
  'slide-1-hero-billboard.png',
  'slide-2-the-pilot-about.png',
  'slide-3-featured-originals.png',
  'slide-4-production-gallery.png',
  'slide-5-dual-resume-system.png',
  'slide-6-contact-stream-now.png'
];

// Helper to convert image to base64
function toB64(file) {
  const p = path.join(slidesDir, file);
  return `data:image/png;base64,${fs.readFileSync(p).toString('base64')}`;
}

const pagesHtml = slideNames.map((name, idx) => `
  <div class="page ${idx === slideNames.length - 1 ? 'last' : ''}">
    <img src="${toB64(name)}" />
  </div>
`).join('\n');

const fullHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  @page {
    size: 1920px 1080px;
    margin: 0;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #07070a; margin: 0; padding: 0; }
  .page {
    width: 1920px;
    height: 1080px;
    page-break-after: always;
    page-break-inside: avoid;
    overflow: hidden;
    position: relative;
  }
  .page.last {
    page-break-after: avoid;
  }
  .page img {
    width: 1920px;
    height: 1080px;
    display: block;
    object-fit: cover;
  }
</style>
</head>
<body>
  ${pagesHtml}
</body>
</html>`;

const tempHtml = path.join(scratchDir, 'scripts/linkedin-carousel.html');
fs.writeFileSync(tempHtml, fullHtml, 'utf8');

const outPdfScratch = path.join(scratchDir, 'public/assets/linkedin/Gokula_Kannan_Portfolio_Showcase_Carousel.pdf');
const outPdfDesktopCv = path.join(desktopDir, 'public/assets/linkedin/Gokula_Kannan_Portfolio_Showcase_Carousel.pdf');
const outPdfUser = path.join(userDesktop, 'Gokula_Kannan_Portfolio_Showcase_Carousel.pdf');
const outPdfFolder = path.join(userDesktop, 'Gokula_Kannan_Portfolio_Showcase/Gokula_Kannan_Portfolio_Showcase_Carousel.pdf');

console.log('Compiling Carousel PDF with Edge headless...');
const cmd = `"${edgePath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outPdfScratch}" "file:///${tempHtml.replace(/\\/g, '/')}"`;
execSync(cmd, { stdio: 'inherit' });

fs.copyFileSync(outPdfScratch, outPdfDesktopCv);
fs.copyFileSync(outPdfScratch, outPdfUser);
fs.copyFileSync(outPdfScratch, outPdfFolder);

console.log('LinkedIn Carousel PDF compiled and synchronized to Desktop!');
