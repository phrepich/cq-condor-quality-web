import Link from "next/link";

import { CondorMark } from "@/components/condor-mark";
import { company, heroMarkers } from "@/lib/site-content";

export function Hero() {
  return (
    <section id="home" className="cq-section pt-8 md:pt-10">
      <div className="cq-shell">
        <div className="cq-panel-dark cq-gridline relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,138,87,0.18),transparent_28%),radial-gradient(circle_at_right,rgba(18,60,69,0.34),transparent_42%)]" />
          <div className="absolute inset-y-0 left-[58%] hidden w-px bg-white/10 xl:block" />
          <div className="absolute bottom-8 left-8 h-28 w-28 rounded-full border border-white/10" />
          <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-cq-copper/10 blur-3xl" />
          <div className="relative grid gap-10 px-6 py-14 md:px-10 md:py-18 xl:grid-cols-[1.1fr_0.9fr] xl:px-14">
            <div className="max-w-3xl space-y-7">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/62">Asesoría técnica de infraestructura</p>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] md:text-6xl">{company.heroTitle}</h1>
              <p className="max-w-2xl text-base leading-8 text-white/74 md:text-xl">{company.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contacto" className="cq-button-primary">
                  Solicitar diagnóstico técnico
                </Link>
                <Link href="/#servicios" className="cq-button-secondary">
                  Revisar servicios
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_65%)]" />
                <div className="relative grid gap-6 sm:grid-cols-[0.92fr_1.08fr] xl:grid-cols-1">
                  <div className="relative mx-auto w-full max-w-[250px]">
                    <CondorMark className="h-auto w-full opacity-92" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/56">Marca técnica</p>
                    <p className="text-3xl font-semibold tracking-[0.14em]">CQ</p>
                    <p className="text-sm uppercase tracking-[0.26em] text-white/76">Cóndor Quality</p>
                    <p className="text-sm leading-7 text-white/68">
                      Unidad especializada en inspección, gestión de calidad, control documental y soporte contractual para obras públicas y privadas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                {heroMarkers.map((marker) => (
                  <article key={marker.value} className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cq-copper-soft">{marker.value}</p>
                    <p className="mt-3 text-sm leading-7 text-white/70">{marker.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
