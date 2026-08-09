import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Habitaciones.css";

// Matrimonial
import matrimonial1 from "../assets/images/Matrimonial1.png";
import matrimonial2 from "../assets/images/Matrimonial2.png";
import matrimonial3 from "../assets/images/Matrimonial3.png";

// Suite Familiar
import suitefamiliar1 from "../assets/images/Familiar1.png";
import suitefamiliar2 from "../assets/images/Familiar2.png";
import suitefamiliar3 from "../assets/images/Familiar3.png";

// Individual
// import individual1 from "../assets/images/individual1.jpg";
// import individual2 from "../assets/images/individual2.jpg";
// import individual3 from "../assets/images/individual3.jpg";

// Doble
import doble1 from "../assets/images/Doble1.png";
import doble2 from "../assets/images/Doble2.png";


// Triple
import triple1 from "../assets/images/Triple1.png";
import triple2 from "../assets/images/Triple2.png";

// Cuádruple
import cuadruple1 from "../assets/images/Cuadruple1.jpg";
import cuadruple2 from "../assets/images/Cuadruple2.jpg";
import cuadruple3 from "../assets/images/Cuadruple3.jpg";

const RESERVA_URL = "https://hotels.cloudbeds.com/es/reservation/xFTHFv?currency=pen";

// Cada cuántos milisegundos rota la foto
const CAROUSEL_INTERVAL = 10000;

type Room = {
  title: string;
  desc: string;
  images: string[];
  href: string;
};

const rooms: Room[] = [
  {
    title: "Habitación Matrimonial",
    desc: "Un refugio íntimo pensado para dos. Cama king size vestida con ropa de cama premium, luz cálida que invita a quedarse un rato más y los pequeños detalles que convierten una noche cualquiera en una escapada memorable. Perfecta para parejas que buscan descanso, complicidad y ese silencio reconfortante al final del día.",
    images: [matrimonial1, matrimonial2, matrimonial3],
    href: RESERVA_URL,
  },
  {
    title: "Suite Familiar",
    desc: "Amplitud y comodidad pensadas para compartir. Espacios independientes, ambientes cálidos y todo lo necesario para que cada integrante de la familia tenga su propio rincón sin perder la cercanía. Ideal para estadías largas donde el confort no se negocia y cada día se siente como en casa.",
    images: [suitefamiliar1, suitefamiliar2, suitefamiliar3],
    href: RESERVA_URL,
  },
  // {
  //   title: "Habitación Individual",
  //   desc: "Cómoda y práctica, perfecta para viajeros solos.",
  //   images: [individual1, individual2, individual3],
  //   href: RESERVA_URL,
  // },
  {
    title: "Habitación Doble",
    desc: "El punto justo entre comodidad y compañía. Dos camas amplias en un ambiente sereno, ideal para amigos, colegas de viaje o familiares que buscan compartir la estadía sin sacrificar el espacio personal. Un lugar cálido para recargar energías juntos.",
    images: [doble1, doble2],
    href: RESERVA_URL,
  },
  {
    title: "Habitación Triple",
    desc: "Pensada para quienes viajan en grupo y no quieren renunciar al confort. Espacios amplios, distribución inteligente y una atmósfera acogedora que hace que la convivencia se sienta natural. Ideal para amigos o familias que buscan compartir risas, historias y un buen descanso.",
    images: [triple1, triple2],
    href: RESERVA_URL,
  },
  {
    title: "Habitación Cuádruple",
    desc: "La opción perfecta para grupos grandes o familias numerosas. Amplitud generosa, ambientes bien distribuidos y todo el confort necesario para que nadie sienta que le falta espacio. Porque las mejores historias de viaje se cuentan en grupo, y aquí hay lugar para todas",
    images: [cuadruple1, cuadruple2, cuadruple3],
    href: RESERVA_URL,
  },
];

function RoomImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="room-image-block">
      <div className="room-background-shape-1" />
      <div className="room-background-shape-2" />
      <div className="room-image-frame">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={title}
            className="room-main-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

function RoomBlock({ room, reverse }: { room: Room; reverse: boolean }) {
  const imageEl = <RoomImageCarousel images={room.images} title={room.title} />;

  const contentEl = (
    <div className="room-content-block">
      <h3 className="room-details-title">{room.title}</h3>
      <p className="room-details-description">{room.desc}</p>
      <div className="room-details-divider" />
      <a
        className="room-details-button"
        href={room.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reservar
      </a>
    </div>
  );

  return (
    <motion.div
      className="room-split-layout"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {reverse ? (
        <>
          {contentEl}
          {imageEl}
        </>
      ) : (
        <>
          {imageEl}
          {contentEl}
        </>
      )}
    </motion.div>
  );
}

export default function Habitaciones() {
  return (
    <section id="habitaciones" className="section rooms-section">
      <h2 className="section-title">Habitaciones</h2>

      {rooms.map((room, i) => (
        <RoomBlock key={room.title} room={room} reverse={i % 2 === 1} />
      ))}
    </section>
  );
}
