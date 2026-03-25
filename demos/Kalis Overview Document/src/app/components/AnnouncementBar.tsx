import { motion } from "motion/react";
import { useState, useEffect } from "react";

const messages = [
  "LIVRAISON DANS TOUT GENÈVE EN MOINS DE 4H",
  "COMMANDES AVANT 14H · LIVRAISON LE JOUR MÊME",
  "BOUTIQUE OUVERTE LUN–VEN 9H–19H · SAM 9H–18H"
];

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-11 bg-[#3D2B1F] flex items-center justify-center overflow-hidden">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-white tracking-[0.18em] uppercase"
        style={{ fontSize: '11px' }}
      >
        {messages[currentIndex]}
      </motion.div>
    </div>
  );
}
