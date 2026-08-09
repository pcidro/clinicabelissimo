import "server-only";

export const GOOGLE_REVIEWS_REVALIDATE_SECONDS = 604800;

type GoogleLocalizedText = {
  text?: string;
};

type GoogleAuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GooglePlaceReview = {
  authorAttribution?: GoogleAuthorAttribution;
  rating?: number;
  text?: GoogleLocalizedText;
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
};

type GooglePlaceDetailsResponse = {
  reviews?: GooglePlaceReview[];
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
};

export type GoogleReview = {
  authorName: string;
  authorUri: string;
  authorPhotoUri: string;
  rating: number;
  text: string;
  relativePublishTime: string;
  googleMapsUri: string;
};

export type GoogleReviewsData = {
  reviews: GoogleReview[];
  rating?: number;
  userRatingCount?: number;
  googleMapsUri: string;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();

  if (!apiKey || !placeId) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[Google Places] GOOGLE_PLACES_API_KEY ou GOOGLE_PLACE_ID não configurado.",
      );
    }

    return null;
  }

  const endpoint = new URL(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
  );
  endpoint.searchParams.set("languageCode", "pt-BR");

  try {
    const response = await fetch(endpoint, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "reviews,rating,userRatingCount,googleMapsUri",
      },
      next: { revalidate: GOOGLE_REVIEWS_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      console.error(
        `[Google Places] Falha ao buscar avaliações. Status: ${response.status}.`,
      );
      return null;
    }

    const place = (await response.json()) as GooglePlaceDetailsResponse;
    const reviews = (place.reviews ?? [])
      .filter((review) => Boolean(review.text?.text?.trim()))
      .slice(0, 2)
      .map((review) => ({
        authorName: review.authorAttribution?.displayName?.trim() ?? "",
        authorUri: review.authorAttribution?.uri?.trim() ?? "",
        authorPhotoUri: review.authorAttribution?.photoUri?.trim() ?? "",
        rating: Math.max(0, Math.min(5, review.rating ?? 0)),
        text: review.text?.text?.trim() ?? "",
        relativePublishTime:
          review.relativePublishTimeDescription?.trim() ?? "",
        googleMapsUri: review.googleMapsUri?.trim() ?? "",
      }));

    return {
      reviews,
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      googleMapsUri: place.googleMapsUri?.trim() ?? "",
    };
  } catch {
    console.error("[Google Places] Não foi possível consultar as avaliações.");
    return null;
  }
}
