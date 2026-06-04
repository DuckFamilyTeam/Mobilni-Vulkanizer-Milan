import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCall from '../../components/StickyCall';
import Link from 'next/link';

export const metadata = {
  title: 'Kada promeniti zimske za letnje gume (i obrnuto) | Zakon Srbije | Mobilni Vulkanizer Milan',
  description:
    'Kada po zakonu Srbije morate imati zimske gume? Koji je pravi trenutak za sezonsku zamenu? Sve što vozač treba da zna — od zakonskih obaveza do praktičnih saveta.',
  keywords:
    'kada promeniti zimske za letnje gume, sezonska zamena guma, zimske gume zakon srbija, kada montirati zimske gume, zimske letnje gume srbija, mobilni vulkanizer zamena guma beograd',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/blog/kada-promeniti-zimske-za-letnje-gume',
  },
  openGraph: {
    title: 'Kada promeniti zimske za letnje gume — Zakon Srbije i praktični saveti',
    description:
      'Zakonske obaveze i pravi trenutak za sezonsku zamenu guma — sve što treba da znate kao vozač u Srbiji.',
    url: 'https://mobilnivulkanizermilan.com/blog/kada-promeniti-zimske-za-letnje-gume',
    locale: 'sr_RS',
    type: 'article',
  },
};

export default function ZimskeLetnjePage() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="blog-post-hero" role="region" aria-labelledby="post-title">
        <div className="container">
          <div className="blog-post-hero-inner">
            <Link href="/blog" className="blog-post-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Nazad na Blog
            </Link>

            <div className="blog-post-meta">
              <span className="blog-card-category">Zakon & saveti</span>
              <span className="blog-post-meta-sep">·</span>
              <span>Jun 2026</span>
              <span className="blog-post-meta-sep">·</span>
              <span>7 min čitanja</span>
            </div>

            <h1 id="post-title">
              Kada promeniti zimske za letnje gume{' '}
              <span className="accent">(i obrnuto)</span>
              <br />
              — šta kaže zakon Srbije
            </h1>

            <p className="blog-post-hero-lead">
              Svake jeseni i proleća isto pitanje: kada je pravi trenutak za sezonsku
              zamenu guma? Iza toga stoje i zakonske obaveze — kazne, ali i bezbednost
              na putu. Odgovor nije samo "kad padne sneg".
            </p>

            <div className="blog-post-hero-cta">
              <a href="tel:+381641290929" className="btn-primary" aria-label="Pozovite mobilnog vulkanizera Milana za sezonsku zamenu guma">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                DOGOVORITE SEZONSKU ZAMENU: +381 64 12 90 929
              </a>
              <span className="blog-post-hero-hint">⚡ Dolazak na vašu adresu · Ceo Beograd</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE CONTENT ===== */}
      <article className="blog-article">
        <div className="container">
          <div className="blog-article-inner">

            <p className="blog-article-intro">
              Pitanje "kada montirati zimske gume" nije samo stvar komfora — u Srbiji
              postoje zakonske obaveze koje mogu rezultirati novčanom kaznom. Ali iza
              zakona stoji i bitniji razlog: hemija gume koja u pogrešnoj sezoni može
              koštati znatno više od kazne.
            </p>

            {/* --- SEKCIJA 1 --- */}
            <h2>1. Šta kaže zakon Republike Srbije</h2>
            <p>
              Zakon o bezbednosti saobraćaja na putevima Republike Srbije (član 212)
              propisuje da vozač mora da koristi zimsku opremu na vozilu za vreme
              zimskih uslova. Konkretno:
            </p>

            <div className="blog-callout blog-callout--warning">
              <strong>⚖️ Zakonska obaveza:</strong> Prema Zakonu o bezbednosti saobraćaja
              na putevima RS, vozač je dužan da koristi zimske gume ili da u vozilu ima
              lance za sneg u periodu od <strong>1. novembra do 1. aprila</strong>, kada
              to nalažu zimski uslovi na putu (sneg, led, poledica). Na pojedinim
              planinarskim i brdskim putevima ova obaveza je apsolutna bez obzira na
              trenutne uslove.
            </div>

            <p>
              Kazna za vožnju bez zimske opreme u zimskim uslovima iznosi od
              <strong> 5.000 do 20.000 dinara</strong> za fizička lica. Pored novčane
              kazne, u slučaju saobraćajne nezgode neposedovanje adekvatnih guma može
              negativno uticati na osiguranje i pravnu odgovornost.
            </p>

            <p>
              Važno je napomenuti: <strong>zakon ne zabranjuje vožnju zimskim gumama
              leti</strong>, ali je to loše za bezbenost (mekša guma se brže troši,
              lošiji odziv na visokim temperaturama) i za džep (zimska guma na asfaltu
              u julu je u potpunosti uništena za jednu sezonu).
            </p>

            {/* --- SEKCIJA 2 --- */}
            <h2>2. Letnje za zimske: Kada montirati zimske gume?</h2>
            <p>
              Zakonski period počinje 1. novembra, ali <strong>pravi odgovor je
              temperatura, ne datum na kalendaru</strong>. Zimske gume su napravljene
              od posebne mešavine gume koja ostaje fleksibilna ispod 7°C. Letnje gume
              ispod te granice počinju da se "stvrdnjavaju" i gube prianjanje — čak
              i na suvom asfaltu bez ikakvog snega.
            </p>

            <div className="blog-step">
              <div className="blog-step-num">Pravilo br. 1</div>
              <h3>Temperatura ispod 7°C = zimske gume</h3>
              <p>
                Kada prosečna dnevna temperatura padne ispod 7°C — što je u Beogradu
                tipično između sredine i kraja oktobra — vreme je za montažu zimskih
                guma. Ne čekajte prvi sneg. Sneg je već kasno.
              </p>
            </div>

            <div className="blog-step">
              <div className="blog-step-num">Pravilo br. 2</div>
              <h3>Oktobar je bolji od novembra</h3>
              <p>
                Vulkanizerske radnje u novembru su prepune. Ko dođe u oktobru,
                čeka manje, bira termin koji mu odgovara i nema stres. Sezonska
                zamena traje 20–40 minuta — isplatljivije je obaviti je bez žurbe.
              </p>
            </div>

            <div className="blog-step">
              <div className="blog-step-num">Pravilo br. 3</div>
              <h3>Planinarite ili živite na brdovitom terenu?</h3>
              <p>
                Za vozače koji svakodnevno voze brdskim putevima, preporuka je
                montaža zimskih guma već u prvoj polovini oktobra, bez čekanja na
                temperature. Brdski putevi hlade se i mrznu ranije nego gradski asfalt.
              </p>
            </div>

            {/* --- SEKCIJA 3 --- */}
            <h2>3. Zimske za letnje: Kada skidati zimske gume?</h2>
            <p>
              Prolećna dilema je suprotna: mnogi ostavljaju zimske gume predugo, što
              je skupo i nepotrebno. Zimska guma na toplom asfaltu troši se znatno brže
              nego letnja, a i bezbednost je lošija jer je mekša guma sklona
              pregrevanju i klizanju pri naglim kočenjima.
            </p>

            <div className="blog-callout">
              <strong>🌡️ Kada skidati zimske:</strong> Kada prosečna dnevna temperatura
              stalno prelazi 7°C — u Beogradu tipično <strong>između 15. marta i
              kraja aprila</strong>. Ne čekajte Uskrs ili "prvu toplotu" — temperature
              se prate, ne praznici.
            </div>

            <p>
              Praktičan okidač za Beograd i okolinu: <strong>posle Đurđevdana
              (6. maja) ne bi trebalo da vozite zimskim gumama</strong>. Do tada, ako
              se temperatura vratila iznad 7°C stabilno — skidajte zimske.
            </p>

            {/* --- SEKCIJA 4 --- */}
            <h2>4. All-season (celoSezonske) gume — da ili ne?</h2>
            <p>
              All-season gume su kompromis koji funkcioniše u umerenim klimama. Za
              Beograd, koji ima prave zimske temperature, ali i vrela leta, one su
              prihvatljivo rešenje samo za vozače koji malo voze i nemaju ekstremne
              uslove. Evo poštenog poređenja:
            </p>

            <div className="blog-compare">
              <div className="blog-compare-item">
                <div className="blog-compare-label blog-compare-label--ok">All-season gume</div>
                <p>
                  Nema sezonske zamene, jedan set guma godišnje. Prihvatljive
                  performanse i ljeti i zimi za gradsku vožnju. Zakonski prihvaćene
                  kao zimska oprema. Slabije od specijalnih guma u ekstremnim
                  uslovima (jak sneg, led, vrućina iznad 35°C).
                </p>
              </div>
              <div className="blog-compare-item">
                <div className="blog-compare-label blog-compare-label--pro">2 seta sezonskih guma</div>
                <p>
                  Maksimalna bezbednost u oba godišnja doba. Duži vek trajanja
                  svakog seta (troše se naizmenično). Bolje performanse na ledu,
                  snegu i vlažnom asfaltu. Veći početni trošak, ali isplativije
                  dugoročno.
                </p>
              </div>
            </div>

            {/* --- SEKCIJA 5 --- */}
            <h2>5. Čuvanje guma između sezona</h2>
            <p>
              Gume koje trenutno ne koristite zahtevaju pravilno čuvanje da bi
              sledeće sezone bile jednako dobre:
            </p>
            <ul>
              <li>
                <strong>Temperatura:</strong> Čuvajte na hladnom i suvom mestu, idealno
                između 10°C i 25°C. Garaža je dobra, podrum prihvatljiv.
              </li>
              <li>
                <strong>Svetlost:</strong> Direktna sunčeva svetlost i UV oštećuju gumu
                — koristite zaštitne navlake ili čuvajte u kutiji.
              </li>
              <li>
                <strong>Pozicija:</strong> Gume na felni čuvajte u stojećem položaju
                (kao točak). Gume bez felne — složene jednu na drugu, horizontalno.
              </li>
              <li>
                <strong>Bez kontakta sa uljima i gorivom:</strong> Hemikalije razaraju
                gumu — daljina od rezervoara, motornih ulja i rastvarača je obavezna.
              </li>
            </ul>

            {/* --- SEKCIJA 6 --- */}
            <h2>6. Pravo vreme za sezonsku zamenu u Beogradu (kratak rezime)</h2>
            <ul>
              <li><strong>Montaža zimskih:</strong> Oktobar — kada temperatura krene ispod 7°C (pre 1. novembra)</li>
              <li><strong>Skidanje zimskih:</strong> Mart–april — kada temperatura stabilno prelazi 7°C</li>
              <li><strong>Zakonski minimum:</strong> 1. novembar – 1. april (zimska oprema obavezna po zakonu)</li>
              <li><strong>Kazna za nepoštovanje:</strong> 5.000–20.000 dinara + moguće posledice pri osiguranju</li>
            </ul>

            {/* --- ZAKLJUČAK --- */}
            <h2>Zaključak</h2>
            <p>
              Sezonska zamena guma nije samo zakonska obaveza — to je najjeftinija
              investicija u bezbednost vašeg vozila. Dve do tri nedelje u godišnje
              provedene na gumama van sezone koštaju vas trostruko: trošenjem gume,
              lošijom bezbednošću i rizikom od kazne.
            </p>
            <p>
              Ukoliko vam je praktičnije, zamenu možemo obaviti direktno kod vas —
              bez odlaska u radnju, bez čekanja u redu. Dogovorite termin pre nego
              što gužva počne.
            </p>

          </div>
        </div>
      </article>

      {/* ===== CTA SEKCIJA ===== */}
      <section className="blog-article-cta" role="region" aria-label="Poziv na akciju">
        <div className="container">
          <div className="blog-article-cta-inner">
            <div className="eyebrow">Sezonska zamena guma · Beograd</div>
            <h2>
              Dogovorite sezonsku zamenu —<br />
              <span className="accent">bez gužve, bez čekanja!</span>
            </h2>
            <p>
              Milan dolazi na vašu adresu sa kompletnim alatom i balansirkom.
              Zamena 4 gume za <strong>20–40 minuta</strong> direktno ispred vaše
              kuće ili na poslu. Non-stop 24h, ceo Beograd.
            </p>

            <div className="blog-article-cta-num">
              <a href="tel:+381641290929">+381 64 12 90 929</a>
            </div>

            <a href="tel:+381641290929" className="btn-primary blog-article-cta-btn" aria-label="Pozovite mobilnog vulkanizera Milana">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              POZOVITE NAS
            </a>

            <div className="blog-article-cta-actions">
              <a href="https://wa.me/381641290929" className="btn-secondary">💬 WhatsApp</a>
              <a href="viber://chat?number=%2B381641290929" className="btn-secondary">💬 Viber</a>
            </div>

            <span className="blog-article-cta-hint">⚡ Dolazak 20–30 min · Non-stop 24h · Ceo Beograd</span>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCall />
    </>
  );
}
