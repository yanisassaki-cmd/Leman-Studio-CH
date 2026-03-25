import { Instagram, Facebook } from "lucide-react";

const footerLinks = {
  boutique: [
    "Bouquets",
    "Fleurs séchées",
    "Kalis Box",
    "Décoration",
    "Cartes cadeaux",
    "Orchidées"
  ],
  prestations: [
    "Mariages",
    "Événements",
    "Jardins & terrasses",
    "Abonnement entreprise",
    "Deuil"
  ],
  informations: [
    "Notre Métier",
    "Contact",
    "Politique de confidentialité",
    "Mentions légales",
    "FAQ livraison"
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#2C2420] text-white">
      {/* Main Footer Content */}
      <div className="px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column (2x wider on desktop) */}
          <div className="lg:col-span-1">
            <div 
              className="mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', color: '#F5F0E8' }}
            >
              KALIS.
            </div>
            <p 
              className="text-[#C4956A] mb-8 max-w-xs"
              style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
            >
              Artisan fleuriste au cœur de la vieille ville de Genève depuis 2004.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <button 
                className="w-12 h-12 border border-[rgba(197,149,106,0.3)] rounded-[4px] flex items-center justify-center hover:border-[#C4956A] hover:bg-[#C4956A]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#C4956A]" />
              </button>
              <button 
                className="w-12 h-12 border border-[rgba(197,149,106,0.3)] rounded-[4px] flex items-center justify-center hover:border-[#C4956A] hover:bg-[#C4956A]/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#C4956A]" />
              </button>
            </div>
          </div>

          {/* Boutique Column */}
          <div>
            <h3 
              className="mb-6 tracking-[0.14em] uppercase"
              style={{ fontSize: '12px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
            >
              BOUTIQUE
            </h3>
            <ul className="space-y-3">
              {footerLinks.boutique.map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-[#C4956A] hover:text-white transition-colors"
                    style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Prestations Column */}
          <div>
            <h3 
              className="mb-6 tracking-[0.14em] uppercase"
              style={{ fontSize: '12px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
            >
              PRESTATIONS
            </h3>
            <ul className="space-y-3">
              {footerLinks.prestations.map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-[#C4956A] hover:text-white transition-colors"
                    style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations Column */}
          <div>
            <h3 
              className="mb-6 tracking-[0.14em] uppercase"
              style={{ fontSize: '12px', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
            >
              INFORMATIONS
            </h3>
            <ul className="space-y-3">
              {footerLinks.informations.map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    className="text-[#C4956A] hover:text-white transition-colors"
                    style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: 300 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Bar */}
        <div className="border-t border-[rgba(197,149,106,0.2)] pt-12 mb-8">
          <div className="max-w-2xl mx-auto">
            <h3 
              className="text-center mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontWeight: 300, color: '#F5F0E8' }}
            >
              Restez inspirés
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 bg-transparent border border-[rgba(197,149,106,0.3)] px-6 py-4 rounded-[2px] text-white placeholder:text-[#7A6A60] focus:border-[#C4956A] focus:outline-none transition-colors"
                style={{ fontSize: '14px', fontFamily: 'Jost, sans-serif' }}
              />
              <button 
                className="bg-[#8B5E3C] text-white px-8 py-4 rounded-[2px] tracking-[0.15em] uppercase hover:bg-[#5C3D2E] transition-all duration-300 whitespace-nowrap"
                style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif' }}
              >
                S'ABONNER
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgba(197,149,106,0.2)] px-6 lg:px-16 py-6">
        <p 
          className="text-center text-[#7A6A60]"
          style={{ fontSize: '12px', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.6 }}
        >
          © 2025 Kalis — Rue du Vieux-Collège 10 bis, 1204 Genève, Suisse | Lun–Ven 9h–19h · Sam 9h–18h · 
          <a href="tel:+41223106714" className="hover:text-[#C4956A] transition-colors ml-1">+41 22 310 67 14</a> · 
          <a href="tel:+41792416623" className="hover:text-[#C4956A] transition-colors ml-1">+41 79 241 66 23</a>
        </p>
      </div>
    </footer>
  );
}
