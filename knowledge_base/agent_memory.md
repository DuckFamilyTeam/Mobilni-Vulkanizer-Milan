# Agent Memory — Mobilni Vulkanizer Milan
_Updated: 2026-08-02_

## Client & business
- Mobilni vulkanizer (mobile tire service), Beograd. Owner/kontakt: Milan, +381 64 12 90 929, WhatsApp dostupan.
- USP: dolazak na adresu za 15–30 min, non-stop 24h/7 dana.
- Ton: direktan, hitnost/pouzdanost ("SOS" pozicioniranje).

## Stack decisions (and why)
- Next.js 14.2.15 (App Router), React 18.3.1, vanilla CSS (bez Tailwinda — postojeći sajt migriran iz statičnog HTML-a, stil sačuvan 1:1).
- `sharp` za image optimizaciju, `@next/third-parties` za GTM/analytics helpers.
- Fontovi: Inter (body), Bebas Neue (display), Playfair Display (ne-kritičan, preload:false).
- ⚠️ Napomena: skill default preporučuje Next.js 16.x kao trenutni stable — ovaj projekat je na 14.2.15. Ne migrirati bez eksplicitnog dogovora s Nikolom (rizik za postojeći produkcioni sajt).

## Struktura sajta (već izgrađeno)
- `/` — početna
- 6 lokacijskih stranica: `/mobilni-vulkanizer-borca`, `-novi-beograd`, `-zemun`, `-krnjaca`, `-autoput-beograd`, `-ceo-beograd`
- Blog: `/blog` + 4 posta (balansiranje-tockova, kada-promeniti-zimske-za-letnje-gume, krpljenje-probusene-gume, sta-je-run-flat-guma)
- Komponente: Header, Footer, ClientEffects, StickyCall

## SEO/AEO/local — već urađeno
- Metadata (title/description/OG/Twitter) po stranici, kanonski URL-ovi, geo meta tagovi.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt` u `public/`.
- JSON-LD: AutoRepair/LocalBusiness `@graph` dodat na svih 6 lokacijskih stranica (commit `5d6a310`).
- Slike konvertovane u WebP (`convert-images.js`), LCP/kontrast/heading hierarchy fixevi urađeni (commit `aa44570`).

## Deploy
- Domen: `mobilnivulkanizermilan.com` (u metadataBase i canonical URL-ovima — pretpostavka da je već aktivan, treba potvrditi).
- GitHub repo: `DuckFamilyTeam/Mobilni-Vulkanizer-Milan` (origin remote povezan).
- Nema `.vercel` foldera lokalno — deploy verovatno preko Vercel-GitHub integracije (auto-deploy na push), ne CLI-ja odavde.

## Google Business Profile
- Nije potvrđeno da li postoji aktivan GBP — treba pitati Nikolu.

## Analytics/conversion tracking
- `@next/third-parties` je instaliran ali nije potvrđeno da li je GTM/GA4 aktivno ožičen — treba proveriti.

## REDIZAJN — brief i odluke (2026-08-02)

### Vizuelni identitet (izveden iz loga)
- Paleta: crna (dominantna pozadina), crvena (CTA/hitnost), hrom/srebrna (alat/felna akcenti), plamen-gradijent narandžasto→žuto (retko, glow na CTA/hover, ne kao pozadina).
- Ponavljajući motiv: ukršteni ključ + felna (iz loga) kao razdelnik sekcija — diferencijator, nema ga konkurencija.
- Ton: hitnost, brzina, kvalitet, veliki CTA. Cilj: da sajt izgleda potpuno drugačije od standardnih vulkanizer sajtova u Srbiji.
- Logo fajl: poslat od Nikole u chatu (crna pozadina, crvena traka "MILAN", plamen iznad felne, ukršteni ključevi) — sačuvati/ekstraktovati asset pre builda.

### Arhitektura (odluke)
- Početna: rasterećena — hero (veliki CTA poziv/WhatsApp) + trust bar (15-30 min, 24/7, 10+ god iskustva, GBP ocena uživo) + kako radi (3 koraka) + kratak pregled usluga + lokacije (kompaktno) + footer sa punim spiskom naselja. Blog i dubok sadržaj se sklanjaju sa početne, samo linkuju.
- Lokacije: 28 ključnih reči date od Nikole (pun spisak u chat istoriji 2026-08-02). Plan: zadržati/proširiti 6 postojećih pillar-stranica + jedna "Sve lokacije/Ceo Beograd i okolina" hub-stranica sa `areaServed` schema nizom za ostatak — **finalna odluka čeka Semrush keyword research (Task #1)** da se ne pravi thin content za naselja bez realnog obima pretrage.
- Blog: svaka stranica zasebna (već tako, zadržati).
- Self-edit: Milan NE treba da sam menja sadržaj → nema potrebe za CMS-om, sadržaj ostaje hardkodovan u kodu (jednostavnije, brže).

### Mediji
- Hero slika: `montaza-gume-land-rover.jpg/webp` (već postoji u `public/`) — optimizovati kao LCP element sa `priority`.
- Video: Nikola je odobrio AI-generisan video (izbegava autorsko-pravni rizik tuđeg materijala sa interneta) — koristiti generate_video alat, mora biti lazy-loaded, ne sme uticati na LCP/CLS.

### Google Business Profile — živa ocena
- GBP je aktivan. Link: https://www.google.com/maps/place/Mobilni+Vulkanizer+Milan/@44.8092631,20.4348278,102378m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a637b18ce8a37:0x45f6e9ef011b2c0!8m2!3d44.8092631!4d20.4348278!16s%2Fg%2F11z5_7wp4p
- Place ID komponente: CID `0x45f6e9ef011b2c0`, feature ID `0x475a637b18ce8a37`. Koordinate: 44.8092631, 20.4348278.
- Nikola ima/može dobiti pristup Google nalogu povezanom sa GBP-om.
- Odluka: Google Places API (server-side fetch, keširano/revalidate npr. dnevno, nula klijentskog JS-a) za živu ocenu + broj recenzija. Mapa embed bez API ključa (`google.com/maps?q=...&output=embed`). Treba API ključ — Nikola će ga obezbediti kad dođemo do Task #5.

### Performanse i stack
- Cilj: <2s učitavanje na mobilnom (throttled), non-negotiable — ograničava koliko smelo idu animacije/3D.
- Nikola dao odrešene ruke za smelost dizajna/animacija, ALI performanse imaju prioritet — sve teško (3D/motion) mora biti lazy-loaded/code-split, CSS-only gde je moguće.
- Ostajemo na Next.js 14.2.15 (produkcija stabilna) — bez migracije na noviju verziju u sklopu ovog redizajna.
- Deploy bezbednost: rad u feature branch-u + preview link za odobrenje pre diranja produkcije (`mobilnivulkanizermilan.com`).

## Open questions / awaiting Nikola
- Nema blokirajućih pitanja trenutno — plan odobren za Task #1 (Semrush keyword research), zatim čeka eksplicitno "kreni" od Nikole pre nego što se dirne kod (po njegovom zahtevu).
