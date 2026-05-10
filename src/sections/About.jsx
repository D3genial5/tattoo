import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Reveal from '../components/Reveal';
import '../styles/responsive.css';

const KPIS = [
  { value: '5+', label: 'Años de experiencia' },
  { value: '300+', label: 'Piezas realizadas' },
  { value: '100%', label: 'Diseños únicos' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-bg" aria-hidden="true" />
      <div className="container about-grid">
        {/* Left: editorial photo */}
        <Reveal className="about-media">
          <div className="about-media-frame">
            <img
              src="/img/IMG_0173.webp"
              alt="Daniel Rivero — retrato"
              loading="lazy"
              decoding="async"
            />
            <span className="about-media-tag">ÉXODO · 2025</span>
          </div>
          <div className="about-media-secondary">
            <img
              src="/img/estudio1.jpg"
              alt="Espacio del estudio"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>

        {/* Right: editorial content */}
        <div className="about-content">
          <Reveal>
            <span className="section-eyebrow section-eyebrow--turquoise">
              <span className="section-eyebrow-line" />
              SOBRE MÍ
              <span className="section-eyebrow-line" />
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="about-title">
              Arte sobre la piel,<br />
              <em>con sentido propio.</em>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="about-bio">
              Soy <strong>Daniel Rivero</strong>, tatuador especializado en
              <em> minimalismo</em>, <em>microrealismo</em> y
              <em> conceptual</em>. Resido en Santa Cruz de la Sierra y soy CEO
              de <span className="about-brand">ÉXODO</span> — un estudio donde
              cada cita es una conversación, y cada pieza, una colaboración.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="about-kpis" role="list">
              {KPIS.map((k) => (
                <li key={k.label}>
                  <span className="about-kpi-value">{k.value}</span>
                  <span className="about-kpi-label">{k.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={260}>
            <blockquote className="about-quote">
              <span className="about-quote-mark" aria-hidden="true">“</span>
              Busco proyectos con significado personal, donde el diseño y la
              técnica se combinen para algo único.
            </blockquote>
          </Reveal>

          <Reveal delay={320} className="about-actions">
            <a
              className="hero-cta hero-cta--primary"
              href="https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Conversemos
            </a>
            <a
              className="hero-cta hero-cta--ghost"
              href="https://www.instagram.com/danielrivero_tattoo"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram aria-hidden="true" />
              Ver Instagram
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
