import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  /** Tailwind gradient classes for the avatar circle. */
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Lumio replaced three separate tools and a weekly reporting meeting. The AI insights catch things our analysts used to miss entirely.",
    name: "Sarah Chen",
    role: "VP of Growth",
    company: "Nordwave",
    initials: "SC",
    avatar: "from-indigo-500 to-violet-500",
  },
  {
    quote:
      "We went from gut-feel decisions to data-backed ones in a week. Onboarding was genuinely the easiest of any platform we've adopted.",
    name: "Marcus Reyes",
    role: "Head of Operations",
    company: "Quanta",
    initials: "MR",
    avatar: "from-violet-500 to-fuchsia-500",
  },
  {
    quote:
      "The automated reports alone save my team ten hours a week. Our leadership finally trusts the numbers because they're always current.",
    name: "Aisha Patel",
    role: "Director of Analytics",
    company: "Brightfold",
    initials: "AP",
    avatar: "from-blue-500 to-indigo-500",
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-slate-50 py-20 dark:bg-slate-900 sm:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2
            id="testimonials-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            Loved by data-driven teams
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Thousands of teams use Lumio to make faster, smarter decisions every
            day.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-card dark:border-slate-800 dark:bg-slate-800">
                <div className="flex gap-0.5" aria-label="Rated 5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatar} text-sm font-bold text-white`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">
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
