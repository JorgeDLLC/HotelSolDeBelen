import { useState, useEffect } from "react";
import heroImg from "../assets/images/hero.png";
import LOGOHSDB from "../assets/images/logo-hsdb.png";
import { motion } from "framer-motion";

const phrases = [
  { line1: "UN HOGAR", line2: "LEJOS DE CASA" },
  { line1: "UN SERVICIO EN LA ALTURA", line2: "A TU ALTURA" },
  { line1: "SIÉNTETE", line2: "COMO EN CASA" }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 20000); // 20 segundos

      return () => clearInterval(interval);
    }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-shade" />

      <div className="hero-inner">
        {/* Contenedor del logo centrado */}
        <motion.div
          className="hero-logo-container" 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={LOGOHSDB} alt="Logo Sol de Belén" className="hero-logo-img" />
        </motion.div>

        <div className="hero-tagline">
           <motion.div
            className="hero-tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
              <p>{phrases[index].line1}</p>
              <p>{phrases[index].line2}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
