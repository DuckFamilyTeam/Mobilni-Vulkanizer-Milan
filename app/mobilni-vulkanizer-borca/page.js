import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';

export const metadata = {
  title: 'Mobilni Vulkanizer Borča | Dolazak za 15-30 min — 24/7',
  description:
    'Mobilni vulkanizer Borča — dolazim na vašu adresu u Borči za 15-30 minuta. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva, non-stop 24h. Pozovite +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer borca, vulkanizer borča, krpljenje gume borča, zamena guma borča, vulkanizer dolazi borča, vulkanizer 24h borča, vulkanizer dolazi na adresu borča, vulkanizer noću borča, vulkanizer vikend borča',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Borča | Dolazak 15-30 min — 24/7',
    description:
      'Probušena guma u Borči? Stižem za 15-30 min — sa preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
    locale: 'sr_RS',
    type: 'website',
  },
};

const locationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-borca#service',
      name: 'Mobilni Vulkanizer Borča',
      description:
        'Mobilna vulkanizerska usluga u Borči — dolazak na vašu adresu za 15-30 minuta. Non-stop 24h.',
      url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
      provider: { '@id': 'https://mobilnivulkanizermilan.com/#business' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Borča', containedInPlace: { '@type': 'City', name: 'Beograd' } },
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
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
      areaServed: { '@type': 'AdministrativeArea', name: 'Borča', containedInPlace: { '@type': 'City', name: 'Beograd' } },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '127', bestRating: '5' },
    },
  ],
};

export default function BorcaPage() {
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
              Borča · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Borča</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Probušena guma u Borči? Bez panike. Pozovite Milana — sa više od
              10 godina iskustva u vulkanizerskom zanatu, dolazim na vašu
              adresu u proseku za 15 do 30 minuta. Krpljenje, zamena pneumatika
              i balansiranje na licu mesta — 24 časa dnevno, 7 dana u nedelji.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Borča"
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
                Pozovi: +381 64 12 90 929
              </a>
              <a href="https://wa.me/381641290929" className="btn-secondary">
                💬 WhatsApp
              </a>
            </div>

            <span className="loc-hero-quick">
              ⚡ <strong>Borča Centar · Greda · Sebeš · Borča III</strong> — sve adrese pokrivene
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Vulkanizer koji dolazi vama u Borču</h2>
            <p>
              Borča je naselje koje volim da pokrivam — ljudi su prijateljski,
              ulice prepoznatljive, i kad nekome u Borči pukne guma, taj poziv
              često stiže prvi. <strong>Mobilni vulkanizer u Borči</strong>{' '}
              znači jednu jednostavnu stvar: ne morate gurati auto do najbliže
              radnje, ne morate zvati vučnu službu i ne morate planirati pola
              dana za nešto što se rešava za 20 minuta. Pozovete me, ja krenem,
              i u proseku sam kod vas za 15 do 30 minuta.
            </p>

            <p>
              Već <strong>preko 10 godina</strong> se bavim vulkanizerskim
              zanatom, i Borču odlično poznajem. Bilo da ste u centru naselja
              kod Crkve Svetog Velikomučenika Stefana, na Zrenjaninskom putu
              kod izlaza iz grada, u Borča Gredi, u ulici Ivana Milutinovića,
              ili dublje prema naseljima Borča III i Sebeš — adresa nije
              problem. Stižem do vas bilo gde između Pupinovog mosta i izlaza
              ka Pančevu, po svakom delu naselja.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min do dolaska</div>
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
                <div className="loc-stat-num">5.0★</div>
                <div className="loc-stat-label">Google ocena</div>
              </div>
            </div>

            <h2>Šta sve donosim sa sobom</h2>
            <p>
              Mobilni vulkanizer nije neko ko dođe sa krpom i kanapom. U
              servisnom vozilu nosim kompletno opremljen mini-vulkanizer:
              kompresor, hidrauličnu dizalicu, profesionalan vulkanizerski
              alat, materijal za krpljenje, balansirku, set za demontažu i
              montažu pneumatika i sve potrebne instrumente za kontrolu
              pritiska. Sve što ima fiksna vulkanizerska radnja imam i ja u
              kombiju — samo što meni nije problem da se to nađe ispred vaše
              zgrade u Borča Gredi u 23:00.
            </p>

            <div className="loc-cta-band">
              <h3>Već sada vam treba vulkanizer u Borči?</h3>
              <p>
                Jedan poziv i krećem ka vama. Procenu vremena dobijate odmah,
                cenu pre početka rada — bez skrivenih troškova.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Kada me najčešće zovu iz Borče</h2>
            <p>
              Iz Borče dobijam pozive uglavnom u dve tipične situacije.{' '}
              <strong>Prvo</strong> — neko ujutru izlazi iz zgrade, žuri na
              posao i vidi izduvanu gumu. Klasično "noćno punjenje" zbog
              udarca u rupu prethodnog dana ili šrafa u protektoru. Umesto da
              gubi sat vremena na traženje vulkanizera, pozove me, popijem
              kafu, krpim gumu, i čovek krene na posao bez kašnjenja.
            </p>
            <p>
              <strong>Druga situacija</strong> — vozač skreće sa Zrenjaninskog
              puta i nagazi nešto kod ulaska u naselje, ili na rotacijama oko
              Pupinovog mosta. Tad se ne usuđuje da nastavi, parkira na prvom
              bezbednom mestu, i opet — zove mene. Reagujem brzo jer znam koliko
              je nezgodno čekati pored saobraćajnice.
            </p>

            <h2>Profesionalan rad, ne improvizacija</h2>
            <p>
              Vulkanizerski zanat nije mesto za improvizaciju. Kad krpim gumu,
              krpim je <strong>iznutra</strong>, profesionalno, sa garancijom
              od 30 dana. Kad menjam pneumatik, koristim opremu koja ne
              oštećuje felnu, šelnu ni ventilski adapter. Kad balansiram,
              balansiram do nule. To je razlika između nekoga ko "popravlja
              gume" i pravog mobilnog vulkanizera koji iza sebe ima decenije
              rada — kuda god išao u Borči.
            </p>

            <h3>Adrese i delovi Borče koje pokrivam</h3>
            <ul>
              <li>Borča Centar — Ivana Milutinovića, Mihaja Eminescua, Hrastova</li>
              <li>Borča Greda i Borča III — sve sporedne ulice</li>
              <li>Sebeš i okolina — naselje, kuće, garaže</li>
              <li>Zrenjaninski put — od Pupinovog mosta do izlaza ka Pančevu</li>
              <li>Crkva Svetog Velikomučenika Stefana i okolne zone</li>
              <li>Sve adrese duž puta ka Krnjači i ka Ovči</li>
            </ul>

            <h2>Sezonska zamena guma — Borča kod kuće</h2>
            <p>
              Pored hitnih intervencija, dosta klijenata iz Borče bira da{' '}
              <strong>sezonsku zamenu letnjih i zimskih guma</strong> obavi
              upravo kod kuće — bez gubljenja pola dana u redu kod fiksne
              radnje. Dogovorimo termin koji vama odgovara, dođem ispred vaše
              kuće u Borči, donosim balansirku i sav alat, i sve uradim za
              30-40 minuta. Posebno praktično za ljude koji žive u porodičnim
              kućama u Borča Gredi ili u Sebešu, gde je dvorište dovoljno za
              normalan rad.
            </p>

            <h2>Pošteno o ceni — bez iznenađenja</h2>
            <p>
              Konačnu cenu uvek znate <strong>pre početka rada</strong>. Ne
              naplaćujem dolazak za adrese unutar Borče, plaćate samo realan
              rad — krpljenje gume, zamenu pneumatika, balansiranje, dopunu
              pritiska. Cena zavisi od tipa intervencije, vremena (radni dan,
              vikend, noćna tarifa) i specifičnosti vašeg vozila. Bez
              skrivenih troškova, bez "dodatnih radova" koje vam nisu
              potrebni — to je jedini način koji mi je posle decenije rada
              ostao da poslujem.
            </p>

            <h2>Pozovi sada — u Borči sam za 15-30 min</h2>
            <p>
              Nemate vremena za čekanje, a ni nervi vam ne trebaju u sredu
              uveče. Pozovite <strong>+381 64 12 90 929</strong>, recite mi
              tačnu adresu u Borči i šta se desilo sa gumom. Daću vam realno
              vreme dolaska pre nego što krenem, fer cenu pre nego što počnem,
              i kvalitetno rešenje za 20-30 minuta od trenutka kad stignem.
              Bez izgovora, bez kašnjenja, bez skrivenih troškova — to je moja
              reč.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Probušena guma u Borči ne čeka — neću ni ja</h2>
            <p>
              Jedan poziv i krećem na vašu adresu. Non-stop, 24h, svih 365 dana
              u godini.
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
