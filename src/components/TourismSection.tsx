import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import caceresImage from '@/assets/caceres-heritage.jpg';

const TourismSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-earth-light/20 to-nature-light/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
              {t('tourism_title')}
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              {t('tourism_subtitle')}
            </p>
            <Button variant="cta" size="lg">
              Descubre Cáceres
            </Button>
          </div>
          
          <div className="relative">
            <img 
              src={caceresImage} 
              alt="Cáceres UNESCO World Heritage" 
              className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;