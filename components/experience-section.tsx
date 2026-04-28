import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/site-content";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="cq-section">
      <div className="cq-shell space-y-10">
        <SectionHeading
          eyebrow="Experiencia técnica"
          title="Lectura de obra, documentación crítica y acompañamiento técnico con foco contractual."
          description="CQ se posiciona donde suelen aparecer los desórdenes que más afectan una obra: trazabilidad débil, antecedentes dispersos, brechas de calidad, controles incompletos y soporte contractual insuficiente."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {experience.map((item) => (
            <article key={item.title} className="cq-panel h-full p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-cq-graphite">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cq-steel">{item.description}</p>
              <div className="mt-6 grid gap-3">
                {item.points.map((point) => (
                  <div key={point} className="rounded-[18px] border border-cq-line bg-cq-paper px-4 py-3">
                    <p className="text-sm leading-7 text-cq-steel">{point}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
