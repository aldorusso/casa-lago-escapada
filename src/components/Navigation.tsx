import React from 'react';
import { Button } from '@/components/ui/button';
import { LanguageToggle, useLanguage } from '@/components/LanguageToggle';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Información de contacto */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+34620940734" className="hover:opacity-80 transition-opacity">
                  620 940 734
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hola@casalagoguijodecoria.com" className="hover:opacity-80 transition-opacity">
                  hola@casalagoguijodecoria.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Avda. De España n°1, Guijo de Coria</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Disponible 24/7</span>
              </div>
              <div className="h-4 w-px bg-primary-foreground/30"></div>
              <div className="flex items-center gap-2">
                <a href="#" className="hover:opacity-80 transition-opacity p-1">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity p-1">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="hover:opacity-80 transition-opacity group"
            >
              <img 
                src={logo} 
                alt="Casa Lago Guijo de Coria" 
                className="h-20 w-auto group-hover:scale-105 transition-transform"
              />
            </button>
            
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {t('nav_inicio')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {t('nav_nosotros')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {t('nav_servicios')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {t('nav_galeria')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {t('nav_contacto')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <Button 
                variant="hero" 
                size="default"
                className="font-semibold px-6 shadow-md hover:shadow-lg transition-all"
                onClick={() => window.open('https://wa.me/34620940734?text=Hola,%20me%20gustaría%20información%20sobre%20los%20apartamentos%20de%20Casa%20Lago%20Guijo%20de%20Coria', '_blank')}
              >
{t('hero_cta')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <a href="tel:+34620940734" className="hover:opacity-80">
                620 940 734
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 p-1">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="#" className="hover:opacity-80 p-1">
                <Instagram className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;