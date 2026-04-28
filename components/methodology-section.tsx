import { SectionHeading } from "@/components/section-heading";
import { methodology } from "@/lib/site-content";

export function MethodologySection() {
  return (
    <section id="metodologia" className="cq-section">
      <div className="cq-shell space-y-10">
        <SectionHeading
          eyebrow="Metodología CQ"
          title="Cinco etapas para ordenar la gestión técnica sin perder velocidad de ejecución."
          description="La metodología de CQ busca recuperar control, priorizar acciones y dejar evidencia sólida durante todo el ciclo del contrato."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {methodology.map((stage) => (
            <article key={stage.step} className="cq-panel h-full p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cq-copper">{stage.step}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-cq-graphite">{stage.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cq-steel">{stage.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
