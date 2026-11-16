import { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { certifications, profile, projects, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } };
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: EASE } },
};

export default function Hero({ onPlay, onResume, profileId }: { onPlay: () => void; onResume: () => void; profileId: ProfileId }) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const { scrollTo } = useSmoothScroll();

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-24%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const imgRotY = useTransform(px, [-1, 1], [-4, 4]);
  const imgRotX = useTransform(py, [-1, 1], [3, -3]);
  const imgShiftX = useTransform(px, [-1, 1], [-10, 10]);
  const chipX = useTransform(px, [-1, 1], [18, -18]);
  const chipY = useTransform(py, [-1, 1], [12, -12]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    '2021 – 2026',
    'MCA Graduate',
    `${projects.length} Originals`,
    `${certifications.length} Certifications`,
  ];

  const floating = [
    { text: 'MCA Graduate', sub: 'Bharathiar University', pos: 'left-[2%] top-[26%]', depth: 1, color: '#38bdf8' },
    { text: 'Glamistry Makeover', sub: 'Live on Netlify Edge', pos: 'right-[2%] top-[16%]', depth: -1, color: '#f59e0b' },
    { text: 'GAIT President', sub: 'Qutrix Leadership', pos: 'left-[4%] bottom-[28%]', depth: 0.8, color: '#a855f7' },
    { text: 'WordPress · Python · Odoo', sub: 'Core Architecture', pos: 'right-[4%] bottom-[22%]', depth: 0.6, color: '#22c55e' },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ink"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* futuristic cyber-atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        {/* electric crimson rim aura */}
        <div className="absolute right-[-10%] top-[-10%] h-[95vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.36),rgba(229,19,43,0.06)_55%,transparent)] blur-3xl lg:right-[-4%] lg:w-[60vw]" />
        {/* cyber cyan ambient backlight */}
        <div className="absolute bottom-[-20%] left-[-10%] h-[75vh] w-[65vw] rounded-full bg-[radial-gradient(closest-side,rgba(56,189,248,0.22),transparent)] blur-3xl" />
        {/* subtle matrix cyber grid */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
      </motion.div>

      <Particles className="z-[1]" count={32} />

      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <span className="light-streak left-[40%] top-[20%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[25%] top-[60%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[60%] top-[40%] w-[35vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait container with futuristic HUD frame */}
      <motion.div
        className="absolute inset-x-0 top-12 z-[2] flex h-[64svh] items-end justify-center sm:h-[70svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-16 lg:h-auto lg:w-[54vw] xl:right-[5vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full lg:h-[88vh]"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.5, ease: EASE, delay: 0.1 }}
        >
          {/* futuristic holographic HUD rings behind portrait */}
          <div aria-hidden className="pointer-events-none absolute bottom-[10%] left-1/2 h-[82%] w-[82%] -translate-x-1/2">
            {/* outer cyber ring */}
            <div className="absolute inset-0 rounded-full border border-crimson/30 shadow-[0_0_90px_rgba(229,19,43,0.35)] animate-[spin_40s_linear_infinite]" />
            {/* middle dashed targeting ring */}
            <div className="absolute inset-6 rounded-full border border-dashed border-cyan-400/25 animate-[spin_30s_linear_infinite_reverse]" />
            {/* inner glow disc */}
            <div className="absolute inset-14 rounded-full bg-[radial-gradient(circle,rgba(229,19,43,0.18)_0%,transparent_75%)]" />

            {/* Futuristic corner telemetry brackets */}
            <div className="absolute top-2 left-2 h-6 w-6 border-l-2 border-t-2 border-cyan-400/60" />
            <div className="absolute top-2 right-2 h-6 w-6 border-r-2 border-t-2 border-crimson/70" />
            <div className="absolute bottom-2 left-2 h-6 w-6 border-l-2 border-b-2 border-crimson/70" />
            <div className="absolute bottom-2 right-2 h-6 w-6 border-r-2 border-b-2 border-cyan-400/60" />

            {/* Futuristic telemetry digital label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded bg-black/60 px-3 py-0.5 text-[9px] font-mono tracking-[0.25em] text-cyan-300/80 backdrop-blur border border-cyan-500/20">
              SYS.ID // GK-2026 // FULL-STACK
            </div>
          </div>

          {/* portrait image - preserving natural facial structure with subtle atmospheric lighting */}
          <img
            src={profile.portrait.src}
            srcSet={profile.portrait.srcSet}
            sizes="(max-width: 1024px) 100vw, 54vw"
            alt={profile.portrait.alt}
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] [mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)]"
          />

          {/* dual-tone cyber rim light overlay on the image edges */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(229,19,43,0.22),transparent_70%)] mix-blend-screen" />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_20%_40%,rgba(56,189,248,0.16),transparent_65%)] mix-blend-screen" />

          {/* floating UI telemetry chips */}
          {floating.map((f, i) => (
            <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} />
          ))}
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="absolute inset-x-0 top-[40svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/80 to-ink lg:hidden" />
      <div aria-hidden className="absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(6,7,9,0.82)_36%,transparent_62%)] lg:block" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* hero copy with responsive title clamp */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[52svh] sm:pb-20 lg:max-w-[54vw] lg:justify-center lg:pb-0 lg:pt-20"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-2 text-lg">
          <SeriesMark />
        </motion.div>

        {/* Title sized to prevent overlapping on mobile/tablet */}
        <motion.h1
          variants={item}
          className="font-display leading-[0.9] tracking-[0.01em] text-bone"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7.5rem)' }}
        >
          <span className="shimmer-text block">{profile.firstName}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-1.5 font-sans text-xs sm:text-sm font-bold tracking-[0.55em] text-crimson-2">
          {profile.seriesTag}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-mist">
          <span className="rounded border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-bold tracking-wider text-cyan-300">
            MCA GRADUATE
          </span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-2">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone/90 sm:text-xs sm:tracking-[0.3em]">
          {profile.tagline.join(' • ')}
        </motion.p>

        <motion.p variants={item} className="mt-3.5 max-w-xl text-sm leading-relaxed text-bone/80 sm:text-base">
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="flex min-h-12 items-center gap-2.5 rounded-md bg-bone px-6 py-3 text-sm sm:text-[15px] font-bold text-ink transition hover:bg-white hover:scale-105 sm:px-8"
            >
              <span className="text-lg">▶</span> Play Intro
            </button>
          </Magnetic>

          <Magnetic>
            {profileId === 'recruiter' ? (
              <button
                type="button"
                onClick={onResume}
                className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-sm sm:text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8"
              >
                <span className="text-lg">⤓</span> View Resume
              </button>
            ) : (
              <button
                type="button"
                onClick={() => scrollTo('#originals')}
                className="glass flex min-h-12 items-center gap-2.5 rounded-md px-6 py-3 text-sm sm:text-[15px] font-semibold text-bone transition hover:bg-white/15 sm:px-8"
              >
                <span className="text-xl leading-none">＋</span> My Originals
              </button>
            )}
          </Magnetic>

          <button
            type="button"
            onClick={() => scrollTo('#about')}
            aria-label="More info"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-lg text-bone transition hover:border-bone hover:bg-white/10"
          >
            ⓘ
          </button>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({
  text,
  sub,
  pos,
  depth,
  index,
  color,
  mx,
  my,
}: {
  text: string;
  sub: string;
  pos: string;
  depth: number;
  index: number;
  color?: string;
  mx: MV;
  my: MV;
}) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-3.5 py-2 md:block ${pos} border border-white/15 shadow-xl`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.1 + index * 0.16, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <p className="text-xs font-bold text-bone flex items-center gap-1.5">
          {color && <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />}
          {text}
        </p>
        <p className="text-[9px] uppercase tracking-[0.18em] text-mist">{sub}</p>
      </motion.div>
    </motion.div>
  );
}
