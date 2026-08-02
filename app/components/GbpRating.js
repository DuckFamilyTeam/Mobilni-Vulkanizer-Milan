// Prezentacioni (ne-async) Server Component — prima već dohvaćenu ocenu/broj recenzija
// kao props (dohvaćeno jednom u page.js preko lib/googlePlaces.js) i renderuje odgovarajući
// prikaz. Nema klijentskog JS-a.

function formatRating(rating) {
  return rating.toFixed(1);
}

function starString(rating) {
  const rounded = Math.round(rating);
  const filled = Math.min(5, Math.max(0, rounded));
  return '★'.repeat(filled) + '☆'.repeat(5 - filled);
}

export default function GbpRating({ variant = 'stat', rating, reviewCount }) {
  if (variant === 'stat') {
    return (
      <>
        <div className="stat-num">{formatRating(rating)}★</div>
        <div className="stat-label">Prosečna ocena</div>
      </>
    );
  }

  if (variant === 'full') {
    return (
      <div className="reviews-rating">
        <div className="reviews-stars-big">{starString(rating)}</div>
        <div className="reviews-rating-num">{formatRating(rating)} / 5.0</div>
        <div className="reviews-rating-label">Bazirano na {reviewCount} Google recenzija</div>
        <a
          href="https://www.google.com/maps/place/Mobilni+Vulkanizer+Milan/@44.8092631,20.4348278,102378m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475a637b18ce8a37:0x45f6e9ef011b2c0!8m2!3d44.8092631!4d20.4348278!16s%2Fg%2F11z5_7wp4p"
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '18px',
            padding: '10px 18px',
            background: 'rgba(216, 30, 40, 0.1)',
            border: '1px solid var(--gold)',
            borderRadius: '100px',
            color: 'var(--gold-text)',
            fontSize: '13px',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C7.802 0 4.4 3.403 4.4 7.602C4.4 11.8 7.469 16.812 12 24c4.531-7.188 7.6-12.2 7.6-16.398C19.6 3.402 16.198 0 12 0zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          Pogledaj sve recenzije na Google
        </a>
      </div>
    );
  }

  return null;
}
