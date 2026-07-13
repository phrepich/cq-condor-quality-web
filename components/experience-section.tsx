import { SectionHeading } from "@/components/section-heading";
import { sectors } from "@/lib/site-content";

export function ExperienceSection() {
  return (
    <section id="experiencia" className="cq-section">
      <div className="cq-shell space-y-10">
        <SectionHeading
          eyebrow="Criterio técnico"
          title="Experiencia de terreno convertida en control, respaldo y trazabilidad."
          description="CQ se posiciona donde suelen aparecer las brechas que más afectan una obra: trazabilidad débil, antecedentes dispersos, controles incompletos y soporte contractual insuficiente."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sectors.slice(0, 3).map((item) => (
            <article key={item.title} className="cq-panel h-full p-6">
              <h3 className="text-2xl font-semibold text-cq-graphite">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cq-steel">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
