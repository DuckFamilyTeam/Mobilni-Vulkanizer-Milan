import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';

export const metadata = {
  title: 'Mobilni Vulkanizer Novi Beograd | 15-30 min — 24/7',
  description:
    'Mobilni vulkanizer Novi Beograd — dolazim na sve blokove, bulevare i poslovne zone za 15-30 minuta. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva, non-stop 24h. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer novi beograd, vulkanizer novi beograd, krpljenje gume novi beograd, zamena guma novi beograd, vulkanizer blok 21, vulkanizer blok 45, vulkanizer 24h novi beograd, vulkanizer dolazi na adresu novi beograd, vulkanizer noću novi beograd, vulkanizer vikend novi beograd',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Novi Beograd | 15-30 min, 24/7',
    description:
      'Probušena guma na Novom Beogradu? Stižem na svaki blok, bulevar i parking u proseku za 15-30 minuta — sa preko 10 godina iskustva.',
    url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
    locale: 'sr_RS',
    type: 'website',
  },
};

const locationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd#service',
  name: 'Mobilni Vulkanizer Novi Beograd',
  description:
    'Mobilna vulkanizerska usluga na Novom Beogradu — dolazak na sve blokove, bulevare i poslovne zone za 15-30 minuta. Non-stop 24h.',
  url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
  provider: {
    '@id': 'https://mobilnivulkanizermilan.com/#business',
  },
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Novi Beograd',
    containedInPlace: { '@type': 'City', name: 'Beograd' },
  },
  serviceType: 'Mobilna vulkanizerska usluga',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
    servicePhone: '+381641290929',
    availableLanguage: 'Serbian',
  },
};

export default function NoviBeogradPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />
      <Header />

      <section className="loc-hero" role="region" aria-labelledby="loc-title">
        <div className="container">
          <div className="loc-hero-inner">
            <div className="eyebrow">
              <span className="live-pulse"></span>
              Novi Beograd · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Novi Beograd</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Probušena guma na bulevaru, u bloku, na parkingu Ušća ili u
              poslovnoj zoni? Stižem na bilo koju adresu na Novom Beogradu u
              proseku za 15 do 30 minuta. Više od 10 godina iskustva, kompletna
              oprema u servisnom vozilu, profesionalan rad — non-stop 24 časa
              dnevno.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Novi Beograd"
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
              ⚡ <strong>Svi blokovi · Bulevar Mihajla Pupina · Arena · Airport City</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilni vulkanizer za ceo Novi Beograd</h2>
            <p>
              Novi Beograd je urbano srce zapadnog dela grada — desetine
              blokova, kilometri bulevara, ogromni parkinzi tržnih centara,
              poslovne zone sa hiljadama vozila dnevno. Kada ovde nekome
              pukne guma, vreme je više nego dragoceno. Zato kao{' '}
              <strong>mobilni vulkanizer Novi Beograd</strong> ovaj deo grada
              znam u prste — od najstarijih blokova oko Genex kule do novih
              naselja na Belvilleu, od Bulevara Mihajla Pupina do parkinga ispred
              Štark Arene.
            </p>

            <p>
              Sa <strong>preko 10 godina iskustva</strong> u zanatu, brzo
              dijagnostikujem o čemu se radi i znam najbrži put do vaše tačne
              lokacije. Bilo da ste ispred zgrade u Bloku 45, na parkingu
              Delta City, ispred poslovne zgrade na Bulevaru Zorana Đinđića,
              ili negde između Brankovog mosta i Hyatt-a — adresa nije
              prepreka.
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

            <h2>Sve blokove i bulevare pokrivam</h2>
            <p>
              Novi Beograd ima svoju logiku — blokove organizovane po
              brojevima, sa parkinzima koje vozači dobro poznaju, ali i sa
              skrivenim ulicama gde GPS zna da pogreši. Zato ne tražim "negde
              kod broja 17" — pitam vas tačan blok, broj zgrade i ulaz, i tako
              znam tačno gde da skrenem. Ovo je razlika između
              profesionalnog mobilnog vulkanizera i nekoga ko po prvi put
              dolazi u kraj.
            </p>

            <h3>Najčešće lokacije gde stižem na Novom Beogradu</h3>
            <ul>
              <li>Blokovi 19a, 21, 23, 28, 29, 33, 44, 45, 61, 62, 63, 70 — sve adrese</li>
              <li>Bulevar Mihajla Pupina, Bulevar Zorana Đinđića, Bulevar AVNOJ-a, Bulevar umetnosti</li>
              <li>Ušće Shopping Center i okolni parking</li>
              <li>Štark Arena, Sava Centar, Hotel Hyatt</li>
              <li>Belville, Delta City, Airport City</li>
              <li>Genex (Zapadna kapija), Tošin bunar — zone ka Zemunu</li>
              <li>Most na Adi, Brankov most i Gazela — prilazi i izlazi</li>
            </ul>

            <div className="loc-cta-band">
              <h3>Negde ste zaglavili na Novom Beogradu?</h3>
              <p>
                Pozovite — kažite mi blok i broj, daću realnu procenu vremena
                pre nego što krenem.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Šta sve mogu da uradim na licu mesta</h2>
            <p>
              U servisnom vozilu nosim kompletnu vulkanizersku opremu —
              kompresor, hidrauličnu dizalicu, balansirku, profesionalan alat
              za demontažu i montažu, materijal za krpljenje, instrumente za
              proveru pritiska. Krpim probušene gume{' '}
              <strong>iznutra (sa garancijom 30 dana)</strong>, menjam zimske i
              letnje pneumatike, balansiram točkove do nule, ispravljam blago
              oštećene felne, kontrolišem i punim pritisak svih guma. Sve
              standardne vulkanizerske intervencije — ali kod vas, ne vas kod
              mene.
            </p>

            <h2>Zašto baš mobilni vulkanizer na Novom Beogradu</h2>
            <p>
              Saobraćaj na Novom Beogradu je gust, parkinzi su retko prazni, a
              vučne službe znaju da se ovde najduže čekaju. Mobilni vulkanizer
              vam štedi sve to — ne pomerate auto, ne plaćate vuču, ne gubite
              radne sate. Posebno je važno za one koji ovde rade u poslovnim
              zgradama na Pupinovom bulevaru, ili za roditelje koji pokupe
              decu iz vrtića u nekom od blokova i ne smeju da krenu sa
              probušenom gumom.
            </p>

            <h2>Kada me najčešće zovu sa Novog Beograda</h2>
            <p>
              Sa Novog Beograda pozivi dolaze tokom celog dana, ali postoje
              tri tipične situacije. <strong>Prvo</strong> — pozivi iz
              poslovnih zgrada na Pupinovom bulevaru i Bulevaru Zorana
              Đinđića. Ljudi izađu iz kancelarije u 18h, sednu u auto i
              vide da je guma puna. Često su u pitanju šrafovi pokupljeni na
              gradilištima i poslovnim parkinzima. Stignem za 15-30 minuta i
              čovek krene kući bez gubitka vremena.
            </p>
            <p>
              <strong>Drugo</strong> — pozivi sa parkinga tržnih centara.
              Delta City, Ušće, Airport City Mall — svi imaju ogromne
              parkinge gde ljudi parkiraju, obave kupovinu, i nakon dva sata
              vide ispraznjenu gumu. Tu sam naročito brz, jer sve te lokacije
              dobro znam i znam i kojim ulazom je najlakše prići.
            </p>
            <p>
              <strong>Treće</strong> — pozivi iz blokova u kasnim satima.
              Stanovnici se vraćaju kući, parkiraju ispred zgrade, i tek
              ujutru otkriju da je guma izduvana preko noći (klasično "noćno
              punjenje" zbog šrafa ili eksera). Ovde najčešće radim ujutru
              između 6h i 9h — pre nego što ljudi krenu na posao.
            </p>

            <h2>Sezonska zamena guma — Novi Beograd</h2>
            <p>
              Pored hitnih intervencija, mnogi sa Novog Beograda biraju da{' '}
              <strong>sezonsku zamenu letnjih i zimskih guma</strong> obave
              upravo preko mobilnog vulkanizera. Umesto da gubite pola dana
              čekajući u redu, dogovorimo termin koji vama odgovara — pre
              posla, tokom pauze za ručak, ili uveče kod kuće. Donosim
              kompletan alat i balansirku, uradim sve na licu mesta. Posebno
              je praktično za stanare zgrada u blokovima, gde fiksne radnje
              nisu blizu.
            </p>

            <h2>Pozovi me sada — Novi Beograd, 15-30 minuta</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, kažite mi tačnu
              adresu (blok, broj zgrade, ulaz) i šta se desilo sa gumom. Procenu
              vremena dobijate odmah, fer cenu pre početka rada, profesionalnu
              uslugu sa <strong>više od 10 godina iskustva</strong>. Non-stop
              24 časa, svih 365 dana u godini — uključujući noći, vikende i
              praznike.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Novi Beograd, 15-30 min od poziva do dolaska</h2>
            <p>
              Jedan poziv je sve što vam treba. Brzo, profesionalno, u bilo
              koje doba dana ili noći.
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

      <Footer />
      <StickyCall />
    </>
  );
}
