import '../styles/responsive.css';

// Imágenes locales de cada estilo
const minimalistaImg = '/img/minimalista.jpeg';
const microrealismoImg = '/img/microrealismoImg.jpeg';
const conceptualImg = '/img/conceptual.jpg';

const tattooStyles = [
  { 
    name: 'MINIMALISTA', 
    img: minimalistaImg,
    description: 'Líneas limpias, detalles sutiles y significado eterno.',
    icon: '✨'
  },
  { 
    name: 'MICROREALISMO', 
    img: microrealismoImg,
    description: 'Detalles hiperrealistas en pequeño formato',
    icon: '🔍'
  },
  { 
    name: 'CONCEPTUAL', 
    img: conceptualImg,
    description: 'Fusion de blackwork con lineas finas',
    icon: '⚫'
  },
];

export default function TattooStyles() {
  return (
    <section id="artists" style={{ background: '#0a0a0a', padding: '5rem 1rem' }}>
      <div className="container">
        {/* Header con separador */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div style={{ height: '2px', width: '60px', background: 'var(--primary)' }}></div>
            <span style={{ fontSize: '2rem' }}>🎨</span>
            <div style={{ height: '2px', width: '60px', background: 'var(--primary)' }}></div>
          </div>
          <h2 style={{ 
            color: 'var(--primary)', 
            fontSize: '2.5rem',
            letterSpacing: '3px',
            fontWeight: '700'
          }}>
            ESTILOS DE TATUAJE
          </h2>
          <p style={{ 
            color: '#ccc', 
            fontSize: '1.1rem',
            marginTop: '1rem',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}>
            Especializado en técnicas únicas que resaltan la belleza de cada diseño
          </p>
        </div>

        <div className="artists-scroll" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {tattooStyles.map((style) => (
            <div className="artist-card" key={style.name} style={{ flex: '0 0 280px' }}>
              <div style={{ 
                position: 'relative', 
                overflow: 'hidden',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 148, 136, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <img 
                  src={style.img} 
                  alt={style.name}
                  style={{ 
                    transition: 'transform 0.3s ease',
                    height: '300px',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                  padding: '3rem 1rem 1.5rem',
                  color: 'white',
                  borderRadius: '0 0 15px 15px'
                }}>
                  <div style={{ 
                    fontSize: '2rem',
                    textAlign: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    {/*{style.icon}*/}
                  </div>
                  <h3 style={{ 
                    color: 'var(--primary)', 
                    fontSize: '1.3rem',
                    letterSpacing: '2px',
                    margin: '0 0 0.5rem 0',
                    textAlign: 'center'
                  }}>
                    {style.name}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#ccc',
                    textAlign: 'center',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {style.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
