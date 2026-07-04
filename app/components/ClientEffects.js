'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
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

    // ============ CONTACT CLICK TRACKING (GTM dataLayer) ============
    // GTM ne kreira window.gtag — eventi se šalju kroz dataLayer.push,
    // a u GTM-u ih hvata Custom Event trigger (phone_call / whatsapp_click / viber_click).
    const trackEvent = (eventName, label) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        contact_method: label,
        page_path: window.location.pathname,
      });
    };

    const callHandlers = [];
    const trackSelectors = [
      ['a[href^="tel:"]', 'phone_call', 'tel'],
      ['a[href*="wa.me"]', 'whatsapp_click', 'whatsapp'],
      ['a[href^="viber:"]', 'viber_click', 'viber'],
    ];
    trackSelectors.forEach(([selector, eventName, label]) => {
      document.querySelectorAll(selector).forEach((link) => {
        const handler = () => trackEvent(eventName, label);
        link.addEventListener('click', handler);
        callHandlers.push({ link, handler });
      });
    });

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
      callHandlers.forEach(({ link, handler }) => link.removeEventListener('click', handler));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
