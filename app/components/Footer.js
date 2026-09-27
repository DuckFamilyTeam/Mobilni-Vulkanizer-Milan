import Link from 'next/link';

// Zamena za emoji ikonice (2026-09-27, vizuelna petlja V7) — kritičar ih je označio
// kao "jeftine", van vizuelnog sistema. Isti stroke-icon stil kao service kartice na
// početnoj (viewBox 24x24, stroke currentColor). WhatsApp/Viber su isti path-ovi kao
// dugmad na početnoj (page.js) — jedan izvor istine za te dve ikonice na celom sajtu.
function FooterIcon({ name }) {
  const common = {
    width: 15,
    height: 15,
    viewBox: '0 0 24 24',
    'aria-hidden': true,
    focusable: 'false',
  };
  switch (name) {
    case 'phone':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...common} fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case 'viber':
      return (
        <svg {...common} fill="currentColor">
          <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.124 20.36h.005l-.004 2.42s-.037.98.61 1.18c.78.244 1.24-.5 1.987-1.3.41-.45.97-1.1 1.4-1.6 3.85.32 6.81-.42 7.15-.53.78-.25 5.2-.82 5.92-6.68.74-6.04-.36-9.86-2.34-11.58l-.013-.005c-.6-.55-3-2.3-8.36-2.32 0 0-.633-.04-1.075-.04zm.122 1.7c.376.001.92.04.92.04 4.535.018 6.706 1.385 7.214 1.85 1.673 1.434 2.528 4.876 1.903 9.917-.602 4.896-4.184 5.205-4.84 5.412-.28.087-2.882.732-6.158.515 0 0-2.443 2.95-3.205 3.715-.119.123-.26.17-.354.149-.132-.033-.17-.193-.168-.426l.022-4.022c-4.764-1.32-4.486-6.295-4.434-8.898.054-2.602.55-4.736 1.999-6.168 1.957-1.78 5.475-2.044 7.1-2.085 0 0 0 .001 0 0zm.529 2.748a.328.328 0 0 0-.327.343c0 .183.146.337.328.341 2.38.05 4.336 1.65 4.357 4.622a.328.328 0 0 0 .327.328h.005a.328.328 0 0 0 .323-.333c-.024-3.302-2.232-5.255-4.999-5.302a.32.32 0 0 0-.014 0zm-3.879.997c-.207-.025-.414.018-.587.135h-.014c-.402.236-.764.534-1.07.886-.255.302-.394.609-.43.905-.022.176.013.352.103.51.22.45.488.875.799 1.265a14.31 14.31 0 0 0 1.71 1.953c.668.659 1.41 1.245 2.213 1.747h.01l.01.005.014.009c.025.013.05.027.075.038.798.426 1.658.737 2.55.926.916.21 1.85.339 2.79.385h.107c.298-.013.581-.144.785-.366.358-.397.63-.866.799-1.376a.832.832 0 0 0-.014-.547c-.117-.235-.267-.45-.444-.638-.382-.402-.835-.728-1.336-.96a.825.825 0 0 0-.776-.005c-.252.158-.48.347-.681.564l-.014.018c-.085.103-.21.158-.342.149a8.93 8.93 0 0 1-2.04-.736 6.143 6.143 0 0 1-1.77-1.255c-.245-.234-.47-.49-.671-.764a.378.378 0 0 1 .009-.45l.014-.014c.215-.205.404-.435.563-.685a.825.825 0 0 0-.005-.78c-.234-.5-.56-.952-.96-1.336a2.484 2.484 0 0 0-.638-.444 1.018 1.018 0 0 0-.275-.067zm.617 1.252a.327.327 0 0 0-.354.299.327.327 0 0 0 .299.355c1.013.062 1.539.612 1.616 1.66a.328.328 0 0 0 .327.305h.024a.328.328 0 0 0 .305-.351 2.408 2.408 0 0 0-.717-1.586 2.49 2.49 0 0 0-1.5-.682z" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case 'calendar':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case 'card':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="logo">
              <img
                src="/logo-header.webp"
                alt="Mobilni Vulkanizer Milan - logo firme"
                className="logo-img"
                width="44"
                height="44"
              />
              <div className="logo-text">
                <strong>Mobilni Vulkanizer</strong>
                <span>Milan · Beograd</span>
              </div>
            </Link>
            <p>
              Profesionalna mobilna vulkanizerska usluga u Beogradu. Dolazim na
              vašu adresu, brzo, profesionalno, u bilo koje doba dana ili noći.
            </p>
            <p className="footer-icon-line" style={{ marginTop: '12px' }}>
              <FooterIcon name="card" /> Plaćanje: Gotovina · Dina · Visa · MasterCard · Maestro ·
              American Express · IPS QR kod
            </p>
          </div>

          <div className="footer-col">
            <h3>Blog</h3>
            <ul>
              <li><Link href="/blog">Svi članci</Link></li>
              <li><Link href="/blog/krpljenje-probusene-gume">Krpljenje gume, vodič</Link></li>
              <li><Link href="/blog/hotel-za-gume-beograd">Hotel za gume</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Usluge</h3>
            <ul>
              <li><Link href="/#usluge">Krpljenje gume</Link></li>
              <li><Link href="/#usluge">Zamena pneumatika</Link></li>
              <li><Link href="/#usluge">Balansiranje</Link></li>
              <li><Link href="/#usluge">Ispravka felni</Link></li>
              <li><Link href="/#usluge">Vučna služba</Link></li>
              <li><Link href="/vulkanizerska-radnja-borca">Hotel za gume</Link></li>
              <li><Link href="/vulkanizerska-radnja-borca">Poliranje farova</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Lokacije</h3>
            <ul>
              <li><Link href="/mobilni-vulkanizer-ceo-beograd">Ceo Beograd</Link></li>
              <li><Link href="/mobilni-vulkanizer-novi-beograd">Novi Beograd</Link></li>
              <li><Link href="/mobilni-vulkanizer-zemun">Zemun</Link></li>
              <li><Link href="/mobilni-vulkanizer-borca">Borča</Link></li>
              <li><Link href="/mobilni-vulkanizer-krnjaca">Krnjača</Link></li>
              <li><Link href="/mobilni-vulkanizer-cukarica">Čukarica</Link></li>
              <li><Link href="/mobilni-vulkanizer-zvezdara">Zvezdara</Link></li>
              <li><Link href="/mobilni-vulkanizer-batajnica">Batajnica</Link></li>
              <li><Link href="/mobilni-vulkanizer-aerodrom">Aerodrom</Link></li>
              <li><Link href="/mobilni-vulkanizer-autoput-beograd">Autoput Beograd</Link></li>
              <li><Link href="/mobilni-vulkanizer-pancevo">Pančevo</Link></li>
              <li><Link href="/vulkanizerska-radnja-borca">Radnja, Zrenjaninski put 146b</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Kontakt</h3>
            <ul className="footer-icon-list">
              <li><a href="tel:+381641290929"><FooterIcon name="phone" /> +381 64 12 90 929</a></li>
              <li><a href="https://wa.me/381641290929"><FooterIcon name="whatsapp" /> WhatsApp</a></li>
              <li><a href="viber://chat?number=%2B381641290929"><FooterIcon name="viber" /> Viber</a></li>
              <li><FooterIcon name="pin" /> Mobilna usluga: Ceo Beograd</li>
              <li><FooterIcon name="pin" /> Radnja: Zrenjaninski put 146b, Borča</li>
              <li><FooterIcon name="clock" /> Radimo 0-24h, svaki dan (mobilna usluga i radnja)</li>
              <li><FooterIcon name="calendar" /> Zakazivanje termina moguće, pozovite nas</li>
              <li><FooterIcon name="card" /> Gotovina · kartice · IPS QR</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Mobilni Vulkanizer Milan · Beograd · PIB: 115779198 · Sva prava zadržana.</div>
          <div>
            Sajt razvio:{' '}
            <a
              href="https://www.duckfamilyteam.online/"
              target="_blank"
              rel="noopener"
              style={{ color: 'var(--gold-text)', fontWeight: 700, textDecoration: 'none' }}
            >
              Duck Family Team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
