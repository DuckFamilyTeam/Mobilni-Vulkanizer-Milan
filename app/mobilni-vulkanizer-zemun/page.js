import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Zemun | Dolazak 15-30 min, 24/7',
  description:
    'Mobilni vulkanizer Zemun, dolazim na bilo koju adresu u Zemunu za 15-30 minuta. Od Gardoša do Bežanijske kose. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer zemun, vulkanizer zemun, krpljenje gume zemun, zamena guma zemun, vulkanizer gardoš, vulkanizer bežanijska kosa, vulkanizer 24h zemun, vulkanizer dolazi na adresu zemun, vulkanizer noću zemun, vulkanizer vikend zemun',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Zemun | 15-30 min, 24/7',
    description:
      'Probušena guma u Zemunu? Stižem na vašu adresu za 15-30 minuta, sa preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
    locale: 'sr_RS',
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'Stari Zemun ima uske ulice i kaldrmu. Dolazite li i tamo?',
    a: 'Dolazim. Tamo kombi često ne može do samog auta, pa ga ostavljam na prvom mestu odakle mogu da iznesem dizalicu i alat. Na kaldrmi dizalicu postavljam na svoju podlogu.',
  },
  {
    q: 'Parkiran sam na Keju, gde nema kućnog broja. Kako da opišem gde sam?',
    a: 'Dovoljan je najbliži splav, restoran ili ulaz na Kej. Najbrže je da mi pošaljete lokaciju preko Vibera ili WhatsApp-a.',
  },
  {
    q: 'Može li intervencija da se zakaže za tačno vreme, a ne odmah?',
    a: 'Može, ako niste u kvaru nego planirate zamenu. Dogovorimo termin na telefonu. Hitni pozivi imaju prednost, pa vas obavestim ako se nešto pomeri.',
  },
  {
    q: 'Radite li i vikendom i praznikom u Zemunu?',
    a: 'Radim svaki dan, 24 sata, i vikendom i praznikom. Nema dana u godini kada telefon ne radi.',
  },
];

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun#service',
      name: 'Mobilni Vulkanizer Zemun',
      description:
        'Mobilna vulkanizerska usluga u Zemunu, dolazak na bilo koju adresu za 15-30 minuta. Od Gardoša do Bežanijske kose. Non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Zemun', containedInPlace: { '@type': 'City', name: 'Beograd' } },
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
        { '@type': 'ListItem', position: 3, name: 'Zemun', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};
}

export default async function ZemunPage() {
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
              Mobilni vulkanizer <span className="accent">Zemun</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi u Zemunu, od Gardoša do Bežanijske kose, i
              kod vas sam za 15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="js-tel btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Zemun" data-cta="poziv">
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
              Toliko brzo stižem zato što ceo dan radim u pokretu po gradu, pa prema vama krećem sa najbliže tačke, a ne iz jedne baze.
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
            <li aria-current="page">Zemun</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilni vulkanizer koji odlično poznaje Zemun</h2>
            <p>
              Zemun je specifičan deo Beograda. Sa svoje dve velike celine,
              starim, istorijskim jezgrom i modernim novogradnjama na
              Bežanijskoj kosi i Altini, ima ulice koje se ne nalaze tako
              lako sa GPS-a. Strme uličice ka Gardošu, jednosmerne kraj
              Magistratskog trga, saobraćajne gužve ka Tošinom bunaru… Sve to
              znam, jer{' '}
              <strong>više od 10 godina</strong> radim kao mobilni vulkanizer i
              Zemun mi je jedan od najfrekventnijih kvartova.
            </p>

            <p>
              Bez obzira da li ste parkirali u Glavnoj ulici, na Keju oslobođenja, kod Pijace
              Zemun ili dublje u Bežanijskoj kosi, stižem u proseku za 15 do 30 minuta. Procenu
              dajem pre nego što krenem.
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

            <h2>Stari Zemun, uske ulice nisu problem</h2>
            <p>
              Stari deo Zemuna ima svoj šarm, ali i svoje izazove za rad sa
              autom. Ulice oko Gardoša, Visoki Stevan, Magistratski trg, kalvarija
              prema Kuli Sibinjanin Janka, često tu ne možete ni okrenuti
              vozilo, a kamoli da gurate auto sa probušenom gumom. Zato dolazim
              ja: parkiram servisno vozilo na razuman položaj, krpim ili
              menjam gumu na licu mesta, i čovek nastavlja gde je krenuo,
              bez gužve, bez stresa.
            </p>

            <div className="loc-cta-band">
              <h3>Probušena guma u Zemunu, sad?</h3>
              <p>
                Pozovite, recite mi adresu, i dobijate realnu procenu vremena
                dolaska pre nego što krenem ka vama.
              </p>
              <a href="tel:+381641290929" className="js-tel btn-primary" data-cta="poziv">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Bežanijska kosa, Altina, Zemun Polje</h2>
            <p>
              Novogradnja je Zemunu donela hiljade novih stanara, a i nove
              probleme, ulice u Bežanijskoj kosi su širi, ali parkinzi često
              prepuni, a posebno problematične su rupe na asfaltu kod
              raskrsnica. Mobilni vulkanizer dolazi na konkretne adrese: bilo
              da ste u Marka Čelebonovića, na ulasku u Altinu, kod Zemun Park
              tržnog centra, ili duž Tošinog bunara, pokrivenost je pun krug.
            </p>
            <p>
              U zoni su i Stari Zemun sa Gardošem, Magistratski trg, Glavna ulica i Kej
              oslobođenja, Plavi horizonti, Tošin bunar, Altina, Zemun Polje i Bežanijska kosa
              sa prvim, drugim i trećim blokom.
            </p>


            <h2>Kada me najčešće zovu iz Zemuna</h2>
            <p>
              Iz Zemuna pozivi dolaze u tri tipične situacije.{' '}
              <strong>Prvo</strong>, vozači koji izlaze iz tržnog centra
              Zemun Park ili Zemunske pijace, parkiraju kola u redovnoj
              rutini, i tek kad krenu kući primete da im je guma ispraznjena.
              Tipično šraf, ekser ili komad stakla iz neuredne ulice. Stignem
              brzo, krpim na licu mesta, i kupovina se završava onako kako je
              i trebalo.
            </p>
            <p>
              <strong>Drugo</strong>, turisti i ljudi iz drugih delova grada
              koji dođu u Stari Zemun u šetnju kraj Dunava, parkiraju kraj
              Keja oslobođenja, i tu naiđu na probušenu gumu. Stari deo grada
              ima neravne kaldrme i ulice gde je lako udariti felnu, sa tim
              poslovima imam najviše iskustva, jer Zemun znam u prste.
            </p>
            <p>
              <strong>Treće</strong>, stanovnici Bežanijske kose koji ujutru
              kreću na posao u centar i otkriju ispraznjenu gumu nakon
              noćnog "punjenja" zbog probušenog protektora. Ovde je brzina
              ključna, jer ljudi ne smeju da kasne. Kao mobilni vulkanizer
              razumem koliko je svaki minut važan.
            </p>

            <h2>Pozovi sada, u Zemunu sam za 15-30 min</h2>
            <p>
              Ne morate gubiti pola dana, ne morate gurati auto, ne morate
              čekati vučnu službu. Pozovite{' '}
              <strong>+381 64 12 90 929</strong>, recite mi tačnu adresu u
              Zemunu i šta se desilo, dobićete procenu vremena dolaska i fer
              cenu pre početka rada. Profesionalan mobilni vulkanizer na vašoj
              adresi, non-stop, 24h, svih 365 dana u godini.
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
                  "Ljudi su dosli za 15 minuta i ekspresno zamenili gumu. Pristojni su i povoljni. Veoma sam zadovoljan"
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">D</div>
                    <div>
                      <div className="review-name">D N</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/2.webp" data-full="/2.webp" alt="Zamena gume na terenu u Zemunu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Zamena gume na licu mesta</span></div>
              </div>
              <div className="gallery-item">
                <img src="/brza-zamena-guma.webp" data-full="/brza-zamena-guma.webp" alt="Brza zamena pneumatika na adresi" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Brza zamena pneumatika</span></div>
              </div>
              <div className="gallery-item">
                <img src="/tu-smo-za-sve-i-na-svim-lokacijama.webp" data-full="/tu-smo-za-sve-i-na-svim-lokacijama.webp" alt="Servisni kombi mobilnog vulkanizera" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Kombi sa opremom</span></div>
              </div>
            </div>

            <h2>Susedne zone</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Ako vam je auto stao izvan ove zone, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-novi-beograd">mobilni vulkanizer Novi Beograd</Link> i{' '}
              <Link href="/mobilni-vulkanizer-batajnica">mobilni vulkanizer Batajnica</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja iz Zemuna</h2>
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
            <h2>Probušena guma u Zemunu? Stižem brzo</h2>
            <p>
              Jedan poziv je sve što vam treba. 24 časa dnevno, svih 365 dana
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
