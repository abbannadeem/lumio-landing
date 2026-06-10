"use client";

import { useEffect, useState } from "react";
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

// Display order: Pro first on mobile (reverse hierarchy), traditional center on desktop.
const mobileOrder = [tiers[1], tiers[0], tiers[2]];
const desktopOrder = [tiers[0], tiers[1], tiers[2]];

function StickyRail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pricingEl = document.getElementById("pricing");
    const ctaEl = document.getElementById("cta");
    if (!pricingEl) return;

    let pricingPassed = false;
    let ctaVisible = false;

    const update = () => setVisible(pricingPassed && !ctaVisible);

    const pricingObs = new IntersectionObserver(
      ([entry]) => {
        // "passed" = pricing section has scrolled past the bottom of the viewport
        const rect = entry.boundingClientRect;
        pricingPassed = rect.bottom < window.innerHeight * 0.6 && rect.top < 0;
        update();
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    pricingObs.observe(pricingEl);

    let ctaObs: IntersectionObserver | null = null;
    if (ctaEl) {
      ctaObs = new IntersectionObserver(
        ([entry]) => {
          ctaVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0.05 }
      );
      ctaObs.observe(ctaEl);
    }

    const onScroll = () => {
      const rect = pricingEl.getBoundingClientRect();
      pricingPassed = rect.bottom < window.innerHeight * 0.6 && rect.top < 0;
      update();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      pricingObs.disconnect();
      ctaObs?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand-800/10 bg-cream-50/95 backdrop-blur transition-transform duration-300 dark:border-cream-100/10 dark:bg-brand-900/95 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: 80 }}
    >
      <div className="container-page flex h-full items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="font-display text-sm italic text-brand-800 dark:text-cream-100">
            Priced for the team it pays for itself in week one.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="hidden items-baseline gap-1 md:flex"
            >
              <span className="text-xs uppercase tracking-wide text-brand-800/60 dark:text-cream-100/60">
                {tier.name}
              </span>
              <span className="font-display text-base font-semibold text-brand-800 dark:text-cream-100">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-xs text-brand-800/50 dark:text-cream-100/50">
                  {tier.period}
                </span>
              )}
            </div>
          ))}
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-md bg-accent-400 px-4 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-300 sm:px-5"
          >
            Start free trial
          </a>
        </div>
      </div>
    </div>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  if (tier.highlighted) {
    return (
      <div className="relative lg:-translate-y-4 lg:scale-[1.04]">
        {/* Ochre offset shadow — premium editorial signature */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-2 translate-y-2 rounded-md bg-accent-400 lg:translate-x-3 lg:translate-y-3"
        />
        <div className="relative flex h-full flex-col rounded-md border border-brand-800/20 bg-brand-800 p-8 text-cream-50 shadow-card dark:border-cream-100/10 dark:bg-brand-800">
          <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-sm bg-accent-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-900">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-900" />
            Most Popular
          </span>

          <h3 className="font-display text-2xl font-medium tracking-tighter text-cream-50">
            {tier.name}
            <em className="font-display italic text-accent-300"> recommended</em>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream-100/75">
            {tier.description}
          </p>

          <div className="mt-7 flex items-end gap-1 border-b border-cream-100/15 pb-6">
            <span className="font-display text-5xl font-medium tracking-tighter tabular-nums text-cream-50">
              {tier.price}
            </span>
            {tier.period && (
              <span className="pb-2 text-sm font-medium text-cream-100/60">
                {tier.period}
              </span>
            )}
          </div>

          <ul className="mt-6 space-y-3.5">
            {tier.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-cream-100/90"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-400/20 text-accent-300"
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-accent-400 px-6 py-3.5 text-sm font-semibold text-brand-900 transition-colors duration-200 hover:bg-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800 active:scale-[0.98]"
          >
            {tier.cta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col rounded-md border border-brand-800/10 bg-cream-50 p-8 text-brand-800 shadow-card dark:border-cream-100/10 dark:bg-brand-900/40 dark:text-cream-100">
      <h3 className="font-display text-2xl font-medium tracking-tighter text-brand-800 dark:text-cream-100">
        {tier.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-brand-800/70 dark:text-cream-100/70">
        {tier.description}
      </p>

      <div className="mt-7 flex items-end gap-1 border-b border-brand-800/10 pb-6 dark:border-cream-100/10">
        <span className="font-display text-5xl font-medium tracking-tighter tabular-nums text-brand-800 dark:text-cream-100">
          {tier.price}
        </span>
        {tier.period && (
          <span className="pb-2 text-sm font-medium text-brand-800/50 dark:text-cream-100/50">
            {tier.period}
          </span>
        )}
      </div>

      <ul className="mt-6 space-y-3.5">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-brand-800/85 dark:text-cream-100/80"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-800/8 text-brand-700 dark:bg-cream-100/10 dark:text-accent-300"
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#cta"
        className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-brand-800/15 bg-transparent px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors duration-200 hover:bg-brand-800 hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 active:scale-[0.98] dark:border-cream-100/20 dark:text-cream-100 dark:hover:bg-cream-100 dark:hover:text-brand-900 dark:focus-visible:ring-offset-brand-900"
      >
        {tier.cta}
      </a>
    </div>
  );
}

export function Pricing() {
  return (
    <>
      <section
        id="pricing"
        className="scroll-mt-20 bg-cream-50 py-20 dark:bg-brand-900 sm:py-28"
      >
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Investment</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,3.5rem)] font-medium leading-[1.05] tracking-tighter text-brand-800 dark:text-cream-100">
              Priced for the team it{" "}
              <em className="font-display italic text-accent-500 dark:text-accent-300">
                pays for itself
              </em>{" "}
              in week one.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-800/70 dark:text-cream-100/70 sm:text-lg">
              Start free for 14 days. No credit card required. Upgrade or cancel
              anytime — most teams justify the bill before their first Monday
              memo.
            </p>
          </Reveal>

          {/* Mobile: Pro first. Reverse hierarchy so the highlighted tier reads first. */}
          <div className="mt-14 grid gap-7 lg:hidden">
            {mobileOrder.map((tier, i) => (
              <Reveal key={`m-${tier.name}`} delay={i * 0.08}>
                <TierCard tier={tier} />
              </Reveal>
            ))}
          </div>

          {/* Desktop: traditional 3-up with Pro centered, lifted, and offset-shadowed. */}
          <div className="mt-16 hidden items-stretch gap-8 lg:grid lg:grid-cols-3">
            {desktopOrder.map((tier, i) => (
              <Reveal key={`d-${tier.name}`} delay={i * 0.08}>
                <TierCard tier={tier} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-brand-800/10 pt-8 dark:border-cream-100/10">
            <p className="font-display text-sm italic text-brand-800/70 dark:text-cream-100/70">
              Every plan includes the weekly memo, every integration, and a
              human onboarding call.
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-brand-800/50 dark:text-cream-100/50">
              <span>SOC 2 Type II</span>
              <span aria-hidden="true">·</span>
              <span>GDPR</span>
              <span aria-hidden="true">·</span>
              <span>99.9% uptime</span>
            </div>
          </Reveal>
        </div>
      </section>

      <StickyRail />
    </>
  );
}
