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

// Mapping: source JPG → output WebP name
const conversions = [
  { src: 'autoput.jpg',                                   out: 'autoput.webp' },
  { src: 'intervencija.jpg',                              out: 'intervencija.webp' },
  { src: 'brza-zamena-guma.jpg',                          out: 'brza-zamena-guma.webp' },
  { src: 'naše-mašine-su-potpuno-nove.jpg',               out: 'nase-masine-su-potpuno-nove.webp' },
  { src: 'tu-smo-za-sve-i-na-svim-lokacijama.jpg',        out: 'tu-smo-za-sve-i-na-svim-lokacijama.webp' },
  { src: 'kombi-oprema.jpg',                              out: 'kombi-oprema.webp' },
  { src: 'punjenje-gume-land-rover.jpg',                  out: 'punjenje-gume-land-rover.webp' },
  { src: 'land-rover-dizalica.jpg',                       out: 'land-rover-dizalica.webp' },
  { src: 'montaza-gume-land-rover.jpg',                   out: 'montaza-gume-land-rover.webp' },
];

async function convert() {
  console.log('🔄 Konvertovanje JPG → WebP...\n');

  for (const { src, out } of conversions) {
    const srcPath = path.join(publicDir, src);
    const outPath = path.join(publicDir, out);

    if (!fs.existsSync(srcPath)) {
      console.log(`⚠️  Preskočen (ne postoji): ${src}`);
      continue;
    }

    try {
      await sharp(srcPath)
        .webp({ quality: 82, effort: 6 })
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
