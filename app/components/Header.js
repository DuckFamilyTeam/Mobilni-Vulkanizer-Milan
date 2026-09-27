'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Selektor za sve elemente koje tastatura može da fokusira unutar drawer panela.
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = 'hidden';

    // Fokus trap (WCAG 2.1.2 / dijalog obrazac): dok je drawer otvoren, Tab i
    // Shift+Tab kruže isključivo kroz fokusabilne elemente panela, ne izlaze
    // na sadržaj ispod overlay-a. ESC i dalje zatvara meni.
    const panel = panelRef.current;
    const getFocusable = () =>
      panel ? Array.from(panel.querySelectorAll(FOCUSABLE_SELECTOR)) : [];

    // Fokus ide na panel čim se otvori, da screen reader/tastatura odmah budu
    // "unutra", a ne i dalje na hamburger dugmetu iza overlay-a.
    const focusables = getFocusable();
    (focusables[0] || panel)?.focus();

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeydown);
      // Fokus se vraća na hamburger dugme koje je otvorilo meni, standardno
      // ponašanje za dijalog/drawer obrasce.
      hamburgerRef.current?.focus();
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
                src="/logo-header.webp"
                alt="Mobilni Vulkanizer Milan logo - 24h vulkanizer Beograd"
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
              <a href="/#usluge">Usluge</a>
              <a href="/#lokacije">Lokacije</a>
              <Link href="/vulkanizerska-radnja-borca">Radnja Borča</Link>
              <a href="/#cene">Cenovnik</a>
              <Link href="/galerija">Galerija</Link>
              <a href="/#recenzije">Recenzije</a>
              <a href="/#faq">FAQ</a>
              <a href="/#kontakt">Kontakt</a>
              <Link href="/blog">Blog</Link>
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
              ref={hamburgerRef}
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
        <div
          ref={panelRef}
          className="mobile-drawer-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Glavna navigacija"
          tabIndex={-1}
        >
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
            <a href="/#usluge" onClick={closeMenu}>
              Usluge
            </a>
            <Link href="/vulkanizerska-radnja-borca" onClick={closeMenu}>
              <span aria-hidden="true">🏬</span> Radnja Borča
            </Link>
            <a href="/#cene" onClick={closeMenu}>
              Cenovnik
            </a>
            <Link href="/galerija" onClick={closeMenu}>
              Galerija
            </Link>
            <a href="/#recenzije" onClick={closeMenu}>
              Recenzije
            </a>
            <a href="/#faq" onClick={closeMenu}>
              FAQ
            </a>
            <a href="/#kontakt" onClick={closeMenu}>
              Kontakt
            </a>
            <Link href="/blog" onClick={closeMenu}>
              <span aria-hidden="true">📝</span> Blog
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
            <Link href="/mobilni-vulkanizer-cukarica" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Čukarica
            </Link>
            <Link href="/mobilni-vulkanizer-zvezdara" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Zvezdara
            </Link>
            <Link href="/mobilni-vulkanizer-batajnica" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Batajnica
            </Link>
            <Link href="/mobilni-vulkanizer-aerodrom" onClick={closeMenu}>
              <span aria-hidden="true">✈️</span> Aerodrom
            </Link>
            <Link
              href="/mobilni-vulkanizer-autoput-beograd"
              onClick={closeMenu}
            >
              <span aria-hidden="true">🛣️</span> Autoput Beograd
            </Link>
            <Link href="/mobilni-vulkanizer-pancevo" onClick={closeMenu}>
              <span aria-hidden="true">📍</span> Pančevo
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
