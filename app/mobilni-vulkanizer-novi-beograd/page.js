import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Novi Beograd | 15-30 min, 24/7',
  description:
    'Mobilni vulkanizer Novi Beograd, dolazim na sve blokove, bulevare i poslovne zone za 15-30 minuta. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva, non-stop 24h. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer novi beograd, vulkanizer novi beograd, krpljenje gume novi beograd, zamena guma novi beograd, vulkanizer blok 21, vulkanizer blok 45, vulkanizer 24h novi beograd, vulkanizer dolazi na adresu novi beograd, vulkanizer noću novi beograd, vulkanizer vikend novi beograd',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Novi Beograd | 15-30 min, 24/7',
    description:
      'Probušena guma na Novom Beogradu? Stižem na svaki blok, bulevar i parking u proseku za 15-30 minuta. Preko 10 godina iskustva.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
    locale: 'sr_RS',
    type: 'website',
  },
};

const FAQ = [
  {
    q: 'Stojim na parkingu ispred bloka i ne znam broj ulaza. Kako da me nađete?',
    a: 'Recite mi broj bloka i najbliži orijentir, tržni centar, školu ili bulevar. Ako ni to ne pomaže, pošaljite lokaciju preko Vibera ili WhatsApp-a, to je u blokovima najbrže.',
  },
  {
    q: 'Radite li na parkinzima tržnih centara?',
    a: 'Radim. Recite mi nivo i broj parking mesta. U podzemnim garažama sa niskim prilazom ostavljam kombi ispred i donosim dizalicu i alat do vašeg auta.',
  },
  {
    q: 'Guma me je izdala na bulevaru i nemam gde da stanem. Šta da radim?',
    a: 'Pomerite se do prvog bezbednog parkinga ili proširenja, uključite sva četiri žmigavca i zovite. Nemojte dugo voziti na praznoj gumi, jer se tada obično uništi i felna.',
  },
  {
    q: 'Imam run flat gumu, da li se ona krpi?',
    a: 'Zavisi od mesta i veličine oštećenja. To procenjujem na licu mesta. Ako se ne sme krpiti, montiram vašu rezervnu ili po dogovoru nabavljam novu.',
  },
];

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd#service',
      name: 'Mobilni Vulkanizer Novi Beograd',
      description:
        'Mobilna vulkanizerska usluga na Novom Beogradu, dolazak na sve blokove, bulevare i poslovne zone za 15-30 minuta. Non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Novi Beograd', containedInPlace: { '@type': 'City', name: 'Beograd' } },
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://www.mobilnivulkanizermilan.com/' },
        { '@type': 'ListItem', position: 2, name: 'Mobilni vulkanizer Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-ceo-beograd' },
        { '@type': 'ListItem', position: 3, name: 'Novi Beograd', item: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-novi-beograd#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};
}

export default async function NoviBeogradPage() {
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
              Mobilni vulkanizer <span className="accent">Novi Beograd</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Krpim i menjam gume na vašoj adresi na Novom Beogradu, u bilo kom bloku, i kod
              vas sam za 15 do 30 minuta.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="js-tel btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Novi Beograd" data-cta="poziv">
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
            <li aria-current="page">Novi Beograd</li>
          </ol>
        </div>
      </nav>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilni vulkanizer za ceo Novi Beograd</h2>
            <p>
              Novi Beograd je desetine blokova, kilometri bulevara i ogromni parkinzi tržnih
              centara. Kada ovde pukne guma, vreme je dragoceno. Kao{' '}
              <strong>mobilni vulkanizer Novi Beograd</strong> ovaj deo grada znam u prste, od
              blokova oko Genex kule do Belvillea i parkinga ispred Štark Arene.
            </p>

            <p>
              Sa <strong>preko 10 godina iskustva</strong> u zanatu brzo vidim o čemu se radi i
              znam najbrži put do vaše tačne lokacije, bilo da ste u Bloku 45 ili na parkingu
              tržnog centra.
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

            <h2>Sve blokove i bulevare pokrivam</h2>
            <p>
              Novi Beograd ima svoju logiku, blokove organizovane po
              brojevima, sa parkinzima koje vozači dobro poznaju, ali i sa
              skrivenim ulicama gde GPS zna da pogreši. Zato ne tražim "negde
              kod broja 17", pitam vas tačan blok, broj zgrade i ulaz, i tako
              znam tačno gde da skrenem. Ovo je razlika između
              profesionalnog mobilnog vulkanizera i nekoga ko po prvi put
              dolazi u kraj.
            </p>
            <p>
              Pokriveni su blokovi od 19a do 70 i svi veliki pravci kroz naselje: bulevar
              Mihajla Pupina, bulevar Zorana Đinđića, bulevar AVNOJ-a i bulevar umetnosti.
              Isto važi i za tačke kod kojih se najčešće staje, Genex, Ušće, Štark Arena, Sava
              centar, Belville, Delta City, Airport City i Tošin bunar, kao i za prilaze koje
              svi koriste, Most na Adi, Brankov most i Gazela.
            </p>


            <div className="loc-cta-band">
              <h3>Negde ste zaglavili na Novom Beogradu?</h3>
              <p>
                Pozovite, kažite mi blok i broj, daću realnu procenu vremena
                pre nego što krenem.
              </p>
              <a href="tel:+381641290929" className="js-tel btn-primary" data-cta="poziv">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Šta sve mogu da uradim na licu mesta</h2>
            <p>
              U servisnom vozilu nosim kompletnu vulkanizersku opremu,
              kompresor, hidrauličnu dizalicu, balansirku, profesionalan alat
              za demontažu i montažu, materijal za krpljenje, instrumente za
              proveru pritiska. Krpim probušene gume{' '}
              <strong>iznutra</strong>, menjam zimske i
              letnje pneumatike, balansiram točkove do nule, ispravljam blago
              oštećene felne, kontrolišem i punim pritisak svih guma. Sve
              standardne vulkanizerske intervencije, ali kod vas, ne vas kod
              mene.
            </p>

            <h2>Kada me najčešće zovu sa Novog Beograda</h2>
            <p>
              Sa Novog Beograda pozivi dolaze tokom celog dana, ali postoje
              tri tipične situacije. <strong>Prvo</strong>, pozivi iz
              poslovnih zgrada na Pupinovom bulevaru i Bulevaru Zorana
              Đinđića. Ljudi izađu iz kancelarije u 18h, sednu u auto i
              vide da je guma puna. Često su u pitanju šrafovi pokupljeni na
              gradilištima i poslovnim parkinzima. Stignem za 15-30 minuta i
              čovek krene kući bez gubitka vremena.
            </p>
            <p>
              <strong>Drugo</strong>, pozivi sa parkinga tržnih centara.
              Delta City, Ušće, Airport City Mall, svi imaju ogromne
              parkinge gde ljudi parkiraju, obave kupovinu, i nakon dva sata
              vide ispraznjenu gumu. Tu sam naročito brz, jer sve te lokacije
              dobro znam i znam i kojim ulazom je najlakše prići.
            </p>
            <p>
              <strong>Treće</strong>, pozivi iz blokova u kasnim satima.
              Stanovnici se vraćaju kući, parkiraju ispred zgrade, i tek
              ujutru otkriju da je guma izduvana preko noći (klasično "noćno
              punjenje" zbog šrafa ili eksera). Ovde najčešće radim ujutru
              između 6h i 9h, pre nego što ljudi krenu na posao.
            </p>

            <h2>Pozovi me sada, Novi Beograd, 15-30 minuta</h2>
            <p>
              Pozovite <strong>+381 64 12 90 929</strong>, kažite mi blok, broj zgrade i ulaz
              i šta se desilo sa gumom. Vreme dolaska i cenu dobijate pre nego što krenem.
            </p>
          </div>
        </div>
      </section>


      <section className="loc-proof" role="region" aria-labelledby="loc-proof-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-proof-title">Šta kažu klijenti</h2>
            <div className="reviews-grid reviews-grid-single">
              <article className="review-card">
                <div className="review-stars">★★★★★</div>
                <p className="review-body">
                  "Momak kulturan, brz, dosao je odmah i promenio sve 4 gume u roku od 15 minuta, pritom pazio da nista ne osteti ispod auta dizalicom itd.... sve preporuke!"
                </p>
                <div className="review-meta">
                  <div className="review-author">
                    <div className="review-avatar">L</div>
                    <div>
                      <div className="review-name">Ljuba</div>
                      <div className="review-date">Google recenzija</div>
                    </div>
                  </div>
                  <div className="review-source">Google</div>
                </div>
              </article>
            </div>

            <div className="gallery-grid gallery-grid-loc">
              <div className="gallery-item">
                <img src="/4.webp" data-full="/4.webp" alt="Mobilni vulkanizer na intervenciji noću u Beogradu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Noćna intervencija</span></div>
              </div>
              <div className="gallery-item">
                <img src="/7.webp" data-full="/7.webp" alt="Zamena pneumatika na parkingu ispred zgrade" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Rad na parkingu bloka</span></div>
              </div>
              <div className="gallery-item">
                <img src="/1.webp" data-full="/1.webp" alt="Vulkanizerski alat na terenu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), 360px" />
                <div className="gallery-item-overlay"><span>Alat iz servisnog vozila</span></div>
              </div>
            </div>

            <h2>Ako niste na Novom Beogradu</h2>
            <p>
              Radim na putničkim vozilima, džipovima i kombijima. Kamione i autobuse ne radim,
              za njih nemam opremu. Ako vam je auto stao izvan ove zone, pogledajte{' '}
              <Link href="/mobilni-vulkanizer-ceo-beograd">mobilni vulkanizer Beograd</Link>,{' '}
              <Link href="/mobilni-vulkanizer-zemun">mobilni vulkanizer Zemun</Link> i{' '}
              <Link href="/mobilni-vulkanizer-aerodrom">mobilni vulkanizer Surčin i aerodrom</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-faq" role="region" aria-labelledby="loc-faq-title">
        <div className="container">
          <div className="loc-content-inner">
            <h2 id="loc-faq-title">Česta pitanja sa Novog Beograda</h2>
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
            <h2>Novi Beograd, 15-30 min od poziva do dolaska</h2>
            <p>
              Jedan poziv je sve što vam treba. Brzo, profesionalno, u bilo
              koje doba dana ili noći.
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
