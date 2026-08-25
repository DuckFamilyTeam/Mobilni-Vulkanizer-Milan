// Postbuild korak: ručno pokreće critters nad već generisanim statičkim
// HTML fajlovima u .next/server/app/*.html.
//
// Zašto ovo postoji: Next.js 14 App Router ne podržava pouzdano
// experimental.optimizeCss (probano 2026-08-25, build prolazi ali critters se
// ne aktivira). Ova skripta radi isti posao ručno, direktno na build output-u:
// za svaki statički HTML fajl, critters analizira koji CSS je stvarno potreban
// za prvi prikaz (above-the-fold) i:
//   1. Ubacuje taj kritični CSS inline u <head> kao <style>.
//   2. Ostatak globals.css i dalje učitava, ali asinhrono (preload + media
//      swap trik), tako da više NE blokira prvo iscrtavanje.
//   3. Dodaje <noscript> fallback za slučaj da je JS isključen.
//
// Cilj: direktno napasti PageSpeed nalaz "resursi koji blokiraju
// iscrtavanje" (procenjena ušteda 1.250-1.600 ms), bez ijedne izmene u
// React komponentama — ovo dira samo već generisani HTML, posle builda.
//
// Pokreće se automatski kao deo `npm run build` (vidi package.json).

const fs = require('fs');
const path = require('path');
const Critters = require('critters');

const APP_DIR = path.join(__dirname, '..', '.next', 'server', 'app');

async function run() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('[inline-critical-css] Ne postoji .next/server/app — pokreni posle `next build`.');
    process.exit(1);
  }

  const critters = new Critters({
    path: path.join(__dirname, '..', '.next'),
    publicPath: '/_next',
    preload: 'swap', // async-load ostatak CSS-a (media="print" pa swap na "all" preko onload)
    pruneSource: false, // ne diraj originalni CSS fajl, samo generiši inline podskup
    compress: true,
    logLevel: 'warn',
  });

  // Rekurzivno — blog postovi (i svaka buduća ugnežđena ruta) žive u
  // podfolderima (npr. app/blog/naslov-posta.html), ne samo u korenu.
  function findHtmlFiles(dir) {
    let results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(findHtmlFiles(full));
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        results.push(full);
      }
    }
    return results;
  }

  const files = findHtmlFiles(APP_DIR);

  let processed = 0;
  for (const filePath of files) {
    const relLabel = path.relative(APP_DIR, filePath);
    const html = fs.readFileSync(filePath, 'utf8');
    try {
      let result = await critters.process(html);

      // critters-ov ugrađeni preload:'swap' NE radi ispravno sa Next.js App
      // Router-ovim React-float stylesheet linkovima (data-precedence="next")
      // — proba da doda onload, ali ostavi rel="stylesheet", pa link i dalje
      // blokira iscrtavanje kao da ništa nije dirano. Provereno 2026-08-25.
      // Ručno popravljamo SAMO prvi (ne-noscript) primerak tog linka: menjamo
      // ga u rel="preload" + swap na onload, tačno prema standardnoj tehnici.
      // Noscript fallback (drugi primerak) ostaje netaknut — za posetioce bez
      // JS-a je ispravno da ostane odmah blokirajući <link rel="stylesheet">.
      const before = result;
      result = result.replace(
        /<link rel="stylesheet" href="([^"]+)" data-precedence="next" onload="this\.rel='stylesheet'"><noscript>/,
        '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript>'
      );
      if (result === before) {
        console.warn(`[inline-critical-css] UPOZORENJE: očekivani <link> obrazac nije nađen u ${relLabel} — proveri ručno da li je Next.js promenio format linka.`);
      }

      fs.writeFileSync(filePath, result, 'utf8');
      processed += 1;
      console.log(`[inline-critical-css] OK: ${relLabel}`);
    } catch (err) {
      console.error(`[inline-critical-css] GREŠKA na ${relLabel}, fajl OSTAVLJEN NEPROMENJEN:`, err.message);
      // Namerno ne bacamo grešku dalje (process.exit) — bolje da jedna stranica
      // ostane bez inline kritičnog CSS-a (samo malo sporija) nego da ceo build padne.
    }
  }

  console.log(`[inline-critical-css] Gotovo: ${processed}/${files.length} fajlova obrađeno.`);
}

run().catch((err) => {
  console.error('[inline-critical-css] Neočekivana greška:', err);
  process.exit(1);
});
