import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const scratchDir = 'C:\\Users\\GOKUL\\.gemini\\antigravity\\scratch\\gokul-portfolio-series';
const desktopDir = 'C:\\Users\\GOKUL\\OneDrive\\Desktop\\cv';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const ffmpegPath = path.join(scratchDir, 'node_modules/ffmpeg-static/ffmpeg.exe');

const outputDir = path.join(scratchDir, 'public/assets/linkedin');
const desktopOutputDir = path.join(desktopDir, 'public/assets/linkedin');
const userDesktop = 'C:\\Users\\GOKUL\\OneDrive\\Desktop';

fs.mkdirSync(outputDir, { recursive: true });
fs.mkdirSync(desktopOutputDir, { recursive: true });

// Helper to convert image file to base64 data URI
function toDataUri(relPath) {
  const fullPath = path.isAbsolute(relPath) ? relPath : path.join(scratchDir, relPath);
  if (!fs.existsSync(fullPath)) return '';
  const ext = path.extname(fullPath).toLowerCase().replace('.', '');
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'svg' ? 'image/svg+xml' : ext === 'webp' ? 'image/webp' : 'image/png';
  const b64 = fs.readFileSync(fullPath).toString('base64');
  return `data:${mime};base64,${b64}`;
}

const gokulPortrait = toDataUri('public/assets/gokul-portrait.jpg');
const gaitPresident = toDataUri('public/assets/gait-president.jpg');
const glamHero = toDataUri('public/assets/glamistry/glamistry-hero.png');
const glamServices = toDataUri('public/assets/glamistry/glamistry-services.png');
const stacklyGrid = toDataUri('public/assets/stackly/zooye9-property-grid.png');
const odooShot = toDataUri('public/assets/odoo/Picture1.png');
const pbiShot = toDataUri('public/assets/pbi/Screenshot 2026-04-06 142735.png');
const bloodShot = toDataUri('public/assets/blood/Picture1.png');

console.log('All image assets loaded into memory as Base64 Data URIs.');

// Slide 1: Netflix-style Hero Billboard
const slide1Html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  body {
    width: 1920px; height: 1080px; overflow: hidden;
    background: radial-gradient(circle at 75% 35%, rgba(229, 9, 20, 0.22) 0%, rgba(10, 10, 16, 0.95) 55%, #07070a 100%);
    color: #fff; position: relative;
  }
  .grid-bg {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px; opacity: 0.4;
  }
  .nav {
    position: absolute; top: 0; left: 0; right: 0; height: 96px; padding: 0 80px;
    display: flex; align-items: center; justify-content: space-between; z-index: 50;
    background: linear-gradient(to bottom, rgba(7,7,10,0.95), transparent);
  }
  .brand { display: flex; align-items: center; gap: 16px; }
  .logo-g {
    width: 50px; height: 50px; background: #E50914; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 32px; font-weight: 900; color: #fff;
    box-shadow: 0 0 25px rgba(229, 9, 20, 0.6);
  }
  .brand-text { font-size: 26px; font-weight: 800; letter-spacing: -0.5px; }
  .brand-text span { color: #E50914; }
  .nav-pills { display: flex; gap: 24px; font-size: 17px; font-weight: 600; color: #aaa; }
  .nav-pills .active { color: #fff; border-bottom: 2px solid #E50914; padding-bottom: 4px; }
  .live-pill {
    padding: 8px 18px; border-radius: 20px; background: rgba(229,9,20,0.15);
    border: 1px solid rgba(229,9,20,0.4); color: #ff4d52; font-size: 14px; font-weight: 700;
    display: flex; align-items: center; gap: 8px;
  }
  .live-dot { width: 8px; height: 8px; border-radius: 50%; background: #E50914; box-shadow: 0 0 8px #E50914; }
  
  .hero-content {
    position: absolute; top: 160px; left: 80px; width: 980px; z-index: 20;
  }
  .series-tag {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 16px; font-weight: 800; letter-spacing: 5px; text-transform: uppercase;
    color: #ff3340; margin-bottom: 20px;
  }
  .title {
    font-size: 82px; font-weight: 900; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.8);
  }
  .title-highlight {
    background: linear-gradient(90deg, #fff 0%, #ff6b72 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .meta-row {
    display: flex; align-items: center; gap: 18px; font-size: 17px; font-weight: 600; margin-bottom: 24px;
  }
  .match-badge { color: #46d369; font-weight: 800; font-size: 18px; }
  .res-badge { padding: 3px 8px; border: 1px solid rgba(255,255,255,0.4); border-radius: 4px; font-size: 13px; font-weight: 700; }
  .genre { color: #bbb; }
  .desc {
    font-size: 21px; line-height: 1.5; color: #d1d5db; margin-bottom: 36px; max-width: 860px;
  }
  .btn-row { display: flex; gap: 18px; align-items: center; }
  .btn-play {
    padding: 16px 36px; background: #fff; color: #000; border-radius: 8px;
    font-size: 19px; font-weight: 800; display: flex; align-items: center; gap: 12px;
    box-shadow: 0 8px 30px rgba(255,255,255,0.25);
  }
  .btn-info {
    padding: 16px 32px; background: rgba(109, 109, 110, 0.7); color: #fff; border-radius: 8px;
    font-size: 19px; font-weight: 700; display: flex; align-items: center; gap: 12px;
    backdrop-filter: blur(10px);
  }
  .btn-resume {
    padding: 16px 32px; background: rgba(229, 9, 20, 0.85); color: #fff; border-radius: 8px;
    font-size: 19px; font-weight: 700; display: flex; align-items: center; gap: 12px;
    box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
  }

  .portrait-container {
    position: absolute; right: 60px; bottom: 0; width: 800px; height: 950px;
    display: flex; align-items: flex-end; justify-content: center; z-index: 10;
  }
  .portrait-img {
    height: 900px; object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.9)) drop-shadow(0 0 60px rgba(229,9,20,0.3));
    mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 85%, transparent 100%);
  }
  .hud-badge {
    position: absolute; padding: 14px 22px; border-radius: 12px;
    background: rgba(15, 15, 22, 0.85); border: 1px solid rgba(255,255,255,0.15);
    backdrop-filter: blur(15px); box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    display: flex; align-items: center; gap: 14px; z-index: 25;
  }
  .hud-1 { top: 220px; right: 580px; }
  .hud-2 { bottom: 200px; right: 600px; }
  .hud-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(229,9,20,0.2); display: flex; align-items: center; justify-content: center; font-size: 20px; color: #ff4d52; }
  .hud-title { font-size: 16px; font-weight: 800; color: #fff; }
  .hud-sub { font-size: 13px; color: #9ca3af; }

  .bottom-bar {
    position: absolute; bottom: 0; left: 0; right: 0; height: 80px; padding: 0 80px;
    background: linear-gradient(to top, #07070a, transparent); z-index: 30;
    display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.06);
  }
  .url-label { font-size: 16px; color: #9ca3af; font-family: monospace; }
  .url-label strong { color: #E50914; }
  .status-tag { font-size: 14px; font-weight: 700; color: #46d369; display: flex; align-items: center; gap: 8px; }
</style>
</head>
<body>
  <div class="grid-bg"></div>
  
  <div class="nav">
    <div class="brand">
      <div class="logo-g">G</div>
      <div class="brand-text">GOKULA KANNAN <span>THE SERIES</span></div>
    </div>
    <div class="nav-pills">
      <div class="active">Overview</div>
      <div>The Pilot</div>
      <div>Originals</div>
      <div>Gallery</div>
      <div>Resume Hub</div>
      <div>Contact</div>
    </div>
    <div class="live-pill">
      <div class="live-dot"></div>
      NOW STREAMING ON RENDER
    </div>
  </div>

  <div class="hero-content">
    <div class="series-tag">★ NETFLIX-STYLE DEVELOPER PORTFOLIO</div>
    <h1 class="title">GOKULA KANNAN<br><span class="title-highlight">SOFTWARE ENGINEER</span></h1>
    <div class="meta-row">
      <span class="match-badge">99% MATCH</span>
      <span class="res-badge">2026 RELEASE</span>
      <span class="res-badge">ULTRA-HD</span>
      <span class="res-badge">ATS COMPLIANT</span>
      <span class="genre">Full-Stack • Python • Odoo 18 ERP • React • Power BI</span>
    </div>
    <p class="desc">
      Architecting high-concurrency web platforms, automated enterprise ERP workflows, and cinematic user interfaces. From live production deployments on Netlify & Render to robust multi-tenant architectures.
    </p>
    <div class="btn-row">
      <div class="btn-play">▶ Stream Portfolio</div>
      <div class="btn-info">ⓘ Explore Episodes</div>
      <div class="btn-resume">⤓ Dual-Resume Hub</div>
    </div>
  </div>

  <div class="portrait-container">
    <img src="${gokulPortrait}" class="portrait-img" alt="Gokula Kannan">
  </div>

  <div class="hud-badge hud-1">
    <div class="hud-icon">⚡</div>
    <div>
      <div class="hud-title">Tech Lead & Developer</div>
      <div class="hud-sub">Stackly & Freelance Architect</div>
    </div>
  </div>

  <div class="hud-badge hud-2">
    <div class="hud-icon">🏆</div>
    <div>
      <div class="hud-title">Former GAIT President</div>
      <div class="hud-sub">G.T.N. Arts College • B.Sc. IT</div>
    </div>
  </div>

  <div class="bottom-bar">
    <div class="url-label">Production URL: <strong>https://gokula-kannan-m-portfolio.onrender.com/</strong></div>
    <div class="status-tag">● PRODUCTION READY • OPEN TO NEW OPPORTUNITIES</div>
  </div>
</body>
</html>`;

// Slide 2: The Pilot (About Gokul)
const slide2Html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  body {
    width: 1920px; height: 1080px; overflow: hidden;
    background: #09090e; color: #fff; position: relative;
    padding: 60px 80px;
  }
  .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px; }
  .ch-tag { font-size: 15px; font-weight: 800; letter-spacing: 4px; color: #E50914; text-transform: uppercase; margin-bottom: 6px; }
  .ch-title { font-size: 44px; font-weight: 900; }
  .grid-2 { display: grid; grid-template-columns: 560px 1fr; gap: 40px; height: 820px; }
  
  .profile-card {
    background: #111118; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px;
    padding: 36px; display: flex; flex-direction: column; align-items: center; text-align: center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.5); position: relative; overflow: hidden;
  }
  .profile-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 6px;
    background: linear-gradient(90deg, #E50914, #ff525a);
  }
  .avatar-wrap {
    width: 200px; height: 200px; border-radius: 50%; overflow: hidden;
    border: 4px solid #E50914; margin-bottom: 24px;
    box-shadow: 0 0 30px rgba(229,9,20,0.5);
  }
  .avatar-wrap img { width: 100%; height: 100%; object-fit: cover; }
  .p-name { font-size: 28px; font-weight: 800; margin-bottom: 6px; }
  .p-role { font-size: 17px; color: #E50914; font-weight: 700; margin-bottom: 16px; }
  .p-bio { font-size: 16px; color: #9ca3af; line-height: 1.6; margin-bottom: 24px; }
  .quick-stats {
    width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;
  }
  .stat-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 14px; text-align: center; }
  .stat-val { font-size: 22px; font-weight: 800; color: #fff; }
  .stat-lbl { font-size: 12px; color: #888; text-transform: uppercase; margin-top: 4px; }
  
  .timeline-col { display: flex; flex-direction: column; gap: 20px; }
  .card-box {
    background: #111118; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
    padding: 24px 28px; display: flex; gap: 24px; align-items: center;
  }
  .card-box:hover { border-color: rgba(229,9,20,0.5); }
  .icon-lead {
    width: 56px; height: 56px; border-radius: 14px; background: rgba(229,9,20,0.12);
    border: 1px solid rgba(229,9,20,0.3); display: flex; align-items: center; justify-content: center;
    font-size: 26px; color: #ff4d52; flex-shrink: 0;
  }
  .c-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .c-title { font-size: 20px; font-weight: 800; color: #fff; }
  .c-date { font-size: 13px; font-weight: 700; color: #E50914; background: rgba(229,9,20,0.1); padding: 4px 10px; border-radius: 6px; }
  .c-sub { font-size: 15px; color: #38bdf8; margin-bottom: 8px; font-weight: 600; }
  .c-desc { font-size: 14px; color: #9ca3af; line-height: 1.5; }

  .president-card {
    background: #111118; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
    padding: 20px 24px; display: flex; gap: 20px; align-items: center;
  }
  .pres-thumb { width: 100px; height: 100px; border-radius: 12px; overflow: hidden; flex-shrink: 0; border: 2px solid rgba(229,9,20,0.4); }
  .pres-thumb img { width: 100%; height: 100%; object-fit: cover; }
</style>
</head>
<body>
  <div class="header">
    <div>
      <div class="ch-tag">EPISODE 01 • THE PILOT</div>
      <h2 class="ch-title">Origins, Leadership & Technical Foundation</h2>
    </div>
    <div style="font-size: 18px; color: #9ca3af;">Gokula Kannan Portfolio Walkthrough</div>
  </div>

  <div class="grid-2">
    <div class="profile-card">
      <div class="avatar-wrap">
        <img src="${gokulPortrait}" alt="Gokula Kannan">
      </div>
      <div class="p-name">Gokula Kannan M</div>
      <div class="p-role">Software Developer & Technical Lead</div>
      <p class="p-bio">
        Passionate software engineer with hands-on experience in full-stack web applications, Odoo 18 ERP customization, Python backend development, and high-performance interactive interfaces.
      </p>
      <div class="quick-stats">
        <div class="stat-box">
          <div class="stat-val">Nov 2026</div>
          <div class="stat-lbl">Relieved Stackly</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">79% (B.Sc)</div>
          <div class="stat-lbl">G.T.N. College</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">5+ Shipped</div>
          <div class="stat-lbl">Live Systems</div>
        </div>
        <div class="stat-box">
          <div class="stat-val">Open</div>
          <div class="stat-lbl">To Opportunities</div>
        </div>
      </div>
      <div style="font-size: 13px; color: #6b7280;">Gobichettipalayam, Erode, Tamil Nadu • gokulakannan.0.official@gmail.com • +91 9688657903</div>
    </div>

    <div class="timeline-col">
      <div class="card-box">
        <div class="icon-lead">💼</div>
        <div style="flex: 1;">
          <div class="c-meta">
            <div class="c-title">Software Developer & Tech Lead</div>
            <div class="c-date">Jul 2024 – Nov 2026</div>
          </div>
          <div class="c-sub">Stackly Innovations • Dindigul</div>
          <div class="c-desc">
            Led architecture and execution of multi-tenant enterprise portals, client-facing services, and internal management tools. Handled end-to-end frontend optimization, database schema modeling, and production cloud deployments.
          </div>
        </div>
      </div>

      <div class="president-card">
        <div class="pres-thumb">
          <img src="${gaitPresident}" alt="GAIT President Ceremony">
        </div>
        <div style="flex: 1;">
          <div class="c-meta">
            <div class="c-title">President — GAIT Association</div>
            <div class="c-date">2023 – 2024</div>
          </div>
          <div class="c-sub">Graduate Association of Information Technology (G.T.N. Arts College)</div>
          <div class="c-desc">
            Elected President representing the Department of Information Technology. Organized state-level symposiums, technical coding contests, and mentored junior developers across campus.
          </div>
        </div>
      </div>

      <div class="card-box">
        <div class="icon-lead">🎓</div>
        <div style="flex: 1;">
          <div class="c-meta">
            <div class="c-title">B.Sc. in Information Technology</div>
            <div class="c-date">2021 – 2024</div>
          </div>
          <div class="c-sub">G.T.N. Arts College (Autonomous), Dindigul</div>
          <div class="c-desc">
            Graduated with 79% First Class Distinction. Core focus on Object-Oriented Programming, Data Structures, Relational Database Management Systems, and Software Engineering methodologies.
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Slide 3: Featured Originals (Projects)
const slide3Html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  body {
    width: 1920px; height: 1080px; overflow: hidden;
    background: #09090e; color: #fff; position: relative;
    padding: 60px 80px;
  }
  .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; }
  .ch-tag { font-size: 15px; font-weight: 800; letter-spacing: 4px; color: #E50914; text-transform: uppercase; margin-bottom: 6px; }
  .ch-title { font-size: 44px; font-weight: 900; }

  .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
  .p-card {
    background: #111118; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px;
    overflow: hidden; display: flex; flex-direction: column; height: 400px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
  .p-card:hover { border-color: #E50914; }
  .img-box { width: 100%; height: 210px; overflow: hidden; position: relative; background: #000; }
  .img-box img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
  .badge-live {
    position: absolute; top: 12px; left: 12px; padding: 4px 10px; border-radius: 6px;
    background: rgba(229,9,20,0.85); color: #fff; font-size: 11px; font-weight: 800; letter-spacing: 1px;
  }
  .p-body { padding: 20px; display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
  .p-title { font-size: 20px; font-weight: 800; margin-bottom: 6px; color: #fff; }
  .p-desc { font-size: 14px; color: #9ca3af; line-height: 1.45; margin-bottom: 12px; }
  .tech-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .tag { font-size: 11px; padding: 3px 8px; border-radius: 4px; background: rgba(255,255,255,0.06); color: #ddd; font-weight: 600; }

  .banner-strip {
    grid-column: span 3; background: linear-gradient(90deg, rgba(229,9,20,0.15), rgba(56,189,248,0.1));
    border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 20px 30px;
    display: flex; align-items: center; justify-content: space-between; margin-top: 20px;
  }
  .strip-title { font-size: 18px; font-weight: 800; color: #fff; }
  .strip-sub { font-size: 14px; color: #9ca3af; margin-top: 4px; }
  .strip-btn { background: #E50914; color: #fff; padding: 10px 22px; border-radius: 8px; font-weight: 700; font-size: 14px; }
</style>
</head>
<body>
  <div class="header">
    <div>
      <div class="ch-tag">EPISODE 02 • ORIGINAL PRODUCTIONS</div>
      <h2 class="ch-title">Flagship Projects Shipped to Production</h2>
    </div>
    <div style="font-size: 18px; color: #9ca3af;">Real-World Code & Business Value</div>
  </div>

  <div class="projects-grid">
    <div class="p-card">
      <div class="img-box">
        <img src="${glamHero}" alt="Glamistry Makeover Live">
        <div class="badge-live">LIVE ON NETLIFY</div>
      </div>
      <div class="p-body">
        <div>
          <div class="p-title">Glamistry Makeover Studio</div>
          <div class="p-desc">High-conversion bridal artistry platform featuring animated galleries, interactive consultation booking, and 98% Lighthouse performance.</div>
        </div>
        <div class="tech-tags">
          <span class="tag">React</span><span class="tag">Vite</span><span class="tag">Tailwind CSS</span><span class="tag">Netlify</span>
        </div>
      </div>
    </div>

    <div class="p-card">
      <div class="img-box">
        <img src="${stacklyGrid}" alt="Stackly Innovations">
        <div class="badge-live">ENTERPRISE PLATFORM</div>
      </div>
      <div class="p-body">
        <div>
          <div class="p-title">Stackly Real Estate & Logistics</div>
          <div class="p-desc">Multi-tenant client property management platform with dynamic filterable listings, service booking, and automated inquiry distribution.</div>
        </div>
        <div class="tech-tags">
          <span class="tag">Web Tech</span><span class="tag">Architecture</span><span class="tag">Multi-Tenant</span>
        </div>
      </div>
    </div>

    <div class="p-card">
      <div class="img-box">
        <img src="${odooShot}" alt="Odoo 18 ERP Customization">
        <div class="badge-live">ODOO 18 ENTERPRISE</div>
      </div>
      <div class="p-body">
        <div>
          <div class="p-title">Odoo 18 ERP Custom Modules</div>
          <div class="p-desc">Custom enterprise business logic, automated invoice generation, synchronized inventory tracking, and custom CRM reporting pipelines.</div>
        </div>
        <div class="tech-tags">
          <span class="tag">Python</span><span class="tag">Odoo 18</span><span class="tag">PostgreSQL</span><span class="tag">XML/QWeb</span>
        </div>
      </div>
    </div>

    <div class="banner-strip">
      <div>
        <div class="strip-title">More Shipped Solutions: Power BI Executive Suites & GASC Blood Donor App</div>
        <div class="strip-sub">Built 15+ real-time KPI business intelligence dashboards & lifesaving emergency blood donor coordination apps.</div>
      </div>
      <div class="strip-btn">Binge Full Projects in Portfolio →</div>
    </div>
  </div>
</body>
</html>`;

// Slide 4: Tabbed Gallery & Lightbox
const slide4Html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  body {
    width: 1920px; height: 1080px; overflow: hidden;
    background: #09090e; color: #fff; position: relative;
    padding: 60px 80px;
  }
  .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; }
  .ch-tag { font-size: 15px; font-weight: 800; letter-spacing: 4px; color: #E50914; text-transform: uppercase; margin-bottom: 6px; }
  .ch-title { font-size: 44px; font-weight: 900; }

  .tabs-bar { display: flex; gap: 14px; margin-bottom: 30px; }
  .tab-pill {
    padding: 10px 22px; border-radius: 24px; font-size: 15px; font-weight: 700;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #aaa;
  }
  .tab-active { background: #E50914; color: #fff; border-color: #E50914; box-shadow: 0 0 20px rgba(229,9,20,0.5); }

  .gallery-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; height: 740px; }
  
  .masonry-preview {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
  }
  .gal-card {
    background: #111118; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px;
    overflow: hidden; position: relative; height: 350px;
  }
  .gal-card img { width: 100%; height: 100%; object-fit: cover; }
  .gal-caption {
    position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    font-size: 16px; font-weight: 700; color: #fff;
  }

  .lightbox-feature {
    background: #111118; border: 1px solid rgba(229,9,20,0.3); border-radius: 16px;
    padding: 28px; display: flex; flex-direction: column; justify-content: space-between;
    box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  }
  .lb-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
  .lb-title { font-size: 22px; font-weight: 800; color: #fff; }
  .lb-badge { background: rgba(56,189,248,0.15); color: #38bdf8; font-size: 12px; font-weight: 800; padding: 4px 10px; border-radius: 6px; }
  .lb-img { width: 100%; height: 380px; border-radius: 10px; overflow: hidden; margin-bottom: 18px; border: 1px solid rgba(255,255,255,0.1); }
  .lb-img img { width: 100%; height: 100%; object-fit: cover; }
  .lb-text { font-size: 15px; color: #9ca3af; line-height: 1.5; margin-bottom: 20px; }
  .feature-points { display: flex; flex-direction: column; gap: 8px; }
  .f-point { font-size: 13px; color: #d1d5db; display: flex; align-items: center; gap: 8px; }
  .f-point span { color: #46d369; font-weight: 900; }
</style>
</head>
<body>
  <div class="header">
    <div>
      <div class="ch-tag">EPISODE 03 • TABBED PRODUCTION GALLERY</div>
      <h2 class="ch-title">Curated Proof of Work with Instant Lightbox</h2>
    </div>
    <div style="font-size: 18px; color: #9ca3af;">Filtered by Domain & Technology</div>
  </div>

  <div class="tabs-bar">
    <div class="tab-pill tab-active">● All Systems (24)</div>
    <div class="tab-pill">Web Platforms (Glamistry & Stackly)</div>
    <div class="tab-pill">Odoo 18 Enterprise ERP</div>
    <div class="tab-pill">Power BI Dashboards</div>
    <div class="tab-pill">Mobile & Community (GASC Blood)</div>
  </div>

  <div class="gallery-layout">
    <div class="masonry-preview">
      <div class="gal-card">
        <img src="${glamServices}" alt="Glamistry Services">
        <div class="gal-caption">Glamistry Makeover — Interactive Service Catalog</div>
      </div>
      <div class="gal-card">
        <img src="${odooShot}" alt="Odoo ERP Interface">
        <div class="gal-caption">Odoo 18 — Enterprise Module Workflows</div>
      </div>
      <div class="gal-card">
        <img src="${pbiShot}" alt="Power BI Analytics">
        <div class="gal-caption">Power BI — Real-Time KPI Executive Dashboards</div>
      </div>
      <div class="gal-card">
        <img src="${bloodShot}" alt="Blood Donor App">
        <div class="gal-caption">GASC Blood Donor — Community Emergency Network</div>
      </div>
    </div>

    <div class="lightbox-feature">
      <div>
        <div class="lb-header">
          <div class="lb-title">Full-Screen Lightbox Modal</div>
          <div class="lb-badge">INTERACTIVE UI</div>
        </div>
        <div class="lb-img">
          <img src="${pbiShot}" alt="Lightbox Modal Preview">
        </div>
        <p class="lb-text">
          Visitors can zoom into full-resolution dashboard exports, inspect database workflows, and review actual UI screenshots with complete metadata tags.
        </p>
      </div>

      <div class="feature-points">
        <div class="f-point"><span>✓</span> Instant keyboard navigation (ESC, Left, Right)</div>
        <div class="f-point"><span>✓</span> Zero distortion responsive modal</div>
        <div class="f-point"><span>✓</span> Deep-linkable asset previews</div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Slide 5: Dual-Format Resume System
const slide5Html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  body {
    width: 1920px; height: 1080px; overflow: hidden;
    background: #09090e; color: #fff; position: relative;
    padding: 60px 80px;
  }
  .header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 30px; }
  .ch-tag { font-size: 15px; font-weight: 800; letter-spacing: 4px; color: #E50914; text-transform: uppercase; margin-bottom: 6px; }
  .ch-title { font-size: 44px; font-weight: 900; }

  .switcher-bar {
    display: flex; align-items: center; justify-content: center; gap: 20px;
    background: #111118; border: 1px solid rgba(255,255,255,0.1); border-radius: 40px;
    padding: 8px 16px; width: fit-content; margin: 0 auto 36px auto;
  }
  .switch-opt { padding: 10px 24px; border-radius: 30px; font-size: 15px; font-weight: 700; color: #888; }
  .switch-active { background: #E50914; color: #fff; box-shadow: 0 0 15px rgba(229,9,20,0.5); }

  .resume-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; height: 720px; }
  
  .res-col {
    background: #111118; border: 1px solid rgba(255,255,255,0.08); border-radius: 20px;
    padding: 32px; display: flex; flex-direction: column; justify-content: space-between;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5); position: relative;
  }
  .res-col.featured { border-color: rgba(229,9,20,0.4); background: linear-gradient(180deg, #161217 0%, #111118 100%); }
  .badge-format {
    display: inline-block; padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 800;
    text-transform: uppercase; margin-bottom: 12px;
  }
  .b-epdf { background: rgba(229,9,20,0.15); color: #ff525a; border: 1px solid rgba(229,9,20,0.3); }
  .b-ats { background: rgba(56,189,248,0.15); color: #38bdf8; border: 1px solid rgba(56,189,248,0.3); }
  
  .r-head { font-size: 26px; font-weight: 800; margin-bottom: 8px; color: #fff; }
  .r-desc { font-size: 15px; color: #9ca3af; line-height: 1.5; margin-bottom: 24px; }

  .doc-mockup {
    flex: 1; background: #fff; border-radius: 8px; margin-bottom: 24px;
    padding: 24px 30px; color: #111; overflow: hidden; position: relative;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  }
  .doc-ats { font-family: 'Times New Roman', serif; }
  .doc-epdf { font-family: -apple-system, sans-serif; background: #fafafa; }
  .mock-title { font-size: 18px; font-weight: bold; margin-bottom: 4px; text-align: center; }
  .mock-sub { font-size: 10px; color: #555; text-align: center; margin-bottom: 12px; border-bottom: 1px solid #ddd; padding-bottom: 8px; }
  .mock-sec { font-size: 12px; font-weight: bold; color: #900; text-transform: uppercase; margin: 10px 0 4px 0; border-bottom: 1px solid #ccc; }
  .mock-item { font-size: 10px; margin-bottom: 6px; line-height: 1.35; color: #222; }

  .action-row { display: flex; gap: 14px; }
  .act-btn {
    flex: 1; padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 700;
    text-align: center; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .act-primary { background: #E50914; color: #fff; }
  .act-sec { background: rgba(255,255,255,0.06); color: #fff; border: 1px solid rgba(255,255,255,0.12); }
</style>
</head>
<body>
  <div class="header">
    <div>
      <div class="ch-tag">EPISODE 04 • DUAL-FORMAT RESUME ENGINE</div>
      <h2 class="ch-title">Engineered for Both Screens & ATS Parsers</h2>
    </div>
    <div style="font-size: 18px; color: #9ca3af;">Interactive Previewer & Instant Download</div>
  </div>

  <div class="switcher-bar">
    <div class="switch-opt switch-active">Option 1: Digital e-PDF (The Full Story)</div>
    <div class="switch-opt">Option 2: Normal Print-Ready ATS Resume</div>
  </div>

  <div class="resume-grid">
    <div class="res-col featured">
      <div>
        <div class="badge-format b-epdf">Interactive Digital Format</div>
        <div class="r-head">The Full Story (e-PDF)</div>
        <div class="r-desc">
          Two-column visual layout designed for modern screen reading by recruiters and hiring managers. Features clickable project URLs, skill level chips, and high-impact visual hierarchy.
        </div>
      </div>

      <div class="doc-mockup doc-epdf">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #E50914; padding-bottom: 8px; margin-bottom: 10px;">
          <div>
            <div style="font-size: 16px; font-weight: 800; color: #111;">GOKULA KANNAN M</div>
            <div style="font-size: 10px; color: #E50914; font-weight: bold;">SOFTWARE DEVELOPER • TECH LEAD</div>
          </div>
          <div style="font-size: 9px; color: #666; text-align: right;">gokulakannan.0.official@gmail.com<br>Gobichettipalayam, Erode • +91 9688657903</div>
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 14px;">
          <div>
            <div class="mock-sec">Experience / Production</div>
            <div class="mock-item"><strong>Software Developer & Tech Lead</strong> — Stackly Innovations (Jul 2024 – Nov 2026)<br>Delivered scalable web portals & client logistics.</div>
            <div class="mock-sec">Core Flagships</div>
            <div class="mock-item"><strong>Glamistry Makeover:</strong> Live bridal artistry studio on Netlify.</div>
            <div class="mock-item"><strong>Odoo 18 ERP:</strong> Inventory, invoices, CRM custom workflows.</div>
          </div>
          <div style="background: #f0f0f4; padding: 8px; border-radius: 4px;">
            <div style="font-size: 10px; font-weight: bold; color: #333; margin-bottom: 4px;">KEY SKILLS</div>
            <div style="font-size: 9px; color: #555; line-height: 1.5;">Python • Odoo 18<br>React • TypeScript<br>Tailwind • Power BI<br>PostgreSQL • Git</div>
          </div>
        </div>
      </div>

      <div class="action-row">
        <div class="act-btn act-primary">⤓ Download Digital e-PDF</div>
        <div class="act-btn act-sec">👁 Live Preview</div>
      </div>
    </div>

    <div class="res-col">
      <div>
        <div class="badge-format b-ats">100% ATS & Print Compatible</div>
        <div class="r-head">Normal ATS Resume</div>
        <div class="r-desc">
          Single-column universal layout with zero two-column parsing confusion. Optimized for Workday, Taleo, Greenhouse parsers, and high-speed office printers.
        </div>
      </div>

      <div class="doc-mockup doc-ats">
        <div class="mock-title">GOKULA KANNAN M</div>
        <div class="mock-sub">Gobichettipalayam, Erode • gokulakannan.0.official@gmail.com • +91 9688657903</div>
        <div style="font-size: 11px; font-weight: bold; border-bottom: 1px solid #000; margin: 8px 0 4px 0;">PROFESSIONAL SUMMARY</div>
        <div class="mock-item">Software Developer with deep expertise in Python, Odoo 18 ERP, React, and Full-Stack web engineering.</div>
        <div style="font-size: 11px; font-weight: bold; border-bottom: 1px solid #000; margin: 8px 0 4px 0;">EXPERIENCE</div>
        <div class="mock-item"><strong>Junior Developer & Tech Lead</strong> — Stackly Innovations (Jul 2024 – Nov 2026)<br>Developed scalable client web applications, database pipelines, and production services.</div>
        <div style="font-size: 11px; font-weight: bold; border-bottom: 1px solid #000; margin: 8px 0 4px 0;">EDUCATION</div>
        <div class="mock-item"><strong>B.Sc. Information Technology (79%)</strong> — G.T.N. Arts College (2021 – 2024)</div>
      </div>

      <div class="action-row">
        <div class="act-btn act-primary">⤓ Download Normal ATS</div>
        <div class="act-btn act-sec">🖨 Print Out</div>
      </div>
    </div>
  </div>
</body>
</html>`;

// Slide 6: Contact & Live Stream Call to Action
const slide6Html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
  body {
    width: 1920px; height: 1080px; overflow: hidden;
    background: radial-gradient(circle at 50% 40%, rgba(229,9,20,0.18) 0%, #07070a 70%);
    color: #fff; position: relative; padding: 70px 80px;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .header { text-align: center; }
  .ch-tag { font-size: 16px; font-weight: 800; letter-spacing: 5px; color: #E50914; text-transform: uppercase; margin-bottom: 10px; }
  .ch-title { font-size: 58px; font-weight: 900; letter-spacing: -1px; }

  .center-box {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; max-width: 1600px; margin: 0 auto; width: 100%;
  }
  .c-card {
    background: #111118; border: 1px solid rgba(255,255,255,0.08); border-radius: 20px;
    padding: 30px 20px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;
    box-shadow: 0 15px 40px rgba(0,0,0,0.5);
  }
  .c-card:hover { border-color: #E50914; }
  .c-icon {
    width: 64px; height: 64px; border-radius: 50%; background: rgba(229,9,20,0.15);
    border: 1px solid rgba(229,9,20,0.4); display: flex; align-items: center; justify-content: center;
    font-size: 28px; color: #ff525a; margin-bottom: 16px;
  }
  .c-name { font-size: 19px; font-weight: 800; margin-bottom: 8px; color: #fff; }
  .c-val { font-size: 14px; color: #9ca3af; font-family: monospace; word-break: break-all; }

  .stream-cta {
    background: #161217; border: 1px solid rgba(229,9,20,0.4); border-radius: 20px;
    padding: 30px 50px; display: flex; align-items: center; justify-content: space-between;
    box-shadow: 0 15px 50px rgba(229,9,20,0.25);
  }
  .cta-title { font-size: 28px; font-weight: 800; }
  .cta-sub { font-size: 16px; color: #aaa; margin-top: 6px; }
  .btn-live {
    background: #E50914; color: #fff; font-size: 20px; font-weight: 800;
    padding: 16px 40px; border-radius: 10px; display: flex; align-items: center; gap: 12px;
    box-shadow: 0 8px 30px rgba(229,9,20,0.5); text-decoration: none;
  }
</style>
</head>
<body>
  <div class="header">
    <div class="ch-tag">NOW STREAMING • PRODUCTION RELEASE</div>
    <h2 class="ch-title">Connect with Gokula Kannan</h2>
  </div>

  <div class="center-box">
    <div class="c-card">
      <div class="c-icon">📩</div>
      <div class="c-name">Direct Inbox (Formspree)</div>
      <div class="c-val">gokulakannan.0.official@gmail.com</div>
    </div>

    <div class="c-card">
      <div class="c-icon">📞</div>
      <div class="c-name">Direct Phone / Call</div>
      <div class="c-val">+91 9688657903</div>
    </div>

    <div class="c-card">
      <div class="c-icon">💼</div>
      <div class="c-name">LinkedIn Profile</div>
      <div class="c-val">in/gokula-kannan-m-/</div>
    </div>

    <div class="c-card">
      <div class="c-icon">💻</div>
      <div class="c-name">GitHub Projects</div>
      <div class="c-val">github.com/Kannan14385</div>
    </div>
  </div>

  <div class="stream-cta">
    <div>
      <div class="cta-title">Ready to Stream the Complete Experience?</div>
      <div class="cta-sub">Visit the live deployment on Render with interactive profile selectors & real-time controls.</div>
    </div>
    <div class="btn-live">
      ▶ Visit Live Portfolio
    </div>
  </div>
</body>
</html>`;

const slides = [
  { name: 'slide-1-hero-billboard', html: slide1Html },
  { name: 'slide-2-the-pilot-about', html: slide2Html },
  { name: 'slide-3-featured-originals', html: slide3Html },
  { name: 'slide-4-production-gallery', html: slide4Html },
  { name: 'slide-5-dual-resume-system', html: slide5Html },
  { name: 'slide-6-contact-stream-now', html: slide6Html }
];

console.log('Writing slide HTML files...');
const htmlDir = path.join(scratchDir, 'scripts/linkedin-slides');
fs.mkdirSync(htmlDir, { recursive: true });

for (let i = 0; i < slides.length; i++) {
  const s = slides[i];
  const filePath = path.join(htmlDir, `${s.name}.html`);
  fs.writeFileSync(filePath, s.html, 'utf8');
}
console.log('All 6 slide HTML files written.');
