import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Krnjača | Dolazak 15-30 min, 24/7',
  description:
    'Mobilni vulkanizer za Krnjaču, Karaburmu, Revu, Kotež i Padinsku skelu. Dolazim na vašu adresu za 15 do 30 minuta, non-stop. Pozovite 064 12 90 929.',
  keywords:
    'mobilni vulkanizer krnjača, mobilni vulkanizer karaburma, vulkanizer karaburma, vulkanizer krnjaca, krpljenje gume krnjača, zamena guma krnjača, vulkanizer reva, vulkanizer kotež, vulkanizer 24h krnjača, vulkanizer dolazi na adresu krnjača, vulkanizer noću krnjača, vulkanizer vikend krnjača',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Krnjača | 15-30 min, 24/7',
    description:
      'Probušena guma u Krnjači? Stižem na vašu adresu za 15-30 minuta, sa preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca',
    locale: 'sr_RS',
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'Karaburma je preko Pančevačkog mosta. Pokrivate li je?',
    a: 'Pokrivam. Karaburma mi je geografski uz Krnjaču, preko mosta, i izlazim tamo isto kao i u Revu ili Kotež.',
  },
  {
    q: 'Radite li u Padinskoj skeli i u industrijskoj zoni kod IMT-a?',
    a: 'Radim. Tamo najčešće izlazim na dostavna vozila i kombije firmi, a radim i na putničkim vozilima zaposlenih.',
  },
  {
    q: 'Guma mi je pukla na Pančevačkom mostu. Smem li da stanem?',
    a: 'Na samom mostu nemojte stajati ako ikako možete da siđete. Pređite most i stanite na prvom bezbednom mestu, pa zovite. Ako ne možete da se pomerite, uključite sva četiri žmigavca i izađite iza zaštitne ograde.',
  },
  {
    q: 'Prilaz do moje kuće u Revi nije asfaltiran. Može li kombi?',
    a: 'Najčešće može. Ako je posle kiše raskvašeno, ostavljam kombi na tvrdom delu i donosim dizalicu i alat do auta.',
  },
];

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca#service',
      name: 'Mobilni Vulkanizer Krnjača',
      description:
        'Mobilna vulkanizerska usluga za Krnjaču, Karaburmu, Revu, Kotež i Padinsku skelu. Dolazak na adresu za 15 do 30 minuta, non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: ['Krnjača', 'Karaburma', 'Reva', 'Kotež', 'Padinska skela', 'Ovča'].map((name) => ({ '@type': 'Place', name })),
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
        { '@type': 'ListItem', position: 3, name: 'Krnjača', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-krnjaca#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};
}

export default async function KrnjacaPage() {
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
            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Krnjača</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi u Krnjači i na Karaburmi, i kod vas sam za
              15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="js-tel btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Krnjača" data-cta="poziv">
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
            </div>

            <div className="loc-hero-alt">
              <span className="loc-hero-alt-num">
                Broj za kucanje i kopiranje: <strong>+381 64 12 90 929</strong>
              </span>
              <span className="loc-hero-alt-links">
                <a href="https://wa.me/381641290929" className="btn-secondary btn-sm" data-cta="whatsapp" target="_blank" rel="noopener">WhatsApp</a>
                <a href="viber://chat?number=%2B381641290929" className="btn-secondary btn-sm" data-cta="viber">Viber</a>
              </span>
            </div>

            <p className="loc-hero-why">
              Toliko stižem zato što ceo dan radim u pokretu, pa prema vama krećem sa najbliže tačke, a ne iz jedne baze.
            </p>

            <span className="loc-hero-quick">
              <strong>{rating.toFixed(1)}</strong> na Google Mapama, {reviewCount} recenzija
            </span>
          </div>
        </div>
      </section>

      <nav className="loc-breadcrumb" aria-label="Putanja">
        <div className="container">
          <ol>
            <li><Link href="/">Početna</Link></li>
            <li><Link href="/mobilni-vulkanizer-ceo-beograd">Mobilni vulkanizer Beograd</Link></li>
            <li aria-current="page">Krnjača</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilni vulkanizer za Krnjaču i okolinu</h2>
            <p>
              Krnjača je deo Beograda koji vozači često zovu "preko mosta",
              naselje sa leve strane Dunava, vezano za grad preko Pupinovog
              i Pančevačkog mosta. Saobraćaj je gust, kamioni se vrte do IMT-a
              i industrijske zone, a putevi nisu uvek u savršenom stanju. To
              znači jedno: ovde se gume bušuju često. I tu sam ja, kao{' '}
              <strong>mobilni vulkanizer Krnjača</strong> sa preko decenije
              iskustva, dolazim brzo, radim profesionalno, i ne ostavljam vas
              da satima čekate.
            </p>

            <p>
              Pokrivam sve delove Krnjače, od ulaska iz pravca Pupinovog
              mosta, preko Zrenjaninskog puta i Pančevačkog puta, kroz
              naselja Reva 1 i Reva 2, do Koteža i sve do Padinske skele.
              Preko Pančevačkog mosta pokrivam i Karaburmu, koja mi je
              geografski uz Krnjaču, pa tamo izlazim isto kao i u Revu.
              Stižem do industrijskih hala kao i do porodičnih kuća u sporednim
              ulicama. Ako mi date tačnu adresu, znaću kojim putem će biti
              najbrže, to je razlika koju donose godine iskustva.
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
                <div className="loc-stat-num">{rating.toFixed(1)}★</div>
                <div className="loc-stat-label">Google ocena</div>
              </div>
            </div>

            <h2>Specifičnosti rada u Krnjači</h2>
            <p>
              Krnjača ima dve velike "lice", sa jedne strane radne zone i
              fabrike (čuveni IMT, magacini, transportne firme), sa druge
              porodična naselja sa skromnim ulicama. Vulkanizerski poslovi se
              razlikuju u zavisnosti od toga gde radim. Kod kombija i radnih
              vozila koja staju kod IMT-a često su u pitanju veće gume i
              veće težine, pa nosim odgovarajuću dizalicu i alat. Kod
              porodičnih automobila u Revi ili Kotežu češće su klasične
              probušene gume zbog šrafova, eksera ili udarca u rupu na
              Zrenjaninskom putu.
            </p>

            <div className="loc-cta-band">
              <h3>Treba vam vulkanizer u Krnjači, odmah?</h3>
              <p>
                Pozovite, recite mi tačnu adresu, dobijate realnu procenu
                vremena pre nego što krenem ka vama.
              </p>
              <a href="tel:+381641290929" className="js-tel btn-primary" data-cta="poziv">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Šta sve mogu da uradim na licu mesta</h2>
            <p>
              Servisno vozilo nosi kompletnu vulkanizersku opremu,
              kompresor, hidrauličnu dizalicu, balansirku, profesionalan alat
              za demontažu i montažu, materijal za krpljenje gume iznutra,
              instrumente za proveru pritiska. Krpim probušene gume{' '}
              <strong>iznutra</strong>, menjam letnje
              i zimske pneumatike, balansiram točkove do nule, ispravljam
              blago oštećene felne, dopunjavam pritisak svih guma. Sve što
              dobijate u radnji, dobijate i ovde, ali pred vašom kućom u
              Krnjači.
            </p>


            <h2>Tipične situacije iz Krnjače</h2>
            <p>
              Iz Krnjače pozivi dolaze u nekoliko prepoznatljivih obrazaca.{' '}
              <strong>Prvi</strong>, ujutru pre 7h, ljudi izlaze na posao i
              vide ispraznjenu gumu. Naselja su gusta, ne mogu lako da
              "pozajme" auto, a najbliža fiksna radnja je preko mosta. Brzo
              dođem, krpim ili menjam, čovek krene bez kašnjenja.
            </p>
            <p>
              <strong>Drugi</strong>, kombi vozači i transportne firme iz
              industrijske zone Krnjača. Ovde su gume veće, opterećenje veće,
              i klasične vulkanizerske intervencije su češće. Kao mobilni
              vulkanizer sa <strong>preko 10 godina iskustva</strong> radim i
              sa kombijima i sa lakim teretnim vozilima, ne samo sa
              putničkim automobilima.
            </p>
            <p>
              <strong>Treći</strong>, vozači koji ulaze ili izlaze iz grada
              preko Pupinovog ili Pančevačkog mosta i tu naiđu na probušenu
              gumu. Krnjača je tranzitno čvorište između Beograda i Pančeva
            , saobraćaj je intenzivan, ulice nisu uvek u idealnom stanju, a
              udar u rupu nije retkost. Tu sam u proseku za 15-30 minuta od
              poziva.
            </p>

            <h2>Pozovi sada, Krnjača za 15-30 min</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi adresu u Krnjači ili na
              Karaburmi i šta se desilo sa gumom. Vreme dolaska i cenu dobijate pre nego što
              krenem.
            </p>
          </div>
        </div>
      </section>


      <section className="loc-proof" role="region" aria-labelledby="loc-proof-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-proof-title">Recenzija sa Google profila</h2>
            <div className="reviews-grid reviews-grid-single">
              <article className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-body">
                  "Odličan vulkanizer! Profesionalan pristup, brz rad i vrhunska usluga. Sve je urađeno pažljivo i bez čekanja. Retko se danas nalazi ovako korektan i pouzdan servis. Sve preporuke!"
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">A</div>
                    <div>
                      <div className="review-name">Alma Abidini</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/1.webp" data-full="/1.webp" alt="Mobilni vulkanizer na intervenciji u Krnjači" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Intervencija na adresi</span></div>
              </div>
              <div className="gallery-item">
                <img src="/3.webp" data-full="/3.webp" alt="Zamena gume ispred porodične kuće" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Rad ispred kuće</span></div>
              </div>
              <div className="gallery-item">
                <img src="/nase-masine-su-potpuno-nove.webp" data-full="/nase-masine-su-potpuno-nove.webp" alt="Vulkanizerska mašina u servisnom vozilu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Mašina koju nosim sa sobom</span></div>
              </div>
            </div>

            <h2>Susedne zone</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Ako vam je auto stao izvan ove zone, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-borca">mobilni vulkanizer Borča</Link> i{' '}
              <Link href="/mobilni-vulkanizer-pancevo">mobilni vulkanizer Pančevo</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja iz Krnjače i Karaburme</h2>
            <div className="faq-list">
              {FAQ.map((item) => (
                <article className="faq-item" key={item.q}>
                  <button className="faq-question" aria-expanded="false">
                    <span>{item.q}</span>
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Krnjača, stižem za 15-30 minuta</h2>
            <p>
              Jedan poziv i krećem ka vama. Profesionalna mobilna
              vulkanizerska usluga, non-stop 24h.
            </p>
            <div className="loc-final-cta-num">
              <a href="tel:+381641290929" data-cta="poziv" className="js-tel">+381 64 12 90 929</a>
            </div>
            <div className="loc-final-cta-actions">
              <a href="tel:+381641290929" className="js-tel btn-primary" data-cta="poziv">
                📞 Pozovi odmah
              </a>
              <a href="https://wa.me/381641290929" className="btn-secondary" data-cta="whatsapp">
                💬 WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B381641290929"
                className="btn-secondary" data-cta="viber">
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
