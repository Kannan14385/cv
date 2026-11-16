import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const scratchDir = 'C:\\Users\\GOKUL\\.gemini\\antigravity\\scratch\\gokul-portfolio-series';
const desktopDir = 'C:\\Users\\GOKUL\\OneDrive\\Desktop\\cv';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const htmlDir = path.join(scratchDir, 'scripts/linkedin-slides');
const scratchOutDir = path.join(scratchDir, 'public/assets/linkedin');
const desktopOutDir = path.join(desktopDir, 'public/assets/linkedin');
const desktopUserDir = 'C:\\Users\\GOKUL\\OneDrive\\Desktop\\Gokula_Kannan_Portfolio_Showcase';

fs.mkdirSync(scratchOutDir, { recursive: true });
fs.mkdirSync(desktopOutDir, { recursive: true });
fs.mkdirSync(desktopUserDir, { recursive: true });

const slideNames = [
  'slide-1-hero-billboard',
  'slide-2-the-pilot-about',
  'slide-3-featured-originals',
  'slide-4-production-gallery',
  'slide-5-dual-resume-system',
  'slide-6-contact-stream-now'
];

for (let i = 0; i < slideNames.length; i++) {
  const name = slideNames[i];
  const htmlPath = path.join(htmlDir, `${name}.html`);
  const outPng = path.join(scratchOutDir, `${name}.png`);
  const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;

  console.log(`[${i + 1}/${slideNames.length}] Rendering ${name}.png ...`);
  const cmd = `"${edgePath}" --headless=new --disable-gpu --window-size=1920,1080 --hide-scrollbars --screenshot="${outPng}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'inherit' });

  // Copy to desktop repo and user Desktop
  const desktopPng = path.join(desktopOutDir, `${name}.png`);
  const userDesktopPng = path.join(desktopUserDir, `${i + 1}-${name}.png`);
  fs.copyFileSync(outPng, desktopPng);
  fs.copyFileSync(outPng, userDesktopPng);
  console.log(`Saved ${name}.png to scratch, desktop repo, and Desktop folder.`);
}

console.log('All 6 slides rendered to 1920x1080 HD images successfully!');
