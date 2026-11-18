import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const scratchDir = 'C:\\Users\\GOKUL\\.gemini\\antigravity\\scratch\\gokul-portfolio-series';
const desktopDir = 'C:\\Users\\GOKUL\\OneDrive\\Desktop\\cv';

const targets = [
  {
    src: path.join(scratchDir, 'scripts/resume-epdf.html'),
    outName: 'Gokula_Kannan_Digital_eResume.pdf'
  },
  {
    src: path.join(scratchDir, 'scripts/resume-ats.html'),
    outName: 'Gokula_Kannan_Print_ATS_Resume.pdf'
  }
];

const userDataDir = path.join(scratchDir, 'scripts/.edge_profile');
fs.mkdirSync(userDataDir, { recursive: true });

for (const t of targets) {
  const scratchPdf = path.join(scratchDir, 'public/assets', t.outName);
  const fileUrl = `file:///${t.src.replace(/\\/g, '/')}`;
  console.log(`Compiling ${t.src} -> ${scratchPdf}...`);
  const cmd = `"${edgePath}" --headless=new --user-data-dir="${userDataDir}" --disable-gpu --no-sandbox --no-pdf-header-footer --print-to-pdf="${scratchPdf}" "${fileUrl}"`;
  execSync(cmd, { stdio: 'inherit' });

  // Sync to desktop
  const desktopPdf = path.join(desktopDir, 'public/assets', t.outName);
  fs.copyFileSync(scratchPdf, desktopPdf);
  console.log(`Saved ${t.outName} to scratch and desktop.`);
}

// Also keep standard default Gokula_Kannan_Resume_CV.pdf synced with the Digital e-Resume
const defScratch = path.join(scratchDir, 'public/assets/Gokula_Kannan_Resume_CV.pdf');
const epdfScratch = path.join(scratchDir, 'public/assets/Gokula_Kannan_Digital_eResume.pdf');
fs.copyFileSync(epdfScratch, defScratch);
fs.copyFileSync(epdfScratch, path.join(scratchDir, 'Gokula_Kannan_Resume_CV.pdf'));
fs.copyFileSync(epdfScratch, path.join(desktopDir, 'public/assets/Gokula_Kannan_Resume_CV.pdf'));
fs.copyFileSync(epdfScratch, path.join(desktopDir, 'Gokula_Kannan_Resume_CV.pdf'));

console.log('All PDF resumes compiled and synchronized successfully!');
