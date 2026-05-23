import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { BookButton } from "@/components/site/BookingModal";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Cortvex" },
      { name: "description", content: "Three packages — Starter, Growth, and Scale — built around clear outcomes." },
      { property: "og:title", content: "Pricing — Cortvex" },
      { property: "og:description", content: "Transparent plans for websites, AI systems, and growth support." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter", price: "$1,500", desc: "Small businesses that need a website or basic digital presence.",
    features: ["Website design", "Basic web development", "Responsive pages", "Contact form", "Basic SEO setup", "Launch support"],
  },
  {
    name: "Growth", price: "$3,500", desc: "Businesses that need website, SEO, automation, and marketing support.", featured: true,
    features: ["Everything in Starter", "Advanced website sections", "SEO optimization", "AI automation setup", "Chatbot setup", "Marketing support", "Social media starter plan"],
  },
  {
    name: "Scale", price: "$7,500+", desc: "Companies needing custom apps, AI systems, voice bots, and full growth.",
    features: ["Everything in Growth", "Custom app development", "Advanced AI automation", "Voice bot setup", "CRM/workflow integrations", "Monthly growth support", "Custom reporting dashboard"],
  },
];

const compare: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "Website design & development", values: [true, true, true] },
  { feature: "Responsive & accessibility", values: [true, true, true] },
  { feature: "SEO setup", values: ["Basic", "Advanced", "Advanced + monthly"] },
  { feature: "AI automation", values: [false, true, "Advanced"] },
  { feature: "Chatbot setup", values: [false, true, true] },
  { feature: "Voice bot", values: [false, false, true] },
  { feature: "App development", values: [false, false, true] },
  { feature: "Social media management", values: [false, "Starter", "Full"] },
  { feature: "Monthly growth support", values: [false, false, true] },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="size-5 text-primary mx-auto" />;
  if (v === false) return <X className="size-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm">{v}</span>;
}

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Plans built around outcomes, not hours."
        subtitle="Start small or scale fast. Every plan includes strategy, design, and direct access to the team building your project."
      />

      <section className="container-x">
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div key={p.name} className={`card-soft p-7 relative ${p.featured ? "ring-2 ring-primary" : ""}`}>
              {p.featured && (
                <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">Recommended</span>
              )}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-5 text-4xl font-extrabold">{p.price}<span className="text-base font-medium text-muted-foreground">/project</span></div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"><Check className="size-4 text-primary mt-0.5" />{f}</li>
                ))}
              </ul>
              <BookButton className="mt-7 w-full rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="container-x py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Compare plans</h2>
        <div className="card-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface border-b">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {plans.map((p) => (<th key={p.name} className="p-4 font-semibold text-center">{p.name}</th>))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.feature} className="border-b last:border-0">
                    <td className="p-4 font-medium">{row.feature}</td>
                    {row.values.map((v, i) => (<td key={i} className="p-4 text-center"><Cell v={v} /></td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner title="Not sure which plan fits?" subtitle="Book a free discovery call — we'll recommend the right scope for your goals." />
    </>
  );
}
