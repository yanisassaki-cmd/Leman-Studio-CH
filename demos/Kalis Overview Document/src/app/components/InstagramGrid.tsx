const images = [
  "https://kalis.com/wp-content/uploads/2024/11/image00006-600x600.jpeg",
  "https://kalis.com/wp-content/uploads/2025/10/IMG_5255-600x600.jpg",
  "https://kalis.com/wp-content/uploads/2024/04/IMG_2073-600x600.jpg",
  "https://kalis.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-05-at-19.25.09-e1760533620748-600x600.jpeg",
  "https://kalis.com/wp-content/uploads/2021/01/M-rouge-2-600x600.jpg",
  "https://kalis.com/wp-content/uploads/2024/11/image00004-600x600.jpeg"
];

export function InstagramGrid() {
  return (
    <section className="bg-[#FDFAF6] py-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 
          className="text-[#8B5E3C] mb-2"
          style={{ 
            fontFamily: 'Cormorant Garamond, serif', 
            fontSize: '36px',
            fontWeight: 300,
            fontStyle: 'italic'
          }}
        >
          @kalisgeneve
        </h2>
        <p 
          className="text-[#7A6A60] tracking-[0.14em] uppercase"
          style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}
        >
          SUIVEZ-NOUS SUR INSTAGRAM
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <img 
              src={image}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span 
                className="text-white tracking-[0.14em] uppercase"
                style={{ fontSize: '11px', fontFamily: 'Jost, sans-serif' }}
              >
                VOIR SUR INSTAGRAM
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
