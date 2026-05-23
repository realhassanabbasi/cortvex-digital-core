import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { BookButton } from "@/components/site/BookingModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cortvex" },
      { name: "description", content: "Tell us what you want to build. Cortvex helps businesses ship websites, apps, and AI systems." },
      { property: "og:title", content: "Contact — Cortvex" },
      { property: "og:description", content: "Tell us what you want to build." },
    ],
  }),
  component: ContactPage,
});

const services = ["Web Development", "Web Design", "AI Automation", "Chatbot", "Voice Bot", "App Development", "SEO", "Marketing", "Social Media Handling", "Not sure yet"];
const budgets = ["Under $500", "$500 - $1,500", "$1,500 - $3,000", "$3,000 - $5,000", "$5,000+", "Not sure yet"];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll reply within one business day.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you want to build."
        subtitle="Share a few details and we'll come back with the smartest path forward."
      />

      <section className="container-x grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <form onSubmit={onSubmit} className="card-soft p-7 lg:col-span-2 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5"><Label>Name</Label><Input required placeholder="Your name" /></div>
            <div className="space-y-1.5"><Label>Email</Label><Input required type="email" placeholder="you@company.com" /></div>
            <div className="space-y-1.5"><Label>Phone</Label><Input placeholder="+1 555 000 0000" /></div>
            <div className="space-y-1.5"><Label>Company</Label><Input placeholder="Company name" /></div>
            <div className="space-y-1.5">
              <Label>Service interested in</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>{services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Budget range</Label>
              <Select><SelectTrigger><SelectValue placeholder="Select a budget" /></SelectTrigger>
                <SelectContent>{budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5 sm:col-span-2"><Label>Project timeline</Label><Input placeholder="e.g. Start in 2 weeks, launch in 6 weeks" /></div>
          </div>
          <div className="space-y-1.5"><Label>Message</Label><Textarea rows={5} placeholder="Tell us about your project..." /></div>
          <Button type="submit" size="lg" className="rounded-full" disabled={submitting}>{submitting ? "Sending..." : "Send message"}</Button>
        </form>

        {/* Side */}
        <div className="space-y-5">
          <div className="card-soft p-6 bg-gradient-to-br from-primary to-[#2a14d6] text-primary-foreground border-0">
            <Calendar className="size-6" />
            <h3 className="mt-3 text-xl font-bold">Prefer to talk directly?</h3>
            <p className="text-sm text-primary-foreground/85 mt-1.5">Book a 15-minute discovery call. We'll come prepared.</p>
            <BookButton className="mt-5 w-full rounded-full bg-white text-primary hover:bg-white/90" />
            <p className="text-[11px] text-primary-foreground/70 mt-3">Cal.com / Calendly integration placeholder.</p>
          </div>

          <div className="card-soft p-6">
            <h3 className="font-semibold mb-4">Reach us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5"><Mail className="size-4 text-primary" /> hello@cortvex.com</li>
              <li className="flex items-center gap-2.5"><Phone className="size-4 text-primary" /> +1 (555) 010-0123</li>
              <li className="flex items-center gap-2.5"><MapPin className="size-4 text-primary" /> Remote — Global</li>
            </ul>
            <div className="mt-5 pt-5 border-t">
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Social</h4>
              <div className="mt-3 flex gap-3 text-sm">
                <a href="#" className="hover:text-primary">Twitter</a>
                <a href="#" className="hover:text-primary">LinkedIn</a>
                <a href="#" className="hover:text-primary">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="card-soft px-6">
          {faqs.map((f, i) => (
            <AccordionItem value={`f-${i}`} key={f.q}>
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
