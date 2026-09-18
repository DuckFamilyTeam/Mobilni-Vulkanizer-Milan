import { NextResponse } from 'next/server';

// Zemlje na koje se primenjuje GDPR/UK-GDPR (EU + EEA + UK) + Švajcarska (sopstveni,
// vrlo sličan zakon o zaštiti podataka — tretiramo je isto radi pravne sigurnosti).
// Bilo koja zemlja NA ovoj listi = "restricted" (banner za pristanak, kao do sada).
// Bilo koja zemlja koja NIJE na listi (npr. RS, BA, ME, MK, US...) = "open" (odmah
// odobreno merenje, bez bannera).
const RESTRICTED_COUNTRIES = new Set([
  // EU (27)
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU',
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA van EU
  'IS', 'LI', 'NO',
  // UK
  'GB',
  // Švajcarska — nije EU/EEA, ali ima svoj (sličan) zakon o privatnosti
  'CH',
]);

export function middleware(request) {
  const response = NextResponse.next();

  // Vercel ubacuje geo-lokaciju posetioca kroz ovaj header na Edge-u — bez ikakvog
  // dodatnog servisa ili poziva ka trećoj strani.
  const country = request.headers.get('x-vercel-ip-country') || request.geo?.country || '';

  // Fail-safe: ako zemlja nije prepoznata (retko, npr. neki VPN-ovi ili lokalni razvoj),
  // tretiramo kao "restricted" — sigurnije po pravnoj strani nego obrnuto.
  const region = country && !RESTRICTED_COUNTRIES.has(country) ? 'open' : 'restricted';

  response.cookies.set('mvm_consent_region', region, {
    path: '/',
    maxAge: 60 * 60 * 24, // osveži se svaki dan, dovoljno za ovu namenu
    sameSite: 'lax',
    // NAMERNO bez httpOnly — GTM (klijentska strana) mora da može da pročita ovaj kolačić
    // preko "1st Party Cookie" promenljive da bi odlučio da li prikazuje banner.
  });

  return response;
}

export const config = {
  // Sve rute osim Next.js internih/statičkih fajlova.
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico)$).*)',
};
