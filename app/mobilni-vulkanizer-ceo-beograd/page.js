import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni vulkanizer Beograd | Dolazim na adresu, 24 sata',
  description:
    'Mobilni vulkanizer za ceo Beograd. Dolazim na vašu adresu za 15 do 30 minuta, non-stop. Krpljenje i zamena gume na licu mesta. Pozovite 064 12 90 929.',
  keywords:
    'mobilni vulkanizer beograd, vulkanizer beograd, vulkanizer dolazi na adresu, mobilni vulkanizer 24h, krpljenje gume beograd, zamena gume na terenu beograd, vulkanizer noću beograd',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
  },
  openGraph: {
    title: 'Mobilni vulkanizer Beograd | Dolazim na adresu, 24 sata',
    description:
      'Pukla vam je guma bilo gde u Beogradu? Dolazim na vašu adresu za 15 do 30 minuta, non-stop 24 sata.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
    locale: 'sr_RS',
    type: 'website',
  },
};

const ZONE = [
  'Novi Beograd', 'Zemun', 'Surčin', 'Batajnica', 'Borča', 'Krnjača', 'Karaburma',
  'Kotež', 'Ovča', 'Padinska skela', 'Zvezdara', 'Mirijevo', 'Konjarnik', 'Kaluđerica',
  'Čukarica', 'Banovo brdo', 'Žarkovo', 'Sremčica', 'Ostružnica', 'Umka', 'Železnik',
  'Voždovac', 'Vračar', 'Rakovica', 'Palilula', 'Stari grad', 'Savski venac', 'Pančevo',
];

const FAQ = [
  {
    q: 'Pokrivate li i prigradska naselja kao što su Umka, Ostružnica i Sremčica?',
    a: 'Da, izlazim i tamo. Za ta naselja vreme dolaska je duže nego u užem delu grada, realno 30 do 40 minuta. Procenu vam kažem odmah na telefonu, pre nego što krenem.',
  },
  {
    q: 'Radite li na kamionima i autobusima?',
    a: 'Ne. Radim na putničkim vozilima, džipovima i kombijima. Za kamione i autobuse nemam opremu i ne primam takve pozive, da vam ne bih gubio vreme.',
  },
  {
    q: 'Ne znam tačnu adresu, stao sam pored puta. Kako da vam kažem gde sam?',
    a: 'Najbrže je da mi pošaljete lokaciju preko Vibera ili WhatsApp-a. Ako to ne možete, dovoljna je najbliža raskrsnica, naziv naselja ili neki vidljiv orijentir, benzinska pumpa, most, tržni centar.',
  },
  {
    q: 'Mogu li da vas zovem u tri ujutru?',
    a: 'Možete. Radim non-stop, 24 sata, svaki dan u nedelji. Noćni pozivi su normalan deo posla i tada je saobraćaj rasterećen, pa često stignem brže nego u dnevnoj gužvi.',
  },
];

function buildJsonLd(rating, reviewCount) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd#service',
        name: 'Mobilni vulkanizer Beograd',
        description:
          'Mobilna vulkanizerska usluga na terenu za ceo Beograd. Dolazak na adresu za 15 do 30 minuta, non-stop 24 sata. Krpljenje, zamena i balansiranje guma na licu mesta.',
        url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
        provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
        areaServed: ZONE.map((name) => ({ '@type': 'Place', name })),
        serviceType: 'Mobilna vulkanizerska usluga',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
          servicePhone: '+381641290929',
          availableLanguage: 'Serbian',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Početna',
            item: 'https://www.mobilnivulkanizermilan.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mobilni vulkanizer Beograd',
            item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd#faq',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

export default async function CeoBeogradPage() {
  const { rating, reviewCount } = await getGbpRating();
  const jsonLd = buildJsonLd(rating, reviewCount);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">

      <section className="loc-hero" role="region" aria-labelledby="loc-title">
        <div className="container">
          <div className="loc-hero-inner">

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Beograd</span>
              <br />
              dolazim za 15 do 30 minuta, 24 sata
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na licu mesta, na vašoj adresi, i u najvećem delu
              Beograda sam kod vas za 15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary js-tel"
                data-cta="poziv"
                aria-label="Pozovi mobilnog vulkanizera u Beogradu"
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
            </div>

            <div className="loc-hero-alt">
              <span className="loc-hero-alt-num">
                Broj za kucanje i kopiranje: <strong>+381 64 12 90 929</strong>
              </span>
              <span className="loc-hero-alt-links">
                <a
                  href="https://wa.me/381641290929"
                  className="btn-secondary btn-sm"
                  data-cta="whatsapp"
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp
                </a>
                <a
                  href="viber://chat?number=%2B381641290929"
                  className="btn-secondary btn-sm"
                  data-cta="viber"
                >
                  Viber
                </a>
              </span>
            </div>

            <p className="loc-hero-why">
              To vreme je realno zato što sam ceo dan u pokretu po gradu, pa prema vama
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
            <li aria-current="page">Mobilni vulkanizer Beograd</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <h2>Šta radim kad izađem na vašu adresu</h2>
            <p>
              U kombiju nosim kompresor, hidrauličnu dizalicu, balansirku, alat za
              demontažu i montažu i materijal za krpljenje iznutra. To znači da na vašem
              parkingu, u dvorištu ili pored puta mogu da uradim isto ono što bih uradio u
              radnji: da zakrpim probušenu gumu, da zamenim pneumatik, da izbalansiram
              točak, da montiram vašu rezervnu gumu i da proverim pritisak na sva četiri
              točka pre nego što krenete dalje.
            </p>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne
              radim, za njih nemam opremu i bolje je da to znate pre nego što me pozovete
              nego da čekate uzalud.
            </p>

            <h2>Naselja i opštine koje pokrivam</h2>
            <p>
              Preko mosta pokrivam Novi Beograd, Zemun, Surčin i Batajnicu, a sa druge
              strane Dunava Borču, Krnjaču, Karaburmu, Kotež, Ovču i Padinsku skelu. Na
              istoku grada izlazim na Zvezdaru, u Mirijevo, na Konjarnik i u Kaluđericu.
            </p>
            <p>
              Jugozapadno pokrivam Čukaricu, gde su Banovo brdo i Žarkovo, pa dalje Sremčicu,
              Ostružnicu, Umku i Železnik. U samom gradu izlazim na Voždovac, Vračar, u
              Rakovicu, na Palilulu, Stari grad i Savski venac. Van Beograda redovno radim
              i u Pančevu.
            </p>
            <p>
              Za svaku od tih zona postoji i posebna stranica sa detaljima o terenu, pa
              pogledajte{' '}
              <Link href="/mobilni-vulkanizer-novi-beograd">mobilni vulkanizer Novi Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-zemun">mobilni vulkanizer Zemun</Link>,{' '}
              <Link href="/mobilni-vulkanizer-aerodrom">mobilni vulkanizer Surčin i aerodrom</Link>,{' '}
              <Link href="/mobilni-vulkanizer-borca">mobilni vulkanizer Borča</Link>,{' '}
              <Link href="/mobilni-vulkanizer-krnjaca">mobilni vulkanizer Krnjača</Link>,{' '}
              <Link href="/mobilni-vulkanizer-cukarica">mobilni vulkanizer Čukarica</Link>,{' '}
              <Link href="/mobilni-vulkanizer-zvezdara">mobilni vulkanizer Zvezdara</Link>,{' '}
              <Link href="/mobilni-vulkanizer-batajnica">mobilni vulkanizer Batajnica</Link>,{' '}
              <Link href="/mobilni-vulkanizer-pancevo">mobilni vulkanizer Pančevo</Link> i{' '}
              <Link href="/mobilni-vulkanizer-autoput-beograd">mobilni vulkanizer autoput</Link>.
            </p>

            <h2>Za koliko stižem i zašto je to vreme realno</h2>
            <p>
              U najvećem delu grada kod vas sam za 15 do 30 minuta. Za prigradska naselja
              na obodu, kao što su Umka, Ostružnica ili Sremčica, računajte 30 do 40
              minuta.
            </p>
            <p>
              Razlog zašto tako kratko vreme uopšte stoji na ovoj stranici nije
              reklamni. Ja ceo dan radim u pokretu, prelazim iz opštine u opštinu i retko
              kad sam parkiran na jednom mestu. Kada me pozovete, ne krećem iz radnje u
              Borči nego sa mesta na kome se tog trenutka nalazim, a to je najčešće negde u
              vašoj blizini. Zato i mogu da vam kažem procenu odmah na telefonu, dok mi
              opisujete gde ste.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min u gradu</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">30-40</div>
                <div className="loc-stat-label">min na obodu</div>
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

            <h2>Koliko košta</h2>
            <p>
              Cena zavisi od lokacije, doba dana i toga šta tačno treba uraditi. Kažem vam
              je odmah kad me pozovete, pre nego što krenem, i ona se posle ne menja. Nema
              skrivenih troškova i nema naplate izlaska koju biste saznali tek na licu
              mesta. Izlazak na teren jeste skuplji od odlaska u vulkanizersku radnju, i to
              vam otvoreno kažem, jer plaćate to što ja dolazim kod vas i što ne morate da
              vučete auto nigde.
            </p>

            <h2>Kako da me pozovete</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, recite mi gde ste i šta se
              desilo sa gumom. Ako ne znate tačnu adresu, pošaljite mi lokaciju preko
              Vibera ili WhatsApp-a. Dobijate procenu vremena i cenu pre nego što krenem.
            </p>

            <div className="loc-cta-band">
              <h3>Stojite pored auta sa probušenom gumom?</h3>
              <p>Jedan poziv i dobijate vreme dolaska i cenu, odmah.</p>
              <a
                href="tel:+381641290929"
                className="btn-primary js-tel"
                data-cta="poziv"
              >
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
                  "Veoma sam zadovoljna kvalitetom usluge i brzim dolaskom u centar grada,
                  po velikoj guzvi. Toplo preporučujem Milana."
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">M</div>
                    <div>
                      <div className="review-name">Maja Maja</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/8.webp" data-full="/8.webp" alt="Mobilni vulkanizer Milan na intervenciji u centru Beograda" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Centar Beograda, intervencija na licu mesta</span></div>
              </div>
              <div className="gallery-item">
                <img src="/kombi-oprema.webp" data-full="/kombi-oprema.webp" alt="Vulkanizerska oprema u kombiju, kompresor i balansirka" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Oprema koju nosim u kombiju</span></div>
              </div>
              <div className="gallery-item">
                <img src="/intervencija.webp" data-full="/intervencija.webp" alt="Zamena gume na terenu u Beogradu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Zamena gume na terenu</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja o izlasku na teren u Beogradu</h2>
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
            <h2>Bilo gde u Beogradu, dolazim kod vas</h2>
            <p>
              U gradu 15 do 30 minuta, na obodu 30 do 40. Non-stop, svaki dan u nedelji.
            </p>
            <div className="loc-final-cta-num">
              <a href="tel:+381641290929" className="js-tel" data-cta="poziv">
                +381 64 12 90 929
              </a>
            </div>
            <div className="loc-final-cta-actions">
              <a
                href="tel:+381641290929"
                className="btn-primary js-tel"
                data-cta="poziv"
              >
                Pozovi odmah
              </a>
              <a
                href="https://wa.me/381641290929"
                className="btn-secondary"
                data-cta="whatsapp"
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B381641290929"
                className="btn-secondary"
                data-cta="viber"
              >
                Viber
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
