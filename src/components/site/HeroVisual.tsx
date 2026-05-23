import { Bot, Mic, BarChart3, Globe, Workflow, TrendingUp } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative h-[520px] w-full">
      {/* Website preview */}
      <div className="absolute top-0 left-0 w-[78%] card-soft p-3 animate-float" style={{ animationDelay: "0s" }}>
        <div className="flex gap-1.5 px-1 pb-2">
          <span className="size-2 rounded-full bg-muted" />
          <span className="size-2 rounded-full bg-muted" />
          <span className="size-2 rounded-full bg-muted" />
        </div>
        <div className="rounded-lg overflow-hidden border bg-surface aspect-[16/10]">
          <div className="h-6 border-b bg-white flex items-center px-2 gap-1">
            <Globe className="size-3 text-primary" />
            <span className="text-[10px] text-muted-foreground">cortvex.client</span>
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 w-1/2 bg-foreground/80 rounded" />
            <div className="h-1.5 w-3/4 bg-muted rounded" />
            <div className="h-1.5 w-2/3 bg-muted rounded" />
            <div className="mt-2 flex gap-1.5">
              <div className="h-6 w-16 rounded bg-primary" />
              <div className="h-6 w-14 rounded border" />
            </div>
            <div className="grid grid-cols-3 gap-1.5 pt-2">
              <div className="aspect-square rounded bg-surface border" />
              <div className="aspect-square rounded bg-surface border" />
              <div className="aspect-square rounded bg-surface border" />
            </div>
          </div>
        </div>
      </div>

      {/* AI workflow */}
      <div className="absolute top-8 right-0 w-[46%] card-soft p-4 animate-float" style={{ animationDelay: "1.2s" }}>
        <div className="flex items-center gap-2 mb-3">
          <Workflow className="size-4 text-primary" />
          <span className="text-xs font-semibold">AI Workflow</span>
        </div>
        <div className="space-y-1.5">
          {["Trigger: Form submit", "Enrich lead data", "Notify Slack + CRM"].map((t, i) => (
            <div key={t} className="flex items-center gap-2 text-[11px]">
              <span className="size-5 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center font-semibold">{i + 1}</span>
              <span className="flex-1 px-2 py-1.5 rounded-md bg-surface border">{t}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chatbot */}
      <div className="absolute bottom-24 left-6 w-[42%] card-soft p-4 animate-float" style={{ animationDelay: "0.6s" }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="size-7 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
            <Bot className="size-4" />
          </div>
          <span className="text-xs font-semibold">Chatbot</span>
          <span className="ml-auto size-1.5 rounded-full bg-emerald-500" />
        </div>
        <div className="space-y-1.5">
          <div className="text-[11px] bg-surface border rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[85%]">Hi! How can we help?</div>
          <div className="text-[11px] bg-primary text-primary-foreground rounded-lg rounded-tr-none px-2.5 py-1.5 max-w-[80%] ml-auto">Pricing for AI bots?</div>
        </div>
      </div>

      {/* Voice waveform */}
      <div className="absolute bottom-28 right-6 w-[40%] card-soft p-4 animate-float" style={{ animationDelay: "1.8s" }}>
        <div className="flex items-center gap-2 mb-3">
          <Mic className="size-4 text-primary" />
          <span className="text-xs font-semibold">Voice Bot</span>
        </div>
        <div className="flex items-end gap-0.5 h-10">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={i}
              className="flex-1 bg-primary/70 rounded-full origin-bottom"
              style={{
                animation: `wave 1.2s ease-in-out ${i * 0.05}s infinite`,
                height: `${20 + Math.sin(i) * 30 + 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="absolute bottom-0 left-0 w-[44%] card-soft p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2"><BarChart3 className="size-4 text-primary" /><span className="text-xs font-semibold">SEO Growth</span></div>
          <span className="text-[10px] font-semibold text-emerald-600">+128%</span>
        </div>
        <svg viewBox="0 0 120 40" className="w-full h-12">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1800AD" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1800AD" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 32 L20 28 L40 30 L60 20 L80 22 L100 10 L120 6 L120 40 L0 40 Z" fill="url(#g)" />
          <path d="M0 32 L20 28 L40 30 L60 20 L80 22 L100 10 L120 6" stroke="#1800AD" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Social */}
      <div className="absolute bottom-4 right-2 w-[38%] card-soft p-4">
        <div className="flex items-center gap-2 mb-2"><TrendingUp className="size-4 text-primary" /><span className="text-xs font-semibold">Social Reach</span></div>
        <div className="grid grid-cols-3 gap-1.5">
          {[42, 78, 56].map((v) => (
            <div key={v} className="text-center">
              <div className="text-sm font-bold text-foreground">+{v}%</div>
              <div className="text-[9px] text-muted-foreground">this mo.</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
