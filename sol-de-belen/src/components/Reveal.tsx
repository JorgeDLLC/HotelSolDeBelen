import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  y?: number;
  delay?: number;
};

export default function Reveal({ children, y = 18, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
