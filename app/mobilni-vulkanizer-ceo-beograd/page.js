import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';

export const metadata = {
  title: 'Mobilni Vulkanizer Ceo Beograd | Pokrivenost svih opština — 24/7',
  description:
    'Mobilni vulkanizer za ceo Beograd — pokrivam sve opštine. Centar 15-30 min, najudaljeniji delovi grada 30-60 min. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer ceo beograd, vulkanizer beograd, vulkanizer dolazi beograd, mobilni vulkanizer sve opštine, vulkanizer 24h beograd, krpljenje gume beograd',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Ceo Beograd | Sve opštine, 24/7',
    description:
      'Pokrivam ceo Beograd — od centra do najudaljenijih opština. Stižem brzo, sa preko 10 godina iskustva u zanatu.',
    url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function CeoBeogradPage() {
  return (
    <>
      <Header />

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
              sve opštine, 24h
            </h1>

            <p className="loc-hero-lead">
              Bilo gde u Beogradu da ste — stižem. Sa preko 10 godina iskustva
              u vulkanizerskom zanatu, pokrivam svih 17 opština grada. U
              centralnim zonama dolazak je u proseku 15 do 30 minuta; za
              najudaljenije delove (Mladenovac, Lazarevac, Obrenovac,
              Padinska skela) računajte <strong>30 do 60 minuta</strong>.
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
              ⚡ <strong>Sve opštine · Centar 15-30 min · Periferija 30-60 min</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilna vulkanizerska usluga za ceo Beograd</h2>
            <p>
              Beograd je veliki grad. Od centra Starog grada do periferije ima
              i po 50 kilometara — i kad nekome ko živi u Mladenovcu pukne
              guma u dva ujutru, ne vredi mu da zna da neki vulkanizer u
              Vračaru radi non-stop. Treba mu neko ko stiže do njega. Zato kao{' '}
              <strong>mobilni vulkanizer za ceo Beograd</strong> sa preko
              decenije iskustva, ne pravim razliku između opština: stižem
              svuda, ali otvoreno govorim koliko vremena treba — bez
              "obećanja od 15 minuta" za adresu koja je 40 km daleko.
            </p>

            <p>
              Vreme dolaska zavisi od toga gde se trenutno nalazim i gde ste
              vi. Za centralne opštine i bliža naselja računajte 15 do 30
              minuta. Za udaljene delove grada — Mladenovac, Lazarevac,
              Obrenovac, Padinska skela, Sopot, Barajevo, Grocka — vreme
              dolaska je <strong>30 do 60 minuta</strong>. Uvek vam dam
              realnu procenu pre nego što krenem, da znate tačno na čemu ste.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min · centar</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">30-60</div>
                <div className="loc-stat-label">min · periferija</div>
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

            <h2>Centralne opštine — 15 do 30 minuta</h2>
            <p>
              U centralnim opštinama Beograda dolazak je u proseku 15-30
              minuta od poziva. To uključuje 10 gradskih opština:
            </p>
            <ul>
              <li>Stari grad — Knez Mihailova, Skadarlija, Kalemegdan, Dorćol</li>
              <li>Vračar — Crveni krst, Neimar, Trg Slavija</li>
              <li>Savski venac — Dedinje, Senjak, Topčidersko brdo</li>
              <li>Novi Beograd — svi blokovi, bulevari, poslovne zone</li>
              <li>Zemun — od Gardoša do Bežanijske kose</li>
              <li>Palilula — Karaburma, Kotež, Krnjača, Borča</li>
              <li>Voždovac — Banjica, Kumodraž, Šumice, Jajinci</li>
              <li>Zvezdara — Konjarnik, Mirijevo, Mali Mokri Lug</li>
              <li>Čukarica — Banovo brdo, Žarkovo, Cerak, Sremčica</li>
              <li>Rakovica — Kanarevo brdo, Resnik, Petlovo brdo</li>
            </ul>

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

            <h2>Prigradske opštine — 30 do 60 minuta</h2>
            <p>
              Za udaljenije delove grada vreme dolaska je realno{' '}
              <strong>30-60 minuta</strong>, u zavisnosti od saobraćaja i
              tačne adrese. Tu spadaju prigradske opštine sa udaljenim
              naseljima:
            </p>
            <ul>
              <li>Surčin — uključujući aerodrom Nikola Tesla i okolinu</li>
              <li>Obrenovac — centar i okolna sela (do ~40 km od centra Beograda)</li>
              <li>Lazarevac — udaljen oko 55-60 km od centra grada</li>
              <li>Mladenovac — najudaljeniji ka jugu (~45-50 km)</li>
              <li>Sopot — Ralja, Mali Požarevac i okolina</li>
              <li>Barajevo — sva naselja u okviru opštine</li>
              <li>Grocka — Vinča, Kaluđerica, Brestovik, Grocka centar</li>
              <li>Padinska skela, Ovča, Borča III i dalje izlazi grada</li>
            </ul>

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
              i u tom vremenu sam pokrio bukvalno svaku opštinu u Beogradu.
              Od noćnih intervencija na Avali do prepodnevnih krpljenja u
              Bloku 70, od porodičnih kuća u Kotežu do servisnih intervencija
              u industrijskim zonama Surčina — sve su to standardni dani na
              terenu. Tačno znam kako da pristupim svakoj situaciji, koju
              opremu da uzmem i kojim putem da idem.
            </p>

            <h2>Pošteno o vremenu i ceni</h2>
            <p>
              Ne obećavam ono što ne mogu. Ako ste u Mladenovcu u 23h, neću
              vam reći "stižem za 15 minuta". Reći ću vam stvarnu procenu —
              pa i ako je 50 minuta. Cena se određuje pre početka rada, na
              osnovu lokacije, vremena, vozila i vrste intervencije, bez
              skrivenih troškova. To je, posle 10+ godina, jedini način koji
              mi je ostao da poslujem.
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
              Sve opštine, sva naselja. Centar 15-30 min, periferija 30-60
              min. Non-stop 24 časa.
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
