import { ArrowRight } from "lucide-react";

export function KalisBoxFeature() {
  return (
    <section className="bg-[#FDFAF6]">
      <div className="grid lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative min-h-[400px] lg:min-h-0">
          <img 
            src="https://kalis.com/wp-content/uploads/2018/12/5-600x600.png"
            alt="Kalis Box 3 months"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="px-8 lg:px-20 py-16 lg:py-20">
          <div 
            className="text-[#8B5E3C] tracking-[0.2em] uppercase mb-6"
            style={{ fontSize: '10px', fontFamily: 'Jost, sans-serif' }}
          >
            ABONNEMENT FLORAL
          </div>

          <h2 
            className="text-[#2C2420] mb-6"
            style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: 'clamp(36px, 4vw, 48px)',
              fontWeight: 300
            }}
          >
            La Kalis Box, chaque saison.
          </h2>

          <p 
            className="text-[#7A6A60] mb-10 leading-relaxed"
            style={{ fontSize: '15px', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.8 }}
          >
            Une sélection signature livrée au fil des saisons, pensée comme un rendez-vous floral raffiné et durable. Offrez la beauté en abonnement — pour vous ou pour quelqu'un que vous aimez.
          </p>

          {/* Price Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* 3 Months */}
            <div className="bg-white border border-[rgba(139,94,60,0.2)] p-6 rounded-[4px] hover:border-[#8B5E3C] transition-colors duration-300">
              <div 
                className="text-[#2C2420] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 400 }}
              >
                3 mois
              </div>
              <div 
                className="text-[#8B5E3C]"
                style={{ fontFamily: 'Jost, sans-serif', fontSize: '20px', fontWeight: 400 }}
              >
                199 CHF
              </div>
            </div>

            {/* 6 Months - Featured */}
            <div className="bg-[#3D2B1F] text-white p-6 rounded-[4px] relative overflow-hidden">
              <div 
                className="absolute top-2 right-2 text-[#C4956A] tracking-[0.12em] uppercase"
                style={{ fontSize: '9px', fontFamily: 'Jost, sans-serif' }}
              >
                POPULAIRE
              </div>
              <div 
                className="mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 400 }}
              >
                6 mois
              </div>
              <div 
                className="text-[#C4956A]"
                style={{ fontFamily: 'Jost, sans-serif', fontSize: '20px', fontWeight: 400 }}
              >
                350 CHF
              </div>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="bg-[#F5F0E8] p-6 rounded-[4px] mb-8 border-l-2 border-[#8B5E3C]">
            <div 
              className="text-[#2C2420] mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 400 }}
            >
              Abonnement Entreprise · Sur mesure
            </div>
            <p 
              className="text-[#7A6A60]"
              style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
            >
              Décoration florale hebdomadaire pour vos bureaux genevois.
            </p>
          </div>

          {/* CTA */}
          <button 
            className="text-[#8B5E3C] flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
            style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
          >
            DÉCOUVRIR LES ABONNEMENTS 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
