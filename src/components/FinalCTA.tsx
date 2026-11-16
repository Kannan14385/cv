import { useRef, useState, type FormEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useSmoothScroll } from '../hooks/smoothScroll';
import { EASE, Magnetic, Particles } from './fx';
import { SeriesMark } from './Poster';

export default function FinalCTA({ onReplay }: { onReplay: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollTo } = useSmoothScroll();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 0.2'] });
  const spacing = useTransform(scrollYProgress, [0, 1], ['0.5em', '0.02em']);
  const blur = useTransform(scrollYProgress, [0, 1], ['blur(16px)', 'blur(0px)']);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(profile.formspreeEndpoint || 'https://formspree.io/f/mpwykqbg', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
      } else {
        const result = await response.json();
        setErrorMsg(result?.errors?.[0]?.message || 'Failed to dispatch email. Please email directly.');
        setFormState('error');
      }
    } catch {
      setErrorMsg('Network issue. Please send an email directly to gokulakannan.0.official@gmail.com.');
      setFormState('error');
    }
  };

  const ctas = [
    { label: 'LinkedIn', href: profile.links.linkedin, cursor: 'link' },
    { label: 'GitHub', href: profile.links.github, cursor: 'link' },
    { label: 'LeetCode', href: profile.links.leetcode, cursor: 'link' },
    { label: 'HackerRank', href: profile.links.hackerrank, cursor: 'link' },
    { label: 'Call Phone', href: `tel:${profile.phone.replace(/[^0-9+]/g, '')}`, cursor: 'link' },
    { label: 'Direct Email', href: `mailto:${profile.email}`, cursor: 'link' },
  ];

  return (
    <section id="contact" ref={ref} className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_60%,rgba(229,19,43,0.18),transparent_70%)]" />
      <Particles count={36} />

      <motion.p
        className="relative mb-4 text-[11px] font-bold uppercase tracking-[0.5em] text-crimson-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        The Next Episode
      </motion.p>
      <motion.h2
        className="relative font-display leading-[0.88] text-bone"
        style={{ fontSize: 'clamp(2.8rem, 11vw, 10.5rem)', letterSpacing: spacing, filter: blur, opacity }}
      >
        TO BE CONTINUED…
      </motion.h2>

      <motion.div
        className="relative mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
      >
        <p className="font-sans text-2xl font-semibold tracking-[0.2em] text-bone sm:text-3xl">{profile.displayName.toUpperCase()}</p>
        <p className="mt-1 text-xs font-semibold tracking-[0.35em] text-mist sm:text-sm">{profile.role.toUpperCase()}</p>
      </motion.div>

      {/* Formspree Interactive Contact Form */}
      <motion.div
        className="relative mt-12 w-full max-w-xl text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
      >
        <div className="rounded-2xl border border-white/15 bg-ink-2/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-display text-2xl tracking-wide text-bone">Send A Direct Dispatch</h3>
              <p className="text-xs text-mist">Powered by Formspree · Delivered directly to Gokul&apos;s personal inbox</p>
            </div>
            <span className="rounded bg-crimson/20 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-crimson-2 border border-crimson/30">
              Live Inbox
            </span>
          </div>

          {formState === 'success' ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
              <span className="text-3xl">🎉</span>
              <h4 className="mt-2 text-lg font-bold text-bone">Message Transmitted!</h4>
              <p className="mt-1 text-xs leading-relaxed text-emerald-300">
                Thank you! Your message has been sent to <strong>{profile.email}</strong>. Gokul will respond to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setFormState('idle')}
                className="mt-4 rounded-md bg-white/15 px-4 py-2 text-xs font-semibold text-bone hover:bg-white/25"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Your Name <span className="text-crimson-2">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Sri Sushmita / John Doe"
                    className="w-full rounded-lg border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson-2 focus:outline-none focus:ring-1 focus:ring-crimson-2"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-mist">
                    Your Email <span className="text-crimson-2">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    placeholder="visitor@company.com"
                    className="w-full rounded-lg border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson-2 focus:outline-none focus:ring-1 focus:ring-crimson-2"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-mist">
                  Subject / Project Scope
                </label>
                <input
                  type="text"
                  id="subject"
                  name="_subject"
                  placeholder="WordPress Site, ERP Customization, or Full-Time Role"
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson-2 focus:outline-none focus:ring-1 focus:ring-crimson-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-mist">
                  Your Message <span className="text-crimson-2">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Message me 😁 ... tell me about your project, timeline, or open role"
                  className="w-full rounded-lg border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-bone placeholder-smoke focus:border-crimson-2 focus:outline-none focus:ring-1 focus:ring-crimson-2 resize-none"
                />
              </div>

              {formState === 'error' && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
                  {errorMsg || 'Transmission failed. Please use direct email.'}
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="reset"
                  className="rounded-lg border border-white/15 px-4 py-2.5 text-xs font-semibold text-mist hover:text-bone hover:border-white/30"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="flex items-center gap-2 rounded-lg bg-crimson px-7 py-2.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2 disabled:opacity-50"
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>▶</span>
                      <span>Send Dispatch</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </motion.div>

      {/* Direct Contact Links */}
      <motion.div
        className="relative mt-10 flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.06, delayChildren: 0.3 }}
      >
        {ctas.map((c) => (
          <motion.div key={c.label} variants={{ hidden: { opacity: 0, y: 18, scale: 0.94 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }}>
            <Magnetic>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                data-cursor={c.cursor}
                className="flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 text-xs font-bold tracking-[0.1em] text-bone transition hover:border-bone hover:bg-white/15"
              >
                <span>{c.label.toUpperCase()}</span>
                <span className="text-mist">↗</span>
              </a>
            </Magnetic>
          </motion.div>
        ))}
      </motion.div>

      <div className="relative mt-14 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-[0.24em] text-smoke">
        <button type="button" onClick={() => scrollTo(0, { offset: 0 })} className="hover:text-bone">
          ↺ WATCH AGAIN
        </button>
        <button type="button" onClick={onReplay} className="hover:text-bone">
          ▶ REPLAY OPENING
        </button>
      </div>

      <footer className="absolute inset-x-0 bottom-0 px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center">
        <div className="mb-2 text-base">
          <SeriesMark />
        </div>
        <p className="text-[11px] leading-relaxed text-smoke">
          © {new Date().getFullYear()} {profile.displayName}. Built with ❤️ & React · Single Source of Truth Architecture.
        </p>
      </footer>
    </section>
  );
}
