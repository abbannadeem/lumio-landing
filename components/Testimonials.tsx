import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

const HEADSHOTS = {
  sarah:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=640&q=80",
  marcus:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=80",
  aisha:
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=640&q=80",
} as const;

const heroQuote = {
  quote:
    "Lumio replaced three separate tools and a weekly reporting meeting. The one memo it writes every Monday is the only thing my leadership actually reads.",
  name: "Sarah Chen",
  role: "VP of Growth",
  company: "Nordwave",
  image: HEADSHOTS.sarah,
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We went from gut-feel decisions to data-backed ones in a week. Onboarding was genuinely the easiest of any platform we've adopted.",
    name: "Marcus Reyes",
    role: "Head of Operations",
    company: "Quanta",
    image: HEADSHOTS.marcus,
  },
  {
    quote:
      "The automated reports alone save my team ten hours a week. Our leadership finally trusts the numbers because they're always current.",
    name: "Aisha Patel",
    role: "Director of Analytics",
    company: "Brightfold",
    image: HEADSHOTS.aisha,
  },
  {
    quote:
      "It surfaces the one decision that matters this week — pulled from every tool we already use. I stopped digging through dashboards entirely.",
    name: "Sarah Chen",
    role: "VP of Growth",
    company: "Nordwave",
    image: HEADSHOTS.sarah,
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-cream-50 py-20 dark:bg-brand-900 sm:py-28"
    >
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2
            id="testimonials-heading"
            className="mt-4 font-display text-[clamp(1.5rem,7vw,1.875rem)] font-medium tracking-tighter text-brand-800 dark:text-cream-50 sm:text-4xl"
          >
            What operators are <em className="italic text-accent-500">saying</em>.
          </h2>
        </Reveal>

        {/* Hero editorial pull-quote */}
        <Reveal className="mt-12 sm:mt-16">
          <figure className="relative border-t border-brand-800/10 pt-10 dark:border-cream-100/10 sm:pt-14 lg:pt-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-2 select-none font-display text-[6rem] leading-none text-accent-400 sm:-left-4 sm:-top-6 sm:text-[8rem] lg:-left-8 lg:-top-8"
            >
              &ldquo;
            </span>

            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <blockquote className="lg:col-span-9">
                <p
                  className="font-display font-medium italic tracking-tighter text-brand-800 dark:text-cream-50"
                  style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
                >
                  {heroQuote.quote}
                </p>
              </blockquote>

              <div className="mt-10 flex items-center gap-4 lg:col-span-3 lg:mt-0 lg:block lg:self-end">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-brand-800/10 shadow-card after:absolute after:inset-0 after:bg-brand-800/15 after:mix-blend-multiply dark:border-cream-100/10 sm:h-24 sm:w-24 lg:h-[180px] lg:w-[180px]">
                  <img
                    src={heroQuote.image}
                    alt={`${heroQuote.name}, ${heroQuote.role} at ${heroQuote.company}`}
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="lg:mt-5">
                  <span className="block font-display text-base font-medium text-brand-800 dark:text-cream-50 lg:text-lg">
                    {heroQuote.name}
                  </span>
                  <span className="mt-1 block text-sm text-brand-600 dark:text-cream-200/70">
                    {heroQuote.role}
                  </span>
                  <span className="block text-sm text-brand-600 dark:text-cream-200/70">
                    {heroQuote.company}
                  </span>
                </figcaption>
              </div>
            </div>

            {/* Inline stat strip */}
            <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-brand-800/10 pt-10 dark:border-cream-100/10 sm:grid-cols-3 sm:gap-6">
              {[
                { value: "10h", label: "saved per week, per team" },
                { value: "4.9", label: "average G2 rating" },
                { value: "200+", label: "native integrations" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-5xl font-semibold tabular-nums tracking-tighter text-accent-500 sm:text-6xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm text-brand-600 dark:text-cream-200/70">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </figure>
        </Reveal>

        {/* Supporting 3-up grid */}
        <ul className="mt-20 grid gap-px overflow-hidden border border-brand-800/10 bg-brand-800/10 dark:border-cream-100/10 dark:bg-cream-100/10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="li"
              key={`${t.name}-${i}`}
              delay={i * 0.08}
              className="bg-cream-50 dark:bg-brand-900"
            >
              <figure className="flex h-full flex-col p-7 sm:p-8">
                <blockquote className="flex-1 text-base leading-relaxed text-brand-700 dark:text-cream-100/90">
                  <span aria-hidden="true" className="text-accent-500">
                    &ldquo;
                  </span>
                  {t.quote}
                  <span aria-hidden="true" className="text-accent-500">
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-brand-800/10 after:absolute after:inset-0 after:bg-brand-800/15 after:mix-blend-multiply dark:border-cream-100/10">
                    <img
                      src={t.image}
                      alt={`${t.name}, ${t.role} at ${t.company}`}
                      loading="lazy"
                      decoding="async"
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span>
                    <span className="block font-display text-sm font-medium text-brand-800 dark:text-cream-50">
                      {t.name}
                    </span>
                    <span className="block text-xs text-brand-600 dark:text-cream-200/70">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
