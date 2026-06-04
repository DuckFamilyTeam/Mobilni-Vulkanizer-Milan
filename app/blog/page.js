import Header from '../components/Header';
import Footer from '../components/Footer';
import StickyCall from '../components/StickyCall';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Mobilni Vulkanizer Milan — Saveti i vodiči za gume',
  description:
    'Korisni saveti o gumama, krpljenju, zameni pneumatika i bezbednoj vožnji. Stručni vodiči od mobilnog vulkanizera sa 10+ godina iskustva u Beogradu.',
  keywords:
    'blog vulkanizer, saveti za gume, krpljenje gume vodič, probušena guma šta raditi, vulkanizer beograd saveti, zimske letnje gume, run flat guma, balansiranje točkova',
  alternates: {
    canonical: 'https://mobilnivulkanizermilan.com/blog',
  },
  openGraph: {
    title: 'Blog | Mobilni Vulkanizer Milan — Saveti i vodiči za gume',
    description:
      'Korisni saveti o gumama, krpljenju, zameni pneumatika i bezbednoj vožnji.',
    url: 'https://mobilnivulkanizermilan.com/blog',
    locale: 'sr_RS',
    type: 'website',
  },
};

const posts = [
  {
    href: '/blog/kada-promeniti-zimske-za-letnje-gume',
    category: 'Zakon & saveti',
    readtime: '7 min čitanja',
    date: 'Jun 2026',
    title: 'Kada promeniti zimske za letnje gume (i obrnuto) — šta kaže zakon Srbije',
    excerpt:
      'Kada po zakonu Srbije morate imati zimske gume i kada je pravi trenutak za sezonsku zamenu? Sve o zakonskim obavezama, kaznama i praktičnom savetu za vozače u Beogradu.',
    label: 'Pročitaj vodič',
  },
  {
    href: '/blog/balansiranje-tockova',
    category: 'Održavanje vozila',
    readtime: '6 min čitanja',
    date: 'Jun 2026',
    title: 'Balansiranje točkova — koliko često treba da se radi (i zašto)?',
    excerpt:
      'Vibracije na volanu pri 80 km/h? Neravnomerno istrošena guma? Sve o balansiranju točkova — simptomi, koliko često, razlika između statičkog i dinamičkog, i zašto zanemarivanje košta više.',
    label: 'Pročitaj vodič',
  },
  {
    href: '/blog/sta-je-run-flat-guma',
    category: 'Tehnologija guma',
    readtime: '7 min čitanja',
    date: 'Jun 2026',
    title: 'Šta je Run-Flat guma — prednosti, mane i da li se može krpiti',
    excerpt:
      'Run-flat guma vam daje do 80 km vožnje bez vazduha — ali po kojoj ceni? Sve o RFT tehnologiji, oznakama, ograničenjima, razlici u ceni i da li se run-flat guma uopšte može krpiti.',
    label: 'Pročitaj vodič',
  },
  {
    href: '/blog/krpljenje-probusene-gume',
    category: 'Vodič',
    readtime: '8 min čitanja',
    date: 'Maj 2025',
    title: 'Krpljenje probušene gume: Kompletan vodič od „Zašto baš sad!" do „Srećan put!"',
    excerpt:
      'Probušena guma u najgorem mogućem trenutku? Naučite kako da sami zakrpite gumu setom za reparaciju, kada je to bezbedno, a kada je jedino rešenje zvati stručnjaka.',
    label: 'Pročitaj vodič',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <section className="blog-listing-hero" role="region" aria-labelledby="blog-title">
        <div className="container">
          <div className="blog-listing-hero-inner">
            <div className="eyebrow">Blog · Saveti i vodiči</div>
            <h1 id="blog-title">
              Sve što treba da znate{' '}
              <span className="accent">o gumama</span>
            </h1>
            <p className="blog-listing-lead">
              Praktični saveti, korak-po-korak vodiči i stručna objašnjenja od
              vulkanizera sa 10+ godina iskustva na terenu Beograda. Naši
              članci nastaju iz svakodnevnog rada na ulici — stvarnih situacija,
              stvarnih vozača i stvarnih problema sa gumama.
            </p>
          </div>
        </div>
      </section>

      <section className="blog-posts-section">
        <div className="container">

          <div className="blog-posts-grid">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="blog-card"
                aria-label={`Pročitajte: ${post.title}`}
              >
                <div className="blog-card-inner">
                  <div className="blog-card-eyebrow">
                    <span className="blog-card-category">{post.category}</span>
                    <span className="blog-card-readtime">{post.readtime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">{post.date}</span>
                    <span className="blog-card-arrow">
                      {post.label}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ===== SAVETI SEKCIJA ===== */}
          <div className="blog-tips-section">
            <h2>Korisni saveti o gumama</h2>
            <p>
              Gume su jedina tačka kontakta vašeg vozila sa asfaltom — i ipak,
              o njima znamo iznenađujuće malo. Nakon više od decenije rada kao
              mobilni vulkanizer u Beogradu, skupio sam najčešća pitanja i
              najvažnije odgovore na jednom mestu.
            </p>

            <div className="blog-tips-grid">
              <div className="blog-tip-card">
                <h3>Kada zameniti gume?</h3>
                <p>
                  Većina proizvođača preporučuje zamenu guma svakih 6 do 10
                  godina bez obzira na gazni sloj, jer guma vremenom gubi
                  elastičnost. Na dubinu šara treba gledati pre toga: minimalna
                  zakonska dubina je 1,6 mm, ali stručnjaci preporučuju zamenu
                  na 3 mm zbog bezbednosti u kišnim uslovima. Ako primetite
                  pukotine na boku gume, zamena je neophodna bez čekanja.
                </p>
              </div>

              <div className="blog-tip-card">
                <h3>Pravilan pritisak u gumama</h3>
                <p>
                  Pritisak u gumama proveravajte jednom mesečno i uvek kada se
                  temperatura značajno promeni. Na svakih 10°C razlike u
                  temperaturi, pritisak se menja za oko 0,1 bar. Preniski pritisak
                  povećava potrošnju goriva, ubrzava habanje ivica gume i pogoršava
                  upravljanje. Previsoki pritisak smanjuje kontakt sa podlogom i
                  čini vožnju nestabilnom.
                </p>
              </div>

              <div className="blog-tip-card">
                <h3>Šta raditi kad pukne guma na putu?</h3>
                <p>
                  Mirno smanjite gas, čvrsto držite volan i lagano kočite —
                  nikada nagle reakcije. Skrenite na zaustavnu traku ili prvu
                  sporednu ulicu. Uključite sva četiri migavca, stavite prsluk
                  i sigurnosni trougao na 50 metara iza vozila. Ako niste sigurni
                  kako da krpite, pozovite mobilnog vulkanizera koji dolazi na
                  vašu lokaciju za 15–30 minuta.
                </p>
              </div>

              <div className="blog-tip-card">
                <h3>Može li se krpiti svaka probušena guma?</h3>
                <p>
                  Ne. Krpljenje je moguće samo na gaznom sloju i samo ako je rupa
                  manja od 6 mm. Guma se ne krpi ako je oštećenje na bočnom zidu,
                  ako je vozila na potpuno praznom pritisku, ako je starija od 10
                  godina, ili ako ima višestruka oštećenja. U tim slučajevima
                  jedino rešenje je nova guma.
                </p>
              </div>

              <div className="blog-tip-card">
                <h3>Balansiranje točkova — zašto je važno?</h3>
                <p>
                  Nebalansiran točak vibrira pri određenim brzinama i neravnomerno
                  troši gumu. Simptomi su: vibracije na volanu pri 80–120 km/h,
                  neravnomerno habanje gume i osećaj nestabilnosti. Balansiranje
                  se preporučuje pri svakoj zameni pneumatika, posle udarca u rupu
                  ili ivičnjak, i bar jednom godišnje.
                </p>
              </div>

              <div className="blog-tip-card">
                <h3>Zimske vs. all-season gume</h3>
                <p>
                  All-season gume su kompromis koji radi za umerene uslove.
                  Za Beograd sa pravim zimama i vrućim letima, dva seta sezonskih
                  guma daje bolju bezbednost i duži ukupni vek. Zimske gume na
                  temperaturi ispod 7°C imaju drastično bolje prianjanje od
                  letnjih — čak i na suvom asfaltu bez snega.
                </p>
              </div>
            </div>
          </div>

          <div className="blog-listing-cta">
            <div className="blog-listing-cta-inner">
              <div className="eyebrow">Hitna intervencija</div>
              <h3>Guma pukla? Ne čekajte — pozovite odmah!</h3>
              <p>
                Dok čitate naše vodiče — ako imate hitnu situaciju, Milan stiže
                do vas za <strong>15–30 minuta</strong> bilo gde u Beogradu.
              </p>
              <a
                href="tel:+381641290929"
                className="btn-primary"
                aria-label="Pozovite mobilnog vulkanizera Milana"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                POZOVITE NAS: +381 64 12 90 929
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <StickyCall />
    </>
  );
}
