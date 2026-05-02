import Link from 'next/link';

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="container">
        <div className="header-inner">
          <Link
            href="/"
            className="logo"
            aria-label="Mobilni Vulkanizer Milan - Početna strana"
          >
            <img
              src="https://mobilnivulkanizermilan.com/wp-content/uploads/2026/04/vulaknizermilan.png"
              alt="Mobilni Vulkanizer Milan logo"
              className="logo-img"
              width="44"
              height="44"
            />
            <div className="logo-text">
              <strong>Mobilni Vulkanizer</strong>
              <span>Milan · Beograd</span>
            </div>
          </Link>
          <nav className="nav" role="navigation" aria-label="Glavna navigacija">
            <Link href="/#usluge">Usluge</Link>
            <Link href="/#lokacije">Lokacije</Link>
            <Link href="/#cene">Cenovnik</Link>
            <Link href="/#galerija">Galerija</Link>
            <Link href="/#recenzije">Recenzije</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
          <a
            href="tel:+381641290929"
            className="btn-call-header"
            aria-label="Pozovite mobilnog vulkanizera Milana"
          >
            <span className="live-pulse" aria-hidden="true"></span>
            Pozovi sada
          </a>
        </div>
      </div>
    </header>
  );
}
