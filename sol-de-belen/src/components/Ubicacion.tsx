import React from 'react';
import "../styles/Ubicacion.css";
// Ícono genérico de marcador (Solid Pin)
function IconSolidPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );
}

// Ícono de Avión
function IconPlane() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  );
}

type NearbyPlace = {
  name: string;
  distance: string;
  icon: React.ReactNode;
};

const places: NearbyPlace[] = [
  { name: "Iglesia de Belén", distance: "Al lado del hotel.", icon: <IconSolidPin /> },
  { name: "Plaza de Armas de Cajamarca", distance: "Frente al hotel.", icon: <IconSolidPin /> },
  { name: "Colina Santa Apolonia", distance: "A 15 min a pie.", icon: <IconSolidPin /> },
  
  { name: "Catedral de Cajamarca", distance: "A 5 min a pie.", icon: <IconSolidPin /> },
  { name: "Cuarto del Rescate", distance: "A 5 min a pie.", icon: <IconSolidPin /> },
  { name: "Baños termales del Inca", distance: "A 22 min en auto.", icon: <IconSolidPin /> },
  { name: "Granja Porcon", distance: "A 70 min en auto.", icon: <IconSolidPin /> },
  { name: "Cajamarca (CJA-Mayor General FAP...)", distance: "A 7 min en auto.", icon: <IconPlane /> },
];

export default function Ubicacion() {
  return (
    <div className="ubicacion-container">
      <h2 className="ubicacion-title">Ubicación</h2>
      
      <div className="map-wrapper">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.713382124572!2d-78.5165962!3d-7.159097799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b25afec899987f%3A0x32a48a5853179b55!2sHotel%20Sol%20de%20Bel%C3%A9n!5e0!3m2!1ses-419!2spe!4v1776175897023!5m2!1ses-419!2spe" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de ubicación del hotel"
        ></iframe>
      </div>

      <h3 className="nearby-title">¿Qué encontrar cerca?</h3>
      
      <ul className="nearby-list">
        {places.map((place, index) => (
          <li key={index} className="nearby-item">
            <div className="nearby-item-left">
              <span className="nearby-icon">{place.icon}</span>
              <span className="nearby-name">{place.name}</span>
            </div>
            <span className="nearby-distance">{place.distance}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}