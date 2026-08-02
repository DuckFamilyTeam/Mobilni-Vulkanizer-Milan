import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';

export const metadata = {
  title: 'Galerija radova | Mobilni Vulkanizer Milan — Beograd',
  description:
    'Fotografije sa terena — mobilni vulkanizer Milan na intervencijama širom Beograda. Zamena guma, krpljenje, hitne intervencije noću i danju, profesionalna oprema.',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/galerija',
  },
  openGraph: {
    title: 'Galerija radova | Mobilni Vulkanizer Milan',
    description: 'Stvarne intervencije, stvarni klijenti — pogledajte Milana na terenu širom Beograda.',
    url: 'https://mobilnivulkanizermilan.com/galerija',
    locale: 'sr_RS',
    type: 'website',
  },
};

const images = [
  { src: '/8.webp', alt: 'Mobilni vulkanizer Milan na intervenciji u centru Beograda - kombi pored Skupštine', caption: 'Centar Beograda — intervencija na licu mesta' },
  { src: '/2.webp', alt: 'Zamena pneumatika na parkingu - mobilni vulkanizer Novi Beograd', caption: 'Zamena gume — Novi Beograd' },
  { src: '/6.webp', alt: 'Milan menja gumu na licu mesta - mobilni vulkanizer u akciji u Beogradu', caption: 'Zamena gume kod klijenta' },
  { src: '/4.webp', alt: 'Mobilni vulkanizer servis BMW X6 noću u Beogradu - 24h dostupan', caption: 'Servis luksuznih vozila' },
  { src: '/7.webp', alt: 'Hitna noćna zamena gume na BMW limuzini - vulkanizer Beograd 24h', caption: 'Hitna intervencija noću' },
  { src: '/1.webp', alt: 'Mobilni vulkanizer Milan kombi - 24h vulkanizer Beograd na poziv', caption: 'Kombi Milan — 24h dostupan' },
  { src: '/3.webp', alt: 'Profesionalna vulkanizerska oprema u mobilnom kombiju - balanser i montirka', caption: 'Profesionalna oprema u kombiju' },
  { src: '/autoput.webp', alt: 'Mobilni vulkanizer Milan - beli kombi sa natpisom Vaš prijatelj na putu parkiran u centru Beograda', caption: 'Vaš prijatelj na putu — uvek tu' },
  { src: '/intervencija.webp', alt: 'Vulkanizer Milan menja gumu na crnom Ford Fiesta - mobilna intervencija na licu mesta u Beogradu', caption: 'Zamena gume — Ford Fiesta, Beograd' },
  { src: '/brza-zamena-guma.webp', alt: 'Beli Peugeot kombi mobilnog vulkanizera Milan parkiran pored smeđeg Mini Cooper Countrymana — zamena točka na terenu na ulici u Beogradu', caption: 'Brza zamena gume — na terenu' },
  { src: '/nase-masine-su-potpuno-nove.webp', alt: 'Unutrašnjost servisnog kombija mobilnog vulkanizera — plava mašina za menjanje guma, balanser točkova RRXTT, agregat i alat — potpuno nova profesionalna oprema', caption: 'Profesionalna nova oprema u kombiju' },
  { src: '/tu-smo-za-sve-i-na-svim-lokacijama.webp', alt: 'Mobilni vulkanizer Milan noću ispred Skupštine Srbije u centru Beograda — servisiranje belog automobila sa hidrauličnom dizalicom i alatom, 24h non-stop', caption: 'Na svim lokacijama — 24h non-stop' },
  { src: '/kombi-oprema.webp', alt: 'Unutrašnjost mobilnog vulkanizerskog kombija — plava mašina za montažu guma, balansirka i žuti kompresor, profesionalna oprema na jednom mestu', caption: 'Oprema u kombiju — sve na jednom mestu' },
  { src: '/punjenje-gume-land-rover.webp', alt: 'Vulkanizer puni gumu Land Rover vozila pored mobilnog servisnog kombija — intervencija na licu mesta', caption: 'Punjenje gume — Land Rover, na licu mesta' },
  { src: '/land-rover-dizalica.webp', alt: 'Land Rover Defender na hidrauličnoj dizalici — skidanje točka na parkingu, mobilna vulkanizerska intervencija', caption: 'Zamena točka — Land Rover Defender' },
  { src: '/montaza-gume-land-rover.webp', alt: 'Vulkanizer montira gumu na Land Rover Defender — intervencija na terenu, parking, mobilni vulkanizer Beograd', caption: 'Montaža gume — Land Rover, parking' },
];

export default function GalerijaPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="gallery-section" style={{ paddingTop: '140px' }} role="region" aria-labelledby="gallery-title">
          <div className="container">
            <div className="section-header">
              <div className="eyebrow">Galerija radova</div>
              <h1 id="gallery-title">Stvarne intervencije, stvarni klijenti</h1>
              <p>Kompletna dokumentacija sa terena — od probušenih guma na autoputu do zamene zimskih guma ispred kuće, u svako doba dana i noći.</p>
            </div>

            <div className="gallery-grid">
              {images.map((img) => (
                <div className="gallery-item" key={img.src}>
                  <img
                    src={img.src}
                    data-full={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="800"
                    sizes="(max-width: 640px) calc(50vw - 16px), (max-width: 1024px) calc(33vw - 16px), 400px"
                  />
                  <div className="gallery-item-overlay"><span>{img.caption}</span></div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href="tel:+381641290929" className="btn-primary flame-cta">📞 Pozovi: +381 64 12 90 929</a>
            </div>
          </div>
        </section>

        {/* ============ LIGHTBOX ============ */}
        <div className="lightbox" id="lightbox" role="dialog" aria-label="Pregled slike">
          <button className="lightbox-close" aria-label="Zatvori sliku">×</button>
          <img id="lightboxImg" src="" alt="" />
        </div>
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
