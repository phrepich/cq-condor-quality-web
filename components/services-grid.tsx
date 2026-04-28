import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-content";

export function ServicesGrid() {
  return (
    <section id="servicios" className="cq-section pt-0">
      <div className="cq-shell space-y-10">
        <SectionHeading
          eyebrow="Servicios"
          title="Asesoría, inspección, calidad y soporte documental para contratos que no admiten improvisación."
          description="La oferta de CQ se construye sobre necesidades concretas de terreno, oficina técnica e inspección. No es una consultoría de escritorio; es una estructura de apoyo técnico para proyectos que requieren orden, criterio y respaldo."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="cq-panel flex h-full flex-col p-6">
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-cq-graphite">{service.title}</h3>
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
