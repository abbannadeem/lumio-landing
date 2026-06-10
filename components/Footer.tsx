"use client";

import { Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site";

type Column = { title: string; links: { label: string; href: string }[] };

const columns: Column[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API reference", href: "/docs/api" },
      { label: "Help center", href: "#faq" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
      { label: "Cookies", href: "/legal/cookies" },
    ],
  },
];

const socials = [
  { label: "Lumio on Twitter", href: "https://twitter.com/lumioapp", icon: Twitter },
  {
    label: "Lumio on LinkedIn",
    href: "https://www.linkedin.com/company/lumio",
    icon: Linkedin,
  },
  { label: "Lumio on GitHub", href: "https://github.com/lumio", icon: Github },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-800 text-cream-200 dark:bg-brand-900">
      {/* Marble texture wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen"
      >
        <img
          src="https://images.unsplash.com/featured/1600x400?marble,texture,cream?auto=format&fit=crop&w=1200&q=80"
          alt=""
          loading="lazy"
          decoding="async"
          width={1600}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Ochre kiss */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent-400/15 blur-3xl"
      />

      <div className="container-page relative py-20">
        {/* Editorial newsletter row */}
        <div className="grid gap-10 border-b border-cream-100/10 pb-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="eyebrow border-accent-300/30 bg-accent-400/10 text-accent-200">
              The Monday Memo
            </span>
            <h2 className="mt-5 font-display text-3xl font-medium tracking-tighter text-cream-50 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
              One sharp <em className="italic text-accent-300">insight</em> in
              your inbox.
              <br className="hidden sm:block" />
              Every Monday. No dashboards.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream-200/80">
              A short read for operators who decide with data. Anomalies,
              benchmarks, and the one question to ask your team this week.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pt-12">
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Subscribe to the Monday Memo"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-cream-100/15 bg-brand-900/40 px-4 py-3 text-sm text-cream-50 placeholder:text-cream-200/40 focus:border-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400/60 focus:ring-offset-2 focus:ring-offset-brand-800"
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-400 px-5 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-200 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
              >
                Subscribe
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </form>
            <p className="mt-3 text-xs text-cream-200/60">
              No spam. Unsubscribe in one click. Read by 12,400+ operators.
            </p>
          </div>
        </div>

        {/* Brand + link columns */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-5 font-display text-lg italic leading-snug text-cream-100">
              The analytics layer modern operators run on.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/70">
              Connect every tool. Read one memo. Make the call.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-cream-100/10 bg-brand-900/40 text-cream-200/80 transition-all hover:-translate-y-0.5 hover:border-accent-300/40 hover:bg-accent-400/10 hover:text-accent-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-800"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-300">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-sm text-cream-200/80 transition-colors hover:text-cream-50 focus:outline-none focus-visible:text-cream-50"
                    >
                      <span className="relative">
                        {link.label}
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-300 transition-all duration-300 group-hover:w-full"
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Status + colophon */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-cream-100/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-sm text-cream-200/60">
              &copy; 2026 {siteConfig.name}. All rights reserved.
            </p>
            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-cream-100/15 sm:block"
            />
            <a
              href="https://status.lumio.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cream-200/70 transition-colors hover:text-cream-50"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              All systems operational
            </a>
          </div>
          <p className="font-display text-sm italic text-cream-200/60">
            Built for the people making the call.
          </p>
        </div>
      </div>

      {/* Oversized brand mark */}
      <div
        aria-hidden="true"
        className="container-page relative -mb-6 select-none overflow-hidden pt-6 sm:-mb-10 lg:-mb-16"
      >
        <p className="bg-gradient-to-b from-cream-50/[0.06] to-transparent bg-clip-text font-display text-[18vw] font-medium leading-none tracking-tighter text-transparent">
          Lumio
        </p>
      </div>
    </footer>
  );
}
