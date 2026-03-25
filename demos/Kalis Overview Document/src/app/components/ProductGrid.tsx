import { motion } from "motion/react";

const products = [
  {
    name: "Bouquet Rose Passion",
    image: "https://kalis.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-03-at-17.15.48-1-600x600.jpeg",
    badge: "NOUVEAU",
    price: "79 — 159 CHF",
    desc: "Roses premium, composition romantique"
  },
  {
    name: "Bouquet Sunset",
    image: "https://kalis.com/wp-content/uploads/2025/10/Photoroom_20251014_100956-scaled-e1760533178610-600x600.jpg",
    price: "79 — 250 CHF",
    desc: "Tons chauds, floraisons d'automne"
  },
  {
    name: "White Harmony",
    image: "https://kalis.com/wp-content/uploads/2025/10/IMG_5255-600x600.jpg",
    badge: "COUP DE CŒUR",
    price: "79 — 250 CHF",
    desc: "Élégance épurée, blanc et crème"
  },
  {
    name: "Bouquet Passionata",
    image: "https://kalis.com/wp-content/uploads/2021/01/M-rouge-2-600x600.jpg",
    price: "79 — 159 CHF",
    desc: "Roses rouges, intensité & caractère"
  },
  {
    name: "L'Amoureux",
    image: "https://kalis.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-19.25.09-e1760533620748-600x600.jpeg",
    price: "79 — 250 CHF",
    desc: "Douceur romantique, tons pastels"
  },
  {
    name: "Roses Blanches",
    image: "https://kalis.com/wp-content/uploads/2024/04/IMG_2073-600x600.jpg",
    price: "30 — 600 CHF",
    desc: "Pureté absolue, tiges 60 cm"
  },
  {
    name: "Passion Éclatante",
    image: "https://kalis.com/wp-content/uploads/2024/11/image00006-600x600.jpeg",
    badge: "SÉCHÉES",
    price: "79 — 159 CHF",
    desc: "Fleurs séchées, durabilité & poésie"
  },
  {
    name: "Piqué Pastel",
    image: "https://kalis.com/wp-content/uploads/2024/03/image00001-600x600.jpeg",
    price: "120 — 250 CHF",
    desc: "Arrangement de table, douceur florale"
  }
];

export function ProductGrid() {
  return (
    <section className="bg-[#F5F0E8] px-6 lg:px-16 py-20 lg:py-28">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div 
          className="text-[#8B5E3C] tracking-[0.2em] uppercase mb-4"
          style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
        >
          NOS CRÉATIONS
        </div>
        <h2 
          className="text-[#2C2420] mb-6"
          style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: 'clamp(40px, 5vw, 56px)',
            fontWeight: 300,
            fontStyle: 'italic'
          }}
        >
          Bouquets signature
        </h2>
        <p 
          className="text-[#7A6A60] max-w-2xl mx-auto"
          style={{ fontSize: '15px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
        >
          Chaque composition est unique, pensée selon les saisons et votre sensibilité.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.badge && (
                <div 
                  className="absolute top-3 left-3 bg-[#8B5E3C] text-white px-3 py-1 rounded-full tracking-[0.12em] uppercase"
                  style={{ fontSize: '9px', fontFamily: 'Jost, sans-serif' }}
                >
                  {product.badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 
                className="text-[#2C2420] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 400 }}
              >
                {product.name}
              </h3>
              <p 
                className="text-[#7A6A60] mb-3"
                style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
              >
                {product.desc}
              </p>
              <div 
                className="text-[#8B5E3C]"
                style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
              >
                {product.price}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <button 
          className="bg-transparent border border-[#8B5E3C] text-[#8B5E3C] px-10 py-4 rounded-[2px] tracking-[0.15em] uppercase hover:bg-[#8B5E3C] hover:text-white transition-all duration-300"
          style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif' }}
        >
          VOIR TOUTE LA COLLECTION
        </button>
      </div>
    </section>
  );
}
