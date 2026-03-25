import { motion } from "motion/react";

const testimonials = [
  {
    text: "Les meilleures fleurs de la ville et l'équipe la plus charmante. Ne cherchez pas plus loin !",
    author: "Christoph",
    source: "Google",
    rating: 5
  },
  {
    text: "J'aime que leurs bouquets aient une essence sauvage et créative. Ils ne semblent pas si ennuyeux et corporatifs.",
    author: "L.S",
    source: "Google",
    rating: 5
  },
  {
    text: "La composition était sublime. J'ai été très satisfaite, votre vendeuse était à la hauteur des attentes les plus exigeantes.",
    author: "Sophie",
    source: "Google",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="bg-[#FDFAF6] px-6 lg:px-16 py-20 lg:py-28">
      {/* Section Header */}
      <h2 
        className="text-[#2C2420] text-center mb-16"
        style={{ 
          fontFamily: 'Cormorant Garamond, serif', 
          fontSize: 'clamp(36px, 4vw, 48px)',
          fontWeight: 300
        }}
      >
        Ce que disent nos clients
      </h2>

      {/* Testimonial Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-[#F5F0E8] p-8 rounded-[4px] relative"
          >
            {/* Large Decorative Quote Mark */}
            <div 
              className="absolute top-4 left-4 text-[#FDFAF6] select-none pointer-events-none"
              style={{ 
                fontFamily: 'Cormorant Garamond, serif', 
                fontSize: '80px',
                opacity: 0.15,
                lineHeight: 1
              }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4 relative z-10">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-[#8B5E3C] text-lg">★</span>
              ))}
            </div>

            {/* Text */}
            <p 
              className="text-[#2C2420] mb-6 relative z-10"
              style={{ fontSize: '15px', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
            >
              {testimonial.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-2 relative z-10">
              <span 
                className="text-[#8B5E3C]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontStyle: 'italic' }}
              >
                {testimonial.author}
              </span>
              <span className="text-[#7A6A60]" style={{ fontSize: '14px' }}>·</span>
              <span 
                className="text-[#7A6A60]"
                style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif' }}
              >
                {testimonial.source}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
