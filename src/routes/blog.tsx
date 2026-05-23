import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources — Cortvex" },
      { name: "description", content: "Insights on websites, AI automation, SEO, and digital growth." },
      { property: "og:title", content: "Blog — Cortvex" },
      { property: "og:description", content: "Insights on websites, AI automation, SEO, and digital growth." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { cat: "AI Automation", title: "How AI automation helps small businesses save time", excerpt: "Where to start automating without breaking your existing workflow.", read: "6 min" },
  { cat: "Web", title: "Why every business needs a modern website", excerpt: "Speed, trust, and conversion — what a modern site actually delivers.", read: "5 min" },
  { cat: "Bots", title: "Chatbots vs voice bots: which one should you use?", excerpt: "A practical comparison for support, sales, and bookings.", read: "7 min" },
  { cat: "SEO", title: "SEO basics for service businesses", excerpt: "The first five things to fix to start showing up in search.", read: "8 min" },
  { cat: "Social", title: "How social media handling builds brand trust", excerpt: "A consistent presence still wins — here's how to design one.", read: "5 min" },
  { cat: "Design", title: "What makes a high-converting landing page?", excerpt: "Anatomy of a landing page that turns visitors into customers.", read: "6 min" },
  { cat: "AI", title: "How to prepare your business for AI automation", excerpt: "A short checklist before rolling out AI into your operations.", read: "4 min" },
  { cat: "Design", title: "Website design mistakes that hurt conversions", excerpt: "Common pitfalls that silently drop your conversion rate.", read: "6 min" },
];

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog & Resources"
        title="Insights on websites, AI automation, SEO, and digital growth."
        subtitle="Short, practical articles from the Cortvex team."
      />

      <section className="container-x">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <article key={p.title} className="card-soft overflow-hidden group flex flex-col">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-surface to-accent/20 relative">
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-white border rounded-full px-2.5 py-1">{p.cat}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{p.read} read</span>
                  <button className="inline-flex items-center gap-1 font-semibold text-primary">
                    Read Article <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
