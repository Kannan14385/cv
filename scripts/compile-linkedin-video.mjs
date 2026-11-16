import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const scratchDir = 'C:\\Users\\GOKUL\\.gemini\\antigravity\\scratch\\gokul-portfolio-series';
const desktopDir = 'C:\\Users\\GOKUL\\OneDrive\\Desktop\\cv';
const userDesktop = 'C:\\Users\\GOKUL\\OneDrive\\Desktop';
const ffmpegPath = path.join(scratchDir, 'node_modules/ffmpeg-static/ffmpeg.exe');
const inputDir = path.join(scratchDir, 'public/assets/linkedin');

const slides = [
  'slide-1-hero-billboard.png',
  'slide-2-the-pilot-about.png',
  'slide-3-featured-originals.png',
  'slide-4-production-gallery.png',
  'slide-5-dual-resume-system.png',
  'slide-6-contact-stream-now.png'
];

const outVideoScratch = path.join(scratchDir, 'public/assets/linkedin/Gokula_Kannan_Portfolio_Walkthrough.mp4');
const outVideoDesktopCv = path.join(desktopDir, 'public/assets/linkedin/Gokula_Kannan_Portfolio_Walkthrough.mp4');
const outVideoDesktopUser = path.join(userDesktop, 'Gokula_Kannan_Portfolio_Walkthrough.mp4');
const outVideoFolder = path.join(userDesktop, 'Gokula_Kannan_Portfolio_Showcase/Gokula_Kannan_Portfolio_Walkthrough.mp4');

// Build FFmpeg command with xfade transitions
const inputs = slides.map(s => `-loop 1 -t 4.5 -i "${path.join(inputDir, s)}"`).join(' ');

const filterComplex = [
  `[0:v][1:v]xfade=transition=fade:duration=0.6:offset=3.9[v01]`,
  `[v01][2:v]xfade=transition=fade:duration=0.6:offset=7.8[v02]`,
  `[v02][3:v]xfade=transition=fade:duration=0.6:offset=11.7[v03]`,
  `[v03][4:v]xfade=transition=fade:duration=0.6:offset=15.6[v04]`,
  `[v04][5:v]xfade=transition=fade:duration=0.6:offset=19.5,format=yuv420p[vfinal]`
].join(';');

// Generate quiet stereo audio track for 24 seconds to satisfy LinkedIn / social media video players
const cmd = `"${ffmpegPath}" -y ${inputs} -f lavfi -t 24 -i anullsrc=channel_layout=stereo:sample_rate=44100 -filter_complex "${filterComplex}" -map "[vfinal]" -map 6:a -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -c:a aac -b:a 128k -r 30 -shortest "${outVideoScratch}"`;

console.log('Compiling 1080p Walkthrough Video with FFmpeg...');
execSync(cmd, { stdio: 'inherit' });

console.log(`Video created at: ${outVideoScratch}`);

// Synchronize video to Desktop locations
fs.copyFileSync(outVideoScratch, outVideoDesktopCv);
fs.copyFileSync(outVideoScratch, outVideoDesktopUser);
fs.copyFileSync(outVideoScratch, outVideoFolder);

console.log(`Video synchronized to:`);
console.log(`1. Scratch: ${outVideoScratch}`);
console.log(`2. Desktop Repo: ${outVideoDesktopCv}`);
console.log(`3. Direct Desktop: ${outVideoDesktopUser}`);
console.log(`4. Desktop Showcase Folder: ${outVideoFolder}`);
