import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/data/clinic";
import { mainNavigation } from "@/data/navigation";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message: clinic.contact.whatsappMessage,
  });

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-white/10 bg-brand text-brand-foreground shadow-soft md:h-[72px] xl:h-20">
      <Container className="flex h-full items-center justify-between gap-8">
        <Link
          href="/"
          aria-label={`${clinic.name} — página inicial`}
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <Logo
            variant="header"
            priority
            className="w-[165px] md:w-[185px] xl:w-[210px]"
          />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-8 xl:flex 2xl:gap-10">
          <DesktopNavigation items={mainNavigation} />
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            Agendar avaliação
          </Button>
        </div>

        <MobileMenu items={mainNavigation} whatsappUrl={whatsappUrl} />
      </Container>
    </header>
  );
}
