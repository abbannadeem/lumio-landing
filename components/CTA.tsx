import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-3xl border border-brand-800/10 bg-brand-900 shadow-card dark:border-cream-100/10">
          {/* Atmospheric background photo */}
          <img
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={2000}
            height={900}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />

          {/* Duotone forest overlay — ties photo into palette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-brand-900/80 mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-900 via-brand-800/60 to-transparent"
          />

          {/* Ochre kiss — bottom right warmth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent-400/20 blur-3xl"
          />

          <div className="relative px-6 py-20 sm:px-12 sm:py-28 lg:px-20 lg:py-36">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-300/30 bg-accent-50/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-200 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent-400"
                />
                The memo, not the dashboard
              </span>

              <h2 className="mt-6 font-display text-[clamp(2rem,7vw,4.5rem)] font-medium leading-[1.02] tracking-tighter text-cream-50">
                Read the room.{" "}
                <em className="font-medium italic text-accent-300">
                  Ship the call.
                </em>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/85 sm:text-lg">
                Connect your stack, pour a coffee, and let Lumio surface the
                one decision waiting for you. Free for 14 days — no credit
                card, no implementation call, no dashboard to babysit.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/signup"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-400 px-7 py-4 text-sm font-semibold text-brand-900 transition-all duration-200 hover:bg-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-200 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 active:scale-[0.98] sm:w-auto"
                >
                  See your first insight in 4 minutes
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#pricing"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-cream-100/25 bg-cream-50/5 px-7 py-4 text-sm font-semibold text-cream-50 backdrop-blur-sm transition-all duration-200 hover:border-cream-100/40 hover:bg-cream-50/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-100/40 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900 active:scale-[0.98] sm:w-auto"
                >
                  Watch a 90-second tour
                </a>
              </div>

              {/* Trust micro-line */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-cream-100/60">
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-accent-400"
                  />
                  SOC 2 Type II
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-accent-400"
                  />
                  200+ integrations
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1 w-1 rounded-full bg-accent-400"
                  />
                  Cancel in one click
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
