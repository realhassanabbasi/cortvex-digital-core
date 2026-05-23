import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cortvex" },
      { name: "description", content: "Cortvex builds digital systems that help businesses move faster — websites, apps, AI, and growth." },
      { property: "og:title", content: "About — Cortvex" },
      { property: "og:description", content: "Cortvex builds digital systems that help businesses move faster." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Clear strategy", d: "Every project starts with sharp clarity on goals and scope." },
  { t: "Clean design", d: "Premium UI that feels confident and effortless to use." },
  { t: "Reliable development", d: "Modern stacks, tested, documented, and easy to evolve." },
  { t: "Smart automation", d: "We replace busywork with systems your team trusts." },
  { t: "Honest communication", d: "No fluff, no hidden surprises — direct and on-time." },
  { t: "Long-term growth", d: "We build for outcomes after launch, not just before it." },
];

const team = [
  { name: "Alex Rivera", role: "Founder & Strategy" },
  { name: "Mira Khan", role: "Design Lead" },
  { name: "Jonas Field", role: "Engineering Lead" },
  { name: "Priya Sen", role: "AI & Automation" },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Cortvex builds digital systems that help businesses move faster."
        subtitle="We're a focused team of designers, engineers, and automation specialists shipping premium digital work for modern businesses."
      />

      {/* Mission */}
      <section className="container-x py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            { t: "Mission", d: "Help businesses use design, development, automation, and marketing to grow with clarity." },
            { t: "What we build", d: "Websites, apps, AI workflows, chatbots, voice bots, and growth systems — end to end." },
            { t: "Why Cortvex is different", d: "A senior-only team. Strategy-first, design-led, engineering-strong, and automation-native." },
          ].map((b) => (
            <div key={b.t} className="card-soft p-7">
              <h2 className="text-2xl font-bold">{b.t}</h2>
              <p className="text-muted-foreground mt-3">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-16">
        <span className="eyebrow"><span className="dot" />Values</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">What we stand for.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {values.map((v) => (
            <div key={v.t} className="card-soft p-6">
              <h3 className="font-semibold">{v.t}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-16">
        <span className="eyebrow"><span className="dot" />Team</span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">The people behind the work.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {team.map((m) => (
            <div key={m.name} className="card-soft p-5 text-center">
              <div className="size-20 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-primary" />
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
