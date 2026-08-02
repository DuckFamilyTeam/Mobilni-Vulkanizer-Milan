/**
 * convert-images.js
 * Konvertuje sve JPG slike u public/ u WebP format.
 * Pokreni: node convert-images.js
 *
 * Koristi sharp koji je već u Next.js projektu kao dependency.
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, 'public');

const jpgFiles = [
  'autoput.jpg',
  'intervencija.jpg',
  'brza-zamena-guma.jpg',
  'naše-mašine-su-potpuno-nove.jpg',
  'tu-smo-za-sve-i-na-svim-lokacijama.jpg',
  'kombi-oprema.jpg',
  'punjenje-gume-land-rover.jpg',
  'land-rover-dizalica.jpg',
  'montaza-gume-land-rover.jpg',
  // Rename target (nase-masine... bez dijakritika)
];

// Mapping: source JPG → output WebP name → max širina (px) za stvarnu prikaznu veličinu.
// Svi ovi fajlovi se prikazuju ili kao ~800x800 galerija thumbnail (sizes max 400px CSS,
// znači 900w pokriva i 2x retina) ili kao hero slika (max ~540px CSS na desktopu,
// max ~400px CSS na mobilnom @2.6x DPR ≈ 1040px — 1000w je siguran max).
// quality 72 (sa 82) — vizuelno skoro identično za foto sadržaj, ali znatno manji fajl.
const conversions = [
  { src: 'autoput.jpg',                                   out: 'autoput.webp',                              width: 900 },
  { src: 'intervencija.jpg',                              out: 'intervencija.webp',                          width: 900 },
  { src: 'brza-zamena-guma.jpg',                          out: 'brza-zamena-guma.webp',                      width: 900 },
  { src: 'naše-mašine-su-potpuno-nove.jpg',               out: 'nase-masine-su-potpuno-nove.webp',           width: 900 },
  { src: 'tu-smo-za-sve-i-na-svim-lokacijama.jpg',        out: 'tu-smo-za-sve-i-na-svim-lokacijama.webp',    width: 900 },
  { src: 'kombi-oprema.jpg',                              out: 'kombi-oprema.webp',                          width: 900 },
  { src: 'punjenje-gume-land-rover.jpg',                  out: 'punjenje-gume-land-rover.webp',              width: 900 },
  { src: 'land-rover-dizalica.jpg',                       out: 'land-rover-dizalica.webp',                   width: 900 },
  { src: 'montaza-gume-land-rover.jpg',                   out: 'montaza-gume-land-rover.webp',               width: 1000 }, // hero/LCP
];

async function convert() {
  console.log('🔄 Konvertovanje JPG → WebP...\n');

  for (const { src, out, width } of conversions) {
    const srcPath = path.join(publicDir, src);
    const outPath = path.join(publicDir, out);

    if (!fs.existsSync(srcPath)) {
      console.log(`⚠️  Preskočen (ne postoji): ${src}`);
      continue;
    }

    try {
      await sharp(srcPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 72, effort: 6 })
        .toFile(outPath);

      const origSize = fs.statSync(srcPath).size;
      const newSize  = fs.statSync(outPath).size;
      const savings  = Math.round((1 - newSize / origSize) * 100);

      console.log(
        `✅ ${src} → ${out}` +
        `\n   ${(origSize / 1024).toFixed(0)} KB → ${(newSize / 1024).toFixed(0)} KB` +
        ` (${savings}% manje)\n`
      );
    } catch (err) {
      console.error(`❌ Greška za ${src}:`, err.message);
    }
  }

  console.log('✅ Gotovo! Sve slike su konvertovane u WebP.');
  console.log('   Originalne JPG fajlove možeš obrisati posle deploy-a ako hoćeš.');
}

convert();
