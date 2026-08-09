import Image from "next/image";
import {
  ClipboardCheck,
  HeartHandshake,
  ShieldCheck,
  Smile,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { brandImages } from "@/data/brand";

type CareBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const careBenefits = [
  {
    title: "Atendimento humanizado",
    description:
      "Cuidado próximo, escuta atenta e atenção às necessidades de cada pessoa.",
    icon: HeartHandshake,
  },
  {
    title: "Planejamento individual",
    description:
      "Cada tratamento é pensado de acordo com as necessidades e particularidades de cada caso.",
    icon: ClipboardCheck,
  },
  {
    title: "Saúde, função e estética",
    description:
      "Uma abordagem que considera o sorriso de forma completa, buscando equilíbrio, funcionalidade e naturalidade.",
    icon: Smile,
  },
  {
    title: "Estrutura e cuidado clínico",
    description:
      "Um ambiente organizado e preparado para proporcionar conforto, atenção e segurança durante o atendimento.",
    icon: ShieldCheck,
  },
] satisfies readonly CareBenefit[];

export function TrustBand() {
  return (
    <section
      aria-labelledby="trust-band-title"
      className="relative isolate overflow-hidden bg-surface py-16 md:py-20 lg:py-24"
    >
      <Image
        src={brandImages.logo.mark}
        alt=""
        width={1024}
        height={1024}
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 z-0 hidden size-[36rem] -translate-y-1/2 select-none opacity-[0.045] md:block lg:-right-24 lg:size-[40rem]"
      />

      <Container className="relative z-10">
        <SectionHeader
          eyebrow="Nosso jeito de cuidar"
          title="Atenção aos mínimos detalhes."
          description="Na Clínica Bellissimo, cada atendimento é conduzido com atenção, planejamento e foco no equilíbrio entre saúde, função e estética."
          titleId="trust-band-title"
        />

        <ul className="mt-10 grid gap-x-8 gap-y-10 md:mt-12 md:grid-cols-2 md:gap-y-12 xl:grid-cols-4">
          {careBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <li key={benefit.title} className="relative z-10">
                <article>
                  <div className="flex size-12 items-center justify-center rounded-[14px] bg-surface-muted text-brand">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-[clamp(1.5rem,2vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-[15px] leading-[1.65] text-foreground-muted sm:text-base">
                    {benefit.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
