import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const targetDir = 'C:\\Users\\GOKUL\\.gemini\\antigravity\\scratch\\gokul-portfolio-series\\public\\assets\\glamistry';
const desktopDir = 'C:\\Users\\GOKUL\\OneDrive\\Desktop\\cv\\public\\assets\\glamistry';

fs.mkdirSync(targetDir, { recursive: true });
fs.mkdirSync(desktopDir, { recursive: true });

const pages = [
  {
    name: 'glamistry-hero.png',
    url: 'https://glamistrymakeover.netlify.app/',
    width: 1440,
    height: 900
  },
  {
    name: 'glamistry-services.png',
    url: 'https://glamistrymakeover.netlify.app/services/',
    width: 1440,
    height: 900
  },
  {
    name: 'glamistry-portfolio.png',
    url: 'https://glamistrymakeover.netlify.app/project/',
    width: 1440,
    height: 900
  },
  {
    name: 'glamistry-about.png',
    url: 'https://glamistrymakeover.netlify.app/about/',
    width: 1440,
    height: 900
  },
  {
    name: 'glamistry-contact.png',
    url: 'https://glamistrymakeover.netlify.app/contact/',
    width: 1440,
    height: 900
  }
];

for (const p of pages) {
  const outPath = path.join(targetDir, p.name);
  console.log(`Capturing ${p.name} from ${p.url}...`);
  const cmd = `"${edgePath}" --headless=new --disable-gpu --hide-scrollbars --window-size=${p.width},${p.height} --screenshot="${outPath}" "${p.url}"`;
  execSync(cmd, { stdio: 'inherit' });
  const desktopOut = path.join(desktopDir, p.name);
  fs.copyFileSync(outPath, desktopOut);
  console.log(`Saved ${p.name}`);
}

console.log('All authentic Glamistry screenshots captured successfully!');
