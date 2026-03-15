import Navigation from '../components/Navigation';
import Hero from '../sections/Hero';
import About from '../sections/About';
import TattooStyles from '../sections/StyleOfArt';
import BookingGuide from '../sections/BookingGuide';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Podcast from '../sections/Podcast';

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
      {/*<Podcast />*/}
      {/*<Testimonials />*/}
      <Contact />
    </>
  );
}
