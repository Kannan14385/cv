import { motion } from 'framer-motion';
import { education, experience, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const facts = [
    { k: 'Education', v: 'MCA & B.Sc CS Graduate', s: `${education[0].school.split(',')[0]} (2021 – 2026)` },
    { k: 'Professional Role', v: `${experience[0].role}`, s: `${experience[0].company} (${experience[0].period})` },
    { k: 'Primary Stack', v: 'WordPress & Web Development', s: 'with Python, Odoo ERP & Power BI' },
    { k: 'Based in', v: profile.location, s: 'Tamil Nadu, India' },
  ];

  return (
    <>
      <SectionHeading kicker="The Pilot" title="About Me" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#6b0d1e,#15060b_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-40 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />

              {/* Using Gokul's actual specified About photo */}
              <img
                src={profile.aboutPortrait || '/assets/about-gokul.webp'}
                alt={profile.displayName}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[var(--ease-cine)] hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/30 bg-black/50 px-2 py-0.5 text-[10px] font-bold text-bone backdrop-blur">
                  S01–S05
                </span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>
          <motion.p
            className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] italic leading-[1.2] text-bone"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
          >
            “{profile.intro}”
          </motion.p>
          <p className="mt-4 text-sm text-mist">— {profile.fullName}</p>

          <motion.dl
            className="mt-10 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-2 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Interests & Specializations</p>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <span key={i} className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-bone">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
