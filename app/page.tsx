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
  company,
  documentationPillars,
  leadershipHighlights,
  mopProjection,
  sectors,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Asesoria tecnica, calidad e inspeccion para infraestructura",
  description: company.heroSubtitle,
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section id="quienes-somos" className="cq-section">
        <div className="cq-shell">
          <div className="cq-panel grid gap-8 px-8 py-10 md:px-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="space-y-4">
              <p className="cq-overline">Quiénes somos</p>
              <h2 className="cq-title max-w-xl">
                Una unidad técnica creada para ordenar, respaldar y profesionalizar la gestión de obra.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="cq-copy max-w-3xl">{company.valueProposition}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-[24px] border border-cq-line bg-cq-paper px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cq-petrol">Ecosistema</p>
                  <p className="mt-3 text-lg font-semibold text-cq-graphite">{company.ecosystem}</p>
                  <p className="mt-2 text-sm leading-7 text-cq-steel">
                    CQ opera como marca técnica orientada a asesoría, inspección y calidad para infraestructura pública y privada.
                  </p>
                </article>
                <article className="rounded-[24px] border border-cq-line bg-cq-paper px-5 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cq-petrol">Proyección</p>
                  <p className="mt-3 text-lg font-semibold text-cq-graphite">{company.futureUnit}</p>
                  <p className="mt-2 text-sm leading-7 text-cq-steel">
                    Futura unidad independiente del ecosistema Cóndor, enfocada en topografía, drones y control geométrico.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesGrid />

      <ExperienceSection />

      <MethodologySection />

      <section id="proyeccion-mop" className="cq-section">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Registro y proyección MOP"
            title="Una estructura técnica preparada para competir con estándar de asesoría pública."
            description="CQ orienta su posicionamiento inicial hacia contratos MOP y DOH, con foco en orden documental, trazabilidad, lectura contractual y capacidad real de acompañamiento técnico."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {mopProjection.map((item, index) => (
              <article key={item} className="cq-panel h-full p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cq-copper">0{index + 1}</p>
                <p className="mt-5 text-sm leading-7 text-cq-steel">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="documentacion" className="cq-section pt-0">
        <div className="cq-shell">
          <div className="cq-panel overflow-hidden">
            <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
              <div className="cq-gridline relative overflow-hidden bg-[linear-gradient(135deg,#0f1318_0%,#123c45_72%,#194955_100%)] px-8 py-10 text-white md:px-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,138,87,0.18),transparent_28%)]" />
                <div className="relative space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/60">
                    Documentación y control de calidad
                  </p>
                  <h2 className="text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                    La calidad no se declara. Se sostiene con documentos, flujos y evidencia verificable.
                  </h2>
                  <p className="text-base leading-8 text-white/72">
                    Planes, procedimientos, instructivos y registros diseñados para responder a la exigencia real de la obra y del contrato.
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

      <section id="liderazgo" className="cq-section pt-0">
        <div className="cq-shell">
          <div className="cq-panel grid gap-8 px-8 py-10 md:px-10 lg:grid-cols-[0.76fr_1.24fr]">
            <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(150deg,#12171d_0%,#153c45_70%,#225261_100%)] p-7 text-white">
              <div className="cq-gridline absolute inset-0 opacity-60" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,138,87,0.18),transparent_30%)]" />
              <div className="relative space-y-10">
                <div className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/74">
                  Liderazgo técnico
                </div>
                <div className="space-y-3">
                  <p className="text-3xl font-semibold tracking-[-0.04em]">Pablo Hrepich</p>
                  <p className="text-base leading-8 text-white/72">
                    Ingeniero Constructor, Topógrafo, gestor de proyectos y líder técnico de CQ.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="cq-overline">Perfil institucional</p>
                <h2 className="cq-title max-w-3xl">Experiencia aplicada a calidad, documentación técnica y control contractual.</h2>
                <p className="cq-copy max-w-3xl">
                  La dirección técnica de CQ se presenta con un enfoque institucional y sobrio. Su liderazgo combina experiencia en obras hidráulicas, gestión de calidad, documentación técnica, control de obra, coordinación con Inspección Fiscal y administración contractual.
                </p>
              </div>
              <div className="grid gap-4">
                {leadershipHighlights.map((item) => (
                  <article key={item} className="rounded-[24px] border border-cq-line bg-cq-paper px-5 py-5">
                    <p className="text-sm leading-7 text-cq-steel">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sectores" className="cq-section pt-0">
        <div className="cq-shell space-y-10">
          <SectionHeading
            eyebrow="Clientes y sectores atendidos"
            title="Una consultora técnica diseñada para interactuar con terreno, mandantes y equipos de obra."
            description="CQ puede integrarse a constructoras, organismos públicos, mandantes privados y oficinas técnicas que necesitan más orden, respaldo y criterio operativo."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector) => (
              <article key={sector.title} className="cq-panel h-full p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-cq-graphite">{sector.title}</h3>
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
          <Link href="/#proyeccion-mop" className="cq-button-ghost">
            Preparar licitación con CQ
          </Link>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
