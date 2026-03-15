import { useState, useEffect } from 'react';
import '../styles/responsive.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container flex" style={{ 
        justifyContent: 'space-between', 
        padding: '1rem',
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        <div className="nav-logo">
          <img src="/img/icon.jpg" alt="Logo" style={{ width: 40, height: 40, borderRadius: '50%' }} />
        </div>
        <ul className="nav-links flex" style={{ 
          listStyle: 'none', 
          gap: '2rem', 
          margin: 0,
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <li><button onClick={() => scrollToSection('hero')} className="nav-link">Inicio</button></li>
          <li><button onClick={() => scrollToSection('artists')} className="nav-link">Estilos</button></li>
          <li><button onClick={() => scrollToSection('booking-guide')} className="nav-link">Agendar</button></li>
          <li><button onClick={() => scrollToSection('gallery')} className="nav-link">Galería</button></li>
        </ul>
      </div>
    </nav>
  );
}
