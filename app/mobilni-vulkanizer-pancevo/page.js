import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Pančevo | Dolazak za 20 min, 24/7',
  description:
    'Mobilni vulkanizer Pančevo, dolazim na vašu adresu u Pančevu za oko 20 minuta. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva, non-stop 24h. Pozovite +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer pancevo, vulkanizer pancevo, krpljenje gume pancevo, zamena guma pancevo, vulkanizer dolazi pancevo, vulkanizer 24h pancevo, vulkanizer dolazi na adresu pancevo, vulkanizer noću pancevo, vulkanizer vikend pancevo',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Pančevo | Dolazak oko 20 min, 24/7',
    description:
      'Probušena guma u Pančevu? Stižem za oko 20 minuta. Preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo',
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
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo#service',
      name: 'Mobilni Vulkanizer Pančevo',
      description:
        'Mobilna vulkanizerska usluga u Pančevu — dolazak na vašu adresu za oko 20 minuta. Non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: { '@type': 'City', name: 'Pančevo' },
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
  ],
};
}

export default async function PancevoPage() {
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
              Pančevo · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Pančevo</span>
              <br />
              dolazim za 20 minuta
            </h1>

            <p className="loc-hero-lead">
              Probušena guma u Pančevu? Bez panike. Pozovite Milana — sa više
              od 10 godina iskustva u vulkanizerskom zanatu, dolazim na vašu
              adresu u proseku za oko 20 minuta, pravo sa Zrenjaninskog puta u
              Borči. Krpljenje, zamena pneumatika i balansiranje na licu
              mesta — 24 časa dnevno, 7 dana u nedelji.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Pančevo"
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
              ⚡ <strong>Centar · Kotež · Tesla · Strelište · Vojlovica</strong> — sve naselje pokriveno
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Vulkanizer koji dolazi vama u Pančevo</h2>
            <p>
              Pančevo pokrivam redovno — radnja mi je u Borči na
              Zrenjaninskom putu, praktično na izlazu prema vama, pa je poziv
              iz Pančeva uvek blizu vrha reda. <strong>Mobilni vulkanizer u
              Pančevu</strong> znači jednu jednostavnu stvar: ne morate
              gurati auto do najbliže radnje, ne morate zvati vučnu službu i
              ne morate planirati pola dana za nešto što se rešava za 20
              minuta. Pozovete me, ja krenem, i u proseku sam kod vas za oko
              20 minuta.
            </p>

            <p>
              Već <strong>preko 10 godina</strong> se bavim vulkanizerskim
              zanatom. Bilo da ste u centru Pančeva, u Kotežu, na Tesli, u
              Streliištu, u Vojlovici ili u nekom od okolnih mesta —
              adresa nije problem. Stižem do vas pravo preko Zrenjaninskog
              puta, bez zaobilaznica i bez čekanja.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">~20</div>
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
              kombiju — samo što meni nije problem da se to nađe ispred vaše
              zgrade u Pančevu u 23:00.
            </p>

            <div className="loc-cta-band">
              <h3>Već sada vam treba vulkanizer u Pančevu?</h3>
              <p>
                Jedan poziv i krećem ka vama. Procenu vremena dobijate odmah,
                cenu pre početka rada — bez skrivenih troškova.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Kada me najčešće zovu iz Pančeva</h2>
            <p>
              Iz Pančeva dobijam pozive uglavnom u dve tipične situacije.{' '}
              <strong>Prvo</strong> — neko ujutru izlazi iz zgrade, žuri na
              posao i vidi izduvanu gumu. Klasično "noćno punjenje" zbog
              udarca u rupu prethodnog dana ili šrafa u protektoru. Umesto da
              gubi sat vremena na traženje vulkanizera, pozove me, popijem
              kafu, krpim gumu, i čovek krene na posao bez kašnjenja.
            </p>
            <p>
              <strong>Druga situacija</strong> — vozač nagazi nešto na putu
              ka Beogradu ili nazad prema Pančevu, negde na deonici Zrenjaninskog
              puta. Tad se ne usuđuje da nastavi, parkira na prvom bezbednom
              mestu, i opet — zove mene. Reagujem brzo jer znam koliko je
              nezgodno čekati pored saobraćajnice.
            </p>

            <h2>Profesionalan rad, ne improvizacija</h2>
            <p>
              Vulkanizerski zanat nije mesto za improvizaciju. Kad krpim gumu,
              krpim je <strong>iznutra</strong>, profesionalno, sa garancijom
              od 30 dana. Kad menjam pneumatik, koristim opremu koja ne
              oštećuje felnu, šelnu ni ventilski adapter. Kad balansiram,
              balansiram do nule. To je razlika između nekoga ko "popravlja
              gume" i pravog mobilnog vulkanizera koji iza sebe ima decenije
              rada — kuda god išao u Pančevu.
            </p>

            <h3>Delovi Pančeva i okoline koje pokrivam</h3>
            <ul>
              <li>Centar Pančeva i uža gradska zona</li>
              <li>Kotež I, II i III</li>
              <li>Tesla i Strelište</li>
              <li>Vojlovica i Topola</li>
              <li>Zrenjaninski put — pravac Beograd–Pančevo</li>
              <li>Okolna mesta uz dogovor (Starčevo, Omoljica, Banatsko Novo Selo)</li>
            </ul>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
              *Lista naselja je okvirna — javite tačnu adresu pri pozivu, dajem
              realnu procenu vremena dolaska za svaku lokaciju.
            </p>

            <h2>Sezonska zamena guma — Pančevo kod kuće</h2>
            <p>
              Pored hitnih intervencija, dosta klijenata iz Pančeva bira da{' '}
              <strong>sezonsku zamenu letnjih i zimskih guma</strong> obavi
              upravo kod kuće — bez gubljenja pola dana u redu kod fiksne
              radnje. Dogovorimo termin koji vama odgovara, dođem ispred vaše
              kuće u Pančevu, donosim balansirku i sav alat, i sve uradim za
              30-40 minuta.
            </p>

            <h2>Pošteno o ceni — bez iznenađenja</h2>
            <p>
              Konačnu cenu uvek znate <strong>pre početka rada</strong>. Cena
              zavisi od tipa intervencije, vremena (radni dan, vikend, noćna
              tarifa) i specifičnosti vašeg vozila. Bez skrivenih troškova,
              bez "dodatnih radova" koje vam nisu potrebni — to je jedini
              način koji mi je posle decenije rada ostao da poslujem.
            </p>

            <h2>Pozovi sada — u Pančevu sam za oko 20 min</h2>
            <p>
              Nemate vremena za čekanje, a ni nervi vam ne trebaju u sredu
              uveče. Pozovite <strong>+381 64 12 90 929</strong>, recite mi
              tačnu adresu u Pančevu i šta se desilo sa gumom. Daću vam realno
              vreme dolaska pre nego što krenem, fer cenu pre nego što počnem,
              i kvalitetno rešenje ubrzo nakon što stignem. Bez izgovora, bez
              kašnjenja, bez skrivenih troškova — to je moja reč.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Probušena guma u Pančevu ne čeka — neću ni ja</h2>
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
