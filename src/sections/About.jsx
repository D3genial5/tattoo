import '../styles/responsive.css';

export default function About() {
  return (
    <section id="about" style={{
      background: 'radial-gradient(800px circle at 50% -20%, rgba(13,148,136,0.12), transparent 60%), #0c0c0c',
      padding: '4.5rem 1rem'
    }}>
      <div className="container" style={{ maxWidth: 980, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary)', letterSpacing: '2px' }}>SOBRE MÍ</h2>
          <p style={{
            color: '#d6d6d6',
            marginTop: '.75rem',
            maxWidth: 820,
            margin: '.75rem auto 0',
            lineHeight: 1.7,
            fontSize: '1.02rem'
          }}>
            <strong>Daniel Rivero</strong>, artista tatuador especializado en estilos minimalistas, microrealismo y conceptual. Residente en Santa Cruz de la Sierra, Bolivia. CEO de <span style={{ color: 'var(--primary)' }}>ÉXODO</span> — “Exclusividad Artística”.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          marginTop: '0.5rem',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}>
          {/* En qué creo + Imagen 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 420 }}>
            <div style={{
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid rgba(13,148,136,0.2)',
              boxShadow: '0 18px 50px rgba(0, 0, 0, 0.45)',
              maxWidth: 420,
              width: '100%',
              margin: '0 auto'
            }}>
              <img
                src="/img/about1.jpeg"
                alt="Daniel en el estudio"
                loading="lazy"
                style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Logros + Imagen 2 
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 420 }}>
            <div style={{
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid rgba(13,148,136,0.2)',
              boxShadow: '0 18px 50px rgba(0, 0, 0, 0.45)',
              maxWidth: 420,
              width: '100%',
              margin: '0 auto'
            }}>
              <img
                src="/img/about2.jpg"
                alt="Detalle de trabajo en progreso"
                loading="lazy"
                style={{ width: '100%', height: 'auto', maxHeight: 300, objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ background: 'rgba(17,17,17,0.85)', borderRadius: 12, padding: '1.25rem', border: '1px solid rgba(13,148,136,0.3)', boxShadow: '0 4px 15px rgba(0,0,0,0.25)' }}>
              <h3 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.1rem' }}>Logros</h3>
              <ul style={{ color: '#bbb', marginTop: '.5rem', paddingLeft: '1rem' }}>
                <li>+5 años de experiencia profesional</li>
                <li>+300 piezas realizadas</li>
                <li>Especialización en técnica de líneas finas y sombreados sutiles</li>
              </ul>
            </div>
          </div>*/}

          {/* Qué busco + Imagen del estudio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 420 }}>
            <div style={{
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid rgba(13,148,136,0.2)',
              boxShadow: '0 18px 50px rgba(0, 0, 0, 0.45)',
              maxWidth: 420,
              width: '100%',
              margin: '0 auto'
            }}>
              <img
                src="/img/estudio1.jpg"
                alt="Espacio del estudio"
                loading="lazy"
                style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <div style={{
            background: 'rgba(17,17,17,0.85)',
            borderRadius: 18,
            padding: '1.5rem 2rem',
            border: '1px solid rgba(13,148,136,0.25)',
            boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
            maxWidth: 780,
            width: '100%',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.1rem', letterSpacing: '1px' }}>Qué busco</h3>
            <p style={{ color: '#bbb', marginTop: '.6rem', lineHeight: 1.6 }}>
              Proyectos con significado personal, donde el diseño y la técnica se combinen para algo único.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
