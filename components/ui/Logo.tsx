import { siteConfig } from "@/lib/site";

type LogoProps = {
  /** Render light text for use on dark backgrounds (e.g. the footer). */
  variant?: "default" | "light";
  className?: string;
};

/**
 * Lumio wordmark: a gradient "spark" glyph + the product name.
 * Pure SVG/CSS so it stays crisp at any size with zero network cost.
 */
export function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="28" height="28" rx="8" fill="url(#lumio-logo-gradient)" />
        <path
          d="M9 8.5v11h10"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="19" cy="9.5" r="2" fill="white" />
        <defs>
          <linearGradient
            id="lumio-logo-gradient"
            x1="0"
            y1="0"
            x2="28"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0E3B2E" />
            <stop offset="1" stopColor="#D4A24C" />
          </linearGradient>
        </defs>
      </svg>
      <span
        className={`font-display text-xl font-medium tracking-tighter ${
          variant === "light" ? "text-cream-50" : "text-brand-800 dark:text-cream-100"
        }`}
      >
        {siteConfig.name}
      </span>
    </span>
  );
}
