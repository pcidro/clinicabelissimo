import Image, { getImageProps } from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/data/clinic";
import { homeContent } from "@/data/home";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  const { hero } = homeContent;
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message: clinic.contact.whatsappMessage,
  });
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: hero.images.desktop.src,
    alt: hero.imageAlt,
    width: hero.images.desktop.width,
    height: hero.images.desktop.height,
    sizes: "100vw",
  });

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-section relative isolate flex flex-col overflow-hidden md:h-[calc(100svh-4.5rem)] md:min-h-[600px] md:max-h-[720px] md:bg-hero-background xl:h-[calc(100svh-5rem)] xl:min-h-[680px] xl:max-h-[820px]"
    >
      {/* ── Mobile: imagem fullscreen como background ── */}
      <Image
        src={hero.images.mobile.src}
        alt={hero.imageAlt}
        width={hero.images.mobile.width}
        height={hero.images.mobile.height}
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="hero-mobile-bg absolute inset-0 -z-20 size-full object-cover md:hidden"
      />

      {/* ── Mobile: gradiente contínuo sobre a imagem ── */}
      <div
        className="hero-mobile-gradient absolute inset-0 -z-10 md:hidden"
        aria-hidden="true"
      />

      {/* ── Mobile: conteúdo sobreposto na parte inferior ── */}
      <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-end px-5 pb-7 text-center md:hidden">
        <div className="mx-auto w-full max-w-[26rem]">
          <h1
            id="hero-title"
            className="font-display text-[clamp(2rem,8.5vw,2.75rem)] font-medium leading-[1.02] tracking-[-0.018em] text-white"
          >
            {hero.title}
          </h1>
          <p className="mt-4 text-[15px] leading-[1.6] text-white/85">
            {hero.description}
          </p>
          <div className="mt-6 flex w-full max-w-[20rem] mx-auto flex-col gap-2.5 sm:flex-row sm:max-w-none sm:justify-center">
            <Button
              variant="primary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-11 px-4 text-sm font-bold justify-center rounded-xl !whitespace-normal sm:w-auto"
            >
              <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
              {hero.primaryAction}
            </Button>
            <Button
              variant="secondary"
              href="#tratamentos"
              className="w-full min-h-11 px-4 text-sm font-bold justify-center rounded-xl bg-[#f4efe9] text-foreground hover:bg-[#eae3dc] !whitespace-normal sm:w-auto"
            >
              {hero.secondaryAction}
            </Button>
          </div>
        </div>
      </div>

      {/* ── Desktop: layout original intacto ── */}
      <picture className="relative hidden md:absolute md:inset-0 md:-z-20 md:block md:size-full">
        <source
          media="(min-width: 768px)"
          srcSet={desktopSrcSet}
          sizes="100vw"
        />
        <Image
          src={hero.images.desktop.src}
          alt={hero.imageAlt}
          width={hero.images.desktop.width}
          height={hero.images.desktop.height}
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="hero-image absolute inset-0 size-full object-cover"
        />
      </picture>

      <Container className="relative z-10 hidden md:flex md:flex-1 md:items-center md:py-12 xl:py-16">
        <div className="w-full max-w-[34rem] text-left xl:max-w-[38rem]">
          <p className="text-[13px] font-bold leading-[1.3] tracking-[0.12em] text-brand">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-4 font-display text-[clamp(3rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.018em] text-foreground"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-[1.6] text-foreground-muted">
            {hero.description}
          </p>

          <div className="mt-8 flex gap-3">
            <Button
              variant="primary"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp text-white mr-2 text-lg"></i>
              {hero.primaryAction}
            </Button>
            <Button
              variant="secondary"
              href="#tratamentos"
            >
              {hero.secondaryAction}
            </Button>
          </div>

          <p className="mt-6 text-sm font-medium leading-[1.45] text-foreground-muted">
            {hero.signature}
          </p>
        </div>
      </Container>
    </section>
  );
}
