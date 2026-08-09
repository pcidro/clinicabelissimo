import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clinic } from "@/data/clinic";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function AlineHighlight() {
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message: clinic.contact.whatsappMessage,
  });

  return (
    <section
      id="equipe"
      aria-labelledby="aline-highlight-title"
      className="scroll-mt-20 bg-background py-16 md:py-20 lg:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="mx-auto w-full max-w-[32rem] lg:col-span-6 lg:mx-0 lg:max-w-[35rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-surface-muted">
              <Image
                src="/images/aline/draaline2.png"
                alt="Dra. Aline Bellissimo na Clínica Bellissimo"
                fill
                sizes="(min-width: 1280px) 500px, (min-width: 1024px) 42vw, (min-width: 640px) 500px, calc(92vw - 32px)"
                className="object-cover"
                style={{ objectPosition: "35% 50%" }}
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="Quem cuida do seu sorriso"
              title="Dra. Aline Bellissimo"
              description="Cirurgiã-dentista especialista em Ortodontia, Odontopediatria e Odontologia estética."
              titleId="aline-highlight-title"
            />

            <div className="mt-6 max-w-[42rem] space-y-4 text-base leading-[1.7] text-foreground-muted sm:text-lg">
              <p>
                Na Clínica Bellissimo, a Dra. Aline conduz os atendimentos com
                escuta atenta, acolhimento e planejamento individualizado,
                respeitando as necessidades de cada paciente.
              </p>
              <p>
                Sua abordagem busca equilibrar saúde, função e estética do
                sorriso, com acompanhamento cuidadoso e atenção à naturalidade
                em cada etapa.
              </p>
            </div>

            <Button
              href={whatsappUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 w-full sm:w-auto"
            >
              <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
              Agendar uma avaliação
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
