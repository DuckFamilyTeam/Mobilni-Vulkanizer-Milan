import Link from 'next/link';
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

const FAQ = [
  {
    q: 'Pančevo je van Beograda. Koliko vam treba do centra Pančeva?',
    a: 'Zavisi od toga gde se tog trenutka nalazim i kakav je saobraćaj na Pančevačkom mostu. Procenu vam kažem odmah na telefonu i trudim se da je ne lepšam.',
  },
  {
    q: 'Radite li u Starčevu, Omoljici i Banatskom Novom Selu?',
    a: 'Radim, ta mesta pokrivam zajedno sa Pančevom. Za njih je vreme dolaska duže nego za centar grada i to vam kažem pre nego što krenem.',
  },
  {
    q: 'Prelazite li Pančevački most i noću?',
    a: 'Prelazim. Noću je most rasterećen, pa tada često stignem brže nego u dnevnoj gužvi.',
  },
  {
    q: 'Mogu li da vas zovem za dva vozila odjednom, u istoj firmi?',
    a: 'Možete. Recite mi to odmah na telefonu, da uračunam vreme i da ponesem materijal za obe dimenzije.',
  },
];

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo#service',
      name: 'Mobilni Vulkanizer Pančevo',
      description:
        'Mobilna vulkanizerska usluga u Pančevu, dolazak na vašu adresu za oko 20 minuta. Non-stop 24h.',
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
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
        { '@type': 'ListItem', position: 3, name: 'Pančevo', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-pancevo#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
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
            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Pančevo</span>
              <br />
              dolazim za 20 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi u Pančevu i okolnim mestima, na licu mesta,
              bez odlaska u radnju.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="js-tel btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Pančevo" data-cta="poziv">
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
              Vreme dolaska je realno zato što ceo dan radim u pokretu, pa prema vama krećem sa najbliže tačke, a ne iz jedne baze.
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
            <li aria-current="page">Pančevo</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <h2>Most odlučuje koliko ću vam trebati</h2>
            <p>
              Pančevo nije daleko, ali između mene i vas skoro uvek stoji Pančevački most. On
              je jedina stvar koja realno odlučuje da li ću stići brzo ili ne. Zato vam na
              telefonu kažem procenu tek pošto mi kažete gde ste, a ne unapred.
            </p>
            <p>
              Noću je most prazan i tada u Pančevo stižem brže nego u pojedine delove Beograda
              u popodnevnoj gužvi. Popodne je obrnuto, i to vam ne prećutkujem.
            </p>

            <h2>Delovi Pančeva i okolna mesta koja pokrivam</h2>
            <p>
              U Pančevu izlazim u Centar, na Kotež I, II i III, na Teslu, Strelište i Topolu, i
              u Vojlovicu. Van grada pokrivam Starčevo, Omoljicu i Banatsko Novo Selo.
            </p>

            <h2>Kada me najčešće zovu iz Pančeva</h2>
            <p>
              Najviše poziva stiže od ljudi koji svakodnevno putuju na posao u Beograd. Guma
              izda ujutru, pred polazak, kada je svaki minut važan, ili uveče na povratku, kada
              je radnja već zatvorena. Drugi čest poziv dolazi iz industrijskih delova grada,
              za dostavna vozila i kombije firmi, gde stajanje vozila košta više od same
              intervencije.
            </p>
            <p>
              U starijim delovima Kotež naselja i u Vojlovici ulice su uske, a parkiranje je
              često u dva reda. Tamo mi treba slobodan prostor sa jedne strane vozila, i to je
              obično dovoljno da se posao odradi bez pomeranja drugih auta.
            </p>

            <h2>Šta mogu da uradim na licu mesta</h2>
            <p>
              Krpljenje gume iznutra, zamenu pneumatika, balansiranje točka, montažu vaše
              rezervne gume i kontrolu pritiska. Sve to nosim u kombiju, pa vam ne treba ni
              vučna služba ni odlazak do radnje.
            </p>

            <h2>Cena</h2>
            <p>
              Cena zavisi od mesta, doba dana i vrste posla. Kažem vam je na telefonu, pre nego
              što krenem, bez skrivenih troškova. Za Pančevo i okolna mesta u cenu ulazi i put
              preko mosta, i to vam kažem otvoreno, pre polaska.
            </p>

            <h2>Poziv</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong> i recite mi u kom ste delu Pančeva i
              šta se desilo sa gumom. Ako ste u industrijskoj zoni, dovoljan mi je naziv firme
              ili najbliži ulaz u krug.
            </p>

            <div className="loc-cta-band">
              <h3>Probušena guma u Pančevu?</h3>
              <p>Recite mi gde ste i dobijate vreme dolaska i cenu, odmah.</p>
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
            <h2 id="loc-proof-title">Recenzija sa Google profila</h2>
            <div className="reviews-grid reviews-grid-single">
              <article className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-body">
                  "Sve pohvale za ekipu, pre svega na ljudskosti i ljubaznosti! Pored toga što su na teren izašli neverovatno brzo, momci su bili izuzetno prijatni i smireni, što mi je mnogo značilo u onom stresu na putu."
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">J</div>
                    <div>
                      <div className="review-name">Jovan Neskovic</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/7.webp" data-full="/7.webp" alt="Zamena pneumatika na terenu u Pančevu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Zamena pneumatika</span></div>
              </div>
              <div className="gallery-item">
                <img src="/montaza-gume-land-rover.webp" data-full="/montaza-gume-land-rover.webp" alt="Montaža gume na licu mesta" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Montaža gume</span></div>
              </div>
              <div className="gallery-item">
                <img src="/punjenje-gume-land-rover.webp" data-full="/punjenje-gume-land-rover.webp" alt="Punjenje gume vazduhom posle krpljenja" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Punjenje gume</span></div>
              </div>
            </div>

            <h2>Susedne zone</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Ako vam je auto stao izvan ove zone, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-borca">mobilni vulkanizer Borča</Link> i{' '}
              <Link href="/mobilni-vulkanizer-krnjaca">mobilni vulkanizer Krnjača</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja iz Pančeva</h2>
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
            <h2>Probušena guma u Pančevu ne čeka, neću ni ja</h2>
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
