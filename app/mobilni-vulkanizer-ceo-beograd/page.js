import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';

export const metadata = {
  title: 'Mobilni Vulkanizer Ceo Beograd | Pokrivenost celog grada — 24/7',
  description:
    'Mobilni vulkanizer za ceo Beograd — pokrivam ceo grad. Bliže lokacije 15-30 min, najudaljeniji delovi 30-60 min. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer ceo beograd, vulkanizer beograd, vulkanizer dolazi beograd, mobilni vulkanizer beograd, vulkanizer 24h beograd, krpljenje gume beograd, vulkanizer dolazi na adresu, vulkanizer noću, vulkanizer vikend, jeftini vulkanizer beograd, vulkanizer praznici',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Ceo Beograd | 24/7',
    description:
      'Pokrivam ceo Beograd. Bliže lokacije 15-30 min, najudaljeniji delovi 30-60 min. Sa preko 10 godina iskustva u zanatu.',
    url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
    locale: 'sr_RS',
    type: 'website',
  },
};

const locationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd#service',
  name: 'Mobilni Vulkanizer Ceo Beograd',
  description:
    'Mobilna vulkanizerska usluga za ceo Beograd — pokriva svih 17 opština. Bliže lokacije 15-30 min, najudaljeniji delovi 30-60 min. Non-stop 24h.',
  url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
  provider: {
    '@id': 'https://mobilnivulkanizermilan.com/#business',
  },
  areaServed: {
    '@type': 'City',
    name: 'Beograd',
    containedInPlace: { '@type': 'Country', name: 'Srbija' },
  },
  serviceType: 'Mobilna vulkanizerska usluga',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
    servicePhone: '+381641290929',
    availableLanguage: 'Serbian',
  },
};

export default function CeoBeogradPage() {
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
              Ceo Beograd · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">ceo Beograd</span>
              <br />
              dolazim 24h, ceo grad
            </h1>

            <p className="loc-hero-lead">
              Bilo gde u Beogradu da ste — stižem. Sa preko 10 godina iskustva
              u vulkanizerskom zanatu, pokrivam ceo grad. Za bliže lokacije u
              Beogradu dolazak je u proseku 15 do 30 minuta; za najudaljenije
              delove grada računajte <strong>30 do 60 minuta</strong>.
              Profesionalan rad, garancija na uslugu, non-stop 24 časa
              dnevno.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Beograd"
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
              ⚡ <strong>Bliže lokacije 15-30 min · Najudaljeniji delovi 30-60 min</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilna vulkanizerska usluga za ceo Beograd</h2>
            <p>
              Beograd je veliki grad. Od centra do oboda ima i po više
              desetina kilometara — i kad nekome ko živi na obodu grada pukne
              guma u dva ujutru, ne vredi mu da zna da neki vulkanizer u
              centru radi non-stop. Treba mu neko ko stiže do njega. Zato kao{' '}
              <strong>mobilni vulkanizer za ceo Beograd</strong> sa preko
              decenije iskustva, ne pravim razliku između delova grada:
              stižem svuda, ali otvoreno govorim koliko vremena treba — bez
              "obećanja od 15 minuta" za adresu koja je daleko od centra.
            </p>

            <p>
              Vreme dolaska zavisi od toga gde se trenutno nalazim i gde ste
              vi. Za bliže lokacije u Beogradu računajte 15 do 30 minuta. Za
              najudaljenije delove grada vreme dolaska je{' '}
              <strong>30 do 60 minuta</strong>. Uvek vam dam realnu procenu
              pre nego što krenem, da znate tačno na čemu ste — bez lažnih
              obećanja i bez nepotrebnog kašnjenja.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min · bliže lokacije</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">30-60</div>
                <div className="loc-stat-label">min · udaljeniji delovi</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">10+</div>
                <div className="loc-stat-label">godina iskustva</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">24/7</div>
                <div className="loc-stat-label">non-stop</div>
              </div>
            </div>

            <h2>Bliže lokacije u Beogradu — 15 do 30 minuta</h2>
            <p>
              Za bliže lokacije u Beogradu dolazak je u proseku{' '}
              <strong>15 do 30 minuta</strong> od poziva. To su sve adrese
              koje su u dohvatu standardnog gradskog saobraćaja — bilo da
              ste ispred zgrade, na poslu, na parkingu tržnog centra ili
              pored neke od većih saobraćajnica. Pokrivenost je puna, vreme
              reagovanja brzo, a procenu vremena uvek dobijate odmah po
              pozivu.
            </p>
            <p>
              Najčešće intervencije u ovim delovima Beograda su klasične —
              probušena guma usled šrafa ili eksera, "noćno punjenje" koje
              vlasnik primeti tek ujutru, sezonska zamena letnjih i zimskih
              guma, balansiranje. Sve to radim na licu mesta, sa kompletnim
              alatom i materijalom u servisnom vozilu.
            </p>

            <div className="loc-cta-band">
              <h3>Već sad vam treba vulkanizer u Beogradu?</h3>
              <p>
                Pozovite, kažite mi tačnu adresu, i dobijate realnu procenu
                vremena pre nego što krenem.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Najudaljeniji delovi grada — 30 do 60 minuta</h2>
            <p>
              Za najudaljenije delove Beograda vreme dolaska je realno{' '}
              <strong>30 do 60 minuta</strong>, u zavisnosti od saobraćaja i
              tačne adrese. Ovo su delovi grada koji su značajno udaljeni od
              centra — i tu se ne pravi pretvaranje da se može stići "za 15
              minuta". Iskreno govorim koliko ću vam trebati, i tačno toliko
              stignem.
            </p>
            <p>
              I za udaljenije adrese radim potpuno isti obim posla kao i u
              gradu — krpljenje, zamenu pneumatika, balansiranje, ispravku
              felni, kontrolu pritiska. Sve što ima fiksna vulkanizerska
              radnja, imam i ja u kombiju, i nije problem da se to nađe pred
              vašom kućom u dva ujutru.
            </p>

            <h2>Sve usluge — kod vaše adrese</h2>
            <p>
              U servisnom vozilu nosim kompletnu vulkanizersku opremu:
              kompresor, hidrauličnu dizalicu, balansirku, profesionalan alat
              za demontažu i montažu, materijal za krpljenje gume iznutra,
              instrumente za proveru pritiska. Sve standardne vulkanizerske
              intervencije radim na licu mesta:
            </p>
            <ul>
              <li>Krpljenje probušene gume — iznutra, sa garancijom 30 dana</li>
              <li>Zamena letnjih i zimskih pneumatika</li>
              <li>Balansiranje točkova do nule</li>
              <li>Ispravka blago oštećenih felni</li>
              <li>Kontrola i dopuna pritiska svih guma</li>
              <li>Konsultacije za teže slučajeve i organizacija vučne ako treba</li>
            </ul>

            <h2>Zašto sa mnom — 10+ godina iskustva</h2>
            <p>
              Vulkanizerski zanat radim već <strong>preko decenije</strong> —
              i u tom vremenu sam pokrio bukvalno svaki deo Beograda. Od
              noćnih intervencija u udaljenim naseljima do prepodnevnih
              krpljenja u srcu grada, od porodičnih kuća na obodu do
              servisnih intervencija u industrijskim zonama — sve su to
              standardni dani na terenu. Tačno znam kako da pristupim svakoj
              situaciji, koju opremu da uzmem i kojim putem da idem do vaše
              tačne adrese.
            </p>

            <h2>Pošteno o vremenu i ceni</h2>
            <p>
              Ne obećavam ono što ne mogu. Ako ste u udaljenijem delu grada
              u 23h, neću vam reći "stižem za 15 minuta". Reći ću vam stvarnu
              procenu — pa i ako je 50 minuta. Cena se određuje pre početka
              rada, na osnovu lokacije, vremena, vozila i vrste intervencije,
              bez skrivenih troškova. To je, posle 10+ godina, jedini način
              koji mi je ostao da poslujem.
            </p>

            <h2>Pozovi sada — pokrivam ceo Beograd</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, kažite mi tačnu
              adresu (ulica i broj, opština ili naselje) i šta se desilo sa
              gumom. Procenu vremena dobijate odmah — bilo da ste u centru
              (15-30 min) ili na obodu grada (30-60 min). Profesionalna
              mobilna vulkanizerska usluga, non-stop 24h, svaki dan u godini.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Bilo gde u Beogradu — stižem</h2>
            <p>
              Pokrivam ceo grad. Bliže lokacije 15-30 min, najudaljeniji
              delovi 30-60 min. Non-stop 24 časa.
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
