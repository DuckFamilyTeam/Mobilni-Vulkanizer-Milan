'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// requestIdleCallback sa setTimeout fallback-om (Safari nema requestIdleCallback).
// Svrha: sav ovaj querySelectorAll/observer/listener setup nije potreban za prvi
// render (FCP/LCP) niti je vidljiv korisniku pre nego što skroluje ili klikne —
// odlaganjem na idle vreme oslobađamo glavnu nit tokom hidratacije, što direktno
// smanjuje Total Blocking Time bez ikakvog vidljivog kašnjenja za korisnika.
const onIdle =
  typeof window !== 'undefined' && window.requestIdleCallback
    ? window.requestIdleCallback
    : (fn) => setTimeout(fn, 1);
const cancelIdle =
  typeof window !== 'undefined' && window.cancelIdleCallback
    ? window.cancelIdleCallback
    : clearTimeout;

export default function ClientEffects() {
  const pathname = usePathname();

  // Praćenje klika na kontakt (tel / WhatsApp / Viber) mora da radi ODMAH, ne tek kad
  // browser proceni da je stranica "idle" (ispravljeno 2026-09-09) — inače se konverzija
  // gubi ako posetilac klikne "Pozovi Milana" u prve dve sekunde, pre nego što bi idle
  // callback dole stigao da zakači listener. Delegacija na document (capture) hvata klik
  // odmah, iz bilo koje tačke stranice, i pokriva i linkove dodate posle prvog renderovanja.
  useEffect(() => {
    const trackEvent = (eventName, label) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        contact_method: label,
        page_path: window.location.pathname,
      });
    };
    const handleContactClick = (e) => {
      const link = e.target.closest && e.target.closest('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('tel:')) trackEvent('phone_call', 'tel');
      else if (href.includes('wa.me')) trackEvent('whatsapp_click', 'whatsapp');
      else if (href.startsWith('viber:')) trackEvent('viber_click', 'viber');
    };
    document.addEventListener('click', handleContactClick, true);
    return () => document.removeEventListener('click', handleContactClick, true);
  }, []);

  useEffect(() => {
    let teardown = () => {};

    const idleId = onIdle(() => {
      teardown = setupEffects();
    }, { timeout: 2000 });

    return () => {
      cancelIdle(idleId);
      teardown();
    };
  }, [pathname]);

  return null;
}

function setupEffects() {
    // ============ FAQ TOGGLE ============
    const faqHandlers = [];
    document.querySelectorAll('.faq-question').forEach((btn) => {
      const handler = () => {
        const item = btn.parentElement;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.faq-item').forEach((i) => {
          i.classList.remove('open');
          const q = i.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        if (!expanded) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      };
      btn.addEventListener('click', handler);
      faqHandlers.push({ btn, handler });
    });

    // ============ LIGHTBOX ============
    const galleryHandlers = [];
    const openLightbox = (el) => {
      const img = el.querySelector('img');
      if (!img) return;
      const fullSrc = img.dataset.full || img.src;
      const lightboxImg = document.getElementById('lightboxImg');
      const lightbox = document.getElementById('lightbox');
      if (lightboxImg && lightbox) {
        lightboxImg.src = fullSrc;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    };
    const closeLightbox = () => {
      const lightbox = document.getElementById('lightbox');
      if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
      }
    };

    document.querySelectorAll('.gallery-item').forEach((el) => {
      const handler = () => openLightbox(el);
      el.addEventListener('click', handler);
      galleryHandlers.push({ el, handler });
    });

    const lightboxEl = document.getElementById('lightbox');
    const lightboxClickHandler = (e) => {
      if (e.target.id === 'lightbox' || e.target.classList.contains('lightbox-close')) {
        closeLightbox();
      }
    };
    if (lightboxEl) lightboxEl.addEventListener('click', lightboxClickHandler);

    const escHandler = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', escHandler);

    // ============ MAP ACTIVATE-ON-TAP ============
    // Google Maps iframe embed inače "otima" wheel/touch geste čim je kursor/prst
    // iznad njega, pa se skrolovanje stranice zaglavi na mapi. Mapa je do klika
    // vizuelno ista, ali pointer-events:none (CSS), tako da skrol prolazi kroz nju;
    // tek klik/dodir na overlay je aktivira za zum/pomeranje.
    const mapHandlers = [];
    document.querySelectorAll('.coverage-map-overlay').forEach((btn) => {
      const handler = () => {
        const wrapper = btn.closest('.coverage-map');
        if (wrapper) wrapper.classList.add('active');
      };
      btn.addEventListener('click', handler);
      mapHandlers.push({ btn, handler });
    });

    // ============ REVEAL ANIMATIONS ============
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // ============ LAZY VIDEO (učitava i pušta tek kad uđe u view, nula uticaja na LCP) ============
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target;
            const src = video.dataset.src;
            if (src && !video.src) {
              video.src = src;
              video.load();
              video.play().catch(() => {});
            }
            videoObserver.unobserve(video);
          }
        });
      },
      { threshold: 0.25, rootMargin: '200px 0px' }
    );
    document.querySelectorAll('.lazy-video').forEach((el) => videoObserver.observe(el));

    // ============ HEADER SCROLL EFFECT ============
    // Use classList + rAF for smoother mobile scroll (avoids style recalculation on every scroll event)
    let scrollTicking = false;
    const header = document.querySelector('.header');
    const scrollHandler = () => {
      if (scrollTicking) return;
      scrollTicking = true;
      requestAnimationFrame(() => {
        if (header) {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }
        scrollTicking = false;
      });
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    // ============ SMOOTH SCROLL FOR HASH LINKS ============
    const anchorHandlers = [];
    document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach((anchor) => {
      const handler = function (e) {
        const href = this.getAttribute('href');
        // For homepage hash links, only do smooth scroll if we're already on homepage
        if (href.startsWith('/#')) {
          if (window.location.pathname === '/' || window.location.pathname === '') {
            const targetId = href.replace('/#', '#');
            const target = document.querySelector(targetId);
            if (target) {
              e.preventDefault();
              const offsetTop = target.offsetTop - 70;
              window.scrollTo({ top: offsetTop, behavior: 'smooth' });
              history.pushState(null, null, href);
            }
          }
          return;
        }
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 70;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          history.pushState(null, null, href);
        }
      };
      anchor.addEventListener('click', handler);
      anchorHandlers.push({ anchor, handler });
    });

    // Praćenje klika na kontakt (tel/WhatsApp/Viber) je izmešteno u zaseban, odmah aktivan
    // useEffect gore (ne čeka idle) — vidi komentar tamo, ispravljeno 2026-09-09.

    // ============ CLEANUP ============
    return () => {
      faqHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      galleryHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
      if (lightboxEl) lightboxEl.removeEventListener('click', lightboxClickHandler);
      document.removeEventListener('keydown', escHandler);
      window.removeEventListener('scroll', scrollHandler);
      anchorHandlers.forEach(({ anchor, handler }) =>
        anchor.removeEventListener('click', handler)
      );
      mapHandlers.forEach(({ btn, handler }) => btn.removeEventListener('click', handler));
      observer.disconnect();
      videoObserver.disconnect();
    };
}
