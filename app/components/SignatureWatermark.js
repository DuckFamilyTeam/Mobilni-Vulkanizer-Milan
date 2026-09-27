// KREATIVNA OPCIJA V11/N5 (2026-09-27) — isti motiv kao SectionDivider (ukršteni
// ključevi preko felne, iz loga), ali ovde kao OGROMAN, vrlo suptilan pozadinski
// vodeni žig iza najvažnije zatvarajuće CTA sekcije — ideja da signature element
// ne bude SAMO razdelnik između sekcija (čisto dekorativan), nego da se pojavi i
// tamo gde nosi težinu sadržaja (najjača CTA na sajtu), kao pravi "potpis".
// Namerno bez teksta/aria-hidden — čisto vizuelni akcenat, ne nosi informaciju.
export default function SignatureWatermark({ className = '' }) {
  return (
    <svg
      className={`signature-watermark ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="20" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="2.6" fill="currentColor" stroke="none" />
      <circle cx="32" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="43.4" cy="28.3" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="39.1" cy="41.7" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="24.9" cy="41.7" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="20.6" cy="28.3" r="1.7" fill="currentColor" stroke="none" />
      <line x1="11" y1="11" x2="53" y2="53" strokeWidth="1.8" />
      <line x1="7.2" y1="12.8" x2="12.8" y2="7.2" strokeWidth="1.8" />
      <line x1="51.2" y1="56.8" x2="56.8" y2="51.2" strokeWidth="1.8" />
      <line x1="53" y1="11" x2="11" y2="53" strokeWidth="1.8" />
      <line x1="51.2" y1="7.2" x2="56.8" y2="12.8" strokeWidth="1.8" />
      <line x1="7.2" y1="51.2" x2="12.8" y2="56.8" strokeWidth="1.8" />
    </svg>
  );
}
