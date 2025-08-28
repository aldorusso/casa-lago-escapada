import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import apartmentImage from '@/assets/apartment-interior.jpg';
import poolImage from '@/assets/outdoor-pool.jpg';
import heroImage from '@/assets/hero-dehesa.jpg';
import caceresImage from '@/assets/caceres-heritage.jpg';

const GallerySection: React.FC = () => {
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: apartmentImage,
      alt: "Interior acogedor del apartamento",
      title: "Confort Rural",
      category: "Apartamentos"
    },
    {
      src: poolImage,
      alt: "Piscina privada rodeada de naturaleza",
      title: "Relax Total",
      category: "Instalaciones"
    },
    {
      src: heroImage,
      alt: "Vista de la dehesa extremeña",
      title: "Naturaleza Pura",
      category: "Entorno"
    },
    {
      src: caceresImage,
      alt: "Patrimonio histórico de Cáceres",
      title: "Patrimonio Histórico",
      category: "Turismo"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Momentos Únicos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('gallery_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada rincón cuenta una historia de tranquilidad y belleza natural
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-accent/20 backdrop-blur-sm text-xs px-3 py-1 rounded-full mb-3 font-medium">
                  {image.category}
                </span>
                <h3 className="text-xl font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;