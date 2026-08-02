// Server-only helper — poziva Google Places API (New) da dobije živu ocenu i broj
// recenzija za GBP profil. Ako poziv ne uspe iz bilo kog razloga (nema ključa, mreža,
// kvota, neočekivan odgovor), tiho vraća fallback vrednosti — sajt se nikad ne lomi
// zbog ovoga i nikad ne blokira renderovanje stranice.
//
// Keširano preko Next.js fetch cache-a (revalidate: 86400 = jednom dnevno), tako da
// realna potrošnja Places API kvote ostaje minimalna (~1 poziv/dan po deployment-u).

const FALLBACK = { rating: 5.0, reviewCount: 127 };
const BUSINESS_QUERY = 'Mobilni Vulkanizer Milan, Beograd';

export async function getGbpRating() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK;

  try {
    const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.rating,places.userRatingCount,places.formattedAddress,places.displayName',
      },
      body: JSON.stringify({ textQuery: BUSINESS_QUERY }),
      next: { revalidate: 86400 },
    });

    if (!res.ok) return FALLBACK;

    const data = await res.json();
    const place = data?.places?.[0];

    if (!place || typeof place.rating !== 'number' || typeof place.userRatingCount !== 'number') {
      return FALLBACK;
    }

    return { rating: place.rating, reviewCount: place.userRatingCount };
  } catch {
    return FALLBACK;
  }
}
