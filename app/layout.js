import './globals.css';
import { Inter, Bebas_Neue, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import ClientEffects from './components/ClientEffects';
import { getGbpRating } from './lib/googlePlaces';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'swap',
  variable: '--font-bebas',
  preload: true,
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  display: 'swap',
  variable: '--font-playfair',
  preload: false, // not above the fold
});

export const metadata = {
  metadataBase: new URL('https://mobilnivulkanizermilan.com'),
  title: 'Mobilni Vulkanizer Beograd | Milan — Dolazim za 15-30 min, NON-STOP 24h',
  description:
    'Mobilni vulkanizer Beograd — Milan dolazi na vašu adresu za 15-30 minuta. Krpljenje gume, zamena pneumatika, balansiranje. Non-stop 24h, 7 dana u nedelji. Pozovite +381 64 12 90 929',
  keywords:
    'mobilni vulkanizer beograd, vulkanizer dolazi, hitna pomoć guma, krpljenje gume beograd, zamena pneumatika beograd, vulkanizer 24h, mobilni vulkanizer milan, probušena guma beograd, vulkanizer non-stop, vulkanizer dolazi na adresu, vulkanizer noću, vulkanizer vikend, jeftini vulkanizer beograd, vulkanizer praznici',
  authors: [{ name: 'Mobilni Vulkanizer Milan' }],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/',
  },
  openGraph: {
    locale: 'sr_RS',
    type: 'website',
    url: 'https://mobilnivulkanizermilan.com/',
    title: 'Mobilni Vulkanizer Beograd | Milan — Dolazim za 15-30 min, 24h',
    description:
      'Probušena guma? Zamena pneumatika? Dolazim na bilo koju lokaciju u Beogradu — brzo, profesionalno, u bilo koje doba dana ili noći.',
    images: [
      'https://www.mobilnivulkanizermilan.com/logo.png',
    ],
    siteName: 'Mobilni Vulkanizer Milan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobilni Vulkanizer Beograd | Milan — 15-30 min dolazak, 24h',
    description:
      'Probušena guma? Pozovite Milana — dolazim za 15-30 min na bilo koju lokaciju u Beogradu. Non-stop 24h.',
    images: [
      'https://www.mobilnivulkanizermilan.com/logo.png',
    ],
  },
  icons: {
    icon: 'https://www.mobilnivulkanizermilan.com/logo.png',
    apple:
      'https://www.mobilnivulkanizermilan.com/logo.png',
  },
  other: {
    'theme-color': '#0a0a0a',
    'geo.region': 'RS-00',
    'geo.placename': 'Beograd',
    'geo.position': '44.787197;20.457273',
    ICBM: '44.787197, 20.457273',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
};

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://mobilnivulkanizermilan.com/#website',
  name: 'Mobilni Vulkanizer Milan',
  url: 'https://mobilnivulkanizermilan.com',
  description: 'Mobilna vulkanizerska usluga u Beogradu — dolazak za 15–30 minuta, non-stop 24h.',
  inLanguage: 'sr-RS',
  publisher: {
    '@id': 'https://mobilnivulkanizermilan.com/#business',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mobilnivulkanizermilan.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

function buildLocalBusinessJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': 'https://mobilnivulkanizermilan.com/#business',
  name: 'Mobilni Vulkanizer Milan',
  alternateName: 'Mobilni Vulkanizer Beograd',
  description:
    'Mobilna vulkanizerska usluga u Beogradu. Dolazak na adresu za 15-30 minuta. Non-stop 24h. Krpljenje gume, zamena pneumatika, balansiranje, ispravka felni.',
  url: 'https://mobilnivulkanizermilan.com/',
  telephone: '+381641290929',
  priceRange: '$$',
  paymentAccepted: 'Gotovina, Dina, Visa, MasterCard, Maestro, American Express, IPS QR kod',
  currenciesAccepted: 'RSD',
  taxID: '115779198',
  image:
    'https://www.mobilnivulkanizermilan.com/logo.png',
  logo: 'https://www.mobilnivulkanizermilan.com/logo.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Beograd',
    addressRegion: 'Beograd',
    addressCountry: 'RS',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.787197,
    longitude: 20.457273,
  },
  areaServed: [
    { '@type': 'City', name: 'Beograd' },
    { '@type': 'AdministrativeArea', name: 'Novi Beograd' },
    { '@type': 'AdministrativeArea', name: 'Zemun' },
    { '@type': 'AdministrativeArea', name: 'Voždovac' },
    { '@type': 'AdministrativeArea', name: 'Vračar' },
    { '@type': 'AdministrativeArea', name: 'Stari grad' },
    { '@type': 'AdministrativeArea', name: 'Palilula' },
    { '@type': 'AdministrativeArea', name: 'Zvezdara' },
    { '@type': 'AdministrativeArea', name: 'Čukarica' },
    { '@type': 'AdministrativeArea', name: 'Rakovica' },
    { '@type': 'AdministrativeArea', name: 'Surčin' },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(rating.toFixed(1)),
    reviewCount: String(reviewCount),
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.google.com/maps/place/Mobilni+Vulkanizer+Milan/@44.8812194,20.4630735,621m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a637b18ce8a37:0x45f6e9ef011b2c0!8m2!3d44.8812156!4d20.4656484!16s%2Fg%2F11z5_7wp4p?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D',
  ],
  };
}

export default async function RootLayout({ children }) {
  const { rating, reviewCount } = await getGbpRating();
  const localBusinessJsonLd = buildLocalBusinessJsonLd(rating, reviewCount);
  return (
    <html lang="sr-RS" className={`${inter.variable} ${bebasNeue.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Preconnect za Google servise — brža konekcija bez blokiranja */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preload stvarne hero/LCP slike (hero-visual u page.js) — pre je ovde
            greškom bila preload-ovana slika iz About sekcije koja se ne renderuje
            do daleko niže na stranici, što je nepotrebno kasnilo LCP */}
        <link
          rel="preload"
          as="image"
          href="/montaza-gume-land-rover.webp"
          imageSrcSet="/montaza-gume-land-rover-mobile.webp 640w, /montaza-gume-land-rover.webp 1000w"
          imageSizes="(max-width: 768px) 100vw, 540px"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MKN47RW3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <ClientEffects />

        {/* GTM — afterInteractive: ne blokira render, učitava se tek kad je stranica interaktivna */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MKN47RW3');`,
          }}
        />
        {/* GA4 je pokriven kroz GTM tag — dupli direktni script uklonjen */}
      </body>
    </html>
  );
}
