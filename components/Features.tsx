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

const topFeatures: Feature[] = [
  {
    icon: Activity,
    title: "Real-time analytics",
    description:
      "Watch your metrics update the moment they happen, with live dashboards that never make you wait for a refresh.",
  },
  {
    icon: Brain,
    title: "AI insights",
    description:
      "Lumio's models spot trends, anomalies, and opportunities — and explain them in plain language.",
  },
  {
    icon: FileBarChart,
    title: "Automated reports",
    description:
      "Schedule polished memos that land in Slack or your inbox, so stakeholders stay informed without the manual work.",
  },
];

const wideFeature: Feature = {
  icon: LayoutDashboard,
  title: "Custom dashboards built around the way your team actually decides",
  description:
    "Drag, drop, and arrange the exact widgets you need. Every team gets a view tuned to the cadence and questions that move their week.",
};

const narrowFeature: Feature = {
  icon: Users,
  title: "Team collaboration",
  description:
    "Share boards, leave comments, and align around a single source of truth — without another sync meeting on the calendar.",
};

const securityFeature: Feature = {
  icon: ShieldCheck,
  title: "Data security, by default",
  description:
    "Enterprise-grade encryption, SSO, and SOC 2-ready controls keep your data private, auditable, and exactly where it belongs.",
};

const IMG_DATAVIZ =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";
const IMG_TEAM =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80";
const IMG_SECURITY =
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80";

function FeatureIcon({ Icon }: { Icon: LucideIcon }) {
  return (
    <span
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-brand-800/10 bg-cream-50 text-brand-800 dark:border-cream-100/10 dark:bg-brand-800 dark:text-accent-300"
      aria-hidden="true"
    >
      <Icon size={20} />
    </span>
  );
}

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 bg-cream-50 py-20 dark:bg-brand-900 sm:py-28"
    >
      <div className="container-page">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">The Stack</span>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,6vw,3.25rem)] font-medium tracking-tighter text-brand-800 dark:text-cream-100">
            A workspace built for the people making the{" "}
            <em className="italic text-accent-500 dark:text-accent-300">call</em>
            , not the deck.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-700/80 dark:text-cream-200/80 sm:text-lg">
            One platform that handles the analysis, so your team can focus on
            the decisions that move the business forward.
          </p>
        </Reveal>

        {/* Row 1 — three equal cards */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topFeatures.map((feature, i) => (
            <Reveal as="li" key={feature.title} delay={i * 0.05}>
              <article className="group flex h-full flex-col border border-brand-800/10 bg-cream-50 p-7 transition-colors duration-300 hover:border-brand-800/25 dark:border-cream-100/10 dark:bg-brand-800/40 dark:hover:border-accent-300/30">
                <FeatureIcon Icon={feature.icon} />
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-brand-800 dark:text-cream-100">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-700/80 dark:text-cream-200/70">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Row 2 — wide (image + copy) + narrow */}
        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="group flex h-full flex-col overflow-hidden border border-brand-800/10 bg-cream-50 dark:border-cream-100/10 dark:bg-brand-800/40 sm:flex-row">
              <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-auto sm:w-1/2 after:absolute after:inset-0 after:bg-brand-800/15 after:mix-blend-multiply">
                <img
                  src={IMG_DATAVIZ}
                  alt="Live analytics chart on a screen, rendered in a forest-green duotone."
                  width={900}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                <div>
                  <FeatureIcon Icon={wideFeature.icon} />
                  <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-brand-800 dark:text-cream-100">
                    {wideFeature.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-700/80 dark:text-cream-200/70">
                    {wideFeature.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Revenue", "Funnel", "Cohorts", "Forecast"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-800/15 px-3 py-1 text-xs font-medium tracking-wide text-brand-700 dark:border-cream-100/15 dark:text-cream-200/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.05}>
            <article className="group flex h-full flex-col border border-brand-800/10 bg-cream-50 p-7 transition-colors duration-300 hover:border-brand-800/25 dark:border-cream-100/10 dark:bg-brand-800/40 dark:hover:border-accent-300/30 sm:p-8">
              <FeatureIcon Icon={narrowFeature.icon} />
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-brand-800 dark:text-cream-100">
                {narrowFeature.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-700/80 dark:text-cream-200/70">
                {narrowFeature.description}
              </p>
              <div className="mt-auto pt-8">
                <div className="relative">
                  <div className="flex -space-x-2">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-cream-50 bg-brand-800 font-display text-xs font-medium text-cream-100 dark:border-brand-900 dark:bg-accent-500"
                        aria-hidden="true"
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-brand-700/60 dark:text-cream-200/50">
                    12 teammates active this week
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Row 3 — full-width, image left / copy right */}
        <Reveal className="mt-5">
          <article className="grid border border-brand-800/10 bg-cream-50 dark:border-cream-100/10 dark:bg-brand-800/40 lg:grid-cols-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto after:absolute after:inset-0 after:bg-brand-800/20 after:mix-blend-multiply">
              <img
                src={IMG_SECURITY}
                alt="Minimal architectural vault interior, photographed in low light with a forest-green duotone."
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <FeatureIcon Icon={securityFeature.icon} />
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-brand-800 dark:text-cream-100 sm:text-3xl">
                {securityFeature.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-700/80 dark:text-cream-200/70">
                {securityFeature.description}
              </p>
              <dl className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-brand-800/10 pt-6 dark:border-cream-100/10">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-brand-700/60 dark:text-cream-200/50">
                    Encryption
                  </dt>
                  <dd className="mt-1 font-display text-lg text-brand-800 dark:text-cream-100">
                    AES-256
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-brand-700/60 dark:text-cream-200/50">
                    Compliance
                  </dt>
                  <dd className="mt-1 font-display text-lg text-brand-800 dark:text-cream-100">
                    SOC 2 · GDPR
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-brand-700/60 dark:text-cream-200/50">
                    Identity
                  </dt>
                  <dd className="mt-1 font-display text-lg text-brand-800 dark:text-cream-100">
                    SSO · SCIM
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-brand-700/60 dark:text-cream-200/50">
                    Uptime
                  </dt>
                  <dd className="mt-1 font-display text-lg text-brand-800 dark:text-cream-100">
                    99.99%
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        </Reveal>

        {/* Tiny editorial photo strip — team accent (URL #6) */}
        <Reveal className="mt-5">
          <div className="relative aspect-[5/1] w-full overflow-hidden border border-brand-800/10 dark:border-cream-100/10 after:absolute after:inset-0 after:bg-brand-800/30 after:mix-blend-multiply">
            <img
              src={IMG_TEAM}
              alt="A small team collaborating around a laptop, photographed in a forest-green duotone."
              width={1600}
              height={320}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-between px-6 sm:px-10">
              <p className="font-display text-lg italic text-cream-50 sm:text-2xl">
                Built with operators, not for them.
              </p>
              <span className="hidden text-xs uppercase tracking-[0.22em] text-cream-50/80 sm:block">
                Lumio · The Stack
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
