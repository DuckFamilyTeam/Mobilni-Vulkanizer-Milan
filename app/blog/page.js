import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Mobilni Vulkanizer Milan — Saveti i vodiči za gume',
  description:
    'Korisni saveti o gumama, krpljenju, zameni pneumatika i bezbednoj vožnji. Stručni vodiči od mobilnog vulkanizera sa 10+ godina iskustva u Beogradu.',
  keywords:
    'blog vulkanizer, saveti za gume, krpljenje gume vodič, probušena guma šta raditi, vulkanizer beograd saveti',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/blog',
  },
  openGraph: {
    title: 'Blog | Mobilni Vulkanizer Milan — Saveti i vodiči za gume',
    description:
      'Korisni saveti o gumama, krpljenju, zameni pneumatika i bezbednoj vožnji.',
    url: 'https://mobilnivulkanizermilan.com/blog',
    locale: 'sr_RS',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <section className="blog-listing-hero" role="region" aria-labelledby="blog-title">
        <div className="container">
          <div className="blog-listing-hero-inner">
            <div className="eyebrow">Blog · Saveti i vodiči</div>
            <h1 id="blog-title">
              Sve što treba da znate{' '}
              <span className="accent">o gumama</span>
            </h1>
            <p className="blog-listing-lead">
              Praktični saveti, korak-po-korak vodiči i stručna objašnjenja od
              vulkanizera sa 10+ godina iskustva na terenu Beograda.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-posts-section">
        <div className="container">
          <div className="blog-posts-grid">

            <Link
              href="/blog/krpljenje-probusene-gume"
              className="blog-card"
              aria-label="Pročitajte: Krpljenje probušene gume — kompletan vodič"
            >
              <div className="blog-card-inner">
                <div className="blog-card-eyebrow">
                  <span className="blog-card-category">Vodič</span>
                  <span className="blog-card-readtime">8 min čitanja</span>
                </div>
                <h2>
                  Krpljenje probušene gume: Kompletan vodič od „Zašto baš sad!"
                  do „Srećan put!"
                </h2>
                <p>
                  Probušena guma u najgorem mogućem trenutku? Naučite kako da
                  sami zakrpite gumu setom za reparaciju, kada je to bezbedno, a
                  kada je jedino rešenje zvati stručnjaka.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-card-date">Maj 2025</span>
                  <span className="blog-card-arrow">
                    Čitaj više
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
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

          </div>

          <div className="blog-listing-cta">
            <div className="blog-listing-cta-inner">
              <div className="eyebrow">Hitna intervencija</div>
              <h3>Guma pukla? Ne čekajte — pozovite odmah!</h3>
              <p>
                Dok čitate naše vodiče — ako imate hitnu situaciju, Milan stiže
                do vas za <strong>20–30 minuta</strong> bilo gde u Beogradu.
              </p>
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

      <Footer />
      <StickyCall />
    </>
  );
}
