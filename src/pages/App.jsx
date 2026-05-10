import Navigation from '../components/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TattooStyles from '../sections/StyleOfArt';
import BookingGuide from '../sections/BookingGuide';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';

export default function App() {
  return (
    <>
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <TattooStyles />
      <BookingGuide />
      <Gallery />
      <Contact />
    </>
  );
}
