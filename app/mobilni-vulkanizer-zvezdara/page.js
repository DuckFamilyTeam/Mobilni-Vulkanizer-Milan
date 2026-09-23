import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni vulkanizer Zvezdara i Mirijevo | Dolazim na adresu',
  description:
    'Mobilni vulkanizer za Zvezdaru, Mirijevo, Konjarnik i Kaluđericu. Dolazim na vašu adresu za 15 do 30 minuta, non-stop 24 sata. Pozovite 064 12 90 929.',
  keywords:
    'mobilni vulkanizer zvezdara, vulkanizer mirijevo, vulkanizer konjarnik, vulkanizer kaluđerica, vulkanizer mali mokri lug, krpljenje gume zvezdara, vulkanizer 24h zvezdara',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara',
  },
  openGraph: {
    title: 'Mobilni vulkanizer Zvezdara i Mirijevo | Dolazim na adresu',
    description:
      'Probušena guma u Mirijevu, na Konjarniku ili kod Cvetkove pijace? Dolazim na adresu za 15 do 30 minuta.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara',
    locale: 'sr_RS',
    type: 'website',
  },
};

const ZONE = [
  'Zvezdara', 'Mirijevo', 'Konjarnik', 'Mali Mokri Lug', 'Veliki Mokri Lug',
  'Kaluđerica', 'Vukov spomenik', 'Cvetkova pijaca', 'Zvezdarska šuma', 'Lion',
  'Đeram pijaca',
];

const FAQ = [
  {
    q: 'Ulica u Mirijevu mi je toliko strma da se plašim da podignete auto. Radite li i tu?',
    a: 'Radim, samo mi to recite na telefonu. Na nagibu ne dižem auto dok ga ne obezbedim i dok dizalica ne nalegne na ravnu i tvrdu podlogu. Ako podloga nije dobra, podmetnem svoju.',
  },
  {
    q: 'Auto mi je ukliješten između dva na Konjarniku. Ima li smisla da vas zovem?',
    a: 'Ima. Za rad mi treba prostor sa jedne strane vozila, ne ceo krug oko njega. Ako baš nema mesta, dovoljno je da se auto pomeri pola dužine, i to obično rešimo na licu mesta.',
  },
  {
    q: 'Kaluđerica je van gradske opštine. Izlazite li i tamo?',
    a: 'Izlazim, Kaluđericu pokrivam redovno preko Smederevskog puta. Vreme dolaska tamo zavisi od gužve na Smederevskom putu i kažem vam ga odmah kad me pozovete.',
  },
  {
    q: 'Mogu li da ostavim auto i da se vratim kad završite?',
    a: 'Možete, ali mi tada treba ključ ili neko ko će otključati, jer bez pristupa autu ne mogu ništa da uradim. Dogovorimo se na telefonu kako to da rešimo.',
  },
];

function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara#service',
        name: 'Mobilni vulkanizer Zvezdara',
        description:
          'Mobilna vulkanizerska usluga na terenu za Zvezdaru, Mirijevo, Konjarnik, Mali i Veliki Mokri Lug, Kaluđericu, Vukov spomenik, Cvetkovu i Đeram pijacu. Dolazak na adresu, non-stop 24 sata.',
        url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara',
        provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
        areaServed: ZONE.map((name) => ({ '@type': 'Place', name })),
        serviceType: 'Mobilna vulkanizerska usluga',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara',
          servicePhone: '+381641290929',
          availableLanguage: 'Serbian',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
          { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
          { '@type': 'ListItem', position: 3, name: 'Zvezdara', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zvezdara#faq',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

export default async function ZvezdaraPage() {
  const { rating, reviewCount } = await getGbpRating();
  const jsonLd = buildJsonLd();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main-content">

      <section className="loc-hero" role="region" aria-labelledby="loc-title">
        <div className="container">
          <div className="loc-hero-inner">

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Zvezdara</span>
              <br />
              dolazim za 15 do 30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi, od Vukovog spomenika do Mirijeva i
              Kaluđerice, i kod vas sam za 15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary js-tel"
                data-cta="poziv"
                aria-label="Pozovi mobilnog vulkanizera na Zvezdari"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              Vreme je realno zato što ceo dan radim u pokretu po gradu, pa prema vama krećem
              sa najbliže tačke, a ne iz jedne baze.
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
            <li aria-current="page">Zvezdara</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <h2>Nagib, dizalica i podloga: zašto je Mirijevo poseban teren</h2>
            <p>
              Mirijevo ima ulice koje su istovremeno uske i strme, a dobar deo njih se završava
              u dvorištima i prilazima koji nisu ravni. Dizalica na takvom terenu ne sme da se
              postavi napamet. Kada dođem na takvu adresu, prvo obezbedim auto, pa tražim ravan
              i tvrd deo podloge, a kad ga nema, podmetnem svoju.
            </p>
            <p>
              To je razlog zašto od vas na telefonu tražim da mi opišete gde tačno stojite, pod
              nagibom ili na ravnom, na asfaltu ili na zemlji. Od toga zavisi šta iznosim iz
              kombija i koliko posao traje.
            </p>

            <h2>Naselja koja pokrivam na Zvezdari</h2>
            <p>
              Izlazim na celu Zvezdaru. U donjem delu su mi najčešće adrese Vukov spomenik i
              Đeram pijaca, a u gornjem Cvetkova pijaca, Zvezdarska šuma, Lion i Konjarnik.
              Dalje ka periferiji pokrivam Mirijevo, Mali Mokri Lug i Veliki Mokri Lug, a preko
              Smederevskog puta izlazim i u Kaluđericu.
            </p>
            <p>
              Ako vam je auto stao u nekoj od susednih zona, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-krnjaca">mobilni vulkanizer Krnjača</Link> ili{' '}
              <Link href="/mobilni-vulkanizer-autoput-beograd">mobilni vulkanizer autoput</Link>,
              a pregled svih zona je na stranici{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>.
            </p>

            <h2>Parking na Konjarniku i šta radim kad nema mesta</h2>
            <p>
              Konjarnik je gusto parkiran skoro ceo dan, a uveče je i gore. Tamo se najčešće
              dešava da auto stoji ukliješten između dva druga, bez prostora da se točak
              izvuče. Meni za rad treba slobodan prostor samo sa jedne strane vozila, ne krug
              oko njega, pa se to u praksi retko pokaže kao stvarna prepreka.
            </p>
            <p>
              Ustanička i Bulevar kralja Aleksandra su glavne saobraćajnice ovog dela grada i u
              špicu drže ceo saobraćaj na Zvezdari. Kada me zovete u to vreme, uračunam gužvu u
              procenu, a ne kažem vam najlepši mogući broj.
            </p>

            <h2>Vreme dolaska i odakle krećem</h2>
            <p>
              Za Zvezdaru, Mirijevo, Konjarnik, Mokri Lug i okolinu Cvetkove pijace računajte
              15 do 30 minuta. Za Kaluđericu i najudaljenije delove računajte 30 do 40 minuta.
              Procenu dobijate odmah na telefonu.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min, Zvezdara i Mirijevo</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">30-40</div>
                <div className="loc-stat-label">min, Kaluđerica</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">10+</div>
                <div className="loc-stat-label">godina iskustva</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">24h</div>
                <div className="loc-stat-label">svaki dan</div>
              </div>
            </div>

            <h2>Putnička vozila i kombiji, kamione ne</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Na licu mesta krpim gumu iznutra, menjam pneumatik,
              balansiram točak, montiram vašu rezervnu gumu i proveravam pritisak na sva četiri
              točka.
            </p>

            <h2>Cena i kako da me pozovete</h2>
            <p>
              Cena zavisi od lokacije, doba dana i vrste posla. Kažem vam je odmah kad me
              pozovete, pre nego što krenem, i posle se ne menja. Pozovite{' '}
              <strong>+381 64 12 90 929</strong>, recite mi ulicu i broj i kakav je prilaz, a
              ako se ne snalazite, pošaljite lokaciju preko Vibera ili WhatsApp-a.
            </p>

            <div className="loc-cta-band">
              <h3>Auto vam stoji na nagibu u Mirijevu?</h3>
              <p>Recite mi to na telefonu i dolazim spreman za takav teren.</p>
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
                  "Brza i efikasna usluga. Pukao mi je bio ventil na točku, stigli kao što je
                  rečeno za 20 minuta, korektna cena, pritom mi je auto bio u garaži sa niskim
                  prilazom gde kombi nije mogao da prođe i to nije predstavljalo nikakav
                  problem. Sve preporuke za Milana!"
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">M</div>
                    <div>
                      <div className="review-name">Mihailo Sajkunic</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/land-rover-dizalica.webp" data-full="/land-rover-dizalica.webp" alt="Auto podignut dizalicom na terenu, mobilni vulkanizer Zvezdara" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Dizalica postavljena na terenu</span></div>
              </div>
              <div className="gallery-item">
                <img src="/punjenje-gume-land-rover.webp" data-full="/punjenje-gume-land-rover.webp" alt="Punjenje gume vazduhom posle krpljenja na licu mesta" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Punjenje gume posle krpljenja</span></div>
              </div>
              <div className="gallery-item">
                <img src="/2.webp" data-full="/2.webp" alt="Zamena pneumatika na parkingu ispred zgrade" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Rad na parkingu ispred zgrade</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja sa Zvezdare</h2>
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
            <h2>Zvezdara, Mirijevo, Konjarnik, Kaluđerica</h2>
            <p>15 do 30 minuta na Zvezdari, 30 do 40 do Kaluđerice. Non-stop, svaki dan.</p>
            <div className="loc-final-cta-num">
              <a href="tel:+381641290929" className="js-tel" data-cta="poziv">+381 64 12 90 929</a>
            </div>
            <div className="loc-final-cta-actions">
              <a href="tel:+381641290929" className="btn-primary js-tel" data-cta="poziv">Pozovi odmah</a>
              <a href="https://wa.me/381641290929" className="btn-secondary" data-cta="whatsapp" target="_blank" rel="noopener">WhatsApp</a>
              <a href="viber://chat?number=%2B381641290929" className="btn-secondary" data-cta="viber">Viber</a>
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
