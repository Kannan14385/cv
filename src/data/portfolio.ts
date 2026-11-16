/**
 * Central portfolio data for Gokula Kannan M.
 * Single source of truth driving every component on the streaming portfolio platform.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Gokula Kannan M',
  displayName: 'Gokula Kannan',
  firstName: 'GOKULA KANNAN',
  seriesTag: 'THE SERIES',
  originalLabel: 'A GOKULA KANNAN ORIGINAL',
  role: 'Full Stack & WordPress Developer | Python & Odoo | Data Analyst',
  tagline: ['WordPress & Web Developer', 'Python & Odoo ERP', 'Data Analytics', 'MCA Graduate'],
  intro:
    'Building reliable WordPress experiences, high-performance web applications, and insightful business intelligence dashboards with a proven foundation in full-stack engineering, Python/Odoo ERP, and data analytics.',
  location: 'Gobichettipalayam, Erode, Tamil Nadu',
  email: 'gokulakannan.0.official@gmail.com',
  phone: '+91 9688657903',
  address: '283, Sakthi Nagar, Gobichettipalayam, Erode – 638453',
  formspreeEndpoint: 'https://formspree.io/f/mpwykqbg',
  links: {
    linkedin: 'https://www.linkedin.com/in/gokula-kannan-m-/',
    github: 'https://github.com/Kannan14385',
    leetcode: 'https://leetcode.com/u/Gokula_Kannan_M/',
    hackerrank: 'https://www.hackerrank.com/profile/gokulakannan1431',
    portfolio: 'https://gokula-kannan-m-portfolio.onrender.com/',
  },
  resumePdf: '/assets/Gokula_Kannan_Resume_CV.pdf',
  portrait: {
    src: '/assets/gokul-720.webp',
    srcSet: '/assets/gokul-420.webp 420w, /assets/gokul-720.webp 720w, /assets/gokul-1100.webp 1100w',
    alt: 'Portrait of Gokula Kannan M',
  },
  aboutPortrait: '/assets/about-gokul.webp',
  gaitPresidentImage: '/assets/gait-president.jpg',
  interests: ['WordPress & Headless CMS', 'Full-Stack Web Engineering', 'Enterprise ERP (Odoo 18)', 'Data Analytics & Power BI', 'Competitive Boxing & Fitness'],
};

export const education = [
  {
    school: 'Gobi Arts & Science College, Bharathiar University',
    place: 'Gobichettipalayam, Tamil Nadu',
    degree: 'Master of Computer Applications (MCA)',
    period: '2024 – 2026',
    score: 'MCA Graduate',
  },
  {
    school: 'Gobi Arts & Science College, Bharathiar University',
    place: 'Gobichettipalayam, Tamil Nadu',
    degree: 'Bachelor of Science in Computer Science (B.Sc CS)',
    period: '2021 – 2024',
    score: 'B.Sc CS Graduate',
  },
];

export const experience = [
  {
    company: 'Zooye Info Technologies',
    role: 'WordPress Developer',
    place: 'Chennai / Remote',
    period: 'Apr 2026 – Nov 2026',
    points: [
      'Design, develop, and maintain dynamic WordPress websites, ensuring responsive cross-browser layouts, reliable functionality, and high-quality user experiences.',
      'Provide technical guidance, debugging support, and mentorship to a team of 3 colleagues to streamline project execution and standardize code quality.',
      'Optimize website performance, page speed, and responsiveness to continuously enhance the company’s digital platforms and Core Web Vitals.',
      'Build and deploy custom web solutions aligned with business growth objectives.',
    ],
  },
  {
    company: 'Coactions Info Tech',
    role: 'Full Stack Python Developer – Intern',
    place: 'Coimbatore, Tamil Nadu',
    period: 'Nov 2025 – Apr 2026',
    points: [
      'Developed ERP functionality with Python, Odoo 18, and PostgreSQL for youth engagement and fund management workflows serving 50+ users.',
      'Built custom Odoo backend modules, designed normalized relational schemas, and improved project tracking efficiency by 30%.',
      'Resolved 20+ critical UAT production bugs and implemented real-time backend data synchronization with external web portals.',
    ],
  },
  {
    company: 'Coactions Info Tech',
    role: 'Full Stack Python Developer & Analytics – Intern',
    place: 'Coimbatore, Tamil Nadu',
    period: 'May 2025 – Jun 2025',
    points: [
      'Engineered an NGO Fund Tracking system with automated data-driven reporting and business intelligence workflows.',
      'Designed 5+ interactive Power BI dashboards that automated weekly reporting and saved about 10 hours of manual data collation per week.',
      'Led a 4-person team through requirements, delivery, and stakeholder demos; supported campaigns that increased donor engagement by 15%.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  liveLinks?: { label: string; url: string }[];
  screenshots?: string[];
  palette: Palette;
  motif: string;
};

export const projects: Project[] = [
  {
    id: 'glamistry-makeover',
    title: 'Glamistry Makeover',
    year: '2026',
    genre: 'Luxury E-Commerce • Bridal Beauty • High-Speed Web',
    logline: 'A premier bridal makeover & hair styling digital platform featuring online appointment booking, luxury portfolios, and sub-second edge CDN deployment.',
    stack: ['WordPress / Elementor', 'Netlify Edge CDN', 'Tailwind CSS', 'Appointment Engine', 'SEO & Performance'],
    build: [
      'Architected and deployed the full luxury web platform for Glamistry Makeover, Chennai’s premier bridal makeup and hair styling studio with 6+ years of artistic heritage.',
      'Designed seamless appointment booking funnels for luxury bridal packages, muhurtham styling, reception glam, nail art, and saree pre-pleating workflows.',
      'Optimized media delivery and converted dynamic WordPress architectures into high-speed, CDN-edge deployed static pages on Netlify with sub-second page loads and 100% mobile responsiveness.',
    ],
    features: [
      'Online appointment booking and bridal consultation flow',
      'Curated bridal gallery: Reception Glam, Muhurtham, Saree Pre-Pleating & Nail Art',
      'High-speed global deployment on Netlify edge CDN',
      'Luxury dark-gold responsive design optimized for high-converting inquiries',
      'Client testimonial showcase and service tier details',
    ],
    metrics: [
      { value: '< 1s', label: 'page load speed' },
      { value: '6+ Yrs', label: 'studio artist legacy' },
      { value: '5+', label: 'luxury bridal service workflows' },
      { value: '100%', label: 'mobile responsive' },
    ],
    live: 'https://glamistrymakeover.netlify.app',
    screenshots: [
      '/assets/glamistry/glamistry-hero.png',
      '/assets/glamistry/glamistry-services.png',
      '/assets/glamistry/glamistry-portfolio.png',
      '/assets/glamistry/glamistry-about.png',
      '/assets/glamistry/glamistry-contact.png',
    ],
    palette: { from: '#231206', via: '#734114', to: '#0a0806', accent: '#f59e0b' },
    motif: 'glam',
  },
  {
    id: 'stackly-real-estate',
    title: 'Stackly Real Estate Portal',
    year: '2026',
    genre: 'Real Estate SaaS • Multi-Domain Platform • WordPress',
    logline: 'Three synchronized real-estate website experiences showcasing sales and rental listings, property discovery, and appointment journeys.',
    stack: ['WordPress', 'Custom Post Types', 'MySQL', 'PHP', 'REST API', 'CSS Grid'],
    build: [
      'Engineered three distinct enterprise real-estate portal experiences for Zooye Info Technologies across multiple cloud domains.',
      'Designed dynamic property search filters, interactive property grids, and appointment booking flows for prospective buyers and tenants.',
      'Optimized site speed and responsive multi-screen layouts, leading technical mentorship for a team of 3 developers.',
    ],
    features: [
      '3 distinct live deployments (Services, Property Details & Booking, Featured Grid)',
      'Multi-attribute property filtering (price, location, rooms)',
      'Direct appointment booking and inquiry funnels',
      'High-resolution architectural photography grids and floorplans',
    ],
    metrics: [
      { value: '3', label: 'portal architectures' },
      { value: '100+', label: 'properties showcased' },
      { value: '40%', label: 'faster property discovery' },
      { value: '3 Colleagues', label: 'mentored as team lead' },
    ],
    screenshots: [
      '/assets/stackly/zooye-services-listings.png',
      '/assets/stackly/zooye7-property-details.png',
      '/assets/stackly/zooye9-property-grid.png',
    ],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#38bdf8' },
    motif: 'realestate',
  },
  {
    id: 'erp-youth-fund',
    title: 'ERP Youth & Fund Management',
    year: '2025–2026',
    genre: 'Enterprise ERP • Python • Odoo & PostgreSQL',
    logline: 'Custom enterprise Odoo ERP module streamlining youth participation tracking and transparent fund management for organizations.',
    stack: ['Python', 'Odoo ERP', 'PostgreSQL', 'XML', 'Linux'],
    build: [
      'Developed a custom Odoo admin backend module for 50+ concurrent users, automating fund allocations, disbursements, and participant engagement workflows.',
      'Architected normalized PostgreSQL relational schemas, resolved 20+ critical UAT production bugs, and boosted project tracking efficiency by 30%.',
    ],
    features: [
      'Role-based multi-tier approval workflows',
      'Real-time fund ledger and expenditure analytics',
      'Participant lifecycle and attendance management',
      'Automated report generation with audit compliance',
    ],
    metrics: [
      { value: '50+', label: 'concurrent active users' },
      { value: '30%', label: 'increase in tracking efficiency' },
      { value: '20+', label: 'critical UAT bugs resolved' },
      { value: '100%', label: 'audit compliance' },
    ],
    screenshots: [
      '/assets/odoo/Picture1.png',
      '/assets/odoo/Picture2.png',
      '/assets/odoo/Picture3.png',
      '/assets/odoo/Picture4.png',
    ],
    palette: { from: '#1a0d22', via: '#581c87', to: '#08050c', accent: '#c084fc' },
    motif: 'erp',
  },
  {
    id: 'ngo-fund-pbi',
    title: 'NGO Fund Tracking & Power BI',
    year: '2025',
    genre: 'Business Intelligence • Data Analytics • Power BI',
    logline: 'Executive business intelligence reporting suite and real-time interactive Power BI dashboards automating nonprofit donor reporting.',
    stack: ['Power BI', 'DAX', 'SQL', 'Data Modeling', 'Excel Advanced'],
    build: [
      'Designed and deployed 5+ interactive Power BI dashboards automating weekly financial and donation reporting, saving 10+ hours of manual work weekly.',
      'Led a 4-person analytics team through stakeholder demos and requirement sessions, driving campaigns that increased donor engagement by 15%.',
    ],
    features: [
      'Automated weekly donor contribution and allocation funnels',
      'Drill-down DAX measures for financial trends and forecasts',
      'Interactive stakeholder executive summary views',
    ],
    metrics: [
      { value: '10 hrs/wk', label: 'saved in manual reporting' },
      { value: '15%', label: 'donor engagement increase' },
      { value: '5+', label: 'production dashboards' },
      { value: '4-Person', label: 'analytics team lead' },
    ],
    screenshots: [
      '/assets/pbi/Screenshot 2026-04-06 142735.png',
      '/assets/pbi/Screenshot 2026-04-06 143035.png',
      '/assets/pbi/Screenshot 2026-04-06 143203.png',
    ],
    palette: { from: '#1c1503', via: '#785b09', to: '#090704', accent: '#facc15' },
    motif: 'analytics',
  },
  {
    id: 'gasc-blood-donor',
    title: 'GASC Blood Donor Bridge',
    year: '2025–2026',
    genre: 'Healthcare Tech • Web Security • PHP/MySQL',
    logline: 'Campus-wide emergency blood donation platform connecting patients with verified donors in real-time with encrypted authentication.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Bcrypt Security'],
    build: [
      'Built an emergency blood donor matching platform for the collegiate community with instant donor geolocation matching and cross-blood-type compatibility algorithms.',
      'Implemented hashed security credentials, role-based access control, and optimized cross-blood-type SQL compatibility queries with sub-200ms matching.',
    ],
    features: [
      'Real-time emergency donor search by blood group and location',
      'Secure donor privacy protection and verified credentials',
      'Optimized SQL joins for sub-second emergency query matching',
    ],
    metrics: [
      { value: '8', label: 'blood types cross-matched' },
      { value: '100%', label: 'credential encryption (Bcrypt)' },
      { value: '< 200ms', label: 'donor match query time' },
    ],
    screenshots: [
      '/assets/blood/Picture1.png',
      '/assets/blood/Picture2.png',
      '/assets/blood/Picture3.png',
    ],
    palette: { from: '#2a060d', via: '#881326', to: '#0c0507', accent: '#f43f5e' },
    motif: 'blood',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  image?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'gait-president',
    title: 'GAIT Committee President',
    org: 'Collegiate IT Association (2024–2026)',
    detail: 'Elected President of GAIT; spearheaded and organized Inter & Intra College IT symposiums, technical paper presentations, and coding competitions.',
    laurel: 'Collegiate President',
    image: '/assets/gait-president.jpg',
    link: 'https://www.linkedin.com/posts/gokula-kannan-m-_qutrix2k25-gait-leadership-ugcPost-7376264095420882945-7tUa/',
  },
  {
    id: 'boxing-medalist',
    title: 'Boxing Tournament Medalist',
    org: 'Inter-Collegiate & All India Championship',
    detail: 'Medalist in Inter-Collegiate Boxing Tournaments (2023, 2024); represented at the All India Boxing Championship in Punjab and coached student boxers (2021–2025).',
    laurel: 'Tournament Medalist',
  },
  {
    id: 'team-mentorship',
    title: 'Technical Team Lead & Mentor',
    org: 'Zooye & Coactions Info Tech',
    detail: 'Mentored team of 3 developers at Zooye Info Technologies; led 4-person data analytics team at Coactions delivering client-ready BI solutions.',
    laurel: 'Team Leadership',
  },
  {
    id: 'hackerrank-certs',
    title: 'HackerRank Certified Engineer',
    org: 'HackerRank Verified',
    detail: 'Certified in Software Engineer Intern, Frontend Developer (React), Problem Solving (Basic & Advanced), SQL (Intermediate & Advanced), and C#.',
    laurel: 'Verified Skills',
    link: 'https://www.hackerrank.com/profile/gokulakannan1431',
  },
  {
    id: 'nss-leadership',
    title: 'Community Service Volunteer',
    org: 'National Service Scheme (NSS)',
    detail: 'Dedicated 4 years (2021–2025) to rural empowerment, community health drives, social service, and youth skill building initiatives.',
    laurel: 'NSS Volunteer',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'HackerRank', name: 'Software Engineer Intern Certification', link: 'https://www.hackerrank.com/profile/gokulakannan1431' },
  { issuer: 'HackerRank', name: 'Frontend Developer (React) Certification', link: 'https://www.hackerrank.com/profile/gokulakannan1431' },
  { issuer: 'HackerRank', name: 'Problem Solving Advanced Certification', link: 'https://www.hackerrank.com/profile/gokulakannan1431' },
  { issuer: 'HackerRank', name: 'SQL Advanced Certification', link: 'https://www.hackerrank.com/profile/gokulakannan1431' },
  { issuer: 'HackerRank', name: 'Problem Solving Basic Certificate', link: 'https://www.hackerrank.com/profile/gokulakannan1431' },
  { issuer: 'HackerRank', name: 'SQL Intermediate Certification', link: 'https://www.hackerrank.com/profile/gokulakannan1431' },
  { issuer: 'HackerRank', name: 'C# Certification', link: 'https://www.hackerrank.com/profile/gokulakannan1431' },
  { issuer: 'Tata', name: 'Data Visualisation: Empowering Business with Effective Insights', link: '#' },
  { issuer: 'HCL GUVI', name: 'Certificate Program in Applied AI', link: '#' },
  { issuer: 'AWS', name: 'Solution Architecture Job Simulation', link: '#' },
  { issuer: 'Accenture', name: 'Software Engineering Job Simulation', link: '#' },
  { issuer: 'BCG X', name: 'Generative AI Job Simulation', link: '#' },
  { issuer: 'British Airways', name: 'Data Science Job Simulation', link: '#' },
  { issuer: 'Infosys', name: 'Basics of Python Certification', link: '#' },
  { issuer: 'IBM', name: 'Prompt Engineering Certification', link: '#' },
  { issuer: 'IBM Skills Build', name: 'Edunet Skills Build Orientation', link: '#' },
  { issuer: 'NoviTech', name: 'MasterClass in Data Analytics', link: '#' },
  { issuer: 'Pantech Pro Ed', name: 'Data Analytics Masterclass', link: '#' },
  { issuer: 'HP Foundations', name: 'Data Science, Cyber Security & Leadership', link: '#' },
  { issuer: 'Skill Nation', name: 'AI Dashboard using Microsoft Power BI', link: '#' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'web',
    title: 'Web & CMS',
    subtitle: 'WordPress, PHP, and modern web architectures',
    skills: [
      { name: 'WordPress', mono: 'Wp', note: 'Primary' },
      { name: 'PHP', mono: 'Ph' },
      { name: 'Elementor', mono: 'El' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
      { name: 'Responsive Design', mono: 'Rd' },
      { name: 'Site Speed & Core Web Vitals', mono: 'Cw' },
    ],
  },
  {
    id: 'backend_erp',
    title: 'Backend & ERP',
    subtitle: 'Python, Odoo modules, and relational databases',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Core' },
      { name: 'Odoo ERP', mono: 'Od', note: 'Enterprise' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MySQL', mono: 'My' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data & BI',
    subtitle: 'Power BI, data modeling, and reporting',
    skills: [
      { name: 'Power BI', mono: 'Bi', note: 'Dashboards' },
      { name: 'DAX', mono: 'Dx' },
      { name: 'Excel Advanced', mono: 'Xl' },
      { name: 'Data Visualization', mono: 'Dv' },
      { name: 'R', mono: 'R' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Version control, environments, and productivity',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Visual Studio', mono: 'Vs' },
      { name: 'Netlify', mono: 'Nl' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Canva', mono: 'Ca' },
      { name: 'LLMs & AI', mono: 'Ai' },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Soft Skills',
    subtitle: 'Collegiate governance, teamwork, and coaching',
    skills: [
      { name: 'Team Mentorship', mono: 'Tm', note: '3+ Mentees' },
      { name: 'Leadership', mono: 'Ld', note: 'GAIT President' },
      { name: 'Critical Thinking', mono: 'Ct' },
      { name: 'Communication', mono: 'Cm' },
      { name: 'Adaptability', mono: 'Ad' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  WordPress: ['Zooye Info Technologies (Developer)', 'Stackly Real Estate Portal', 'Glamistry Makeover'],
  PHP: ['GASC Blood Donor Bridge', 'Stackly Real Estate Portal'],
  Python: ['Coactions Info Tech (Full Stack Intern)', 'ERP Youth & Fund Management', 'Infosys Certified'],
  'Odoo ERP': ['ERP Youth Engagement & Fund Management (50+ Users)'],
  PostgreSQL: ['ERP Youth Engagement & Fund Management', 'Coactions Info Tech'],
  'Power BI': ['NGO Fund Tracking & Dashboards', 'Skill Nation AI Dashboard', 'Tata Data Visualisation'],
  React: ['HackerRank Frontend Developer (React) Certified'],
  SQL: ['HackerRank SQL Advanced Certified', 'GASC Blood Donor Bridge'],
  'Responsive Design': ['Glamistry Makeover', 'Stackly Real Estate Portal'],
  'Team Mentorship': ['Mentored 3 developers at Zooye', 'Led 4-person analytics team at Coactions'],
  Leadership: ['GAIT Committee President (2024–2026)', 'Student Coach – Boxing Team'],
  Netlify: ['Glamistry Makeover (Production Edge Deployment)'],
};

export type GalleryCategory = 'all' | 'glamistry' | 'stackly' | 'odoo' | 'pbi' | 'blood' | 'leadership';

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  subtitle: string;
  src: string;
  badge?: string;
  link?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'glam-1',
    category: 'glamistry',
    title: 'Glamistry Luxury Bridal Makeover Hero',
    subtitle: 'Chennai Bridal Makeup Artist Web Platform',
    src: '/assets/glamistry/glamistry-hero.png',
    badge: 'Live Website',
    link: 'https://glamistrymakeover.netlify.app/',
  },
  {
    id: 'glam-2',
    category: 'glamistry',
    title: 'Bridal Services & Saree Pre-Pleating',
    subtitle: 'Muhurtham Styling, Hair Art & Package Discovery',
    src: '/assets/glamistry/glamistry-services.png',
    badge: 'Services Suite',
    link: 'https://glamistrymakeover.netlify.app/services/',
  },
  {
    id: 'glam-3',
    category: 'glamistry',
    title: 'Bridal Portfolio & Nail Art Showcase',
    subtitle: 'Client Gallery, Extensions & Saree Folding',
    src: '/assets/glamistry/glamistry-portfolio.png',
    badge: 'Portfolio Showcase',
    link: 'https://glamistrymakeover.netlify.app/project/',
  },
  {
    id: 'glam-4',
    category: 'glamistry',
    title: 'About Gayathri & Glamistry Brand Story',
    subtitle: 'Artist Biography, Experience & Philosophy',
    src: '/assets/glamistry/glamistry-about.png',
    badge: 'About Page',
    link: 'https://glamistrymakeover.netlify.app/about/',
  },
  {
    id: 'glam-5',
    category: 'glamistry',
    title: 'Interactive Appointment Booking & Funnel',
    subtitle: 'Direct Scheduling, Consultation & Contact',
    src: '/assets/glamistry/glamistry-contact.png',
    badge: 'Booking Funnel',
    link: 'https://glamistrymakeover.netlify.app/contact/',
  },
  {
    id: 'gait-lead',
    category: 'leadership',
    title: 'GAIT Committee President',
    subtitle: 'Qutrix 2k25 Inter-Collegiate Symposium',
    src: '/assets/gait-president.jpg',
    badge: 'President',
    link: 'https://www.linkedin.com/posts/gokula-kannan-m-_qutrix2k25-gait-leadership-ugcPost-7376264095420882945-7tUa/',
  },
  {
    id: 'stack-1',
    category: 'stackly',
    title: 'Stackly Services & Property Listings',
    subtitle: 'Real Estate Discovery & Filtering Portal',
    src: '/assets/stackly/zooye-services-listings.png',
    badge: 'Services Portal',
  },
  {
    id: 'stack-2',
    category: 'stackly',
    title: 'Property Details & Appointment Booking',
    subtitle: 'Visit Scheduling & Specifications Funnel',
    src: '/assets/stackly/zooye7-property-details.png',
    badge: 'Property Details',
  },
  {
    id: 'stack-3',
    category: 'stackly',
    title: 'Featured Property Grid',
    subtitle: 'Architectural Photography & Dynamic Masonry',
    src: '/assets/stackly/zooye9-property-grid.png',
    badge: 'Masonry Grid',
  },
  {
    id: 'odoo-1',
    category: 'odoo',
    title: 'Odoo 18 ERP Admin Dashboard',
    subtitle: 'Youth Engagement & Fund Management',
    src: '/assets/odoo/Picture1.png',
    badge: '50+ Users',
  },
  {
    id: 'odoo-2',
    category: 'odoo',
    title: 'Role-Based Access & Security Ledger',
    subtitle: 'Normalized Schemas & Approval Workflows',
    src: '/assets/odoo/Picture2.png',
    badge: 'RBAC',
  },
  {
    id: 'odoo-3',
    category: 'odoo',
    title: 'Real-time Fund Tracking & Disbursements',
    subtitle: 'Audited Financial Workflows & Allocations',
    src: '/assets/odoo/Picture3.png',
    badge: 'Enterprise',
  },
  {
    id: 'odoo-4',
    category: 'odoo',
    title: 'Automated Synchronization Pipeline',
    subtitle: 'Odoo PostgreSQL Backend Integration',
    src: '/assets/odoo/Picture4.png',
    badge: 'Data Sync',
  },
  {
    id: 'pbi-1',
    category: 'pbi',
    title: 'NGO Fund Contribution Overview',
    subtitle: 'Executive Summary & Financial Metrics',
    src: '/assets/pbi/Screenshot 2026-04-06 142735.png',
    badge: 'Power BI',
  },
  {
    id: 'pbi-2',
    category: 'pbi',
    title: 'Donor Engagement Analytics Funnel',
    subtitle: '+15% Donor Surge Campaign Analysis',
    src: '/assets/pbi/Screenshot 2026-04-06 143035.png',
    badge: '10 hrs/wk saved',
  },
  {
    id: 'pbi-3',
    category: 'pbi',
    title: 'Regional Fund Allocation Breakdown',
    subtitle: 'DAX Measures & Interactive Slicers',
    src: '/assets/pbi/Screenshot 2026-04-06 143203.png',
    badge: 'Analytics',
  },
  {
    id: 'pbi-4',
    category: 'pbi',
    title: 'Multi-Year Trend Projections',
    subtitle: 'Data Modeling & Forecast Dashboards',
    src: '/assets/pbi/Screenshot 2026-04-06 143326.png',
    badge: 'Reporting',
  },
  {
    id: 'blood-1',
    category: 'blood',
    title: 'GASC Blood Donor Emergency Bridge',
    subtitle: 'Collegiate Real-Time Matching Portal',
    src: '/assets/blood/Picture1.png',
    badge: 'Healthcare',
  },
  {
    id: 'blood-2',
    category: 'blood',
    title: 'Cross-Blood-Type Compatibility Search',
    subtitle: 'Sub-200ms SQL Emergency Matching',
    src: '/assets/blood/Picture2.png',
    badge: 'PHP / MySQL',
  },
  {
    id: 'blood-3',
    category: 'blood',
    title: 'Verified Donor Management System',
    subtitle: 'Bcrypt Credentials & Role Access',
    src: '/assets/blood/Picture3.png',
    badge: 'Security',
  },
];

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2024',
    synopsis: 'Undergraduate Computer Science studies at Gobi Arts & Science College, collegiate boxing coaching, and community volunteering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'B.Sc Computer Science',
        description: 'Earned Bachelor of Science in Computer Science with a strong academic footing in programming, relational databases, and systems.',
        tags: ['B.Sc CS', 'Bharathiar University'],
        runtime: '2021 – 2024',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Athlete & Coach',
        description: 'Medalist in Inter-Collegiate Boxing Tournaments, national participant in Punjab, and student coach for the collegiate boxing team.',
        tags: ['Boxing Medalist', 'Coach', 'Sports'],
        runtime: '2021 – 2025',
        palette: crimson,
      },
      {
        code: 'S01 E03',
        title: 'Community & Service',
        description: 'Volunteered across 4 years with the National Service Scheme (NSS) leading campus health camps and social initiatives.',
        tags: ['NSS', 'Leadership'],
        runtime: '4 Years',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The Master & The Leader',
    period: '2024 – 2026',
    synopsis: 'Master of Computer Applications (MCA) at Gobi Arts & Science College and elected President of the GAIT Committee.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'MCA Graduate',
        description: 'Advanced studies in software architectures, full-stack development, and enterprise database systems.',
        tags: ['MCA', 'Post-Graduation'],
        runtime: '2024 – 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'GAIT Committee President',
        description: 'Elected President of GAIT; orchestrated Inter & Intra college technical symposiums, presentations, and coding arenas.',
        tags: ['GAIT President', 'Campus Lead'],
        runtime: '2024 – 2026',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'Blood Donor Bridge',
        description: 'Engineered an emergency collegiate blood donor platform with PHP, MySQL, Bcrypt security, and real-time donor matching.',
        tags: ['PHP', 'MySQL', 'Web Security'],
        runtime: 'Aug 2025 – Mar 2026',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Enterprise ERP & Analytics Arc',
    period: '2025 – 2026',
    synopsis: 'Full-stack Python development and data analytics at Coactions Info Tech — custom Odoo modules and automated BI dashboards.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Python & Odoo Architect',
        description: 'Developed custom Odoo ERP modules for 50+ users, normalized schemas, and improved workflow tracking by 30%.',
        tags: ['Python', 'Odoo', 'PostgreSQL'],
        runtime: 'Nov 2025 – Apr 2026',
        palette: violet,
      },
      {
        code: 'S03 E02',
        title: 'BI & Analytics Lead',
        description: 'Designed 5+ Power BI dashboards saving 10 hours/week of manual work and led a 4-person team driving a 15% donor engagement surge.',
        tags: ['Power BI', 'DAX', 'Analytics'],
        runtime: 'May 2025 – Jun 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'WordPress Developer & Mentorship',
    period: '2026',
    synopsis: 'Professional WordPress Developer at Zooye Info Technologies — architecting multi-deployment portals and mentoring teammates.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The WordPress Specialist',
        description: 'Architected and optimized high-performance WordPress deployments, Core Web Vitals, and responsive cross-device layouts.',
        tags: ['WordPress', 'Core Web Vitals'],
        runtime: 'Apr 2026 – Nov 2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'Stackly Real Estate Multi-Site',
        description: 'Delivered three live cloud deployments for real estate listings, search filters, and appointment booking journeys.',
        tags: ['Stackly', 'Multi-Site', 'Cloud'],
        runtime: 'Zooye Deployments',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Team Mentorship',
        description: 'Mentored a team of 3 developers, accelerating delivery cycles, debugging issues, and elevating production code quality.',
        tags: ['Mentorship', 'Leadership'],
        runtime: 'Zooye Info Tech',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'The Premier Launch',
    period: '2026 – Present',
    synopsis: 'Launching Glamistry Makeover on Netlify edge CDN and streaming modern, high-speed digital experiences.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Glamistry Makeover',
        description: 'Luxury bridal makeover and hair styling platform deployed on Netlify edge CDN with sub-second page loads and online booking.',
        tags: ['Netlify CDN', 'Luxury UI', 'Live Demo'],
        runtime: 'Now Live',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'The Streaming Series',
        description: 'Modernizing personal digital presence from traditional WordPress into a cinematic React & Vite streaming portfolio.',
        tags: ['React 18', 'TypeScript', 'Tailwind', 'Framer Motion'],
        runtime: 'In Production',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Latest Original', title: 'Glamistry Makeover', detail: 'Luxury Bridal Studio Platform • Netlify Edge CDN', palette: amber },
  { label: 'Cloud Deployments', title: 'Stackly Portals', detail: '3 Live Real Estate Environments • Zooye', palette: ocean },
  { label: 'Enterprise ERP', title: 'Odoo & Python', detail: '50+ Users • 30% Efficiency Boost', palette: violet },
  { label: 'Business Intelligence', title: 'Power BI Dashboards', detail: 'Saved 10 hrs/week • 15% Donor Surge', palette: amber },
  { label: 'Collegiate Leadership', title: 'GAIT President', detail: 'Spearheaded IT Symposiums (2024–2026)', palette: crimson },
  { label: 'Sports Excellence', title: 'Boxing Medalist', detail: 'Inter-Collegiate Medalist • All India Tourney', palette: crimson },
  { label: 'Technical Credential', title: 'HackerRank Certified', detail: 'React, Software Engineer & Advanced SQL', palette: jade },
  { label: 'Academic Standing', title: 'MCA Graduate', detail: 'Bharathiar University (2024–2026)', palette: violet },
  { label: 'Team Leadership', title: 'Team Mentorship', detail: 'Mentored 3 developers at Zooye Info Tech', palette: ocean },
  { label: 'Professional Breadth', title: '20 Certifications', detail: 'AWS, Accenture, Tata, IBM, BCG X, Infosys', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'MCA Graduate',
    lines: ['Master of Computer Applications (MCA) & B.Sc CS', 'Gobi Arts & Science College, Bharathiar University (2021 – 2026)'],
    chips: ['MCA', 'B.Sc CS', 'Bharathiar University'],
  },
  {
    kicker: 'Flagship Launch',
    title: 'Glamistry Makeover',
    lines: ['Luxury Bridal Studio & Hair Styling Platform', 'Online booking, luxury portfolios, sub-second Netlify edge deployment'],
    chips: ['Glamistry Makeover', 'Netlify CDN', 'WordPress / Elementor', 'Tailwind'],
  },
  {
    kicker: 'Professional Experience',
    title: 'WordPress Specialist',
    lines: ['WordPress Developer · Zooye Info Technologies (Apr 2026 – Nov 2026)', 'Delivered 3 Stackly real-estate cloud portals and mentored 3 colleagues'],
    chips: ['WordPress', 'Stackly', 'Team Lead', 'Core Web Vitals'],
  },
  {
    kicker: 'Enterprise ERP & Analytics',
    title: 'Python, Odoo & Power BI',
    lines: ['Custom Odoo modules for 50+ users with 30% tracking efficiency gain', '5+ interactive Power BI dashboards saving 10 hours/week'],
    chips: ['Python', 'Odoo ERP', 'PostgreSQL', 'Power BI', 'DAX'],
  },
  {
    kicker: 'Campus Leadership',
    title: 'GAIT President',
    lines: ['Elected President of GAIT Committee (2024–2026)', 'Organized Inter & Intra College symposiums and technical conferences'],
    chips: ['GAIT President', 'NSS Volunteer', 'Student Coach'],
  },
  {
    kicker: 'Sports Excellence',
    title: 'Boxing Champion',
    lines: ['Inter-Collegiate Boxing Medalist (2023, 2024)', 'Represented in All India Boxing Championship (Punjab)'],
    chips: ['Boxing Medalist', 'All India', 'Fitness & Discipline'],
  },
  {
    kicker: 'Industry Certified',
    title: '20 Credentials',
    lines: ['HackerRank · Tata · AWS · Accenture · BCG X', 'IBM · Infosys · British Airways · NoviTech · HP'],
  },
];

export type ProfileId = 'gokul' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'gallery' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'gokul',
    name: 'Gokula Kannan',
    blurb: 'The full series, in order',
    color: '#e50914',
    order: ['about', 'originals', 'gallery', 'journey', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#38bdf8',
    order: ['story', 'moments', 'skills', 'originals', 'gallery', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Originals, stack & gallery first',
    color: '#34d399',
    order: ['originals', 'gallery', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Visual gallery, story arc & highlights',
    color: '#fbbf24',
    order: ['gallery', 'originals', 'journey', 'picks', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & journey', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Live Deployments`, palette: crimson },
  gallery: { nav: 'Gallery', card: 'Production Stills', meta: `${galleryItems.length} Behind-The-Scenes Captures`, palette: ocean },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'ATS Resume • View & download', palette: violet },
};
