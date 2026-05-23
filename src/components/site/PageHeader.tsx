import type { ReactNode } from "react";

export function PageHeader({
  eyebrow, title, subtitle, children,
}: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="pt-36 pb-12 md:pt-44 md:pb-16 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="container-x relative">
        {eyebrow && <span className="eyebrow"><span className="dot" />{eyebrow}</span>}
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
