import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import Link from 'next/link';

export const metadata = {
  title: 'Vulkanizerska radnja Borča | Zrenjaninski put 146b',
  description:
    'Vulkanizerska radnja u Borči, Zrenjaninski put 146b — zamena i balansiranje guma, hotel za gume i poliranje farova. Radimo 0-24h, zakažite svoj termin.',
  keywords:
    'vulkanizerska radnja borča, vulkanizer zrenjaninski put, hotel za gume borča, poliranje farova beograd, zamena guma borča radnja, vulkanizer sa radnjom beograd',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/vulkanizerska-radnja-borca',
  },
  openGraph: {
    title: 'Vulkanizerska radnja Borča | Zrenjaninski put 146b',
    description:
      'Zamena i balansiranje guma, hotel za gume i poliranje farova — u našoj radnji u Borči.',
    url: 'https://www.mobilnivulkanizermilan.com/vulkanizerska-radnja-borca',
    locale: 'sr_RS',
    type: 'website',
  },
};

function buildRadnjaJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AutoRepair',
        '@id': 'https://www.mobilnivulkanizermilan.com/vulkanizerska-radnja-borca#radnja',
        name: 'Vulkanizerska radnja Borča — Mobilni Vulkanizer Milan',
        parentOrganization: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
        url: 'https://www.mobilnivulkanizermilan.com/vulkanizerska-radnja-borca',
        telephone: '+381641290929',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Zrenjaninski put 146b',
          addressLocality: 'Borča, Beograd',
          addressRegion: 'Beograd',
          addressCountry: 'RS',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Usluge u radnji',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zamena i balansiranje guma' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotel za gume — sezonsko čuvanje' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Poliranje farova' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Krpljenje probušene gume' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kontrola i dopuna pritiska u gumama' } },
          ],
        },
      },
    ],
  };
}

export default function VulkanizerskaRadnjaBorcaPage() {
  const radnjaJsonLd = buildRadnjaJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(radnjaJsonLd) }}
      />
      <Header />
      <main id="main-content">

      {/* ===== HERO ===== */}
      <section className="loc-hero" role="region" aria-labelledby="loc-title">
        <div className="container">
          <div className="loc-hero-inner">
            <div className="eyebrow">
              <span className="live-pulse"></span>
              Vulkanizerska radnja · Borča
            </div>

            <h1 id="loc-title">
              Vulkanizerska radnja u Borči
              <br />
              <span className="accent">Zrenjaninski put 146b</span>
            </h1>

            <p className="loc-hero-lead">
              Pored mobilne ekipe koja i dalje dolazi na vašu adresu 24/7, od septembra 2026.
              radimo i u sopstvenoj radnji u Borči — takođe 0 do 24 časa, svaki dan. Svratite na
              zamenu i balansiranje guma, ostavite rezervni set na čuvanje u hotelu za gume, ili
              sredite farove poliranjem — sve na jednom mestu. Zakazivanje termina je moguće,
              pozovite nas kad god vam odgovara.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovite radnju u Borči"
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
              <a href="https://wa.me/381641290929" className="btn-secondary">
                💬 WhatsApp
              </a>
            </div>

            <span className="loc-hero-quick">
              📍 <strong>Zrenjaninski put 146b, Borča</strong> · 🕒 Radimo 0–24h, svaki dan
            </span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">0–24h</div>
                <div className="loc-stat-label">radno vreme radnje</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">5</div>
                <div className="loc-stat-label">usluge u radnji</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">24/7</div>
                <div className="loc-stat-label">mobilna usluga i dalje</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">10+</div>
                <div className="loc-stat-label">godina iskustva</div>
              </div>
            </div>

            <h2>Šta radimo u radnji</h2>
            <p>
              Radnja u Borči je dopuna mobilnoj usluzi, ne zamena — mobilni tim i dalje dolazi na
              vašu adresu 24 časa dnevno, kao i do sada. U radnji na Zrenjaninskom putu 146b
              nudimo pet usluga koje najbolje rade na jednom mestu, uz opremu koju ne nosimo u
              kombiju.
            </p>

            <div className="services-grid">
              <article className="service-card reveal">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" /></svg>
                </div>
                <h3>Zamena i balansiranje guma</h3>
                <p>Sezonska zamena i balansiranje na profesionalnoj opremi, direktno u radnji. Cena po dogovoru.</p>
              </article>

              <article className="service-card reveal">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="5" /><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" /><path d="M10 16h4" /></svg>
                </div>
                <h3>Hotel za gume</h3>
                <p>Čuvamo vaš rezervni set guma preko cele sezone, zaštićeno od sunca, vlage i prljavštine. Cena po dogovoru.</p>
              </article>

              <article className="service-card reveal">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /></svg>
                </div>
                <h3>Poliranje farova</h3>
                <p>Vraćamo providnost pomućenim farovima — bolja vidljivost noću i uredniji izgled vozila. Cena po dogovoru.</p>
              </article>

              <article className="service-card reveal">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>
                </div>
                <h3>Krpljenje probušene gume</h3>
                <p>Krpljenje probušene gume, isto kao i na terenu — sada i u radnji. Garancija 30 dana.</p>
              </article>

              <article className="service-card reveal">
                <div className="service-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0v6m0-6h6m-6 0H6"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <h3>Kontrola i dopuna pritiska</h3>
                <p>Provera i punjenje sve četiri gume na ispravan pritisak, brzo i precizno. Cena po dogovoru.</p>
              </article>
            </div>

            <div className="loc-cta-band">
              <h3>Zakažite termin ili samo svratite</h3>
              <p>
                Radnja radi 0 do 24 časa, svaki dan u nedelji. Pozovite nas da zakažemo termin
                unapred, ili svratite kad god vama odgovara.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi i zakaži: +381 64 12 90 929
              </a>
            </div>

            <h2>Gde smo</h2>
            <p>
              Radnja se nalazi na adresi <strong>Zrenjaninski put 146b, Borča</strong> —
              lako dostupno vozačima iz Zemuna, Novog Beograda, Krnjače, Mirijeva i okolnih
              mesta. Ako je hitno i ne stignete do radnje, mobilna ekipa i dalje dolazi na vašu
              adresu — pogledajte{' '}
              <Link href="/mobilni-vulkanizer-borca">mobilnog vulkanizera u Borči</Link>.
            </p>

            <div className="coverage-map">
              <iframe
                src="https://www.google.com/maps?q=Zrenjaninski+put+146b+Beograd&z=15&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vulkanizerska radnja Borča - Zrenjaninski put 146b"
              ></iframe>
            </div>

            <p style={{ marginTop: '20px' }}>
              Pročitajte i naš vodič o{' '}
              <Link href="/blog/hotel-za-gume-beograd">hotelu za gume</Link> — kako izgleda
              čuvanje guma preko sezone i kome je namenjeno.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Radnja i mobilna usluga</div>
            <h2>Zakažite termin ili nas pozovite na adresu</h2>
            <p>
              Radnja u Borči radi 0 do 24 časa, svaki dan u nedelji — kao i mobilna ekipa. Zakažite
              termin unapred ili nas pozovite kad god vam odgovara.
            </p>
            <div className="loc-final-cta-num">
              <a href="tel:+381641290929">+381 64 12 90 929</a>
            </div>
            <div className="loc-final-cta-actions">
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah
              </a>
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
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
