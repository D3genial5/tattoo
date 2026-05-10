import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [playCount, setPlayCount] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showAudioPrompt, setShowAudioPrompt] = useState(true);
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      video.currentTime = 16;
      video.pause();
      setPlayCount(1);
    };

    const startVideo = async () => {
      video.loop = false;
      video.muted = true;
      video.volume = 0.0;
      try {
        await video.play();
      } catch (error) {
        // Autoplay blocked — content will still appear
      }
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadedmetadata', startVideo);

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        startVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // Show overlay content quickly so the user sees the brand right away
    const timer = setTimeout(() => setShowContent(true), 1800);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('loadedmetadata', startVideo);
      document.removeEventListener('visibilitychange', handleVisibility);
      clearTimeout(timer);
    };
  }, []);

  const enableAudio = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1.0;
    setAudioUnlocked(true);
    setShowAudioPrompt(false);
    try { if (video.paused) await video.play(); } catch (e) { /* ignore */ }
  };



  return (
    <header className="hero flex">
      {/* Efecto de difuminado en los lados */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 15%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0.9) 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }}></div>

      {/* Video en formato móvil - centrado y completo */}
      <video
        ref={videoRef}
        playsInline
        autoPlay
        preload="auto"
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture
        disableRemotePlayback
        controlsList="nodownload noplaybackrate noremoteplayback"
        onClick={enableAudio}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '100vh', // Altura completa
          width: 'auto', // Ancho automático para mantener proporción
          minWidth: '300px', // Ancho mínimo para móviles
          zIndex: 1,
          borderRadius: playCount < 1 ? '12px' : '0px',
          boxShadow: playCount < 1 ? '0 0 40px rgba(13, 148, 136, 0.5)' : 'none',
          transition: 'all 1s ease',
          objectFit: 'contain', // Mantener proporción sin recortar
          cursor: showAudioPrompt ? 'pointer' : 'default'
        }}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Indicador para activar sonido */}
      {showAudioPrompt && !audioUnlocked && (
        <button
          type="button"
          className="hero-audio-prompt"
          onClick={enableAudio}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
          Toca para activar sonido
        </button>
      )}

      {/* Contenido principal */}
      <div
        className="hero-content container"
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: 10,
        }}
      >
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-line" aria-hidden="true" />
          ÉXODO · Exclusividad Artística
          <span className="hero-eyebrow-line" aria-hidden="true" />
        </span>

        <h1 className="hero-title">Daniel Rivero</h1>

        <p className="hero-tagline">
          Tatuajes <em>minimalistas</em>, <em>microrealismo</em> y <em>blackwork</em>
          <br className="hero-br" />
          con sello de exclusividad.
        </p>

        <div className="hero-ctas">
          <a
            className="hero-cta hero-cta--primary"
            href="https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp aria-hidden="true" />
            Agendar cita
          </a>
          <a className="hero-cta hero-cta--ghost" href="#gallery">
            Ver trabajos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
        </div>

        <div className="hero-socials" aria-label="Redes">
          <a
            href="https://www.instagram.com/danielrivero_tattoo?utm_source=web_hero"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            className="hero-social"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/59169044422"
            aria-label="WhatsApp"
            target="_blank"
            rel="noreferrer"
            className="hero-social"
          >
            <FaWhatsapp aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      {showContent && (
        <a href="#about" className="hero-scroll-cue" aria-label="Bajar a Sobre mí">
          <span />
        </a>
      )}
    </header>
  );
}
