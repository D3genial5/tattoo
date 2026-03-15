import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [playCount, setPlayCount] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showAudioPrompt, setShowAudioPrompt] = useState(true);
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  // Activar audio en primera interacción
  useEffect(() => {
    const activateAudio = async () => {
      const video = videoRef.current;
      if (video && !audioUnlocked) {
        video.muted = false;
        video.volume = 1.0;
        try {
          if (video.paused) {
            await video.play();
          }
          setAudioUnlocked(true);
          setShowAudioPrompt(false);
          console.log('Audio activado por interacción');
        } catch (error) {
          console.log('Error al activar audio:', error);
        }
      }
    };

    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, activateAudio, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, activateAudio);
      });
    };
  }, [audioUnlocked]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      console.log('Video terminó, volviendo al segundo 16');
      video.currentTime = 16;
      video.pause();
      setPlayCount(1);
      setShowAudioPrompt(false);
    };

    // Configurar video para reproducción con sonido
    const startVideo = async () => {
      video.loop = false;
      video.muted = true; // autoplay permitido
      video.volume = 0.0;
      
      try {
        await video.play();
        console.log('Video iniciado en silencio');
      } catch (error) {
        console.log('Autoplay bloqueado:', error.message);
        // No hacer fallback a muted - mantener con sonido
      }
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('loadedmetadata', startVideo);
    
    // Reintentos agresivos de autoplay con sonido
    const retryDelays = [0, 300, 1000, 2500, 5000];
    const retryTimers = retryDelays.map((delay) =>
      setTimeout(() => {
        if (video.paused) {
          startVideo();
        }
      }, delay)
    );

    // Reintentar cuando la pestaña recupere visibilidad
    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && video.paused) {
        startVideo();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    
    // Mostrar contenido después de 6 segundos
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6000);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('loadedmetadata', startVideo);
      document.removeEventListener('visibilitychange', handleVisibility);
      retryTimers.forEach(clearTimeout);
      clearTimeout(timer);
    };
  }, []);



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
        onClick={async () => {
          // Activar sonido y reproducir en primera interacción
          const video = videoRef.current;
          if (video) {
            video.muted = false;
            video.volume = 1.0;
            setShowAudioPrompt(false);
            if (video.paused) {
              try {
                await video.play();
                console.log('Video activado manualmente con sonido');
              } catch (error) {
                console.log('Error al activar video:', error);
              }
            }
          }
        }}
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
      {showAudioPrompt && (
        <div style={{
          position: 'absolute',
          right: '10px',
          top: '50px',
          background: 'rgba(0,0,0,0.75)',
          color: 'white',
          padding: '12px 18px',
          borderRadius: 30,
          fontSize: '0.9rem',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          border: '1px solid var(--primary)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
        }}
        onClick={async () => {
          const video = videoRef.current;
          if (video) {
            video.muted = false;
            video.volume = 1.0;
            try {
              await video.play();
              setShowAudioPrompt(false);
              console.log('Sonido activado desde indicador');
            } catch (e) {console.log(e);}            
          }
        }}
        >
          🔊 Toca para sonido
        </div>
      )}


      {/* Contenido principal: titular claro + CTA */}
      <div 
        className="hero-content container"
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: 10,
          textAlign: 'center'
        }}
      >
        {/* Logo personalizado */}
        <div style={{ 
          width: 120, 
          height: 120, 
          margin: '0 auto 1rem',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid var(--primary)',
          boxShadow: '0 0 20px rgba(13, 148, 136, 0.3)'
        }}>
          <img
            src="/img/icon.jpg"
            alt="Tattoo Studio Logo"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }}
          />
        </div>
        
        <h1 style={{ fontSize: '2.2rem', marginBottom: '.25rem' }}>Daniel Rivero</h1>
        <p style={{ marginTop: '.25rem', opacity: 0.95, fontSize: '1.1rem' }}>
          Tatuajes minimalistas, microrealismo y blackwork con sello de exclusividad.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.25rem', flexWrap: 'wrap' }}>
          <a href="#gallery" style={{ border: '1px solid var(--primary)', color: 'var(--primary)', padding: '.7rem 1.05rem', borderRadius: 10 }}>
            Ver trabajos
          </a>
        </div>
        
        <div className="contact-icons flex" style={{ gap: '2rem', marginTop: '2rem', justifyContent: 'center' }}>
          <a 
            href="https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje" 
            aria-label="WhatsApp" 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              background: 'radial-gradient(circle at 30% 20%, rgba(37, 211, 102, 0.8) 0%, rgba(37, 211, 102, 0.4) 40%, transparent 70%)',
              padding: '15px', 
              borderRadius: '50% 50% 50% 0%', // Forma de gota
              transform: 'rotate(-45deg)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'rotate(-45deg) scale(1.1)';
              e.target.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'rotate(-45deg) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
            }}
          >
            <FaWhatsapp style={{ transform: 'rotate(45deg)', fontSize: '20px' }} />
          </a>
          <a 
            href="https://www.instagram.com/danielrivero_tattoo?utm_source=web_hero" 
            aria-label="Instagram"
             title="Sígueme en Instagram — visita desde la página web" 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              background: 'radial-gradient(circle at 30% 20%, rgba(225, 48, 108, 0.8) 0%, rgba(225, 48, 108, 0.4) 40%, transparent 70%)',
              padding: '15px', 
              borderRadius: '50% 50% 50% 0%', // Forma de gota
              transform: 'rotate(-45deg)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              boxShadow: '0 4px 15px rgba(225, 48, 108, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'rotate(-45deg) scale(1.1)';
              e.target.style.boxShadow = '0 6px 20px rgba(225, 48, 108, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'rotate(-45deg) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(225, 48, 108, 0.3)';
            }}
          >
            <FaInstagram style={{ transform: 'rotate(45deg)', fontSize: '20px' }} />
          </a>
          {/*<a 
            href="https://www.facebook.com/share/1Cp3n45gMv/?mibextid=wwXIfr" 
            aria-label="Facebook" 
            target="_blank" 
            rel="noreferrer"
            style={{ 
              background: 'radial-gradient(circle at 30% 20%, rgba(24, 119, 242, 0.8) 0%, rgba(24, 119, 242, 0.4) 40%, transparent 70%)',
              padding: '15px', 
              borderRadius: '50% 50% 50% 0%', // Forma de gota
              transform: 'rotate(-45deg)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              boxShadow: '0 4px 15px rgba(24, 119, 242, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'rotate(-45deg) scale(1.1)';
              e.target.style.boxShadow = '0 6px 20px rgba(24, 119, 242, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'rotate(-45deg) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(24, 119, 242, 0.3)';
            }}
          >
            <FaFacebookF style={{ transform: 'rotate(45deg)', fontSize: '20px' }} />
          </a>*/}
        </div>
      </div>
    </header>
  );
}
