import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';

export const metadata = {
  title: 'Mobilni Vulkanizer Krnjača | Dolazak 15-30 min — 24/7',
  description:
    'Mobilni vulkanizer Krnjača — dolazim za 15-30 minuta na bilo koju adresu u Krnjači, Reva, Kotežu i okolini. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer krnjača, vulkanizer krnjaca, krpljenje gume krnjača, zamena guma krnjača, vulkanizer reva, vulkanizer kotež, vulkanizer 24h krnjača, vulkanizer dolazi na adresu krnjača, vulkanizer noću krnjača, vulkanizer vikend krnjača',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Krnjača | 15-30 min, 24/7',
    description:
      'Probušena guma u Krnjači? Stižem na vašu adresu za 15-30 minuta — sa preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca',
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function KrnjacaPage() {
  return (
    <>
      <Header />

      <section className="loc-hero" role="region" aria-labelledby="loc-title">
        <div className="container">
          <div className="loc-hero-inner">
            <div className="eyebrow">
              <span className="live-pulse"></span>
              Krnjača · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Krnjača</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Probušena guma u Krnjači? Pozovite Milana — sa preko 10 godina
              iskustva, dolazim na vašu adresu u Krnjači u proseku za 15 do 30
              minuta. Krpljenje gume, zamena pneumatika i balansiranje na licu
              mesta — non-stop 24 časa dnevno, svih 365 dana u godini.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Krnjača"
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
              ⚡ <strong>Krnjača · Reva · Kotež · Padinska skela</strong> — sve adrese
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilni vulkanizer za Krnjaču i okolinu</h2>
            <p>
              Krnjača je deo Beograda koji vozači često zovu "preko mosta" —
              naselje sa leve strane Dunava, vezano za grad preko Pupinovog
              i Pančevačkog mosta. Saobraćaj je gust, kamioni se vrte do IMT-a
              i industrijske zone, a putevi nisu uvek u savršenom stanju. To
              znači jedno: ovde se gume bušuju često. I tu sam ja — kao{' '}
              <strong>mobilni vulkanizer Krnjača</strong> sa preko decenije
              iskustva, dolazim brzo, radim profesionalno, i ne ostavljam vas
              da satima čekate.
            </p>

            <p>
              Pokrivam sve delove Krnjače — od ulaska iz pravca Pupinovog
              mosta, preko Zrenjaninskog puta i Pančevačkog puta, kroz
              naselja Reva 1 i Reva 2, do Koteža i sve do Padinske skele.
              Stižem do industrijskih hala kao i do porodičnih kuća u sporednim
              ulicama. Ako mi date tačnu adresu, znaću kojim putem će biti
              najbrže — to je razlika koju donose godine iskustva.
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

            <h2>Specifičnosti rada u Krnjači</h2>
            <p>
              Krnjača ima dve velike "lice" — sa jedne strane radne zone i
              fabrike (čuveni IMT, magacini, transportne firme), sa druge
              porodična naselja sa skromnim ulicama. Vulkanizerski poslovi se
              razlikuju u zavisnosti od toga gde radim. Kod kombija i radnih
              vozila koja staju kod IMT-a često su u pitanju veće gume i
              veće težine — pa nosim odgovarajuću dizalicu i alat. Kod
              porodičnih automobila u Revi ili Kotežu češće su klasične
              probušene gume zbog šrafova, eksera ili udarca u rupu na
              Zrenjaninskom putu.
            </p>

            <div className="loc-cta-band">
              <h3>Treba vam vulkanizer u Krnjači — odmah?</h3>
              <p>
                Pozovite, recite mi tačnu adresu, dobijate realnu procenu
                vremena pre nego što krenem ka vama.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Šta sve mogu da uradim na licu mesta</h2>
            <p>
              Servisno vozilo nosi kompletnu vulkanizersku opremu —
              kompresor, hidrauličnu dizalicu, balansirku, profesionalan alat
              za demontažu i montažu, materijal za krpljenje gume iznutra,
              instrumente za proveru pritiska. Krpim probušene gume{' '}
              <strong>iznutra sa garancijom od 30 dana</strong>, menjam letnje
              i zimske pneumatike, balansiram točkove do nule, ispravljam
              blago oštećene felne, dopunjavam pritisak svih guma. Sve što
              dobijate u radnji — dobijate i ovde, ali pred vašom kućom u
              Krnjači.
            </p>

            <h3>Adrese i delovi Krnjače koje pokrivam</h3>
            <ul>
              <li>Krnjača Centar — Zrenjaninski put, Pančevački put</li>
              <li>Naselje Reva 1 i Reva 2 — sve ulice</li>
              <li>Kotež i okolina — porodične kuće, garaže</li>
              <li>Industrijska zona Krnjača — IMT, magacini, transportne firme</li>
              <li>Padinska skela — sve do izlaska iz grada</li>
              <li>Sve adrese duž Pupinovog mosta i Pančevačkog mosta</li>
              <li>Sporedne ulice ka Borči i ka Ovči</li>
            </ul>

            <h2>Zašto je mobilni vulkanizer praktičniji</h2>
            <p>
              U Krnjači većina ljudi živi u porodičnim kućama, a auto je često
              "preko cele bašte" pre nego što izađe na ulicu. Sa probušenom
              gumom ne možete ni mesto da zamenite, a kamoli da nekoga vozite
              do najbliže fiksne radnje. Mobilni vulkanizer rešava sve to: ne
              palite auto, ne plaćate vuču, ne rizikujete dodatnu štetu. Ja
              dolazim, krpim ili menjam, i život teče dalje. Posebno je važno
              za one koji rano kreću na posao u centar i ne žele da kasne.
            </p>

            <h2>Tipične situacije iz Krnjače</h2>
            <p>
              Iz Krnjače pozivi dolaze u nekoliko prepoznatljivih obrazaca.{' '}
              <strong>Prvi</strong> — ujutru pre 7h, ljudi izlaze na posao i
              vide ispraznjenu gumu. Naselja su gusta, ne mogu lako da
              "pozajme" auto, a najbliža fiksna radnja je preko mosta. Brzo
              dođem, krpim ili menjam, čovek krene bez kašnjenja.
            </p>
            <p>
              <strong>Drugi</strong> — kombi vozači i transportne firme iz
              industrijske zone Krnjača. Ovde su gume veće, opterećenje veće,
              i klasične vulkanizerske intervencije su češće. Kao mobilni
              vulkanizer sa <strong>preko 10 godina iskustva</strong> radim i
              sa kombijima i sa lakim teretnim vozilima — ne samo sa
              putničkim automobilima.
            </p>
            <p>
              <strong>Treći</strong> — vozači koji ulaze ili izlaze iz grada
              preko Pupinovog ili Pančevačkog mosta i tu naiđu na probušenu
              gumu. Krnjača je tranzitno čvorište između Beograda i Pančeva
              — saobraćaj je intenzivan, ulice nisu uvek u idealnom stanju, a
              udar u rupu nije retkost. Tu sam u proseku za 15-30 minuta od
              poziva.
            </p>

            <h2>Sezonska zamena guma — Krnjača</h2>
            <p>
              Pored hitnih intervencija, dosta vozača iz Krnjače bira da{' '}
              <strong>sezonsku zamenu zimskih i letnjih guma</strong> obavi
              kod kuće, preko mobilnog vulkanizera. Praktično je: dogovorimo
              termin, dođem do vašeg dvorišta ili ispred kuće, donosim
              balansirku i sav potreban alat, sve obavimo za 30-40 minuta
              umesto pola dana provedenog u redovima u fiksnim radnjama.
            </p>

            <h2>Pozovi sada — Krnjača za 15-30 min</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi tačnu
              adresu u Krnjači i šta se desilo sa gumom. Daću vam realno vreme
              dolaska, fer cenu pre početka rada, i kvalitetnu uslugu sa{' '}
              <strong>10+ godina iskustva</strong> iza sebe. Bez izgovora, bez
              kašnjenja, bez skrivenih troškova — non-stop, 24h, svaki dan u
              godini.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Krnjača — stižem za 15-30 minuta</h2>
            <p>
              Jedan poziv i krećem ka vama. Profesionalna mobilna
              vulkanizerska usluga, non-stop 24h.
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
