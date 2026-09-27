# Vizuelna provera — Mobilni Vulkanizer Milan

| Krug | Datum | Prosek | Najniža stavka | Odluka |
|---|---|---|---|---|
| 4 | 2026-09-27 | Nije ponovo ocenjeno kritičarom (vidi napomenu) | — | Sprovedene preostale 3 opisane ideje iz Kruga 3/KREATIVNE-OPCIJE; build čist; nova dizajn-kriticar ocena čeka poseban zahtev |
| 3 | 2026-09-27 | 6,7 (snimci sa localhost:3002, sačekane slike i fontovi) | 6 Vizuali, 7 Raznolikost, 9 Originalnost (po 6) | prag NIJE ispunjen, poslednji krug ciklusa, stanje se prijavljuje Nikoli |
| 2 | 2026-09-27 | 6,4 (snimci sa localhost:3001) | 2 Hijerarhija, 3 Tipografija, 6 Vizuali, 7 Raznolikost, 9 Originalnost, 10 Mobilni (po 6) | prag NIJE ispunjen |
| 1 | 2026-09-27 | 5,4 (uslovno, vidi napomenu) | 8 Signature element (4) | prag NIJE ispunjen, odlučuju Nikola i Milan |

## Krug 4 — sprovedene preostale opisane ideje (implementacija, ne nova kritička ocena)

Nastavak na `KREATIVNE-OPCIJE-2026-09-27.md`, koji je posle Kruga 3 dao 3 kategorije opcija — deo je bio uživo implementiran (timeline proces, signature vodeni žig), a tri stavke su ostale SAMO opisane. Ovaj krug ih implementira. **Ovo NIJE novi prolaz kroz `dizajn-kriticar` potpodagenta** — nije traženo, pa prosek/ocena po stavkama nije osvežena brojkom. Ako Nikola želi svežu ocenu posle ovih izmena, to je poseban sledeći korak.

Rađeno PREKO postojećih nekomitovanih izmena iz Kruga 3/kreativnih opcija (timeline + watermark), nije ih revertovalo. Potvrđeno čisto stanje i uspešan build PRE početka (uključujući Next.js 16 upgrade, koji nije dirat).

### 1. "Pronađite svoju lokaciju" — mreža od 11 kartica → lista + mapa

`app/page.js` (`locations-section`) i `app/globals.css` (`.locations-split`, `.locations-list*`, `.locations-map*`). Leva kolona: skrolabilna lista svih 11 lokacija (ista imena/opisi/vremena kao pre, samo u red-formatu). Desna kolona: Google Maps embed (isti `.coverage-map`/`.coverage-map-overlay` obrazac kao postojeća Coverage sekcija — ClientEffects.js ga već hvata generički, nije trebalo menjati JS). `.reveal` na svakoj stavci liste, K1 mehanizam (vidljivo po defaultu) netaknut.

- Desktop 1440px: `assets-source/screenshots/kreativne-opcije/v5-2-lokacije-lista-mapa-1440.png`
- Mobilni 390px: `assets-source/screenshots/kreativne-opcije/v5-2-lokacije-lista-mapa-390.png` (lista i mapa se slažu vertikalno, lista prva)

**Napomena:** ovo delimično duplira postojeću "Mapa pokrivanja" (Coverage) sekciju odmah IZNAD ove (i ona ima tekst+mapu). Nisam spajao/uklanjao tu sekciju — van obima ovog zadatka, van vlasti da to sam odlučim — ali vredi da Nikola razmotri da li su sad obe potrebne jedna odmah iza druge.

### 2. "Zašto baš mi" — plain lista → cik-cak (naizmenično levo/desno)

`app/page.js` (dodata klasa `why-features-zigzag`) i `app/globals.css`. Desktop: centralna vertikalna linija, neparne stavke uvučene levo (ikona levo), parne uvučene desno i mirror-ovane (ikona desno, tekst desno poravnat). Na ≤640px se automatski vraća na plain vertikalnu listu (zigzag na uskom ekranu ne bi doneo ništa, samo suzio tekst).

- Desktop 1440px: `assets-source/screenshots/kreativne-opcije/v5-3-zasto-mi-zigzag-1440.png`
- Mobilni 390px: `assets-source/screenshots/kreativne-opcije/v5-3-zasto-mi-zigzag-390.png` (potvrđen čist fallback na plain listu, bez vizuelnog kvara)

### 3. Signature element — favicon + mini-marker za liste

**Favicon** (`app/layout.js`, `metadata.icons`): browser tab ikona promenjena sa punog loga (koji se na 16px svodio na nečitljivu mrlju — nalaz iz originalnog audit-a) na pojednostavljen signature motiv (isti kao SectionDivider/SignatureWatermark). Generisano `public/favicon-signature-32.png` i `-64.png` preko `sharp` iz iste SVG geometrije. Apple touch icon OSTAJE puni logo (veći prikaz na home screen-u, tamo ima smisla da se vidi ceo brend, ne skraćena verzija) — namerna odluka, ne previd.

Testirao sam čitljivost na stvarnoj veličini pre nego što sam odlučio: na 64px se jasno vidi felna+navrtke+ukršteni ključevi; na simuliranih 16px (stvaran tab prikaz) detalji nestaju ali ostaje čitljiv, prepoznatljiv crveni "X" na crnoj pozadini — bolje od pune mrlje logotipa, ne savršeno, ali poboljšanje.

**Mini-marker za liste** (`.loc-content ul li::before`, `app/globals.css`): generički ✓ zamenjen pojednostavljenim izvodom motiva (krug + ukrštene linije, BEZ felna-navrtki — testirao sam na stvarnoj 22px veličini i pun motiv sa navrtkama tu postaje mutna mrlja, ova reducirana verzija ostaje čitljiva). Implementirano kao inline SVG data-URI na `::before` pozadini, bez dodatnog HTTP zahteva.

- Test na true-size (22px, 64px za favicon) urađen PRE ugradnje preko privremenih preview fajlova — obrisani, nisu deo isporuke.
- **Napomena, važno:** trenutno nijedna prava lokacijska stranica (`/mobilni-vulkanizer-*`) nema `<ul>` unutar `.loc-content` — ovaj CSS je pre ove izmene bio potpuno neiskorišćen (samo `✓` je čekao da se neki `<ul>` doda). Da bih proverio da marker stvarno radi u pravom CSS kontekstu sajta (ne izolovano), napravio sam PRIVREMENU rutu (`app/preview-marker-temp`, uklonjena odmah posle snimka) sa test-listom. Screenshot: `assets-source/screenshots/kreativne-opcije/v11-3-lista-marker-preview.png` — ovo je **izolovan test prikaz, ne live stranica sajta**, jer live stranica sa ovim elementom trenutno ne postoji. Marker će se automatski primeniti čim/ako se neka lokacijska stranica proširi sa `<ul>` listom usluga.

### Build

`npm run build` posle sve tri izmene: čist, 22/22 stranica, `ƒ Proxy (Middleware)` prisutan kao i pre (Next 16 upgrade netaknut).

### Stanje radnog stabla

Sve tri izmene ostavljene primenjene (kao i timeline/watermark iz prethodnog kruga) — nema commit/push, Nikola radi taj korak sam.

| Fajl | Status |
|---|---|
| `app/page.js` | Izmenjen (locations lista+mapa, why-us zigzag klasa) |
| `app/globals.css` | Izmenjen (nova CSS pravila za sve gore) |
| `app/layout.js` | Izmenjen (favicon) |
| `public/favicon-signature-32.png`, `-64.png` | Novi fajlovi |
| `app/components/SignatureWatermark.js` | Netaknuto od prošlog kruga |

---

## Krug 3

Snimci su sa localhost:3002. Pre svakog snimka sačekani su `document.fonts.ready` i `img.complete` za sve slike, uz `scrollIntoView` za lenjo učitane. Promene nisu deploy-ovane. Snimci pune dužine početne (1440×13.711, 768×16.567, 390×17.283) se i dalje pri pregledu smanjuju na 45–210 px širine. Zato detalje ispod heroja na početnoj ne ocenjujem, osim na 768 i 1440 gde se krupni oblici vide.

### Automatski nalazi
- Nema `indeks.md`, pa nema automatskih nalaza iz alata. Ono što se vidi na snimcima:
- **Slike: nalaz iz kruga 2 bio je artefakt snimanja i sada je zatvoren.** Galerija 390/768/1440 prikazuje svih 16 fotografija, bez praznih polja. Na lokaciji 1440 „Šta kažu klijenti“ ima 1 recenziju i ispod nje 3 učitane fotografije (BMW, felna, kombi), bez praznih okvira. Nema novih praznih polja.
- **Font: nalaz iz kruga 2 bio je artefakt i sada je zatvoren.** Početna 390, prvi ekran: h1, ime u headeru i brojevi u stat nizu su u Playfair Display. Nema novog nalaza.
- **Nema horizontalnog overflowa** na 390 (početna, lokacija, galerija): margine su simetrične. Sticky bar usred snimaka pune dužine (galerija 390, početna 768) je artefakt `fullPage` snimka i ne boduje se.
- **Početna 1440, sekcija „Pokrivamo ceo Beograd“ (N4):** okvir mape desno i dalje izgleda kao taman pravougaonik sa sitnim natpisom. Na 768 se mapa jasno vidi (zelena mapa sa rutom). Na 1440 je snimak previše smanjen za sigurnu tvrdnju, ali izgleda isto kao u krugu 2. Treba proveriti ručno.

### Ocene
| # | Stavka | Ocena | Obrazloženje (šta se vidi, stranica + širina) |
|---|---|---|---|
| 1 | Prvi utisak | 7 (K2: 7) | **Početna 1440:** Milan na Defenderu, Playfair naslov i crveni kurziv. Sada je bez kartice „HITAN POZIV“, a na njenom mestu stoji mali bedž „A+ PREMIUM SERVIS“, pa je fotografija čistija. **Lokacija 1440:** pozadinska fotografija se sada čita (kombi, Pepsi izlog, tablica „KG…“). Hero konačno ima mesto, a ne samo teksturu (V2 rešen). **Početna 768:** fotografija sada zauzima punu širinu kolone i vidi se u prvom ekranu. Kočnica je i dalje **početna 390**: prvi ekran je samo tekst, tri dugmeta i stat niz, bez ijedne fotografije. Pošto je telefon glavni uređaj, ocena ne može preći 7. Bedž „A+ PREMIUM SERVIS“ je generička tvrdnja bez izvora i deluje kao šablonska značka. |
| 2 | Hijerarhija | 7 (K2: 6) | **Početna 1440, prvi ekran:** broj poziva je pao sa pet na četiri (header, plameni CTA, WhatsApp, Viber), a broj telefona se sada vidi jednom. To je jasniji ekran (V10 rešen). **Početna 768:** plameni CTA, pa WhatsApp i Viber u jednom redu, pa stat niz, pa fotografija. Redosled je čist. Preostalo: **početna 1440** i dalje ima Viber sam u drugom redu, kao siroče. **Lokacija 1440/768/390:** ispod naslova i dalje stoje CTA, pa isti broj ponovo („Broj za kucanje i kopiranje“), WhatsApp i Viber, pa paragraf, pa Google ocena. To je pet slojeva bez jasnog kraja, a na 390 se prvi ekran završava pre sadržaja. |
| 3 | Tipografija | 7 (K2: 6) | **Lokacija 1440:** h1 je sada „Mobilni vulkanizer / *Novi Beograd* / dolazim za 15-30 minuta“ u tri čista reda, a ime kvarta se ne cepa (K6 rešen). Na 768 je u dva reda, takođe bez cepanja. **Početna 390:** Playfair je učitan i skala h1 prema telu je dobra. Preostalo: **lokacija 390**, gde h1 ide u 4 reda i „minuta“ ostaje sama u poslednjem redu. **Eyebrow** („GALERIJA RADOVA“, galerija 390/768/1440) je i dalje sitan i bled crven (N2 treći krug zaredom nije rađen). **Galerija 1440:** podnaslov je zalepljen za h1, sa oko 8 px razmaka, tešnje nego ostali parovi naslova i podnaslova na sajtu. |
| 4 | Ritam i prostor | 7 (K2: 7) | **Lokacija 390/768:** h1 sada počinje oko 50–55 px ispod headera i više ne deluje zgnječeno (V14 rešen). **Galerija 390:** bez praznih polja, mreža ide ravnomerno do signature elementa i CTA. Preostalo: **lokacija 1440**, gde posle stat niza idu „Sve blokove…“, CTA kartica, „Šta sve mogu…“, „Kada me najčešće zovu…“ i „Pozovi me sada…“. To je oko 1.300 px teksta sa istim razmakom i jednom CTA karticom kao jedinim predahom (V13 nije rađen). **Galerija 1440:** između signature elementa i CTA dugmeta je oko 90 px, a CTA i rečenica ispod plutaju u oko 300 px praznog prostora pre footera. |
| 5 | Boja i materijal | 7 (K2: 7) | Paleta je dosledna, a hrom obod na hero fotografiji i hrom signature element su prisutni. Plamen-glow je po pozivaocu namerna brend odluka (animiran puls), pa ga ne tretiram kao grešku. Kao stvar ukusa ostaju dve stvari. (a) Na **lokaciji 1440/768/390** glavni CTA je ravno crven, a na **početnoj** i u **galeriji** ima plameni gradijent. Primarno dugme tako i dalje ima dva izgleda na istom sajtu, što je stvarna nedoslednost bez obzira na to da li je puls namerni. (b) Na **početnoj 390** plameni CTA sa oreolom je najsvetliji objekat na ekranu, pa uz sticky „Pozovi Milana“ ispod na istom ekranu stoje dva crvena poziva. **Footer (galerija 1440):** Viber ikonica i dalje udara u reč „WhatsApp“ („WhatsApp◌ Viber“, N6 nije rađen). |
| 6 | Vizuali | 6 (K2: 6) | Sve slike se sada vide, pa „pokvaren sajt“ utisak više ne postoji. Hero fotografija na početnoj 768 je sada pune širine (V12 rešen), a pozadina lokacije je čitljiva. Ali **galerija 1440/768/390** je nepromenjena: mreža 4×4 jednakih kvadrata bez vodećeg kadra, jarko plave mašine (red 3 i 4), narandžasti noćni kadrovi pored sivih dnevnih. Color-grade se ne vidi (V8b nije rađen). Najbolji kadar (Milan na Defenderu) stoji poslednji, u donjem desnom uglu. **Lokacija 1440:** tri fotografije ispod recenzije su tri različita tretmana (noćni BMW, crvena felna u mraku, kombi dnevni), pa izgledaju kao slučajni izbor. Galerija je najvidljiviji dokaz rada i i dalje izgleda kao album sa telefona. |
| 7 | Raznolikost kompozicija | 6 (K2: 6) | Nema strukturne promene. **Početna 1440/768:** tri mreže kartica (usluge 3×3, lokacije 3×4, galerija) i većina sekcija počinje centriranim eyebrow i naslovom (V5 treći krug nije rađen). **Lokacija** je i dalje jedna tekstualna kolona od heroja do FAQ-a. Jedina nova kompozicija je red od 3 fotografije ispod recenzije na lokaciji. **Galerija** je naslov, mreža i CTA. |
| 8 | Signature element | 7 (K2: 7) | Isto kao u krugu 2. Ukršteni ključevi preko felne, sa linijama, čitljiv je na galeriji 1440 i lokaciji 1440. Pojavljuje se oko 6 puta na početnoj, 1 put na lokaciji i 1 put u galeriji. I dalje je samo razdelnik i ne nosi sadržaj (N5 nije rađen). Na galeriji 390 linije levo i desno se skoro ne vide. |
| 9 | Originalnost | 6 (K2: 6) | Nema promene koja bi pomerila ocenu. Prava fotografija Milana, hrom i crni ton daju identitet, ali raspored (hero + stat niz, crvena traka, mreža usluga, 4 koraka, mreža lokacija, recenzije, FAQ, veliki broj) je i dalje opšti šablon lokalne usluge. Nijedan oblik ne potiče iz sveta guma. Novi bedž „A+ PREMIUM SERVIS“ vuče ka šablonu, ne od njega. |
| 10 | Mobilni | 7 (K2: 6) | Bolje: Playfair je na 390, galerija 390 je kompletna, lokacija 390 ima vazduh ispod headera i vidljivu pozadinsku fotografiju, nema overflowa, a sticky „Pozovi Milana“ i „WhatsApp“ su stalno dostupni. CTA je iznad preloma na sve tri strane. Preostalo: **početna 390**, gde fotografije nema u prvom ekranu (V9, namerno otvoreno, vidi ispod). **Lokacija 390** ima h1 u 4 reda sa „minuta“ kao siročetom. **Footer 390** je i dalje oko 1.000 px (galerija 390: Blog, Usluge, 12 lokacija i Kontakt u jednoj koloni, N3 nije rađen). |
| 11 | Referenca | n/p | Nema reference. Ne ocenjuje se. |

**Prosek (stavke 1–10): 6,7** (K2: 6,4, K1: 5,4). Najniže su stavke 6, 7 i 9 (po 6). Tri stavke su ispod 7, a originalnost je 6 (prag traži 7). **Prag nije ispunjen.** Ovo je poslednji krug ciklusa.

**Zašto nije veći skok:** popravke ovog kruga (K6, V2, V10, V12, V14) su stvarne i vidljive, ali su sve **ispravke grešaka**. Tri stavke koje drže prosek dole (vizuali, raznolikost, originalnost) traže **dizajnerske odluke**: obradu galerije, nove rasporede sekcija i motiv iz sveta guma. Nijedna od tih odluka nije pokušana ni u jednom od tri kruga. Bez njih sajt ostaje uredan, ali šablonski, oko 6,5–7.

### Otvoreno pitanje za razgovor (nije ispravka za tihu odluku)
**V9: fotografija u prvom ekranu početne na 390.** Slažem se sa pozivaocem da `order` trik, koji sliku vizuelno stavlja pre teksta, stvara neslaganje sa DOM redosledom i rizik za WCAG 1.3.2. Postoje dve varijante koje taj rizik nemaju, pa ih treba razmotriti sa Nikolom:
- (a) Fotografija kao **pozadinski sloj heroja** na ≤480 px, isto kao na lokaciji: `background-image` ili `<img>` sa `position:absolute`, opacity oko 0.35–0.45 i gradijentom odozdo. Nema promene redosleda čitanja.
- (b) **Skraćivanje teksta heroja** na 390: podnaslov na jednu rečenicu, a stat niz ispod fotografije, tako da slika prirodno uđe u prvi ekran bez menjanja redosleda.

Ovo je poslovna odluka (šta telefon prvo prodaje: tekst ili lice), pa je ostavljam otvorenom.

### Lista ispravki (po uticaju), preostalo stanje posle kruga 3

#### Kritično
Nema otvorenih kritičnih stavki (K4 i K5 su bili artefakti snimanja, K6 je rešen).

#### Važno
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| V8b | Galerija: jedan vodeći kadar i obrada koja se vidi | galerija 1440/768/390, i red fotografija na lokaciji | Mreža 4×4 jednakih kvadrata sa neujednačenim bojama je najslabiji vizuelni deo sajta. Najbolji kadar stoji poslednji. | Milan na Defenderu kao prvo polje 2×2 (na 390 puna širina, `aspect-ratio 4/5`). Zajednički filter `saturate(.8) contrast(1.05)` i vinjeta preko `::after`. Kadrovi sa Milanom u akciji prvi, a enterijer kombija niže. |
| V5 | Razbiti obrazac „centriran eyebrow + naslov“ i treću mrežu kartica | početna 1440/768 | Tri kruga bez promene. Direktno drži stavke 7 i 9 na 6. | Bar 2 sekcije asimetrično 5/7, sa naslovom levo i sadržajem desno. Koraci 1–4 kao vremenska linija sa krupnim hrom brojevima (oko 120 px, 20% opacity). Lokacije kao lista pored mape, a ne mreža 3×4. |
| V13 | Lokacijski šablon: prekinuti zid teksta | lokacija 1440/768/390 (svih 12) | Oko 1.300 px teksta posle stat niza. Šablon nosi najviše stranica. | Terenska fotografija pune širine kolone (16/9) između „Sve blokove…“ i „Šta sve mogu…“. „Šta sve mogu“ kao lista od 6–8 stavki sa ikonicama u dve kolone. Drugi signature razdelnik pre FAQ-a. |
| V11 | Jedan izgled primarnog CTA | lokacija naspram početne i galerije, sve širine | Na lokaciji je dugme ravno crveno, a na početnoj i u galeriji plameno. Nevezano za to da je puls namerni, isto dugme ima dva izgleda. | Odlučiti jedno: ili plamen (sa pulsom) i na lokaciji, ili ravno crveno svuda. Puls pod `prefers-reduced-motion` treba da stoji mirno. |
| N5 | Signature element da nosi sadržaj | sve | Najjeftiniji put do originalnosti ≥7. | Kružna forma felne kao okvir brojeva koraka 1–4, vodeni žig (oko 400 px, 4–6% opacity) iza završnog CTA, marker u listi usluga. |
| V15 (nov) | Hero lokacije: skratiti slojeve ispod CTA | lokacija 1440/768/390 | CTA, pa broj ponovo, pa WhatsApp i Viber, pa paragraf, pa Google ocena. Pet slojeva, a broj dva puta. | Ukloniti red „Broj za kucanje i kopiranje“ (broj je već na dugmetu i u footeru) ili ga spojiti sa WhatsApp i Viber u jedan tekstualni red. Paragraf „Vreme je realno…“ premestiti u prvu sekciju ispod heroja. |

#### Nice-to-have
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| N7 (nov) | Siroče u h1 lokacije na telefonu | lokacija 390 | „minuta“ je sama u 4. redu. | Na ≤480 px „dolazim za 15–30 min“ ili `text-wrap: balance` na h1. |
| N8 (nov) | Viber siroče u heroju početne | početna 1440 | Viber stoji sam u drugom redu ispod CTA. | WhatsApp i Viber kao dva manja dugmeta u istom redu ispod plamenog CTA, ili Viber kao tekstualni link. |
| N9 (nov) | Bedž „A+ PREMIUM SERVIS“ | početna 1440/768 | Tvrdnja bez izvora koja deluje šablonski. | Zameniti proverljivim podatkom („4.9 ★ Google, 57 recenzija“) ili ukloniti. |
| N2 | Eyebrow | sve | Treći krug sitan i bled. | 14–15 px, `letter-spacing .25em`, `#ff5c68`. |
| N3 | Footer na telefonu | sve, 390 | Oko 1.000 px. | Usluge i Lokacije u akordeonu, a Kontakt prvi. |
| N4 | Mapa na početnoj 1440 | početna 1440 | Okvir izgleda prazno na 1440 (na 768 radi). | Proveriti iframe na 1440 ili koristiti statičnu tamnu SVG mapu. |
| N6 | Viber ikonica u footeru | footer, sve | „WhatsApp◌ Viber“ i dalje udara. | `gap: 16px` ili svaka stavka u svom redu. |

### Status ispravki iz prethodnog kruga
| Ispravka | Rešeno? | Dokaz na snimku |
|---|---|---|
| K4 Slike se ne prikazuju | Zatvoreno (artefakt snimanja) | Galerija 390: svih 16 polja ima fotografiju. Lokacija 1440: 3 fotografije ispod recenzije, bez praznih okvira. |
| K5 Fallback font na 390 | Zatvoreno (artefakt snimanja) | Početna 390, prvi ekran: h1, ime u headeru i brojevi u stat nizu su u Playfair Display. |
| K6 Lom „Novi / Beograd“ | Da | Lokacija 1440: „Mobilni vulkanizer / *Novi Beograd* / dolazim za 15-30 minuta“. Na 768 i 390 ime je takođe u jednom redu. |
| V2 Opacity pozadine lokacije | Da | Lokacija 1440/768/390: kombi, Pepsi izlog i tablica se čitaju, a tekst ostaje čitljiv. |
| V9 Fotografija u prvom ekranu na 390 | Ne (namerno, otvoreno pitanje) | Početna 390, prvi ekran: bez fotografije. Vidi „Otvoreno pitanje“. |
| V10 Duplirani CTA u heroju | Da | Početna 1440: kartica „HITAN POZIV“ je uklonjena, a broj se na ekranu vidi jednom. Viber je i dalje siroče (N8). |
| V11 Jedno pravilo za CTA | Ne (plamen namerno ostaje) | Plamen na početnoj i u galeriji, ravno crveno na lokaciji. Nedoslednost između strana ostaje. |
| V12 Hero fotografija na 768 | Da | Početna 768: fotografija ima istu levu i desnu ivicu kao CTA dugme, bez prazne trake. |
| V13 Ritam lokacije | Ne | Lokacija 1440: isti niz tekstualnih sekcija. |
| V14 Razmak heroja od headera | Da | Lokacija 390/768: h1 počinje oko 50–55 px ispod headera. |
| V8b Galerija, obrada i vodeći kadar | Ne | Galerija 1440: mreža 4×4 i boje su nepromenjene. |
| V5 Centriran obrazac | Ne | Početna 1440/768: isto kao u krugu 2. |
| N2, N3, N4, N5, N6 | Ne | Eyebrow je bled, footer 390 je dugačak, mapa 1440 izgleda prazno, signature element je samo razdelnik, a Viber ikonica udara u „WhatsApp“. |

### Referenca
Nema reference. Stavka 11 se ne ocenjuje. Nema preuzetog sadržaja.

## Krug 2

Snimci su sa lokalnog servera (localhost:3001), posle skrola do dna. Cookie baner je sakriven. Sada postoje zasebni snimci prvog ekrana na 390, 768 i 1440. Mobilni snimci su tačno 390 px.

Napomena o čitljivosti: snimci pune dužine početne (1440×13.711, 768×16.567, 390×17.223) se pri pregledu smanjuju na 45–210 px širine. Za početnu zato mogu da ocenim raspored, redosled i gustinu sekcija, ali ne i tipografske detalje ispod heroja. Detalje ocenjujem sa snimaka prvog ekrana i sa lokacije i galerije, koji su čitljivi.

### Automatski nalazi
- Nema `indeks.md`, pa nema automatskih nalaza (konzola, overflow). Ono što se vidi na snimcima:
- **Slike koje se nisu učitale (nov, stvaran nalaz; `.reveal` praznine iz kruga 1 su rešene):**
  - **galerija 390:** poslednja 4 polja mreže (2 reda) su prazni tamni okviri, ispod njih je signature element i CTA;
  - **lokacija Novi Beograd 1440:** u sekciji „Šta kažu klijenti“ je 1 fotografija (beli BMW) i **3 prazna tamna okvira** pored nje. To je isti nalaz iz kruga 1 („4 prazna okvira“), samo sada 3 od 4.
  - Uzrok je verovatno `loading="lazy"` na slikama koje su izvan viewporta u trenutku snimka, ili nepostojeći `src`. Na lokaciji 390 i 768 u toj sekciji se vidi samo 1 slika, bez praznih okvira. Zato na 1440 izgleda da mreža ima 4 kolone za 1 sliku.
- **Fallback font na početnoj 390 (prvi ekran):** h1 „Mobilni vulkanizer / u Beogradu / 24h non-stop“, ime u headeru i brojevi u stat nizu (15min, 24h, 500+, 4.9★) renderuju se u sistemskom serifu (Times izgled), a ne u Playfair Display. Na lokaciji 390 i galeriji 390 Playfair je učitan. Može biti vremenski artefakt snimka, ali to isto vidi korisnik na sporom 4G, uz skok layouta kad se font učita.
- **Nema horizontalnog overflowa na 390:** galerija 390 sada ima simetrične margine. Sticky bar usred snimaka pune dužine je artefakt `fullPage` snimka i ne boduje se. Isto važi za duplirani header usred početne 768.
- **Početna 1440, sekcija „Pokrivamo ceo Beograd“:** okvir mape desno je i dalje taman i prazan. Na 768 se mapa vidi. Na 1440 iframe verovatno nije učitan.

### Ocene
| # | Stavka | Ocena | Obrazloženje (šta se vidi, stranica + širina) |
|---|---|---|---|
| 1 | Prvi utisak | 7 (K1: 6) | **Početna 1440** je najveći napredak ovog kruga. Fotografija Milana koji menja gumu na Defenderu zauzima desnu polovinu, visoka je i ima hrom obod. Uz Playfair naslov sa crvenim kurzivom „u Beogradu“ ovo prvi put izgleda kao rad agencije, a ne šablon. Za 3 s je jasno ko je, šta radi i da je stvaran čovek. Kočnice su dve. (a) **Početna 390, prvi ekran:** nema nijedne fotografije iznad preloma, samo tekst, tri dugmeta i stat niz, a naslov je u fallback fontu. Na telefonu, gde je većina saobraćaja, najjači adut sajta nije u prvom ekranu. (b) **Lokacija 1440:** pozadinska fotografija (kombi, Pepsi izlog) je toliko zatamnjena da se jedva čita kao slika. Ekran i dalje deluje kao centriran tekst na tamnom, samo sa teksturom. |
| 2 | Hijerarhija | 6 (K1: 6) | Crvena traka je sada niže na početnoj (1440, posle „Zašto baš mi“), što pomaže. Ali **prvi ekran početne 1440** i dalje ima pet poziva na akciju koji se takmiče: „Pozovi sada“ u headeru, plameni CTA „Pozovi: +381…“, WhatsApp, Viber (sam u drugom redu, siroče) i kartica „HITAN POZIV“ preko fotografije sa brojem i još dva dugmeta „Pozovi“ i „Poruka“. Broj telefona se na tom ekranu vidi dva puta. **Lokacija 1440/390:** hero ima CTA, pa broj „za kucanje“ (isti broj ponovo), pa WhatsApp i Viber, pa Google ocenu. To je pet redova ispod naslova, bez jasnog kraja. |
| 3 | Tipografija | 6 (K1: 6) | Dobro: Playfair u teškom rezu na početnoj 1440 je smeo i lep. Kolona teksta na lokaciji 1440 je sada oko 720 px (oko 85–90 karaktera), što je vidljivo lakše za čitanje (V3 rešen). Nije rešeno: **lokacija 1440** i dalje lomi naslov „Mobilni vulkanizer *Novi* / *Beograd* / dolazim za 15–30 minuta“, pa se ime kvarta cepa u dva reda. To je bio deo V2 i nije popravljeno. **Početna 390** ima fallback serif u h1 (vidi automatske nalaze). **Lokacija 390:** h1 u 4 reda („minuta“ sama u redu) počinje oko 25 px ispod headera. Eyebrow „GALERIJA RADOVA“ je i dalje sitan i bled (N2 nije rađen). |
| 4 | Ritam i prostor | 7 (K1: 5 uslovno) | `.reveal` praznine su nestale, pa se ceo ritam početne sada vidi. Signature razdelnici između sekcija (početna 1440, oko 6 puta) daju namerne pauze. Crvena traka posle „Zašto baš mi“ razbija monotoniju. **Lokacija 1440:** „Ako niste na Novom Beogradu“ sada ima jasan razmak iznad (V6 rešen). Minus: **lokacija 390/768**, gde h1 skoro dodiruje header (oko 20–25 px). **Galerija 390:** 4 prazna polja stvaraju oko 200 px „mrtvog“ prostora. **Lokacija 1440:** tekstualne sekcije („Šta sve mogu“, „Kada me najčešće zovu“, „Pozovi me sada“) i dalje idu jedna za drugom sa istim razmakom, bez vizuelnog predaha. |
| 5 | Boja i materijal | 7 (K1: 6) | Emoji u footeru su zamenjeni tankim SVG ikonicama (galerija 1440/390, lokacija 1440), pa footer sada pripada sistemu (V7 rešen). Hrom se konačno vidi: obod oko hero fotografije na početnoj 1440 i hrom signature element. Minus: **plamen-gradijent crveno→narandžasto je podrazumevano stanje glavnog CTA** na početnoj (390/768/1440) i u galeriji (1440/390), iako sistem kaže „retko, na hover“. Na lokaciji je isti CTA ravno crven, pa pravilo za primarni CTA i dalje nije jedno. U footeru 1440/390 ikonica za Viber udara u reč „WhatsApp“ („WhatsApp◌ Viber“). |
| 6 | Vizuali | 6 (K1: 6) | Hero fotografija na početnoj je odlično izabrana: čovek u akciji, skupo vozilo, crvena poluga dizalice u kadru koja se rimuje sa paletom. Ali: (a) **galerija 1440:** color-grade (V8) se na snimku ne primećuje. Plave mašine u kombiju (red 3 i 4) su i dalje jako zasićene, noćni kadrovi su narandžasti, dnevni sivi, pa mreža 4×4 i dalje izgleda kao album sa telefona. Nema ni kadra u dvostrukoj veličini koji bi vodio oko. (b) Prazni okviri na lokaciji 1440 (3) i galeriji 390 (4) vizuelno deluju kao pokvaren sajt. (c) **Početna 768:** hero fotografija je uža od kolone teksta i poravnata levo, pa desno od nje ostaje prazna traka od oko 150 px. |
| 7 | Raznolikost kompozicija | 6 (K1: 5 uslovno) | Sada se vidi cela **početna 1440**: mreža usluga 3×3, dve kolone „Zašto baš mi“, crvena traka, centrirana kartica cena, 4 koraka u redu, fotografija, tekst i mapa, mreža lokacija 3×4, mreža galerije, recenzije, priča sa fotografijom desno, FAQ i CTA. Raznolikost postoji, ali tri mreže kartica (usluge, lokacije, galerija) su istog obrasca, a većina sekcija počinje centriranim eyebrow + naslov + podnaslov (V5 iz kruga 1 nije rađen). **Lokacija** je i dalje jedna tekstualna kolona od heroja do FAQ-a, sa jednim stat nizom i jednom CTA karticom. |
| 8 | Signature element | 7 (K1: 4) | Jasan napredak. Na 60 px, sa tankim linijama levo i desno, element se sada čita kao ukršteni ključevi preko felne sa navrtkama, a ne kao „✕“ (galerija 1440, lokacija 1440/390/768). Prisutan je na sva tri šablona. Ostaje samo razdelnik: nigde ne nosi sadržaj (npr. kao okvir broja koraka, bullet u listi usluga, vodeni žig iza završnog CTA). Na lokaciji se pojavljuje samo jednom. Tanak hrom na crnom na 390 je na granici primetnog. |
| 9 | Originalnost | 6 (K1: 5) | Stvarna fotografija Milana u heroju i hrom signature element podižu identitet. Ovo više ne može da bude bilo koji zanatlija bez zamene fotografije. Ali struktura (hero + stat niz, crvena traka, mreža usluga, 4 koraka, mreža lokacija, recenzije, FAQ, CTA sa ogromnim brojem) i dalje je opšti šablon lokalne usluge. Nijedan raspored ne potiče iz sveta guma (profil gume, gazeći sloj, kružna forma felne, prikaz pritiska). Lokacijski šablon, koji nosi najviše stranica, je najgeneričniji deo sajta. |
| 10 | Mobilni | 6 (K1: 5 uslovno) | Dobro: nema overflowa (K2 potvrđen kao artefakt), sticky „Pozovi Milana“ i „WhatsApp“ su uvek dostupni, CTA je iznad preloma na početnoj i lokaciji 390, a WhatsApp i Viber su u punoj širini na početnoj 390. Loše: **početna 390** nema fotografiju iznad preloma i ima fallback font. **Galerija 390** ima 4 prazna polja. **Lokacija 390** ima h1 u 4 reda odmah uz header. **Footer 390** je i dalje dugačka jedna kolona od oko 1.000 px (N3 nije rađen). |
| 11 | Referenca | n/p | Nema reference. Ne ocenjuje se. |

**Prosek (stavke 1–10): 6,4** (K1: 5,4). Najniže su stavke 2, 3, 6, 7, 9 i 10 (po 6). Šest stavki je ispod 7, a originalnost je 6 (prag traži 7). **Prag nije ispunjen.**

### Lista ispravki (po uticaju)

#### Kritično
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| K4 | Slike koje se ne prikazuju | galerija 390 (poslednja 4 polja), lokacija 1440 (3 od 4 okvira u „Šta kažu klijenti“), proveriti svih 12 lokacija | Prazni tamni okviri deluju kao pokvaren sajt i gube poverenje baš u sekciji dokaza. | Proveriti da li slike postoje (`src` i putanja). Ako postoje: `loading="lazy"` je u redu, ali okvir mora imati `aspect-ratio`, `width`/`height` i neutralnu pozadinu, a ne izgled praznog polja. Na lokaciji renderovati onoliko okvira koliko ima slika (1 slika = 1 široka slika, ne mreža 4 sa 3 prazne). Sledeći snimak raditi sa `waitForLoadState('networkidle')` posle skrola. |
| K5 | Font na telefonu | početna 390 (verovatno sve strane) | Fallback serif u h1 poništava ceo tipografski identitet na glavnom uređaju i izaziva skok layouta. | `preload` za Playfair Display 800 (woff2, subset latin-ext zbog č ć ž š đ) i `font-display: swap` sa `size-adjust`/`ascent-override` fallbackom (npr. `Georgia` podešen metričkim override-om) da skok bude minimalan. Ponoviti snimak prvog ekrana posle `document.fonts.ready`. |
| K6 | Lom imena lokacije u h1 | lokacija 1440 (svih 12 šablona) | „Novi / Beograd“ cepa ključnu reč i izgleda nemarno. To je bio deo V2 i nije urađeno. | Ime lokacije u `<span style="white-space:nowrap">`. H1 u tri namerna reda: „Mobilni vulkanizer“ / „*Novi Beograd*“ / „dolazim za 15–30 min“. Na 1440 `max-width` oko 16ch, ili smanjiti h1 sa oko 64 na oko 56 px. |

#### Važno
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| V9 | Fotografija u prvom ekranu na telefonu | početna 390 | Najjači vizuelni adut (Milan u akciji) je ispod preloma. Na telefonu prvi ekran je samo tekst i dugmad. | Ili fotografija kao pozadinski sloj heroja na 390 (kao na lokaciji, ali svetlije, oko 0.45, sa gradijentom odozdo), ili traka fotografije visine oko 180 px između naslova i CTA. Stat niz premestiti ispod fotografije. LCP slika sa `fetchpriority="high"`, AVIF/WebP, oko 800 px širine. |
| V10 | Rasteretiti prvi ekran početne od duplih CTA | početna 1440/768 | Pet poziva i broj telefona dva puta na jednom ekranu. | Ukloniti dugmad „Pozovi / Poruka“ iz kartice „HITAN POZIV“ (ostaviti samo broj kao dokaz dostupnosti) ili ukloniti celu karticu. Viber ne treba da stoji sam u drugom redu: spojiti WhatsApp i Viber u jedan sekundarni red ili Viber prebaciti u tekstualni link. |
| V11 | Jedno pravilo za primarni CTA | sve strane | Plamen-gradijent je podrazumevan na početnoj i galeriji, a na lokaciji je dugme ravno crveno. Sistem kaže da je plamen samo na hover. | Primarni CTA svuda ravno crven (`--red`) sa belim tekstom (proveriti kontrast ≥ 4.5:1). Plamen samo na `:hover`/`:focus-visible`, pod `prefers-reduced-motion` bez tranzicije. |
| V12 | Poravnati hero fotografiju na 768 | početna 768 | Fotografija je uža od kolone i poravnata levo, a desno ostaje prazno. | Na 768 fotografija ide na punu širinu kolone (`width:100%`, ista leva i desna ivica kao CTA dugme), `aspect-ratio: 4/3`. |
| V13 | Lokacija, ritam posle heroja | lokacija 1440/768/390 | Posle heroja sledi oko 1.500 px teksta bez vizuelnog predaha. Lokacijski šablon nosi najviše stranica. | Između „Sve blokove…“ i „Šta sve mogu…“ ubaciti terensku fotografiju sa te lokacije u punoj širini kolone (720 px, `aspect-ratio 16/9`). „Šta sve mogu da uradim“ pretvoriti u listu od 6–8 stavki sa SVG ikonicama u dve kolone umesto paragrafa. Drugi signature razdelnik staviti pre FAQ-a. |
| V14 | Razmak heroja od headera | lokacija 390/768 | H1 počinje oko 20–25 px ispod headera i deluje zgnječeno. | `padding-top` heroja 48 px na 390, 64 px na 768, 96 px na 1440 (skala 8/16/24/40/64/96). |
| V8b | Color-grade koji se stvarno vidi, plus jedan veliki kadar | galerija 1440/768/390 | Filter iz V8 se na snimku ne primećuje, a mreža 4×4 je monotona. | Jači, ali jedinstven tretman: `saturate(.8) contrast(1.05) brightness(.95)` plus tamna vinjeta preko `::after` (radial-gradient, oko 35%). Prva slika (Milan na Defenderu ili Milan kod narandžastog auta) u 2×2 polju. Kadrove sa Milanom u akciji staviti prve, a statične kombije niže. |
| V5 | (iz K1, nerešeno) Razbiti obrazac „centriran eyebrow + naslov“ | početna 1440 | Većina sekcija i dalje počinje isto. | Bar 2 sekcije sa naslovom levo i sadržajem desno (5/7). Koraci 1–4 kao vremenska linija sa krupnim Bebas brojevima u hromu (oko 120 px, 20% opacity). Lokacije kao lista sa mapom, a ne treća mreža kartica. |

#### Nice-to-have
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| N5 | Signature element da nosi sadržaj, ne samo razdelnik | sve | Sada je dosledan, ali samo dekorativan. Tu se najlakše dobija originalnost. | Iskoristiti kružnu formu felne kao okvir brojeva koraka 1–4, kao vodeni žig (oko 400 px, hrom, 4–6% opacity) iza završnog CTA, i kao marker u listi usluga. Na 390 linije razdelnika podići na oko 40% opacity. |
| N2 | (iz K1) Pojačati eyebrow | sve | I dalje sitan i bled. | 14–15 px, `letter-spacing .25em`, `#ff5c68`. |
| N3 | (iz K1) Skratiti footer na telefonu | sve, 390 | I dalje oko 1.000 px. | Usluge i Lokacije u akordeonu, a Kontakt prvi. |
| N4 | (iz K1) Mapa na početnoj 1440 | početna 1440 | Okvir je i dalje taman i prazan. | Statična tamna SVG mapa sa crvenim tačkama. |
| N6 | Ikonice u footeru | footer, sve | Viber ikonica udara u „WhatsApp“. | Svaka stavka (telefon, WhatsApp, Viber) u svom redu ili sa `gap: 16px` između stavki. |

### Status ispravki iz prethodnog kruga
| Ispravka | Rešeno? | Dokaz na snimku |
|---|---|---|
| K1 `.reveal` vidljiv po difoltu | Da | Početna 1440/768/390 pune dužine: sve sekcije (usluge, koraci, lokacije, galerija, recenzije) imaju sadržaj i nema velikih crnih praznina. Preostale prazne površine su neučitane slike (K4), ne `.reveal`. |
| K2 Horizontalni overflow na 390 | Da (potvrđeno kao artefakt) | Galerija 390: leva i desna margina su simetrične, a hamburger i CTA nisu na ivici. |
| K3 Signature element | Delimično | Galerija 1440 i lokacija 1440/768/390: element od oko 60 px sa linijama, čita se kao ključevi i felna. Na lokaciji je samo 1 put (predlog je bio bar 2) i nigde ne nosi sadržaj. |
| V1 Hero početne sa fotografijom | Da (1440), Ne (390), Delimično (768) | 1440: fotografija dominira desno, hrom obod. 390: fotografija nije u prvom ekranu. 768: fotografija je uža od kolone i poravnata levo. |
| V2 Lokacijski hero sa fotografijom i ispravnim lomom | Delimično | Fotografija postoji, ali je toliko tamna da se jedva čita (1440). Lom „Novi / Beograd“ na 1440 **nije rešen**. |
| V3 Uža kolona na lokaciji | Da | Lokacija 1440: kolona oko 720 px, redovi vidljivo kraći. |
| V4 Manje crvenih CTA | Delimično | Glow je skinut sa kartice cena, ali prvi ekran početne 1440 i dalje ima 5 poziva (vidi V10). |
| V5 Razbiti centriran obrazac | Ne | Početna 1440: većina sekcija i dalje počinje centriranim eyebrow i naslovom. |
| V5 (pozivaoca) Crvena traka niže | Da | Početna 1440: crvena traka je posle „Zašto baš mi“, a ne odmah ispod heroja. |
| V6 Razmak pre „Ako niste na…“ | Da | Lokacija 1440/768/390: naslov ima jasan razmak od mreže iznad. |
| V7 Emoji u footeru | Da | Galerija 1440/390, lokacija 1440: SVG stroke ikonice. Manji problem je Viber ikonica (N6). |
| V8 Ujednačena obrada fotografija | Ne (ne vidi se) | Galerija 1440: plave mašine i narandžasti noćni kadrovi i dalje jako odudaraju. Nema velikog vodećeg kadra. |
| N1 Hrom kao materijal | Delimično | Hrom obod hero fotografije i signature element. Stat kartice i FAQ i dalje bez hroma. |
| N2, N3, N4 | Ne | Eyebrow je bled, footer 390 je dugačak, mapa 1440 je prazna. |

### Referenca
Nema reference. Stavka 11 se ne ocenjuje. Nema preuzetog sadržaja.

## Krug 1

### Najvažnija napomena: snimci ne pokazuju ceo sajt

Početna strana na sve tri širine ima **velike, potpuno prazne crne površine** ispod naslova sekcija.
Najveće su ispod „Sve što vam treba, na licu mesta“, „Jednostavno kao 1-2-3-4“, „Pronađite svoju
lokaciju“ (najveća, oko 1.600 px na 1440) i „Stvarne intervencije, stvarni klijenti“. Isto se vidi
na lokacijskoj strani (4 prazna okvira ispod recenzija) i u galeriji na 390 (donjih 6 polja mreže je prazno).

Uzrok je skoro sigurno klasa `.reveal` (`opacity: 0` dok `IntersectionObserver` ne doda `.visible`).
Sadržaj se ne otkrije kad se radi `fullPage` snimak bez skrolovanja. To znači dve stvari:
1. **Te sekcije (usluge, 4 koraka, lokacije, galerija na početnoj) nisam mogao da ocenim.** Ocene 4, 6, 7 i 10 su zato uslovne.
2. Nije samo problem snimka: ako JS zakasni ili padne, posetilac vidi istu prazninu. Sadržaj koji je važan ne sme biti skriven po difoltu (vidi ispravku K1).

Takođe:
- Mobilni snimci su široki **375 px**, ne 390.
- Snimak početne na 390 je visok 16.864 px, pa je pri pregledu smanjen na oko 44 px širine. Detalje tipografije na telefonu na početnoj zato ne mogu da ocenim. Za mobilni sam se oslonio na lokaciju-390 i galeriju-390, koje su čitljivije.

Za krug 2 treba snimiti posle programskog skrola do dna (ili sa `.reveal { opacity:1 }` ubačenim samo za snimanje). Pored toga treba posebno snimiti prelom (prvi ekran) za svaku širinu, na tačnih 390 px.

### Automatski nalazi
- Nema `indeks.md`, pa nemam automatske nalaze (skrol, konzola, neučitane slike). Ono što sam sam video na snimcima:
- **Mogući horizontalni skrol / asimetrična margina na 390 (galerija):** leva margina je oko 15 px, a desna 0. Desna kolona slika, CTA „Pozovi: +381…“ i sticky bar dodiruju desnu ivicu. Hamburger meni je takođe na samoj ivici. Treba proveriti na pravom telefonu: ako postoji overflow, to je automatski pad.
- **Slike i sadržaj koji se nisu prikazali:** početna (sve širine), lokacija (4 okvira ispod recenzija, 1440 i 390) i galerija 390 (6 donjih polja). Uzrok je `.reveal`/lazy učitavanje, kao gore.
- Sticky call bar se na 390 vidi usred stranice, preko prelomne linije, preko slika u galeriji i breadcrumba na lokaciji. To je artefakt `fullPage` snimka i **ne boduje se**.

### Ocene
| # | Stavka | Ocena | Obrazloženje (šta se vidi, stranica + širina) |
|---|---|---|---|
| 1 | Prvi utisak | 6 | **Početna 1440:** za 3 s je jasno šta, gde i kada („Mobilni vulkanizer *u Beogradu* 24h non-stop“, crveni kurziv). Crno-crvena paleta i serif odmah odvajaju sajt od plavo-belih konkurenata. Ali raspored je standardan šablon lokalne usluge: tekst levo, fotografija u kartici desno, pa niz od 4 broja, pa crvena traka. Fotografija je mala, u zaobljenoj kartici, i ne nosi hero. **Lokacija 1440:** hero je samo centriran tekst na crnom, bez ijedne fotografije, i izgleda kao landing iz šablona. |
| 2 | Hijerarhija | 6 | Hero na obe strane ima jasan dominantni naslov. Posle toga crveno dugme/CTA konkuriše na skoro svakom ekranu **početne 1440**: header dugme, dva CTA u heroju, crvena traka punom širinom, CTA u kartici „Pošteno o ceni“, traka „Niste sigurni?“, završni CTA sa ogromnim brojem, sticky bar. Kad je sve hitno, ništa nije hitno. **Lokacija 1440:** posle heroja je dugačak zid teksta, a jedini predah su 4 stat kartice i jedna CTA kartica. |
| 3 | Tipografija | 6 | Playfair Display u teškom rezu daje dobar kontrast prema telu (galerija 1440 „Stvarne intervencije, stvarni klijenti“ izgleda dobro). Bebas eyebrow („GALERIJA RADOVA“) je lep, ali previše sitan i bled crven. Problemi: (a) **lokacija 1440:** naslov se lomi „Mobilni vulkanizer Novi / Beograd / dolazim za 15–30 minuta“, pa se ime lokacije cepa u dva reda. (b) **Lokacija 1440:** kolona teksta je široka oko 880 px, što je oko 110–120 karaktera po redu, predugačko za čitanje. (c) Telo je sivo i sitno u odnosu na naslove. Dijakritici (č, ć, ž, š, đ) se renderuju ispravno. |
| 4 | Ritam i prostor | 5 (uslovno) | Vidljivi deo: **lokacija 1440** ima naslov „Ako niste na Novom Beogradu“ zalepljen za donju ivicu mreže okvira iznad, bez ikakvog razmaka. Sekcije „Sve blokove…“, „Šta sve mogu…“ i „Kada me najčešće zovu…“ idu jedna za drugom sa istim malim razmakom, bez pauze. **Početna:** većinu ritma ne vidim zbog `.reveal` praznina. |
| 5 | Boja i materijal | 6 | Paleta se drži sistema: crna, crvena, plamen-gradijent na CTA u galeriji (1440) sa glow-om, suptilna tamno-crvena ivica na karticama. Ali (a) hrom (`--chrome`) se praktično ne vidi nigde, pa je sistem u realnosti samo crno i crveno. (b) **Footer na svim stranama** koristi emoji ikonice (📞 💬 📍 🕐 📅 💳), koje izgledaju jeftino i ne pripadaju ovom sistemu. (c) Na početnoj su pozadine sekcija skoro ista crna, pa nema slojeva ni dubine. |
| 6 | Vizuali | 6 | **Galerija 1440:** prave fotografije sa terena, brendirano vozilo, oprema u kombiju. To je autentično i najjača vizuelna imovina sajta. Ali obrada je neujednačena: noćni snimci sa narandžastim tonom stoje pored dnevnih sivih, mešaju se kosi uglovi i razne perspektive, a nema zajedničke color-grade obrade. Na lokacijskoj strani nema nijedne fotografije u vidljivom delu. |
| 7 | Raznolikost kompozicija | 5 (uslovno) | Vidljivi obrazac na **početnoj 1440** je stalno isti: centriran eyebrow, pa centriran Playfair naslov, pa siv podnaslov, pa sadržaj. Izuzeci su samo „Prevaziđite…“ (dve kolone) i „Pokrivamo ceo Beograd“ (tekst i mapa). **Lokacija** je jedna tekstualna kolona od vrha do FAQ-a. Sekcije koje su skrivene (koraci, lokacije) možda donose raznolikost, ali to nisam mogao da vidim. |
| 8 | Signature element | 4 | Na **početnoj 1440** između sekcija stoji mali hrom znak, koji pri ovoj veličini liči na „✕“ (ikonu za zatvaranje), a ne na ukršteni ključ i felnu. Tanak je, sitan i nema liniju ni prostor oko sebe koji bi ga učinili motivom. Na **lokacijskoj strani i galeriji ga nema uopšte**. Ideja (ključevi iz loga) je dobra i vezana za delatnost, ali izvedba je dekoracija koju oko preskače. |
| 9 | Originalnost | 5 | Tamna tema, crveni serif-kurziv i prave fotografije jesu drugačiji od tipičnih plavo-belih vulkanizer sajtova. Taj cilj je delimično postignut. Ali ako se zamene logo i fotografije, ista struktura (hero sa 4 broja, crvena traka, kartice, FAQ akordeon, CTA traka) radi i za šlep službu, bravara ili vodoinstalatera. Ništa u rasporedu ni u oblicima ne potiče iz sveta guma i felni (profil gume, šara gazećeg sloja, kružni oblik felne, merni prikaz pritiska…). |
| 10 | Mobilni | 5 (uslovno) | Dobro: header na 390 ima vidljivo dugme „Pozovi sada“ i hamburger, sticky bar „Pozovi Milana“ i „WhatsApp“ je stalno dostupan, a lokacijski hero na 390 ima CTA iznad preloma. Loše: **galerija 390** ima asimetrične margine (desno 0), što je sumnja na overflow. **Footer 390** je dugačka jedna kolona od oko 1.000 px sa listom od 12 lokacija i 7 usluga. Početnu na 390 ne mogu detaljno da ocenim (rezolucija snimka). |
| 11 | Referenca | n/p | Nema reference ni `dnk-reference.md`. Stavka se ne ocenjuje. |

**Prosek (stavke 1–10): 5,4.** Najniža je stavka 8 (4). Stavka 9 (originalnost) = 5, ispod praga 7. Prag nije ispunjen.

**Ocena originalnosti: 5/10.** Boja i tipografija odvajaju sajt od konkurencije, ali raspored i komponente su šablonski. Signature element je tu samo kao ideja, ne i kao vidljiv potpis.

### Lista ispravki (po uticaju)

#### Kritično
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| K1 | Sadržaj ne sme biti sakriven po difoltu | sve strane, sve širine | Na snimcima nedostaje oko 40% početne. Isto vidi i korisnik sa sporim JS-om, a verovatno i neki crawleri i alati za pregled. | Obrnuti logiku: `.reveal` je vidljiv po difoltu, a animacija se uključuje samo kad je JS aktivan (`html.js .reveal:not(.visible){opacity:0}`). Pod `prefers-reduced-motion: reduce` treba `opacity:1; transform:none` bez tranzicije. Pomeraj smanjiti sa 30 px na 12–16 px. |
| K2 | Proveriti i ukloniti horizontalni overflow na telefonu | galerija 390 (proveriti i ostale) | Desna margina je 0, a leva oko 15 px. Slike, CTA i sticky bar udaraju u ivicu. | Proveriti u DevTools-u na 390 i 375. Svi kontejneri treba da imaju simetričan `padding-inline: 20px`. Sticky bar: `left: 12px; right: 12px` ili puna širina sa unutrašnjim paddingom. |
| K3 | Signature element pretvoriti u pravi potpis | početna + lokacija + galerija, sve širine | Sada je sitan „✕“ koji se čita kao ikona za zatvaranje, a na 2 od 3 šablona ga nema. | Ukršteni ključevi i felna na oko 56–64 px, u hromu `#c9ccd1`, sa tankim hrom linijama levo i desno (1 px, oko 30% opacity, do širine kontejnera). Najmanje 64 px vertikalnog prostora iznad i ispod. Isti element dodati na lokacijski šablon (bar 2 puta) i u galeriju (između naslova i mreže). Može se uvesti i drugi motiv iz delatnosti, npr. tanka šara gazećeg sloja kao razdelnik u footeru. |

#### Važno
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| V1 | Hero na početnoj dati fotografiji | početna 1440/768 | Fotografija u maloj kartici ne nosi prvi utisak, a raspored je šablonski. | Fotografija (Milan na intervenciji noću, sa brendiranim kombijem) preko oko 55–60% širine, do ivice ekrana desno, sa tamnim gradijentom ka tekstu levo. Naslov ostaje levo, a stat-niz ide ispod, uz ivicu fotografije. LCP slika u AVIF/WebP, `fetchpriority="high"`, bez efekata. |
| V2 | Lokacijski hero sa fotografijom i ispravnim lomom | lokacija 1440/390 (važi za svih 12) | Sam centriran tekst izgleda generički, a naslov cepa „Novi / Beograd“. | Dvostubni hero kao na početnoj, sa fotografijom sa te lokacije ako postoji. Ime lokacije staviti u `white-space: nowrap` span ili ga prebaciti u sopstveni red: „Mobilni vulkanizer / *Novi Beograd* / dolazim za 15–30 min“. Tekst ograničiti na `max-width: 18ch` za h1. |
| V3 | Suziti tekstualnu kolonu na lokaciji | lokacija 1440/768 | Oko 110–120 karaktera po redu umara oko. | `max-width: 68ch` (oko 680 px) za paragrafe. Telo 17–18 px, `line-height 1.65`, boja svetlija (oko `#c9c9c9` na crnom, kontrast iznad 10:1). |
| V4 | Smanjiti broj crvenih CTA po ekranu | početna 1440/390 | Sedam jednako glasnih crvenih poziva poništava hijerarhiju. | Zadržati glasne samo u heroju, u završnom CTA i u sticky baru (na mobilnom). Crvenu traku ispod heroja pretvoriti u tamnu traku sa crvenim akcentom. CTA u sredini strane prebaciti u outline/hrom varijantu. |
| V5 | Razbiti obrazac „centriran eyebrow + naslov + podnaslov“ | početna 1440 | Svaka sekcija počinje isto, pa nema ritma. | Bar 2–3 sekcije sa naslovom levo i sadržajem desno (asimetrično 5/7). Koraci 1–4 kao horizontalna vremenska linija sa velikim Bebas brojevima (oko 120 px, hrom, 20% opacity) iza teksta. Lokacije kao lista/mapa, ne mreža kartica. |
| V6 | Razmak pre „Ako niste na Novom Beogradu“ | lokacija 1440/390 | Naslov je zalepljen za blok iznad. | Isti vertikalni razmak kao između ostalih sekcija (predlog 96 px na desktopu, 64 px na telefonu). Uvesti jednu skalu razmaka (8/16/24/40/64/96) i koristiti samo nju. |
| V7 | Zameniti emoji ikonice u footeru i ujednačiti veličinu | footer, sve strane, sve širine | Emoji izgledaju jeftino. Stavke kontakta imaju dve različite veličine fonta (telefon/WhatsApp/Viber su sitni i sivi, a adrese/radno vreme krupni i beli), što se vidi na galeriji 1440. | SVG ikonice od 16 px u hromu, sve stavke 15 px, iste boje. |
| V8 | Ujednačiti obradu fotografija | galerija, početna | Mešaju se noćni narandžasti i dnevni sivi snimci, bez zajedničkog stila. | Jedan blagi preset za sve: malo spušteno zasićenje, topliji crni tonovi, blaga vinjeta. Kadrovi gde je Milan u akciji staviti prve. U galeriji 1–2 slike u dvostrukoj veličini (mreža 4×, a prva 2×2) da mreža ne bude monotona. |

#### Nice-to-have
| # | Ispravka | Stranica/širina | Zašto | Kako konkretno |
|---|---|---|---|---|
| N1 | Uvesti hrom kao stvarni materijal | sve | Hrom postoji u sistemu, ali ga na snimcima nema. | Tanke hrom ivice (1 px gradijent `#c9ccd1`→`#6b6e73`) na stat karticama i FAQ stavkama. Hrom za brojeve u stat nizu umesto crvene. |
| N2 | Pojačati eyebrow | sve | Bebas eyebrow je sitan i bled. | 14–15 px, `letter-spacing: .25em`, `--gold-text #ff5c68`. |
| N3 | Skratiti footer na telefonu | sve, 390 | Oko 1.000 px liste. | Usluge i Lokacije staviti u akordeon ili u dve kolone od 2×6. Kontakt ide prvi. |
| N4 | Mapa na početnoj | početna 1440 | Okvir mape je na snimku prazan i taman. | Statična stilizovana mapa (SVG, tamna, sa crvenim tačkama lokacija) umesto iframe-a, jer je i brža. |

### Konzistentnost šablona (početna / lokacija / galerija)
- **Drži se:** header (logo, navigacija, crveno „Pozovi sada“), footer (identičan), paleta crno/crveno, Playfair naslovi i Bebas eyebrow, sticky call bar na 390, završni CTA blok sa velikim brojem telefona (početna i lokacija).
- **Ne drži se:**
  - signature element postoji samo na početnoj;
  - hero na lokaciji je potpuno drugačiji i siromašniji (centriran tekst bez fotografije) nego na početnoj;
  - galerija nema razdelnik ni ritam sekcija, samo naslov, mrežu i CTA;
  - CTA dugme u galeriji koristi plamen-gradijent, a na lokaciji ravnu crvenu, pa nije jasno koja je pravila za primarni CTA;
  - lokacijska strana je u suštini blog-članak sa CTA karticama. Vizuelni jezik početne (kartice, dve kolone, fotografije) tu skoro ne postoji.
- Zaključak: sistem boja i fontova je dosledan, **sistem kompozicije i potpisa nije**. Pošto 12 lokacijskih strana verovatno nosi najveći deo organskog saobraćaja, njihov šablon zaslužuje isti nivo pažnje kao početna.

### Referenca
Nema reference. Stavka 11 se ne ocenjuje. Nema preuzetog sadržaja.
