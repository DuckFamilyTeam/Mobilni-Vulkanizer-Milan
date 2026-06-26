import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StickyCall from '../../components/StickyCall';
import Link from 'next/link';

export const metadata = {
  title:
    'Krpljenje probušene gume: Kompletan vodič | Mobilni Vulkanizer Milan',
  description:
    'Korak-po-korak vodič za krpljenje probušene gume — od bezbednosnih mera do umetanja čepa. Kada možete sami, a kada pozovite vulkanizera. Mobilni vulkanizer Milan, Beograd.',
  keywords:
    'krpljenje probušene gume, kako zakrpiti gumu, set za reparaciju gume, probušena guma šta raditi, čep za gumu, vulkanizer beograd',
  alternates: {
    canonical:
      'https://mobilnivulkanizermilan.com/blog/krpljenje-probusene-gume',
  },
  openGraph: {
    title: 'Krpljenje probušene gume: Kompletan vodič',
    description:
      'Naučite kako da sami zakrpite probušenu gumu i kada je jedino rešenje zvati stručnjaka.',
    url: 'https://mobilnivulkanizermilan.com/blog/krpljenje-probusene-gume',
    locale: 'sr_RS',
    type: 'article',
  },
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  '@id': 'https://mobilnivulkanizermilan.com/blog/krpljenje-probusene-gume',
  headline: 'Krpljenje probušene gume: Kompletan vodič | Mobilni Vulkanizer Milan',
  description:
    'Korak-po-korak vodič za krpljenje probušene gume — od bezbednosnih mera do umetanja čepa. Kada možete sami, a kada pozovite vulkanizera. Mobilni vulkanizer Milan, Beograd.',
  url: 'https://mobilnivulkanizermilan.com/blog/krpljenje-probusene-gume',
  datePublished: '2025-05-01',
  dateModified: '2026-06-23',
  author: {
    '@type': 'Person',
    name: 'Milan',
    url: 'https://mobilnivulkanizermilan.com',
  },
  publisher: {
    '@id': 'https://mobilnivulkanizermilan.com/#business',
  },
  inLanguage: 'sr-RS',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://mobilnivulkanizermilan.com/blog/krpljenje-probusene-gume',
  },
};

export default function KrpljenjeGumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main id="main-content">

      {/* ===== HERO ===== */}
      <section className="blog-post-hero" role="region" aria-labelledby="post-title">
        <div className="container">
          <div className="blog-post-hero-inner">
            <Link href="/blog" className="blog-post-back">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Nazad na Blog
            </Link>

            <div className="blog-post-meta">
              <span className="blog-card-category">Vodič</span>
              <span className="blog-post-meta-sep">·</span>
              <span>Maj 2025</span>
              <span className="blog-post-meta-sep">·</span>
              <span>8 min čitanja</span>
            </div>

            <h1 id="post-title">
              Krpljenje probušene gume:{' '}
              <span className="accent">Kompletan vodič</span>
              <br />
              od „Zašto baš sad!" do „Srećan put!"
            </h1>

            <p className="blog-post-hero-lead">
              Probušena guma je jedan od onih trenutaka koji se uvek dogode u
              najgorem mogućem trenutku. Ipak, u 90% slučajeva ovaj problem ne
              mora da znači kraj putovanja niti skupu posetu vulkanizeru usred
              noći.
            </p>

            <div className="blog-post-hero-cta">
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovite mobilnog vulkanizera Milana"
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
                POZOVITE NAS: +381 64 12 90 929
              </a>
              <span className="blog-post-hero-hint">
                ⚡ Stižemo za 20–30 min u Beogradu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE CONTENT ===== */}
      <article className="blog-article">
        <div className="container">
          <div className="blog-article-inner">

            <p className="blog-article-intro">
              Poznavanje veštine krpljenja gume (setom za reparaciju) je
              digitalna pismenost fizičkog sveta. U ovom vodiču ćemo proći kroz
              proces korak po korak, objasniti razliku između privremenog i
              trajnog rešenja i naučiti vas kako da ostanete bezbedni dok to
              radite.
            </p>

            {/* --- SEKCIJA 1 --- */}
            <h2>1. Bezbednost na prvom mestu</h2>
            <p>
              Pre nego što izvadite alat, morate osigurati „radno okruženje".
            </p>
            <ul>
              <li>
                <strong>Pronađite ravnu površinu.</strong> Nikada ne menjajte
                niti krpite gumu na uzbrdici ili nizbrdici — auto može skliznuti
                sa dizalice.
              </li>
              <li>
                <strong>Sklonite se sa puta.</strong> Ako ste na auto-putu,
                pokušajte da dođete do zaustavne trake ili prvog isključenja.
                Bolje je žrtvovati felnu vozeći polako par stotina metara nego
                rizikovati život u saobraćaju.
              </li>
              <li>
                <strong>Vidljivost.</strong> Uključite sva četiri migavca,
                obucite fluorescentni prsluk i postavite sigurnosni trougao na
                bar 50 metara iza automobila (na auto-putu i do 100 m).
              </li>
              <li>
                <strong>Ručna kočnica.</strong> Obavezno je povucite i ubacite
                u prvu brzinu (ili u „P" ako je automatik).
              </li>
            </ul>

            {/* --- SEKCIJA 2 --- */}
            <h2>2. Šta vam je potrebno? Vaš „Survival Kit"</h2>
            <p>
              Ako vaš auto nema rezervni točak pune veličine (što je čest
              slučaj kod modernih automobila), u gepeku bi trebalo da imate{' '}
              <strong>set za brzu reparaciju guma (tzv. „čepovi")</strong>. On
              obično sadrži:
            </p>
            <ul>
              <li>
                <strong>Šilo sa hrapavom površinom (Reamer)</strong> — za
                čišćenje i proširivanje rupe
              </li>
              <li>
                <strong>Igla za umetanje</strong> — alat sa prorezom na vrhu
                za guranje čepa
              </li>
              <li>
                <strong>Gumene trake (Čepovi)</strong> — ljepljive,
                vulkanizirajuće niti
              </li>
              <li>
                <strong>Lepak (Cement)</strong> — rastvor koji pomaže pri
                zaptivanju i lakšem ulasku čepa
              </li>
              <li>
                <strong>Klešta</strong> — za vađenje stranog tela (eksera,
                šrafa)
              </li>
              <li>
                <strong>Kompresor ili pumpa</strong> — bez vazduha, sav trud je
                uzaludan
              </li>
            </ul>

            {/* --- SEKCIJA 3 --- */}
            <h2>3. Identifikacija problema: Gde „pušta"?</h2>
            <p>
              Nekada je kvar očigledan (šraf koji viri), a nekada je rupa
              mikroskopska.
            </p>
            <ul>
              <li>
                <strong>Vizuelni pregled:</strong> Polako pomerajte auto
                napred-nazad dok ne pregledate ceo gazni sloj.
              </li>
              <li>
                <strong>Metoda sapunice:</strong> Pomešajte vodu sa malo sapuna
                ili deterdženta i poprskajte gumu. Tamo gde se pojave mehurići,
                tu je rupa.
              </li>
              <li>
                <strong>Slušajte:</strong> Ponekad se jasno čuje šištanje
                vazduha.
              </li>
            </ul>

            <div className="blog-callout blog-callout--warning">
              <strong>⚠ Važna napomena:</strong> Možete krpiti samo rupe na{' '}
              <strong>gaznom sloju</strong> (onaj deo koji dodiruje asfalt). Ako
              je guma posečena ili probušena sa strane (bok gume), krpljenje
              nije bezbedno. U tom slučaju, potrebna je nova guma.
            </div>

            {/* --- SEKCIJA 4 --- */}
            <h2>4. Korak po korak: Proces krpljenja</h2>

            <div className="blog-step">
              <div className="blog-step-num">Korak 1</div>
              <h3>Vađenje uljeza</h3>
              <p>
                Koristeći klešta, izvucite ekser ili šraf koji je probio gumu.
                Pokušajte da zapamtite pod kojim uglom je ušao, jer ćete pod
                istim uglom morati da ubacite alat za krpljenje.
              </p>
            </div>

            <div className="blog-step">
              <div className="blog-step-num">Korak 2</div>
              <h3>Priprema rupe (Reaming)</h3>
              <p>
                Uzmite šilo sa hrapavom površinom. Namažite ga sa malo lepka i
                gurnite ga u rupu. Pomerajte ga gore-dole nekoliko puta — cilj
                je da očistite rupu od prljavštine i da je malo proširite kako
                bi čep mogao da uđe. Ostavite šilo unutra dok pripremate sledeći
                alat kako biste sprečili prebrzi izlazak preostalog vazduha.
              </p>
            </div>

            <div className="blog-step">
              <div className="blog-step-num">Korak 3</div>
              <h3>Priprema čepa</h3>
              <p>
                Provucite gumenu traku (čep) kroz oko igle za umetanje, baš kao
                što biste provlačili konac kroz iglu za šivenje. Čep treba da
                bude centriran — jednake dužine sa obe strane. Nanesite malo
                lepka na sam čep.
              </p>
            </div>

            <div className="blog-step">
              <div className="blog-step-num">Korak 4</div>
              <h3>Umetanje</h3>
              <p>
                Izvucite šilo iz gume i brzo gurnite iglu sa čepom u rupu.
                Treba da gurnete dok ne ostane samo oko{' '}
                <strong>1–2 cm čepa van gume</strong>. Nemojte gurati do kraja
                — čep ne bi smeo da upadne u unutrašnjost gume!
              </p>
            </div>

            <div className="blog-step">
              <div className="blog-step-num">Korak 5</div>
              <h3>Izvlačenje igle</h3>
              <p>
                Ovo je ključni deo. Iglu izvucite{' '}
                <strong>brzim, ravnim potezom nagore</strong>. Nemojte je
                uvrtati. Mehanizam igle će ostaviti čep unutar gume, gde će se
                on raširiti i zatvoriti rupu.
              </p>
            </div>

            <div className="blog-step">
              <div className="blog-step-num">Korak 6</div>
              <h3>Provera i odsecanje viška</h3>
              <p>
                Ako imate kompresor, naduvajte gumu na propisani pritisak
                (obično piše na nalepnici na vratima vozača). Proverite
                sapunicom da li i dalje pušta. Višak gume koji viri možete
                odseći skalpelom ili ostaviti — asfalt će ga sam „poravnati"
                tokom vožnje.
              </p>
            </div>

            {/* --- SEKCIJA 5 --- */}
            <h2>5. Čep vs. Vulkanizerska „Pečurka"</h2>
            <p>
              Važno je razumeti da su čepovi iz seta za prvu pomoć{' '}
              <strong>privremeno rešenje</strong>.
            </p>

            <div className="blog-compare">
              <div className="blog-compare-item">
                <div className="blog-compare-label blog-compare-label--ok">
                  Čep (spoljašnja intervencija)
                </div>
                <p>
                  Odličan za hitne slučajeve, može da traje dugo, ali nije
                  trajno sertifikovan jer se ne vidi unutrašnjost gume (koja
                  može biti oštećena vožnjom na niskom pritisku).
                </p>
              </div>
              <div className="blog-compare-item">
                <div className="blog-compare-label blog-compare-label--pro">
                  Pečurka/Flekica (unutrašnja intervencija)
                </div>
                <p>
                  Vulkanizer skida gumu sa felne, pregleda je iznutra i lepi
                  fleku sa unutrašnje strane. Ovo je jedini ispravan način{' '}
                  <strong>trajnog krpljenja gume</strong>.
                </p>
              </div>
            </div>

            <div className="blog-callout">
              <strong>Preporuka:</strong> Nakon što sami zakrpite gumu čepom,
              ne vozite brže od <strong>80 km/h</strong> i što pre posetite
              servis na profesionalni pregled.
            </div>

            {/* --- SEKCIJA 6 --- */}
            <h2>6. Kada krpljenje nije opcija?</h2>
            <p>Ne pokušavajte da krpite gumu u sledećim situacijama:</p>
            <ul>
              <li>Rupa je veća od <strong>6 mm</strong></li>
              <li>
                <strong>Guma je „sažvakana"</strong> — ako ste vozili na
                potpuno ispumpanoj gumi, njena unutrašnja struktura (karkasa) je
                verovatno uništena. Prepoznaćete je po tamnoj prašini unutar
                gume ili promeni boje na bočnom zidu.
              </li>
              <li>
                <strong>Guma je stara</strong> — ako je starija od 6–10 godina,
                materijal gubi elastičnost i krpljenje je rizično.
              </li>
              <li>
                Oštećenje je na <strong>boku gume</strong>, a ne na gaznom
                sloju.
              </li>
            </ul>

            {/* --- ZAKLJUČAK --- */}
            <h2>Zaključak</h2>
            <p>
              Krpljenje gume nije nikakva magija, već proces koji zahteva malo
              fizičke snage i pravi alat. Ako imate set za reparaciju u gepeku,
              uštedeli ste sebi vreme, novac za šlep službu i gomilu živaca.
            </p>
            <p>
              Sledeći put kada osetite da auto „vuče" u stranu ili čujete
              ritmično kuckanje metala o asfalt, ne paničite. Parkirajte
              bezbedno, izvadite svoj set i rešite problem kao profesionalac.
            </p>
          </div>
        </div>
      </article>

      {/* ===== CTA SEKCIJA ===== */}
      <section className="blog-article-cta" role="region" aria-label="Poziv na akciju">
        <div className="container">
          <div className="blog-article-cta-inner">
            <div className="eyebrow">Mobilni Vulkanizer · Beograd</div>
            <h2>
              Nema alata ili ne stignete sami?
              <br />
              <span className="accent">Milan je tu za vas!</span>
            </h2>
            <p>
              Ukoliko vam sve ovo izgleda teško ili jednostavno nemate alat —
              vaš Mobilni Vulkanizer Milan stiže najkasnije za{' '}
              <strong>20–30 minuta</strong> na teritoriji Beograda.
              Profesionalan rad, garancija na uslugu, non-stop 24 časa dnevno.
            </p>

            <div className="blog-article-cta-num">
              <a href="tel:+381641290929">+381 64 12 90 929</a>
            </div>

            <a
              href="tel:+381641290929"
              className="btn-primary blog-article-cta-btn"
              aria-label="Pozovite mobilnog vulkanizera Milana"
            >
              <svg
                width="22"
                height="22"
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
              POZOVITE NAS
            </a>

            <div className="blog-article-cta-actions">
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

            <span className="blog-article-cta-hint">
              ⚡ Dolazak 20–30 min · Non-stop 24h · Ceo Beograd
            </span>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
