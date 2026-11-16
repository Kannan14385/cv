import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, projects, type Project } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE, Magnetic } from './fx';
import { ProjectArt } from './Poster';

const block = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectModal({ project, onClose, onSwitch }: { project: Project; onClose: () => void; onSwitch: (p: Project) => void }) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState<number>(0);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
    setActiveImage(0);
  }, [project.id]);

  const more = projects.filter((p) => p.id !== project.id);

  return (
    <motion.div className="fixed inset-0 z-[140]" role="dialog" aria-modal="true" aria-labelledby={`title-${project.id}-modal`}>
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div ref={scroller} data-lenis-prevent className="absolute inset-0 overflow-y-auto overscroll-contain" onClick={onClose}>
        <motion.div
          className="relative mx-auto min-h-full max-w-5xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 30, transition: { duration: 0.3 } }}
        >
          {/* billboard */}
          <div className="relative h-[52vh] min-h-[340px] overflow-hidden sm:rounded-t-2xl">
            <motion.div layoutId={`art-${project.id}`} className="absolute inset-0" transition={{ duration: 0.7, ease: EASE }}>
              <ProjectArt project={project} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-ink-2/30 to-transparent" />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close project"
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-lg text-bone backdrop-blur transition hover:bg-black"
            >
              ✕
            </button>
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10">
              <motion.p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[0.34em] text-bone/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <span className="font-display text-xl tracking-normal text-crimson-2">{profile.firstName[0]}</span> ORIGINAL
              </motion.p>
              <motion.h2
                id={`title-${project.id}-modal`}
                layoutId={`title-${project.id}`}
                className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-[0.86] tracking-wide text-bone"
                transition={{ duration: 0.7, ease: EASE }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>

          <motion.div className="px-5 pb-12 sm:px-10" initial="hidden" animate="show" transition={{ staggerChildren: 0.08, delayChildren: 0.25 }}>
            <motion.div variants={block} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-mist">
              <span className="font-semibold text-[#46e3a8]">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-smoke" />
              <span>{project.genre}</span>
            </motion.div>

            <motion.p variants={block} className="mt-4 max-w-3xl text-lg leading-relaxed text-bone sm:text-xl">
              {project.logline}
            </motion.p>

            {/* CTAs: Live Demo + Multiple Deployments + GitHub */}
            <motion.div variants={block} className="mt-6 flex flex-wrap gap-3">
              {project.live && (
                <Magnetic>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md bg-crimson px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(229,19,43,0.45)] transition hover:bg-crimson-2 hover:scale-105"
                  >
                    <span>▶ Watch Live Site</span> ↗
                  </a>
                </Magnetic>
              )}
              {project.github && (
                <Magnetic>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md bg-bone px-6 py-3 text-sm font-bold text-ink transition hover:bg-white"
                  >
                    <span>View on GitHub</span> ↗
                  </a>
                </Magnetic>
              )}
            </motion.div>

            {/* If project has multiple deployment links (e.g. Stackly) */}
            {project.liveLinks && project.liveLinks.length > 0 && (
              <motion.div variants={block} className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-smoke">Live Deployments & Environments</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {project.liveLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-bone transition hover:border-[#38bdf8] hover:text-[#38bdf8]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Screenshot gallery if available */}
            {project.screenshots && project.screenshots.length > 0 && (
              <motion.div variants={block} className="mt-8">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">PRODUCTION SCREENSHOTS</p>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={project.screenshots[activeImage]}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  {project.screenshots.length > 1 && (
                    <div className="flex gap-2 p-3 overflow-x-auto border-t border-white/10 bg-ink-2">
                      {project.screenshots.map((s, idx) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setActiveImage(idx)}
                          className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-md border transition ${
                            idx === activeImage ? 'border-crimson-2 ring-1 ring-crimson-2' : 'border-white/15 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={s} alt="" className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* metrics */}
            <motion.div variants={block} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <p className="font-display text-2xl text-bone sm:text-3xl" style={{ color: project.palette.accent }}>
                    {m.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-mist">{m.label}</p>
                </div>
              ))}
            </motion.div>

            {/* tech stack */}
            <motion.div variants={block} className="mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-smoke">TECH STACK & ARCHITECTURE</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="glass rounded-full px-3.5 py-1 text-xs font-semibold text-bone">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* build highlights */}
            <motion.div variants={block} className="mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-smoke">ENGINEERING & HIGHLIGHTS</p>
              <ul className="space-y-3">
                {project.build.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-bone/85 sm:text-base">
                    <span className="font-display text-crimson-2">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* more originals */}
            {more.length > 0 && (
              <motion.div variants={block} className="mt-14 border-t border-white/10 pt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-mist">MORE ORIGINALS</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {more.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => onSwitch(p)}
                      className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden rounded-lg p-3 text-left ring-1 ring-white/10 transition hover:ring-white/40"
                    >
                      <ProjectArt project={p} className="transition-transform duration-500 group-hover:scale-105" />
                      <div className="relative z-10">
                        <p className="font-display text-xl leading-none text-bone">{p.title}</p>
                        <p className="mt-1 text-[10px] text-mist">{p.year}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
