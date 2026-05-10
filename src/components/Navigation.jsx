import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/responsive.css';

const LINKS = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre mí' },
  { id: 'artists', label: 'Estilos' },
  { id: 'gallery', label: 'Galería' },
  { id: 'booking-guide', label: 'Agendar' },
];

const WA_HREF =
  'https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <>
      <nav className={`nav ${isScrolled ? 'is-scrolled' : ''}`} aria-label="Principal">
        <div className="nav-inner">
          <button
            className="nav-brand"
            onClick={() => goTo('hero')}
            aria-label="Ir al inicio"
          >
            <span className="nav-brand-mark">
              <img src="/img/icon.jpg" alt="" />
            </span>
            <span className="nav-brand-text">
              <span className="nav-brand-name">Daniel Rivero</span>
              <span className="nav-brand-tag">Tattoo Artist</span>
            </span>
          </button>

          <ul className="nav-links" role="list">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button className="nav-link" onClick={() => goTo(l.id)}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              className="nav-cta"
              href={WA_HREF}
              target="_blank"
              rel="noreferrer"
              aria-label="Agendar cita por WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
              <span>Agendar</span>
            </a>
            <button
              type="button"
              className={`nav-toggle ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`nav-drawer ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
      >
        <div className="nav-drawer-backdrop" onClick={() => setOpen(false)} />
        <div className="nav-drawer-panel">
          <ul className="nav-drawer-list" role="list">
            {LINKS.map((l, i) => (
              <li key={l.id} style={{ '--i': i }}>
                <button onClick={() => goTo(l.id)}>
                  <span className="nav-drawer-num">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="nav-drawer-label">{l.label}</span>
                </button>
              </li>
            ))}
          </ul>
          <a
            className="nav-drawer-cta"
            href={WA_HREF}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            <FaWhatsapp />
            <span>Agendar por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
