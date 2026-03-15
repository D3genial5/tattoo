import { useState, useEffect, useRef } from 'react';
import '../styles/responsive.css';

export default function Gallery() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const loadVideos = () => {
      // Imágenes destacadas
      const imageFiles = [
        { src: '/img/IMG_6825.JPG.jpeg' },
        { src: '/img/IMG_9373.JPG.jpeg' },
        { src: '/img/IMG_6686.JPG.jpeg' },
        { src: '/img/IMG_1932.JPG.jpeg' },
        { src: '/img/IMG_4122.JPG.jpeg' },
        { src: '/img/IMG_8108.JPG.jpeg' },
        { src: '/img/IMG_8812.JPG.jpeg' },
        { src: '/img/IMG_8879.JPG.jpeg' },
        { src: '/img/IMG_9441.JPG.jpeg' },
        { src: '/img/IMG_9581.JPG.jpeg' },
        { src: '/img/IMG_9625.JPG.jpeg' }
      ];
      
      setVideos(imageFiles);
    };
    
    loadVideos();
  }, []);

  const nextVideo = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const prevVideo = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const goToVideo = (index) => {
    if (isTransitioning || index === currentVideoIndex) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentVideoIndex(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };



  return (
    <section id="gallery" style={{ background: '#111', padding: '1.5rem 1rem' }}>
      <div className="container">
        {/* Header con separador */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '0.5rem'
          }}>
            <div style={{ height: '2px', width: '60px', background: 'var(--primary)' }}></div>
            <span style={{ fontSize: '2rem' }}>📸</span>
            <div style={{ height: '2px', width: '60px', background: 'var(--primary)' }}></div>
          </div>
          <h2 style={{ 
            color: 'var(--primary)', 
            fontSize: '1.8rem',
            letterSpacing: '3px',
            fontWeight: '700'
          }}>
          ESPECIALIDAD
          </h2>
          <p style={{ 
            color: '#ccc', 
            fontSize: '1.05rem',
            marginTop: '0.5rem',
            maxWidth: '650px',
            margin: '0.5rem auto 0',
            lineHeight: 1.4
          }}>
            Tatuajes hechos con detalle, elegancia y sello propio.
           
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <a
              href="https://www.instagram.com/danielrivero_tattoo/reels"
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'linear-gradient(90deg, #0d9488 0%, #eab308 100%)',
                color: '#000',
                padding: '0.75rem 1.5rem',
                borderRadius: 30,
                fontWeight: 700,
                boxShadow: '0 10px 25px rgba(13, 148, 136, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: 'none',
                position: 'relative',
                overflow: 'hidden',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '0.95rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-4px) scale(1.03)';
                e.target.style.boxShadow = '0 15px 30px rgba(13, 148, 136, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 25px rgba(13, 148, 136, 0.35)';
              }}
            >
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
              Ver Reels en Instagram
            </a>
          </div>
        </div>

        {/* Galería local de imágenes */}
        {videos.length > 0 && (
          <div ref={containerRef} className="single-video-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '350px',
            margin: '0 auto'
          }}>
            {/* Imagen actual */}
            <div 
              className="current-video-wrapper"
              style={{ 
                position: 'relative',
                width: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(13, 148, 136, 0.3)',
                background: '#000',
                transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
                opacity: isTransitioning ? 0.7 : 1,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <img
                key={currentVideoIndex}
                src={videos[currentVideoIndex]?.src}
                alt={`Trabajo ${currentVideoIndex + 1}`}
                loading="lazy"
                style={{ 
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '20px',
                  transform: isTransitioning ? 'translateX(10px)' : 'translateX(0)',
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              />
            </div>

            {/* Controles de navegación */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginTop: '1rem',
              gap: '1rem'
            }}>
              <button
                onClick={prevVideo}
                disabled={isTransitioning}
                style={{
                  background: isTransitioning ? 'rgba(13, 148, 136, 0.6)' : 'var(--primary)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  color: '#000',
                  fontSize: '1.2rem',
                  cursor: isTransitioning ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 5px 15px rgba(13, 148, 136, 0.3)',
                  transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
                  opacity: isTransitioning ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isTransitioning) {
                    e.target.style.transform = 'scale(1.15) translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 30px rgba(13, 148, 136, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isTransitioning) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 5px 15px rgba(13, 148, 136, 0.3)';
                  }
                }}
              >
                ←
              </button>

              {/* Indicador de imagen actual */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                {videos.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => goToVideo(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: index === currentVideoIndex ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: index === currentVideoIndex ? 'scale(1.3)' : 'scale(1)',
                      boxShadow: index === currentVideoIndex ? '0 0 10px rgba(13, 148, 136, 0.5)' : 'none'
                    }}
                  />
                ))}
              </div>

              <button
                onClick={nextVideo}
                disabled={isTransitioning}
                style={{
                  background: isTransitioning ? 'rgba(13, 148, 136, 0.6)' : 'var(--primary)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  color: '#000',
                  fontSize: '1.2rem',
                  cursor: isTransitioning ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 5px 15px rgba(13, 148, 136, 0.3)',
                  transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
                  opacity: isTransitioning ? 0.7 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isTransitioning) {
                    e.target.style.transform = 'scale(1.15) translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 30px rgba(13, 148, 136, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isTransitioning) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 5px 15px rgba(13, 148, 136, 0.3)';
                  }
                }}
              >
                →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
