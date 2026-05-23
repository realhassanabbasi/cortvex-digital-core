import { createContext, useContext, useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Sparkles, TrendingUp } from "lucide-react";

type Ctx = { open: () => void; close: () => void };
const BookingCtx = createContext<Ctx>({ open: () => {}, close: () => {} });

export function useBooking() { return useContext(BookingCtx); }

const meetings = [
  { icon: Phone, title: "Discovery Call", desc: "15 min — understand your goals and scope." },
  { icon: Calendar, title: "Website / App Project", desc: "30 min — discuss build, design, timeline." },
  { icon: Sparkles, title: "AI Automation", desc: "30 min — map workflows and integrations." },
  { icon: TrendingUp, title: "Marketing & SEO", desc: "30 min — plan growth and visibility." },
];

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BookingCtx.Provider value={{ open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">Book a meeting with Cortvex</DialogTitle>
            <DialogDescription>
              Pick a meeting type. We'll connect you with the right team.
            </DialogDescription>
          </DialogHeader>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {meetings.map((m) => (
              <button
                key={m.title}
                className="card-soft p-4 text-left"
                onClick={() => window.open("https://cal.com/", "_blank")}
              >
                <div className="flex items-center gap-2">
                  <div className="size-9 rounded-lg bg-primary/10 text-primary inline-flex items-center justify-center">
                    <m.icon className="size-4" />
                  </div>
                  <span className="font-semibold">{m.title}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{m.desc}</p>
              </button>
            ))}
          </div>
          <div className="rounded-xl border bg-surface p-4 mt-3">
            <p className="text-sm text-muted-foreground">
              Booking integration (Cal.com / Calendly) will be connected here.
            </p>
            <Button className="mt-3 w-full" onClick={() => window.open("https://cal.com/", "_blank")}>
              Open placeholder booking link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </BookingCtx.Provider>
  );
}

export function BookButton({
  variant = "default",
  size = "default",
  className = "",
  children = "Book a Meeting",
}: {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "default" | "lg";
  className?: string;
  children?: ReactNode;
}) {
  const { open } = useBooking();
  return (
    <Button variant={variant} size={size} className={className} onClick={open}>
      {children}
    </Button>
  );
}
