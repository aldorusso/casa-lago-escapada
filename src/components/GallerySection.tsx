import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import apartmentImage from '@/assets/apartment-interior.jpg';
import poolImage from '@/assets/outdoor-pool.jpg';
import heroImage from '@/assets/hero-dehesa.jpg';

const GallerySection: React.FC = () => {
  const { t } = useLanguage();

  const galleryImages = [
    {
      src: apartmentImage,
      alt: "Interior acogedor del apartamento",
      title: "Apartamentos acogedores"
    },
    {
      src: poolImage,
      alt: "Piscina privada rodeada de naturaleza",
      title: "Piscina privada"
    },
    {
      src: heroImage,
      alt: "Vista de la dehesa extremeña",
      title: "Entorno natural"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center font-bold text-primary mb-16">
          {t('gallery_title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium text-lg">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;