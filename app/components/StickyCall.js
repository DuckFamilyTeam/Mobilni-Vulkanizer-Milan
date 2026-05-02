export default function StickyCall() {
  return (
    <div className="sticky-call" role="region" aria-label="Brzi kontakt">
      <div className="sticky-call-inner">
        <a href="tel:+381641290929" className="btn sticky-call-primary">
          📞 Pozovi Milana
        </a>
        <a href="https://wa.me/381641290929" className="btn sticky-call-secondary">
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
