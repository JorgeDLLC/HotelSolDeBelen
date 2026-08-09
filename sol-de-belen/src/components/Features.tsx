import React from "react";
import "../styles/Features.css";
type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function IconPin() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 13.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function IconBath() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M7 6a3 3 0 0 1 6 0v6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconStaff() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12v4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconOffer() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M7 7h10v14H7V7Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 3h6v4H9V3Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 12h4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 16h4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
function IconWifi() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 20h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
      <path d="M6 15v-4a6 6 0 1 1 12 0v4l2 3H4l2-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 21h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
const features: Feature[] = [
  {
    icon: <IconPin />,
    title: "Ubicación céntrica",
    desc: "En el corazón de la ciudad para un acceso rápido y conveniente.",
  },
  {
    icon: <IconBath />,
    title: "Confort y estilo",
    desc: "Habitaciones modernas, cómodas y totalmente equipadas.",
  },
  {
    icon: <IconStaff />,
    title: "Atención cálida",
    desc: "Personal amable que te acompaña para una estadía agradable.",
  },
  {
    icon: <IconOffer />,
    title: "Mejores precios",
    desc: "Tarifas competitivas y ofertas pensadas para ti.",
  },
  {
    icon: <IconWifi />,
    title: "Wi-Fi de alta velocidad",
    desc: "Conexión gratuita, rápida y estable en todas nuestras áreas.",
  },
  {
    icon: <IconBell />,
    title: "Recepción 24/7",
    desc: "Asistencia permanente para garantizar tu tranquilidad en todo momento.",
  },
];

export default function Features() {
  return (
      <div className="features">
        {features.map((f) => (
          <article key={f.title} className="feature">
            <div className="feature-icon" aria-hidden>
              {f.icon}
            </div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </article>
        ))}
      </div>
  );
}
