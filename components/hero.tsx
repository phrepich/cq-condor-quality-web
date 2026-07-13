import Link from "next/link";

import { CondorMark } from "@/components/condor-mark";
import { company } from "@/lib/site-content";

export function Hero() {
  return (
    <section id="home" className="cq-section pt-8 md:pt-10">
      <div className="cq-shell">
        <div className="grid gap-10 border-b border-cq-line pb-14 md:pb-18 lg:grid-cols-[1fr_360px] lg:items-center">
          <div className="max-w-4xl space-y-7">
            <p className="cq-overline">Unidad de Asesoría Técnica</p>
            <h1 className="text-4xl font-semibold text-cq-graphite md:text-6xl">{company.heroTitle}</h1>
            <p className="max-w-2xl text-lg leading-8 text-cq-steel">{company.heroSubtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contacto" className="cq-button-primary">
                Solicitar diagnóstico
              </Link>
              <Link href="/#servicios" className="cq-button-ghost">
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="mx-auto max-w-[300px] rounded-xl bg-white p-5">
              <CondorMark className="h-auto w-full" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
