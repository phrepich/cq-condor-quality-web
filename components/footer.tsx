import Link from "next/link";

import { company, navigation } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-cq-obsidian text-white">
      <div className="cq-shell grid gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/8 text-sm font-semibold tracking-[0.18em] text-white">
              CQ
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">CQ - Cóndor Quality</span>
              <span className="text-xs text-white/56">{company.tagline}</span>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/68">
            Marca de fantasía del ecosistema {company.ecosystem}, orientada a asesoría técnica, inspección, calidad, control documental y soporte contractual para infraestructura.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Navegación</p>
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/72 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">Contacto</p>
            <div className="grid gap-2 text-sm text-white/72">
              <p>{company.contact.email}</p>
              <p>{company.contact.phone}</p>
              <p>{company.contact.location}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
