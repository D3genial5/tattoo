import Reveal from '../components/Reveal';
import '../styles/responsive.css';

const STYLES = [
  {
    name: 'Minimalista',
    img: '/img/minimalista.jpeg',
    description: 'Líneas limpias, detalles sutiles y significado eterno.',
    technique: 'Línea fina · 3RL',
  },
  {
    name: 'Microrealismo',
    img: '/img/microrealismoImg.jpeg',
    description: 'Detalles hiperrealistas en pequeño formato.',
    technique: 'Sombra suave · Magnum',
  },
  {
    name: 'Conceptual',
    img: '/img/conceptual.jpg',
    description: 'Fusión de blackwork con líneas finas.',
    technique: 'Blackwork · Línea',
  },
];

export default function TattooStyles() {
  return (
    <section id="artists" className="styles-section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow">
            <span className="section-eyebrow-line" />
            ESTILOS
            <span className="section-eyebrow-line" />
          </span>
          <h2 className="section-title">Tres lenguajes, una firma.</h2>
          <p className="section-sub">
            Especialización en técnicas que resaltan la belleza de cada diseño.
          </p>
        </Reveal>

        <div className="styles-grid">
          {STYLES.map((style, i) => (
            <Reveal key={style.name} delay={i * 100} className="style-card">
              <div className="style-card-media">
                <img
                  src={style.img}
                  alt={style.name}
                  loading="lazy"
                  decoding="async"
                />
                <span className="style-card-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="style-card-body">
                <span className="style-card-tech">{style.technique}</span>
                <h3 className="style-card-name">{style.name}</h3>
                <p className="style-card-desc">{style.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
