import Link from "next/link";

import { cta } from "@/lib/site-content";

export function CTA() {
  return (
    <section className="cq-section">
      <div className="cq-shell">
        <div className="cq-panel-dark relative overflow-hidden px-8 py-12 md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,138,87,0.2),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(18,60,69,0.32),transparent_34%)]" />
          <div className="absolute inset-y-8 left-8 right-8 rounded-[28px] border border-white/8" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/58">Coordinación inicial</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] md:text-5xl">{cta.title}</h2>
              <p className="max-w-2xl text-base leading-8 text-white/72 md:text-lg">{cta.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/#contacto" className="cq-button-primary">
                {cta.primaryLabel}
              </Link>
              <Link href="/#contacto" className="cq-button-secondary">
                {cta.secondaryLabel}
              </Link>
              <Link href="/#proyeccion-mop" className="cq-button-secondary">
                {cta.tertiaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
