# Lumio — SaaS Landing Page

A polished, production-ready marketing landing page for **Lumio**, a fictional AI-powered analytics platform. Built as a portfolio piece to demonstrate modern front-end, animation, and technical-SEO work.

> Turn raw data into decisions — automatically.

## Tech stack

- **[Next.js 15](https://nextjs.org/)** (App Router) with **static export** (`output: 'export'`)
- **TypeScript** (strict)
- **Tailwind CSS** for styling (single indigo → violet accent theme)
- **Framer Motion** for scroll and entrance animations
- **lucide-react** for icons
- `next/font` for zero-layout-shift, self-hosted fonts (Inter + Sora)

No backend — the site builds to fully static files in `./out`, ideal for Cloudflare Pages, Netlify, GitHub Pages, or any static host.

## Features

- Fully responsive, mobile-first layout
- Sticky navbar with an accessible, keyboard-navigable mobile menu
- Hero with a CSS/SVG dashboard mockup (no images → crisp + fast)
- Sections: Features, How it works, Pricing, Testimonials, FAQ accordion, CTA, Footer
- Respects `prefers-reduced-motion`
- **Technical + AI SEO**: complete metadata, Open Graph + Twitter cards, JSON-LD (`SoftwareApplication` + `Organization`), `sitemap.xml`, `robots.txt`, a build-time generated OG image, and an [`llms.txt`](public/llms.txt) for AI search engines
- Semantic HTML5 with a clean `h1 → h2 → h3` hierarchy and descriptive labels

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)

```bash
npm run build      # outputs static files to ./out
```

## Project structure

```
app/
  layout.tsx            # metadata, fonts, JSON-LD structured data
  page.tsx              # assembles all sections
  globals.css           # Tailwind layers + design tokens
  sitemap.ts            # static sitemap.xml
  robots.ts             # static robots.txt
  opengraph-image.tsx   # OG/Twitter image generated at build time
components/              # Navbar, Hero, Features, Pricing, FAQ, etc.
  ui/                    # Logo, Reveal (animation), shared bits
lib/site.ts             # central site config (name, url, keywords)
public/                 # favicon, web manifest, llms.txt
```

## Deployment — Cloudflare Pages

| Setting              | Value           |
| -------------------- | --------------- |
| Framework preset     | **Next.js (Static HTML Export)** |
| Build command        | `npm run build` |
| Build output directory | `out`         |

Before deploying, set your production domain in [`lib/site.ts`](lib/site.ts) (`siteConfig.url`) so metadata, the sitemap, and JSON-LD use absolute URLs.

---

© 2026 Lumio. Fictional product built for portfolio demonstration.
