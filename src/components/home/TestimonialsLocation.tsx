import { Clock, ExternalLink, MapPin, MessageCircle, Star } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/data/clinic";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { getGoogleReviews, type GoogleReview } from "@/services/google-places";

const appointmentMessage =
  "Olá! Conheci a Clínica Bellissimo pelo site e gostaria de agendar uma avaliação.";

function ReviewStars({ rating }: { rating: number }) {
  const filledStars = Math.round(rating);

  return (
    <div
      className="flex items-center gap-1 text-brand"
      role="img"
      aria-label={`${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={18}
          strokeWidth={1.8}
          fill={index < filledStars ? "currentColor" : "none"}
          className={index < filledStars ? "text-brand" : "text-border-strong"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function GoogleReviewCard({ review }: { review: GoogleReview }) {
  return (
    <li>
      <figure className="rounded-[18px] border border-border border-t-2 border-t-brand bg-surface p-6 md:p-7">
        <ReviewStars rating={review.rating} />

        <blockquote className="mt-5 text-base leading-[1.75] text-foreground sm:text-lg">
          “{review.text}”
        </blockquote>

        <figcaption className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            {review.authorName ? (
              review.authorUri ? (
                <a
                  href={review.authorUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm text-sm font-bold leading-[1.4] text-foreground transition-colors duration-160 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
                >
                  {review.authorName}
                </a>
              ) : (
                <p className="text-sm font-bold leading-[1.4] text-foreground">
                  {review.authorName}
                </p>
              )
            ) : null}
            <p className="mt-1 text-sm leading-[1.5] text-foreground-muted">
              Google
              {review.relativePublishTime
                ? ` · ${review.relativePublishTime}`
                : ""}
            </p>
          </div>

          {review.googleMapsUri ? (
            <a
              href={review.googleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors duration-160 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
            >
              Ver no Google
              <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
          ) : null}
        </figcaption>
      </figure>
    </li>
  );
}

export async function TestimonialsLocation() {
  const googleReviews = await getGoogleReviews();
  const whatsappUrl = createWhatsAppLink({
    phone: clinic.contact.whatsappNumber,
    message: appointmentMessage,
  });
  const encodedAddress = encodeURIComponent(clinic.location.fullAddress);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const reviewsLink = googleReviews?.googleMapsUri || mapLinkUrl;
  const hasRatingSummary =
    typeof googleReviews?.rating === "number" &&
    typeof googleReviews.userRatingCount === "number";

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
                Experiências de quem confia na Bellissimo.
              </h2>
              {hasRatingSummary ? (
                <p className="mt-4 text-sm font-semibold leading-[1.5] text-foreground-muted">
                  {googleReviews.rating?.toLocaleString("pt-BR", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  })}{" "}
                  no Google · {googleReviews.userRatingCount}{" "}
                  {googleReviews.userRatingCount === 1
                    ? "avaliação"
                    : "avaliações"}
                </p>
              ) : null}
            </header>

            {googleReviews?.reviews.length ? (
              <ul className="mt-8 space-y-5 md:mt-10">
                {googleReviews.reviews.map((review) => (
                  <GoogleReviewCard
                    key={`${review.authorName}-${review.relativePublishTime}`}
                    review={review}
                  />
                ))}
              </ul>
            ) : null}

            <a
              href={reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-brand underline decoration-brand/40 underline-offset-4 transition-colors duration-160 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
            >
              Ver avaliações no Google
              <ExternalLink size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
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
