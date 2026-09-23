import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Borča | Dolazak za 15-30 min, 24/7',
  description:
    'Mobilni vulkanizer Borča, dolazim na vašu adresu u Borči za 15-30 minuta. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva, non-stop 24h. Pozovite +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer borca, vulkanizer borča, krpljenje gume borča, zamena guma borča, vulkanizer dolazi borča, vulkanizer 24h borča, vulkanizer dolazi na adresu borča, vulkanizer noću borča, vulkanizer vikend borča',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Borča | Dolazak 15-30 min, 24/7',
    description:
      'Probušena guma u Borči? Stižem za 15-30 min. Preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
    locale: 'sr_RS',
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'Imate li radnju u Borči ili samo izlazite na teren?',
    a: 'Imam i radnju, na Zrenjaninskom putu 146b, i ona radi 0 do 24, svaki dan. Ako možete da dovezete auto, u radnji se posao odradi bez čekanja da ja stignem do vas.',
  },
  {
    q: 'Šta je brže, da vas čekam kod kuće ili da dođem u radnju?',
    a: 'Ako auto vozi, radnja je brža. Ako je guma prazna ili pukla, ne vozite, nego zovite i izlazim na adresu.',
  },
  {
    q: 'Radite li na Gredi, u Sebešu i u Borči III?',
    a: 'Radim, to su adrese koje pokrivam svakodnevno, zajedno sa Borčom Centar i Ovčom.',
  },
  {
    q: 'Mogu li kod vas da ostavim set guma na čuvanje?',
    a: 'Možete, to radimo u radnji. Guma se opere, obeleži i čuva do sezone. Cenu i uslove kažem na telefonu.',
  },
];

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca#service',
      name: 'Mobilni Vulkanizer Borča',
      description:
        'Mobilna vulkanizerska usluga u Borči, dolazak na vašu adresu za 15-30 minuta. Non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Borča', containedInPlace: { '@type': 'City', name: 'Beograd' } },
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
        { '@type': 'ListItem', position: 3, name: 'Borča', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-borca#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};
}

export default async function BorcaPage() {
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
              Mobilni vulkanizer <span className="accent">Borča</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi u Borči i kod vas sam za 15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="js-tel btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Borča" data-cta="poziv">
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
              Vreme je realno zato što ceo dan radim u pokretu, pa prema vama krećem sa najbliže tačke, a ne uvek iz radnje.
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
            <li aria-current="page">Borča</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <h2>Radnja je u Borči, ali ja sam najčešće na terenu</h2>
            <p>
              Borča je jedino naselje u kome imam i radnju, na Zrenjaninskom putu 146b, i ona
              radi 0-24, svaki dan. To ne znači da iz nje i krećem. Najveći deo dana sam u
              pokretu po gradu, pa kada me pozovete iz Borče, prema vama krećem sa mesta na
              kome se tog trenutka nalazim.
            </p>
            <p>
              Zato vam na telefonu kažem i jednu stvar koju drugi ne kažu: ako auto može da
              vozi, u radnji je posao gotov bez čekanja. Ako je guma prazna ili pukla, ne
              vozite nigde, nego zovite i izlazim na adresu.
            </p>

            <h2>Naselja koja pokrivam u Borči i oko nje</h2>
            <p>
              U zoni su Borča Centar, Greda, Borča III i Sebeš, kao i Ovča. Sve adrese
              duž Zrenjaninskog puta i prilaza Pupinovom mostu su takođe u zoni, i tu me
              najčešće zovu vozači koji su gumu oštetili baš na tom potezu.
            </p>

            <h2>Prilazi, dvorišta i sporedne ulice</h2>
            <p>
              Veliki deo Borče su porodične kuće sa dvorištima i sporednim ulicama koje nisu
              sve asfaltirane. Posle kiše se u nekima teško manevriše kombijem. Ako procenim da
              ne mogu do samog auta, ostavljam kombi na tvrdom delu i donosim dizalicu i alat.
              Zato vas i pitam kakav je prilaz dok smo još na telefonu.
            </p>
            <p>
              Druga stvar specifična za ovaj deo grada je noć. Pozivi iz Borče i Ovče posle
              ponoći nisu retkost, i tada je saobraćaj rasterećen, pa stižem brže nego u
              popodnevnoj gužvi na Zrenjaninskom putu.
            </p>

            <h2>Šta nosim u kombiju</h2>
            <p>
              Kompresor, hidrauličnu dizalicu, balansirku, alat za demontažu i montažu i
              materijal za krpljenje iznutra. Na licu mesta krpim probušenu gumu, menjam
              pneumatik, balansiram točak, montiram vašu rezervnu gumu i proveravam pritisak na
              sva četiri točka pre nego što krenete.
            </p>

            <h2>Koliko košta i kada to saznate</h2>
            <p>
              Cena zavisi od adrese, doba dana i toga šta tačno treba uraditi. Kažem vam je
              odmah kad me pozovete, pre nego što krenem, i posle se ne menja. Izlazak na teren
              jeste skuplji od dolaska u radnju, i to vam otvoreno kažem, jer plaćate to što ja
              dolazim kod vas.
            </p>

            <h2>Kako da me pozovete</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi ulicu i broj u Borči i šta
              se desilo sa gumom. Dobijate vreme dolaska i cenu pre nego što krenem. Ako ne
              znate adresu, pošaljite lokaciju preko Vibera ili WhatsApp-a.
            </p>

            <div className="loc-cta-band">
              <h3>Prazna guma u Borči?</h3>
              <p>Jedan poziv i dobijate vreme dolaska i cenu, odmah.</p>
              <a href="tel:+381641290929" className="btn-primary js-tel" data-cta="poziv">
                Pozovi: +381 64 12 90 929
              </a>
            </div>

          </div>
        </div>
      </section>


      <section className="loc-proof" role="region" aria-labelledby="loc-proof-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-proof-title">Recenzija klijenta iz Borče</h2>
            <div className="reviews-grid reviews-grid-single">
              <article className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-body">
                  "Iz Borče došao momak u Jerković za pola sata u 1 ujutru, rešio mi problem za 10 min, profi odnos, lagana konverzacija.. Hvala još jednom."
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">I</div>
                    <div>
                      <div className="review-name">igor stajic</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/6.webp" data-full="/6.webp" alt="Krpljenje probušene gume na licu mesta u Borči" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Krpljenje gume na terenu</span></div>
              </div>
              <div className="gallery-item">
                <img src="/kombi-oprema.webp" data-full="/kombi-oprema.webp" alt="Oprema u servisnom kombiju, kompresor i dizalica" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Oprema u kombiju</span></div>
              </div>
              <div className="gallery-item">
                <img src="/intervencija.webp" data-full="/intervencija.webp" alt="Intervencija na terenu, mobilni vulkanizer Borča" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Intervencija u toku</span></div>
              </div>
            </div>

            <h2>Susedne zone i radnja</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Ako vam je auto stao izvan ove zone, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-krnjaca">mobilni vulkanizer Krnjača</Link> i{' '}
              <Link href="/mobilni-vulkanizer-pancevo">mobilni vulkanizer Pančevo</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja iz Borče</h2>
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
            <h2>Probušena guma u Borči ne čeka, neću ni ja</h2>
            <p>
              Jedan poziv i krećem na vašu adresu. Non-stop, 24h, svih 365 dana
              u godini.
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
