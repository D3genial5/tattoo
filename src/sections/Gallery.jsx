import { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/responsive.css';

const IMAGES = [
  '/img/IMG_6825.JPG.jpeg',
  '/img/IMG_9373.JPG.jpeg',
  '/img/IMG_6686.JPG.jpeg',
  '/img/IMG_1932.JPG.jpeg',
  '/img/IMG_4122.JPG.jpeg',
  '/img/IMG_8108.JPG.jpeg',
  '/img/IMG_8812.JPG.jpeg',
  '/img/IMG_8879.JPG.jpeg',
  '/img/IMG_9441.JPG.jpeg',
  '/img/IMG_9581.JPG.jpeg',
  '/img/IMG_9625.JPG.jpeg',
];

const SWIPE_THRESHOLD = 40;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const total = IMAGES.length;
  const touchStartX = useRef(null);
  const viewportRef = useRef(null);

  const go = useCallback(
    (i) => setIndex(((i % total) + total) % total),
    [total]
  );
  const next = useCallback(() => go(index + 1), [index, go]);
  const prev = useCallback(() => go(index - 1), [index, go]);

  // Keyboard nav: only when the carousel is in viewport / focused
  useEffect(() => {
    const onKey = (e) => {
      if (!viewportRef.current) return;
      const rect = viewportRef.current.getBoundingClientRect();
      const visible =
        rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (!visible) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Preload neighbours
  useEffect(() => {
    [(index + 1) % total, (index - 1 + total) % total].forEach((i) => {
      const img = new Image();
      img.src = IMAGES[i];
    });
  }, [index, total]);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Header — alineado al sistema editorial */}
        <header className="section-header">
          <span className="section-eyebrow">
            <span className="section-eyebrow-line" />
            ESPECIALIDAD
            <span className="section-eyebrow-line" />
          </span>
          <h2 className="section-title">
            Piezas <em>seleccionadas.</em>
          </h2>
          <p className="section-sub">
            Tatuajes hechos con detalle, elegancia y sello propio.
          </p>
          <a
            className="gallery-ig-link"
            href="https://www.instagram.com/danielrivero_tattoo/reels"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
            Ver Reels en Instagram
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
        </header>

        {/* Carousel */}
        <div
          className="gallery-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Galería de trabajos"
        >
          <div
            ref={viewportRef}
            className="gallery-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Trabajo ${i + 1} de ${total}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`gallery-slide${i === index ? ' is-active' : ''}`}
                aria-hidden={i !== index}
                draggable={false}
              />
            ))}
            <div className="gallery-vignette" aria-hidden="true" />
            <div className="gallery-counter" aria-live="polite">
              {String(index + 1).padStart(2, '0')}
              <span>/</span>
              {String(total).padStart(2, '0')}
            </div>
          </div>

          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-arrow"
              onClick={prev}
              aria-label="Imagen anterior"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="gallery-dots" role="tablist" aria-label="Seleccionar imagen">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  className={`gallery-dot${i === index ? ' is-active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  aria-selected={i === index}
                />
              ))}
            </div>

            <button
              type="button"
              className="gallery-arrow"
              onClick={next}
              aria-label="Imagen siguiente"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
