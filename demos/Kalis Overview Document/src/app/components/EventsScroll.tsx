import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    title: "Mariages",
    image: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.53.09.jpeg",
    tag: "✦ FLORAL DESIGN"
  },
  {
    title: "Événements d'entreprise",
    image: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.54.20.jpeg",
    tag: "✦ SCÉNOGRAPHIE"
  },
  {
    title: "Jardins & terrasses",
    image: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.55.06.jpeg",
    tag: "✦ AMÉNAGEMENT"
  },
  {
    title: "Compositions de deuil",
    image: "https://kalis.com/wp-content/uploads/2020/12/WhatsApp-Image-2020-12-15-at-16.52.54.jpeg",
    tag: "✦ DERNIER HOMMAGE"
  }
];

export function EventsScroll() {
  return (
    <section className="bg-[#F5F0E8] py-20 lg:py-28">
      {/* Header */}
      <div className="px-6 lg:px-16 mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <h2 
          className="text-[#2C2420]"
          style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 'clamp(36px, 4vw, 48px)',
            fontWeight: 300
          }}
        >
          Le partenaire de vos événements
        </h2>
        <button 
          className="text-[#8B5E3C] flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
          style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
        >
          Toutes nos prestations 
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 lg:px-16 pb-4">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] sm:w-[340px] h-[440px] rounded-[4px] overflow-hidden relative group cursor-pointer"
            >
              {/* Image */}
              <img 
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-104 group-hover:brightness-75 transition-all duration-500"
              />

              {/* Dark Gradient Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)' }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div 
                  className="text-[#C4956A] tracking-[0.14em] uppercase mb-3"
                  style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
                >
                  {event.tag}
                </div>
                <h3 
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 300 }}
                >
                  {event.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
