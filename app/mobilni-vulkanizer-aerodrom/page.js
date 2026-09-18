import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Aerodrom | Dolazak za 30 min, 24/7',
  description:
    'Mobilni vulkanizer u zoni Aerodroma Nikola Tesla, Surčin, Bežanija — dolazim za oko 30 minuta. Krpljenje gume, zamena pneumatika, balansiranje. Non-stop 24h. Pozovite +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer aerodrom, vulkanizer 24h aerodrom nikola tesla, 24h vulkanizer surčin, krpljenje guma aerodrom beograd, hitna zamena guma surčin, mobilni vulkanizer bežanija, dežurni vulkanizer aerodrom, mobilni vulkanizer dobanovci, mobilni vulkanizer surčin, mobilni vulkanizer bežanijska kosa',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Aerodrom | Dolazak oko 30 min, 24/7',
    description:
      'Probušena guma kod Aerodroma Nikola Tesla, u Surčinu ili Bežaniji? Stižem za oko 30 minuta. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom',
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
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom#service',
      name: 'Mobilni Vulkanizer Aerodrom',
      description:
        'Mobilna vulkanizerska usluga u zoni Aerodroma Nikola Tesla, Surčina, Bežanije i Bežanijske kose — dolazak na adresu za oko 30 minuta. Non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Surčin',
        containedInPlace: { '@type': 'City', name: 'Beograd' },
      },
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
  ],
};
}

export default async function AerodromPage() {
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
              Aerodrom Nikola Tesla · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Aerodrom</span>
              <br />
              dolazim za 30 minuta
            </h1>

            <p className="loc-hero-lead">
              Probušena guma kod Aerodroma Nikola Tesla, u Surčinu, Bežaniji
              ili Bežanijskoj kosi? Bez panike. Pozovite Milana — sa više od
              10 godina iskustva u vulkanizerskom zanatu, dolazim na vašu
              adresu u proseku za oko 30 minuta. Krpljenje, zamena pneumatika
              i balansiranje na licu mesta — 24 časa dnevno, 7 dana u
              nedelji.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Aerodrom"
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
              ⚡ <strong>Surčin · Bežanija · Bežanijska kosa · Dobanovci</strong> — sve pokriveno
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Vulkanizer koji dolazi do Aerodroma Nikola Tesla</h2>
            <p>
              Zonu Aerodroma Nikola Tesla, Surčin, Bežaniju i Bežanijsku kosu
              pokrivam redovno. <strong>Mobilni vulkanizer kod aerodroma</strong>{' '}
              znači jednu jednostavnu stvar: ne morate gurati auto do
              najbliže radnje, ne morate zvati vučnu službu i ne morate
              planirati pola dana za nešto što se rešava za 30 minuta.
              Pozovete me, ja krenem, i u proseku sam kod vas za oko 30
              minuta.
            </p>

            <p>
              Već <strong>preko 10 godina</strong> se bavim vulkanizerskim
              zanatom. Bilo da ste u Surčinu, na Bežaniji, na Bežanijskoj
              kosi, kod samog aerodroma ili u nekom od okolnih mesta —
              adresa nije problem. Stižem do vas bez zaobilaznica i bez
              čekanja.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">~30</div>
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
                <div className="loc-stat-num">{rating.toFixed(1)}★</div>
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
              kombiju — samo što meni nije problem da se to nađe ispred vas
              u Surčinu ili kod aerodroma u 23:00.
            </p>

            <div className="loc-cta-band">
              <h3>Već sada vam treba vulkanizer kod aerodroma?</h3>
              <p>
                Jedan poziv i krećem ka vama. Procenu vremena dobijate odmah,
                cenu pre početka rada — bez skrivenih troškova.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Kada me najčešće zovu iz ove zone</h2>
            <p>
              Iz zone aerodroma dobijam pozive uglavnom u dve tipične
              situacije. <strong>Prvo</strong> — putnik ili vozač rent-a-car
              vozila primeti izduvanu gumu neposredno pre ili posle leta,
              pod pritiskom vremena zbog transfera ili predaje vozila.
              Umesto gubljenja sata na traženje vulkanizera, pozove me i
              rešimo to na licu mesta, bez kašnjenja na let ili predaju
              vozila.
            </p>
            <p>
              <strong>Druga situacija</strong> — meštani Surčina, Bežanije i
              Bežanijske kose nagaze nešto na putu, često na deonicama oko
              aerodromske zone gde je saobraćaj gušći. Tad se ne usuđuju da
              nastave, parkiraju na prvom bezbednom mestu, i zovu mene.
              Reagujem brzo jer znam koliko je nezgodno čekati pored
              saobraćajnice u blizini aerodroma.
            </p>

            <h2>Profesionalan rad, ne improvizacija</h2>
            <p>
              Vulkanizerski zanat nije mesto za improvizaciju. Kad krpim gumu,
              krpim je <strong>iznutra</strong>, profesionalno, sa garancijom
              od 30 dana. Kad menjam pneumatik, koristim opremu koja ne
              oštećuje felnu, šelnu ni ventilski adapter. Kad balansiram,
              balansiram do nule. To je razlika između nekoga ko "popravlja
              gume" i pravog mobilnog vulkanizera koji iza sebe ima decenije
              rada — kuda god išao u zoni aerodroma.
            </p>

            <h3>Delovi zone Aerodroma koje pokrivam</h3>
            <ul>
              <li>Aerodrom Nikola Tesla i neposredna okolina</li>
              <li>Surčin — centar i okolna naselja</li>
              <li>Bežanija</li>
              <li>Bežanijska kosa</li>
              <li>Dobanovci — uz dogovor</li>
              <li>Okolna mesta uz dogovor</li>
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              *Lista naselja je okvirna — javite tačnu adresu pri pozivu, dajem
              realnu procenu vremena dolaska za svaku lokaciju.
            </p>

            <h2>Sezonska zamena guma — kod kuće ili pre puta</h2>
            <p>
              Pored hitnih intervencija, dosta klijenata iz ove zone bira da{' '}
              <strong>sezonsku zamenu letnjih i zimskih guma</strong> obavi
              upravo kod kuće — bez gubljenja pola dana u redu kod fiksne
              radnje. Dogovorimo termin koji vama odgovara, dođem ispred vaše
              adrese u Surčinu, na Bežaniji ili Bežanijskoj kosi, donosim
              balansirku i sav alat, i sve uradim za 30-40 minuta.
            </p>

            <h2>Pošteno o ceni — bez iznenađenja</h2>
            <p>
              Konačnu cenu uvek znate <strong>pre početka rada</strong>. Cena
              zavisi od tipa intervencije, vremena (radni dan, vikend, noćna
              tarifa) i specifičnosti vašeg vozila. Bez skrivenih troškova,
              bez "dodatnih radova" koje vam nisu potrebni — to je jedini
              način koji mi je posle decenije rada ostao da poslujem.
            </p>

            <h2>Pozovi sada — kod aerodroma sam za oko 30 min</h2>
            <p>
              Nemate vremena za čekanje, a ni nervi vam ne trebaju pre leta ili
              usred radnog dana. Pozovite <strong>+381 64 12 90 929</strong>,
              recite mi tačnu adresu u zoni aerodroma i šta se desilo sa
              gumom. Daću vam realno vreme dolaska pre nego što krenem, fer
              cenu pre nego što počnem, i kvalitetno rešenje ubrzo nakon što
              stignem. Bez izgovora, bez kašnjenja, bez skrivenih troškova —
              to je moja reč.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Probušena guma kod aerodroma ne čeka — neću ni ja</h2>
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
