import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCall from '../../components/StickyCall';
import Link from 'next/link';

export const metadata = {
  title: 'Hotel za gume Beograd — čuvanje guma preko sezone | Milan',
  description:
    'Hotel za gume u Beogradu — čuvamo vaš rezervni set guma preko sezone u radnji u Borči, Zrenjaninski put 146b. Mobilni vulkanizer Milan, dolazimo i na adresu.',
  keywords:
    'hotel za gume beograd, čuvanje guma beograd, hotel za gume borča, skladištenje guma beograd, gde ostaviti gume beograd',
  alternates: {
    canonical:
      'https://www.mobilnivulkanizermilan.com/blog/hotel-za-gume-beograd',
  },
  openGraph: {
    title: 'Hotel za gume u Beogradu: gde smestiti gume kad kod kuće nema mesta',
    description:
      'Rešenje za sve koji nemaju prostor da čuvaju rezervni set guma — hotel za gume u Borči.',
    url: 'https://www.mobilnivulkanizermilan.com/blog/hotel-za-gume-beograd',
    locale: 'sr_RS',
    type: 'article',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': 'https://www.mobilnivulkanizermilan.com/blog/hotel-za-gume-beograd',
  headline:
    'Hotel za gume u Beogradu: gde smestiti gume kad kod kuće nema mesta',
  description:
    'Hotel za gume u Beogradu — čuvamo vaš rezervni set guma preko sezone u radnji u Borči, Zrenjaninski put 146b. Mobilni vulkanizer Milan, dolazimo i na adresu.',
  url: 'https://www.mobilnivulkanizermilan.com/blog/hotel-za-gume-beograd',
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  author: {
    '@type': 'Person',
    name: 'Milan',
    url: 'https://www.mobilnivulkanizermilan.com',
  },
  publisher: {
    '@id': 'https://www.mobilnivulkanizermilan.com/#business',
  },
  inLanguage: 'sr-RS',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.mobilnivulkanizermilan.com/blog/hotel-za-gume-beograd',
  },
};

export default function HotelZaGumeBeogradPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main id="main-content">

      {/* ===== HERO ===== */}
      <section className="blog-post-hero" role="region" aria-labelledby="post-title">
        <div className="container">
          <div className="blog-post-hero-inner">
            <Link href="/blog" className="blog-post-back">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Nazad na Blog
            </Link>

            <div className="blog-post-meta">
              <span className="blog-card-category">Usluge</span>
              <span className="blog-post-meta-sep">·</span>
              <span>Septembar 2026</span>
              <span className="blog-post-meta-sep">·</span>
              <span>3 min čitanja</span>
            </div>

            <h1 id="post-title">
              Hotel za gume u Beogradu:{' '}
              <span className="accent">gde smestiti gume</span>
              <br />
              kad kod kuće nema mesta
            </h1>

            <div className="blog-post-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovite mobilnog vulkanizera Milana"
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
                POZOVITE NAS: +381 64 12 90 929
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE CONTENT ===== */}
      <article className="blog-article">
        <div className="container">
          <div className="blog-article-inner">

            <p className="blog-article-intro">
              Svako ko vozi zna taj problem. Sezona se menja, gume treba zameniti, a onda ostane
              pitanje šta sa onim starim setom. Ostava je puna, podrum ne postoji, balkon nije
              rešenje. Upravo za to postoji hotel za gume.
            </p>

            <h2>Šta je hotel za gume i kome je namenjen</h2>
            <p>
              Hotel za gume je jednostavno rešenje za sve koji nemaju prostor da sami čuvaju
              rezervni set guma. Umesto da gume stoje u hodniku ili na terasi izložene suncu i
              vlazi, odnesete ih na čuvanje, a mi se pobrinemo za ostalo.
            </p>
            <p>
              Ovo je posebno korisno za stanare zgrada bez podruma ili garaže, ali i za sve koji
              jednostavno žele da oslobode prostor kod kuće. Kad dođe vreme za zamenu, gume su
              spremne i čekaju vas.
            </p>

            <h2>Hotel za gume Borča, dostupan celom Beogradu</h2>
            <p>
              Naša radnja se nalazi na adresi{' '}
              <Link href="/vulkanizerska-radnja-borca">Zrenjaninski put 146b u Borči</Link>, ali
              hotel za gume u Beogradu koristi mnogo više ljudi nego samo meštani ovog dela
              grada. Do nas dolaze vozači iz Zemuna, Novog Beograda, Krnjače, Mirijeva i svih
              okolnih mesta, jer je lokacija lako dostupna, a proces jednostavan.
            </p>
            <p>
              Bilo da tražite hotel za gume Beograd centar, ili vam je bliža opcija na periferiji,
              Borča je odlična tačka, pogotovo ako već prolazite tim delom grada ili radite u
              okolini.
            </p>

            <h2>Zašto baš mi</h2>
            <p>
              Mi smo mobilni vulkanizeri, što znači da već dugo izlazimo na teren i rešavamo
              probleme sa gumama tamo gde se vozač zatekne. Ono što mnogi ne znaju jeste da pored
              terenske usluge imamo i pravu radnju, u kojoj se gume mogu zameniti, izbalansirati
              i, naravno, ostaviti na čuvanje.
            </p>
            <p>
              To znači da kod nas ne birate između mobilne usluge i radnje, dobijate oboje.
              Možete nas pozvati da dođemo do vas, ili svratiti lično u Borču kad vam više
              odgovara.
            </p>

            <h2>Kako izgleda čuvanje guma kod nas</h2>
            <p>
              Gume se čuvaju u uslovima prilagođenim tome da izdrže sezonu bez oštećenja,
              zaštićene od sunca, vlage i prljavštine. Kad dođe vreme za promenu, dovoljno je da
              nas kontaktirate i dogovorimo termin, bilo da želite da svratite do radnje ili da
              ekipa izađe na teren.
            </p>

            <h2>Rezervišite mesto za svoje gume</h2>
            <p>
              Ako tražite pouzdan hotel za gume u Beogradu, ili vam je jednostavno dosta toga da
              gume stoje na putu u stanu, javite nam se. Radnja u Borči je tu za vas, a ako vam
              više odgovara mobilna usluga, dolazimo i na vašu adresu.
            </p>
            <p>Oslobodite prostor kod kuće, gume ostavite nama.</p>
          </div>
        </div>
      </article>

      {/* ===== CTA SEKCIJA ===== */}
      <section className="blog-article-cta" role="region" aria-label="Poziv na akciju">
        <div className="container">
          <div className="blog-article-cta-inner">
            <div className="eyebrow">Mobilni Vulkanizer · Beograd</div>
            <h2>
              Rezervišite mesto za svoje gume
              <br />
              <span className="accent">ili pozovite Milana na teren!</span>
            </h2>
            <p>
              Radnja u Borči, Zrenjaninski put 146b, radi 0–24h, svaki dan u nedelji — kao i
              mobilna usluga koja i dalje dolazi na vašu adresu. Zakazivanje termina je moguće,
              pozovite nas kad god vam odgovara.
            </p>

            <div className="blog-article-cta-num">
              <a href="tel:+381641290929">+381 64 12 90 929</a>
            </div>

            <a
              href="tel:+381641290929"
              className="btn-primary blog-article-cta-btn"
              aria-label="Pozovite mobilnog vulkanizera Milana"
            >
              <svg
                width="22"
                height="22"
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
              POZOVITE NAS
            </a>

            <div className="blog-article-cta-actions">
              <a href="https://wa.me/381641290929" className="btn-secondary">
                💬 WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B381641290929"
                className="btn-secondary"
              >
                💬 Viber
              </a>
            </div>

            <span className="blog-article-cta-hint">
              📍 Zrenjaninski put 146b, Borča · 🕒 Radimo 0–24h, svaki dan
            </span>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
