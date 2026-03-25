import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="grid lg:grid-cols-2 min-h-[90vh]">
      {/* Left Panel - Content */}
      <div className="bg-[#F5F0E8] px-8 lg:px-20 py-16 lg:py-20 flex flex-col justify-center order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div 
            className="text-[#8B5E3C] tracking-[0.2em] mb-8 uppercase"
            style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
          >
            FLEURISTE ÉCO-RESPONSABLE · GENÈVE DEPUIS 2004
          </div>

          {/* Headline */}
          <h1 
            className="text-[#2C2420] mb-8 leading-tight"
            style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: 'clamp(48px, 8vw, 88px)',
              fontWeight: 300,
              lineHeight: 1.05 
            }}
          >
            Des fleurs rares,<br />
            <span style={{ fontStyle: 'italic', color: '#8B5E3C' }}>composées</span> avec<br />
            silence et élégance.
          </h1>

          {/* Body */}
          <p 
            className="text-[#7A6A60] max-w-[380px] mb-10 leading-relaxed"
            style={{ fontSize: '15px', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}
          >
            Kalis imagine des bouquets sculptauraux, locaux et de saison, pour celles et ceux qui recherchent une beauté sobre, consciente et précieuse.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              className="bg-[#8B5E3C] text-white px-8 py-4 rounded-[2px] tracking-[0.15em] uppercase hover:bg-[#5C3D2E] transition-all duration-300"
              style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif' }}
            >
              DÉCOUVRIR NOS BOUQUETS
            </button>
            <button 
              className="text-[#8B5E3C] px-8 py-4 flex items-center gap-2 hover:gap-3 transition-all duration-300"
              style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif' }}
            >
              Notre histoire <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 lg:gap-12">
            {[
              { number: "20+", label: "Années d'expertise" },
              { number: "6j/7", label: "Livraison Genève" },
              { number: "250m²", label: "Atelier vieille ville" }
            ].map((stat) => (
              <div key={stat.label}>
                <div 
                  className="text-[#2C2420] mb-1"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '40px' }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-[#7A6A60] uppercase tracking-[0.12em]"
                  style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Visual */}
      <div className="relative min-h-[400px] lg:min-h-0 order-1 lg:order-2">
        {/* Main Image */}
        <div className="absolute inset-0">
          <img 
            src="https://kalis.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-03-at-17.15.48-1-600x600.jpeg"
            alt="Bouquet Rose Passion"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlapping Inset Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-8 left-[-20px] lg:left-[-40px] w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] border-[6px] border-white shadow-2xl hidden sm:block"
        >
          <img 
            src="https://kalis.com/wp-content/uploads/2025/10/Photoroom_20251014_100956-scaled-e1760533178610-600x600.jpg"
            alt="Bouquet Sunset"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Tag */}
        <div 
          className="absolute top-8 right-8 bg-white px-6 py-3 rounded-full shadow-lg"
          style={{ fontSize: '12px', fontFamily: 'Jost, sans-serif' }}
        >
          <span className="text-[#8B5E3C]">✦ Saison · Printemps 2025</span>
        </div>

        {/* Grain Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
            opacity: 0.04,
            mixBlendMode: 'overlay'
          }}
        />
      </div>
    </div>
  );
}
