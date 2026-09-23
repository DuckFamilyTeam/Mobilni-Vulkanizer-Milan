import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni vulkanizer Čukarica | Dolazim na adresu, 24 sata',
  description:
    'Mobilni vulkanizer za Čukaricu, Banovo brdo, Žarkovo, Cerak i Železnik. Dolazim na vašu adresu za 15 do 30 minuta, non-stop. Pozovite 064 12 90 929.',
  keywords:
    'mobilni vulkanizer čukarica, vulkanizer banovo brdo, vulkanizer žarkovo, vulkanizer cerak, vulkanizer železnik, vulkanizer sremčica, krpljenje gume čukarica, vulkanizer 24h čukarica',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica',
  },
  openGraph: {
    title: 'Mobilni vulkanizer Čukarica | Dolazim na adresu, 24 sata',
    description:
      'Probušena guma na Banovom brdu, Žarkovu, Ceraku ili kod Ade? Dolazim na adresu za 15 do 30 minuta.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica',
    locale: 'sr_RS',
    type: 'website',
  },
};

const ZONE = [
  'Čukarica', 'Banovo brdo', 'Žarkovo', 'Cerak', 'Julino brdo', 'Petlovo brdo',
  'Železnik', 'Makiš', 'Ada Ciganlija', 'Sremčica', 'Ostružnica', 'Umka',
];

const FAQ = [
  {
    q: 'Izlazite li na parkinge Ade Ciganlije vikendom?',
    a: 'Izlazim. Vikendom i leti je tamo najveća gužva i tada me najčešće i zovu sa Ade. Recite mi kod kog ulaza ste parkirani i na kom platou, jer se po tom delu teško snalazi po adresi.',
  },
  {
    q: 'Ulica kod mene je uska i pod nagibom. Može li kombi uopšte da priđe?',
    a: 'U velikom broju slučajeva može, a tamo gde ne može ostavljam kombi na prvom mestu odakle mogu da iznesem alat i dizalicu do vašeg auta. Recite mi na telefonu kakav je prilaz, da znam šta da ponesem.',
  },
  {
    q: 'Zovem iz Umke, Ostružnice ili Sremčice. Dolazite li i tamo?',
    a: 'Dolazim. Za ta mesta vreme dolaska je duže nego u Žarkovu ili na Banovom brdu, realno 30 do 40 minuta, i to vam kažem odmah kada me pozovete.',
  },
  {
    q: 'Guma mi je pukla na Ibarskoj magistrali, na izlazu iz grada. Je li to vaša zona?',
    a: 'Jeste, deo Ibarske koji ide kroz Čukaricu i pored Ostružnice pokrivam redovno. Za deo na samoj obilaznici i auto-putu pogledajte stranicu za auto-put, tamo je opisano kako radim kad ste zaustavljeni na traci.',
  },
];

function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica#service',
        name: 'Mobilni vulkanizer Čukarica',
        description:
          'Mobilna vulkanizerska usluga na terenu za Čukaricu, Banovo brdo, Žarkovo, Cerak, Julino brdo, Železnik, Makiš, Adu Ciganliju, Sremčicu, Ostružnicu i Umku. Dolazak na adresu, non-stop 24 sata.',
        url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica',
        provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
        areaServed: ZONE.map((name) => ({ '@type': 'Place', name })),
        serviceType: 'Mobilna vulkanizerska usluga',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica',
          servicePhone: '+381641290929',
          availableLanguage: 'Serbian',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
          { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
          { '@type': 'ListItem', position: 3, name: 'Čukarica', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-cukarica#faq',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

export default async function CukaricaPage() {
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
              Mobilni vulkanizer <span className="accent">Čukarica</span>
              <br />
              dolazim za 15 do 30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na licu mesta, gde god da vam je auto stao na Čukarici, i
              kod vas sam za 15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary js-tel"
                data-cta="poziv"
                aria-label="Pozovi mobilnog vulkanizera na Čukarici"
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
              Toliko kratko stižem zato što ceo dan radim u pokretu po gradu, pa prema vama
              krećem sa najbliže tačke, a ne iz jedne baze.
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
            <li aria-current="page">Čukarica</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <h2>Zbog čega me najčešće zovu sa Čukarice</h2>
            <p>
              Leti i vikendom najviše poziva stiže sa Ade Ciganlije i sa prilaza Makišu.
              Ljudi provedu dan na Adi, vrate se do auta i zateknu praznu gumu, a parking je
              pun i nema kud da se pomere. Drugi tip poziva dolazi sa Ibarske magistrale, sa
              deonice kroz Čukaricu i pored Ostružnice, gde se guma najčešće ne izduva polako
              nego pukne u vožnji.
            </p>
            <p>
              Treći tip je najmirniji, ali ga ima svaki dan: čovek ujutru izađe pred zgradu na
              Ceraku, Julinom brdu ili Petlovom brdu i vidi da je auto legao na jednu stranu.
              Tu obično ima vremena, pa se dogovorimo za termin u toku dana.
            </p>

            <h2>Uske i strme ulice, i šta to znači kad izađem na teren</h2>
            <p>
              Banovo brdo i Julino brdo imaju ulice koje su i uske i pod nagibom, sa
              parkiranim autima sa obe strane. To je za mene glavni problem na Čukarici, ne
              udaljenost. Ako kombi ne može da priđe do vašeg auta, ostavljam ga na prvom
              mestu odakle mogu da iznesem dizalicu i alat, pa radim odatle.
            </p>
            <p>
              Požeška je glavna saobraćajnica ovog dela grada i u špicu ume da bude zakrčena,
              pa vam na telefonu kažem realnu procenu, ne najlepšu. Ako ste parkirani na
              nagibu, recite mi to, jer tada dodatno obezbeđujem auto pre nego što ga
              podignem.
            </p>

            <h2>Naselja koja pokrivam na Čukarici i oko nje</h2>
            <p>
              Redovno izlazim na Banovo brdo, u Žarkovo, na Cerak, Julino brdo i Petlovo brdo,
              pa dalje na Železnik i u Makiš. Ada Ciganlija je takođe u ovoj zoni, sa svim
              parkinzima oko jezera. Van užeg dela opštine pokrivam Sremčicu, Ostružnicu i
              Umku.
            </p>
            <p>
              Ako niste na Čukarici, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link> za
              pregled svih zona, ili{' '}
              <Link href="/mobilni-vulkanizer-novi-beograd">mobilni vulkanizer Novi Beograd</Link>{' '}
              i{' '}
              <Link href="/mobilni-vulkanizer-autoput-beograd">mobilni vulkanizer autoput</Link>{' '}
              za susedne zone.
            </p>

            <h2>Za koliko sam kod vas</h2>
            <p>
              Za Banovo brdo, Žarkovo, Cerak, Julino brdo, Petlovo brdo, Makiš, Adu i Železnik
              računajte 15 do 30 minuta. Za Sremčicu, Ostružnicu i Umku realno je 30 do 40
              minuta. Procenu dobijate na telefonu, pre nego što krenem, i trudim se da je ne
              lepšam.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min, Čukarica i Žarkovo</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">30-40</div>
                <div className="loc-stat-label">min, Umka i Sremčica</div>
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

            <h2>Šta radim, a šta ne radim</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Na licu mesta krpim gumu iznutra, menjam pneumatik,
              balansiram točak, montiram vašu rezervnu gumu i proveravam pritisak pre nego što
              krenete dalje.
            </p>

            <h2>Cena i poziv</h2>
            <p>
              Cena zavisi od lokacije, doba dana i toga šta tačno treba uraditi. Kažem vam je
              odmah kad me pozovete, pre nego što krenem, bez skrivenih troškova. Pozovite{' '}
              <strong>+381 64 12 90 929</strong> i recite mi ulicu i broj ili najbliži
              orijentir, a ako ste na Adi ili na Ibarskoj, pošaljite lokaciju preko Vibera ili
              WhatsApp-a.
            </p>

            <div className="loc-cta-band">
              <h3>Stojite pored auta negde na Čukarici?</h3>
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
            <h2 id="loc-proof-title">Recenzija sa Google profila</h2>
            <div className="reviews-grid reviews-grid-single">
              <article className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-body">
                  "Čovek je došao za oko 30min. Imao je dimenzije koje u tom momentu nisu imala
                  4 vulkanizera koje sam takodje zvao(235/40/19). Stvarno je sve brzo bilo
                  gotovo, ne jednu već su mi dve pukle ukratko brzo konretno i odnos cene
                  usluge i kvaliteta je odličan. Veliki pozdrav za Milana!"
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">L</div>
                    <div>
                      <div className="review-name">Luka Tomović</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/brza-zamena-guma.webp" data-full="/brza-zamena-guma.webp" alt="Brza zamena gume na terenu, mobilni vulkanizer Čukarica" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Zamena gume na licu mesta</span></div>
              </div>
              <div className="gallery-item">
                <img src="/montaza-gume-land-rover.webp" data-full="/montaza-gume-land-rover.webp" alt="Montaža gume na terenu, oprema iz kombija" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Montaža gume pred zgradom</span></div>
              </div>
              <div className="gallery-item">
                <img src="/nase-masine-su-potpuno-nove.webp" data-full="/nase-masine-su-potpuno-nove.webp" alt="Vulkanizerska mašina koju nosim u kombiju" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Oprema koju nosim sa sobom</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja sa Čukarice</h2>
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
            <h2>Čukarica, Banovo brdo, Žarkovo, Železnik</h2>
            <p>15 do 30 minuta u opštini, 30 do 40 do Umke i Sremčice. Non-stop, svaki dan.</p>
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
