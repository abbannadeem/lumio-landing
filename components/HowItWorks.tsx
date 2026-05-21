import { Plug, Cpu, CheckCircle2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Plug,
    title: "Connect your data",
    description:
      "Plug in your databases, spreadsheets, and 200+ tools in minutes. No engineering required to get started.",
  },
  {
    icon: Cpu,
    title: "AI analyzes",
    description:
      "Lumio cleans, models, and continuously scans your data — surfacing the patterns and risks that matter most.",
  },
  {
    icon: CheckCircle2,
    title: "Get decisions",
    description:
      "Receive clear, prioritized recommendations and automated reports your whole team can act on with confidence.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 bg-slate-50 py-20 sm:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From raw data to decisions in three steps
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Get up and running in an afternoon — no data team required.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent md:block"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <step.icon size={24} aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-white text-xs font-bold text-brand-700 shadow">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
