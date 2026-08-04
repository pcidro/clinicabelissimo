import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { brandImages } from "@/data/brand";

type TrustPillar = {
  title: string;
  description: string;
};

const trustPillars = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada atendimento começa pela escuta e pela compreensão das necessidades de cada pessoa.",
  },
  {
    title: "Planejamento individual",
    description:
      "Cada etapa é pensada com clareza, intenção e respeito às particularidades de cada caso.",
  },
  {
    title: "Cuidado humanizado",
    description:
      "Uma experiência próxima, acolhedora e atenta em todos os momentos.",
  },
  {
    title: "Saúde e estética em equilíbrio",
    description:
      "Decisões que consideram o sorriso de forma completa, unindo bem-estar, função e naturalidade.",
  },
] satisfies readonly TrustPillar[];

export function TrustBand() {
  return (
    <section
      aria-labelledby="trust-band-title"
      className="relative isolate overflow-hidden bg-surface py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:gap-x-8 lg:gap-x-12">
          <div className="relative md:col-span-5 lg:pr-8">
            <div className="relative z-10 max-w-xl">
              <p className="flex items-center gap-3 text-xs font-bold uppercase leading-[1.3] tracking-[0.12em] text-brand">
                <span className="h-px w-8 bg-brand" aria-hidden="true" />
                Nosso jeito de cuidar
              </p>

              <h2
                id="trust-band-title"
                className="mt-6 max-w-lg font-display text-[clamp(2.5rem,4.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.018em] text-foreground"
              >
                Cada sorriso pede um olhar único.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-[1.7] text-foreground-muted sm:text-lg">
                Da primeira conversa ao resultado final, cada escolha deve
                respeitar as necessidades, o bem-estar e a individualidade de
                quem confia em nosso cuidado.
              </p>
            </div>

            <Image
              src={brandImages.logo.mark}
              alt=""
              width={1024}
              height={1024}
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -right-16 -z-10 size-72 select-none opacity-[0.07] md:-bottom-36 md:-right-28 md:size-96 lg:-right-36 lg:size-[28rem]"
            />
          </div>

          <ol className="md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
            {trustPillars.map((pillar, index) => (
              <li
                key={pillar.title}
                className={`border-t border-border py-7 last:border-b md:py-8 lg:py-10 ${
                  index % 2 === 1 ? "md:ml-8 lg:ml-12" : ""
                }`}
              >
                <article className="grid grid-cols-[2rem_1fr] gap-x-4 sm:grid-cols-[2.5rem_1fr] sm:gap-x-5">
                  <span
                    className="pt-1 text-xs font-bold leading-none tracking-[0.12em] text-brand"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.625rem,2.5vw,2.125rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-[1.65] text-foreground-muted">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
