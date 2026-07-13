import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { company } from "@/lib/site-content";

const whatsappHref = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(
  "Hola, necesito coordinar una reunión técnica con CQ para revisar una obra o contrato."
)}`;

export function ContactSection() {
  return (
    <section id="contacto" className="cq-section">
      <div className="cq-shell grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="cq-overline">Contacto</p>
            <h2 className="cq-title max-w-3xl">Coordina una conversación técnica con CQ.</h2>
            <p className="cq-copy max-w-3xl">
              Si el proyecto necesita control técnico, orden documental, gestión de calidad, apoyo contractual o preparación de licitación, podemos revisar el contexto y proponer un primer marco de acción.
            </p>
          </div>
          <ContactForm />
        </div>

        <aside className="grid gap-6">
          <article className="cq-panel p-8">
            <p className="cq-overline">Canales directos</p>
            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cq-steel">Correo</p>
                <p className="mt-2 text-base text-cq-graphite">{company.contact.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cq-steel">Teléfono</p>
                <p className="mt-2 text-base text-cq-graphite">{company.contact.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cq-steel">Cobertura</p>
                <p className="mt-2 text-base leading-7 text-cq-steel">{company.contact.location}</p>
              </div>
            </div>
          </article>

          <article className="cq-panel-dark p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/58">Coordinación comercial</p>
            <h3 className="mt-4 text-3xl font-semibold">Respuesta orientada a obra y contrato</h3>
            <p className="mt-4 text-sm leading-7 text-white/72">
              El primer contacto está pensado para filtrar alcance, urgencia y criticidad documental antes de proponer una línea de apoyo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={whatsappHref} target="_blank" rel="noreferrer" className="cq-button-primary">
                Agendar reunión
              </Link>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
