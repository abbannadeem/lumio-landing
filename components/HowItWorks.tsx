"use client";

import { Reveal } from "@/components/ui/Reveal";

type Step = {
  number: string;
  eyebrow: string;
  title: string;
  titleItalic: string;
  description: string;
  image: string;
  alt: string;
};

const steps: Step[] = [
  {
    number: "01",
    eyebrow: "Connect",
    title: "Plug in every tool you",
    titleItalic: "already use",
    description:
      "Warehouses, spreadsheets, ad platforms, CRMs — over 200 integrations in minutes. No engineering tickets, no broken pipelines, no schema arguments.",
    image:
      "https://images.unsplash.com/featured/800x600?cables,connector,clean,studio&auto=format&fit=crop&w=1200&q=80",
    alt: "Studio-lit cables and connectors on a clean surface",
  },
  {
    number: "02",
    eyebrow: "Analyze",
    title: "Lumio reads the signal,",
    titleItalic: "ignores the noise",
    description:
      "Our analytics layer continuously models your data, scans for anomalies, and writes the one explanation that makes the number make sense.",
    image:
      "https://images.unsplash.com/featured/800x600?neural,abstract,green,light&auto=format&fit=crop&w=1200&q=80",
    alt: "Abstract green neural pattern of light",
  },
  {
    number: "03",
    eyebrow: "Decide",
    title: "Walk into Monday with a",
    titleItalic: "memo, not a dashboard",
    description:
      "A short, prioritized brief lands before standup — insights, anomalies, and recommended next steps your team can act on without digging.",
    image:
      "https://images.unsplash.com/featured/800x600?notebook,desk,morning,workspace&auto=format&fit=crop&w=1200&q=80",
    alt: "Notebook and pen on a desk in morning light",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-cream-50 py-20 dark:bg-brand-900 sm:py-28"
    >
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">The workflow</span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,7vw,3rem)] font-medium tracking-tighter text-brand-800 dark:text-cream-50">
            Three steps between raw data and the{" "}
            <em className="italic text-accent-500 dark:text-accent-300">
              decision
            </em>
            .
          </h2>
          <p className="mt-4 max-w-xl text-base text-brand-700/80 dark:text-cream-200/80 sm:text-lg">
            Live in an afternoon. The point isn&apos;t a new dashboard — it&apos;s the
            sentence at the top of Monday morning.
          </p>
        </Reveal>

        {/* Mobile: horizontal snap scroll */}
        <div className="mt-12 lg:hidden">
          <div
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:px-6"
            style={{ scrollbarWidth: "thin" }}
          >
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative flex w-[85vw] max-w-md shrink-0 snap-center flex-col overflow-hidden border border-brand-800/10 bg-cream-50 shadow-card dark:border-cream-100/10 dark:bg-brand-800"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-brand-800/25 mix-blend-multiply"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-6 -left-2 select-none font-display text-[clamp(7rem,30vw,11rem)] font-medium leading-none text-accent-400/95 drop-shadow-[0_2px_0_rgba(14,59,46,0.35)]"
                  >
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-300">
                    {step.eyebrow}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-tighter text-brand-800 dark:text-cream-50">
                    {step.title}{" "}
                    <em className="italic text-accent-500 dark:text-accent-300">
                      {step.titleItalic}
                    </em>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-700/80 dark:text-cream-200/80">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.2em] text-brand-700/50 dark:text-cream-200/50">
            Swipe
          </p>
        </div>

        {/* Desktop: vertical timeline */}
        <ol className="relative mt-20 hidden lg:block">
          {/* Vertical ochre rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[7.5rem] top-8 w-px bg-gradient-to-b from-accent-400/0 via-accent-400 to-accent-400/0"
          />

          {steps.map((step, i) => {
            const isReversed = i % 2 === 1;
            return (
              <Reveal
                as="li"
                key={step.number}
                delay={i * 0.08}
                className="relative grid grid-cols-12 items-center gap-8 py-12 first:pt-0 last:pb-0"
              >
                {/* Numeral column */}
                <div className="col-span-2 flex items-center justify-center">
                  <div className="relative flex h-32 w-32 items-center justify-center">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center font-display text-[8rem] font-medium leading-none text-accent-400/90 dark:text-accent-300/80"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {step.number}
                    </span>
                    {/* Rail node */}
                    <span
                      aria-hidden="true"
                      className="absolute -right-[3.5rem] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-cream-50 bg-accent-400 shadow-[0_0_0_2px_rgba(14,59,46,0.15)] dark:border-brand-900"
                    />
                  </div>
                </div>

                {/* Content + image */}
                <div
                  className={`col-span-10 grid grid-cols-10 items-center gap-10 pl-16 ${
                    isReversed ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`col-span-5 ${
                      isReversed ? "order-2" : "order-1"
                    }`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-600 dark:text-accent-300">
                      {step.eyebrow}
                    </span>
                    <h3 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-[1.05] tracking-tighter text-brand-800 dark:text-cream-50">
                      {step.title}{" "}
                      <em className="italic text-accent-500 dark:text-accent-300">
                        {step.titleItalic}
                      </em>
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-brand-700/80 dark:text-cream-200/80">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`col-span-5 ${
                      isReversed ? "order-1" : "order-2"
                    }`}
                  >
                    <div className="group relative">
                      {/* Ochre offset shadow */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 translate-x-3 translate-y-3 bg-accent-400 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 dark:bg-accent-500"
                      />
                      <div className="relative aspect-[5/4] w-full overflow-hidden border border-brand-800/10 dark:border-cream-100/10">
                        <img
                          src={step.image}
                          alt={step.alt}
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={600}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-brand-800/20 mix-blend-multiply"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
