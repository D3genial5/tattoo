import '../styles/responsive.css';

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#0a0a0a', padding: '4rem 1rem' }}>
      <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ color: 'var(--primary)', letterSpacing: '2px', textAlign: 'center' }}>TESTIMONIOS</h2>
        <p style={{ color: '#ccc', textAlign: 'center', marginTop: '.5rem' }}>
          Lo que dicen quienes ya confiaron en mi trabajo.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '2rem' }}>
          <blockquote style={{ background: '#111', color: '#bbb', padding: '1rem 1.25rem', borderRadius: 12, border: '1px solid rgba(13,148,136,0.15)' }}>
            “Atención impecable y líneas perfectas. Resultado mejor de lo que esperaba.”
            <footer style={{ marginTop: '.5rem', color: '#888' }}>— Camila R.</footer>
          </blockquote>
          <blockquote style={{ background: '#111', color: '#bbb', padding: '1rem 1.25rem', borderRadius: 12, border: '1px solid rgba(13,148,136,0.15)' }}>
            “Profesional y meticuloso. Volvería sin dudarlo.”
            <footer style={{ marginTop: '.5rem', color: '#888' }}>— Diego M.</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
