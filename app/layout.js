import './globals.css';
import { Bebas_Neue, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import ClientEffects from './components/ClientEffects';

// Inter uklonjen 2026-09-25 (Nikola odobrio): na srpskom je skidao 3 fajla, 142 KiB
// (latin, latin-ext za č ć š ž, vietnamese za đ). Tekst sada koristi sistemski font
// telefona, preko --font-inter u :root u globals.css. Vraćanje: vrati ovaj blok i
// inter.variable u className na <html>.

const bebasNeue = Bebas_Neue({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  display: 'optional',
  variable: '--font-bebas',
  preload: false,
});

// Playfair nosi h1 u herou, koji je LCP element na mobilnom (PSI 2026-09-25),
// pa se preloaduje. Samo latin, jer h1 nema dijakritike; latin-ext se skida po potrebi.
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  display: 'optional',
  variable: '--font-playfair',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://www.mobilnivulkanizermilan.com'),
  title: 'Mobilni vulkanizer Beograd, dolazak za 15 do 30 minuta | Milan',
  description:
    'Milan dolazi na vašu adresu za 15 do 30 minuta, non-stop 24 časa, svih 7 dana. Krpljenje, zamena i balansiranje guma na licu mesta. Pozovite +381 64 12 90 929.',
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
    canonical: '/',
  },
  openGraph: {
    locale: 'sr_RS',
    type: 'website',
    url: 'https://www.mobilnivulkanizermilan.com/',
    title: 'Mobilni vulkanizer Beograd, dolazak za 15 do 30 minuta | Milan',
    description:
      'Probušena guma? Zamena pneumatika? Dolazim na bilo koju lokaciju u Beogradu, brzo i profesionalno, u bilo koje doba dana ili noći.',
    images: [
      'https://www.mobilnivulkanizermilan.com/logo.png',
    ],
    siteName: 'Mobilni Vulkanizer Milan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobilni vulkanizer Beograd, dolazak za 15 do 30 minuta | Milan',
    description:
      'Probušena guma? Pozovite Milana, dolazim za 15-30 min na bilo koju lokaciju u Beogradu. Non-stop 24h.',
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
    // Koordinate ispravljene 2026-09-27: prethodne (44.787197, 20.457273) su bile
    // generički centar Beograda, ne stvarna lokacija biznisa. Nove vrednosti su iz
    // Google Maps sameAs linka ispod (isti CID 0x45f6e9ef011b2c0, 3d/4d parametri),
    // nezavisno potvrđene geokodiranjem adrese "Zrenjaninski put 146b" (OpenStreetMap
    // Nominatim: 44.8804936, 20.4659396 — ~90m razlike, isti blok).
    'geo.position': '44.8812156;20.4656484',
    ICBM: '44.8812156, 20.4656484',
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
  '@id': 'https://www.mobilnivulkanizermilan.com/#website',
  name: 'Mobilni Vulkanizer Milan',
  url: 'https://www.mobilnivulkanizermilan.com',
  description: 'Mobilna vulkanizerska usluga u Beogradu, dolazak za 15 do 30 minuta, non-stop 24h.',
  inLanguage: 'sr-RS',
  publisher: {
    '@id': 'https://www.mobilnivulkanizermilan.com/#business',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.mobilnivulkanizermilan.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

function buildLocalBusinessJsonLd() {
  return {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': 'https://www.mobilnivulkanizermilan.com/#business',
  name: 'Mobilni Vulkanizer Milan',
  alternateName: 'Mobilni Vulkanizer Beograd',
  description:
    'Mobilna vulkanizerska usluga u Beogradu. Dolazak na adresu za 15-30 minuta. Non-stop 24h. Krpljenje gume, zamena pneumatika, balansiranje, ispravka felni.',
  url: 'https://www.mobilnivulkanizermilan.com/',
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
    // Ispravljeno 2026-09-27, vidi napomenu uz 'geo.position' u metadata.other gore.
    latitude: 44.8812156,
    longitude: 20.4656484,
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
  sameAs: [
    'https://www.google.com/maps/place/Mobilni+Vulkanizer+Milan/@44.8812194,20.4630735,621m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a637b18ce8a37:0x45f6e9ef011b2c0!8m2!3d44.8812156!4d20.4656484!16s%2Fg%2F11z5_7wp4p?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D',
  ],
  department: [
    {
      '@type': 'AutoRepair',
      '@id': 'https://www.mobilnivulkanizermilan.com/vulkanizerska-radnja-borca#radnja',
      name: 'Vulkanizerska radnja Borča',
      url: 'https://www.mobilnivulkanizermilan.com/vulkanizerska-radnja-borca',
      telephone: '+381641290929',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Zrenjaninski put 146b',
        addressLocality: 'Borča, Beograd',
        addressRegion: 'Beograd',
        addressCountry: 'RS',
      },
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
    },
  ],
  };
}

export default async function RootLayout({ children }) {
  const localBusinessJsonLd = buildLocalBusinessJsonLd();
  return (
    <html lang="sr-RS" className={`${bebasNeue.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* 2026-09-27 (vizuelna petlja, K1): ".reveal" sekcije se sad podrazumevano
            VIDE (globals.css) — sakrivaju se SAMO kad ovaj sinhroni inline script
            stigne da doda ".js" klasu na <html>, pre prvog crtanja. Ako JS ne
            proradi uopšte (padne, blokiran, spor uređaj), korisnik vidi normalan,
            popunjen sadržaj — nikad trajno praznu sekciju. Namerno je ovo mali,
            blokirajući <script> (ne next/script), jer mora da se izvrši PRE nego
            što browser nacrta prvi frejm; jedna linija, nemerljiv uticaj na TBT. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        {/* Preconnect za Google servise — brža konekcija bez blokiranja */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
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
        {/* Skip link — WCAG 2.4.1 (Bypass Blocks). Prvi fokusabilni element na
            stranici, vizuelno sakriven van ekrana dok nije fokusiran (vidi
            .skip-link u globals.css). Vodi tastaturnog/screen-reader korisnika
            direktno na <main id="main-content">, mimo Header/nav-a. */}
        <a href="#main-content" className="skip-link">Preskoči na sadržaj</a>

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

        {/* GTM — afterInteractive: ne blokira render, učitava se tek kad je stranica interaktivna.
            Bilo pogrešno postavljeno na lazyOnload (učitava se tek pri browser idle-u, posle
            window load-a) — ispravljeno 2026-09-09, jer je kasnilo baš za klik na "Pozovi Milana",
            najčešću i najvredniju radnju na sajtu. */}
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
