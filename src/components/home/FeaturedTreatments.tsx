import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/data/clinic";
import { treatments } from "@/data/treatments";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function FeaturedTreatments() {
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message:
      "Olá! Conheci a Clínica Bellissimo pelo site e gostaria de conhecer todos os serviços.",
  });

  return (
    <section
      id="tratamentos"
      aria-labelledby="featured-treatments-title"
      className="scroll-mt-20 bg-surface py-16 md:py-20 lg:py-24"
    >
      <Container>
        <header className="max-w-[45rem]">
          <p className="text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-brand">
            Tratamentos
          </p>

          <h2
            id="featured-treatments-title"
            className="mt-4 font-display text-[clamp(2.25rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.014em] text-foreground"
          >
            Cuidado completo para seu sorriso.
          </h2>

          <p className="mt-4 max-w-[40rem] text-base leading-[1.7] text-foreground-muted sm:text-lg">
            Tratamentos que unem planejamento, precisão e um olhar atento para
            a saúde, a função e a naturalidade de cada sorriso.
          </p>
        </header>

        <ul className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {treatments.map((treatment) => (
            <li key={treatment.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-border bg-background transition-colors duration-200 hover:border-border-strong motion-reduce:transition-none">
                <div
                  className={`grid aspect-[4/3] overflow-hidden bg-surface-muted ${
                    treatment.images.length > 1
                      ? "grid-cols-[1.15fr_0.85fr] gap-1"
                      : "grid-cols-1"
                  }`}
                >
                  {treatment.images.map((image) => (
                    <div key={image.src} className="relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes={
                          treatment.images.length > 1
                            ? "(min-width: 1024px) 17vw, (min-width: 768px) 24vw, 48vw"
                            : "(min-width: 1024px) 30vw, (min-width: 768px) 46vw, calc(100vw - 32px)"
                        }
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        style={{ objectPosition: image.objectPosition }}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-[clamp(1.5rem,2.3vw,1.75rem)] font-semibold leading-[1.16] tracking-[-0.01em] text-foreground">
                    {treatment.title}
                  </h3>
                  {treatment.specialties ? (
                    <p className="mt-2 text-sm font-semibold leading-[1.55] text-brand">
                      {treatment.specialties}
                    </p>
                  ) : null}
                  <p
                    className={`text-[15px] leading-[1.7] text-foreground-muted sm:text-base ${
                      treatment.specialties ? "mt-2" : "mt-3"
                    }`}
                  >
                    {treatment.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-start gap-5 md:mt-10 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-base leading-[1.7] text-foreground-muted sm:text-lg">
            Cada indicação começa com uma avaliação cuidadosa e individual.
          </p>
          <Button
            href={whatsappUrl}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shrink-0 sm:w-auto"
          >
            Veja todos os serviços
          </Button>
        </div>
      </Container>
    </section>
  );
}
