import type { Metadata } from "next";
import Link from "next/link";

import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { company, methodology, services } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Asesoría técnica para infraestructura",
  description: company.heroSubtitle,
};

const focusItems = [
  "Control técnico en terreno",
  "Gestión de calidad aplicable",
  "Trazabilidad documental",
  "Soporte contractual",
];

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const simpleMethod = methodology.slice(0, 4);

  return (
    <main>
      <Hero />

      <section id="identidad" className="cq-section">
        <div className="cq-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-5">
            <p className="cq-overline">Qué es CQ</p>
            <h2 className="cq-title max-w-2xl">Una unidad técnica para ordenar obras complejas.</h2>
          </div>
          <div className="space-y-6">
            <p className="cq-copy">
              CQ apoya proyectos de infraestructura con inspección, calidad, control documental y criterio técnico de obra.
              Su foco es reducir incertidumbre, dejar evidencia y mejorar la toma de decisiones durante el contrato.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {focusItems.map((item) => (
                <div key={item} className="border-l-2 border-cq-petrol bg-white px-4 py-3 text-sm font-medium text-cq-graphite">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="cq-section pt-0">
        <div className="cq-shell space-y-9">
          <SectionHeading
            eyebrow="Servicios"
            title="Tres frentes principales, sin ruido."
            description="La oferta se concentra en lo que más pesa en terreno: control, calidad y respaldo documental."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {featuredServices.map((service) => (
              <article key={service.title} className="cq-panel h-full p-6">
                <h3 className="text-xl font-semibold text-cq-graphite">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cq-steel">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="metodologia" className="cq-section pt-0">
        <div className="cq-shell space-y-9">
          <SectionHeading
            eyebrow="Método"
            title="Un flujo simple para recuperar control."
            description="Primero se entiende el contrato. Luego se ordena la evidencia, se controla en terreno y se prepara el cierre técnico."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {simpleMethod.map((stage) => (
              <article key={stage.step} className="border-t border-cq-line bg-white px-5 py-6">
                <p className="text-sm font-semibold text-cq-petrol">{stage.step}</p>
                <h3 className="mt-4 text-lg font-semibold text-cq-graphite">{stage.title}</h3>
                <p className="mt-3 text-sm leading-7 text-cq-steel">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cierre" className="cq-section pt-0">
        <div className="cq-shell">
          <div className="grid gap-8 border-y border-cq-line py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl space-y-3">
              <p className="cq-overline">Enfoque</p>
              <h2 className="text-2xl font-semibold text-cq-graphite md:text-4xl">
                Menos presentación. Más control técnico verificable.
              </h2>
              <p className="cq-copy">
                La obra se sostiene con decisiones claras, evidencia disponible y documentación que responda al contrato.
              </p>
            </div>
            <Link href="/#contacto" className="cq-button-primary">
              Coordinar diagnóstico
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
