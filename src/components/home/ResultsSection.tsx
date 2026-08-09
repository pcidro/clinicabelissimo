import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResultsSlider } from "@/components/home/ResultsSlider";
import { clinic } from "@/data/clinic";
import { clinicalResults } from "@/data/results";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ResultsSection() {
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message: clinic.contact.whatsappMessage,
  });

  return (
    <section
      id="resultados"
      aria-labelledby="results-section-title"
      className="scroll-mt-20 bg-surface py-16 md:py-20 lg:py-24"
    >
      <Container>
        <SectionHeader
          eyebrow="Resultados"
          title="Transformações planejadas com cuidado e precisão."
          description="Conheça alguns casos clínicos da Clínica Bellissimo, conduzidos com planejamento individualizado, atenção à função e busca por naturalidade estética."
          titleId="results-section-title"
        />

        <ResultsSlider results={clinicalResults} />

        <div className="mt-10 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-base leading-[1.7] text-foreground-muted sm:text-lg">
            Cada caso é avaliado de forma individual, respeitando as
            necessidades funcionais e estéticas de cada paciente.
          </p>
          <Button
            href={whatsappUrl}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shrink-0 sm:w-auto"
          >
            <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
            Agendar uma avaliação
          </Button>
        </div>
      </Container>
    </section>
  );
}
