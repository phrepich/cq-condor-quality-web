import Link from "next/link";

import { company, navigation } from "@/lib/site-content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cq-line/70 bg-white/88 backdrop-blur-xl">
      <div className="cq-shell py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-cq-obsidian text-sm font-semibold tracking-[0.18em] text-white">
              CQ
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cq-petrol">CQ - Cóndor Quality</span>
              <span className="text-xs text-cq-steel">{company.tagline}</span>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 xl:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-cq-steel hover:text-cq-petrol">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contacto"
            className="inline-flex rounded-full bg-cq-obsidian px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cq-petrol xl:px-5 xl:py-3"
          >
            Solicitar diagnóstico técnico
          </Link>
        </div>
        <nav className="mt-4 flex gap-5 overflow-x-auto pb-1 xl:hidden">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-cq-steel hover:text-cq-petrol">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
