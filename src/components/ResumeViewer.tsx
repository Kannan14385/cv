import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { achievements, certifications, education, experience, profile, projects, skillCategories } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — a designed resume preview with 2 distinct sections: e-PDF and Normal Print-Ready. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  const [sheetMode, setSheetMode] = useState<'epdf' | 'normal'>('epdf');

  const handlePrint = () => {
    const printWindow = window.open(profile.resumePrint, '_blank');
    if (printWindow) {
      printWindow.focus();
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
  };

  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          {/* Format preview switcher */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-ink-2/80 p-2.5 backdrop-blur">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-smoke">PREVIEW FORMAT:</span>
            <div className="flex gap-1 rounded-lg bg-black/60 p-1">
              <button
                type="button"
                onClick={() => setSheetMode('epdf')}
                className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition ${
                  sheetMode === 'epdf' ? 'bg-crimson text-white shadow-md' : 'text-mist hover:text-white'
                }`}
              >
                ★ Digital e-Resume (Full Story)
              </button>
              <button
                type="button"
                onClick={() => setSheetMode('normal')}
                className={`rounded-md px-3.5 py-1.5 text-xs font-bold transition ${
                  sheetMode === 'normal' ? 'bg-bone text-ink shadow-md' : 'text-mist hover:text-white'
                }`}
              >
                📄 Normal / Print-Ready ATS
              </button>
            </div>
          </div>

          <CollapsibleSheet mode={sheetMode} />
        </motion.div>

        {/* 2 Dedicated Sections: e-PDF & Normal One */}
        <div className="lg:sticky lg:top-24 lg:self-start space-y-5">
          <div>
            <p className="font-serif text-3xl italic leading-tight text-bone">Choose Your Format.</p>
            <p className="mt-2 text-xs leading-relaxed text-mist">
              Tailored for both interactive digital review and physical paper printing with universal ATS compatibility.
            </p>
          </div>

          {/* Section 1: Digital e-PDF */}
          <div className="rounded-2xl border border-crimson/30 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(229,19,43,0.12),#0c0c11_80%)] p-5 ring-1 ring-crimson/20">
            <div className="flex items-center justify-between">
              <span className="rounded bg-crimson/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-crimson-2">
                1. DIGITAL e-PDF
              </span>
              <span className="text-[11px] text-smoke">Screen &amp; Recruiter Edition</span>
            </div>
            <h4 className="mt-2.5 font-display text-xl text-bone">The Full Story e-Resume</h4>
            <p className="mt-1 text-xs leading-relaxed text-mist">
              Utilizes the multi-column executive layout of this section. Rich with active links to live Netlify deployments, LinkedIn, GitHub, and email.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Magnetic className="flex-1">
                <button
                  type="button"
                  data-cursor="view"
                  onClick={onView}
                  className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-crimson px-4 text-xs font-bold text-white shadow-lg transition hover:bg-crimson-2"
                >
                  ▶ Open e-PDF
                </button>
              </Magnetic>
              <Magnetic className="flex-1">
                <a
                  href={profile.resumeEpdf}
                  download="Gokula_Kannan_Digital_eResume.pdf"
                  data-cursor="link"
                  className="glass flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg px-4 text-xs font-semibold text-bone transition hover:bg-white/15"
                >
                  ⤓ Download e-PDF
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Section 2: Normal One (Print-Ready / Universal ATS) */}
          <div className="rounded-2xl border border-white/15 bg-ink-2/90 p-5 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-bone">
                2. NORMAL ONE
              </span>
              <span className="text-[11px] text-smoke">Print &amp; ATS Scan Edition</span>
            </div>
            <h4 className="mt-2.5 font-display text-xl text-bone">Universal Print-Ready ATS</h4>
            <p className="mt-1 text-xs leading-relaxed text-mist">
              Single-column monochrome layout optimized for physical paper printing (zero dark ink waste) and verified 100% readable by corporate ATS parsers.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Magnetic className="flex-1">
                <a
                  href={profile.resumePrint}
                  download="Gokula_Kannan_Print_ATS_Resume.pdf"
                  data-cursor="link"
                  className="flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-bone px-4 text-xs font-bold text-ink transition hover:bg-white"
                >
                  ⤓ Download Normal
                </a>
              </Magnetic>
              <Magnetic className="flex-1">
                <button
                  type="button"
                  onClick={handlePrint}
                  data-cursor="link"
                  className="glass flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg border border-white/20 px-4 text-xs font-semibold text-bone transition hover:bg-white/15"
                >
                  🖨 Print Out
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Quick Metrics */}
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: 'MCA', k: 'Degree' },
              { v: String(projects.length), k: 'Originals' },
              { v: String(certifications.length), k: 'Certs' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-3">
                <dd className="font-display text-2xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** Collapsible container for mobile */
function CollapsibleSheet({ mode }: { mode: 'epdf' | 'normal' }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4000px]' : 'max-h-[580px]'}`}>
        <AnimatePresence mode="wait">
          {mode === 'epdf' ? (
            <motion.div key="epdf" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
              <ResumeSheet />
            </motion.div>
          ) : (
            <motion.div key="normal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
              <AtsSheet />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
            Expand full view ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">{children}</h4>;
}

/** 1. Digital e-Resume Sheet: Cinematic multi-column format inspired by The Full Story */
export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">DIGITAL e-RESUME · THE FULL STORY</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
          <p className="mt-1 text-xs font-semibold text-crimson-2">{profile.role}</p>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a href={`mailto:${profile.email}`} className="block hover:text-bone">
            {profile.email}
          </a>
          <span className="block text-smoke">{profile.phone} · {profile.location}</span>
          <div className="mt-1 flex flex-wrap gap-2 sm:justify-end">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-bone/90 hover:text-crimson-2">
              LinkedIn ↗
            </a>
            <span>·</span>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-bone/90 hover:text-crimson-2">
              GitHub ↗
            </a>
            <span>·</span>
            <a href="https://glamistrymakeover.netlify.app" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300">
              Glamistry Live ↗
            </a>
          </div>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <H>Work Experience</H>
          {experience.map((x) => (
            <div key={x.company} className="mb-5">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {x.company} — <span className="text-crimson-2">{x.role}</span>
                </p>
                <p className="text-xs text-smoke">{x.period}</p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs leading-relaxed text-mist">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Featured Projects &amp; Originals</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone flex items-center gap-2">
                  {p.title}
                  {p.live && <span className="rounded bg-amber-500/20 px-1.5 py-0.2 text-[9px] font-bold text-amber-300">LIVE</span>}
                </p>
                <p className="text-xs text-smoke">{p.year}</p>
              </div>
              <p className="mt-0.5 text-xs text-mist">{p.logline}</p>
              <p className="mt-1 text-[11px] font-mono text-smoke">{p.stack.join(' · ')}</p>
            </div>
          ))}

          <H>Education</H>
          {education.map((e) => (
            <div key={e.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {e.school}, {e.place}
                </p>
                <p className="text-xs text-smoke">{e.period}</p>
              </div>
              <p className="text-xs text-mist">
                {e.degree} · <span className="font-semibold text-bone">{e.score}</span>
              </p>
            </div>
          ))}
        </div>

        <div>
          <H>Technical Skills Matrix</H>
          <div className="space-y-3">
            {skillCategories.map((c) => (
              <div key={c.id}>
                <p className="text-[11px] font-bold uppercase tracking-wider text-bone">{c.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-mist">
                  {c.skills.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>

          <H>Awards &amp; Leadership</H>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a.id} className="text-xs leading-relaxed text-mist">
                <p className="font-semibold text-bone">{a.title}</p>
                <p className="text-[11px] font-medium text-amber-400">{a.org}</p>
                <p className="mt-0.5 text-smoke">{a.detail}</p>
              </li>
            ))}
          </ul>

          <H>Certifications</H>
          <div className="space-y-2 text-xs leading-relaxed text-mist">
            <p>
              <span className="font-bold text-bone">HackerRank:</span> Software Engineer, Frontend (React), Problem Solving, SQL Advanced, C#
            </p>
            <p>
              <span className="font-bold text-bone">Industry Credentials:</span> Applied AI (HCL GUVI), Data Visualisation (Tata), AWS Architecture, Accenture Software Engineering, BCG X GenAI, Infosys Python, IBM Prompt Engineering
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/** 2. Normal Print-Ready ATS Sheet: Clean monochrome paper layout simulation */
export function AtsSheet() {
  return (
    <article className="rounded-2xl bg-white p-6 sm:p-10 text-slate-900 shadow-2xl ring-1 ring-slate-200">
      <header className="border-b-2 border-slate-900 pb-4 text-center">
        <span className="inline-block rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-600 mb-1">
          PRINT-READY &amp; ATS SCANNABLE UNIVERSAL FORMAT
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">{profile.fullName}</h2>
        <p className="text-xs font-bold text-blue-700 tracking-wide mt-0.5 uppercase">
          Python &amp; WordPress Developer · Data Analyst · MCA Graduate
        </p>
        <p className="mt-2 text-xs text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-1">
          <span>{profile.email}</span>
          <span>•</span>
          <span>{profile.phone}</span>
          <span>•</span>
          <span>{profile.location}</span>
          <span>•</span>
          <span>LinkedIn: in/gokula-kannan-m</span>
          <span>•</span>
          <span>GitHub: Kannan14385</span>
        </p>
      </header>

      {/* Experience */}
      <section className="mt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Professional Work Experience
        </h3>
        <div className="space-y-3">
          {experience.map((x) => (
            <div key={x.company}>
              <div className="flex flex-wrap justify-between text-xs font-bold text-slate-900">
                <span>{x.company} — <span className="text-blue-700 font-semibold">{x.role}</span></span>
                <span className="text-slate-500">{x.period}</span>
              </div>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs text-slate-700">
                {x.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Key Projects &amp; Software Architecture
        </h3>
        <div className="space-y-2.5">
          {projects.map((p) => (
            <div key={p.id}>
              <div className="flex flex-wrap justify-between text-xs font-bold text-slate-900">
                <span>{p.title} {p.live && <span className="text-blue-600 text-[10px]">(Live: glamistrymakeover.netlify.app)</span>}</span>
                <span className="text-slate-500">{p.year}</span>
              </div>
              <p className="text-xs text-slate-700">{p.logline}</p>
              <p className="text-[11px] font-mono text-slate-500 mt-0.5">Stack: {p.stack.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Education
        </h3>
        <div className="space-y-2">
          {education.map((e) => (
            <div key={e.school} className="flex flex-wrap justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900">{e.degree}</span> — {e.school}, {e.place}
              </div>
              <div className="text-slate-600 font-semibold">{e.score} | {e.period}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Technical Skills
        </h3>
        <div className="space-y-1 text-xs text-slate-700">
          {skillCategories.map((c) => (
            <div key={c.id}>
              <strong className="text-slate-900">{c.title}:</strong> {c.skills.map((s) => s.name).join(', ')}
            </div>
          ))}
        </div>
      </section>

      {/* Honors */}
      <section className="mt-5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
          Leadership &amp; Achievements
        </h3>
        <ul className="list-disc list-inside space-y-1 text-xs text-slate-700">
          {achievements.map((a) => (
            <li key={a.id}>
              <strong className="text-slate-900">{a.title}</strong> ({a.org}): {a.detail}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
