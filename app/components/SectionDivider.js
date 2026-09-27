// Redizajnirano 2026-09-27 (vizuelna petlja, K3) — dizajn-kriticar je original (30px,
// samo dijagonalne linije u uglovima, bez ijednog kruga koji bi ih povezao) opisao
// kao "sitan hrom znak koji liči na ✕". Novi crtež je eksplicitno felna (krug + 5
// navrtki raspoređenih po obimu, kao točak) sa ukrštenim ključevima preko nje (svaki
// ključ ima kratak, otvoren "vilasti" kraj na oba vrha, ne gola linija) — isti motiv
// kao na logu firme, samo pojednostavljen za liniju-ikonicu. Uvećano sa 30px na 60px.
export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider-line"></span>
      <span className="section-divider-icon">
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Felna: obod + čaura + 5 navrtki */}
          <circle cx="32" cy="32" r="20" strokeWidth="2.2" />
          <circle cx="32" cy="32" r="2.6" fill="currentColor" stroke="none" />
          <circle cx="32" cy="20" r="1.7" fill="currentColor" stroke="none" />
          <circle cx="43.4" cy="28.3" r="1.7" fill="currentColor" stroke="none" />
          <circle cx="39.1" cy="41.7" r="1.7" fill="currentColor" stroke="none" />
          <circle cx="24.9" cy="41.7" r="1.7" fill="currentColor" stroke="none" />
          <circle cx="20.6" cy="28.3" r="1.7" fill="currentColor" stroke="none" />
          {/* Ukršteni ključevi preko felne, sa vilastim krajevima */}
          <line x1="11" y1="11" x2="53" y2="53" strokeWidth="2.6" />
          <line x1="7.2" y1="12.8" x2="12.8" y2="7.2" strokeWidth="2.6" />
          <line x1="51.2" y1="56.8" x2="56.8" y2="51.2" strokeWidth="2.6" />
          <line x1="53" y1="11" x2="11" y2="53" strokeWidth="2.6" />
          <line x1="51.2" y1="7.2" x2="56.8" y2="12.8" strokeWidth="2.6" />
          <line x1="7.2" y1="51.2" x2="12.8" y2="56.8" strokeWidth="2.6" />
        </svg>
      </span>
      <span className="section-divider-line"></span>
    </div>
  );
}
