# Kreativne opcije — Mobilni Vulkanizer Milan

Odgovor na Krug 3 dizajn kritike (`VIZUELNA-PROVERA-2026-09-27.md`, prosek 6,7/10) — tri stavke su ostale ispod praga: **Vizuali** (galerija, 6), **Raznolikost kompozicija** (7, ali obrazac se ponavlja), **Originalnost** (6). Ovo nisu bagovi — kritičar je bio eksplicitan da su ovo dizajnerske odluke koje traže izbor, ne automatski fix. Ovaj dokument daje konkretne, screenshot-ovane opcije za sve tri, plus jednu preporuku po stavci. **Finalna odluka je Nikolina.**

Rad je urađen u glavnom radnom direktorijumu, PREKO svežeg Next.js 16 upgrade-a (potvrđeno čisto stanje i uspešan build pre početka rada). Next/React verzije i `proxy.js` nisu dirani.

> **Ažurirano 2026-09-27, Krug 4:** tri stavke koje su ovde bile "samo opisane" (lokacije kao lista+mapa, "zašto baš mi" kao cik-cak, favicon + mini-marker) su u međuvremenu IMPLEMENTIRANE na zahtev — detalji, screenshotovi i tačan spisak izmenjenih fajlova su u `VIZUELNA-PROVERA-2026-09-27.md`, sekcija "Krug 4". Ovaj fajl (KREATIVNE-OPCIJE) ostaje kao istorijski zapis opcija koje su tada bile na stolu, nije prepisivan.

---

## 1. V8b — Obrada fotografija u galeriji

**Problem:** 16 fotografija u `/galerija` (i manje serije na lokacijskim stranicama) su snimane u različitim uslovima — kišni dan, sunčan dan, noć sa bljeskom farova, toplo osvetljenje u kombiju — i bez zajedničke obrade deluju kao "album sa telefona", ne kao profesionalna serija.

**Metod:** menjao `.gallery-item img { filter: ... }` (+ opciono `::before` overlay sloj), screenshot na `/galerija`, 1440px, isti kadar za sve varijante. Sve tri su isprobane i **vraćene na originalnu, suptilnu verziju** — ništa od ovoga nije ostavljeno aktivno.

| Varijanta | Opis | Screenshot |
|---|---|---|
| 0 — Trenutno stanje | `contrast(1.08) saturate(0.92) brightness(0.97)` — vrlo blago, jedva primetno | `assets-source/screenshots/kreativne-opcije/v8b-0-baseline.png` |
| A — Filmski hladan ton | `contrast(1.15) saturate(0.75) brightness(0.92) hue-rotate(-4deg)` + hladan plavi overlay (`mix-blend-mode: overlay`) | `assets-source/screenshots/kreativne-opcije/v8b-1-hladan-ton.png` |
| B — Brend crveno-crna | `contrast(1.12) saturate(0.7) brightness(0.94) sepia(0.15)` + crveno-crni overlay (`mix-blend-mode: multiply`) — ka paleti sajta | `assets-source/screenshots/kreativne-opcije/v8b-2-brend-crveno.png` |
| C — Crno-belo, editorijalno | `grayscale(0.9) contrast(1.3) brightness(0.95)` + tanak crveni overlay samo u senkama | `assets-source/screenshots/kreativne-opcije/v8b-3-crno-belo.png` |

**Moja preporuka: Varijanta C.** Razlika dan/noć/toplo/hladno svetlo postaje skoro nevidljiva kad se sve prebaci u skoro-monohromatsko — to je i razlog zašto je ovaj trik uobičajen u modnim/auto katalozima kad materijal nije snimljen u jednoj sesiji. Dodatna prednost: izgled je dramatičniji i "premium", jasno se razlikuje od standardnih vulkanizer sajtova (koji su skoro uvek u boji, bez ikakve obrade). Rizik: gubi se malo šarma "stvarnih, živih" fotografija — ako je Nikoli i Milanu bitno da se odmah vidi da su slike autentične i šarene, Varijanta A ili B su bezbednija srednja opcija.

**Napomena van obima:** ni jedna varijanta ne rešava razliku u KADRIRANJU (širok/uzak kadar, orijentacija) — to bi zahtevalo сечење/preseckanje pojedinačnih fotografija, van obima ovog zadatka (CSS-only).

---

## 2. V5/V13 — Raznolikost rasporeda sekcija na početnoj

**Problem:** Services → Why us → Pricing → Process → Coverage → Locations sve dele identičan obrazac: centriran eyebrow, centriran h2, centriran podnaslov, pa mreža kartica. Sajt "diše" u istom ritmu 6+ puta zaredom.

**Implementirano živo (ne samo opisano)** — sekcija "Kako funkcioniše" (koraci 1-4), jer je to sekcija koju je i kritičar u Krugu 1 (V5) direktno predložio kao kandidata:

- Header je premešten iz centriranog u **levo poravnat** (`.section-header-left`) — sam po sebi već razbija ritam pre nego što se stigne do sadržaja sekcije.
- 4 kartice → **horizontalna vremenska linija**: brojevi u krugovima povezani linijom (desktop), koja se na mobilnom (≤768px) automatski prebacuje u **vertikalnu liniju** sa koracima poređanim odozgo nadole — standardan, čitljiv responsive obrazac za timeline, ne nešto neisprobano.

| | Screenshot |
|---|---|
| Pre (originalna 4-kartice mreža, centrirano) | `assets-source/screenshots/kreativne-opcije/v5-0-proces-pre.png` |
| Posle, desktop 1440px | `assets-source/screenshots/kreativne-opcije/v5-1-proces-timeline-1440.png` |
| Posle, mobilni 390px | `assets-source/screenshots/kreativne-opcije/v5-1-proces-timeline-390.png` |

**Ovo JESTE ostavljeno primenjeno u radnom stablu** (`app/page.js` + `app/globals.css`, klase `.process-timeline`, `.section-header-left`, `.timeline*`) — jeftino (CSS + mala JSX izmena, bez novih zavisnosti ili slika), nisko rizično, i direktno gasi tačan nalaz iz izveštaja. Ako se ne dopada, lako se vrati (`git diff`/`git checkout -- app/page.js app/globals.css` bi vratio i timeline i watermark izmenu ispod — javite ako treba da ih razdvojim).

**Druge 2 sekcije, samo opisane (nisu implementirane — birajte pre nego što se uloži vreme):**

- **"Pronađite svoju lokaciju"** (12 kartica): zameniti mrežu kartica sa **listom lokacija pored mape** — leva kolona uska, skrolabilna lista od 12 imena opština (kao index/registar), desno velika statična mapa Beograda sa pinovima. Ovo bi ukinulo treću identičnu mrežu kartica na strani i dalo funkcionalniji, "pravi alat" utisak. Veći zahvat od procesa (treba prava mapa sa pinovima, ne trenutni prazni embed).
- **"Zašto baš mi"** (trenutno 2 kolone, tekst levo/4 stavke desno): alternativa je **cik-cak naizmeničan raspored** — svaka od 4 prednosti kao par (mala ikona/broj + tekst) koji naizmenično ide levo/desno umesto u jednoj vertikalnoj listi, sa tankim vertikalnim vodovima koji ih povezuju. Manji zahvat od mape, srednji vizuelni efekat.

---

## 3. V11/N5 — Signature element kao pravi potpis, ne dekoracija

**Problem:** kritičar je rekao da je motiv (ukršteni ključevi + felna, iz loga) dobra ideja, ali izvedba je čisto dekorativna — pojavljuje se SAMO kao razdelnik između sekcija i ne "nosi" nikakav sadržaj ni značenje.

**Tri konkretna smera** (implementiran jedan, opisana druga dva):

1. **Vodeni žig iza najvažnije CTA sekcije — IMPLEMENTIRANO.** Novi `SignatureWatermark` komponenta (`app/components/SignatureWatermark.js`) — isti motiv kao `SectionDivider`, ali ogroman (640px desktop / 420px mobilni), vrlo providan (opacity 0.05, boja `--chrome`), pozicioniran iza brojeva telefona u završnoj "Probušena guma ne čeka" sekciji na početnoj. Sad se signature element pojavljuje i TAMO gde je najvažniji trenutak na sajtu (poziv), ne samo kao linija između sekcija.

   | | Screenshot |
   |---|---|
   | Posle, desktop 1440px | `assets-source/screenshots/kreativne-opcije/v11-2-watermark-posle.png` |
   | Posle, mobilni 390px | `assets-source/screenshots/kreativne-opcije/v11-2-watermark-posle-390.png` |
   | Pre (bez vodenog žiga) | Vidi postojeći `assets-source/screenshots/krug-3/homepage-1440.png` — dno stranice, "Kontakt" sekcija |

   **Ovo JESTE ostavljeno primenjeno.** Nula rizika po čitljivost teksta (opacity 0.05 je testirana da se vidi tek kad se traži, ne smeta čitanju broja telefona iznad njega), nula novih zavisnosti.

2. **Favicon (opisano, nije implementirano)** — isti motiv kao mala 32×32/16×16 ikona u browser tabu, umesto trenutnog favicon-a (trenutno je pun logo, `logo.png`, koji se na 16px svodi na nečitljivu mrlju). Signature element bi kao pojednostavljen favicon bio čitljiviji na toj veličini i pojavio bi se doslovno svuda gde se sajt otvori (tab, bookmark, istorija). Jeftino (jedan novi `.ico`/`.png` fajl generisan iz iste SVG geometrije + izmena 2 reda u `layout.js` metadata), ali nisam ga implementirao ovaj krug jer generisanje pravog `.ico` fajla (višestruke rezolucije) je van CSS-samo obima ovog zadatka — treba `sharp`/`png-to-ico` korak, uradiv u sledećem krugu ako se odobri.

3. **Marker liste umesto generičkog bulet-a (opisano, nije implementirano)** — u listama usluga na lokacijskim stranicama (`.loc-content ul li`), zameniti generički round bullet sa mini verzijom signature ikone (12-14px). Rizik: na tako maloj veličini, ukršteni ključevi + felna mogu da postanu nečitljiva mrlja (ista zamerka koju je kritičar imao na originalni 30px razdelnik) — ovo bi trebalo prvo testirati na 1-2 stavke pre nego što se primeni svuda.

**Moja preporuka:** vodeni žig (implementiran) je najjača, najjeftinija poluga ka originalnosti — direktno cilja kritičarevu primedbu ("neka nosi sadržaj"). Favicon je logičan sledeći, jeftin dodatak. Marker liste bih probao poslednje i uz pažljivo testiranje čitljivosti.

---

## Stanje radnog stabla — šta je primenjeno, šta nije

| Fajl | Status | Šta |
|---|---|---|
| `app/globals.css` | **Izmenjen, ostavljeno primenjeno** | Timeline CSS (`.section-header-left`, `.timeline*`), watermark CSS (`.contact-cta-watermark`), i jedan bezopasan komentar u `.gallery-item img` (funkcionalno identično originalu — potvrđeno `git diff`, samo dokumentacija da su 3 varijante isprobane) |
| `app/page.js` | **Izmenjen, ostavljeno primenjeno** | Process sekcija prebačena na timeline layout; `SignatureWatermark` dodat u Contact CTA sekciju; oba nova import-a |
| `app/components/SignatureWatermark.js` | **Nov fajl, ostavljeno** | Nova komponenta, koristi se samo na jednom mestu (Contact CTA) |
| `app/components/SectionDivider.js` | Netaknuto | — |
| Galerija (`.gallery-item img`) | **Vraćeno na original** | 3 varijante isprobane i screenshotovane, nijedna nije ostavljena aktivna |

**Build potvrđen čist posle svih izmena** (`npm run build`, 22/22 stranica, `ƒ Proxy (Middleware)` prisutan kao i pre — Next 16 upgrade netaknut).

Nema commit-a, nema push-a — Nikola to radi sam.
