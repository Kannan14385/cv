import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet, AtsSheet } from './ResumeViewer';

/** Full-screen Resume Modal with 2 dedicated formats: Digital e-PDF and Normal Print-Ready ATS */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');
  const [format, setFormat] = useState<'epdf' | 'normal'>('epdf');
  const [viewMode, setViewMode] = useState<'sheet' | 'pdf'>('sheet');
  const [cacheKey] = useState(() => Date.now());

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handlePrint = () => {
    const printWindow = window.open(profile.resumePrint, '_blank');
    if (printWindow) {
      printWindow.focus();
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
  };

  const activePdf = format === 'epdf' ? profile.resumeEpdf : profile.resumePrint;
  const activeDownloadName = format === 'epdf' ? 'Gokula_Kannan_Digital_eResume.pdf' : 'Gokula_Kannan_Print_ATS_Resume.pdf';

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/92 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      {/* Top action header */}
      <div className="gutter flex min-h-16 shrink-0 flex-wrap items-center justify-between gap-3 py-3 border-b border-white/10 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-display text-2xl tracking-wide text-bone">The Full Story</p>

          {/* 2 Format Section Switcher */}
          <div className="flex rounded-lg bg-white/10 p-1">
            <button
              type="button"
              onClick={() => setFormat('epdf')}
              className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                format === 'epdf' ? 'bg-crimson text-white shadow-md' : 'text-mist hover:text-white'
              }`}
            >
              ★ Digital e-PDF
            </button>
            <button
              type="button"
              onClick={() => setFormat('normal')}
              className={`rounded-md px-3 py-1 text-xs font-bold transition ${
                format === 'normal' ? 'bg-bone text-ink shadow-md' : 'text-mist hover:text-white'
              }`}
            >
              📄 Normal / Print-Ready
            </button>
          </div>

          {/* View Mode Toggle (Interactive Sheet vs Compiled PDF) */}
          <div className="hidden sm:flex rounded-lg bg-white/5 border border-white/10 p-0.5 text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setViewMode('sheet')}
              className={`rounded px-2.5 py-1 transition ${
                viewMode === 'sheet' ? 'bg-white/20 text-white' : 'text-mist hover:text-white'
              }`}
            >
              🖥️ Interactive View
            </button>
            <button
              type="button"
              onClick={() => setViewMode('pdf')}
              className={`rounded px-2.5 py-1 transition ${
                viewMode === 'pdf' ? 'bg-white/20 text-white' : 'text-mist hover:text-white'
              }`}
            >
              📑 PDF Embed
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Action buttons */}
          <a
            href={activePdf}
            download={activeDownloadName}
            className="flex items-center gap-1.5 rounded-md bg-bone px-3.5 py-1.5 text-xs font-bold text-ink transition hover:bg-white"
          >
            <span>⤓</span>
            <span>Download {format === 'epdf' ? 'e-PDF' : 'Normal'}</span>
          </a>

          <button
            type="button"
            onClick={handlePrint}
            aria-label="Print resume"
            className="glass hidden sm:flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold text-bone hover:bg-white/15"
          >
            <span>🖨</span>
            <span>Print</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Main viewer viewport */}
      <motion.div
        className="gutter flex-1 py-4 overflow-hidden"
        initial={{ opacity: 0, y: 30, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {small || viewMode === 'sheet' ? (
          <div data-lenis-prevent className="h-full overflow-y-auto space-y-4 pr-1 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {format === 'epdf' ? (
                <motion.div key="epdf" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ResumeSheet />
                </motion.div>
              ) : (
                <motion.div key="normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <AtsSheet />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex gap-2 pt-2">
              <a
                href={activePdf}
                target="_blank"
                rel="noreferrer"
                className="glass flex-1 flex min-h-11 items-center justify-center rounded-lg text-xs font-semibold text-bone"
              >
                Open {format === 'epdf' ? 'e-PDF' : 'Normal'} in New Tab ↗
              </a>
              <button
                type="button"
                onClick={handlePrint}
                className="glass flex-1 flex min-h-11 items-center justify-center rounded-lg text-xs font-semibold text-bone"
              >
                🖨 Print Out
              </button>
            </div>
          </div>
        ) : (
          <iframe
            key={`${format}-${cacheKey}`}
            title={`Gokula Kannan Resume - ${format === 'epdf' ? 'Digital e-Resume' : 'Print-Ready ATS'}`}
            src={`${activePdf}?v=${cacheKey}#view=FitH`}
            className="h-full w-full rounded-xl bg-white shadow-2xl border border-white/10"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
