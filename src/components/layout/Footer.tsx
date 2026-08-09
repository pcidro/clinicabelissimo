import Link from "next/link";
import { Camera, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/data/clinic";
import { footerNavigation } from "@/data/navigation";
import { createWhatsAppLink } from "@/lib/whatsapp";

const footerWhatsAppMessage =
  "Olá! Conheci a Clínica Bellissimo pelo site e gostaria de mais informações.";

const socialLinkClassName =
  "inline-flex min-h-11 items-center gap-2 rounded-sm px-2 text-sm font-semibold text-foreground-muted transition-colors duration-160 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none";

const contactLinkClassName =
  "inline-flex min-h-11 items-center rounded-sm text-[15px] leading-relaxed text-foreground-muted transition-colors duration-160 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none";

export function Footer() {
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message: footerWhatsAppMessage,
  });

  return (
    <footer id="contato" className="bg-surface text-foreground">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:py-20 xl:grid-cols-[1.35fr_0.55fr_0.9fr] xl:gap-16">
          <div className="md:col-span-2 xl:col-span-1">
            <Link
              href="/"
              aria-label={`${clinic.name} — página inicial`}
              className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Logo
                variant="footerDark"
                className="w-[260px] xl:w-[330px]"
              />
            </Link>

            <p className="mt-6 max-w-md text-base leading-[1.7] text-foreground-muted">
              Cuidado odontológico com atenção, planejamento e respeito à
              individualidade de cada sorriso.
            </p>

            <div
              className="mt-6 flex flex-wrap gap-2"
              role="group"
              aria-label="Redes sociais"
            >
              <a
                href={clinic.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Clínica Bellissimo (abre em nova aba)"
                className={socialLinkClassName}
              >
                <i className="fa-brands fa-instagram text-xl" aria-hidden="true"></i>
                Instagram
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Clínica Bellissimo (abre em nova aba)"
                className={socialLinkClassName}
              >
                <i className="fa-brands fa-whatsapp text-xl" aria-hidden="true"></i>
                WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-sm font-semibold text-foreground">Navegação</h2>
            <ul className="mt-5 space-y-1">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center rounded-sm text-[15px] text-foreground-muted transition-colors duration-160 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Contato</h2>
            <address className="mt-5 not-italic">
              <div className="flex gap-3 text-[15px] leading-[1.7] text-foreground-muted">
                <MapPin
                  size={20}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <p>
                  {clinic.location.street}
                  <br />
                  {clinic.location.district} — {clinic.location.city},{" "}
                  {clinic.location.state}
                  <br />
                  CEP {clinic.location.postalCode}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <i
                  className="fa-brands fa-whatsapp text-xl shrink-0"
                  aria-hidden="true"
                ></i>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClassName}
                >
                  {clinic.contact.whatsappDisplay}
                </a>
              </div>

              <div className="mt-1 flex items-center gap-3">
                <i
                  className="fa-brands fa-instagram text-xl shrink-0"
                  aria-hidden="true"
                ></i>
                <a
                  href={clinic.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={contactLinkClassName}
                >
                  {clinic.contact.instagramHandle}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-border py-6 md:py-8">
          <p className="text-sm leading-relaxed text-foreground-muted">
            © 2026 {clinic.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
