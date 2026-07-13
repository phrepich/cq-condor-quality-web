import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-content";

export function ServicesGrid() {
  return (
    <section id="servicios" className="cq-section pt-0">
      <div className="cq-shell space-y-10">
        <SectionHeading
          eyebrow="Servicios técnicos especializados"
          title="Control, aseguramiento de calidad y respaldo documental para contratos exigentes."
          description="La oferta de CQ responde a necesidades concretas de terreno, oficina técnica, inspección y administración contractual. Cada servicio busca ordenar información, reducir riesgos y sostener decisiones con evidencia."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="cq-panel flex h-full flex-col p-6">
              <h3 className="text-xl font-semibold text-cq-graphite">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cq-steel">{service.description}</p>
              <div className="mt-6 rounded-[20px] border border-cq-line bg-cq-paper px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cq-petrol">Resultado esperado</p>
                <p className="mt-2 text-sm leading-7 text-cq-steel">{service.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
