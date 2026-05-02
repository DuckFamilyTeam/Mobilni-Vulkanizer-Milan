import './globals.css';
import ClientEffects from './components/ClientEffects';

export const metadata = {
  metadataBase: new URL('https://mobilnivulkanizermilan.com'),
  title: 'Mobilni Vulkanizer Beograd | Milan — Dolazim za 15-30 min, NON-STOP 24h',
  description:
    'Mobilni vulkanizer Beograd — Milan dolazi na vašu adresu za 15-30 minuta. Krpljenje gume, zamena pneumatika, balansiranje. Non-stop 24h, 7 dana u nedelji. Pozovite +381 64 12 90 929',
  keywords:
    'mobilni vulkanizer beograd, vulkanizer dolazi, hitna pomoć guma, krpljenje gume beograd, zamena pneumatika beograd, vulkanizer 24h, mobilni vulkanizer milan, probušena guma beograd, vulkanizer non-stop',
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

const localBusinessJsonLd = {
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
    ratingValue: '5.0',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.google.com/maps/place/Mobilni+Vulkanizer+Milan/@44.8812194,20.4630735,621m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a637b18ce8a37:0x45f6e9ef011b2c0!8m2!3d44.8812156!4d20.4656484!16s%2Fg%2F11z5_7wp4p?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr-RS">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://mobilnivulkanizermilan.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        {children}
        <ClientEffects />
      </body>
    </html>
  );
}
