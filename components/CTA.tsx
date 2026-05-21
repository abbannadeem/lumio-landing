import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section id="cta" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 text-center shadow-glow sm:px-12 sm:py-20">
          {/* Decorative glow blobs */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Start turning data into decisions today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
              Join thousands of teams using Lumio to move faster. Free for 14
              days — no credit card required.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#top"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-soft transition-all duration-200 hover:bg-brand-50 active:scale-[0.98] sm:w-auto"
              >
                Get Started Free
                <ArrowRight size={16} />
              </a>
              <a
                href="#pricing"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98] sm:w-auto"
              >
                View pricing
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
