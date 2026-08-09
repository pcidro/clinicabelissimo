import { Clock, ExternalLink, MapPin, MessageCircle, Quote } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/data/clinic";
import { testimonials } from "@/data/testimonials";
import { createWhatsAppLink } from "@/lib/whatsapp";

const appointmentMessage =
  "Olá! Conheci a Clínica Bellissimo pelo site e gostaria de agendar uma avaliação.";

export function TestimonialsLocation() {
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message: appointmentMessage,
  });
  const encodedAddress = encodeURIComponent(clinic.location.fullAddress);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section
      id="depoimentos-localizacao"
      aria-label="Depoimentos e localização da Clínica Bellissimo"
      className="bg-background py-16 md:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-7">
            <header className="max-w-[42rem]">
              <p className="text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-brand">
                Depoimentos
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.014em] text-foreground">
                O que nossos pacientes dizem.
              </h2>
            </header>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 md:gap-5">
              {testimonials.map((testimonial) => (
                <li key={testimonial.id}>
                  <figure className="flex h-full flex-col rounded-[18px] border border-border border-t-2 border-t-brand bg-surface p-5 md:p-6">
                    <Quote
                      size={20}
                      strokeWidth={1.8}
                      className="text-brand"
                      aria-hidden="true"
                    />
                    <blockquote className="mt-4 flex-1 text-[15px] leading-[1.7] text-foreground-muted sm:text-base">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-bold leading-[1.4] text-foreground">
                      {testimonial.name}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <aside className="relative isolate overflow-hidden rounded-[24px] bg-dark-section p-6 text-dark-section-foreground md:p-7 lg:col-span-5 lg:p-6 xl:p-7">
            <Logo variant="footer" className="w-[160px]" />

            <header className="mt-5 max-w-md">
              <p className="text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-white/70">
                Localização
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3vw,2.625rem)] font-medium leading-[1.08] tracking-[-0.014em] text-dark-section-foreground">
                Estamos prontos para receber você.
              </h2>
            </header>

            <dl className="mt-5 space-y-4">
              <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3">
                <span className="flex size-9 items-center justify-center rounded-[14px] bg-white/10 text-white/85">
                  <MapPin size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-white/65">
                    Endereço
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-[1.65] text-dark-section-foreground">
                    {clinic.location.street}
                    <br />
                    {clinic.location.district} — {clinic.location.city}, {clinic.location.state}
                    <br />
                    CEP {clinic.location.postalCode}
                  </dd>
                </div>
              </div>

              <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3">
                <span className="flex size-9 items-center justify-center rounded-[14px] bg-white/10 text-white/85">
                  <Clock size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-white/65">
                    Atendimento
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-[1.65] text-dark-section-foreground">
                    {clinic.location.serviceNote}
                  </dd>
                </div>
              </div>

              <div className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3">
                <span className="flex size-9 items-center justify-center rounded-[14px] bg-white/10 text-white/85">
                  <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-white/65">
                    WhatsApp
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center text-[15px] font-semibold text-dark-section-foreground underline decoration-white/40 underline-offset-4 transition-colors duration-160 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                    >
                      {clinic.contact.whatsappDisplay}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-5 overflow-hidden rounded-[18px] bg-surface-muted">
              <iframe
                src={mapEmbedUrl}
                title="Mapa da Clínica Bellissimo na Rua Boris Meiches, 18"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 lg:h-44 xl:h-48"
              />
            </div>

            <a
              href={mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white underline decoration-white/35 underline-offset-4 transition-colors duration-160 hover:text-white/80 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
            >
              Ver no Google Maps
              <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>

            <Button
              href={whatsappUrl}
              variant="light"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full"
            >
              <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
              Agendar uma avaliação
            </Button>
          </aside>
        </div>
      </Container>
    </section>
  );
}
