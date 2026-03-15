import '../styles/responsive.css';

export default function Podcast() {
  return (
    <section id="podcast" style={{ background: '#0c0c0c', padding: '4rem 1rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ color: 'var(--primary)', letterSpacing: '2px' }}>PODCAST</h2>
        <p style={{ color: '#ccc', marginTop: '.75rem', marginBottom: '2rem' }}>
          Acompáñame en mi nuevo podcast donde hablo de arte, tatuajes y las historias detrás de la tinta.
        </p>
        <a
          href="https://open.spotify.com/show/your_podcast_id?utm_source=web_hero"
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'var(--primary)',
            color: '#000',
            padding: '0.85rem 1.6rem',
            borderRadius: 12,
            fontWeight: 700,
            boxShadow: '0 10px 30px rgba(13,148,136,0.35)',
            display: 'inline-block'
          }}
        >
          Escuchar en Spotify ▶
        </a>
      </div>
    </section>
  );
}
