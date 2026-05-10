import { useState, useRef } from 'react';
import {
  FaWhatsapp,
  FaCalendarAlt,
  FaInfoCircle,
  FaPaintBrush,
  FaPlay,
} from 'react-icons/fa';
import Reveal from '../components/Reveal';
import '../styles/responsive.css';

const STEPS = [
  {
    icon: FaInfoCircle,
    title: 'Cuéntame tu idea',
    body: 'Envía referencia, zona del cuerpo y tamaño aproximado por WhatsApp.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Coordinamos fecha',
    body: 'Te confirmo disponibilidad y bloqueamos tu espacio en agenda.',
  },
  {
    icon: FaPaintBrush,
    title: 'Día de la cita',
    body: 'Llegas descansado y con ganas. El resto, lo hacemos juntos.',
  },
];

export default function BookingGuide() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
  };

  return (
    <section id="booking-guide" className="booking-section">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-eyebrow section-eyebrow--turquoise">
            <span className="section-eyebrow-line" />
            CÓMO AGENDAR
            <span className="section-eyebrow-line" />
          </span>
          <h2 className="section-title">Tres pasos simples.</h2>
          <p className="section-sub">
            Todo lo que necesitas saber antes de reservar tu cita.
          </p>
        </Reveal>

        {/* Steps grid */}
        <div className="booking-steps">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 90} className="booking-step">
                <span className="booking-step-num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Icon className="booking-step-icon" aria-hidden="true" />
                <h3 className="booking-step-title">{s.title}</h3>
                <p className="booking-step-body">{s.body}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Video block (after the steps) */}
        <Reveal className="booking-video-block">
          <div className="booking-video-text">
            <span className="section-eyebrow" style={{ color: 'var(--gold)' }}>
              MIRA EL PROCESO
            </span>
            <p>
              Un vistazo rápido a cómo trabajo de principio a fin.
            </p>
          </div>
          <div className="booking-video-frame">
            <video
              ref={videoRef}
              onClick={togglePlay}
              poster="/img/portada.png"
              playsInline
              preload="metadata"
              className="booking-video"
            >
              <source src="/videos/guia.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
            {!isPlaying && (
              <button
                type="button"
                className="booking-video-play"
                onClick={togglePlay}
                aria-label="Reproducir video"
              >
                <FaPlay aria-hidden="true" />
              </button>
            )}
          </div>
        </Reveal>

        <Reveal delay={150} className="booking-cta-wrap">
          <a
            className="hero-cta hero-cta--primary booking-cta"
            href="https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            Agendar mi cita
          </a>
          <p className="booking-cta-note">
            Cupos limitados cada mes — reserva con anticipación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
