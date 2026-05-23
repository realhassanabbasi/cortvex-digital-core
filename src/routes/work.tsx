import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { projects } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Cortvex" },
      { name: "description", content: "Selected case studies in websites, apps, AI automation, chatbots, SEO, marketing, and social media." },
      { property: "og:title", content: "Work — Cortvex" },
      { property: "og:description", content: "Selected work built for clarity, automation, and growth." },
    ],
  }),
  component: WorkPage,
});

const filters = ["All", "Websites", "AI Automation", "Chatbots", "Apps", "SEO", "Marketing", "Social Media", "Voice Bots"];

function WorkPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Selected work built for clarity, automation, and growth."
        subtitle="A snapshot of recent projects across websites, apps, AI systems, and growth campaigns."
      />

      <section className="container-x">
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                active === f ? "bg-primary text-primary-foreground border-primary" : "bg-white hover:border-primary/40",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <article key={p.slug} className="card-soft overflow-hidden group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-surface to-accent/25 relative">
                <div
                  className="absolute inset-6 rounded-xl bg-white border shadow-sm flex items-center justify-center"
                  style={{ transform: `rotate(${(i % 3 - 1) * 2}deg)` }}
                >
                  <span className="logo-mark text-primary/30 text-sm">CORTVEX</span>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</div>
                <h3 className="mt-1.5 font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.result}</p>
                <button className="mt-4 inline-flex items-center text-sm font-semibold text-primary gap-1">
                  View Case Study <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Case study layout sample */}
      <section className="container-x py-24">
        <div className="rounded-3xl border bg-surface p-8 md:p-12">
          <span className="eyebrow"><span className="dot" />Case study preview</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">How we ship a case study.</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 text-sm">
            {[
              { t: "Overview", d: "Quick context on the client, industry, and goal." },
              { t: "Problem", d: "What was broken, slow, or missing in their digital flow." },
              { t: "Solution", d: "The systems we designed and shipped to fix it." },
              { t: "Services used", d: "Web, design, AI automation, SEO — listed clearly." },
              { t: "Approach", d: "Tech stack, design system, automation logic." },
              { t: "Result", d: "Measurable outcomes after launch." },
            ].map((b) => (
              <div key={b.t} className="bg-white rounded-xl border p-5">
                <div className="font-semibold">{b.t}</div>
                <p className="text-muted-foreground mt-1">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
