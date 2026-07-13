import Link from "next/link";

import { CondorMark } from "@/components/condor-mark";
import { company, navigation } from "@/lib/site-content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cq-line/70 bg-white/90 backdrop-blur-xl">
      <div className="cq-shell py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-4">
            <CondorMark className="h-auto w-[150px] shrink-0 md:w-[180px]" priority />
            <span className="hidden max-w-sm text-xs leading-5 text-cq-steel lg:block">{company.tagline}</span>
          </Link>
          <nav className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-cq-steel hover:text-cq-petrol">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contacto"
            className="inline-flex rounded-md bg-cq-petrol px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cq-petrol-deep xl:px-5 xl:py-3"
          >
            Solicitar diagnóstico
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
