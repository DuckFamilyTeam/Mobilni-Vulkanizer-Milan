import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Autoput Beograd | Hitna pomoć, 24/7',
  description:
    'Mobilni vulkanizer na autoputu Beograd, hitna intervencija na E-75, E-70, obilaznici. Krpljenje gume, zamena pneumatika, dolazak na traku za zaustavljanje. 10+ godina iskustva, non-stop 24h. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer autoput beograd, vulkanizer autoput, hitna pomoć guma autoput, vulkanizer e75 beograd, vulkanizer obilaznica beograd, pomoć na putu vulkanizer, vulkanizer dolazi na adresu autoput, vulkanizer noću autoput, vulkanizer vikend autoput, vulkanizer praznici autoput',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Autoput Beograd | Hitna pomoć 24/7',
    description:
      'Probušena guma na autoputu? Stižem na traku za zaustavljanje. Preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
    locale: 'sr_RS',
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'Stojim na zaustavnoj traci. Šta da radim dok vas čekam?',
    a: 'Uključite sva četiri žmigavca, obucite prsluk pre nego što izađete, postavite trougao na propisanoj udaljenosti i sa putnicima sačekajte iza zaštitne ograde, nikako u vozilu i nikako pored trake.',
  },
  {
    q: 'Radite li na deonicama pod naplatom, iza rampe?',
    a: 'Radim. Recite mi u kom ste smeru i koja vam je poslednja petlja ili kilometar koji ste videli, jer se po tome najbrže određuje odakle mogu da uđem do vas.',
  },
  {
    q: 'Nemam rezervnu gumu, samo set za krpljenje. Ima li smisla da zovem?',
    a: 'Ima. Sprej i set za krpljenje su privremeno rešenje koje često ne drži. Ja krpim iznutra ili montiram gumu, pa možete normalno da nastavite put.',
  },
  {
    q: 'Koliko vam treba do petlje Bubanj potok?',
    a: 'Zavisi od toga gde se tog trenutka nalazim i koliko je gusto na obilaznici. Procenu dajem odmah na telefonu, pre nego što krenem.',
  },
];

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd#service',
      name: 'Mobilni Vulkanizer Autoput Beograd',
      description:
        'Mobilna vulkanizerska usluga na autoputu Beograd, hitna intervencija na E-75, E-70, obilaznici. Dolazak na traku za zaustavljanje. Non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: [
        { '@type': 'Road', name: 'E-75 Beograd' },
        { '@type': 'Road', name: 'E-70 Beograd' },
        { '@type': 'Road', name: 'Beogradska obilaznica' },
      ],
      serviceType: 'Hitna mobilna vulkanizerska usluga na autoputu',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
        { '@type': 'ListItem', position: 3, name: 'Autoput', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-autoput-beograd#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};
}

export default async function AutoputPage() {
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
              Mobilni vulkanizer <span className="accent">na autoputu</span>
              <br />
              kroz Beograd, 24/7
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na licu mesta kad vam auto stane na auto-putu ili na
              obilaznici oko Beograda.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="js-tel btn-primary"
                aria-label="Pozovi mobilnog vulkanizera na autoputu" data-cta="poziv">
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
                Hitno: +381 64 12 90 929
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
              Vreme je realno zato što ceo dan radim u pokretu, pa prema vama krećem sa najbliže tačke na mreži, a ne iz jedne baze.
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
            <li aria-current="page">Autoput</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Hitna vulkanizerska pomoć na autoputu</h2>
            <p>
              Probušena guma na autoputu nije isto što i probušena guma kod
              kuće. Tu je <strong>brzina ključna</strong>, ne samo zato što
              se žuri, nego zato što čekanje pored saobraćajnice nije
              bezbedno. Auto na traci za zaustavljanje, sa upaljenim
              "trepćućim" svetlima, je magnet za probleme: nepažljivi vozači,
              loša vidljivost noću, kiša, magla, gomila kamiona koji prolaze.
              Kao mobilni vulkanizer sa <strong>preko 10 godina iskustva</strong>,
              ovakve pozive shvatam kao prioritet.
            </p>

            <p>
              Pokrivam sve glavne pravce auto-puta kroz Beograd i u njegovoj
              neposrednoj okolini: E-75 ka Nišu i ka Novom Sadu, E-70 ka
              Zagrebu, beogradsku obilaznicu, sve petlje i izlaze. Bilo da
              ste stali kod petlje Bubanj potok, na pravcu ka Surčinu, kod
              petlje Beograd-jug, na Mostu na Adi, na Gazeli, ili negde na
              prilazima ka Batajnici, krenuću ka vama čim dobijem poziv.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min do dolaska*</div>
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

            <h2>Pravci i petlje gde najčešće stižem</h2>
            <p>
              Auto-put kroz Beograd ima nekoliko ključnih tačaka gde vozači
              najčešće zovu, i sve ih dobro znam. Reči "stao sam kod petlje"
              nisu dovoljne; trebaju mi smer, kilometraža sa GPS-a ili neka
              prepoznatljiva referenca. Što je opis tačniji, brže stižem.
            </p>
            <p>
              Pokrivam E75 u oba pravca i E70, celu obilaznicu oko Beograda, i petlje Bubanj
              potok, Beograd-jug, Bežanija, Batajnica i Surčin, kao i deonicu do Stare Pazove.
            </p>


            <div className="loc-cta-band">
              <h3>Stali ste na auto-putu, sad?</h3>
              <p>
                Pozovite, opišite tačan smer i poslednju petlju koju ste
                prošli. Krećem odmah, dajem realnu procenu vremena.
              </p>
              <a href="tel:+381641290929" className="js-tel btn-primary" data-cta="poziv">
                📞 Hitan poziv: +381 64 12 90 929
              </a>
            </div>

            <h2>Šta da uradite dok ne stignem</h2>
            <p>
              Bezbednost je prvo. Skrenite na traku za zaustavljanje koliko
              god je to moguće, izađite iz vozila sa strane suprotne od
              saobraćaja, obucite refleksni prsluk i postavite trougao na
              propisanu udaljenost. Nemojte stajati pored saobraćajne trake i
              ne pokušavajte da menjate gumu sami ako je auto blizu vozne
              trake, rizik je veliki, posebno noću ili po lošem vremenu.
              Kada me pozovete, kažem vam tačno šta dalje da radite dok ne
              stignem.
            </p>

            <h2>Bezbednost je prvo, i za vas i za mene</h2>
            <p>
              Kad stignem na auto-put, postavim refleksne znake i radim sa
              strane vozila koja je suprotna saobraćaju. Po lošem vremenu
              (kiša, magla, sneg) radim opreznije i pažljivo. Iskustvo od{' '}
              <strong>preko 10 godina</strong> u zanatu, uključujući stotine
              intervencija na otvorenom, me je naučilo gde je granica brzine
              i sigurnosti. Bolje je da posao traje par minuta duže, nego da
              dođe do nezgode.
            </p>

            <h2>Kako da me pozovete sa auto-puta</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi u kom ste smeru i
              koju ste poslednju petlju ili kilometar prošli. Vreme dolaska zavisi od toga
              gde se tog trenutka nalazim i dajem vam realnu procenu pre nego što krenem.
            </p>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi pravac
              (npr. "ka Nišu, posle petlje Bubanj potok") i šta se desilo sa
              gumom. Dobićete realnu procenu vremena dolaska, fer cenu, i
              profesionalnu uslugu sa <strong>preko 10 godina iskustva</strong>.
              Auto-put kroz Beograd nije mesto za gubljenje vremena,
              reagujem brzo i ozbiljno.
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
                  "Brzo je stigao, a jos brze zakrpio gumu. Cena korektna"
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">M</div>
                    <div>
                      <div className="review-name">Mihajlo Radenkovic</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/autoput.webp" data-full="/autoput.webp" alt="Servisni kombi mobilnog vulkanizera na auto-putu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Intervencija na auto-putu</span></div>
              </div>
              <div className="gallery-item">
                <img src="/4.webp" data-full="/4.webp" alt="Noćna intervencija na putu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Noćna intervencija</span></div>
              </div>
              <div className="gallery-item">
                <img src="/6.webp" data-full="/6.webp" alt="Krpljenje gume na licu mesta" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Krpljenje na licu mesta</span></div>
              </div>
            </div>

            <h2>Susedne zone</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Ako vam je auto stao izvan ove zone, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-batajnica">mobilni vulkanizer Batajnica</Link> i{' '}
              <Link href="/mobilni-vulkanizer-zemun">mobilni vulkanizer Zemun</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja sa auto-puta</h2>
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
            <h2>Probušena guma na auto-putu? Krećem odmah</h2>
            <p>
              Brza i profesionalna intervencija na svim pravcima oko Beograda.
              Non-stop 24h, svaki dan u godini.
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
