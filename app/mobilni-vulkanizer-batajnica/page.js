import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni vulkanizer Batajnica i Pazova | Dolazim na adresu',
  description:
    'Mobilni vulkanizer za Batajnicu, Novu i Staru Pazovu, Ugrinovce, Šimanovce i Banovce. Dolazim na vašu adresu, non-stop 24 sata. Pozovite 064 12 90 929.',
  keywords:
    'mobilni vulkanizer batajnica, vulkanizer nova pazova, vulkanizer stara pazova, vulkanizer ugrinovci, vulkanizer šimanovci, vulkanizer banovci dunav, krpljenje gume batajnica',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica',
  },
  openGraph: {
    title: 'Mobilni vulkanizer Batajnica i Pazova | Dolazim na adresu',
    description:
      'Probušena guma pred kućom u Batajnici ili na batajničkom drumu? Dolazim na adresu, non-stop 24 sata.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica',
    locale: 'sr_RS',
    type: 'website',
  },
};

const ZONE = [
  'Batajnica', 'Nova Pazova', 'Stara Pazova', 'Ugrinovci', 'Šimanovci',
  'Banovci Dunav', 'Batajnički drum',
];

const FAQ = [
  {
    q: 'Prilaz do moje kuće nije asfaltiran. Može li kombi da uđe?',
    a: 'U većini slučajeva može, a ako je prilaz raskvašen posle kiše, ostavljam kombi na tvrdom delu i donosim opremu do auta. Recite mi kakav je prilaz dok smo na telefonu, da ne gubimo vreme na licu mesta.',
  },
  {
    q: 'Zovem iz industrijske zone Nove Pazove, nisam siguran kako da opišem gde sam.',
    a: 'Dovoljan mi je naziv firme ili hale i najbliži ulaz u krug. Ako ni to ne znate, pošaljite lokaciju preko Vibera ili WhatsApp-a, to je u tom delu najbrže.',
  },
  {
    q: 'Koliko dugo traje krpljenje, moram da stignem na posao?',
    a: 'Samo krpljenje ili zamena traju oko deset do petnaest minuta kad je guma dostupna. Najveći deo vremena je dolazak, a njega vam kažem odmah kada me pozovete.',
  },
  {
    q: 'Guma mi je pukla na E75 kod petlje Batajnica. Je li to ova stranica?',
    a: 'Nije. Ova stranica je za intervencije u Batajnici i okolnim mestima. Ako stojite na traci ili na zaustavnoj traci auto-puta, pogledajte stranicu za auto-put, jer se tamo radi drugačije i sa dodatnim merama bezbednosti.',
  },
];

function buildJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica#service',
        name: 'Mobilni vulkanizer Batajnica',
        description:
          'Mobilna vulkanizerska usluga na terenu za Batajnicu, Novu Pazovu, Staru Pazovu, Ugrinovce, Šimanovce i Banovce Dunav. Dolazak na adresu, non-stop 24 sata.',
        url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica',
        provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
        areaServed: ZONE.map((name) => ({ '@type': 'Place', name })),
        serviceType: 'Mobilna vulkanizerska usluga',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica',
          servicePhone: '+381641290929',
          availableLanguage: 'Serbian',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
          { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
          { '@type': 'ListItem', position: 3, name: 'Batajnica', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-batajnica#faq',
        mainEntity: FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}

export default async function BatajnicaPage() {
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
              Mobilni vulkanizer <span className="accent">Batajnica</span>
              <br />
              dolazim za 15 do 30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi u Batajnici i okolnim mestima, i kod vas sam
              za 15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary js-tel"
                data-cta="poziv"
                aria-label="Pozovi mobilnog vulkanizera u Batajnici"
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
              Stižem toliko brzo zato što ceo dan radim u pokretu, pa prema vama krećem sa
              najbliže tačke, a ne iz jedne baze.
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
            <li aria-current="page">Batajnica</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <h2>Guma je pukla kod kuće u Batajnici, ne na auto-putu</h2>
            <p>
              Najveći broj poziva iz Batajnice nema veze sa auto-putem. Čovek ujutru izađe pred
              kuću, vidi da je guma prazna i treba mu neko ko će doći do njega, jer sa praznom
              gumom ne ide nigde. Isto se dešava i uveče, kad se vrati sa posla i zatekne
              izduvanu gumu na dvorištu.
            </p>
            <p>
              Drugi čest poziv stiže sa batajničkog druma, obično pri izlasku ka E75. Tu se
              guma najčešće ne izduva polako nego pukne u vožnji, pa vozač skrene na prvo
              prošireno mesto i stane. Vojni aerodrom je u tom delu najlakši orijentir kada mi
              objašnjavate gde ste.
            </p>

            <h2>Batajnički drum, pružni prelaz i prilazi</h2>
            <p>
              Pružni prelaz u Batajnici ume da zadrži saobraćaj u oba smera i to je jedino
              mesto koje mi na ovom terenu realno produži dolazak. Kada ga uračunam u procenu,
              broj koji vam kažem je onaj na koji možete da računate.
            </p>
            <p>
              Deo prilaza u Batajnici i u Ugrinovcima nije asfaltiran, a posle kiše zna da bude
              raskvašen. Ako kombi ne može do vašeg auta, ostavljam ga na tvrdom delu i donosim
              dizalicu i alat peške. Zato vas na telefonu i pitam kakav je prilaz.
            </p>

            <h2>Mesta koja pokrivam oko Batajnice</h2>
            <p>
              Pored same Batajnice, u mojoj zoni su Nova Pazova i Stara Pazova, pa Ugrinovci,
              Šimanovci i Banovci Dunav. Tu je i industrijska zona Nove Pazove, gde radim i za
              firme, na njihovim vozilima i kombijima.
            </p>
            <p>
              Susedne zone pokrivaju{' '}
              <Link href="/mobilni-vulkanizer-zemun">mobilni vulkanizer Zemun</Link> i{' '}
              <Link href="/mobilni-vulkanizer-aerodrom">mobilni vulkanizer Surčin i aerodrom</Link>,
              a pregled svih zona je na stranici{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>.
            </p>

            <h2>Koliko čekate i zašto toliko</h2>
            <p>
              Za Batajnicu, Ugrinovce i Banovce Dunav računajte 15 do 30 minuta. Za Novu
              Pazovu, Staru Pazovu i Šimanovce realno je 30 do 40 minuta. Procenu dobijate
              odmah na telefonu, zajedno sa cenom.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min, Batajnica i Ugrinovci</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">30-40</div>
                <div className="loc-stat-label">min, Pazova i Šimanovci</div>
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

            <h2>Cena se zna pre nego što krenem</h2>
            <p>
              Cena zavisi od mesta, doba dana i toga šta treba uraditi. Kažem vam je na
              telefonu, pre polaska, i ona se posle ne menja. Nema naplate izlaska koju biste
              saznali tek kad stignem. Izlazak na teren jeste skuplji od odlaska u radnju, i to
              vam kažem otvoreno, jer plaćate to što ja dolazim kod vas.
            </p>

            <h2>Šta radim i šta ne radim</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Na licu mesta krpim gumu iznutra, menjam pneumatik,
              balansiram točak, montiram vašu rezervnu gumu i proveravam pritisak pre nego što
              nastavite.
            </p>

            <div className="loc-cta-band">
              <h3>Prazna guma pred kućom u Batajnici?</h3>
              <p>Pozovite i recite mi adresu i kakav je prilaz, ostalo je moj posao.</p>
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
                  "Majstor je stigao za 20 minuta. Izuzetno prijatan, ljubazan, nasmejan i
                  profesionalan. Problem je brzo i efikasno rešen. Sve preporuke za uslugu!"
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">N</div>
                    <div>
                      <div className="review-name">Nina Rakonjac</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/tu-smo-za-sve-i-na-svim-lokacijama.webp" data-full="/tu-smo-za-sve-i-na-svim-lokacijama.webp" alt="Servisni kombi mobilnog vulkanizera na terenu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Kombi sa kompletnom opremom</span></div>
              </div>
              <div className="gallery-item">
                <img src="/6.webp" data-full="/6.webp" alt="Krpljenje probušene gume na licu mesta" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Krpljenje gume na licu mesta</span></div>
              </div>
              <div className="gallery-item">
                <img src="/kombi-oprema.webp" data-full="/kombi-oprema.webp" alt="Kompresor, dizalica i alat u servisnom kombiju" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Alat koji nosim na svaki izlazak</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja iz Batajnice i okoline</h2>
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
            <h2>Batajnica, Pazova, Ugrinovci, Šimanovci</h2>
            <p>15 do 30 minuta u Batajnici, 30 do 40 do Pazove. Non-stop, svaki dan.</p>
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
