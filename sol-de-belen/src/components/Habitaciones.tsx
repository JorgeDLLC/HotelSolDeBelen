import { motion } from "framer-motion";

import h1 from "../assets/images/hab-01.png";
import h2 from "../assets/images/hab-02.png";
import h3 from "../assets/images/hab-03.png";
import h4 from "../assets/images/hab-04.png";

const rooms = [
  {
    title: "Habitación Matrimonial",
    desc: "Ideal para parejas. Cama amplia, confort y ambiente cálido.",
    img: h1,
    href: "https://hotels.cloudbeds.com/es/reservation/xFTHFv?currency=pen",
  },
  {
    title: "Habitación Doble",
    desc: "Dos camas, perfecta para amigos o familia.",
    img: h2,
    href: "https://hotels.cloudbeds.com/es/reservation/xFTHFv?currency=pen",
  },
  {
    title: "Habitación Triple",
    desc: "Espacio amplio y comodidad para grupos.",
    img: h3,
    href: "https://hotels.cloudbeds.com/es/reservation/xFTHFv?currency=pen",
  },
  {
    title: "Habitación Familiar",
    desc: "Pensada para estadías largas y confort total.",
    img: h4,
    href: "https://hotels.cloudbeds.com/es/reservation/xFTHFv?currency=pen",
  },
];

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

export default function Habitaciones() {
  return (
    <section id="habitaciones" className="section">
      <h2 className="section-title">Habitaciones</h2>

      <motion.div
        className="room-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-90px" }}
      >
        {rooms.map((r) => (
          <motion.a
            key={r.title}
            className="room-card"
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <img className="room-img" src={r.img} alt={r.title} />
            <div className="room-dim" />

            {/* Estado normal */}
            <div className="room-label">
              <span>{r.title}</span>
              <span className="room-arrow">›</span>
            </div>

            {/* Hover */}
            <div className="room-hover">
              <div className="room-hover-inner">
                <h3>{r.title}</h3>
                <div className="room-hover-line" />
                <p>{r.desc}</p>
                <span className="room-hover-btn">Ver más</span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
