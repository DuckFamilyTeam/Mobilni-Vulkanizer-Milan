/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,

  // NAPOMENA o kritičnom CSS-u: experimental.optimizeCss (critters kroz Next.js)
  // isprobano 2026-08-25 i NE RADI za App Router na ovoj verziji Next-a — build
  // prođe bez greške, ali critters ne inline-uje ništa (poznato ograničenje).
  // Rešenje umesto toga: postbuild skripta `scripts/inline-critical-css.js`
  // koja ručno pokreće critters nad već generisanim statičkim HTML fajlovima
  // (vidi "build" komandu u package.json). Ne dodavati optimizeCss ovde ponovo
  // bez provere da li Next.js verzija to već podržava za App Router.

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
        source: '/(:path*\\.webp)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(:path*\\.jpg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(:path*\\.png)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(:path*\\.woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
