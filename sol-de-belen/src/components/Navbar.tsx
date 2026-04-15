import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
export default function Navbar() {

  return (
    <nav className="navbar">
      <div className="nav-links-social-media">
      <ul className='social-media'>
        <li><a href="https://www.facebook.com/share/17oHT6GbFb/?mibextid=wwXIfr" target="_blank"
  rel="noopener noreferrer" aria-label="Pagina de facebook"><FaFacebook color="#ffffff" /></a></li>
        <li><a href="https://www.instagram.com/hotelsoldebelen?igsh=d2Yxa3J4YjNjMGFx" target="_blank"
  rel="noopener noreferrer" aria-label="Pagina de instagram"><FaInstagram color="#ffffff" /></a></li>
        <li><a href="https://api.whatsapp.com/send/?phone=51943773549&text&type=phone_number&app_absent=0" target="_blank"
  rel="noopener noreferrer" aria-label="Contactar por WhatsApp"><FaWhatsapp color="#ffffff" /></a></li>
      </ul>
      </div>
      <div className='regular-links'>
      <ul className="nav-links">
        <li><a href="https://hotels.cloudbeds.com/es/reservation/xFTHFv?currency=pen" target="_blank"
  rel="noopener noreferrer">RESERVAR EN LINEA</a></li>
      </ul>
      </div>
    </nav>
  );
}
