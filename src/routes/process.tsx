import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Cortvex" },
      { name: "description", content: "Simple process, premium execution. Discovery, strategy, design, build, test, launch." },
      { property: "og:title", content: "Process — Cortvex" },
      { property: "og:description", content: "How we design, build, and ship digital systems." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="Simple process. Premium execution."
        subtitle="A clear six-step path from idea to launch. No surprises, no fluff — every step is built around outcomes."
      />

      <section className="container-x py-10">
        <div className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {processSteps.map((s) => (
              <div key={s.n} className="relative card-soft p-7 md:pl-20">
                <div className="md:absolute md:left-4 md:top-7 size-14 rounded-2xl bg-primary text-primary-foreground inline-flex items-center justify-center font-bold text-lg mb-3 md:mb-0">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground mt-2 max-w-2xl">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Start with a free discovery meeting." subtitle="15 minutes. We'll map your project and the smartest way to ship it." />
    </>
  );
}
