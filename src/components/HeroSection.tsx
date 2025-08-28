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
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <p className="text-lg md:text-xl mb-4 font-light tracking-wide opacity-90 uppercase">
          Bienvenido al
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none tracking-tight">
          {t('hero_title')}
        </h1>
        <p className="text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto opacity-95">
          {t('hero_subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-4 rounded-full font-medium">
            {t('hero_cta')}
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-12 py-4 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
            {t('contact_cta')}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;