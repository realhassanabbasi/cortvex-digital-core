import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { BookButton } from "./BookingModal";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const quickLinks = [
  ["Home", "/"], ["Services", "/services"], ["Work", "/work"], ["Process", "/process"],
  ["Pricing", "/pricing"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"],
] as const;

const serviceLinks = [
  "Web Development", "AI Automation", "Chatbots", "Voice Bots",
  "App Development", "SEO", "Marketing", "Social Media Handling",
];

export function Footer() {
  return (
    <footer className="border-t bg-surface mt-24">
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Logo className="text-lg" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Cortvex helps businesses design, build, automate, market, and scale their digital presence — from modern websites to AI systems.
            </p>
            <div className="mt-5">
              <BookButton className="rounded-full" />
            </div>
            <div className="mt-6 flex items-center gap-3 text-muted-foreground">
              <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="size-4" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="size-4" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="size-4" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-primary"><Github className="size-4" /></a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-muted-foreground hover:text-foreground">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>hello@cortvex.com</li>
              <li>Remote — Global</li>
              <li>Mon – Fri, 9:00 – 18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Cortvex. All rights reserved.</p>
          <p>Built with care · Premium digital systems</p>
        </div>
      </div>
    </footer>
  );
}
