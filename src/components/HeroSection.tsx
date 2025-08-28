import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageToggle';
import heroImage from '@/assets/hero-dehesa.jpg';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {t('hero_title')}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-3">
            {t('hero_cta')}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
            {t('contact_cta')}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;