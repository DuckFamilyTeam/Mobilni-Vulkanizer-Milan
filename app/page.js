import Link from 'next/link';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyCall from './components/StickyCall';
import SectionDivider from './components/SectionDivider';
import GbpRating from './components/GbpRating';
import { getGbpRating } from './lib/googlePlaces';

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mobilna vulkanizerska usluga',
    provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
  areaServed: { '@type': 'City', name: 'Beograd' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Vulkanizerske usluge',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Krpljenje probušene gume na licu mesta' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zamena letnjih i zimskih pneumatika' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balansiranje točkova' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ispravka felni' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hitna vučna služba' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kontrola i dopuna pritiska u gumama' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotel za gume — sezonsko čuvanje' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Poliranje farova' } },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Da li dolazite noću i vikendom?', acceptedAnswer: { '@type': 'Answer', text: 'Da, radimo non-stop, 365 dana u godini — uključujući noć, vikende i praznike. Dodaje se samo noćna taksa za intervencije između 22h i 06h.' } },
    { '@type': 'Question', name: 'Koliko košta dolazak mobilnog vulkanizera?', acceptedAnswer: { '@type': 'Answer', text: 'Konačna cena zavisi od vaše lokacije, vremena intervencije, karakteristika vozila i tipa posla. Pozovite nas i daćemo vam fiksnu procenu pre polaska.' } },
    { '@type': 'Question', name: 'Koliko brzo stižete na lokaciju?', acceptedAnswer: { '@type': 'Answer', text: 'Prosečno vreme dolaska je 15-30 minuta od poziva. Vreme zavisi od trenutne lokacije i saobraćaja, ali uvek dajemo realnu procenu pre dolaska.' } },
    { '@type': 'Question', name: 'Za koje tipove vozila pružate usluge?', acceptedAnswer: { '@type': 'Answer', text: 'Servisiramo putnička osobna vozila i SUV-ove svih marki i modela. Za kombije i veća vozila pozovite nas radi konsultacije.' } },
    { '@type': 'Question', name: 'Šta ako guma nije popravljiva?', acceptedAnswer: { '@type': 'Answer', text: 'Ukoliko guma nije popravljiva, možemo ugraditi vašu rezervnu gumu ili po dogovoru obezbediti i ugraditi novu gumu na licu mesta.' } },
    { '@type': 'Question', name: 'Pokrivate li prigradska mesta?', acceptedAnswer: { '@type': 'Answer', text: 'Primarno pokrivamo ceo Beograd uključujući prigradska naselja (Borča, Surčin, Mirijevo, Resnik, Kaluđerica). Za dalje lokacije pozovite — dogovaramo se.' } },
    { '@type': 'Question', name: 'Mogu li platiti karticom?', acceptedAnswer: { '@type': 'Answer', text: 'Da — prihvatamo gotovinu, sve platne kartice (Dina, Visa, MasterCard, Maestro, American Express) i plaćanje IPS QR kodom. Za firme je dostupno i fakturisanje sa odloženim plaćanjem.' } },
    { '@type': 'Question', name: 'Kakvu garanciju pružate na rad?', acceptedAnswer: { '@type': 'Answer', text: 'Na svako krpljenje gume dajemo garanciju od 30 dana. Korišćenu opremu i materijale takođe garantujemo prema deklaracijama proizvođača.' } },
    { '@type': 'Question', name: 'Šta ako pada kiša ili sneg?', acceptedAnswer: { '@type': 'Answer', text: 'Radimo po svim vremenskim uslovima. Naša vozila su opremljena tako da možemo bezbedno raditi i u kiši, snegu ili magli.' } },
    { '@type': 'Question', name: 'Koliko traje krpljenje probušene gume?', acceptedAnswer: { '@type': 'Answer', text: 'Standardno krpljenje gume traje 15-25 minuta od početka rada. Zamena pneumatika 20-40 minuta, zavisno od broja guma.' } },
    { '@type': 'Question', name: 'Da li mogu rezervisati termin unapred?', acceptedAnswer: { '@type': 'Answer', text: 'Da, ako vam odgovara unapred dogovoren termin (npr. zamena letnjih i zimskih guma), pozovite ili pišite na Viber/WhatsApp. Hitne intervencije imaju prioritet.' } },
    { '@type': 'Question', name: 'Šta sve nosite sa sobom?', acceptedAnswer: { '@type': 'Answer', text: 'Kompletan profesionalan set: kompresor, dizalica, vulkanizerski alat, materijal za krpljenje, balanser, opremu za demontažu i montažu. Sve što imamo u radnji.' } },
  ],
};

export default async function HomePage() {
  const { rating, reviewCount } = await getGbpRating();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="main-content">

        {/* ============ HERO ============ */}
        <section className="hero" role="region" aria-labelledby="hero-title">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="hero-availability">
                            <span className="live-pulse"></span>
                            Trenutno dostupan · Dolazim za 15-30 min
                        </div>
        
                        <h1 id="hero-title">
                            Mobilni vulkanizer<br />
                            <span className="accent">u Beogradu</span><br />
                            24h non-stop
                        </h1>
        
                        <p className="hero-lead">
                            Probušena guma? Zamena pneumatika? Dolazim na bilo koju lokaciju u Beogradu — brzo, profesionalno, u bilo koje doba dana ili noći. Jedan poziv je sve što vam treba.
                        </p>
        
                        <div className="hero-cta">
                            <a href="tel:+381641290929" className="btn-primary flame-cta" aria-label="Pozovite +381 64 12 90 929">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                Pozovi: +381 64 12 90 929
                            </a>
                            <a href="https://wa.me/381641290929" className="btn-secondary" aria-label="Kontaktirajte preko WhatsApp-a">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                WhatsApp
                            </a>
                            <a href="viber://chat?number=%2B381641290929" className="btn-secondary" aria-label="Kontaktirajte preko Viber-a">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.124 20.36h.005l-.004 2.42s-.037.98.61 1.18c.78.244 1.24-.5 1.987-1.3.41-.45.97-1.1 1.4-1.6 3.85.32 6.81-.42 7.15-.53.78-.25 5.2-.82 5.92-6.68.74-6.04-.36-9.86-2.34-11.58l-.013-.005c-.6-.55-3-2.3-8.36-2.32 0 0-.633-.04-1.075-.04zm.122 1.7c.376.001.92.04.92.04 4.535.018 6.706 1.385 7.214 1.85 1.673 1.434 2.528 4.876 1.903 9.917-.602 4.896-4.184 5.205-4.84 5.412-.28.087-2.882.732-6.158.515 0 0-2.443 2.95-3.205 3.715-.119.123-.26.17-.354.149-.132-.033-.17-.193-.168-.426l.022-4.022c-4.764-1.32-4.486-6.295-4.434-8.898.054-2.602.55-4.736 1.999-6.168 1.957-1.78 5.475-2.044 7.1-2.085 0 0 0 .001 0 0zm.529 2.748a.328.328 0 0 0-.327.343c0 .183.146.337.328.341 2.38.05 4.336 1.65 4.357 4.622a.328.328 0 0 0 .327.328h.005a.328.328 0 0 0 .323-.333c-.024-3.302-2.232-5.255-4.999-5.302a.32.32 0 0 0-.014 0zm-3.879.997c-.207-.025-.414.018-.587.135h-.014c-.402.236-.764.534-1.07.886-.255.302-.394.609-.43.905-.022.176.013.352.103.51.22.45.488.875.799 1.265a14.31 14.31 0 0 0 1.71 1.953c.668.659 1.41 1.245 2.213 1.747h.01l.01.005.014.009c.025.013.05.027.075.038.798.426 1.658.737 2.55.926.916.21 1.85.339 2.79.385h.107c.298-.013.581-.144.785-.366.358-.397.63-.866.799-1.376a.832.832 0 0 0-.014-.547c-.117-.235-.267-.45-.444-.638-.382-.402-.835-.728-1.336-.96a.825.825 0 0 0-.776-.005c-.252.158-.48.347-.681.564l-.014.018c-.085.103-.21.158-.342.149a8.93 8.93 0 0 1-2.04-.736 6.143 6.143 0 0 1-1.77-1.255c-.245-.234-.47-.49-.671-.764a.378.378 0 0 1 .009-.45l.014-.014c.215-.205.404-.435.563-.685a.825.825 0 0 0-.005-.78c-.234-.5-.56-.952-.96-1.336a2.484 2.484 0 0 0-.638-.444 1.018 1.018 0 0 0-.275-.067zm4.099.61a.327.327 0 0 0-.336.319.327.327 0 0 0 .314.336c.835.04 1.622.382 2.218.965.595.582.926 1.36.96 2.196a.328.328 0 0 0 .328.314h.018a.328.328 0 0 0 .314-.336 4.06 4.06 0 0 0-1.155-2.642 4.083 4.083 0 0 0-2.66-1.151zm.617 1.252a.327.327 0 0 0-.354.299.327.327 0 0 0 .299.355c1.013.062 1.539.612 1.616 1.66a.328.328 0 0 0 .327.305h.024a.328.328 0 0 0 .305-.351 2.408 2.408 0 0 0-.717-1.586 2.49 2.49 0 0 0-1.5-.682z"/></svg>
                                Viber
                            </a>
                        </div>
        
                        <div className="hero-stats">
                            <div>
                                <div className="stat-num">15min</div>
                                <div className="stat-label">Prosečno do dolaska</div>
                            </div>
                            <div>
                                <div className="stat-num">24h</div>
                                <div className="stat-label">Non-stop dostupan</div>
                            </div>
                            <div>
                                <div className="stat-num">500+</div>
                                <div className="stat-label">Zadovoljnih klijenata</div>
                            </div>
                            <div>
                                <GbpRating variant="stat" rating={rating} reviewCount={reviewCount} />
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <Image
                            src="/montaza-gume-land-rover.webp"
                            alt="Mobilni vulkanizer Milan montira gumu na Land Rover na parkingu u Beogradu"
                            width="600"
                            height="660"
                            sizes="(max-width: 768px) 100vw, 540px"
                            quality={75}
                            priority
                        />
                        <div className="hero-badge">
                            <div className="hero-badge-num">A+</div>
                            <div className="hero-badge-txt">Premium servis</div>
                        </div>
                        <div className="hero-quick-contact">
                            <div className="hero-quick-contact-label">Hitan poziv</div>
                            <div className="hero-quick-contact-num">+381 64 12 90 929</div>
                            <div className="hero-quick-contact-actions">
                                <a href="tel:+381641290929" className="quick-action">📞 Pozovi</a>
                                <a href="https://wa.me/381641290929" className="quick-action">💬 Poruka</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ============ EMERGENCY BAR ============ */}
        <div className="emergency-bar" role="region" aria-label="Hitna intervencija">
            <div className="container">
                <div className="emergency-bar-inner">
                    <span className="emergency-bar-text">⚡ Probušena guma sada? Stigao sam za 15-30 minuta na vašu adresu</span>
                    <a href="tel:+381641290929" className="emergency-bar-cta">📞 Hitno - Pozovi</a>
                </div>
            </div>
        </div>
        
        {/* ============ SERVICES ============ */}
        <section className="services" id="usluge" role="region" aria-labelledby="services-title">
            <div className="container">
                <div className="section-header">
                    <div className="eyebrow">Naše usluge</div>
                    <h2 id="services-title">Sve što vam treba — na licu mesta</h2>
                    <p>Mobilna ekipa opremljena profesionalnim alatima i materijalima. Bez vučne službe, bez čekanja u redu.</p>
                </div>
        
                <div className="services-grid">
                    <article className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>
                        </div>
                        <h3>Krpljenje probušene gume</h3>
                        <p>Brzo i pouzdano krpljenje na licu mesta — bez potrebe za vučnom službom ili odlaskom do vulkanizera. Garancija 30 dana.</p>
                    </article>
        
                    <article className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>
                        </div>
                        <h3>Zamena pneumatika</h3>
                        <p>Menjam letnje i zimske gume direktno kod vas — kod kuće, na poslu, ili bilo gde na putu. Sezonska promena za sve modele.</p>
                    </article>
        
                    <article className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M2 12h20"/></svg>
                        </div>
                        <h3>Balansiranje točkova</h3>
                        <p>Profesionalno balansiranje za bezbedniju vožnju i ravnomerniju potrošnju guma. Donosim balansirku na vašu adresu.</p>
                    </article>
        
                    <article className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                        </div>
                        <h3>Ispravka felni</h3>
                        <p>Ispravka oštećenih i deformisanih felni za duži vek trajanja, stabilniji pritisak i bolju estetiku vašeg vozila.</p>
                    </article>
        
                    <article className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                        </div>
                        <h3>Hitna vučna služba</h3>
                        <p>U slučaju da vozilo nije u voznom stanju, organizujem hitan prevoz do najbližeg ovlašćenog servisa po dogovoru.</p>
                    </article>
        
                    <article className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6m0 0v6m0-6h6m-6 0H6"/><circle cx="12" cy="12" r="10"/></svg>
                        </div>
                        <h3>Kontrola i dopuna pritiska</h3>
                        <p>Proveravam i punim sve četiri gume na ispravan pritisak — brzo i precizno uz svaku uslugu. Punjenje azotom po želji.</p>
                    </article>

                    <Link href="/vulkanizerska-radnja-borca" className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="5"/><path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M10 16h4"/></svg>
                        </div>
                        <h3>Hotel za gume</h3>
                        <p>Čuvamo vaš rezervni set guma preko cele sezone u radnji u Borči, zaštićeno od sunca i vlage. Cena po dogovoru.</p>
                    </Link>

                    <Link href="/vulkanizerska-radnja-borca" className="service-card reveal">
                        <div className="service-icon">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>
                        </div>
                        <h3>Poliranje farova</h3>
                        <p>Vraćamo providnost pomućenim farovima u radnji u Borči — bolja vidljivost noću. Cena po dogovoru.</p>
                    </Link>
                </div>
            </div>
        </section>
        
        {/* ============ WHY US ============ */}
        <section className="why" role="region" aria-labelledby="why-title">
            <div className="container">
                <div className="why-grid">
                    <div>
                        <div className="eyebrow">Zašto baš mi</div>
                        <h2 id="why-title">Pouzdanost koja dolazi k vama</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: '1.7', marginTop: '20px' }}>
                            Nisam običan vulkanizer. Mobilna ekipa koja shvata da svaki minut čekanja pored puta znači stres i izgubljeno vreme. Zato dolazim brzo, radim profesionalno i naplaćujem pošteno.
                        </p>
                    </div>
        
                    <div className="why-features">
                        <div className="why-feature">
                            <div className="why-feature-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </div>
                            <div>
                                <h3>Dolazak za 15–30 minuta</h3>
                                <p>Uvek sam u pokretu po Beogradu — nema dugog čekanja, reagujem odmah.</p>
                            </div>
                        </div>

                        <div className="why-feature">
                            <div className="why-feature-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            </div>
                            <div>
                                <h3>5-zvezdična usluga</h3>
                                <p>Stotine zadovoljnih klijenata i odlične recenzije govore umesto nas.</p>
                            </div>
                        </div>

                        <div className="why-feature">
                            <div className="why-feature-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            </div>
                            <div>
                                <h3>Transparentne cene</h3>
                                <p>Cenu znate pre nego što počnem — bez skrivenih troškova ili iznenađenja.</p>
                            </div>
                        </div>

                        <div className="why-feature">
                            <div className="why-feature-icon">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div>
                                <h3>Garantovana kvalitetna usluga</h3>
                                <p>Profesionalan alat i kvalitetni materijali sa garancijom na rad od 30 dana.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ============ PRICING / TRANSPARENT (kratko) ============ */}
        <section className="pricing" id="cene" role="region" aria-labelledby="pricing-title">
            <div className="container">
                <div className="pricing-cta-block">
                    <div className="pricing-cta-inner">
                        <div className="pricing-cta-eyebrow">⚡ 30 sekundi je dovoljno</div>
                        <h2 id="pricing-title" className="pricing-cta-title">Pošteno o ceni — bez iznenađenja</h2>
                        <p className="pricing-cta-desc">Cena zavisi od lokacije, vremena i tipa posla — zato je ne šablonizujem. Pozovite, opišite problem, i <strong>dobijate fiksnu procenu pre nego što krenem</strong>.</p>

                        <ul className="pricing-cta-list">
                            <li>Bez skrivenih troškova</li>
                            <li>Bez iznenađenja na licu mesta</li>
                            <li>Plaćate samo realan rad i izlazak na teren</li>
                        </ul>

                        <a href="tel:+381641290929" className="btn-primary pricing-cta-btn flame-cta">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            POZOVI ODMAH ZA CENU
                        </a>
                        <span className="pricing-cta-hint">Klikom na dugme direktno birate broj</span>
                    </div>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* ============ PROCESS ============ */}
        <section className="process" role="region" aria-labelledby="process-title">
            <div className="container">
                <div className="section-header">
                    <div className="eyebrow">Kako funkcioniše</div>
                    <h2 id="process-title">Jednostavno kao 1—2—3—4</h2>
                    <p>Od prvog poziva do rešenog problema, ceo proces traje obično ispod sat vremena.</p>
                </div>
        
                <div className="process-grid">
                    <div className="process-step reveal">
                        <span className="process-num">01</span>
                        <h3>Pozovite nas</h3>
                        <p>Nazovite Milana na +381 64 12 90 929 i opišite problem i lokaciju.</p>
                    </div>
                    <div className="process-step reveal">
                        <span className="process-num">02</span>
                        <h3>Potvrda dolaska</h3>
                        <p>Odmah potvrđujem i dajem procenu vremena dolaska — obično 15-30 min.</p>
                    </div>
                    <div className="process-step reveal">
                        <span className="process-num">03</span>
                        <h3>Dolazim k vama</h3>
                        <p>Mobilni tim stiže opremljen svim potrebnim alatima i materijalom.</p>
                    </div>
                    <div className="process-step reveal">
                        <span className="process-num">04</span>
                        <h3>Rešeno!</h3>
                        <p>Guma je popravljena ili zamenjena — nastavljate put bezbrižno.</p>
                    </div>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* ============ VIDEO SHOWCASE (stvarna intervencija na terenu) ============ */}
        <section className="video-showcase" role="region" aria-labelledby="video-showcase-title">
            <div className="container">
                <div className="section-header reveal">
                    <div className="eyebrow">Pogledajte uživo</div>
                    <h2 id="video-showcase-title">Kako izgleda intervencija na terenu</h2>
                    <p>Kratak snimak sa jedne od intervencija — kontrola pritiska i pumpanje gume, na licu mesta.</p>
                </div>
                <div className="video-frame reveal">
                    <video
                        className="lazy-video"
                        data-src="/pumpanje-gume.mp4"
                        poster="/pumpanje-gume-poster.webp"
                        muted
                        loop
                        playsInline
                        preload="none"
                        aria-label="Pumpanje i kontrola pritiska gume na terenu"
                    />
                </div>
            </div>
        </section>

        {/* ============ COVERAGE (kratko, mapa + link na lokacije) ============ */}
        <section className="coverage" id="pokrivanje" role="region" aria-labelledby="coverage-title">
            <div className="container">
                <div className="coverage-grid">
                    <div>
                        <div className="eyebrow">Mapa pokrivanja</div>
                        <h2 id="coverage-title">Pokrivam ceo Beograd i okolinu</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginTop: '16px' }}>
                            Bez obzira da li ste u centru, na Novom Beogradu, kao <Link href="/mobilni-vulkanizer-zemun">mobilni vulkanizer u Zemunu</Link>, ili kao <Link href="/mobilni-vulkanizer-borca">mobilni vulkanizer u Borči</Link> u prigradskim naseljima, dolazim na bilo koju adresu unutar šire teritorije Beograda. Brz odziv, profesionalna usluga.
                        </p>
                        <a href="#lokacije" className="btn-secondary" style={{ marginTop: '20px', display: 'inline-flex' }}>Pogledaj sve lokacije</a>
                    </div>

                    <div className="coverage-map">
                        <iframe src="https://www.google.com/maps?q=44.8092631,20.4348278&z=13&output=embed" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokacija - Mobilni Vulkanizer Milan, Beograd"></iframe>
                        <button type="button" className="coverage-map-overlay" aria-label="Dodirnite da aktivirate mapu za zumiranje i pomeranje">
                            <span>Dodirnite za interakciju sa mapom</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* ============ LOCATIONS ============ */}
        <section className="locations-section" id="lokacije" role="region" aria-labelledby="locations-title">
            <div className="container">
                <div className="section-header">
                    <div className="eyebrow">Stranice po lokacijama</div>
                    <h2 id="locations-title">Pronađite svoju lokaciju</h2>
                    <p>Detaljnije informacije o usluzi mobilnog vulkanizera za vaš deo Beograda — kliknite na svoju lokaciju.</p>
                </div>

                <div className="locations-grid">
                    <Link href="/mobilni-vulkanizer-ceo-beograd" className="location-card reveal">
                        <span className="location-card-pin">🏙️</span>
                        <h3>Ceo Beograd</h3>
                        <p>Pokrivam svih 17 opština grada — od centra do najudaljenijih naselja.</p>
                        <span className="location-card-time">⏱️ <strong>15-60 min</strong> · sve opštine</span>
                        <div>
                            <span className="location-card-arrow">
                                Pogledaj detalje
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </div>
                    </Link>

                    <Link href="/mobilni-vulkanizer-novi-beograd" className="location-card reveal">
                        <span className="location-card-pin">📍</span>
                        <h3>Novi Beograd</h3>
                        <p>Sve blokove, bulevare, poslovne zone i tržne centre — Ušće, Arena, Belville, Airport City.</p>
                        <span className="location-card-time">⏱️ <strong>15-30 min</strong></span>
                        <div>
                            <span className="location-card-arrow">
                                Pogledaj detalje
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </div>
                    </Link>

                    <Link href="/mobilni-vulkanizer-zemun" className="location-card reveal">
                        <span className="location-card-pin">📍</span>
                        <h3>Zemun</h3>
                        <p>Stari Zemun, Gardoš, Tošin bunar, Bežanijska kosa, Altina — sve adrese pokrivene.</p>
                        <span className="location-card-time">⏱️ <strong>15-30 min</strong></span>
                        <div>
                            <span className="location-card-arrow">
                                Pogledaj detalje
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </div>
                    </Link>

                    <Link href="/mobilni-vulkanizer-borca" className="location-card reveal">
                        <span className="location-card-pin">📍</span>
                        <h3>Borča</h3>
                        <p>Borča Centar, Greda, Sebeš, Borča III — od Pupinovog mosta do izlaza ka Pančevu.</p>
                        <span className="location-card-time">⏱️ <strong>15-30 min</strong></span>
                        <div>
                            <span className="location-card-arrow">
                                Pogledaj detalje
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </div>
                    </Link>

                    <Link href="/mobilni-vulkanizer-krnjaca" className="location-card reveal">
                        <span className="location-card-pin">📍</span>
                        <h3>Krnjača</h3>
                        <p>Krnjača Centar, Reva, Kotež, Padinska skela — i industrijska zona.</p>
                        <span className="location-card-time">⏱️ <strong>15-30 min</strong></span>
                        <div>
                            <span className="location-card-arrow">
                                Pogledaj detalje
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </div>
                    </Link>

                    <Link href="/mobilni-vulkanizer-autoput-beograd" className="location-card reveal">
                        <span className="location-card-pin">🛣️</span>
                        <h3>Autoput Beograd</h3>
                        <p>E-75, E-70, obilaznica, sve petlje — hitna intervencija na traci za zaustavljanje.</p>
                        <span className="location-card-time">⏱️ <strong>Hitna intervencija 24/7</strong></span>
                        <div>
                            <span className="location-card-arrow">
                                Pogledaj detalje
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
        
        {/* ============ GALLERY (kratko, link ka punoj galeriji) ============ */}
        <section className="gallery-section" id="galerija" role="region" aria-labelledby="gallery-title">
            <div className="container">
                <div className="section-header">
                    <div className="eyebrow">Galerija radova</div>
                    <h2 id="gallery-title">Stvarne intervencije, stvarni klijenti</h2>
                    <p>Dokumentacija sa terena — od probušenih guma na autoputu do zamene zimskih guma ispred kuće.</p>
                </div>

                <div className="gallery-grid">
                    <div className="gallery-item">
                        <img src="/8.webp" data-full="/8.webp" alt="Mobilni vulkanizer Milan na intervenciji u centru Beograda - kombi pored Skupštine" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Centar Beograda — intervencija na licu mesta</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="/2.webp" data-full="/2.webp" alt="Zamena pneumatika na parkingu - mobilni vulkanizer Novi Beograd" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Zamena gume — Novi Beograd</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="/4.webp" data-full="/4.webp" alt="Mobilni vulkanizer servis BMW X6 noću u Beogradu - 24h dostupan" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Servis luksuznih vozila</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="/autoput.webp" data-full="/autoput.webp" alt="Mobilni vulkanizer Milan - beli kombi sa natpisom Vaš prijatelj na putu parkiran u centru Beograda" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Vaš prijatelj na putu — uvek tu</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="/brza-zamena-guma.webp" data-full="/brza-zamena-guma.webp" alt="Beli Peugeot kombi mobilnog vulkanizera Milan parkiran pored smeđeg Mini Cooper Countrymana — zamena točka na terenu na ulici u Beogradu" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Brza zamena gume — na terenu</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="/nase-masine-su-potpuno-nove.webp" data-full="/nase-masine-su-potpuno-nove.webp" alt="Unutrašnjost servisnog kombija mobilnog vulkanizera — plava mašina za menjanje guma, balanser točkova RRXTT, agregat i alat — potpuno nova profesionalna oprema" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Profesionalna nova oprema u kombiju</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="/tu-smo-za-sve-i-na-svim-lokacijama.webp" data-full="/tu-smo-za-sve-i-na-svim-lokacijama.webp" alt="Mobilni vulkanizer Milan noću ispred Skupštine Srbije u centru Beograda — servisiranje belog automobila sa hidrauličnom dizalicom i alatom, 24h non-stop" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Na svim lokacijama — 24h non-stop</span></div>
                    </div>
                    <div className="gallery-item">
                        <img src="/punjenje-gume-land-rover.webp" data-full="/punjenje-gume-land-rover.webp" alt="Vulkanizer puni gumu Land Rover vozila pored mobilnog servisnog kombija — intervencija na licu mesta" loading="lazy" decoding="async" width="800" height="800" sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px" />
                        <div className="gallery-item-overlay"><span>Punjenje gume — Land Rover, na licu mesta</span></div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '36px' }}>
                    <Link href="/galerija" className="btn-secondary">Pogledaj celu galeriju</Link>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* ============ REVIEWS ============ */}
        <section className="reviews" id="recenzije" role="region" aria-labelledby="reviews-title">
            <div className="container">
                <div className="section-header">
                    <div className="eyebrow">Recenzije klijenata</div>
                    <h2 id="reviews-title">Šta kažu naši klijenti</h2>
                </div>
        
                <GbpRating variant="full" rating={rating} reviewCount={reviewCount} />
        
                <div className="reviews-grid">
                    <article className="review-card reveal">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-body">"Momak kulturan, brz, dosao je odmah i promenio sve 4 gume u roku od 15 minuta, pritom pazio da nista ne osteti ispod auta dizalicom itd.... sve preporuke!"</p>
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
        
                    <article className="review-card reveal">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-body">"Dečko je profesionalan i brz, sve pohvale!"</p>
                        <div className="review-meta">
                            <div className="review-author">
                                <div className="review-avatar">A</div>
                                <div>
                                    <div className="review-name">Ana Markusev</div>
                                    <div className="review-date">Google recenzija</div>
                                </div>
                            </div>
                            <div className="review-source">Google</div>
                        </div>
                    </article>

                    <article className="review-card reveal">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-body">"Sve pohvale za ekipu, pre svega na ljudskosti i ljubaznosti! Momci su na teren izašli neverovatno brzo, bili izuzetno prijatni i smireni. Zamenu gume su odradili profesionalno i uz osmeh."</p>
                        <div className="review-meta">
                            <div className="review-author">
                                <div className="review-avatar">J</div>
                                <div>
                                    <div className="review-name">Jovan Nešković</div>
                                    <div className="review-date">Google recenzija</div>
                                </div>
                            </div>
                            <div className="review-source">Google</div>
                        </div>
                    </article>
                </div>
        
                <div style={{ textAlign: 'center', marginTop: '50px', padding: '32px', background: 'var(--black-elev)', border: '1px solid var(--line)', borderRadius: '16px' }}>
                    <h3 style={{ fontFamily: '\'Inter\', sans-serif', fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: 'var(--cream)' }}>Bili ste naš klijent?</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '18px' }}>Vaša recenzija nam mnogo znači — i pomaže drugima koji traže pouzdanog vulkanizera.</p>
                    <a href="https://www.google.com/maps/place/Mobilni+Vulkanizer+Milan/@44.8812194,20.4630735,621m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a637b18ce8a37:0x45f6e9ef011b2c0!8m2!3d44.8812156!4d20.4656484!16s%2Fg%2F11z5_7wp4p?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)', color: 'var(--black)', borderRadius: '100px', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
                        ★ Ostavite recenziju na Google
                    </a>
                </div>
            </div>
        </section>
        
        {/* ============ ABOUT ============ */}
        <section className="about" id="o-meni" role="region" aria-labelledby="about-title">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <div className="eyebrow">Upoznajte Milana</div>
                        <h2 id="about-title">Posao radim sa srcem, već više od 10 godina</h2>
        
                        <p>
                            Vulkanizerstvo je moj zanat već više od 10 godina — od malih gradskih automobila do velikih SUV-ova. Vozim potpuno opremljeno servisno vozilo po celom Beogradu, 24 časa dnevno, sa novom profesionalnom opremom i poštenim cenama.
                        </p>

                        <blockquote className="about-quote">
                            "Svaka guma koju popravim je nečija sigurnost. To shvatam ozbiljno svaki put."
                        </blockquote>

                        <a href="tel:+381641290929" className="btn-primary flame-cta">
                            📞 Pozovite Milana
                        </a>
                    </div>
        
                    <div className="about-visual">
                        <img src="/mobilni-vulkanizer-milan-na-intervenciji-u-beogradu.webp" alt="Milan - mobilni vulkanizer Beograd na terenu - profesionalna intervencija" loading="lazy" decoding="async" width="600" height="660" />
                    </div>
                </div>
            </div>
        </section>
        
        {/* ============ FAQ ============ */}
        <section className="faq" id="faq" role="region" aria-labelledby="faq-title">
            <div className="container">
                <div className="section-header">
                    <div className="eyebrow">Česta pitanja</div>
                    <h2 id="faq-title">Imate pitanja? Imamo odgovore</h2>
                    <p>Sve što biste mogli da pitate pre nego što pozovete — ovde je odgovoreno.</p>
                </div>
        
                <div className="faq-list">
                    <article className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>Da li dolazite noću i vikendom?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Da, radim non-stop, 365 dana u godini — uključujući noć, vikende i praznike. Dodaje se samo noćna taksa za intervencije između 22h i 06h.</p>
                        </div>
                    </article>
        
                    <article className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>Koliko košta dolazak mobilnog vulkanizera?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Konačna cena zavisi od <strong>4 ključna faktora</strong>: vaše lokacije, vremena intervencije, karakteristika vozila i tipa posla. Pozovite nas i pre polaska ćete dobiti <strong>fiksnu procenu troškova</strong> — bez skrivenih troškova i bez iznenađenja na licu mesta.</p>
                        </div>
                    </article>
        
                    <article className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>Koliko brzo stižete na lokaciju?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Prosečno vreme dolaska je <strong>15-30 minuta</strong> od poziva. Vreme zavisi od trenutne lokacije i saobraćaja, ali uvek dajem realnu procenu pre dolaska.</p>
                        </div>
                    </article>
        
                    <article className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>Šta ako guma nije popravljiva?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Ukoliko guma nije popravljiva, mogu ugraditi vašu rezervnu gumu, ili po dogovoru obezbediti i ugraditi novu gumu na licu mesta.</p>
                        </div>
                    </article>
        
                    <article className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>Mogu li platiti karticom?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Da — prihvatamo gotovinu, sve platne kartice (<strong>Dina, Visa, MasterCard, Maestro, American Express</strong>) i plaćanje <strong>IPS QR kodom</strong>. Za firme je dostupno i fakturisanje sa odloženim plaćanjem.</p>
                        </div>
                    </article>
        
                    <article className="faq-item">
                        <button className="faq-question" aria-expanded="false">
                            <span>Kakvu garanciju pružate na rad?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Na svako krpljenje gume dajem garanciju od <strong>30 dana</strong>. Korišćenu opremu i materijale takođe garantujem prema deklaracijama proizvođača.</p>
                        </div>
                    </article>
        
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* ============ CONTACT CTA ============ */}
        <section className="contact-cta" id="kontakt" role="region" aria-labelledby="contact-title">
            <div className="container">
                <div className="contact-cta-inner">
                    <div className="eyebrow">Kontakt</div>
                    <h2 id="contact-title">Probušena guma ne čeka — neću ni ja</h2>
                    <p>Jedan poziv je sve što je potrebno. Dolazim za 15-30 minuta na bilo koju adresu u Beogradu, u bilo koje doba dana.</p>
        
                    <div className="contact-cta-num">
                        <a href="tel:+381641290929">+381 64 12 90 929</a>
                    </div>
        
                    <div className="contact-actions">
                        <a href="tel:+381641290929" className="btn-primary flame-cta">📞 Pozovite Odmah</a>
                        <a href="https://wa.me/381641290929" className="btn-secondary">💬 WhatsApp</a>
                        <a href="viber://chat?number=%2B381641290929" className="btn-secondary">💬 Viber</a>
                    </div>
        
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '14px' }}>
                        <div>📍 Ceo Beograd</div>
                        <div>🕒 Non-stop, 00-24h</div>
                        <div>⭐ {rating.toFixed(1)}/5.0 ({reviewCount} recenzija)</div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* ============ LIGHTBOX ============ */}
        <div className="lightbox" id="lightbox" role="dialog" aria-label="Pregled slike">
            <button className="lightbox-close" aria-label="Zatvori sliku">×</button>
            <img id="lightboxImg" src="" alt="" />
        </div>

      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
