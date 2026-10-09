# Cortvex Digital Core

A modern, premium digital-agency website for **Cortvex** — built with React, TanStack Start, shadcn/ui, and Tailwind CSS, deployed on Cloudflare Workers.

Cortvex helps businesses design, build, automate, market, and scale — through modern websites, AI automation, chatbots, voice bots, apps, SEO, marketing, and social media.

---

## ✨ Features

### Pages (9 routes)
- **Home (`/`)** — Hero, trusted-by tags, services preview, AI automation highlight, featured work, why-Cortvex, process overview, testimonials, pricing preview, FAQ, final CTA
- **Services (`/services`)** — Services overview grid with detailed per-service sections and anchor links
- **Work (`/work`)** — Portfolio with filter tabs, project cards, and a reusable case-study layout
- **Process (`/process`)** — Six-step vertical process timeline
- **Pricing (`/pricing`)** — Starter / Growth / Scale plans with a comparison table
- **About (`/about`)** — Mission, values, and team sections
- **Blog (`/blog`)** — Article listing (8 placeholder articles with category, excerpt, reading time)
- **Contact (`/contact`)** — Contact form (service, budget, timeline) with a Book-a-Meeting side card and FAQ
- **Book (`/book`)** — Dedicated booking page with 4 meeting-type cards and an embed placeholder

### Shared site components (`src/components/site/`)
| Component | Purpose |
|---|---|
| `Navbar.tsx` | Premium responsive navbar — shrinks and glassifies on scroll, animated mobile menu, Book a Meeting CTA |
| `Footer.tsx` | Footer with quick links, services, contact, and socials |
| `BookingModal.tsx` | Global booking provider, modal with 4 meeting types, reusable `BookButton` |
| `PageHeader.tsx` | Reusable page header (eyebrow, headline, subtitle) |
| `CtaBanner.tsx` | Reusable primary call-to-action banner used across pages |
| `HeroVisual.tsx` | Layered hero visual — website mockup, AI workflow nodes, chatbot, voice waveform, analytics, social cards |
| `Logo.tsx` | Reusable Cortvex wordmark in Mokoto-style typography |

The root route (`src/routes/__root.tsx`) also ships branded **404** and error states, full meta/OG tags, and a global toast system.

### Design system
- Primary brand color `#1800AD` with an electric-cyan accent
- Typography: Inter + Plus Jakarta Sans + Orbitron (Mokoto-style logo)
- Utility classes: `eyebrow`, `card-soft`, `grid-bg`, custom shadows and gradients
- Animations: fade, float, and wave keyframes
- All site copy centralized in `src/lib/site-data.ts` (services, process steps, projects, testimonials, FAQs)

---

## 🛠 Tech stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR, file-based routing) |
| UI library | React 19 |
| Routing | TanStack Router (file routes in `src/routes/`) |
| Data | TanStack React Query |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Components | shadcn/ui (Radix primitives) + Lucide icons |
| Forms | React Hook Form + Zod validation |
| Build | Vite 7 |
| Package manager | Bun |
| Deployment | Cloudflare Workers (`wrangler.jsonc`, `@cloudflare/vite-plugin`) |
| Config | TypeScript, ESLint, Prettier |

---

## 🚀 Getting started

**Prerequisites:** [Bun](https://bun.sh) installed.

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev
```

Open the app in your browser and edit `src/routes/` to see changes hot-reload.

### Build & preview

```bash
bun run build      # production build
bun run preview    # preview the production build locally
```

### Deploy to Cloudflare Workers

```bash
bun run build
npx wrangler deploy
```

### Code quality

```bash
bun run lint      # ESLint
bun run format    # Prettier
```

---

## 📁 Project structure

```
cortvex-digital-core/
├── src/
│   ├── routes/              # File-based pages: __root, index, about, blog,
│   │                        # book, contact, pricing, process, services, work
│   ├── components/
│   │   ├── site/            # Agency components: Navbar, Footer, BookingModal,
│   │   │                    # PageHeader, CtaBanner, HeroVisual, Logo
│   │   └── ui/              # shadcn/ui primitives (Radix-based)
│   ├── lib/
│   │   └── site-data.ts     # Centralized content: services, steps, projects,
│   │                        # testimonials, FAQs
│   └── styles.css           # Design tokens, utilities, keyframes
├── changelog.md             # Build history and component inventory
├── wrangler.jsonc           # Cloudflare Workers deploy config
├── components.json          # shadcn/ui config
├── vite.config.ts
└── package.json
```

---

## 🗺 Notes & roadmap

- The booking flow currently uses a placeholder link — connect a real **Cal.com** or Calendly embed in `src/components/site/BookingModal.tsx` and `src/routes/book.tsx`.
- Blog cards are static placeholders; article detail routes (`/blog/$slug`) are the natural next step.
- The contact form collects fields but has no backend endpoint yet.
- Team section on `/about` uses placeholder profiles — swap in real team data via `src/lib/site-data.ts`.

---

## 👤 Author

**Hassan Abbasi** — AI Engineer & Graphic Designer
- GitHub: [@hassanabbasi313](https://github.com/hassanabbasi313)

---

*Built with TanStack Start · React 19 · shadcn/ui · Cloudflare Workers*
