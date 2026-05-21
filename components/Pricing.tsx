import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Tier = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "For individuals and small teams getting started with analytics.",
    features: [
      "Up to 5 data sources",
      "Real-time dashboards",
      "Weekly AI insights",
      "Email reports",
      "2 team members",
    ],
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    description: "For growing teams that need automation and collaboration.",
    features: [
      "Unlimited data sources",
      "Custom dashboards",
      "Daily AI insights & alerts",
      "Automated Slack & email reports",
      "Up to 20 team members",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with advanced security and scale needs.",
    features: [
      "Everything in Pro",
      "SSO & SCIM provisioning",
      "SOC 2 & custom DPA",
      "Dedicated success manager",
      "Unlimited team members",
      "99.9% uptime SLA",
    ],
    cta: "Contact sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Start free for 14 days. No credit card required. Upgrade or cancel
            anytime.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                  tier.highlighted
                    ? "border-transparent bg-brand-gradient text-white shadow-glow lg:-translate-y-3"
                    : "border-slate-200 bg-white text-slate-900 shadow-card dark:border-slate-800 dark:bg-slate-900"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700 shadow">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`font-display text-lg font-bold ${
                    tier.highlighted ? "text-white" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    tier.highlighted ? "text-white/80" : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {tier.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={`pb-1 text-sm font-medium ${
                        tier.highlighted ? "text-white/70" : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>

                <ul className="mt-7 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={`mt-0.5 shrink-0 ${
                          tier.highlighted ? "text-white" : "text-brand-600 dark:text-brand-400"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={
                          tier.highlighted ? "text-white/90" : "text-slate-600 dark:text-slate-300"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] ${
                    tier.highlighted
                      ? "bg-white text-brand-700 hover:bg-brand-50"
                      : "bg-brand-gradient text-white shadow-soft hover:shadow-glow hover:brightness-110"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
