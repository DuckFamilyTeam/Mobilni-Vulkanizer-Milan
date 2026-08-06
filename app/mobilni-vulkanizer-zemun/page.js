import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import { getGbpRating } from '../lib/googlePlaces';

export const metadata = {
  title: 'Mobilni Vulkanizer Zemun | Dolazak 15-30 min, 24/7',
  description:
    'Mobilni vulkanizer Zemun, dolazim na bilo koju adresu u Zemunu za 15-30 minuta. Od Gardoša do Bežanijske kose. Krpljenje gume, zamena pneumatika, balansiranje. 10+ godina iskustva. +381 64 12 90 929.',
  keywords:
    'mobilni vulkanizer zemun, vulkanizer zemun, krpljenje gume zemun, zamena guma zemun, vulkanizer gardoš, vulkanizer bežanijska kosa, vulkanizer 24h zemun, vulkanizer dolazi na adresu zemun, vulkanizer noću zemun, vulkanizer vikend zemun',
  alternates: {
    canonical: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
  },
  openGraph: {
    title: 'Mobilni Vulkanizer Zemun | 15-30 min, 24/7',
    description:
      'Probušena guma u Zemunu? Stižem na vašu adresu za 15-30 minuta, sa preko 10 godina iskustva. Non-stop 24h.',
    url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
    locale: 'sr_RS',
    type: 'website',
  },
};

function buildLocationJsonLd(rating, reviewCount) {
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun#service',
      name: 'Mobilni Vulkanizer Zemun',
      description:
        'Mobilna vulkanizerska usluga u Zemunu — dolazak na bilo koju adresu za 15-30 minuta. Od Gardoša do Bežanijske kose. Non-stop 24h.',
      url: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
      provider: { '@id': 'https://www.mobilnivulkanizermilan.com/#business' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Zemun', containedInPlace: { '@type': 'City', name: 'Beograd' } },
      serviceType: 'Mobilna vulkanizerska usluga',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.mobilnivulkanizermilan.com/mobilni-vulkanizer-zemun',
        servicePhone: '+381641290929',
        availableLanguage: 'Serbian',
      },
    },
  ],
};
}

export default async function ZemunPage() {
  const { rating, reviewCount } = await getGbpRating();
  const locationJsonLd = buildLocationJsonLd(rating, reviewCount);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd) }}
      />
      <Header />
      <main id="main-content">

      <section className="loc-hero" role="region" aria-labelledby="loc-title">
        <div className="container">
          <div className="loc-hero-inner">
            <div className="eyebrow">
              <span className="live-pulse"></span>
              Zemun · Dostupan sada
            </div>

            <h1 id="loc-title">
              Mobilni vulkanizer <span className="accent">Zemun</span>
              <br />
              dolazim za 15-30 minuta
            </h1>

            <p className="loc-hero-lead">
              Od starog jezgra Zemuna do Bežanijske kose, od Tošinog bunara do
              Keja oslobođenja — kad nekome u Zemunu pukne guma, dolazim brzo
              i radim profesionalno. Više od 10 godina iskustva u zanatu, sva
              oprema u servisnom vozilu, garancija na rad. Non-stop, 24 časa
              dnevno.
            </p>

            <div className="loc-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovi mobilnog vulkanizera Zemun"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Pozovi: +381 64 12 90 929
              </a>
              <a href="https://wa.me/381641290929" className="btn-secondary">
                💬 WhatsApp
              </a>
            </div>

            <span className="loc-hero-quick">
              ⚡ <strong>Stari Zemun · Gardoš · Tošin bunar · Bežanijska kosa · Altina</strong>
            </span>
          </div>
        </div>
      </section>

      <section className="loc-content">
        <div className="container">
          <div className="loc-content-inner">
            <h2>Mobilni vulkanizer koji odlično poznaje Zemun</h2>
            <p>
              Zemun je specifičan deo Beograda. Sa svoje dve velike celine —
              starim, istorijskim jezgrom i modernim novogradnjama na
              Bežanijskoj kosi i Altini — ima ulice koje se ne nalaze tako
              lako sa GPS-a. Strme uličice ka Gardošu, jednosmerne kraj
              Magistratskog trga, saobraćajne gužve ka Tošinom bunaru… Sve to
              znam, jer{' '}
              <strong>više od 10 godina</strong> radim kao mobilni vulkanizer i
              Zemun mi je jedan od najfrekventnijih kvartova.
            </p>

            <p>
              Bez obzira da li ste parkirali u Glavnoj ulici, na Keju
              oslobođenja kraj Dunava, ispred Zemun Park-a, kod Pijace Zemun,
              u Cara Dušana ili negde dublje u Bežanijskoj kosi — stižem u
              proseku za 15 do 30 minuta. Realnu procenu vam dam pre nego što
              krenem, da znate tačno koliko da računate.
            </p>

            <div className="loc-quick-stats">
              <div className="loc-stat">
                <div className="loc-stat-num">15-30</div>
                <div className="loc-stat-label">min do dolaska</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">10+</div>
                <div className="loc-stat-label">godina iskustva</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">24/7</div>
                <div className="loc-stat-label">non-stop</div>
              </div>
              <div className="loc-stat">
                <div className="loc-stat-num">{rating.toFixed(1)}★</div>
                <div className="loc-stat-label">Google ocena</div>
              </div>
            </div>

            <h2>Stari Zemun — uske ulice nisu problem</h2>
            <p>
              Stari deo Zemuna ima svoj šarm, ali i svoje izazove za rad sa
              autom. Ulice oko Gardoša, Visoki Stevan, Magistratski trg, kalvarija
              prema Kuli Sibinjanin Janka — često tu ne možete ni okrenuti
              vozilo, a kamoli da gurate auto sa probušenom gumom. Zato dolazim
              ja: parkiram servisno vozilo na razuman položaj, krpim ili
              menjam gumu na licu mesta, i čovek nastavlja gde je krenuo —
              bez gužve, bez stresa.
            </p>

            <div className="loc-cta-band">
              <h3>Probušena guma u Zemunu — sad?</h3>
              <p>
                Pozovite, recite mi adresu, i dobijate realnu procenu vremena
                dolaska pre nego što krenem ka vama.
              </p>
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah: +381 64 12 90 929
              </a>
            </div>

            <h2>Bežanijska kosa, Altina, Zemun Polje</h2>
            <p>
              Novogradnja je Zemunu donela hiljade novih stanara, a i nove
              probleme — ulice u Bežanijskoj kosi su širi, ali parkinzi često
              prepuni, a posebno problematične su rupe na asfaltu kod
              raskrsnica. Mobilni vulkanizer dolazi na konkretne adrese: bilo
              da ste u Marka Čelebonovića, na ulasku u Altinu, kod Zemun Park
              tržnog centra, ili duž Tošinog bunara — pokrivenost je pun krug.
            </p>

            <h3>Sva mesta u Zemunu gde dolazim</h3>
            <ul>
              <li>Stari Zemun — Glavna ulica, Magistratski trg, Visoki Stevan, Gardoš</li>
              <li>Kej oslobođenja — restorani, šetalište, marina</li>
              <li>Cara Dušana, Sindjelićeva, 22. oktobra — sve adrese</li>
              <li>Tošin bunar — celom dužinom do Novog Beograda</li>
              <li>Bežanijska kosa I, II i III blok</li>
              <li>Altina, Plavi horizonti, Zemun Polje</li>
              <li>Pijaca Zemun, Zemun Park Mall, OŠ "Sonja Marinković"</li>
            </ul>

            <h2>Profesionalan alat, ne improvizacija</h2>
            <p>
              U servisnom vozilu nosim sve što ima i fiksna vulkanizerska
              radnja: kompresor, hidrauličnu dizalicu, balansirku, opremu za
              demontažu i montažu, materijal za krpljenje gume iznutra,
              instrumente za proveru pritiska. Krpim sa{' '}
              <strong>garancijom od 30 dana</strong>, balansiram do nule,
              menjam pneumatike bez oštećenja felne. To nije nešto što se uči
              na YouTube-u za vikend — to je decenija realnog rada na ulici.
            </p>

            <h2>Kada me najčešće zovu iz Zemuna</h2>
            <p>
              Iz Zemuna pozivi dolaze u tri tipične situacije.{' '}
              <strong>Prvo</strong> — vozači koji izlaze iz tržnog centra
              Zemun Park ili Zemunske pijace, parkiraju kola u redovnoj
              rutini, i tek kad krenu kući primete da im je guma ispraznjena.
              Tipično šraf, ekser ili komad stakla iz neuredne ulice. Stignem
              brzo, krpim na licu mesta, i kupovina se završava onako kako je
              i trebalo.
            </p>
            <p>
              <strong>Drugo</strong> — turisti i ljudi iz drugih delova grada
              koji dođu u Stari Zemun u šetnju kraj Dunava, parkiraju kraj
              Keja oslobođenja, i tu naiđu na probušenu gumu. Stari deo grada
              ima neravne kaldrme i ulice gde je lako udariti felnu — sa tim
              poslovima imam najviše iskustva, jer Zemun znam u prste.
            </p>
            <p>
              <strong>Treće</strong> — stanovnici Bežanijske kose koji ujutru
              kreću na posao u centar i otkriju ispraznjenu gumu nakon
              noćnog "punjenja" zbog probušenog protektora. Ovde je brzina
              ključna, jer ljudi ne smeju da kasne. Kao mobilni vulkanizer
              razumem koliko je svaki minut važan.
            </p>

            <h2>Sezonska zamena guma — Zemun</h2>
            <p>
              Pored hitnih intervencija, jedan od najtraženijih servisa u
              Zemunu je <strong>sezonska zamena letnjih i zimskih
              pneumatika</strong>. Umesto da gubite pola dana u redu kod
              fiksne radnje, dogovorimo termin koji vama odgovara — pre
              posla, tokom pauze, ili uveče kod kuće. Donosim sve što treba i
              uradim na licu mesta. Praktično za sve koji žive u zgradama u
              Bežanijskoj kosi i nemaju vremena za "vulkanizerski izlet".
            </p>

            <h2>Pozovi sada — u Zemunu sam za 15-30 min</h2>
            <p>
              Ne morate gubiti pola dana, ne morate gurati auto, ne morate
              čekati vučnu službu. Pozovite{' '}
              <strong>+381 64 12 90 929</strong>, recite mi tačnu adresu u
              Zemunu i šta se desilo, dobićete procenu vremena dolaska i fer
              cenu pre početka rada. Profesionalan mobilni vulkanizer na vašoj
              adresi — non-stop, 24h, svih 365 dana u godini.
            </p>
          </div>
        </div>
      </section>

      <section className="loc-final-cta">
        <div className="container">
          <div className="loc-final-cta-inner">
            <div className="eyebrow">Hitan poziv</div>
            <h2>Probušena guma u Zemunu? Stižem brzo</h2>
            <p>
              Jedan poziv je sve što vam treba. 24 časa dnevno, svih 365 dana
              u godini.
            </p>
            <div className="loc-final-cta-num">
              <a href="tel:+381641290929">+381 64 12 90 929</a>
            </div>
            <div className="loc-final-cta-actions">
              <a href="tel:+381641290929" className="btn-primary">
                📞 Pozovi odmah
              </a>
              <a href="https://wa.me/381641290929" className="btn-secondary">
                💬 WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B381641290929"
                className="btn-secondary"
              >
                💬 Viber
              </a>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
