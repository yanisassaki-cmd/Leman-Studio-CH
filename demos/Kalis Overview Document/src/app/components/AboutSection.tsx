import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section className="grid lg:grid-cols-2 bg-[#F5F0E8]">
      {/* Image Collage Left */}
      <div className="relative min-h-[500px] lg:min-h-0">
        {/* Main Photo */}
        <div className="absolute inset-0">
          <img 
            src="https://kalis.com/wp-content/uploads/2023/03/Kalis-21.jpg"
            alt="Kalis Atelier"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlapping Inset Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-8 right-[-15px] lg:right-[-30px] w-[180px] h-[240px] lg:w-[240px] lg:h-[320px] border-[6px] border-white shadow-2xl"
        >
          <img 
            src="https://kalis.com/wp-content/uploads/2023/03/Kalis-15.jpg"
            alt="Kalis Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Editorial Text Right */}
      <div className="px-8 lg:px-20 py-16 lg:py-24 relative">
        <div 
          className="text-[#8B5E3C] tracking-[0.2em] uppercase mb-6"
          style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
        >
          NOTRE MÉTIER
        </div>

        {/* Large Decorative Quote Mark */}
        <div 
          className="absolute top-20 left-12 text-[#F5F0E8] select-none pointer-events-none"
          style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: '120px',
            opacity: 0.15,
            lineHeight: 1
          }}
        >
          "
        </div>

        {/* Pull Quote */}
        <blockquote 
          className="text-[#8B5E3C] mb-8 relative z-10"
          style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.3
          }}
        >
          La créativité est notre qualité première.
        </blockquote>

        {/* Body Text */}
        <div 
          className="text-[#2C2420] mb-10 leading-relaxed"
          style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.85 }}
        >
          Fondée en 2004 par Pierre Mugnier, Kalis puise ses origines dans le mot 'Calice' — l'enveloppe protectrice de la fleur avant son éclosion. Situé au cœur de la vieille ville de Genève, notre atelier de 250m² abrite tout le savoir-faire de la maison. La décoration contemporaine — béton structuré et murs noircis de peinture mate — sublime les couleurs naturelles des fleurs, exposées telles des œuvres d'art.
        </div>

        {/* Signature */}
        <div className="border-t border-[rgba(139,94,60,0.2)] pt-6">
          <div 
            className="text-[#8B5E3C] mb-1"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontStyle: 'italic' }}
          >
            Pierre Mugnier
          </div>
          <div 
            className="text-[#7A6A60] uppercase tracking-[0.14em]"
            style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
          >
            Fondateur & Artisan fleuriste
          </div>
        </div>
      </div>
    </section>
  );
}
