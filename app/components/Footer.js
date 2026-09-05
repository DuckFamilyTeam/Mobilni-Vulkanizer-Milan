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
            <p style={{ marginTop: '12px' }}>
              💳 Plaćanje: Gotovina · Dina · Visa · MasterCard · Maestro ·
              American Express · IPS QR kod
            </p>
          </div>

          <div className="footer-col">
            <h3>Blog</h3>
            <ul>
              <li><Link href="/blog">Svi članci</Link></li>
              <li><Link href="/blog/krpljenje-probusene-gume">Krpljenje gume — vodič</Link></li>
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
              <li><Link href="/mobilni-vulkanizer-autoput-beograd">Autoput Beograd</Link></li>
              <li><Link href="/vulkanizerska-radnja-borca">Radnja — Zrenjaninski put 146b</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Kontakt</h3>
            <ul>
              <li><a href="tel:+381641290929">📞 +381 64 12 90 929</a></li>
              <li><a href="https://wa.me/381641290929">💬 WhatsApp</a></li>
              <li><a href="viber://chat?number=%2B381641290929">💬 Viber</a></li>
              <li>📍 Mobilna usluga: Ceo Beograd</li>
              <li>📍 Radnja: Zrenjaninski put 146b, Borča</li>
              <li>🕒 Radimo 0–24h, svaki dan (mobilna usluga i radnja)</li>
              <li>📅 Zakazivanje termina moguće — pozovite nas</li>
              <li>💳 Gotovina · kartice · IPS QR</li>
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
