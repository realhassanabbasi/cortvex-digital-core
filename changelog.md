# Changelog

## Cortvex website — initial build

### Design system
- **src/styles.css** — New design tokens (primary #1800AD, electric-cyan accent), Inter + Plus Jakarta Sans + Orbitron (Mokoto-style logo), eyebrow/card-soft/grid-bg utility components, premium shadows and gradients, fade/float/wave keyframes.

### Shell & shared components
- **src/routes/__root.tsx** — Adds Navbar, Footer, BookingProvider wrapper; updated meta tags for Cortvex; primary-branded 404 + error states.
- **src/components/site/Logo.tsx** — Reusable Cortvex wordmark in Mokoto-style typography.
- **src/components/site/Navbar.tsx** — Premium responsive navbar that shrinks/glassifies on scroll, animated mobile menu, Book a Meeting CTA.
- **src/components/site/Footer.tsx** — Premium footer with quick links, services, contact, socials.
- **src/components/site/BookingModal.tsx** — Global booking provider, modal with 4 meeting types, reusable `BookButton` component, Cal.com placeholder.
- **src/components/site/PageHeader.tsx** — Reusable page header with eyebrow, headline, subtitle.
- **src/components/site/CtaBanner.tsx** — Reusable primary CTA banner used across pages.
- **src/components/site/HeroVisual.tsx** — Layered hero visual: website mockup, AI workflow nodes, chatbot, voice waveform, analytics, social cards.
- **src/lib/site-data.ts** — Centralized data for services, process steps, projects, testimonials, FAQs.

### Pages
- **src/routes/index.tsx** — Home: hero, trusted-by tags, services preview, AI automation highlight, featured work, why-Cortvex, process overview, testimonials, pricing preview, FAQ, final CTA.
- **src/routes/services.tsx** — Services overview grid + detailed sections per service with anchor links.
- **src/routes/work.tsx** — Portfolio with filter tabs, project cards, reusable case-study layout.
- **src/routes/process.tsx** — Six-step vertical process timeline.
- **src/routes/pricing.tsx** — Starter / Growth / Scale plans + comparison table.
- **src/routes/about.tsx** — Mission, values, team placeholders.
- **src/routes/blog.tsx** — 8 placeholder articles with category, excerpt, reading time.
- **src/routes/contact.tsx** — Contact form (service, budget, timeline), Book-a-Meeting side card, FAQ.
- **src/routes/book.tsx** — Dedicated booking page with 4 meeting type cards and embed placeholder.

### Why
- Build a complete premium digital-agency website for Cortvex with consistent design tokens, Mokoto-style logo, white/clean layout, primary #1800AD CTAs, and Book-a-Meeting flow across every surface.
