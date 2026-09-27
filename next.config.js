/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  // Agresivno keširanje statičnih asseta
  async headers() {
    return [
      {
        // Sigurnosna zaglavlja za sve rute — ne diraju CSP, jer bi pogrešno
        // podešen Content-Security-Policy mogao da blokira GTM/GA4/Google Maps
        // skripte bez lokalnog testiranja pre objave. Ovo su bezbedna, bez rizika
        // po postojeću funkcionalnost.
        source: '/(.*)',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Ispravljeno 2026-09-27: '/(:path*\\.webp)' NIJE validan path-to-regexp
        // pattern (uglaste zagrade oko ':path*\.webp' se tretiraju kao literalan
        // capture group, ne kao "bilo koja putanja koja se završava na .webp"),
        // pa ovo pravilo nikad nije pogađalo nijedan zahtev — potvrđeno live
        // (curl -I je vraćao 'max-age=0, must-revalidate' umesto 'immutable').
        // Ispravan zapis: ':path*.webp' bez spoljašnjih zagrada i bez escape-a
        // (Next.js sam parsira '.' u source stringu kao literal, ne kao regex).
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.woff2',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
