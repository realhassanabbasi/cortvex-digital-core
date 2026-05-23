import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { BookButton } from "./BookingModal";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className={cn("transition-all duration-500 ease-out pointer-events-auto", scrolled ? "pt-3" : "pt-5")}>
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-out",
            scrolled
              ? "max-w-5xl px-4 py-2.5 rounded-full bg-white/85 backdrop-blur-xl border border-border shadow-[0_8px_30px_-12px_rgba(24,0,173,0.18)]"
              : "max-w-7xl px-6 py-3.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40",
          )}
        >
          <Logo className={cn("transition-all", scrolled ? "text-base" : "text-lg")} />

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                    active ? "text-primary bg-primary/8" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <BookButton size={scrolled ? "sm" : "default"} className="hidden sm:inline-flex rounded-full" />
            <button
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-full border bg-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden mx-4 mt-2 overflow-hidden transition-all duration-300 ease-out",
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="rounded-2xl border bg-white/95 backdrop-blur-xl shadow-lg p-3">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "block px-3 py-2.5 rounded-xl text-sm font-medium",
                    active ? "text-primary bg-primary/8" : "text-foreground hover:bg-surface",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <BookButton className="w-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
