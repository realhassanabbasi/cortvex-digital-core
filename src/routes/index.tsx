import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookButton } from "@/components/site/BookingModal";
import { HeroVisual } from "@/components/site/HeroVisual";
import { CtaBanner } from "@/components/site/CtaBanner";
import { services, processSteps, testimonials, faqs, projects } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cortvex — Build smarter websites, apps, and AI systems" },
      { name: "description", content: "Cortvex helps businesses design, build, automate, market, and scale their digital presence." },
    ],
  }),
  component: Home,
});

const trustTags = ["Web Development", "AI Automation", "Chatbots", "Voice Bots", "App Development", "SEO", "Marketing", "Social Media"];

const aiFeatures = [
  { title: "Lead capture automation", desc: "Auto-route leads from forms, ads, and chat into your CRM with enrichment." },
  { title: "CRM workflow automation", desc: "Sync deals, tasks, and updates across tools without manual work." },
  { title: "AI chatbot support", desc: "24/7 chat that resolves common questions and qualifies prospects." },
  { title: "Voice bot appointments", desc: "Inbound/outbound voice agents that book and confirm meetings." },
  { title: "Marketing automation", desc: "Email, SMS, and retargeting flows that run themselves." },
  { title: "Custom internal tools", desc: "Lightweight apps for ops, sales, and reporting — built fast." },
];

const why = [
  { title: "Strategy before design", desc: "We start with clarity — goals, audience, scope. Pixels come after." },
  { title: "Clean UI, scalable code", desc: "Premium interfaces backed by modern, maintainable engineering." },
  { title: "AI-first thinking", desc: "We automate the busywork so your team focuses on what matters." },
  { title: "Growth-focused execution", desc: "Every build is measured against business outcomes, not vanity metrics." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-surface)" }}
        />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="eyebrow"><span className="dot" />Digital systems for modern business</span>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
              Build smarter websites, apps, and <span className="text-primary">AI systems</span> for your business.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Cortvex helps businesses design, build, automate, market, and scale their digital presence through modern websites, AI automation, chatbots, apps, SEO, marketing, and social media solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton size="lg" className="rounded-full" />
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/services">Explore Services <ArrowRight className="size-4 ml-1" /></Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <span key={i} className="size-7 rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-primary" />
                ))}
              </div>
              <span>Trusted by founders & teams shipping fast</span>
            </div>
          </div>
          <div className="hidden lg:block"><HeroVisual /></div>
        </div>
      </section>

      {/* TRUSTED TAGS */}
      <section className="border-y bg-surface/60">
        <div className="container-x py-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">What we ship</span>
          {trustTags.map((t) => (
            <span key={t} className="text-sm font-medium text-foreground/70">{t}</span>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow"><span className="dot" />Services</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">Everything your digital presence needs.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            All services <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s) => (
            <Link to="/services" key={s.slug} className="card-soft p-6 group block">
              <div className="size-11 rounded-xl bg-primary/8 text-primary inline-flex items-center justify-center"><s.icon className="size-5" /></div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* AI AUTOMATION HIGHLIGHT */}
      <section className="container-x py-20">
        <div className="rounded-3xl border bg-surface p-8 md:p-14">
          <div className="max-w-3xl">
            <span className="eyebrow"><Sparkles className="size-3 text-primary" />AI Automation</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Automate the work that slows your business down.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Repetitive tasks, manual handoffs, missed leads. We design AI systems that do the busywork — so your team ships outcomes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {aiFeatures.map((f) => (
              <div key={f.title} className="card-soft p-5 bg-white">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow"><span className="dot" />Selected work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Projects built for clarity and growth.</h2>
          </div>
          <Link to="/work" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">View all <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((p, i) => (
            <article key={p.slug} className="card-soft overflow-hidden group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-surface to-accent/20 relative">
                <div className="absolute inset-6 rounded-xl bg-white border shadow-sm" style={{ transform: `rotate(${(i % 3 - 1) * 1.5}deg)` }} />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</div>
                <h3 className="mt-1.5 text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.result}</p>
                <Link to="/work" className="mt-4 inline-flex items-center text-sm font-semibold text-primary gap-1">View Case Study <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CORTVEX */}
      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow"><span className="dot" />Why Cortvex</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Built like a product team. Run like a partner.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {why.map((w) => (
            <div key={w.title} className="card-soft p-6">
              <Check className="size-5 text-primary" />
              <h3 className="mt-4 font-semibold">{w.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS PREVIEW */}
      <section className="container-x py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow"><span className="dot" />Process</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Simple process. Premium execution.</h2>
          </div>
          <Link to="/process" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">See full process <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((s) => (
            <div key={s.n} className="card-soft p-6">
              <span className="text-xs font-bold text-primary">{s.n}</span>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow"><span className="dot" />Testimonials</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Teams that shipped with Cortvex.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-soft p-6">
              <blockquote className="text-foreground leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="size-10 rounded-full bg-gradient-to-br from-primary/70 to-primary" />
                <span>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow"><span className="dot" />Pricing</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Plans that grow with you.</h2>
          <p className="mt-4 text-muted-foreground">Three packages built around clear outcomes. Start small or scale fast.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { name: "Starter", price: "$1,500", desc: "Website essentials for small businesses." },
            { name: "Growth", price: "$3,500", desc: "Website + SEO + automation + marketing.", featured: true },
            { name: "Scale", price: "$7,500+", desc: "Custom apps, AI systems, and full growth support." },
          ].map((p) => (
            <div key={p.name} className={`card-soft p-6 ${p.featured ? "ring-2 ring-primary" : ""}`}>
              {p.featured && <span className="text-xs font-bold uppercase tracking-wider text-primary">Recommended</span>}
              <h3 className="text-xl font-bold mt-1">{p.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{p.price}<span className="text-sm font-medium text-muted-foreground">/project</span></div>
              <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              <Link to="/pricing" className="mt-5 block text-center rounded-full border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary">View details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow"><span className="dot" />FAQ</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Questions, answered.</h2>
            <p className="mt-4 text-muted-foreground">Still have something specific? Book a free discovery call.</p>
            <BookButton className="mt-6 rounded-full" />
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem value={`f-${i}`} key={f.q}>
                <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
