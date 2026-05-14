import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Link href="/" className="logo">
              <img
                src="/logo.webp"
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
              vašu adresu — brzo, profesionalno, u bilo koje doba dana ili noći.
            </p>
          </div>

          <div className="footer-col">
            <h5>Blog</h5>
            <ul>
              <li><Link href="/blog">Svi članci</Link></li>
              <li><Link href="/blog/krpljenje-probusene-gume">Krpljenje gume — vodič</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Usluge</h5>
            <ul>
              <li><Link href="/#usluge">Krpljenje gume</Link></li>
              <li><Link href="/#usluge">Zamena pneumatika</Link></li>
              <li><Link href="/#usluge">Balansiranje</Link></li>
              <li><Link href="/#usluge">Ispravka felni</Link></li>
              <li><Link href="/#usluge">Vučna služba</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Lokacije</h5>
            <ul>
              <li><Link href="/mobilni-vulkanizer-ceo-beograd">Ceo Beograd</Link></li>
              <li><Link href="/mobilni-vulkanizer-novi-beograd">Novi Beograd</Link></li>
              <li><Link href="/mobilni-vulkanizer-zemun">Zemun</Link></li>
              <li><Link href="/mobilni-vulkanizer-borca">Borča</Link></li>
              <li><Link href="/mobilni-vulkanizer-krnjaca">Krnjača</Link></li>
              <li><Link href="/mobilni-vulkanizer-autoput-beograd">Autoput Beograd</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Kontakt</h5>
            <ul>
              <li><a href="tel:+381641290929">📞 +381 64 12 90 929</a></li>
              <li><a href="https://wa.me/381641290929">💬 WhatsApp</a></li>
              <li><a href="viber://chat?number=%2B381641290929">💬 Viber</a></li>
              <li>📍 Ceo Beograd</li>
              <li>🕒 Non-stop 00-24h</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Mobilni Vulkanizer Milan · Beograd · Sva prava zadržana.</div>
          <div>
            Sajt razvio:{' '}
            <a
              href="https://www.duckfamilyteam.online/"
              target="_blank"
              rel="noopener"
              style={{ color: 'var(--gold)', fontWeight: 700, textDecoration: 'none' }}
            >
              Duck Family Team
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
