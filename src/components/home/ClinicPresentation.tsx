import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ClinicPresentation() {
  return (
    <section
      aria-labelledby="clinic-presentation-title"
      className="relative isolate overflow-hidden bg-background py-20 md:py-24 lg:py-28 xl:py-32"
    >
      <Container>
        <div className="grid grid-cols-4 gap-x-4 min-[375px]:gap-x-5 md:grid-cols-8 md:gap-x-6 xl:grid-cols-12 xl:gap-x-8">
          <div className="col-span-4 md:col-span-6 xl:col-span-5 xl:pr-8">
            <p className="flex items-center gap-3 text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-foreground">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              A Clínica
            </p>

            <h2
              id="clinic-presentation-title"
              className="mt-6 max-w-xl font-display text-[clamp(2.25rem,4vw,3rem)] font-medium leading-[1.08] tracking-[-0.014em] text-foreground"
            >
              Cuidado pensado para cada pessoa.
            </h2>

            <p className="mt-6 max-w-[36rem] text-base leading-[1.7] text-foreground-muted sm:text-lg">
              Na Clínica Bellissimo, cada atendimento começa com escuta e
              atenção. O planejamento considera as necessidades de cada
              paciente, buscando equilíbrio entre saúde, estética e bem-estar
              em todas as etapas do cuidado.
            </p>

            <Button
              href="/a-clinica"
              variant="secondary"
              className="mt-8 hidden xl:inline-flex"
            >
              Conheça a Bellissimo
            </Button>
          </div>

          <figure className="relative col-span-4 mt-12 aspect-[5/4] overflow-hidden rounded-[24px] md:col-span-8 md:mt-16 xl:col-span-7 xl:col-start-6 xl:row-start-1 xl:mt-0">
            <Image
              src="/images/clinic/clinic1.webp"
              alt="Sala de atendimento da Clínica Bellissimo"
              fill
              sizes="(min-width: 1280px) 720px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 32px)"
              className="object-cover object-center"
            />
          </figure>

          <div className="col-span-4 mt-4 grid grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] items-end gap-3 min-[375px]:gap-4 md:col-span-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] md:gap-6 xl:col-span-12 xl:row-start-2 xl:-mt-16 xl:grid-cols-12 xl:gap-8">
            <figure className="relative z-10 aspect-[4/5] overflow-hidden rounded-[20px] xl:col-span-4 xl:col-start-4 xl:rounded-[24px]">
              <Image
                src="/images/clinic/clinic3.jpg"
                alt="Profissionais da Clínica Bellissimo em frente ao mural da clínica"
                fill
                sizes="(min-width: 1280px) 390px, (min-width: 768px) 62vw, 60vw"
                className="object-cover object-center"
              />
            </figure>

            <figure className="relative aspect-[3/4] overflow-hidden rounded-[18px] xl:col-span-3 xl:col-start-10 xl:rounded-[20px]">
              <Image
                src="/images/clinic/clinic2.jpg"
                alt="Profissionais atendendo um paciente na Clínica Bellissimo"
                fill
                sizes="(min-width: 1280px) 280px, (min-width: 768px) 36vw, 36vw"
                className="object-cover object-center"
              />
            </figure>
          </div>

          <div className="col-span-4 mt-8 md:col-span-8 xl:hidden">
            <Button
              href="/a-clinica"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Conheça a Bellissimo
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
