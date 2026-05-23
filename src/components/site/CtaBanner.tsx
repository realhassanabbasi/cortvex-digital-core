import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { BookButton } from "./BookingModal";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Ready to build your next digital system?",
  subtitle = "Book a free discovery call. We'll map out your project and the smartest way to ship it.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-primary to-[#2a14d6] text-primary-foreground p-10 md:p-16">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
          <p className="mt-4 text-primary-foreground/85 text-lg">{subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <BookButton className="rounded-full bg-white text-primary hover:bg-white/90" />
            <Button asChild variant="outline" className="rounded-full bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white">
              <Link to="/services">View Services <ArrowRight className="size-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
