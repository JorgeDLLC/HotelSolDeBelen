import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { type Ad } from './types/adds';

const AdPopup: React.FC = () => {
  const [ad, setAd] = useState<Ad | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const response = await axios.get<Ad[]>('/api/adds/'); ///http://127.0.0.1:8000/api/adds/
        
        if (response.data.length > 0) {
          const currentAd = response.data[0];
          const closedAdId = sessionStorage.getItem('closedAdId');
          if (closedAdId !== currentAd.id.toString()) {
            setAd(currentAd);
            setIsVisible(true);
          }
        }
      } catch (error) {
        console.error("Error cargando anuncios:", error);
      }
    };

    fetchAd();
  }, []);

  const closeAd = () => {
    setIsVisible(false);
    if (ad) {
      sessionStorage.setItem('closedAdId', ad.id.toString());
    }
  };

  if (!isVisible || !ad) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button onClick={closeAd} style={closeButtonStyle}>X</button>
        <a href={ad.link_url} target="_blank" rel="noopener noreferrer">
          <img 
            src={ad.image} 
            alt={ad.title} 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
        </a>
      </div>
    </div>
  );
};

// Estilos rápidos (puedes usar CSS Modules o Tailwind si prefieres)
const overlayStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', justifyContent: 'center',
  alignItems: 'center', zIndex: 1000
};

const modalStyle: React.CSSProperties = {
  position: 'relative', maxWidth: '500px', width: '90%', background: '#fff',
  padding: '10px', borderRadius: '12px'
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute', top: '-10px', right: '-10px', background: '#ff4d4d',
  color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer',
  width: '30px', height: '30px'
};

export default AdPopup;