import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const WA_HREF =
  'https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje';
const IG_HREF = 'https://www.instagram.com/danielrivero_tattoo';
const MAPS_HREF = 'https://maps.google.com/?q=Santa+Cruz+de+la+Sierra+Bolivia';

const NAV = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'artists', label: 'Estilos' },
  { id: 'gallery', label: 'Galería' },
  { id: 'booking-guide', label: 'Agendar' },
];

export default function Contact() {
  return (
    <footer className="footer" id="contact">
      {/* Final CTA banner */}
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div className="footer-cta-text">
            <span className="footer-cta-eyebrow">¿Listo para crear?</span>
            <h2 className="footer-cta-title">
              Agenda tu próxima pieza con Daniel.
            </h2>
            <p className="footer-cta-sub">
              Cupos limitados cada mes — reserva con anticipación para asegurar tu fecha.
            </p>
          </div>
          <a className="footer-cta-btn" href={WA_HREF} target="_blank" rel="noreferrer">
            <FaWhatsapp aria-hidden="true" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-divider" aria-hidden="true" />

      {/* Footer body */}
      <div className="container footer-body">
        <div className="footer-col footer-brand-col">
          <div className="footer-brand">
            <span className="footer-brand-mark">
              <img src="/img/icon.jpg" alt="" />
            </span>
            <div>
              <span className="footer-brand-name">Daniel Rivero</span>
              <span className="footer-brand-tag">ÉXODO · Tattoo Studio</span>
            </div>
          </div>
          <p className="footer-about">
            Estudio de tatuajes especializado en minimalismo, microrealismo y
            blackwork. Cada pieza es única, creada con técnica, paciencia y
            sentido.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Explorar</h4>
          <ul className="footer-links" role="list">
            {NAV.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contacto</h4>
          <ul className="footer-info" role="list">
            <li>
              <a href={MAPS_HREF} target="_blank" rel="noreferrer">
                <FaMapMarkerAlt aria-hidden="true" />
                <span>Santa Cruz de la Sierra, Bolivia</span>
              </a>
            </li>
            <li>
              <a href={WA_HREF} target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden="true" />
                <span>+591 691 04422</span>
              </a>
            </li>
            <li>
              <a href={IG_HREF} target="_blank" rel="noreferrer">
                <FaInstagram aria-hidden="true" />
                <span>@danielrivero_tattoo</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Atención</h4>
          <ul className="footer-info" role="list">
            <li><span>Lun – Vie</span><span>10:00 — 19:00</span></li>
            <li><span>Sábados</span><span>Solo con cita</span></li>
            <li><span>Domingos</span><span>Cerrado</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Daniel Rivero Tattoo. Todos los derechos reservados.</p>
        <p className="footer-bottom-tag">Diseñado con cuidado · Hecho en Santa Cruz</p>
      </div>
    </footer>
  );
}
