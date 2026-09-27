# Analiza sajta — Mobilni Vulkanizer Milan

**Datum analize:** 2026-09-27
**Domen:** mobilnivulkanizermilan.com (Vercel, auto-deploy sa `main`)
**Repo:** `DuckFamilyTeam/Mobilni-Vulkanizer-Milan`
**Metod:** čitanje celog koda (`app/`, `middleware.js`, `next.config.js`), pravi `npm run build` (bez `npm install`, `node_modules` je već postojao), `npm audit`, live provera preko `curl` (headeri, robots.txt, prikazana ocena), poređenje sa `knowledge_base/agent_memory.md`.

**Napomena o memoriji agenta:** `agent_memory.md` je poslednji put ažuriran **2026-08-02**. Git log i komentari u kodu (`layout.js`, `ClientEffects.js`) pokazuju **15 komitova između 2026-09-03 i 2026-09-26** koji nisu upisani u memoriju — dodato je 6 novih lokacijskih stranica (Čukarica, Zvezdara, Batajnica, Aerodrom, Pančevo + Vulkanizerska radnja Borča), nov blog post, uklonjen Inter font, popravljen LCP video poster. Ovaj audit tretira **kod i live sajt kao izvor istine**, ne memoriju, i eksplicitno navodi gde se memorija pokazala zastarelom.

---

## Executive summary

**Ukupna ocena: 7,1 / 10**

Ovo je solidno, iznad-proseka izrađen sajt za nišu mobilnog vulkanizera — realan sadržaj, ozbiljan SEO/schema rad, mali JS budžet (First Load JS ~97,5 KB, izmereno pravim `npm run build`), i vidljiv trag pažljivog rada na performansama (LCP fix, kontrast fix, lazy video). Nije na 10/10 zbog kombinacije: jedne **kritične bezbednosne stavke** koja zahteva svesnu odluku (ne trivijalan fix), nekoliko **konkretnih, dokazanih bagova** (ne nagađanja — potvrđeno live) i zaostajanja SEO/AI-vidljivosti fajlova za rastom sajta.

**Top 5 stvari koje najviše dižu ocenu:**

1. **`npm audit` prijavljuje 1 kritičnu i 3 visoke ranjivosti**, uključujući `next` paket sam (fix zahteva major skok na Next 16.3.6 — ovo je veća odluka, ne "samo update"). Memorija iz avgusta tvrdi da je bezbednosna slika rešena — nije, pogoršala se otkrivanjem novih CVE-ova od avgusta do sad.
2. **Cache-Control header za statične slike (.webp/.jpg/.png/.woff2) ne radi** — potvrđeno live (`curl -I`), server šalje `max-age=0, must-revalidate` umesto planiranog `max-age=31536000, immutable`. Regex u `next.config.js` je pogrešno napisan i tiho ne pogađa nijednu putanju.
3. **`llms.txt` i `llms-full.txt` zastareli — nedostaje 6 od 12 lokacijskih stranica** i najnoviji blog post. AI sistemi (ChatGPT, Perplexity, Claude) koji čitaju ove fajlove ne vide skoro polovinu sajta, iako `sitemap.xml` (koji se generiše/održava odvojeno) ima svih 19 URL-ova tačno.
4. **Živa GBP ocena i dalje pokazuje hardkodovani fallback (4,9★/57)**, potvrđeno live u HTML-u — `GOOGLE_PLACES_API_KEY` postoji lokalno u `.env.local`, ali (po sopstvenoj napomeni u kodu) nikad nije dodat na Vercel, pa se realna ocena od pre skoro dva meseca nikad ne osvežava.
5. **Nema "skip to content" linka** (WCAG 2.4.1) i Header/Footer navigacija linkuje samo 6 od 12 lokacijskih stranica (ostalih 6 dostupno je samo preko sekcije na početnoj i sitemap-a) — nekonzistentna interna arhitektura linkova.

Nijedna od ovih tačaka nije razlog za paniku — sajt radi, konvertuje, i ne curi tajne — ali sve su konkretne, proverljive i popravljive u okviru sat-dva do dva dana rada.

---

## Primenjene izmene (2026-09-27, posle odobrenja)

Nikola je posle prvog čitanja izveštaja tražio da se odmah urade popravke sa liste "Kritično" + većina "Važno", uz poseban fokus na brzinu učitavanja ispod 2s. Sve izmene su rađene **isključivo u radnom stablu** — nema commit-a, nema push-a, nema deploy-a. Repo i dalje NIJE git repozitorijum sa aktivnim commit istorijom za ove izmene; `git status --short` posle svih izmena pokazuje samo modifikovane/nove fajlove, ništa nije staged niti komitovano.

### Urađeno

1. **Cache-Control regex u `next.config.js` — popravljeno i empirijski verifikovano.** Sva 4 pravila (`.webp`, `.jpg`, `.png`, `.woff2`) promenjena sa slomljenog `'/(:path*\\.webp)'` na ispravan `'/:path*.webp'`. Ovo NISAM samo "popravio i nadao se" — testirao sam oba patterna (stari i novi) direktno kroz `next/dist/compiled/path-to-regexp` (isti modul koji Next.js interno koristi za `headers()`):
   - Stari pattern: kompajlira se u regex koji traži **doslovnu** putanju `/:path*.webp` kao string — nikad ne pogađa nijedan stvaran fajl (`/logo.webp` → `false`). Ovo potvrđuje 100% da je bag bio pravi, ne pretpostavka.
   - Novi pattern: `/logo.webp` → `true`, `/some/nested/file.webp` → `true`, `/montaza-gume-land-rover.jpg` → `false` (ispravno ne pogađa .jpg pattern). Radi tačno kako je nameravano.
   - **Ograničenje:** ne mogu da pokrenem `curl -I` na produkciji da potvrdim live header dok se ovo ne deploy-uje — to ostaje da se proveri posle push-a (isti `curl -I https://www.mobilnivulkanizermilan.com/logo.webp` komandom iz izveštaja, sad bi trebalo da vrati `max-age=31536000, immutable`).

2. **`public/llms.txt` i `public/llms-full.txt` ažurirani** — dodato svih 6 nedostajućih lokacijskih stranica (Čukarica, Zvezdara, Batajnica, Aerodrom, Pančevo, Vulkanizerska radnja Borča) i najnoviji blog post ("Hotel za gume u Beogradu"), isti format kao postojeće sekcije. Sad oba fajla nabrajaju svih 12 lokacijskih stranica + svih 5 blog postova, usklađeno sa `sitemap.xml`.

3. **Skip-to-content link dodat** — `app/layout.js`, prvi element u `<body>`, `<a href="#main-content" className="skip-link">Preskoči na sadržaj</a>`. CSS u `app/globals.css` (`.skip-link` / `.skip-link:focus`): van ekrana (`top: -100px`) dok nije fokusiran, klizi na vidljivu poziciju na Tab. Standardan, proveren pattern, ne remeti postojeći vizuelni dizajn dok se ne koristi tastaturom.

4. **Header/Footer navigacija proširena na svih 12 lokacijskih stranica** — u `Footer.js` "Lokacije" kolonu i u `Header.js` mobile drawer "Po lokacijama" sekciju. **Odluka o desktop glavnom nav-u (`Header.js` gornja traka):** NISAM dodao svih 12 pojedinačnih linkova tamo — glavni nav već ima 9 stavki (Usluge/Lokacije/Radnja Borča/Cenovnik/Galerija/Recenzije/FAQ/Kontakt/Blog), dodavanje 12 više bi ga pretvorilo u nečitljivu traku ili zahtevalo dropdown/mega-meni, što je veća UI izmena van bezbednog obima "popravi bag, ne redizajniraj". Glavni nav zadržava jedan link "Lokacije" (`/#lokacije`) koji vodi na sekciju na početnoj gde su već sve 12 stranice (ovo je bilo tačno i pre izmene). Footer i mobile drawer su prirodni kontekst za punu listu (već su bili liste, samo nepotpune) i sad su kompletni na svakoj stranici sajta, ne samo na početnoj.

5. **Geo-koordinate ujednačene na sva 3 mesta — provereno, ne pretpostavljeno koja je tačna.** Pre izmene sam nezavisno proverio koji od tri para (44.787197/20.457273 generički centar Beograda; 44.8812156/20.4656484 iz `sameAs` linka; 44.8092631/20.4348278 iz `GbpRating.js` linka) zapravo odgovara stvarnoj adresi biznisa: geokodirao sam **"Zrenjaninski put 146b, Beograd"** (fizička adresa radnje iz Footer-a/`vulkanizerska-radnja-borca` stranice) preko javnog OpenStreetMap Nominatim servisa (bez API ključa, bez zaobilaženja ičije autorizacije) → **44.8804936, 20.4659396**. Ovo je ~90m od koordinata u `sameAs` linku (44.8812156, 20.4656484) — isti blok zgrada — i ~8km od koordinata koje su ranije bile u `GbpRating.js` i u glavnom JSON-LD (44.809.../44.787...), koje pripadaju sasvim drugom delu grada. Zaključak: `sameAs` link je bio tačan, ostala dva mesta nisu. Ažurirano: `layout.js` (`geo.position`, `ICBM` meta, glavni `GeoCoordinates` u JSON-LD) i `GbpRating.js` (link "Pogledaj sve recenzije") sad koriste isti, provereni par 44.8812156/20.4656484. `sameAs` link nije menjan (već je bio tačan).

   **Napomena van traženog obima, ali direktno relevantna:** dok sam pokušavao da ovo dodatno potvrdim preko Google Places API-ja (istim ključem koji projekat već koristi, isti server-side poziv kao `googlePlaces.js`), dobio sam `403 API_KEY_HTTP_REFERRER_BLOCKED` — ključ je ograničen na HTTP referrer. **Ovo je verovatno pravi uzrok** zašto živa GBP ocena i dalje pokazuje hardkodovani fallback (4,9★/57) čak i ako je ključ dodat na Vercel: server-side Next.js poziv (iz Node/Edge okruženja, bez browsera) ne šalje isti tip `Referer` header-a koji browser šalje, pa bi restrikcija blokirala poziv bez obzira na to da li je ključ podešen na Vercel-u. Nisam menjao ništa oko ovoga (nemam pristup Google Cloud Console-u da promenim restrikciju, i to je van obima ovog zadatka) — **ovo je novo, konkretno pitanje za Nikolu**: ključ u Google Cloud Console treba prebaciti sa "HTTP referrer" restrikcije na "IP addresses" (ili ukloniti restrikciju ako je nisko-rizično za ovaj use-case) da bi server-side poziv uopšte mogao da uspe.

6. **`npm audit fix` — samo `nanoid` i `sharp`, `next` netaknut, verifikovano tri puta (pre/posle/finalno).**
   - Otkriveno usput: `nanoid` ranjivost nije dolazila iz `next`-a samog, nego iz **`critters@0.0.23`** — paketa koji je (po `agent_memory.md` FAZA 4) testiran za `experimental.optimizeCss` i **eksplicitno odbačen** ("nije primenjeno na pravi projekat"), ali je ostao u `node_modules` kao `extraneous` (nije u `package.json`, ničim se ne zahteva, potvrđeno `npm ls` i grep-om da se `critters`/`optimizeCss` ne pominje nigde u `app/`/`next.config.js`).
   - Dodao `"overrides": { "nanoid": "^3.3.19" }` u `package.json` (standardan npm mehanizam za prisilnu verziju tranzitivne zavisnosti, bez diranja `next`-a) i bumpovao `sharp` sa `^0.35.2` na `^0.35.4` (u okviru istog, ne-major raspona — sama deklarisana verzija je već dozvoljavala 0.35.4, samo je instalirana verzija bila starija).
   - `npm install` je usput **obrisao 18 paketa**, uključujući ceo `critters` lanac (bio je zaista mrtav teret).
   - **Rezultat, potvrđen `npm audit --json` posle:** `nanoid` sad `3.3.19` (čist), `sharp` sad `0.35.4` (čist). Ostaju tačno 2 nalaza, oba eksplicitno vezana za `next@16.3.6` major skok (`next` sam — kritično, i `postcss@8.4.31` koji je `next`-ova sopstvena, ne critters-ova, tranzitivna zavisnost) — **ovo je namerno netaknuto**, čeka poseban razgovor.

7. **Fokus trap u mobile drawer-u (`Header.js`)** — dodat pravi Tab/Shift+Tab ciklus (ref na panel, `querySelectorAll` fokusabilnih elemenata pri svakom Tab pritisku, `preventDefault` + ručno prebacivanje fokusa na prvi/poslednji element na granicama). Fokus automatski ide na prvi element panela pri otvaranju i vraća se na hamburger dugme pri zatvaranju (standardan dijalog-obrazac). Dodat `aria-modal="true"` na panel. ESC i klik-van-panela i dalje rade kao pre.

8. **9 neiskorišćenih `.jpg` fajlova premeštenih iz `public/` u novi `assets-source/` folder** (van public rute, van budućeg deploy-a). `convert-images.js` ažuriran da čita izvore iz `assets-source/` a piše `.webp` izlaz i dalje u `public/` — proverio sam (bez pokretanja same konverzije, samo `fs.existsSync` dry-run na svih 10 unosa iz `conversions` niza) da svi putevi tačno pogađaju premeštene fajlove, nema nijednog "MISSING". Usput nađen i premešten i `intervencija-u-toku.jpg` — deseti `.jpg` u `public/`, koji **nije uopšte bio deo `convert-images.js` konverzija** (ni pre ni posle), znači je bio siroče i pre ove izmene; sad je bar van public/, ali vredi pitati Nikolu da li je uopšte još uvek potreban.

### Ostavljeno netaknuto (namerno, čeka Nikolinu odluku)

- **`middleware.js` consent-cookie logika** — pokušao sam da proverim da li GTM kontejner (`GTM-MKN47RW3`) ima varijablu koja čita `mvm_consent_region`, preko GTM MCP alata dostupnog u ovoj sesiji. Alat je vratio `Authentication error: Authentication required` — nemam pristup GTM nalogu u ovoj sesiji. Middleware nije menjan niti uklonjen. **Ovo ostaje otvoreno pitanje**: neko sa pristupom GTM nalogu treba da proveri da li postoji varijabla/trigger koji čita ovaj kolačić; ako ne postoji, treba odlučiti da li se dovršava (consent banner + `gtag('consent',...)`) ili uklanja middleware.
- **`next@16.3.6` major upgrade** — nije dirano, kako je traženo. I dalje ostaju 1 kritična + 1 visoka ranjivost vezane za ovo.
- **"500+ zadovoljnih klijenata" / "A+ Premium servis"** — tekst nije menjan. Predlog formulacije ako Nikola želi manje izloženu tvrdnju: zameniti "500+ Zadovoljnih klijenata" sa nečim što ne zvuči kao tačan, proverljiv broj — npr. "Stotine rešenih intervencija" ili "10+ godina na terenu" (ovo drugo već postoji kao odvojena tvrdnja i jeste proverljivo/tačno po memoriji).

### Fokus: brzina učitavanja < 2s

**Šta sam proverio i uradio:**

- **GTM `strategy` u `layout.js` — NIJE menjano, namerno.** `agent_memory.md` (2026-09-09) dokumentuje da je `strategy="lazyOnload"` bio isprobavan i **odbačen** jer je kasnio za klikom na "Pozovi Milana". Analizirao sam zašto: klik-tracking u `ClientEffects.js` radi preko `window.dataLayer.push(...)`, što samo po sebi ne zavisi od toga da li je `gtm.js` već učitan (GTM-ov sopstveni obrazac je da `dataLayer` niz baferuje evente pre nego što se `gtm.js` izvrši). Problem sa `lazyOnload` nije bio gubitak eventa u nizu — problem je što `lazyOnload` čeka pun `window.load` + browser idle, a korisnik koji tapne "Pozovi" na mobilnom često odmah prebaci telefon u dialer/pozadinu; ako `gtm.js` fajl u tom trenutku još nije ni počeo da se preuzima (a `lazyOnload` ga svesno odlaže), taj bafer nikad ne stigne da se pošalje GTM serveru jer skripta nikad ne izvrši `gtm.js`-ov mehanizam koji čita `dataLayer`. Ovo je bila ispravna, promišljena odluka u avgustu, ne previd — **vraćanje na `lazyOnload` radi PSI "unused JavaScript" nalaza bi verovatno ponovo pokvarilo tačno ono što je već popravljeno**, pa nisam menjao. Da se ovo ipak isproba (npr. `next/script` `strategy="worker"` preko Partytown-a, koji izmešta GTM u web worker bez odlaganja učitavanja) — to je veća, rizičnija izmena (neki GTM tagovi zahtevaju direktan pristup glavnom threadu/DOM-u) koja zaslužuje sopstveni test ciklus, ne nešto što sam uveo u ovom prolazu bez mogućnosti da to i vizuelno/funkcionalno proverim.
- **CSS delivery — proverio stvarno stanje u build output-u, ne pretpostavio.** `app/globals.css` (sada ~3520 linija) se kompajlira u **jedan jedini CSS chunk deljen na svim rutama** (`\.next/static/css/*.css`, izmereno **59,6 KB** posle minifikacije) — Next.js App Router ne radi automatski per-route CSS code-splitting za jedan globalno importovan CSS fajl importovan u `layout.js`; ovo JESTE očekivano ponašanje za ovu arhitekturu (jedan `import './globals.css'` na root nivou), ne bag. Prednost: fajl se preuzme jednom i keš-uje (sad, posle fix-a iz stavke 1, i sa ispravnim `immutable` headerom) za sve naredne navigacije po sajtu — dobro za posetioca koji gleda više lokacijskih stranica. Mana: prvi posetilac na bilo koju stranicu mora da preuzme svih 59,6 KB CSS-a odjednom, uključujući pravila za stranice koje možda nikad neće posetiti. Critical-CSS ekstrakcija (`critters`) je već isprobana i odbačena u avgustu (dokumentovano, i bez merljivog efekta) — nisam ponovo probao istu stvar. Ovo ostaje kao mogući, ali rizičniji sledeći korak (ručno izdvajanje "above the fold" CSS-a u `<style>` inline blok u `layout.js` je izvodljivo, ali zahteva pažljivo ručno održavanje i nije nešto što bih uveo bez punog vizuelnog test ciklusa).
- **Hero slika `priority`/`loading` ponašanje — potvrđeno netaknuto.** Nisam dirao `app/page.js`. I dalje `loading="lazy"` bez `priority` na hero slici (h1 tekst je i dalje LCP element na mobilnom, po dokumentovanoj odluci od 2026-09-25) — nema regresije.
- **`npm run build` posle SVIH izmena — čist, 23/23 stranica.** First Load JS: `/` 103 kB (nepromenjeno), sve ostale rute **97,9 kB** (bilo 97,5 kB — porast od 0,4 kB, iz `useRef`/focus-trap logike u `Header.js`; zanemarljivo, u granicama merne greške). Middleware bundle nepromenjen, 26,7 kB.

**Iskreno o "< 2s":** Ništa što sam uradio u ovom prolazu ne menja JS/CSS budžet u meri koja bi sama po sebi pomerila mobilni PSI Performance sa (poslednje izmerenih, 2026-08-02) 83 na neki tačno predvidiv broj — cache-header fix pomaže **ponovnim** posetama i navigaciji između stranica (manje round-trip-ova za slike/fontove), ne prvom, hladnom mobilnom load-u koji PageSpeed Insights meri. Za prvi load, glavni preostali budžet su: 87,3 kB deljeni JS + do 59,6 kB CSS + GTM/GA4 payload (van naše kontrole bez pristupa GTM nalogu) + hero slika. Da bi se "< 2s ispod 2 sekunde" **potvrdilo**, a ne pretpostavilo, potreban je: (1) deploy ovih izmena, (2) svež PageSpeed Insights test na live URL-u sa throttled mobilnim profilom — ovo eksplicitno NISAM mogao pouzdano da simuliram lokalno (lokalni `next build` ne uključuje network throttling, CDN cache-ove, GTM payload veličinu niti realan uređaj). Moja procena: cache-header fix + postojeći mali JS budžet stavljaju sajt u realnu blizinu 2s cilja na dobroj mreži, ali "< 2s" na **throttled mobilnom** (PSI-jev standardni test) zavisi najviše od GTM/GA4 payload-a koji nije u ovom kodu i koji nisam mogao da izmerim ni promenim ovaj put.

---

## Primenjene izmene — Krug 2 (2026-09-27, posle live PSI testa)

Kontekst: prošli krug fixeva je deploy-ovan (Nikola je push-ovao preko GitHub Desktop-a). Pravi PageSpeed Insights test (mobile, throttled, Lighthouse 13.5.0, Slow 4G) je posle toga izmerio: **Performance 93** (bilo 62→83 u avgustu), Accessibility 100, Best Practices 100, SEO 100, Agentic Browsing 3/3, **LCP 1,8s / FCP 1,4s / TBT 290ms / CLS 0 / Speed Index 3,1s**. Cilj "<2s" je postignut (LCP 1,8s). Nikola sad traži Performance 93→100. Otvorio sam pravi PSI izveštaj u browseru i **razrastio svaki nalaz pojedinačno** (ne čitao samo naslove) da vidim tačne resurse — sve niže brojke su iz tog izveštaja, ne procena.

Ponovo: sve izmene su **samo u radnom stablu**, nema commit/push (Nikola to radi sam).

### Tačni nalazi iz PSI-ja (razrasteno, ne sa naslovne stranice)

| Nalaz | Tačan resurs | Brojka |
|---|---|---|
| Render-blocking requests | `css/1b543c18aa917aeb.css` (naš CSS, 1st party) | 12,9 KiB, 160 ms → Est. 770ms savings |
| Use efficient cache lifetimes | `/wcm/loader.js` (**www.gstatic.com**, 3rd party) | 3 KiB, TTL 1h |
| Improve image delivery | `/logo.webp` — servira se 200×200, prikazuje se ~63×63 | 8,3 KiB → Est. 7,6 KiB savings |
| Legacy JavaScript | `chunks/117-....js` — `trimStart`/`trimEnd`/`Array.prototype.at`/`flat`/`flatMap`/`Object.fromEntries`/`Object.hasOwn` polyfili | 11,6 KiB "wasted" |
| Reduce unused JavaScript | **Google Tag Manager, tačno 3 odvojena skripta:**<br>• `gtag/js?id=G-6D2KDDJT9X` (GA4)<br>• `gtag/js?id=AW-180...` (**Google Ads conversion** — nova informacija, nije bila u memoriji)<br>• `gtm.js?id=GTM-MKN47RW3` | 496,7 KiB preneseno, 213,3 KiB "neiskorišćeno" |
| Avoid non-composited animations | `span.live-pulse` (zeleni "Trenutno dostupan" indikator) — **NE** `.flame-cta` kako je pretpostavljeno u zahtevu | animira `box-shadow` |
| Minimize main-thread work / 6 long tasks | nije pojedinačno razrasteno u PSI UI (agregatna 2,1s brojka), ali se vremenski i po redu veličine poklapa sa parsiranjem/izvršavanjem gornja 3 GTM skripta | 2,1 s ukupno |

### Urađeno (nisko-rizično, sprovedeno)

1. **Logo — regenerisan u pravoj veličini.** `/logo.webp` (200×200, korišćen u Header/Footer na 44px CSS prikazu) zamenjen sa novim `/logo-header.webp` (132×132 — pokriva i 3× DPR telefone na 44px, sigurnija margina od PSI-jevog izmerenog 63×63 na jednom test uređaju). Kvalitet 82 — vizuelno uporedio oba fajla (`Read` alat, side-by-side), nema primetne razlike na logo/tekst grafici. **8,3 KB → 3,9 KB** (−4,4 KB, ~53%). `logo.png`/`logo.webp` (200×200) NISU dirani — i dalje se koriste za OG/Twitter/favicon u `layout.js`, gde 200×200 ima smisla. `Header.js` i `Footer.js` ažurirani da koriste novi fajl. `convert-images.js` proširen sa reproduktibilnim korakom za generisanje `logo-header.webp` (komentar objašnjava zašto 132px/quality 82), tako da se ovo ne izgubi pri sledećoj regeneraciji slika.

2. **Non-composited animacija — `.live-pulse` prepravljen sa `box-shadow` na `transform`/`opacity`.** PSI je tačno naveo `span.live-pulse`, ne `.flame-cta` kako je zahtev pretpostavio — proverio sam u razrastenom nalazu pre nego što sam bilo šta menjao. Stari `@keyframes pulse` je animirao `box-shadow` (repaint svaki frejm, sve tri faze). Novi pristup: `.live-pulse` dobija `position: relative`, a vizuelni "rastući prsten" je premešten na `::after` pseudo-element (24×24, centriran, `background` fiksne boje) koji animira **samo** `transform: scale()` i `opacity` — obe compositor-only osobine (GPU, bez repaint-a). Vizuelni rezultat je identičan (isti rastući, iščezavajući zeleni prsten oko tačke), dodat je i `@media (prefers-reduced-motion: reduce)` gard (bonus, konzistentno sa `.flame-cta` koji to već ima). Nema layout uticaja (pseudo-element je `position: absolute`, van flow-a, `.live-pulse` zadržava iste 8×8px dimenzije za layout) — CLS ostaje 0.

3. **`npm run build` posle oba fixa — čist, 23/23 stranica, identičan First Load JS** (103 kB / 97,9 kB, nepromenjeno — očekivano, ovo su CSS/slika izmene, ne JS). CSS chunk 60.998 B → 61.516 B (+518 B, zanemarljivo, od nove `.skip-link`/`.live-pulse` CSS-a iz oba kruga).

### Istraženo, ALI namerno NIJE primenjeno (dokumentovano, čeka odluku)

4. **Render-blocking CSS (770ms) — nema bezbednog fix-a u Next 14.2.x bez ponavljanja već odbačenog eksperimenta.** Next.js App Router automatski upravlja `<link rel="stylesheet">` tagom za globalno importovan CSS (`import './globals.css'` u `layout.js`) — nema javnog API-ja da se on označi kao ne-blokirajući. Jedina dva poznata rešenja:
   - `experimental.optimizeCss` (`critters`) — **već isprobano i odbačeno u avgustu** (memorija: "kompajlira čisto ali ne proizvodi nikakav vidljiv efekat, critters je arhiviran/neodržavan"). Nisam ponovo probao istu stvar.
   - Ručno razdvajanje CSS-a na "kritičan" (header/hero, mali, ostaje blokirajući) i "nekritičan" (sve ostalo, učitava se preko `<link rel="preload" as="style" onLoad="...">` trika) — ovo JESTE izvodljivo i JESTE pravo rešenje za ovaj nalaz, ali zahteva ručno tačno razvrstavanje CSS pravila za **20 različitih tipova stranica** (početna, 12 lokacijskih, blog, galerija...), i greška (izostavljeno pravilo koje je ipak iznad preloma na nekoj stranici) bi izazvala vidljiv "flash of unstyled content" koji ne bih mogao da uhvatim bez pune vizuelne provere na svakoj stranici. Ovo NISAM radio u ovom prolazu — rizik od tihog vizuelnog kvara je veći od 770ms (Lighthouse-ova optimistična procena) dobitka. **Preporuka: raditi ovo samo kao poseban zadatak sa punim screenshot/vizuelnim ciklusom, ne kao brz fix.**

5. **Legacy JavaScript (11,6 KiB) — potvrđeno da je ovo Next.js-ov sopstveni, hardkodovani polyfill modul, ne nešto što naš `browserslist` kontroliše.** Otvorio sam kompajlirani `chunks/117-*.js` i pronašao tačan izvor: ručno pisan (ne `core-js`) polyfill blok za `trimStart`/`trimEnd`/`Symbol.prototype.description`/`Array.prototype.flat`/`flatMap`/`Promise.prototype.finally`/`Object.fromEntries`/`Array.prototype.at`/`Object.hasOwn`/`URL.canParse` — ovo je deo Next.js 14 sopstvenog build sistema (`next/dist/build/polyfills/...`), ubačen u deljeni "framework" chunk **bez obzira** na naš `browserslist` (koji je već postavljen na moderne browsere). Nema `.babelrc`/`babel.config.js` u projektu koji bi ovo mogao da nadjača. Jedini poznati načini da se ovo ukloni: (a) upgrade na noviji Next (van obima, već odloženo), ili (b) ručno webpack `resolve.alias` hakovanje da se ovaj Next-ov interni modul zameni praznim — nepodržano, krhko na svaki Next patch, previsok rizik za 11,6 KiB. **Nije primenjeno, dokumentovano kao prihvaćen tehnički dug vezan za isti Next-major kompromis.**

6. **GTM payload (213 KiB) — Partytown NIJE implementiran. Dokumentovan kao opcija, čeka eksplicitno odobrenje.** Ovo je najveći pojedinačni lever (213 KiB od ukupno ~213+12+11.6 KiB "trošenja"), ali i najrizičniji za ovaj konkretan sajt, iz dva razloga specifična za ovaj GTM kontejner (ne generički):
   - PSI je otkrio da GTM ovde ne učitava samo GA4 (`G-6D2KDDJT9X`) nego i **Google Ads conversion tracking** (`AW-180...`, prefiks `AW-` = Google Ads, ne GA4) — ovo NIJE pomenuto nigde u `agent_memory.md`. Ako Milan (ili neko u ime agencije) vodi Google Ads kampanje na ovaj sajt, konverzije iz tih kampanja zavise od ovog taga. Bilo kakva promena u načinu učitavanja GTM-a nosi rizik da poremeti atribuciju plaćenih konverzija, ne samo GA4 analitiku.
   - Klik-tracking na tel/WhatsApp/Viber (najvredniji event na sajtu, po prošlom krugu izmena namerno RANO okinut) zavisi od toga da `gtm.js` na kraju stigne da izvrši i pročita `dataLayer` bafer. Partytown premešta IZVRŠAVANJE GTM-a u web worker — teoretski i dalje čita isti `dataLayer` (worker ima svoj proxy-ovan pristup `window`-u), ali GTM tagovi koji direktno manipulišu DOM-om (custom HTML tagovi, neki remarketing pikseli) mogu tiho da otkažu u worker okruženju bez ikakve vidljive greške u konzoli — ovo je poznato, dokumentovano ograničenje Partytown+GTM kombinacije, ne moja pretpostavka.
   
   **Zašto nisam implementirao kao "eksperiment" kako je ponuđeno u zahtevu:** da bih iskreno mogao da tvrdim "tracking i dalje radi", morao bih da deploy-ujem, otvorim live sajt u pravom browseru, kliknem "Pozovi"/WhatsApp/Viber i u GTM Preview modu (ili GA4/Google Ads real-time izveštaju) potvrdim da se i dalje beleže I obični eventi I Ads konverzija. Ovo zahteva pristup GTM/GA4/Ads nalozima i live deploy — nemam ni jedno ni drugo u ovoj sesiji (GTM MCP je vratio "Authentication required" i u prošlom i u ovom krugu). Bez te provere, "implementiraj pa vidi da li radi" bi značilo da Nikola otkrije da li je tracking pokvaren tek kad (ako) primeti da su Ads konverzije pale — to je upravo rizik koji je u zahtevu eksplicitno navedeno da izbegnem.
   
   **Šta bi trebalo uraditi ako se ovo prihvati:** `npm install @builder.io/partytown`, `npx partytown copylib public/~partytown` (kopira worker fajlove u `public/`), promena `<Script strategy="afterInteractive">` u `<Script strategy="worker">` za GTM inicijalizacioni tag u `layout.js`, zatim OBAVEZNO: (1) live deploy na preview URL (ne produkciju direktno), (2) ručni test klika na sva tri kontakt kanala uz GTM Preview mod otvoren, (3) provera da Google Ads Tag Assistant i dalje vidi `AW-180...` conversion fire, (4) tek onda merge u `main`. Ovo je 30-60 minuta posla + čekanje na realne podatke, ne nešto što se radi "u letu".

### Alternativa za GTM payload koja NE zahteva Partytown (ali zahteva GTM pristup)

Iz same PSI raščlanjenosti vidljivo je nešto popravljivo i BEZ Partytown rizika, ali **samo od strane nekog ko ima pristup GTM nalogu**: kontejner učitava `gtag.js` **dva puta nezavisno** — jednom za GA4 (`G-6D2KDDJT9X`, 188,2 KiB) i jednom za Google Ads (`AW-180...`, 158,0 KiB) — to su dva odvojena preuzimanja skoro identične gtag runtime biblioteke. Standardna GTM konfiguracija (GA4 Configuration tag + Google Ads Conversion Linker koji referencira ISTU GA4 config umesto da učitava sopstveni gtag) obično izbegava ovo dupliranje. Ovo bi realno moglo da smanji 100+ KiB bez ikakvog rizika po tracking (menja se SAMO kako se tagovi međusobno referenciraju unutar GTM-a, ne kod na sajtu) — ali zahteva nekoga sa pristupom GTM workspace-u da otvori kontejner i proveri konfiguraciju tagova. Zapisano ovde kao konkretan nalaz za taj razgovor, ne nešto što sam mogao sam da uradim (GTM MCP nedostupan, kao i prošli put).

### Realna procena: da li je 100/100 dostižno bez GTM/Partytown poteza

Ne iz ovog seta fixeva. Logo (~4,4 KB) i animacija (uklanja 1 od ~6 long-task uzročnika, verovatno mali TBT doprinos) su realni, ali mali pomaci — Performance skor na 90+ nivou reaguje najviše na TBT/long-tasks, a **6 long tasks i 290ms TBT su najverovatnije dominantno GTM/gtag parsiranje+izvršavanje** (3 skripte, 496,7 KiB ukupno, na glavnoj niti). Bez diranja GTM-a (Partytown ili sam kontejner), realno postižen dobitak ovim krugom je verovatno **93→94/95**, ne 93→100. Da bi se stiglo do 100, potreban je ili Partytown eksperiment (sa punim test protokolom iznad) ili GTM-kontejner-strana optimizacija (dupli gtag.js) — oba čekaju Nikolinu odluku i/ili pristup nalogu.

---

## 1. Kod i tehnička implementacija — 7/10

**Pozitivno:**
- Čista App Router struktura, dosledan pattern po lokacijskoj stranici (metadata → JSON-LD builder → server component koji poziva `getGbpRating()`).
- `app/lib/googlePlaces.js` je uzoran primer defanzivnog koda: `'server-only'` import, try/catch, tih fallback, keširanje `revalidate: 86400`. Nema šta da se zameri.
- Nema `console.log`, nema `TODO`/`FIXME`/`POPUNITI` markera, nema `lorem ipsum` — potvrđeno grep-om kroz ceo `app/` i `public/`.
- `.env.local` je ispravno u `.gitignore` (`.env*.local`), ključ nije procureo u repo.

**Bagovi (potvrđeni, ne pretpostavljeni):**

- **`next.config.js:24-47` — Cache-Control header pravilo je slomljeno.** Izvor:
  ```js
  { source: '/(:path*\\.webp)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }
  ```
  `source: '/(:path*\\.webp)'` nije validan Next.js path-to-regexp pattern za "sve putanje koje se završavaju na .webp" — ispravan zapis je `'/:path*.webp'` ili regex `'/(.*)\\.webp'`. Potvrđeno live: `curl -I https://www.mobilnivulkanizermilan.com/logo.webp` vraća `Cache-Control: public, max-age=0, must-revalidate`, ne planirani `immutable, max-age=31536000`. Isto pravilo (identičan pogrešan pattern) ponovljeno je 4 puta, za `.jpg`, `.png`, `.woff2` — sva četiri jednako ne rade. Efekat: svaki povratni posetilac ponovo revalidira svaku sliku umesto da je uzme direktno iz browser cache-a (Vercel edge cache i dalje pogađa, pa je efekat blaži nego što bi bio bez CDN-a, ali browser-level caching ne radi kako je nameravano).
  **Popravka:** promeniti sve 4 `source` vrednosti u `next.config.js` na ispravan pattern, npr. `'/:path*.webp'`, redeploy, pa ponovo `curl -I` da se potvrdi `immutable`.

- **`middleware.js` — mrtav kod, ili bar neverifikovana veza.** Middleware setuje `mvm_consent_region` kolačić (`open`/`restricted` po zemlji, GDPR namena) na svaku stranicu — potvrđeno live (`Set-Cookie: mvm_consent_region=open`). Ali **nigde u `app/` ne postoji kod koji taj kolačić čita** — nema consent banera, nema `gtag('consent', ...)` poziva, nema uslovnog renderovanja GTM-a. GTM se u `layout.js:237-247` učitava bezuslovno za svakog posetioca, bez obzira na `region`. Dve mogućnosti: (a) logika za pristanak živi isključivo unutar GTM kontejnera (nemoguće proveriti bez pristupa GTM nalogu), ili (b) ovo je nedovršena/napuštena funkcija. **Preporuka: proveriti u GTM-u da li postoji varijabla koja čita ovaj kolačić; ako ne postoji, ili ukloniti middleware (nepotreban Edge trošak na svaki request) ili dovršiti implementaciju** — trenutno stanje je rizično upravo za posetioce iz EU/UK/CH za koje je kolačić eksplicitno predviđen.

- **Nema ESLint konfiguracije.** `package.json` ima `"lint": "next lint"`, ali nema `eslint`/`eslint-config-next` ni u `dependencies` ni u `devDependencies`, niti je paket instaliran u `node_modules`. `npm run lint` bi trenutno pao ili tražio interaktivnu instalaciju. Nema automatske provere kvaliteta koda pre commit-a.

- **9 neiskorišćenih `.jpg` fajlova u `public/`** (izvor za `convert-images.js`, npr. `montaza-gume-land-rover.jpg` 255 KB, `land-rover-dizalica.jpg` 242 KB) — potvrđeno grep-om, nijedan `.jpg` se ne referencira iz `app/`. Ukupno ~1,9 MB mrtvog balasta koji je i dalje javno dostupan na produkciji (npr. `mobilnivulkanizermilan.com/montaza-gume-land-rover.jpg` se servira ako neko pogodi URL) i nepotrebno uvećava repo/deploy.
  **Popravka:** premestiti izvorne `.jpg` fajlove van `public/` (npr. u `assets-source/`) da ne budu deo produkcije.

**Ocena 7/10** — arhitektura i disciplina koda su iznad proseka za ovaj tip projekta, ali dva bagova (cache header, orphaned middleware) su realni, dokazani propusti koji rade suprotno od namere autora.

---

## 2. SEO / AEO — 7/10

**Pozitivno:**
- `sitemap.xml` je **tačan i ažuran** — svih 12 lokacijskih/uslužnih stranica + galerija + blog + 5 postova = 19 URL-ova, `lastmod` datumi realni (2026-09-24 za većinu, što se poklapa sa git log-om).
- `robots.txt` je izuzetno kompletan — eksplicitno dozvoljava sve relevantne AI crawlere (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, itd.), redak nivo pažnje za ovaj segment tržišta.
- JSON-LD je bogat: `AutoRepair`/`LocalBusiness` `@graph` na svakoj lokacijskoj stranici, `Service`, `FAQPage`, `BreadcrumbList`, `WebSite` sa `SearchAction`. Ispravno povezano preko `@id` referenci (`provider: {'@id': '.../#business'}`).
- Canonical tagovi prisutni na svim proverenim stranicama.
- Svaka lokacijska stranica ima sopstveni H1/meta title/description mapiran na ciljanu opštinu — nema masovnog copy-paste (proverio sam da fraza "U kombiju nosim kompresor..." postoji samo na `ceo-beograd` stranici, ne ponavlja se doslovno na drugima).

**Nalazi:**

- **`public/llms.txt` i `public/llms-full.txt` su zastareli — potvrđeno, ne pretpostavljeno.** Oba fajla nabrajaju samo **6 od 12** lokacijskih stranica (nedostaju Čukarica, Zvezdara, Batajnica, Aerodrom, Pančevo i Vulkanizerska radnja Borča) i **4 od 5** blog postova (nedostaje "Hotel za gume u Beogradu", najnoviji post, septembar 2026). Ovo direktno kontradiktorno tvrdnji u `agent_memory.md` FAZA 5 da su ovi fajlovi "live, dostupni, listaju svih 13 stranica" — ta tvrdnja je bila tačna 2026-08-02 kada je sajt imao 13 stranica, ali otad je dodato 6+1, i niko nije ažurirao `llms.txt`/`llms-full.txt`. Pošto AI sistemi (ChatGPT Search, Perplexity, Claude) ove fajlove tretiraju kao autoritativni sažetak sajta, trenutno **ne znaju** da sajt pokriva Čukaricu, Zvezdaru, Batajnicu, Aerodrom i Pančevo.
  **Popravka:** dopisati nedostajuće sekcije u oba fajla (15-ak minuta ručno, ili mala skripta koja generiše `llms.txt` iz liste stranica da se ovo ne ponavlja).

- **Header/Footer navigacija je nepotpuna u odnosu na stvarnu arhitekturu sajta.** `app/components/Header.js` (glavni nav i mobile drawer) i `app/components/Footer.js` linkuju samo na 6 lokacijskih stranica: ceo-beograd, novi-beograd, zemun, borča, krnjača, autoput-beograd. Ostalih 6 (Čukarica, Zvezdara, Batajnica, Aerodrom, Pančevo, Vulkanizerska radnja Borča — radnja jeste linkovana odvojeno) **nisu linkovani ni iz jednog globalnog elementa**, samo iz sekcije "Pronađite svoju lokaciju" na početnoj (`app/page.js`, sve stranice su tu, potvrđeno) i iz `sitemap.xml`. Nije kritično za indeksiranje (Google ionako ima sitemap + linkove sa početne), ali je nekonzistentno — posetilac na, recimo, blog stranici ili na `/mobilni-vulkanizer-zemun` nema nijedan direktan link ka Pančevu ili Zvezdari iz navigacije/footera, mora da se vrati na početnu.
  **Popravka:** proširiti footer "Lokacije" kolonu (`Footer.js:54-65`) na svih 12 stranica, ili dodati link "Sve lokacije →" ka sekciji na početnoj ako je prostor u navu ograničen.

- **Geo-koordinate nekonzistentne na 3 mesta.** `layout.js` metadata (`geo.position`, `ICBM`) i glavni `GeoCoordinates` u JSON-LD koriste `44.787197, 20.457273` (centar Beograda). `sameAs` Google Maps link u istom fajlu (`layout.js:166`) nosi koordinate `44.8812194, 20.4630735`. `GbpRating.js:32` (link "Pogledaj sve recenzije") koristi treći par, `44.8092631, 20.4348278`. CID (`0x45f6e9ef011b2c0`) je svuda isti, pa linkovi i dalje vode na isti GBP profil — ovo nije funkcionalna greška, ali je nemarno i vredi ujednačiti na jedan tačan par koordinata (verovatno onaj sa GBP profila).

- **Meta title homepage-a (60 karaktera tačno na granici) i lokacijskih stranica su solidni**, u okviru preporučenih dužina — nisam našao title preko 60 ili description van 140-160 opsega na proverenim stranicama.

**Ocena 7/10** — tehnički SEO temelj je jak (schema, sitemap, robots), ali AI-vidljivost fajlovi (koji su specifično naglašeni u memoriji kao "urađeno") nisu održavani uporedo sa rastom sajta, što je konkretan, merljiv propust.

---

## 3. Performanse — 8/10

**Napomena o metodu:** Uspeo sam da pokrenem pravi `npm run build` (node_modules je već postojao na disku, `npm install` nije bio potreban) i dobio stvarne, aktuelne brojke — ne procenu.

**Izmereno, live build (2026-09-27):**
```
Route                                       Size     First Load JS
/                                           6.57 kB    103 kB
/blog, /galerija, sve lokacijske stranice   1.46 kB    97.5 kB
+ First Load JS shared by all               87.3 kB
Middleware                                              26.7 kB
```
23/23 statičkih stranica generisano bez greške. Ovo se poklapa sa brojkom koju `agent_memory.md` navodi (~97,4 KB) — **ta tvrdnja je potvrđena tačna**, memorija ovde nije zastarela.

**Pozitivno:**
- First Load JS od ~97,5 KB je vrlo mali za sajt ove vrste (agencijski sajtovi tipično idu 150-300 KB+).
- Video (`pumpanje-gume.mp4`) je ispravno lenjo učitan preko `IntersectionObserver` — `preload="none"`, bez `src` do ulaska u viewport, potvrđeno u `ClientEffects.js:158-179`.
- Hero slika ispravno BEZ `priority`/`eager` na mobilnom (komentar u `page.js:130-133` objašnjava zašto — h1 je LCP element na mobilnom, ne slika) — ovo je netrivijalan, tačan zaključak koji pokazuje da je neko stvarno gledao Lighthouse breakdown, ne samo primenio default checklist.
- `sizes` atributi na `<img>`/`<Image>` su prisutni i realistični (npr. `(max-width: 640px) calc(50vw - 16px), 400px` za galeriju).
- Font strategija je promišljena: Inter uklonjen (sistemski font umesto), Bebas Neue i Playfair sa `display: 'optional'`, samo Playfair se preload-uje jer nosi H1.

**Nalazi:**
- **Cache-Control header bag (detaljno opisan u sekciji 1) direktno šteti performansama povratnih poseta** — bez `immutable`, browser mora HTTP round-trip (i dalje jeftin, 304 Not Modified, ali ne "zero-cost" kao immutable cache) za svaku sliku na svakoj poseti. Za mobilnog vulkanizera čiji posetioci su često isti ljudi koji se vraćaju (bookmark, "pozovi ponovo") ovo ima realan, mada mali, efekat.
- Memorija navodi da je poslednji pravi PageSpeed Insights test (FAZA 6, 2026-08-02) dao **Performance 62→83 na mobilnom** (LCP 9,5s→3,8s, TBT 490ms→200ms) i **Accessibility 94→100**. Ovo su brojke stare skoro 2 meseca — od tada je sajt narastao za 6 stranica i menjan je hero (uklonjen Inter font, promenjen `loading` na hero slici 2026-09-25). Novi pravi PSI test nije pokrenut u ovom audit-u (van obima — task je tražio da se ne diraju spoljni alati bez razloga, a PSI zahteva live URL i eksterni servis čiji rezultat ne mogu ovde da izvedem pouzdano bez pristupa pravom Lighthouse okruženju). **Preporuka: ponovo pokrenuti PSI/Lighthouse na live sajtu** da se potvrdi da li font-uklanjanje i novih 6 stranica nisu unele regresiju.
- `Content-Length: 142030` (139 KB) za HTML homepage-a (izmereno `curl -I`) je razumno za ovoliko sadržaja (813 linija JSX sa punim tekstom, FAQ, JSON-LD), nije problem sam po sebi.
- "Reduce unused JavaScript ~197 KiB" i "Legacy JavaScript ~12 KiB" nalazi iz FAZA 6 (verovatno GTM/GA4 payload) — memorija ih navodi kao neurešene, nema indikacije da su otad rešeni (nema izmena u `layout.js` GTM bloku od tada osim komentara).

**Ocena 8/10** — realni, izmereni rezultati (build, bundle size) su čvrsti i potvrđuju trud uložen u performanse; skidam poene za cache header bag i za to što nije bilo svežeg PSI merenja otkako je sajt narastao.

---

## 4. Pristupačnost (WCAG 2.2 AA) — 7/10

**Ograničenje analize:** Ovo je statička analiza koda, ne live Lighthouse/axe test niti screen-reader test. `agent_memory.md` navodi da je poslednji pravi PSI test (2026-08-02) dao **Accessibility 100/100** posle popravki kontrasta i heading order-a — ovo nisam mogao nezavisno da ponovim (van obima za ovaj audit), pa ga tretiram kao verovatno tačno za taj trenutak, ali ne i garantovano tačno danas nakon novih izmena.

**Pozitivno:**
- Dosledna upotreba `role`, `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-hidden` kroz `Header.js`, FAQ komponente, lightbox.
- Kontrast fix je dokumentovan i vidljiv u kodu: `--gold-text: #ff5c68` (posvetljeno sa originalnog #d6202d/#e44853 posle 2 runde realnih PSI merenja) — `globals.css:30-43` sa detaljnim komentarom zašto je svaka vrednost birana. Ovo je iznad proseka nivoa pažnje.
- Mobile drawer ima `role="dialog"`, ESC-to-close, `document.body.style.overflow = 'hidden'` dok je otvoren — ispravan fokus/scroll trap pattern.
- Slike imaju opisne, kontekstualne `alt` tekstove (ne generičke "slika 1") — npr. `galerija/page.js:26`: "Land Rover Defender na hidrauličnoj dizalici — skidanje točka na parkingu, mobilna vulkanizerska intervencija".

**Nalazi:**

- **Nema "skip to content" linka nigde na sajtu — potvrđeno grep-om ("skip" ne postoji nijednom u `app/`).** `<main id="main-content">` postoji na svakoj stranici, ali nijedan vidljivi/fokusabilni link na vrhu stranice ne vodi ka njemu. Ovo je WCAG 2.4.1 "Bypass Blocks" (nivo A, preduslov za AA) — korisnik tastature/screen readera mora da prođe kroz ceo header i nav na svakoj stranici da bi stigao do sadržaja.
  **Popravka:** dodati `<a href="#main-content" className="skip-link">Preskoči na sadržaj</a>` kao prvi element u `<body>` (u `layout.js`, pre `{children}`), vizuelno sakriven dok nije fokusiran.

- **Mobile drawer fokus trap nije potpun.** Kod zatvara scroll i hvata ESC, ali ne vidim `Tab`/`Shift+Tab` ciklus fokusa unutar otvorenog drawer-a (nema focus trap-a koji sprečava da Tab izađe iza overlay-a na elemente ispod). Manji propust, ali relevantan za tastaturne korisnike na mobilnom meniju.

- **Kontrast i heading-order fixevi su dokumentovani samo za stanje sajta na 2026-08-02.** Otad su dodate nove stranice (Čukarica, Zvezdara, Batajnica, Aerodrom, Pančevo) — sve dele isti CSS/komponente pa nasleđuju iste fixeve, ali nisu pojedinačno navedene kao testirane u memoriji. Nizak rizik (isti template), ali vredi jedan brz vizuelni prolaz.

- **`viewport` meta ima `viewportFit: 'cover'`** (layout.js:83-86) što je ispravno za notch-uređaje, ali proverite da `env(safe-area-inset-*)` postoji u CSS-u gde je relevantno (npr. sticky call bar na dnu ekrana) — nisam video eksplicitnu upotrebu u `globals.css` grep-u; ako nije tu, sticky dugmad mogu biti delimično prekrivena gesture-barom na iPhone-ima bez home dugmeta.

**Ocena 7/10** — vidljiv, dokumentovan trud i dobra baza (kontrast, aria, alt tekst), ali "skip link" propust je konkretan i lako proverljiv AA/A nedostatak koji bi svaki nezavisni accessibility audit odmah označio.

---

## 5. Sadržaj i copywriting — 8/10

**Pozitivno:**
- Ton je tačno onakav kakav brief traži — direktan, bez korporativnog praznog hoda, hitnost bez panike. Primer (`ceo-beograd/page.js:254-261`): "Razlog zašto tako kratko vreme uopšte stoji na ovoj stranici nije reklamni. Ja ceo dan radim u pokretu..." — ovo je iskreno objašnjenje umesto praznog marketinškog obećanja, tačno traženi nivo poverenja.
- FAQ sekcije su specifične i korisne, ne generičke ("Radite li na kamionima?" → "Ne. ...da vam ne bih gubio vreme." — direktno priznanje ograničenja, gradi poverenje).
- Blog sadržaj je stručan i tačan (npr. zakonski podaci o zimskim gumama u Srbiji sa konkretnim kaznama, RFT tehnički detalji) — nema površnog "SEO filler" teksta.
- Nema doslovnog copy-paste teksta između lokacijskih stranica (proverio uzorkom) — svaka ima svoju geografsku specifičnost (Novi Beograd pominje blokove/Ušće/Arenu, Zemun pominje Gardoš/Altinu, itd.), što je i SEO-ispravno i čitljivo.

**Nalazi:**

- **"500+ Zadovoljnih klijenata" (hero-stats, `page.js:111-112`) je nepotkrepljena brojka.** Nema izvora u brifu ni u memoriji za ovaj broj, a stoji odmah pored **realne, verifikovane** GBP brojke (4,9★/57 recenzija). Kontrast između "500+" (marketinška procena) i "57" (tačan, proveren broj) na istom redu je upravo ono što narušava poverenje kad posetilac primeti da 500 klijenata nije ostavilo ni 60 recenzija — realno i objašnjivo (većina ljudi ne ostavlja recenziju), ali vredi ili potkrepiti brojku (broj godina rada × prosečan broj intervencija, ako Milan ima predstavu) ili je preformulisati u nešto manje proverljivo-zvučno, npr. "Stotine rešenih intervencija".
- **Hero "A+" / "Premium servis" bedž** (`page.js:134-137`) je generička samo-dodeljena oznaka bez definisanog izvora (nije akreditacija, nije GBP kategorija) — nizak rizik, ali spada u istu kategoriju neproverljivih tvrdnji.
- Nema kontakt/lead formulara nigde na sajtu (potvrđeno grep-om `<form`) — svestan izbor po memoriji ("Milan ne treba da menja sadržaj, nema potrebe za CMS-om"), i za hitne intervencije telefon/WhatsApp je ispravan primarni kanal. Ipak, nema alternative za posetioca koji istražuje unapred (npr. hoće zakazati zamenu sezonskih guma za sledeću nedelju) i ne želi odmah da zove — jedna kratka forma "Zakažite termin" (ime, telefon, željeni datum) bi hvatala taj segment bez CMS-a, samo mailto: ili WhatsApp deep-link sa prepopulisanom porukom.

**Ocena 8/10** — tekst je iskren, specifičan i dobro targetiran; jedina zamerka su dve neproverljive marketinške brojke koje audit pravilo eksplicitno traži da se označe.

---

## 6. Dizajn / UX — nije ocenjeno vizuelno (ograničenje analize)

Po instrukciji zadatka, vizuelna ocena se radi samo ako mogu pouzdano da pokrenem dev server i snimim screenshotove na 390/768/1440px, pa pozovem `dizajn-kriticar`. Nisam ovo uradio u ovom krugu iz sledećih razloga:
- Fokus zadatka je bio kod/SEO/bezbednost/sadržaj audit, ne redizajn faza; pokretanje dev servera + puna vizuelna petlja (do 3 kruga popravki po standardnom procesu) je zaseban, veći posao od onoga što je ovde traženo ("NE pokreći pun redizajn ili build-fazu").
- `npm run build` je već potvrdio da se projekat kompajlira čisto — dev server bi najverovatnije radio identično, ali pokretanje i snimanje screenshotova bez namere da se odmah i popravlja ono što `dizajn-kriticar` nađe bi ili ostavilo nalaze bez akcije (protivno duhu petlje kvaliteta) ili prevazišlo dogovoreni obim "samo audit, ne diraj kod".

**Ono što mogu da ocenim iz koda/CSS-a (informativno, ne zamenjuje vizuelnu ocenu):**
- Dizajn sistem je dosledan i namerno građen (crna/crvena/hrom/plamen paleta izvedena iz loga, signature `SectionDivider` element sa motivom ključa i felne, `flame-cta` glow efekat sa `prefers-reduced-motion` zaštitom) — ovo pokazuje da je prošao kroz pravi kreativni proces, ne generički template.
- `globals.css` na 3500 linija je velik ali organizovan po sekcijama sa komentarima; nema znakova "!important ratovanja" u uzorcima koje sam pregledao.
- Responsive `sizes`/`srcSet` pažnja (opisana u sekciji Performanse) ukazuje da je mobilni prikaz bio prioritet, ne naknadna misao.

**Preporuka:** ako Nikola želi punu vizuelnu ocenu (11 stavki, `dizajn-kriticar` rubrika), to treba tražiti kao poseban, eksplicitan sledeći korak — idealno uz screenshotove sa **live** sajta (`mobilnivulkanizermilan.com`) na 390/768/1440px, što izbegava potrebu za lokalnim dev serverom.

---

## 7. Bezbednost — 5/10

Ovo je kategorija sa najvećim odstupanjem od onoga što `agent_memory.md` tvrdi, i razlog zašto ukupna ocena nije viša.

**`npm audit` (pokrenut 2026-09-27, bez izmena fajlova):**

| Paket | Ozbiljnost | Fix dostupan | Napomena |
|---|---|---|---|
| `next` (14.2.35) | **KRITIČNA** | da, ali `next@16.3.6` — **major skok** | Više DoS CVE-ova (CWE-400/770/502/444), opsezi sežu do `<15.5.16`/`<15.5.17` — ovo su vrlo sveže objavljene ranjivosti, novije od avgustovske provere |
| `postcss` (posredno, preko `next`) | Visoka | isti major skok (next 16.3.6) | Path traversal, čitanje proizvoljnih `.map` fajlova |
| `nanoid` | Visoka | da, **bez** major skoka | Beskonačna petlja kod negativne/nulte veličine |
| `sharp` (^0.35.2) | Visoka | da, **bez** major skoka (potrebna samo `<0.35.4`) | Ranjivosti u `libheif` |
| **Ukupno** | **1 kritična, 3 visoke** | | |

**Šta ovo znači u odnosu na `agent_memory.md`:** Memorija (FAZA 1, 2026-08-02) tvrdi da je `npm audit` tada prijavljivao "2 nalaza koji zahtevaju Next 15/16" i da je "provereno da sajt trenutno NIJE izložen" jer nema `rewrites()` ni `'use server'` u kodu. **Ovo drugo sam nezavisno proverio i i dalje je tačno** (`grep -rn "use server"` → 0 rezultata, `grep -n "rewrites" next.config.js` → 0 rezultata) — taj specifičan zaključak i dalje važi za te konkretne, starije CVE-ove. **Ali** broj i ozbiljnost ranjivosti se u međuvremenu uvećao (sad ih ima znatno više, uključujući nove DoS vektore u "Server Components" generalno, ne samo u rewrites/server actions), i `next` je sad označen kao **kritičan** paket, ne samo "visok". Zaključak "nismo izloženi" ne može automatski da se proširi na nove CVE-ove bez ponovne provere — a nije ponovo proveravano od avgusta.

- **`nanoid` i `sharp` popravke su niskorizične** (ne major, `npm audit fix` bi ih verovatno rešio bez lomljenja ičega) — ovo je "danas popodne" posao, nema razloga da čeka.
- **`next@16.3.6` je veća odluka** — App Router API se nije dramatično menjao 14→16, ali ovo je pravi major skok (React 19 zahtev, moguće breaking promene u `next/font`, `next/image` ponašanju) i treba tretirati kao poseban, planiran zadatak (test build, ne direktan push na `main`), ne kao deo redovnog održavanja. S obzirom da nema `rewrites()`/server actions, hitnost je niža nego za sajt koji te funkcije koristi — ali "niža hitnost" nije "nulti rizik", pogotovo jer su neki od CVE-ova opisani kao pogađaju "Server Components" generalno (App Router osnova, koju sajt koristi svuda).

**Ostalo (dobro):**
- `.env.local` ispravno van git-a; `.env.example` bez pravih vrednosti.
- Security headeri prisutni na svakoj ruti (potvrđeno live): `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`. Nema `Content-Security-Policy` — svesna odluka dokumentovana u kodu (rizik da pogrešno podešen CSP blokira GTM/Maps bez lokalnog testa) — razumna, konzervativna odluka za sajt ove veličine, ne propust.
- Nema `Permissions-Policy` headera — nisko-prioritetan nice-to-have, ne blokira ništa.
- Nema sopstvene kriptografije/auth logike (sajt nema login, pa se pitanje i ne postavlja).

**Ocena 5/10** — ne zato što je sajt trenutno pod aktivnim napadom ili što curi podatke (nije, i ne curi), nego zato što "1 kritična ranjivost u glavnom frameworku, neopravdana ništa novije od avgustovske provere" je tačno ono što bi svaki spoljni bezbednosni audit odmah crveno markirao, bez obzira na trenutnu (ne)izloženost. Ovo je kategorija gde bih najviše insistirao na akciji pre nego što se sajt pokazuje kao "10/10" bilo kome ko zna da pokrene `npm audit`.

---

## 8. Konverzija / poslovni aspekat — 8/10

**Pozitivno:**
- CTA hijerarhija je jasna i dosledna na svakoj stranici: telefon je uvek primaran (`btn-primary`), WhatsApp/Viber sekundarni, `StickyCall` komponenta drži poziv/WhatsApp dugmad fiksirana na dnu ekrana na svakoj stranici — nula trenja od bilo koje tačke skrola do poziva.
- `tel:` linkovi rade svuda (potvrđeno u svih pregledanih fajlova), broj je i klikabilan i ispisan kao tekst za kopiranje (`loc-hero-alt-num`, "Broj za kucanje i kopiranje") — pametan detalj za korisnike koji žele da pozovu sa drugog uređaja.
- `emergency-bar` na početnoj (`page.js:151-159`) direktno cilja posetioca u krizi ("Probušena guma sada?") pre nego što stigne do bilo kog drugog sadržaja — ispravna prioritizacija za ovaj tip biznisa.
- Klik-tracking na tel/WhatsApp/Viber postoji i namerno je **izmešten van idle callback-a** (`ClientEffects.js:23-47`) da se ne izgubi konverzija u prve 2 sekunde — ovo je detalj koji pokazuje razumevanje da je "Pozovi Milana" najvredniji event na sajtu, ne kozmetički.
- Lokacijske stranice imaju stvaran, ne "thin" sadržaj — svaka ima specifične FAQ, specifičnu geografiju, sopstveni JSON-LD `Service` sa `areaServed`, sopstvenu recenziju. Ovo nije doorway-page spam, ima realnu vrednost za posetioca koji traži "vulkanizer Pančevo" specifično.

**Nalazi:**
- **Živa GBP ocena je zapravo mrtav fallback** (detaljno u sekciji 2/7) — konverzijski relevantno jer je socijalni dokaz (4,9★, broj recenzija) direktno vidljiv u hero sekciji i na svakoj lokacijskoj stranici, a taj broj se ne osvežava automatski iako je infrastruktura za to izgrađena i skoro gotova (samo nedostaje jedan env var na Vercel-u).
- **Nema alternative za "istražujem, ne zovem još" segment** (opisano u sekciji 5) — svaki CTA vodi na poziv/poruku, nema npr. cenovnika sa rasponima (postoji tekst "cena zavisi od...", ali ni jedan orijentacioni raspon u dinarima nigde na sajtu, ni na `/cene` sekciji). Za posetioca koji prvo hoće da proceni red veličine troška pre nego što pozove, ovo je blago trenje. Ovo je legitiman poslovni izbor (transparentnost cene je teška kad zavisi od toliko faktora), ali vredi razmotriti bar orijentacioni raspon ("obično između X i Y RSD za standardnu zamenu") ako Milan ima podatke da to potkrepi.
- Footer napomena "Zakazivanje termina moguće, pozovite nas" — dobro da postoji, ali ponovo usmerava na isti jedini kanal (telefon).

**Ocena 8/10** — CTA arhitektura i tehnička implementacija konverzije (tracking, sticky bar, brzina) su iznad proseka; jedini realni gubitak poena je što je socijalni dokaz (rating) tehnički "zaglavljen" i nema alternativni, niskog-trenja kanal za neurgentne upite.

---

## Prioritizovana lista akcija

Status posle primenjenih izmena (2026-09-27) — ✅ urađeno u radnom stablu (čeka commit/push/deploy), ⛔ namerno ostavljeno za Nikolinu odluku, ⬜ i dalje nije rađeno.

### Kritično (uraditi pre nego što se sajt zove "gotov")
1. ✅ **`next.config.js` Cache-Control regex** popravljen i empirijski testiran (`path-to-regexp`) za `.webp`/`.jpg`/`.png`/`.woff2`. **Ostaje:** deploy + živi `curl -I` da se potvrdi `immutable` na produkciji.
2. **`npm audit` nalazi** — ✅ `nanoid` (preko odbačenog `critters` paketa) i `sharp` rešeni bez major skoka, verifikovano `npm audit --json`. ⛔ `next@16.3.6` migracija namerno NIJE urađena — to je poseban razgovor/odluka, ostaju 1 kritična + 1 visoka ranjivost vezane isključivo za taj major skok.
3. ⬜ **`GOOGLE_PLACES_API_KEY` na Vercel-u** — i dalje nije potvrđeno da je dodat. **Novo, dodatno otkriveno:** i kad se doda, ključ trenutno ima "HTTP referrer" restrikciju u Google Cloud Console-u, što će verovatno blokirati server-side pozive iz Next.js-a bez obzira na to. Prvo treba prebaciti restrikciju na "IP addresses" (ili je ukloniti), tek onda dodati ključ na Vercel.
4. ✅ **`public/llms.txt` i `public/llms-full.txt` ažurirani** — svih 12 lokacijskih stranica + svih 5 blog postova.

### Važno (dizanje sa 7-8 ka 9-10)
5. ✅ Skip-to-content link dodat (`layout.js` + `.skip-link` u `globals.css`).
6. ✅ Header/Footer navigacija proširena na svih 12 lokacijskih stranica (Footer kolona + mobile drawer; glavni desktop nav namerno zadržan kompaktan, obrazloženje u sekciji "Primenjene izmene").
7. ⛔ `middleware.js` consent-cookie logika — pokušano proveriti preko GTM MCP-a, nije uspelo (nema autentifikacije u ovoj sesiji). I dalje otvoreno pitanje, middleware nije menjan.
8. ✅ 9 (+1 siroče, `intervencija-u-toku.jpg`) neiskorišćenih `.jpg` fajlova premešteno iz `public/` u `assets-source/`, `convert-images.js` ažuriran i dry-run proveren.
9. ⬜ Pravi PageSpeed Insights test na live sajtu — i dalje nije pokrenut (zahteva deploy ovih izmena prvo).
10. ✅ Geo-koordinate ujednačene na sva 3 mesta, na proveren par (OSM geokodiranje fizičke adrese, ne pretpostavka).

### Nice-to-have
11. ⬜ Formulacija "500+ zadovoljnih klijenata" / "A+ Premium servis" — predlog dat u "Primenjene izmene", tekst nije menjan (Nikolina poslovna odluka).
12. ✅ Fokus-trap u mobile drawer-u dodat (`Header.js`).
13. ⬜ Orijentacioni cenovni raspon — nije rađeno.
14. ⬜ ESLint konfiguracija — nije rađeno.
15. ⬜ Puna vizuelna petlja (`dizajn-kriticar`) na live sajtu — i dalje van obima ovog prolaza.
