import { motion } from "framer-motion";
import restaurante from "../assets/images/servicio-restaurante.png";
import auditorio from "../assets/images/servicio-auditorio.png";
import alojamiento from "../assets/images/servicio-alojamiento.jpg";

const servicios = [
  {
    title: "Restaurantes",
    subtitle: "Disfruta de desayunos y platos locales dentro del hotel.",
    img: restaurante,
    href: "https://api.whatsapp.com/send/?phone=51943773549&text&type=phone_number&app_absent=0",
  },
  {
    title: "Eventos coporativos",
    subtitle: "Espacios para reuniones, conferencias y eventos privados.",
    img: auditorio,
    href: "https://api.whatsapp.com/send/?phone=51943773549&text&type=phone_number&app_absent=0",
  },
  {
    title: "Alojamiento",
    subtitle: "Descansa en nuestras cómodas habitaciones en el corazón de la ciudad.",
    img: alojamiento,
    href: "https://api.whatsapp.com/send/?phone=51943773549&text&type=phone_number&app_absent=0",
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
export default function Servicios() {
  return (
    <section className="section" id="servicios">
      <h2 className="section-title">Nuestros servicios</h2>

      <motion.div
        className="service-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {servicios.map((s) => (
          <motion.a
            key={s.title}
            className="service-card"
            href={s.href}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            <img className="service-img" src={s.img} alt={s.title} />
            <div className="service-dim" />

            <div className="service-label">
              <span>{s.title}</span>
              <span className="service-arrow">›</span>
            </div>

            <div className="service-hover">
              <div className="service-hover-inner">
                <h3>{s.title}</h3>
                <div className="service-hover-line" />
                <p>{s.subtitle}</p>
                <button className="service-hover-btn">Ver más</button>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
