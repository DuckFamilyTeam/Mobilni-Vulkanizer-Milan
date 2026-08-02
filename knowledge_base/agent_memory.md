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
- Nema blokirajućih pitanja trenutno.

## FAZA 1 — završeno (2026-08-02), grana `redesign-2026`, commit d674051
- Semrush je bio bez API jedinica (mcp-access potrebno) — IA lokacija odlučena na osnovu poznate geografije, NIJE verifikovano pravim brojevima pretrage. Vidi Task #1 metadata.
- Dizajn sistem: `:root` u `app/globals.css` promenjen sa gold/cream na crno/crveno/hrom/plamen (58 hardkodovanih rgba(201,169,97,*) automatski postala rgba(216,30,40,*) preko sed-a, jer je čitav sajt već građen na CSS custom properties — nije trebalo ručno menjati svaki selektor). Dodati `--chrome`, `--chrome-dark`, `--flame-start`, `--flame-end`.
- Novi signature element: `app/components/SectionDivider.js` (ukršteni-ključ/felna motiv u hrom boji) + `.flame-cta` klasa (plamen glow na CTA dugmadima, animiran ali `prefers-reduced-motion` safe).
- Homepage (`app/page.js`) rasterećena: Pricing skraćen (uklonjen 4-faktora grid), Coverage skraćen (uklonjena duga lista opština, mapa sad koristi embed bez API ključa), Gallery sa 16 na 8 slika + link na novu `/galerija` stranicu (puna galerija tamo), Reviews sa 7 na 3 kartice, FAQ sa 12 na 6 pitanja, About skraćen. Hero slika promenjena na `montaza-gume-land-rover.webp` po Nikolinom zahtevu.
- Nova stranica `app/galerija/page.js` sa svih 16 slika + lightbox (radi jer `ClientEffects` je globalan u layout.js).
- Header.js nav: "Galerija" sad vodi na `/galerija` umesto `/#galerija`.
- **VAŽNO — bezbednosni nalaz van plana:** `npm install` je otkrio da je Next.js 14.2.15 pogođen aktivnim CVE-2025-55184/CVE-2025-67779 (DoS, visoka ozbiljnost, BEZ workaround-a prema Vercel-u). Ažurirano na `next@14.2.35` (najnoviji patch u 14.x liniji, bez breaking promena — react ostaje `^18.2.0` kompatibilan). `npm audit` i dalje prijavljuje 2 nalaza koji zahtevaju Next 15/16 za potpuni fix (SSRF via rewrites, neautentifikovano otkrivanje Server Function endpointa) — **provereno da sajt trenutno NIJE izložen** (nema `rewrites()` u next.config.js, nema `'use server'` nigde u kodu). Migracija na Next 15/16 je odvojena, veća odluka za budućnost — ne blokira redizajn.
- Build environment napomena: node_modules na Windows-mount putanji je jako spor za `npm install`/`next build` (cross-OS I/O). Verifikacija urađena u `/tmp/verify-build` (native linux disk u sandboxu) — build prošao čisto (16/16 statičkih stranica, ~97KB First Load JS po stranici). Google Fonts fetch je blokiran u sandboxu (mrežni allowlist), pa je build u `/tmp` privremeno mokovan samo za tu proveru — **realni projekat (Windows mount) NIJE dirnut tom izmenom**, samo `package.json`/`package-lock.json` ažurirani na next@14.2.35.
- Commit napravljen na grani `redesign-2026` (nije mergovano u main, nije push-ovano na GitHub, nije deploy-ovano).
- Nikolina lokalna mašina: pošto je node_modules na njegovom Windows disku sad neusklađen sa package.json (next 14.2.35 vs instalirano 14.2.15), treba da pokrene `npm install` lokalno (na svom Windows-u, ne kroz ovaj sandbox) pre sledećeg `npm run dev`.

## FAZA 2 — završeno (2026-08-02), grana `redesign-2026`, commit `9d5ce54`
- Task #6 (video): pokušan AI video (Kling 3.0 Turbo, scena vulkanizera noću) — Nikola je odbio potrošnju kredita u trenutku generisanja. Odloženo, nije blokirajuće. Sajt radi potpuno dobro bez videa.
- Task #7 (SEO/schema pass) završen:
  - `public/sitemap.xml` — dodat `/galerija`.
  - `public/llms.txt` — dodat link ka `/galerija`.
  - Svih 6 lokacijskih stranica (`app/mobilni-vulkanizer-*/page.js`) prebačeno sa hardkodovane ocene `5.0/127` na **živu GBP ocenu** — isti `getGbpRating()` helper kao na početnoj, i u JSON-LD (`aggregateRating`) i u vidljivom `loc-stat-num` prikazu (gde postoji). Konzistentno sa početnom stranicom.
- Build verifikovan čist u `/tmp/verify-build`: 16/16 statičkih stranica, ~97.4KB First Load JS po stranici, nema regresije.
- Git lock fajlovi (`.git/index.lock`, `tmp_obj_*`) i dalje se pojavljuju povremeno na Windows-mount putanji — rešeno standardnim `mv` workaround-om, commit prošao čisto.

## FAZA 3 — završeno (2026-08-02), grana `redesign-2026`, commit `affe7dd`
- Video: Nikola je odbio AI-generisani video, pa je tražio realne kandidate — Unsplash nema video sekciju (proverено uživo), Pexels ima (besplatna licenca, ista logika kao AI opcija — bez autorskog rizika). Ponuđeno par kandidata fokusiranih na "probušena/pumpanje gume", Nikola je umesto linka **uploadovao svoj snimak** (`pumpanje_gume.mp4`, 28.5s, 2560×1440, h264, 30.7MB).
- Obrada: `ffmpeg` scale→1280×720, crf 27, bez audio trake (original nema zvuk), `+faststart` → `public/pumpanje-gume.mp4` (1.46MB, ~95% manje). Poster frame izvučen na 1.2s i konvertovan u `public/pumpanje-gume-poster.webp` (41KB).
- Nova sekcija na početnoj (`app/page.js`) posle "Kako funkcioniše" procesa, pre Coverage: "Kako izgleda intervencija na terenu" — `<video>` sa `poster`, `muted`, `loop`, `playsInline`, `preload="none"`, BEZ `src`-a inicijalno (samo `data-src`).
- `app/components/ClientEffects.js`: dodat drugi `IntersectionObserver` (`.lazy-video`) koji tek kad sekcija uđe u viewport postavlja `video.src`, zove `.load()` i `.play()` — video se ne preuzima uopšte dok korisnik ne dođe do te sekcije. Nula uticaja na LCP/First Load JS (build i dalje 97.4KB).
- CSS dodat u `globals.css`: `.video-showcase`, `.video-frame` (hrom border + crveni inner glow, konzistentno sa dizajn sistemom), `.lazy-video`.

## FAZA 4 — završeno (2026-08-02), grana `redesign-2026`, NIJE KOMITOVANO (vidi napomenu ispod)

**Ispravka:** `redesign-2026` JESTE mergovan u `main` (PR #1, #2) i JESTE deployed na produkciju — `mobilnivulkanizermilan.com` je od 2026-08-01/02 live sa redizajnom. Prethodna napomena "Deploy čeka tvoju akciju" u ovom fajlu je bila zastarela.

**Okidač:** Nikola je pokrenuo pravi PageSpeed Insights test na živom sajtu (Performance mobile=64/desktop=89, Accessibility=94, Best Practices=100, SEO=100) i tražio popravku do 100/100 + uklanjanje lažnog "5.0★/127+ recenzija" (potvrdio da NIJE realna ocena) + realni GBP podaci.

- **Realna GBP ocena verifikovana uživo** (Google Maps, CID `0x45f6e9ef011b2c0`): **4.9★, 57 recenzija, verifikovan profil**, "Open 24 hours". `app/lib/googlePlaces.js` FALLBACK ažuriran sa `5.0/127` na `4.9/57`. `app/layout.js` RootLayout postao async i sad koristi isti `getGbpRating()` za sitewide JSON-LD (ranije bio odvojen hardkodovan `5.0/127` objekat, nezavisan od helpera — to je bio propust). Uklonjeno "+" preterivanje iza broja recenzija u `GbpRating.js` i `page.js` (57+ → 57).
- **LCP bag pronađen i ispravljen:** `app/layout.js` preload je greškom ciljao sliku iz About sekcije (`mobilni-vulkanizer-milan-na-intervenciji-u-beogradu.webp`) umesto stvarne hero/LCP slike (`montaza-gume-land-rover.webp`). Ovo je verovatno bio najveći pojedinačni uzrok mobile LCP=11s u Lighthouse-u.
- **Slike optimizovane:** `convert-images.js` ažuriran (resize na 900w za galeriju/1000w za hero + quality 82→72, regenerisano iz izvornih .jpg fajlova da se izbegne dupla webp kompresija). 9 slika, ukupno ~2.1MB → ~960MB (55% manje): hero 330KB→188KB, ostale 27-83% manje pojedinačno.
- **`experimental.optimizeCss` (critters) testiran i ODBAČEN** — izolovano testirano u `/tmp` build-u, kompajlira čisto ali NE proizvodi nikakav vidljiv efekat (nema inline critical CSS, isti blocking `<link>`), a `critters` paket je arhiviran/neodržavan → nepotreban rizik za nula dobitka. Nije primenjeno na pravi projekat.
- **`browserslist` dodat** u `package.json` (moderni evergreen target) — cilja "Legacy JavaScript" audit nalaz, nizak rizik, mali/neizmerljiv dobitak lokalno (bundle size se nije promenio u /tmp build-u, ali je i dalje korektna praksa).
- **`ClientEffects.js` refaktorisan** — sav setup (FAQ, lightbox, reveal/video observeri, scroll, tracking) sad se izvršava unutar `requestIdleCallback` (sa `setTimeout` fallback za Safari) umesto direktno u `useEffect`, da ne blokira glavnu nit tokom hidratacije (cilja TBT=350ms i "Forced reflow" nalaz).
- **Accessibility kontrast popravke** (cilja 94→100, WCAG AA 4.5:1 za normalan tekst):
  - `--gold` (crvena, #d6202d) kao TEKST boja davala je samo 3.49-3.87:1 na tamnim pozadinama — fail za tekst koji nije "large text". Dodata nova varijabla `--gold-text: #e44853` (ista nijansa, posvetljena da prođe 4.5:1+ na sve 3 tamne pozadine) i primenjena na svih ~40 mesta gde se `--gold` koristila kao `color:` (tekst), UKLJUČUJUĆI 2 inline JSX stila u `Footer.js`/`GbpRating.js`. `--gold` NETAKNUTA za border/background (tamo važi labaviji 3:1 prag za UI elemente, original već prolazi).
  - `--text-dim` (#7a756d, 3.90-4.33:1, fail) — pronađena 3 preostala mesta u `globals.css` (linije ~2012/2795/2950: pricing hint, blog card date, blog meta separator) koja je PRETHODNA sesija (komit `aa44570`) propustila da popravi (ostavila je komentar "fail" na liniji 1258 ali samo tu jednu instancu popravila). Sve 3 prebačene na `--text-muted` (5.88-6.53:1, isti fix kao ranije).
  - `--chrome-dark`/`--emergency` proverene — koriste se samo za border/background, ne za tekst, nema akcije potrebne.
- Build verifikovan čist u `/tmp/vk-build` (native disk, font-fetch mokovan SAMO za tu proveru, isti pattern kao Faza 1): 16/16 statičkih stranica, ~97.4KB First Load JS (nepromenjeno — očekivano, ove izmene ne diraju JS bundle veličinu).

**⚠️ BLOKER — nije komitovano:** `.git/index.lock` i `.git/HEAD.lock` postoje u repo-u i ne mogu se obrisati iz sandboxa (`rm`/`mv`/`python os.remove` svi vraćaju "Operation not permitted", ali `truncate` radi — znači nešto na Windows strani (OneDrive sync? antivirus? otvoren git GUI/VS Code sa ovim repo-om?) drži file handle otvoren i sprečava brisanje/rename, iako je vlasništvo fajla ispravno na sandbox strani). `git add`/`git commit` ne rade dok se ovo ne reši. Sve izmene su realne, sačuvane na disku (18 fajlova, `git status` ih vidi kao modified), samo nisu komitovane. Nikola treba da:
  1. Zatvori sve git GUI alate/VS Code prozore koji imaju ovaj repo otvoren, proveri da OneDrive nije usred sinhronizacije foldera
  2. Obriše `.git\index.lock` i `.git\HEAD.lock` ručno (prazni fajlovi, bezbedno za brisanje) ILI samo pokuša `git add -A` — ako se lock sam oslobodio kad se proces koji ga drži zatvori, proći će
  3. `git add -A && git commit -m "..."` (predložena poruka data u chatu) `&& git push origin redesign-2026`
  4. `npm install` (package.json ima novi `browserslist` field, node_modules treba refresh)
  - Pošto je `main` već produkcija (ne `redesign-2026` kao preview), za produkciju treba i merge `redesign-2026` → `main` (npr. nov PR na GitHub-u) posle push-a, ili push direktno na `main` ako Nikola želi da preskoči preview korak ovaj put.
- `GOOGLE_PLACES_API_KEY` i dalje NIJE podešen na Vercel-u — sajt radi ispravno na fallback-u (sad tačnom, 4.9/57), ali za automatski živi update ocene treba dodati ključ: Vercel Dashboard → project `mobilni-vulkanizer-milan` → Settings → Environment Variables.

## FAZA 5 — AI/Google vidljivost audit (2026-08-02), isto NIJE KOMITOVANO

**Okidač:** Nikola pitao da li su sve stranice vidljive AI sistemima i Google-u.

- **robots.txt / sitemap.xml** — live fetch potvrdio identično lokalnoj verziji, svi glavni AI crawler-i eksplicitno dozvoljeni (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, itd.), svih 13 URL-ova u sitemap-u, tačan metadata.
- **Canonical/noindex** — svih 13 stranica ima ispravan canonical tag, nema noindex nigde.
- **llms.txt / llms-full.txt** — live, dostupni, listaju svih 13 stranica. Pronađena i ispravljena lažna "5.0/127+" tvrdnja koju je prethodni fix-pass propustio (ovo su statički `public/` tekst fajlovi, ne React komponente, pa ih grep kroz `app/` nije pokrio): `public/llms.txt` linija 3, `public/llms-full.txt` linije 3 i 25 — sve tri promenjene sa "ocena 5.0/5.0 na osnovu 127+ recenzija" / "Ocena 5.0 — 127+ recenzija" na realno "4.9/5.0 na osnovu 57 Google recenzija" / "Ocena 4.9 — 57 recenzija".
- **Google `site:` provera uživo** — samo 9/13 stranica indeksirano. Nedostaju: `/galerija`, `/mobilni-vulkanizer-novi-beograd`, `/mobilni-vulkanizer-krnjaca`, `/mobilni-vulkanizer-autoput-beograd`. Potvrđeno da `/galerija` radi savršeno live (nije tehnički problem) — sitemap `lastmod` je 2026-08-02 (vrlo sveže), najverovatnije Google još nije stigao da ih iskrola. Nije podnet manuelni zahtev za indeksiranje kroz Search Console.

## Preostalo (sledeće faze)
- Task #9: **Commit + push FAZA 4 + FAZA 5 izmena — čeka Nikolinu akciju** (vidi bloker gore, isti lock problem).
- Nakon push-a: proveriti PageSpeed Insights ponovo (mobile + desktop) da se potvrde stvarni Performance/Accessibility skorovi — ovaj sandbox nema pristup pravom Chrome/Lighthouse-u (mrežni allowlist blokira Google Fonts/Chrome download), pa je sva performance/accessibility verifikacija u ovoj fazi rađena kroz build-time proveru + kod-nivo WCAG kontrast računanje, NE kroz pravi Lighthouse run. Realni skor treba potvrditi na živom preview/production URL-u.
- Predložiti Nikoli da preko Google Search Console pošalje manuelni zahtev za indeksiranje za 4 stranice koje nedostaju u Google indeksu.
- Ako Semrush jedinice budu dopunjene, preispitati IA odluku za lokacijske stranice (trenutno 6, predlog za širenje na 13 + hub je neverifikovan).
