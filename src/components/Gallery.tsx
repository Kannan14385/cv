import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryItems, type GalleryCategory } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Stills' },
  { id: 'gk-services', label: 'GK Services 3D' },
  { id: 'glamistry', label: 'Glamistry Makeover' },
  { id: 'stackly', label: 'Stackly Real Estate' },
  { id: 'odoo', label: 'Odoo ERP' },
  { id: 'pbi', label: 'Power BI Analytics' },
  { id: 'blood', label: 'Blood Donor Bridge' },
  { id: 'leadership', label: 'GAIT & Leadership' },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <>
      <SectionHeading
        kicker="Production Stills"
        title="Project Gallery"
        aside={<p className="max-w-xs text-sm text-mist">Behind-the-scenes interface captures, live deployments, and leadership moments.</p>}
      />

      {/* category tabs */}
      <div className="gutter mb-8 flex gap-2 overflow-x-auto rail" role="tablist" aria-label="Gallery categories">
        {CATEGORIES.map((cat) => {
          const count = cat.id === 'all' ? galleryItems.length : galleryItems.filter((i) => i.category === cat.id).length;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition ${
                isActive ? 'text-white' : 'text-mist hover:text-bone'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="gallery-pill"
                  className="absolute inset-0 rounded-full bg-crimson shadow-[0_0_20px_rgba(229,19,43,0.4)]"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                {cat.label}
                <span className={`text-[10px] rounded-full px-1.5 py-0.2 ${isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-mist'}`}>
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* gallery grid */}
      <div className="gutter">
        <motion.div layout className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {filtered.map((item, index) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: EASE }}
                className="group relative aspect-[16/11] overflow-hidden rounded-xl border border-white/10 bg-ink-2 shadow-lg transition duration-500 hover:border-crimson-2/60 hover:shadow-[0_12px_36px_rgba(0,0,0,0.8)]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-cine)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 transition duration-300 group-hover:opacity-95" />

                {item.badge && (
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-bone backdrop-blur">
                    {item.badge}
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <h4 className="font-display text-lg tracking-wide text-bone sm:text-xl">{item.title}</h4>
                  <p className="line-clamp-1 text-xs text-mist">{item.subtitle}</p>

                  <div className="mt-2.5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-bone backdrop-blur transition hover:bg-white hover:text-ink"
                    >
                      <span>🔍 Expand Still</span>
                    </button>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-crimson-2 hover:underline inline-flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            className="fixed inset-0 z-[150] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-bone transition hover:bg-white/25"
            >
              ✕
            </button>

            <div className="relative max-h-[82vh] max-w-5xl overflow-hidden rounded-xl border border-white/20 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].title}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-crimson-2">
                      {filtered[lightboxIndex].badge || 'Still'}
                    </span>
                    <h3 className="font-display text-2xl text-bone sm:text-3xl">{filtered[lightboxIndex].title}</h3>
                    <p className="text-xs text-mist sm:text-sm">{filtered[lightboxIndex].subtitle}</p>
                  </div>
                  {filtered[lightboxIndex].link && (
                    <a
                      href={filtered[lightboxIndex].link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-md bg-crimson px-4 py-2 text-xs font-bold text-white shadow-lg transition hover:bg-crimson-2"
                    >
                      Open Live Site ↗
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Lightbox Controls */}
            <div className="mt-4 flex items-center gap-4 text-bone">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg transition hover:bg-white/20"
              >
                ←
              </button>
              <span className="text-xs text-mist">
                {lightboxIndex + 1} of {filtered.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg transition hover:bg-white/20"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
