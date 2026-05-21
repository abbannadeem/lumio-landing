import { Reveal } from "@/components/ui/Reveal";

// Fictional customer names rendered as styled wordmarks (muted, no images).
const companies = ["Nordwave", "Quanta", "Brightfold", "Helio Labs", "Vantge"];

export function LogoBar() {
  return (
    <section aria-label="Companies that trust Lumio" className="py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Trusted by data teams at
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {companies.map((name) => (
              <li
                key={name}
                className="font-display text-xl font-bold tracking-tight text-slate-300 grayscale transition-colors duration-200 hover:text-slate-400 dark:text-slate-600 dark:hover:text-slate-500 sm:text-2xl"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
