import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { company } from "@/lib/site-content";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cq-condor-quality-web.vercel.app"),
  title: {
    default: "CQ - Cóndor Quality",
    template: "%s | CQ - Cóndor Quality",
  },
  description: company.heroSubtitle,
  keywords: company.seoKeywords,
  openGraph: {
    title: "CQ - Cóndor Quality",
    description: company.heroSubtitle,
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
