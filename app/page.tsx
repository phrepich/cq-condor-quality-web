import type { Metadata } from "next";
import Link from "next/link";

import { CTA } from "@/components/cta";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { Hero } from "@/components/hero";
import { MethodologySection } from "@/components/methodology-section";
import { SectionHeading } from "@/components/section-heading";
import { ServicesGrid } from "@/components/services-grid";
import {
  capabilities,
  capabilityHighlights,
  company,
  documentationPillars,
  growthLines,
  identity,
  operatingModel,
  publicWorksFlow,
  publicWorksLines,
  sectors,
  valuePillars,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Asesoría técnica, control de calidad y soporte para infraestructura",
  description: company.heroSubtitle,
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section id="identidad" className="cq-section">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Identidad y propósito"
            title="Una unidad técnica para aportar control, orden documental y criterio de obra."
            description="CQ forma parte del ecosistema Cóndor y se especializa en asesoría técnica, inspección, gestión de calidad, trazabilidad documental y soporte contractual para infraestructura."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {identity.map((item) => (
              <article key={item.title} className="cq-panel h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cq-copper">{item.title}</p>
                <p className="mt-5 text-sm leading-7 text-cq-steel">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modelo" className="cq-section pt-0">
        <div className="cq-shell">
          <div className="cq-panel overflow-hidden">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="cq-gridline relative overflow-hidden bg-[linear-gradient(135deg,#0f1318_0%,#123c45_72%,#194955_100%)] px-8 py-10 text-white md:px-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,138,87,0.18),transparent_30%)]" />
                <div className="relative space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">Modelo operativo CQ</p>
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    Respaldo empresarial, especialización técnica y control trazable en una misma estructura.
                  </h2>
                  <p className="text-base leading-8 text-white/72">
                    El modelo combina formalidad corporativa, experiencia técnica y capacidad de ejecución para entregar apoyo especializado, flexible y orientado a resultados.
                  </p>
                </div>
              </div>
              <div className="px-8 py-10 md:px-10">
                <div className="grid gap-4">
                  {operatingModel.map((item, index) => (
                    <article key={item.title} className="rounded-[24px] border border-cq-line bg-cq-paper px-5 py-5">
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cq-obsidian text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-cq-graphite">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-cq-steel">{item.description}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="propuesta" className="cq-section pt-0">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Propuesta de valor"
            title="Control técnico que convierte experiencia de obra en decisiones verificables."
            description={company.valueProposition}
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {valuePillars.map((pillar, index) => (
              <article key={pillar.title} className="cq-panel h-full p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cq-copper">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-cq-graphite">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cq-steel">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <ExperienceSection />

      <section id="capacidades" className="cq-section pt-0">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Experiencia y capacidades"
            title="Capacidad operativa, documental y técnica aplicada a administración contractual."
            description="CQ se construye sobre experiencia profesional acumulada en obras de infraestructura, especialmente en contextos donde el orden documental y el control de calidad sostienen el avance contractual."
          />
          <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="grid gap-5">
              {capabilities.map((capability) => (
                <article key={capability.title} className="cq-panel p-6">
                  <h3 className="text-xl font-semibold text-cq-graphite">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cq-steel">{capability.description}</p>
                </article>
              ))}
            </div>
            <div className="cq-panel p-6 md:p-8">
              <p className="cq-overline">Capacidades destacadas</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {capabilityHighlights.map((item) => (
                  <div key={item} className="rounded-[18px] border border-cq-line bg-cq-paper px-4 py-3">
                    <p className="text-sm leading-7 text-cq-steel">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MethodologySection />

      <section id="documentacion" className="cq-section pt-0">
        <div className="cq-shell">
          <div className="cq-panel overflow-hidden">
            <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
              <div className="cq-gridline relative overflow-hidden bg-[linear-gradient(135deg,#0f1318_0%,#123c45_72%,#194955_100%)] px-8 py-10 text-white md:px-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,138,87,0.18),transparent_28%)]" />
                <div className="relative space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">
                    Cumplimiento normativo y trazabilidad
                  </p>
                  <h2 className="text-3xl font-semibold md:text-4xl">
                    La obra se controla donde ocurre: en terreno, en documentos y en decisiones.
                  </h2>
                  <p className="text-base leading-8 text-white/72">
                    CQ ordena información crítica para responder a observaciones, auditorías, inspecciones y cierres contractuales con evidencia disponible.
                  </p>
                </div>
              </div>
              <div className="px-8 py-10 md:px-10">
                <div className="grid gap-4">
                  {documentationPillars.map((item) => (
                    <article key={item} className="rounded-[24px] border border-cq-line bg-cq-paper px-5 py-5">
                      <p className="text-sm leading-7 text-cq-steel">{item}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="obras-publicas" className="cq-section pt-0">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Enfoque institucional para obras públicas"
            title="Estructura técnica preparada para contratos con alta exigencia de control y trazabilidad."
            description="CQ orienta su desarrollo hacia servicios técnicos especializados en asesoría, inspección, control de calidad y soporte documental para contratos de infraestructura pública, integrando experiencia en terreno con gestión verificable."
          />
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="cq-panel p-6 md:p-8">
              <p className="cq-overline">Líneas de desarrollo</p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {publicWorksLines.map((item) => (
                  <div key={item} className="rounded-[18px] border border-cq-line bg-cq-paper px-4 py-3">
                    <p className="text-sm leading-7 text-cq-steel">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {publicWorksFlow.map((item) => (
                <article key={item.title} className="cq-panel p-5">
                  <h3 className="text-lg font-semibold text-cq-graphite">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-cq-steel">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="crecimiento" className="cq-section pt-0">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Proyección de crecimiento"
            title="Tres líneas para consolidar valor técnico en infraestructura."
            description="CQ se proyecta como una unidad técnica capaz de crecer en líneas estratégicas que fortalecen su propuesta de valor y su posición en el mercado."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {growthLines.map((line, index) => (
              <article key={line.title} className="cq-panel h-full p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cq-copper">Línea {index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold text-cq-graphite">{line.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cq-steel">{line.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sectores" className="cq-section pt-0">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Clientes y sectores atendidos"
            title="Una unidad técnica diseñada para interactuar con terreno, mandantes y equipos de obra."
            description="CQ puede integrarse a constructoras, organismos públicos, mandantes privados, inspecciones y oficinas técnicas que necesitan más orden, respaldo y criterio operativo."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => (
              <article key={sector.title} className="cq-panel h-full p-6">
                <h3 className="text-xl font-semibold text-cq-graphite">{sector.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cq-steel">{sector.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />

      <section className="cq-section pt-0">
        <div className="cq-shell flex flex-wrap items-center justify-center gap-4">
          <Link href="/#servicios" className="cq-button-ghost">
            Revisar servicios
          </Link>
          <Link href="/#contacto" className="cq-button-ghost">
            Agendar reunión
          </Link>
          <Link href="/#obras-publicas" className="cq-button-ghost">
            Ver enfoque institucional
          </Link>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
