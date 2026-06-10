/**
 * Central site configuration. Update `url` to your production domain
 * (e.g. your Cloudflare Pages domain or custom domain) before deploying —
 * it feeds metadata, Open Graph tags, the sitemap, robots.txt and JSON-LD.
 */
export const siteConfig = {
  name: "Lumio",
  tagline: "The analytics layer modern operators run on",
  description:
    "Lumio connects every tool your team already uses, then writes the one weekly memo your leadership actually reads — insights, anomalies, and next steps, no dashboard digging required.",
  url: "https://lumio-landing.pages.dev",
  ogImage: "https://lumio-landing.pages.dev/og.png",
  email: "hello@lumio.ai",
  twitter: "@lumioapp",
  keywords: [
    "AI analytics platform",
    "business intelligence",
    "automated reporting",
    "real-time analytics",
    "data-driven decisions",
    "AI insights",
    "data dashboards",
    "SaaS analytics",
  ],
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];
