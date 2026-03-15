import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="container">
        <p style={{ opacity: 0.8, maxWidth: 500, margin: '0 auto 1.5rem' }}>
          ¿Listo para crear arte juntos?
        </p>
        {/*<div className="contact-icons flex" style={{ justifyContent: 'center' }}/>
          <a href="https://wa.me/59169044422?text=Hola%20Daniel,%20quiero%20agendar%20una%20cita%20para%20un%20tatuaje"  aria-label="WhatsApp" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:tattoo@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
          
        </div>*/}
        <p style={{ marginTop: '2rem', fontSize: '.8rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} Daniel Rivero Tattoo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
// minimalista y blackwork
