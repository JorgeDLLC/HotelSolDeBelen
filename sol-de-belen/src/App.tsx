import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Habitaciones from "./components/Habitaciones";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Ratings from "./components/Ratings";
import CloudbedsWidget from "./components/CloudbedsWidget";
import AdPopup from './components/AddPopup';
import Ubicacion from "./components/Ubicacion";

export default function App() {
  return (
    <div className="page">
      <AdPopup />
      <div className="panel">
        <Navbar />
        <Hero />
        <CloudbedsWidget />
      </div>
      <div className="container-ubicacion-features">
        <div className="location-features-section">
          <div>
            <Features />
          </div>
          <div>
            <Ubicacion />
          </div>
        </div>
      </div>
      <div className="panel">
        <Servicios />
      </div>

      <div className="panel">
        <Ratings />
      </div>

      <div className="panel">
        <Habitaciones />
      </div>

      <div className="panel">
        <Footer />
      </div>
    </div>
  );
}
