import {
  Activity,
  Brain,
  FileBarChart,
  Users,
  LayoutDashboard,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Activity,
    title: "Real-time Analytics",
    description:
      "Watch your metrics update the moment they happen, with live dashboards that never make you wait for a refresh.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description:
      "Lumio's models spot trends, anomalies, and opportunities for you — and explain them in plain language.",
  },
  {
    icon: FileBarChart,
    title: "Automated Reports",
    description:
      "Schedule polished reports that land in your inbox or Slack, so stakeholders stay informed without the manual work.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Share dashboards, leave comments, and align your whole team around a single source of truth.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description:
      "Drag, drop, and arrange the exact widgets you need. Every team gets a view built for the way they work.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    description:
      "Enterprise-grade encryption, SSO, and SOC 2-ready controls keep your data private and compliant.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Features</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Everything you need to act on your data
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            One platform that handles the analysis, so your team can focus on the
            decisions that move the business forward.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal as="li" key={feature.title} delay={i * 0.05}>
              <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-500/50">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-soft transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <feature.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
