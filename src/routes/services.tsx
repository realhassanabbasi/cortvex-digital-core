import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { BookButton } from "@/components/site/BookingModal";
import { services } from "@/lib/site-data";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cortvex" },
      { name: "description", content: "Web, design, AI automation, chatbots, voice bots, apps, SEO, marketing, and social media — built for growth." },
      { property: "og:title", content: "Services — Cortvex" },
      { property: "og:description", content: "Digital services built for modern business growth." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Digital services built for modern business growth."
        subtitle="From websites and apps to AI automation, chatbots, SEO, marketing, and social media — Cortvex gives your business the digital systems it needs to grow."
      >
        <BookButton size="lg" className="rounded-full" />
      </PageHeader>

      {/* Service grid */}
      <section className="container-x py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <a href={`#${s.slug}`} key={s.slug} className="card-soft p-6 block">
              <div className="size-11 rounded-xl bg-primary/8 text-primary inline-flex items-center justify-center"><s.icon className="size-5" /></div>
              <h3 className="mt-5 font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{s.short}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                {s.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="size-3.5 text-primary" />{f}</li>
                ))}
              </ul>
              <BookButton className="mt-5 w-full rounded-full" size="sm">Start Project</BookButton>
            </a>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      <section className="container-x py-16 space-y-20">
        {services.map((s, i) => (
          <div key={s.slug} id={s.slug} className="grid lg:grid-cols-12 gap-10 items-start scroll-mt-32">
            <div className="lg:col-span-5">
              <span className="eyebrow"><span className="dot" />0{i + 1}</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.short}</p>
              <BookButton className="mt-6 rounded-full" />
            </div>
            <div className="lg:col-span-7">
              <div className="card-soft p-7 bg-surface">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1 size-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <CtaBanner />
    </>
  );
}
