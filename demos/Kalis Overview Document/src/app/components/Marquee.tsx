import { motion } from "motion/react";

const items = [
  "FLEURS FRAÎCHES GARANTIES",
  "LIVRAISON SOUS 4H À GENÈVE",
  "COMPOSITIONS ORIGINALES & DE SAISON",
  "MARIAGES & ÉVÉNEMENTS CORPORATIFS",
  "ABONNEMENTS KALIS BOX",
  "FLEURS LOCALES & ÉCO-RESPONSABLES"
];

export function Marquee() {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="bg-[#3D2B1F] h-[52px] flex items-center overflow-hidden">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{
          x: [0, -33.333 + '%']
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span 
              className="text-[#C4956A] tracking-[0.14em] uppercase"
              style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}
            >
              {item}
            </span>
            <span className="text-[#C4956A]">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
