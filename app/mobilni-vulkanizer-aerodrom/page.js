import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni vulkanizer Surčin i aerodrom | Dolazim za 30 minuta',
  description:
    'Mobilni vulkanizer za Surčin, aerodrom Nikola Tesla, Bežaniju i Dobanovce. Dolazim na vašu adresu za oko 30 minuta, non-stop. Pozovite 064 12 90 929.',
  keywords:
    'mobilni vulkanizer aerodrom, vulkanizer 24h aerodrom nikola tesla, 24h vulkanizer surčin, krpljenje guma aerodrom beograd, hitna zamena guma surčin, mobilni vulkanizer bežanija, dežurni vulkanizer aerodrom, mobilni vulkanizer dobanovci, mobilni vulkanizer surčin, mobilni vulkanizer bežanijska kosa',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom',
  },
  openGraph: {
    title: 'Mobilni vulkanizer Surčin i aerodrom | Dolazim za 30 minuta',
    description:
      'Probušena guma kod Aerodroma Nikola Tesla, u Surčinu ili Bežaniji? Stižem za oko 30 minuta. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom',
    locale: 'sr_RS',
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'Mogu li da vas zovem sa parkinga aerodroma Nikola Tesla?',
    a: 'Možete. Recite mi na kom ste parkingu i na kom nivou ili u kom redu. Na aerodromskim parkinzima je oznaka mesta najbrži način da vas nađem.',
  },
  {
    q: 'Letim za nekoliko sati. Stignete li na vreme?',
    a: 'Recite mi odmah u koliko vam ističe vreme. Ako ne mogu da stignem tako da završimo pre nego što morate da krenete, reći ću vam to otvoreno, a ne da vas držim u čekanju.',
  },
  {
    q: 'Radite li u Dobanovcima, na Bežaniji i Bežanijskoj kosi?',
    a: 'Radim, cela ta zona je deo mog terena, zajedno sa samim Surčinom.',
  },
  {
    q: 'Auto mi ostaje na parkingu, a ja putujem. Može li bez mene?',
    a: 'Može, ali mi treba ključ i neko ko će biti tu da otvori auto. Bez pristupa vozilu ne mogu ništa da uradim. Dogovorimo se na telefonu kako to da rešimo.',
  },
];

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom#service',
      name: 'Mobilni vulkanizer Surčin i aerodrom',
      description:
        'Mobilna vulkanizerska usluga u zoni Aerodroma Nikola Tesla, Surčina, Bežanije i Bežanijske kose, dolazak na adresu za oko 30 minuta. Non-stop 24h.',
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
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
        { '@type': 'ListItem', position: 3, name: 'Surčin i aerodrom', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-aerodrom#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
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
            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Surčin</span> i aerodrom
              <br />
              dolazim za 30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi u Surčinu i u zoni aerodroma, i kod vas sam
              za oko 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="js-tel btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Aerodrom" data-cta="poziv">
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
              Vreme je realno zato što ceo dan radim u pokretu po gradu, pa prema vama krećem sa najbliže tačke, a ne iz jedne baze.
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
            <li aria-current="page">Surčin i aerodrom</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <h2>U zoni aerodroma vreme se meri satom, ne kilometrima</h2>
            <p>
              Poziv sa aerodroma skoro nikad nije običan kvar. Čovek ima let, ima dogovoreno
              vreme vraćanja rentiranog auta ili nekoga čeka da sleti. Zato je prva stvar koju
              vas pitam koliko vremena imate, pa tek onda gde ste.
            </p>
            <p>
              Ako ne mogu da stignem tako da završimo pre nego što morate da krenete, reći ću
              vam to odmah, a ne držati vas u čekanju. To je jedini pošten način na ovom terenu.
            </p>

            <h2>Surčin, Bežanija, Bežanijska kosa i Dobanovci</h2>
            <p>
              Pokrivam ceo Surčin, Bežaniju i Bežanijsku kosu, Dobanovce i samu zonu aerodroma
              Nikola Tesla, uključujući prilazne puteve i parkinge.
            </p>

            <h2>Parkinzi aerodroma i kako da mi kažete gde ste</h2>
            <p>
              Na aerodromskim parkinzima adresa ne znači ništa, ali oznaka parking mesta znači
              sve. Recite mi koji je parking, koji nivo i koja je oznaka mesta i dolazim pravo
              do vas. Na otvorenim parkinzima dovoljan je red i najbliži izlaz ka terminalu.
            </p>
            <p>
              U podzemnim delovima i garažama sa niskim prilazom kombi ne prolazi svuda. Tada ga
              ostavljam na prvom mestu gde mogu i donosim dizalicu i alat do vašeg auta. To
              produži posao za nekoliko minuta, ali ga ne sprečava.
            </p>

            <h2>Šta radim na licu mesta</h2>
            <p>
              Krpim gumu iznutra, menjam pneumatik, balansiram točak, montiram vašu rezervnu
              gumu i proveravam pritisak. Ako je guma takva da se ne sme krpiti, kažem vam to
              odmah, jer na putu do aerodroma nije mesto za privremena rešenja.
            </p>

            <h2>Cena se zna pre polaska</h2>
            <p>
              Cena zavisi od lokacije, doba dana i vrste posla, i kažem vam je odmah kad me
              pozovete. Bez skrivenih troškova i bez naplate koju biste saznali tek na licu
              mesta.
            </p>

            <h2>Pozovite</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi koliko vremena imate i gde
              ste tačno parkirani. Ako ste u zoni terminala, pošaljite lokaciju preko Vibera ili
              WhatsApp-a, to je najbrže.
            </p>

            <div className="loc-cta-band">
              <h3>Guma vas zaustavila na putu za aerodrom?</h3>
              <p>Pozovite i recite koliko vremena imate. Ostalo je moj posao.</p>
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
                  "Sve preporuke za Mobilnog vulkanizera Milana iz Beograda! Zvala sam ga u nezgodno vreme i odazvao se odmah. Stigao je veoma brzo, bio je ljubazan, profesionalan i odmah pronašao problem."
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">A</div>
                    <div>
                      <div className="review-name">Anastasija Stankovic</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/land-rover-dizalica.webp" data-full="/land-rover-dizalica.webp" alt="Auto podignut dizalicom na terenu kod aerodroma" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Dizalica na terenu</span></div>
              </div>
              <div className="gallery-item">
                <img src="/8.webp" data-full="/8.webp" alt="Servisni kombi mobilnog vulkanizera u Beogradu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Kombi na intervenciji</span></div>
              </div>
              <div className="gallery-item">
                <img src="/brza-zamena-guma.webp" data-full="/brza-zamena-guma.webp" alt="Brza zamena gume na parkingu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Brza zamena gume</span></div>
              </div>
            </div>

            <h2>Susedne zone</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Ako vam je auto stao izvan ove zone, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-zemun">mobilni vulkanizer Zemun</Link> i{' '}
              <Link href="/mobilni-vulkanizer-batajnica">mobilni vulkanizer Batajnica</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja iz Surčina i sa aerodroma</h2>
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
            <h2>Probušena guma kod aerodroma ne čeka, neću ni ja</h2>
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
