import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { BookButton } from "@/components/site/BookingModal";
import { Calendar, Phone, Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Meeting — Cortvex" },
      { name: "description", content: "Book a meeting with Cortvex — discovery, project, AI automation, or marketing calls." },
      { property: "og:title", content: "Book a Meeting — Cortvex" },
      { property: "og:description", content: "Pick a meeting type and book a time that works for you." },
    ],
  }),
  component: BookPage,
});

const meetings = [
  { icon: Phone, title: "Discovery Call", desc: "15 min — understand your goals, scope, and the smartest next step." },
  { icon: Calendar, title: "Website / App Project Call", desc: "30 min — discuss your build, design needs, and timeline." },
  { icon: Sparkles, title: "AI Automation Call", desc: "30 min — map workflows, tools, and integrations." },
  { icon: TrendingUp, title: "Marketing & SEO Call", desc: "30 min — plan growth, visibility, and content." },
];

function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title="Book a meeting with Cortvex."
        subtitle="Choose the call type that fits — we'll connect you with the right person on the team."
      />

      <section className="container-x">
        <div className="grid sm:grid-cols-2 gap-5">
          {meetings.map((m) => (
            <div key={m.title} className="card-soft p-7">
              <div className="size-12 rounded-xl bg-primary/10 text-primary inline-flex items-center justify-center"><m.icon className="size-5" /></div>
              <h3 className="mt-5 font-semibold text-lg">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{m.desc}</p>
              <BookButton className="mt-5 rounded-full" />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border bg-surface p-8 md:p-12 text-center">
          <span className="eyebrow"><span className="dot" />Embed</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Booking embed area</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Cal.com or Calendly will be embedded here. For now, use the button below to open the placeholder booking link.</p>
          <BookButton className="mt-6 rounded-full" />
          <p className="text-xs text-muted-foreground mt-4">Booking integration will be connected later.</p>
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}
