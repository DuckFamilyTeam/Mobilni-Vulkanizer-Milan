# Mobilni Vulkanizer Milan — Sajt + SEO Setup Guide

**Razvio:** Duck Family Team
**Datum:** Maj 2026
**Verzija:** 1.0

---

## 📦 Šta dobijaš u ovom paketu

1. **`index.html`** — kompletan sajt (single-file, HTML+CSS+JS)
2. **`robots.txt`** — instrukcije za Google bot
3. **`sitemap.xml`** — mapa sajta za brže indeksiranje
4. **`README.md`** — ovaj fajl

---

## 🚀 KORAK 1: Deploy sajta na hosting

### Opcija A: Vercel (PREPORUČENO — besplatno + brzo)

**Zašto Vercel:** CDN po celom svetu, automatski HTTPS, PageSpeed score 95+

1. Idi na **vercel.com** → registruj se sa GitHub/Google nalogom
2. Klikni **"Add New Project"** → **"Browse"**
3. Drag-and-drop ceo `site/` folder
4. Vercel automatski deployuje za 30 sekundi
5. Dobićeš URL `mobilnivulkanizermilan.vercel.app` — **TEST SAJT**

### Opcija B: Hostinger / Mint cPanel (klasičan hosting)

1. Loguj se na cPanel
2. Idi na **File Manager** → **public_html**
3. **Backup stari sajt** prvo (Backup tool u cPanel-u)
4. Obriši stari sadržaj iz public_html
5. Upload `index.html`, `robots.txt`, `sitemap.xml`
6. Sajt je live na `mobilnivulkanizermilan.com`

---

## 🌐 KORAK 2: Povezivanje domena (ako koristiš Vercel)

Ako si na Vercel-u i hoćeš domen `mobilnivulkanizermilan.com`:

1. U Vercel projektu → **Settings** → **Domains** → **Add**
2. Unesi `mobilnivulkanizermilan.com` i `www.mobilnivulkanizermilan.com`
3. Vercel će ti reći koje DNS zapise da postaviš
4. Idi u **Mint kontrolnu tablu** → **DNS Zone Editor**
5. Dodaj **A record** sa Vercel IP adresom (Vercel ti je daje)
6. Sačekaj 24-48h da DNS propagira

---

## 🎯 KORAK 3: Google Search Console (KRITIČNO za SEO)

**Bez ovoga, Google ne zna da postojiš.**

1. Idi na **search.google.com/search-console**
2. **Add property** → unesi `https://mobilnivulkanizermilan.com`
3. Verifikuj vlasništvo:
   - **Najlakše:** preko Google Analytics (ako je instaliran)
   - **Alternativa:** dodaj HTML meta tag u `<head>` (Google ti daje kod)
4. Nakon verifikacije:
   - **Sitemaps** → submit `https://mobilnivulkanizermilan.com/sitemap.xml`
   - **URL Inspection** → unesi homepage URL → **"Request Indexing"**
5. Provera za 24-72h da li je sajt indeksiran

---

## 📊 KORAK 4: Google Analytics 4 (GA4)

**Bez analytics-a — letiš slepo.**

1. Idi na **analytics.google.com** → Create Account
2. Property name: "Mobilni Vulkanizer Milan"
3. Industry: Automotive
4. Time zone: Belgrade
5. Currency: RSD
6. Get **Measurement ID** (počinje sa G-XXXXXXXX)
7. U `index.html`, pre `</head>` ubaci:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

Zameni `G-XXXXXXXX` sa stvarnim ID-om.

---

## 📞 KORAK 5: Google Ads Conversion Tracking

**Da bi pratili koji oglasi donose pozive.**

1. Google Ads → **Tools** → **Conversions** → **+ New conversion action**
2. Tip: **Phone calls** → **Calls from website**
3. Conversion name: "Phone Call - Vulkanizer"
4. Value: Use the same value (npr. 3000 RSD prosečna vrednost lead-a)
5. Get **conversion tag** kod
6. Isto kao GA4 — ubaci kod u `<head>` sajta

**Već je delimično pripremljeno** — sajt ima placeholder za conversion tracking, samo ga moraš povezati sa svojim ID-om.

---

## 🏪 KORAK 6: Google Business Profile (NAJVAŽNIJE za lokalni SEO)

**Ovo je RAZLIKA između rang #20 i rang #1 za lokalne pretrage.**

1. Idi na **google.com/business** → **Manage now**
2. Business name: "Mobilni Vulkanizer Milan"
3. Category: **Auto repair shop** (najbliža kategorija)
4. **NEMA fizičke adrese** → izaberi **"I deliver goods and services to my customers"**
5. Service area: Beograd (ceo grad + opcione naselja)
6. Phone: +381 64 12 90 929
7. Website: https://mobilnivulkanizermilan.com
8. **Verifikacija:** Google šalje razglednicu sa kodom (Beograd, 5-10 dana)
9. Posle verifikacije:
   - Upload 10+ slika (već imamo galeriju — možeš iste)
   - Postavi tačno radno vreme (24/7)
   - Dodaj sve usluge iz cenovnika
   - **Zatraži recenzije od stvarnih klijenata** (ne pišeš sam!)

---

## 🔗 KORAK 7: Lokalni direktorijumi (backlinks za SEO)

Registruj biznis na ovim sajtovima — povećava domain authority:

### Srpski direktorijumi (najvažniji)
- **Žute strane** — zute-strane.rs
- **Najbolji u Beogradu** — najboljiubeogradu.rs
- **eKapija** — ekapija.com
- **Beoinfo** — beoinfo.com
- **Auto-katalog** — auto-katalog.rs

### Internacionalni
- **Foursquare** — foursquare.com
- **Yelp** — yelp.com (manji efekat u SR)

**Plan:** 1 direktorijum dnevno, ne sve odjednom (Google ne voli "spam burst").

---

## 📈 KORAK 8: Praćenje rezultata (prvih 30 dana)

### Šta meriti svake nedelje:

| Metrika | Gde | Cilj nakon 30 dana |
|---------|-----|---------------------|
| Indeksirane stranice | Search Console | 5+ |
| Organic clicks | Search Console | 50+ |
| Avg. position | Search Console | < 30 |
| Sessions iz google/cpc | GA4 | Zavisi od budžeta |
| Phone call conversions | Google Ads | Zavisi od budžeta |
| Bounce rate | GA4 | < 60% |
| PageSpeed Mobile | pagespeed.web.dev | 85+ |

---

## 🎯 PageSpeed test (uradi odmah posle deploya)

1. Idi na **pagespeed.web.dev**
2. Unesi `https://mobilnivulkanizermilan.com`
3. Cilj **mobile score: 85+**

Ovaj sajt je optimizovan da postigne 90+ — ako je ispod, znači da hosting nije dovoljno brz (preporuka: Vercel umesto Mint Mini).

---

## 💡 Realne ekspektacije za rang

- **Nedelja 1-2:** Sajt indeksiran, brand pretrage rade
- **Mesec 1-2:** Long-tail ključne reči na 2-3. strani
- **Mesec 3-4:** Glavne ključne reči na 1. stranu
- **Mesec 6-12:** Top 3 za neke ključne reči (sa aktivnim Google Business + recenzije)

**SEO je maraton, ne sprint.** Sajt je tehnički bolji od 95% konkurencije već od dana 1, ali rang se gradi vremenom.

---

## ⚙️ Šta još možeš da poboljšaš (kasnije)

1. **Blog sekcija** — 2-3 članka mesečno o vulkanizerstvu (povećava SEO)
2. **Pravi video** Milana u akciji — direktno na hero (5-10x više konverzija)
3. **Real-time chat** — Tawk.to ili WhatsApp Chat widget
4. **Online booking** — kalendar za zakazivanje termina
5. **Email automatizacija** — follow-up klijenata posle usluge

---

## 🆘 Problemi?

Ako bilo šta ne radi posle deploya:
1. Proveri da li su svi fajlovi uploadovani
2. Proveri da li ima konzolnih grešaka (F12 u browseru)
3. Pošalji mi screenshot — Duck Family Team

---

**Sajt razvio:** 🦆 Duck Family Team
**Tehnologija:** Single-file HTML/CSS/JS
**SEO:** Schema.org, Open Graph, Sitemap, Geo-meta
**Performance:** Inline critical CSS, lazy loading, font optimization
