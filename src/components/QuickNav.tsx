import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE } from './fx';

export default function QuickNav({ onResume, onPlayIntro }: { onResume: () => void; onPlayIntro: () => void }) {
  const { scrollY, scrollYProgress } = useScroll();
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setShowTop(y > 280);
    });
  }, [scrollY]);

  useEffect(() => {
    return scrollYProgress.on('change', (p) => {
      setPercent(Math.round(p * 100));
    });
  }, [scrollYProgress]);

  const navItems = [
    { label: 'Hero Billboard', id: 'top', icon: '🎬' },
    { label: 'Originals (Projects)', id: 'originals', icon: '⭐' },
    { label: 'Project Gallery', id: 'gallery', icon: '🖼️' },
    { label: 'My Journey (Seasons)', id: 'journey', icon: '⏳' },
    { label: 'Skills Universe', id: 'skills', icon: '⚡' },
    { label: 'Top Moments & GAIT', id: 'moments', icon: '🏆' },
    { label: 'Contact & Formspree', id: 'contact', icon: '✉️' },
  ];

  const jump = (id: string) => {
    setMenuOpen(false);
    scrollTo(`#${id}`, { offset: id === 'top' ? 0 : -60 });
  };

  return (
    <div className="fixed bottom-6 right-5 z-[95] flex flex-col items-center gap-3 sm:right-7 sm:bottom-7">
      {/* Quick Menu Popover */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mb-1 w-64 rounded-2xl border border-white/20 bg-ink-2/95 p-3.5 shadow-2xl backdrop-blur-2xl"
          >
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">Quick Navigation</span>
              <span className="text-[11px] font-semibold text-mist">{percent}% scrolled</span>
            </div>

            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jump(item.id)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-left text-xs font-medium text-bone transition hover:bg-white/10 hover:text-white"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-2.5 flex gap-2 border-t border-white/10 pt-2.5">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onResume();
                }}
                className="flex-1 rounded-md bg-white/15 py-1.5 text-center text-[11px] font-bold text-bone transition hover:bg-white hover:text-ink"
              >
                ⤓ Resume
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onPlayIntro();
                }}
                className="flex-1 rounded-md bg-crimson py-1.5 text-center text-[11px] font-bold text-white transition hover:bg-crimson-2"
              >
                ▶ Intro
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Menu Opener Button (Above Back to Top) */}
      <button
        type="button"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Quick menu"
        className={`flex h-12 w-12 items-center justify-center rounded-full border shadow-xl backdrop-blur-xl transition duration-300 ${
          menuOpen
            ? 'border-crimson-2 bg-crimson text-white shadow-[0_0_25px_rgba(229,19,43,0.5)]'
            : 'border-white/20 bg-ink-2/90 text-bone hover:border-white/40 hover:bg-white/10'
        }`}
      >
        <span className="text-lg leading-none transition-transform duration-300" style={{ transform: menuOpen ? 'rotate(90deg)' : 'none' }}>
          {menuOpen ? '✕' : '⚡'}
        </span>
      </button>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            transition={{ duration: 0.25 }}
            type="button"
            onClick={() => scrollTo(0, { offset: 0 })}
            aria-label="Back to top"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-ink-2/90 text-bone shadow-xl backdrop-blur-xl transition hover:border-bone hover:bg-white hover:text-ink"
          >
            {/* Circular scroll indicator ring */}
            <svg className="absolute inset-0 -rotate-90" width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2.5" />
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="#e5132b"
                strokeWidth="2.5"
                strokeDasharray="132"
                strokeDashoffset={132 - (132 * percent) / 100}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
            </svg>
            <span className="relative text-base font-bold transition-transform group-hover:-translate-y-0.5">↑</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
