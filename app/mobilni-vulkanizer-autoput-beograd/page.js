import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Autoput Beograd | Hitna pomoć — 24/7',
  description:
    'Mobilni vulkanizer na autoputu Beograd — hitna intervencija na E-75, E-70, obilaznici. Krpljenje gume, zamena pneumatika, dolazak na traku za zaustavljanje. 10+ godina iskustva, non-stop 24h. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer autoput beograd, vulkanizer autoput, hitna pomoć guma autoput, vulkanizer e75 beograd, vulkanizer obilaznica beograd, pomoć na putu vulkanizer, vulkanizer dolazi na adresu autoput, vulkanizer noću autoput, vulkanizer vikend autoput, vulkanizer praznici autoput',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Autoput Beograd | Hitna pomoć 24/7',
    description:
      'Probušena guma na autoputu? Stižem na traku za zaustavljanje — sa preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
    locale: 'sr_RS',
    type: 'website',
  },
};

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd#service',
      name: 'Mobilni Vulkanizer Autoput Beograd',
      description:
        'Mobilna vulkanizerska usluga na autoputu Beograd — hitna intervencija na E-75, E-70, obilaznici. Dolazak na traku za zaustavljanje. Non-stop 24h.',
      url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
      provider: { '@id': 'https://mobilnivulkanizermilan.com/#business' },
      areaServed: [
        { '@type': 'Road', name: 'E-75 Beograd' },
        { '@type': 'Road', name: 'E-70 Beograd' },
        { '@type': 'Road', name: 'Beogradska obilaznica' },
      ],
      serviceType: 'Hitna mobilna vulkanizerska usluga na autoputu',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
    {
      '@type': 'AutoRepair',
      '@id': 'https://mobilnivulkanizermilan.com/#business',
      name: 'Mobilni Vulkanizer Milan',
      description: 'Profesionalna mobilna vulkanizerska usluga u Beogradu. Dolazak na adresu za 15–30 minuta, non-stop 24h.',
      url: 'https://mobilnivulkanizermilan.com',
      telephone: '+381641290929',
      priceRange: '$$',
      image: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-milan-na-intervenciji-u-beogradu.webp',
      address: { '@type': 'PostalAddress', addressLocality: 'Beograd', addressCountry: 'RS' },
      geo: { '@type': 'GeoCoordinates', latitude: 44.8125, longitude: 20.4612 },
      areaServed: [
        { '@type': 'Road', name: 'E-75 Beograd' },
        { '@type': 'Road', name: 'E-70 Beograd' },
        { '@type': 'Road', name: 'Beogradska obilaznica' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: String(rating.toFixed(1)), reviewCount: String(reviewCount), bestRating: '5' },
    },
  ],
};
}

export default async function AutoputPage() {
  const { rating, reviewCount } = await getGbpRating();
  const locationJsonLd = buildLocationJsonLd(rating, reviewCount);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />
      <Header />
      <main id="main-content">

      <section className="loc-hero" role="region" aria-labelledby="loc-title">
        <div className="container">
          <div className="loc-hero-inner">
            <div className="eyebrow">
              <span className="live-pulse"></span>
              Autoput Beograd · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">na autoputu</span>
              <br />
              kroz Beograd — 24/7
            </h1>

            <p className="loc-hero-lead">
              Stali ste sa probušenom gumom na auto-putu kroz Beograd? Bez
              panike. Pozovite Milana — sa preko 10 godina iskustva u zanatu,
              dolazim na traku za zaustavljanje, krpim ili menjam gumu na
              licu mesta i pomognem vam da bezbedno nastavite put. Non-stop,
              24 časa dnevno, svaki dan u godini.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera na autoputu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Hitno: +381 64 12 90 929
              </a>
              <a href="https://wa.me/381641290929" className="btn-secondary">
                💬 WhatsApp
              </a>
            </div>

            <span className="loc-hero-quick">
              ⚡ <strong>E-75 · E-70 · Obilaznica · Most na Adi · Gazela</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Hitna vulkanizerska pomoć na autoputu</h2>
            <p>
              Probušena guma na autoputu nije isto što i probušena guma kod
              kuće. Tu je <strong>brzina ključna</strong> — ne samo zato što
              se žuri, nego zato što čekanje pored saobraćajnice nije
              bezbedno. Auto na traci za zaustavljanje, sa upaljenim
              "trepćućim" svetlima, je magnet za probleme: nepažljivi vozači,
              loša vidljivost noću, kiša, magla, gomila kamiona koji prolaze.
              Kao mobilni vulkanizer sa <strong>preko 10 godina iskustva</strong>,
              ovakve pozive shvatam kao prioritet.
            </p>

            <p>
              Pokrivam sve glavne pravce auto-puta kroz Beograd i u njegovoj
              neposrednoj okolini: E-75 ka Nišu i ka Novom Sadu, E-70 ka
              Zagrebu, beogradsku obilaznicu, sve petlje i izlaze. Bilo da
              ste stali kod petlje Bubanj potok, na pravcu ka Surčinu, kod
              petlje Beograd-jug, na Mostu na Adi, na Gazeli, ili negde na
              prilazima ka Batajnici — krenuću ka vama čim dobijem poziv.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min do dolaska*</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">10+</div>
                <div className="loc-stat-label">godina iskustva</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">24/7</div>
                <div className="loc-stat-label">non-stop</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">{rating.toFixed(1)}★</div>
                <div className="loc-stat-label">Google ocena</div>
              </div>
            </div>

            <h2>Pravci i petlje gde najčešće stižem</h2>
            <p>
              Auto-put kroz Beograd ima nekoliko ključnih tačaka gde vozači
              najčešće zovu — i sve ih dobro znam. Reči "stao sam kod petlje"
              nisu dovoljne; trebaju mi smer, kilometraža sa GPS-a ili neka
              prepoznatljiva referenca. Što je opis tačniji, brže stižem.
            </p>

            <h3>Auto-put i okolne saobraćajnice koje pokrivam</h3>
            <ul>
              <li>E-75 (autoput Beograd–Niš) — sve do petlje Bubanj potok i dalje</li>
              <li>E-75 (autoput Beograd–Novi Sad) — do petlje Batajnica i dalje</li>
              <li>E-70 (Beograd–Zagreb) — do petlje Surčin i dalje</li>
              <li>Beogradska obilaznica — sve petlje i sektori</li>
              <li>Most na Adi — oba pravca</li>
              <li>Gazela most — i prilazi sa obe strane</li>
              <li>Petlje: Bubanj potok, Beograd-jug, Bežanija, Batajnica, Stara Pazova, Surčin</li>
              <li>Naplatne rampe i okolni terminali</li>
            </ul>

            <div className="loc-cta-band">
              <h3>Stali ste na auto-putu — sad?</h3>
              <p>
                Pozovite, opišite tačan smer i poslednju petlju koju ste
                prošli. Krećem odmah, dajem realnu procenu vremena.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Hitan poziv: +381 64 12 90 929
              </a>
            </div>

            <h2>Šta da uradite dok ne stignem</h2>
            <p>
              Bezbednost je prvo. Skrenite na traku za zaustavljanje koliko
              god je to moguće, izađite iz vozila sa strane suprotne od
              saobraćaja, obucite refleksni prsluk i postavite trougao na
              propisanu udaljenost. Nemojte stajati pored saobraćajne trake i
              ne pokušavajte da menjate gumu sami ako je auto blizu vozne
              trake — rizik je veliki, posebno noću ili po lošem vremenu.
              Kada me pozovete, kažem vam tačno šta dalje da radite dok ne
              stignem.
            </p>

            <h2>Šta sve nosim za intervencije na auto-putu</h2>
            <p>
              Servisno vozilo je opremljeno za rad na otvorenom: kompresor,
              hidraulična dizalica, profesionalan vulkanizerski alat za sve
              standardne dimenzije guma, materijal za krpljenje iznutra,
              balansirka, set za demontažu i montažu pneumatika, refleksni
              znaci. Krpim probušene gume sa garancijom od 30 dana ili
              menjam pneumatik vašom rezervnom gumom — što god je brže i
              bezbednije za nastavak puta.
            </p>

            <h2>Kada me najčešće zovu sa auto-puta</h2>
            <p>
              Pozivi sa auto-puta imaju svoju logiku. Najčešći su tokom dana
              radnim danima — vozači koji se voze na poslove izvan Beograda i
              vraćaju se kasno popodne, ili kamiondžije i kombi vozači
              tranzita. Drugi pik je vikendom — porodice koje idu na vikend
              putovanja, ka Avali, Smederevu, ili Topčideru, i vraćaju se
              uveče sa probušenom gumom.
            </p>
            <p>
              Treća tipična grupa su <strong>tranzitni vozači</strong> koji
              prvi put prolaze kroz Beograd, najčešće nemaju lokalnog
              kontakta, i nađu broj na Google-u. Tu mi najviše pomaže ako mi
              kažu pravac (na primer "ka Nišu") i poslednju petlju koju su
              prošli — onda znam tačno kako da im priđem suprotnim smerom.
            </p>

            <h2>Bezbednost je prvo — i za vas i za mene</h2>
            <p>
              Kad stignem na auto-put, postavim refleksne znake i radim sa
              strane vozila koja je suprotna saobraćaju. Po lošem vremenu
              (kiša, magla, sneg) radim opreznije i pažljivo. Iskustvo od{' '}
              <strong>preko 10 godina</strong> u zanatu — uključujući stotine
              intervencija na otvorenom — me je naučilo gde je granica brzine
              i sigurnosti. Bolje je da posao traje par minuta duže, nego da
              dođe do nezgode.
            </p>

            <h2>Pozovi sada — auto-put Beograd, hitno</h2>
            <p>
              <span className="loc-hero-quick" style={{ display: 'inline' }}>
                <em>* Vreme dolaska na auto-put zavisi od trenutne lokacije
                ekipe i tačke gde ste stali — uvek vam dam realnu procenu pre
                nego što krenem.</em>
              </span>
            </p>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi pravac
              (npr. "ka Nišu, posle petlje Bubanj potok") i šta se desilo sa
              gumom. Dobićete realnu procenu vremena dolaska, fer cenu, i
              profesionalnu uslugu sa <strong>preko 10 godina iskustva</strong>.
              Auto-put kroz Beograd nije mesto za gubljenje vremena —
              reagujem brzo i ozbiljno.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Probušena guma na auto-putu? Krećem odmah</h2>
            <p>
              Brza i profesionalna intervencija na svim pravcima oko Beograda.
              Non-stop 24h, svaki dan u godini.
            </p>
            <div className="loc-final-cta-num">
              <a href="tel:+381641290929">+381 64 12 90 929</a>
            </div>
            <div className="loc-final-cta-actions">
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah
              </a>
              <a href="https://wa.me/381641290929" className="btn-secondary">
                💬 WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B381641290929"
                className="btn-secondary"
              >
                💬 Viber
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
