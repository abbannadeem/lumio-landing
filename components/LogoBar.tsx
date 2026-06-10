import { Reveal } from "@/components/ui/Reveal";
import type { JSX, SVGProps } from "react";

type Wordmark = {
  name: string;
  width: number;
  render: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

// Each fictional company gets its own wordmark treatment: varied weights,
// distinct letterforms, and the occasional icon mark — so the row reads like
// a real "as seen at" lineup, not five identical bold strings.
const wordmarks: Wordmark[] = [
  {
    // Nordwave — thin sans with a tiny wave glyph; nordic, fintech-feeling.
    name: "Nordwave",
    width: 132,
    render: (props) => (
      <svg
        viewBox="0 0 132 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M2 20c3-6 6-6 9 0s6 6 9 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text
          x="28"
          y="20"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="16"
          fontWeight="300"
          letterSpacing="0.06em"
          fill="currentColor"
        >
          NORDWAVE
        </text>
      </svg>
    ),
  },
  {
    // Quanta — bold geometric serif-y wordmark with a small dot accent.
    name: "Quanta",
    width: 108,
    render: (props) => (
      <svg
        viewBox="0 0 108 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <text
          x="0"
          y="21"
          fontFamily="ui-serif, Georgia, serif"
          fontSize="22"
          fontWeight="600"
          fontStyle="italic"
          letterSpacing="-0.02em"
          fill="currentColor"
        >
          Quanta
        </text>
        <circle cx="100" cy="20" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    // Brightfold — icon mark (folded square) + medium-weight sans.
    name: "Brightfold",
    width: 156,
    render: (props) => (
      <svg
        viewBox="0 0 156 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M4 6h14v14H4z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M4 6l14 14M11 6v14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <text
          x="28"
          y="20"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="17"
          fontWeight="500"
          letterSpacing="-0.01em"
          fill="currentColor"
        >
          Brightfold
        </text>
      </svg>
    ),
  },
  {
    // Helio Labs — two-tone weight (Helio heavy, Labs light) with a sun mark.
    name: "Helio Labs",
    width: 148,
    render: (props) => (
      <svg
        viewBox="0 0 148 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <circle cx="11" cy="14" r="4.5" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
          <path d="M11 3v3M11 22v3M2 14h3M17 14h3M5 8l2 2M15 18l2 2M5 20l2-2M15 10l2-2" />
        </g>
        <text
          x="26"
          y="20"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="17"
          fontWeight="700"
          letterSpacing="-0.02em"
          fill="currentColor"
        >
          Helio
        </text>
        <text
          x="86"
          y="20"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="17"
          fontWeight="300"
          letterSpacing="0.02em"
          fill="currentColor"
        >
          Labs
        </text>
      </svg>
    ),
  },
  {
    // Vantge — monoline all-caps wordmark with a leading triangle mark.
    name: "Vantge",
    width: 116,
    render: (props) => (
      <svg
        viewBox="0 0 116 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path d="M3 21L12 5l9 16H3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <text
          x="28"
          y="20"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fontSize="15"
          fontWeight="500"
          letterSpacing="0.18em"
          fill="currentColor"
        >
          VANTGE
        </text>
      </svg>
    ),
  },
  {
    // Cinder & Co — editorial serif with an ampersand ligature.
    name: "Cinder & Co",
    width: 148,
    render: (props) => (
      <svg
        viewBox="0 0 148 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <text
          x="0"
          y="21"
          fontFamily="ui-serif, Georgia, serif"
          fontSize="20"
          fontWeight="500"
          letterSpacing="-0.01em"
          fill="currentColor"
        >
          Cinder
        </text>
        <text
          x="78"
          y="21"
          fontFamily="ui-serif, Georgia, serif"
          fontSize="22"
          fontWeight="400"
          fontStyle="italic"
          fill="currentColor"
        >
          &amp;
        </text>
        <text
          x="96"
          y="21"
          fontFamily="ui-serif, Georgia, serif"
          fontSize="20"
          fontWeight="500"
          letterSpacing="-0.01em"
          fill="currentColor"
        >
          Co
        </text>
      </svg>
    ),
  },
];

export function LogoBar() {
  return (
    <section
      aria-label="Companies that trust Lumio"
      className="border-y border-brand-800/10 bg-cream-50 py-14 dark:border-cream-100/10 dark:bg-brand-900 sm:py-20"
    >
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-center gap-2 text-center">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-brand-800/20 dark:bg-cream-100/20"
            />
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-800/60 dark:text-cream-100/60">
              Trusted by operators at
            </p>
          </div>

          <ul
            role="list"
            className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-10 lg:flex lg:flex-wrap lg:justify-between lg:gap-x-12"
          >
            {wordmarks.map(({ name, width, render }) => (
              <li
                key={name}
                title={name}
                className="flex h-7 items-center text-brand-800/55 transition-colors duration-200 hover:text-brand-800 dark:text-cream-100/55 dark:hover:text-cream-100"
              >
                <span className="sr-only">{name}</span>
                {render({
                  height: 24,
                  width,
                  className: "h-6 w-auto",
                  role: "img",
                  "aria-label": name,
                })}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
