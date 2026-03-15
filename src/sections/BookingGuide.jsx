import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import '../styles/responsive.css';

export default function BookingGuide() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };



  return (
    <section id="booking-guide" style={{ background: '#0f0f0f', padding: '3rem 1rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1rem'
          }}>
            <div style={{ height: '2px', width: '60px', background: 'var(--primary)' }}></div>
            <span style={{ fontSize: '2rem' }}>📋</span>
            <div style={{ height: '2px', width: '60px', background: 'var(--primary)' }}></div>
          </div>
          <h2 style={{ 
            color: 'var(--primary)', 
            fontSize: '2.5rem',
            letterSpacing: '3px',
            fontWeight: '700'
          }}>
            GUÍA PARA AGENDAR
          </h2>
          <p style={{ 
            color: '#ccc', 
            fontSize: '1.1rem',
            marginTop: '1rem',
            maxWidth: '700px',
            margin: '1rem auto 0'
          }}>
            Todo lo que necesitas saber antes de agendar tu cita conmigo
          </p>
        </div>

        {/* Video Guide */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          width: '100%',
          padding: '0 1rem',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '350px',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(13, 148, 136, 0.2)',
            cursor: 'pointer'
          }}>
            <video
              ref={videoRef}
              onClick={handleVideoClick}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxHeight: '500px',
                objectFit: 'contain'
              }}
              poster="/img/portada.png"
            >
              <source src="/videos/guia.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
            
            {/* Play button overlay */}
            {!isPlaying && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(13, 148, 136, 0.9)',
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'black',
                transition: 'all 0.3s ease',
                pointerEvents: 'none'
              }}>
                ▶️
              </div>
            )}
          </div>

          {/* Booking Steps */}
          <div className="booking-steps-container" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            width: '100%',
            
            margin: '0 auto'
          }}>
            <div className="booking-step" style={{
              background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(13, 148, 136, 0.05))',
              padding: '2.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(13, 148, 136, 0.2)',
              textAlign: 'center',
              flex: '1 1 280px'
            }}>
              <FaInfoCircle style={{ 
                fontSize: '2.5rem', 
                color: 'var(--primary)', 
                marginBottom: '1rem' 
              }} />
              <h3 style={{ 
                color: 'var(--primary)', 
                fontSize: '1.3rem',
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}>
                PASO 1
              </h3>
              <p style={{ 
                color: '#ccc', 
                lineHeight: '1.6',
                fontSize: '0.95rem',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                Envía tu idea o referencia por WhatsApp junto con el tamaño aproximado
              </p>
            </div>

            <div className="booking-step" style={{
              background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(13, 148, 136, 0.05))',
              padding: '2.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(13, 148, 136, 0.2)',
              textAlign: 'center',
              flex: '1 1 280px'
            }}>
              <FaCalendarAlt style={{ 
                fontSize: '2.5rem', 
                color: 'var(--primary)', 
                marginBottom: '1rem' 
              }} />
              <h3 style={{ 
                color: 'var(--primary)', 
                fontSize: '1.3rem',
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}>
                PASO 2
              </h3>
              <p style={{ 
                color: '#ccc', 
                lineHeight: '1.6',
                fontSize: '0.95rem',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                Coordinaremos fecha y hora
              </p>
            </div>

            <div className="booking-step" style={{
              background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(13, 148, 136, 0.05))',
              padding: '2.5rem',
              borderRadius: '15px',
              border: '1px solid rgba(13, 148, 136, 0.2)',
              textAlign: 'center',
              flex: '1 1 280px'
            }}>
              <span style={{ 
                fontSize: '2.5rem', 
                color: 'var(--primary)', 
                marginBottom: '1rem',
                display: 'block'
              }}>
                🎨
              </span>
              <h3 style={{ 
                color: 'var(--primary)', 
                fontSize: '1.3rem',
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}>
                PASO 3
              </h3>
              <p style={{ 
                color: '#ccc', 
                lineHeight: '1.6',
                fontSize: '0.95rem',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                ¡Día de la cita! Ven descansado y con ganas de crear arte
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'linear-gradient(45deg, var(--primary), #d4af37)',
              color: 'black',
              padding: '1.2rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: '700',
              letterSpacing: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(13, 148, 136, 0.4)',
              marginTop: '1rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 40px rgba(13, 148, 136, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(13, 148, 136, 0.4)';
            }}
          >
            <FaWhatsapp />
            AGENDAR
          </a>
        </div>
      </div>
    </section>
  );
}
