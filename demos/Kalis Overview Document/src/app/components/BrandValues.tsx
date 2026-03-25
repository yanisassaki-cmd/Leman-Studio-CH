const values = [
  {
    icon: "🚲",
    title: "Livraison sous 4h",
    desc: "Dans tout Genève, 6 jours sur 7."
  },
  {
    icon: "✦",
    title: "Fraîcheur garantie",
    desc: "Fleurs sélectionnées quotidiennement auprès de producteurs locaux."
  },
  {
    icon: "◈",
    title: "Originalité assurée",
    desc: "Chaque bouquet est signé Pierre Mugnier, artisan fleuriste depuis 2004."
  },
  {
    icon: "🌿",
    title: "Respect des saisons",
    desc: "Une démarche éco-responsable qui célèbre les cycles naturels."
  }
];

export function BrandValues() {
  return (
    <section className="bg-[#3D2B1F] px-6 lg:px-16 py-16 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[rgba(255,255,255,0.1)]">
        {values.map((value, index) => (
          <div key={index} className="text-center lg:px-8">
            <div className="text-5xl mb-6">{value.icon}</div>
            <h3 
              className="text-white mb-3"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 400 }}
            >
              {value.title}
            </h3>
            <p 
              className="text-[#C4956A]"
              style={{ fontSize: '13px', fontFamily: 'Jost, sans-serif', fontWeight: 300, lineHeight: 1.7 }}
            >
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
