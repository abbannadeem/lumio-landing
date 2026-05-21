import { Twitter, Linkedin, Github } from "lucide-react";
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
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#cta" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Help center", href: "#faq" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookies", href: "#" },
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
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              AI-powered analytics that turns raw business data into clear,
              automated decisions.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold text-white">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for teams that decide with data.
          </p>
        </div>
      </div>
    </footer>
  );
}
