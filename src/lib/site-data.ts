import {
  Code, Palette, Sparkles, Bot, Mic, Smartphone, Search, Megaphone, Share2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  features: string[];
};

export const services: Service[] = [
  { slug: "web-development", title: "Web Development", icon: Code,
    short: "Fast, scalable websites built with modern stacks.",
    features: ["Business websites", "Landing pages", "SaaS websites", "E-commerce", "CMS websites", "Performance-focused builds"] },
  { slug: "web-design", title: "Web Design", icon: Palette,
    short: "Clean, premium UI/UX that converts visitors.",
    features: ["UI/UX design", "Landing page design", "Brand-aligned visuals", "Responsive layouts", "Design systems"] },
  { slug: "ai-automation", title: "AI Automation", icon: Sparkles,
    short: "Automate workflows that slow your business down.",
    features: ["Workflow automation", "Lead automation", "CRM automation", "Email automation", "Internal tools", "AI assistants"] },
  { slug: "web-chatbots", title: "Web Chatbots", icon: Bot,
    short: "Smart chatbots for support, leads, and bookings.",
    features: ["Website chatbots", "Customer support bots", "Lead qualification", "Appointment booking", "Code & no-code"] },
  { slug: "voice-bots", title: "Voice Bots", icon: Mic,
    short: "Voice-based bots that talk like your team.",
    features: ["Outbound voice calls", "Inbound support", "Appointment handling", "Multi-language", "CRM integration"] },
  { slug: "app-development", title: "App Development", icon: Smartphone,
    short: "Mobile apps, web apps, and admin dashboards.",
    features: ["Mobile app UI", "MVP development", "Web apps", "Admin dashboards", "Client portals"] },
  { slug: "seo", title: "SEO", icon: Search,
    short: "Rank higher with technical and on-page SEO.",
    features: ["Technical SEO", "On-page SEO", "Content structure", "Keyword optimization", "Performance"] },
  { slug: "marketing", title: "Marketing", icon: Megaphone,
    short: "Campaigns and funnels built for conversion.",
    features: ["Campaign strategy", "Funnels", "Email campaigns", "Paid ad support", "Conversion optimization"] },
  { slug: "social-media-handling", title: "Social Media Handling", icon: Share2,
    short: "End-to-end social management for your brand.",
    features: ["Content planning", "Post design", "Caption writing", "Scheduling", "Monthly management"] },
];

export const processSteps = [
  { n: "01", title: "Discovery Call", desc: "Understand the business, goals, services, and problems." },
  { n: "02", title: "Strategy & Planning", desc: "Create a clear roadmap, scope, and user journey." },
  { n: "03", title: "UI/UX Design", desc: "Design clean screens, layouts, wireframes, and flows." },
  { n: "04", title: "Development / Automation", desc: "Build websites, apps, AI workflows, chatbots, or integrations." },
  { n: "05", title: "Testing & Optimization", desc: "Test responsiveness, performance, usability, and conversion." },
  { n: "06", title: "Launch & Growth", desc: "Launch the project and support SEO, marketing, and improvements." },
];

export const projects = [
  { slug: "saas-landing", title: "SaaS Landing Page", category: "Websites", result: "+62% sign-ups in 30 days" },
  { slug: "ai-chatbot", title: "AI Chatbot System", category: "Chatbots", result: "70% support tickets auto-resolved" },
  { slug: "ecommerce", title: "E-commerce Website", category: "Websites", result: "2.4x conversion rate" },
  { slug: "mobile-app", title: "Mobile App UI", category: "Apps", result: "Shipped MVP in 6 weeks" },
  { slug: "seo-campaign", title: "SEO Growth Campaign", category: "SEO", result: "+128% organic traffic" },
  { slug: "social-kit", title: "Social Media Brand Kit", category: "Social Media", result: "3x engagement uplift" },
  { slug: "voice-booking", title: "Voice Bot Booking System", category: "Voice Bots", result: "24/7 inbound booking" },
  { slug: "automation-dashboard", title: "Business Automation Dashboard", category: "AI Automation", result: "Saves 40 hrs/week" },
];

export const testimonials = [
  { name: "Aria Mendes", role: "Founder, Northway", quote: "Cortvex shipped our redesigned site and chatbot in under 4 weeks. Clean process, premium output." },
  { name: "Daniel Park", role: "COO, Helio Studio", quote: "Their automation work cut our manual ops in half. Clear communication from day one." },
  { name: "Lina Roth", role: "Marketing Lead, Brando", quote: "The SEO and content strategy gave us steady growth without gimmicks." },
];

export const faqs = [
  { q: "What services does Cortvex provide?", a: "Web design and development, AI automation, chatbots and voice bots, mobile and web apps, SEO, marketing, and full social media handling." },
  { q: "Can I book a meeting before starting?", a: "Yes — every engagement starts with a free discovery call so we understand your goals before recommending a plan." },
  { q: "Do you build both code and no-code automations?", a: "Both. We pick the right tool for the job — n8n, Make, Zapier, or fully custom code when needed." },
  { q: "Can you create web chatbots and voice bots?", a: "Yes. We build chat widgets, lead qualification bots, and voice agents for inbound or outbound calls." },
  { q: "Do you offer SEO and social media handling?", a: "Yes — technical SEO, content structure, and monthly social media management with planning, design, and scheduling." },
  { q: "Can you build custom apps?", a: "Yes. Mobile apps, web apps, dashboards, and client portals. MVPs in 4–8 weeks." },
  { q: "How long does a typical project take?", a: "Landing pages: 1–2 weeks. Full websites: 3–6 weeks. Apps and AI systems: 4–10 weeks depending on scope." },
];
