export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="section-divider-line"></span>
      <span className="section-divider-icon">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <circle cx="15" cy="15" r="6" />
          <circle cx="15" cy="15" r="1.6" fill="currentColor" stroke="none" />
          <line x1="4" y1="4" x2="11.2" y2="11.2" />
          <line x1="4" y1="7.6" x2="7.6" y2="4" />
          <line x1="26" y1="4" x2="18.8" y2="11.2" />
          <line x1="26" y1="7.6" x2="22.4" y2="4" />
          <line x1="4" y1="26" x2="11.2" y2="18.8" />
          <line x1="4" y1="22.4" x2="7.6" y2="26" />
          <line x1="26" y1="26" x2="18.8" y2="18.8" />
          <line x1="26" y1="22.4" x2="22.4" y2="26" />
        </svg>
      </span>
      <span className="section-divider-line"></span>
    </div>
  );
}
