import React from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle, useLanguage } from '@/components/LanguageToggle';

const Navigation: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-serif text-xl font-semibold text-primary">
            Casa Lago
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav_inicio')}
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav_nosotros')}
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav_servicios')}
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav_galeria')}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('nav_contacto')}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Button variant="hero" size="sm">
              {t('hero_cta')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;