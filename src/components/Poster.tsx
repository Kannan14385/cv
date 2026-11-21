import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * Every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />

        {/* GK Services – Futuristic Car Service Center motif: Aerodynamic Hypercar & Radar LiDAR */}
        {project.motif === 'hypercar' && (
          <g fill="none" stroke={a}>
            {/* Aerodynamic Hypercar Silhouette */}
            <path
              d="M170,140 C190,130 220,105 260,98 C290,92 315,102 335,118 L365,128 C375,132 380,138 380,144 L375,152 C370,154 360,154 350,154 C345,142 332,134 318,134 C304,134 292,142 288,154 L225,154 C220,142 208,134 194,134 C180,134 168,142 164,154 L150,154 C145,154 140,150 142,145 L150,140 Z"
              strokeWidth="2.4"
              strokeOpacity="0.95"
              fill={a}
              fillOpacity="0.15"
            />
            {/* GT Carbon Wing */}
            <path d="M142,130 L165,125 L160,135 Z" fill={a} fillOpacity="0.8" />
            <line x1="150" y1="130" x2="152" y2="140" strokeWidth="2" strokeOpacity="0.8" />
            {/* Wheels */}
            <circle cx="194" cy="154" r="14" strokeWidth="2.5" strokeOpacity="0.9" />
            <circle cx="194" cy="154" r="6" fill={a} fillOpacity="0.6" />
            <circle cx="318" cy="154" r="14" strokeWidth="2.5" strokeOpacity="0.9" />
            <circle cx="318" cy="154" r="6" fill={a} fillOpacity="0.6" />
            {/* Radar / LiDAR scan pulses */}
            <path d="M260,82 C285,78 310,85 330,98" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.6" />
            <path d="M250,70 C285,64 325,74 350,90" strokeWidth="1.2" strokeDasharray="2 4" strokeOpacity="0.4" />
            <circle cx="280" cy="94" r="3" fill={a} />
          </g>
        )}

        {/* Glamistry Makeover motif: Luxury Diamond / Crown / Sparkles */}
        {project.motif === 'glam' && (
          <g transform="translate(210 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <polygon points="50,15 85,45 70,95 30,95 15,45" strokeWidth="2.4" />
            <line x1="15" y1="45" x2="85" y2="45" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="50" y1="15" x2="30" y2="95" strokeWidth="1.2" strokeOpacity="0.5" />
            <line x1="50" y1="15" x2="70" y2="95" strokeWidth="1.2" strokeOpacity="0.5" />
            <circle cx="105" cy="20" r="3" fill={a} />
            <circle cx="5" cy="80" r="2.5" fill={a} />
            <path d="M110,65 L115,75 L125,80 L115,85 L110,95 L105,85 L95,80 L105,75 Z" fill={a} fillOpacity="0.75" />
          </g>
        )}

        {/* Stackly Real Estate motif: Architectural Skyline & Layout */}
        {project.motif === 'realestate' && (
          <g fill="none" stroke={a}>
            <rect x="200" y="70" width="45" height="110" rx="4" strokeWidth="2" strokeOpacity="0.9" />
            <rect x="252" y="45" width="55" height="135" rx="4" strokeWidth="2.5" strokeOpacity="0.95" />
            <rect x="314" y="90" width="40" height="90" rx="4" strokeWidth="2" strokeOpacity="0.8" />
            {[0, 1, 2, 3, 4].map((r) => (
              <g key={r} fill={a} fillOpacity="0.4">
                <rect x="262" y={60 + r * 22} width="12" height="10" rx="2" />
                <rect x="284" y={60 + r * 22} width="12" height="10" rx="2" />
              </g>
            ))}
            <line x1="180" x2="370" y1="180" y2="180" strokeWidth="3" strokeOpacity="0.8" />
          </g>
        )}

        {/* ERP Youth & Fund Management motif: Modular Enterprise Nodes */}
        {project.motif === 'erp' && (
          <g fill="none" stroke={a}>
            <rect x="210" y="55" width="60" height="42" rx="8" strokeWidth="2" strokeOpacity="0.9" />
            <rect x="290" y="55" width="60" height="42" rx="8" strokeWidth="2" strokeOpacity="0.7" />
            <rect x="250" y="125" width="60" height="42" rx="8" strokeWidth="2.5" strokeOpacity="0.95" />
            <path d="M240,97 L280,125 M320,97 L280,125" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />
            <circle cx="280" cy="125" r="4" fill={a} />
          </g>
        )}

        {/* NGO Fund Tracking & Power BI motif: Analytics & Chart */}
        {project.motif === 'analytics' && (
          <g fill="none" stroke={a}>
            <line x1="200" x2="350" y1="170" y2="170" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="200" x2="200" y1="60" y2="170" strokeWidth="2" strokeOpacity="0.8" />
            <rect x="215" y="120" width="22" height="50" rx="3" fill={a} fillOpacity="0.3" strokeWidth="1.5" />
            <rect x="245" y="90" width="22" height="80" rx="3" fill={a} fillOpacity="0.5" strokeWidth="1.5" />
            <rect x="275" y="105" width="22" height="65" rx="3" fill={a} fillOpacity="0.4" strokeWidth="1.5" />
            <rect x="305" y="65" width="22" height="105" rx="3" fill={a} fillOpacity="0.8" strokeWidth="1.5" />
            <path d="M226,110 L256,80 L286,95 L316,55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="316" cy="55" r="4" fill={a} />
          </g>
        )}

        {/* GASC Blood Donor Bridge motif: Medical Cross & Pulse */}
        {project.motif === 'blood' && (
          <g transform="translate(240 50)" fill="none" stroke={a}>
            <path d="M45,10 C45,10 80,45 80,68 C80,88 64,104 45,104 C26,104 10,88 10,68 C10,45 45,10 45,10 Z" strokeWidth="2.5" strokeOpacity="0.9" fill={a} fillOpacity="0.2" />
            <path d="M22,70 L35,70 L40,55 L48,82 L55,64 L60,70 L70,70" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Ribbon platform mark 'G' used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 28 32" className="h-[1.1em] w-auto overflow-visible" aria-hidden>
        <defs>
          <linearGradient id="seriesMarkGGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2a4b" />
            <stop offset="55%" stopColor="#e50914" />
            <stop offset="100%" stopColor="#9a040d" />
          </linearGradient>
          <filter id="seriesMarkGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#e50914" floodOpacity="0.45" />
          </filter>
        </defs>
        <g filter="url(#seriesMarkGlow)">
          <path
            d="M21 9 C18.5 5.5 13.5 4.5 9.5 6.5 C5 9 4.2 16 6.8 20.5 C9.2 24.5 14.8 25.5 18.8 23.2 C20.6 22.2 21.6 20.5 22 18.5 L22 15.5 L14 15.5"
            fill="none"
            stroke="url(#seriesMarkGGrad)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
