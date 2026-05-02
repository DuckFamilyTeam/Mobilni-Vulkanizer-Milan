'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';
    const handleEsc = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header" role="banner">
        <div className="container">
          <div className="header-inner">
            <Link
              href="/"
              className="logo"
              aria-label="Mobilni Vulkanizer Milan - Početna strana"
              onClick={closeMenu}
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

            <button
              className={`hamburger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ============ MOBILE DRAWER ============ */}
      <div
        className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}
        id="mobile-drawer"
        aria-hidden={!menuOpen}
      >
        <div
          className="mobile-drawer-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
        <div className="mobile-drawer-panel" role="dialog" aria-label="Glavna navigacija">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">Meni</span>
            <button
              className="mobile-drawer-close"
              onClick={closeMenu}
              aria-label="Zatvori meni"
            >
              ×
            </button>
          </div>

          <nav
            className="mobile-drawer-nav"
            role="navigation"
            aria-label="Glavni linkovi"
          >
            <Link href="/#usluge" onClick={closeMenu}>
              Usluge
            </Link>
            <Link href="/#cene" onClick={closeMenu}>
              Cenovnik
            </Link>
            <Link href="/#galerija" onClick={closeMenu}>
              Galerija
            </Link>
            <Link href="/#recenzije" onClick={closeMenu}>
              Recenzije
            </Link>
            <Link href="/#faq" onClick={closeMenu}>
              FAQ
            </Link>
          </nav>

          <div className="mobile-drawer-section-title">Po lokacijama</div>
          <nav
            className="mobile-drawer-locations"
            role="navigation"
            aria-label="Lokacije"
          >
            <Link href="/mobilni-vulkanizer-ceo-beograd" onClick={closeMenu}>
              <span aria-hidden="true">🏙️</span> Ceo Beograd
            </Link>
            <Link href="/mobilni-vulkanizer-novi-beograd" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Novi Beograd
            </Link>
            <Link href="/mobilni-vulkanizer-zemun" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Zemun
            </Link>
            <Link href="/mobilni-vulkanizer-borca" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Borča
            </Link>
            <Link href="/mobilni-vulkanizer-krnjaca" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Krnjača
            </Link>
            <Link
              href="/mobilni-vulkanizer-autoput-beograd"
              onClick={closeMenu}
            >
              <span aria-hidden="true">🛣️</span> Autoput Beograd
            </Link>
          </nav>

          <div className="mobile-drawer-cta">
            <a
              href="tel:+381641290929"
              className="btn-primary"
              onClick={closeMenu}
            >
              📞 Pozovi: +381 64 12 90 929
            </a>
            <a
              href="https://wa.me/381641290929"
              className="btn-secondary"
              onClick={closeMenu}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
