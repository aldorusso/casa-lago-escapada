import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Bird, Trees, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Bird,
      title: "Paz y Desconexión Absoluta",
      description: "Aléjate del ruido y el estrés de la ciudad. Aquí el único despertador es el canto de los pájaros. Disfruta de un entorno donde se respira tranquilidad y el tiempo transcurre sin prisas.",
      highlight: "Sin ruidos urbanos"
    },
    {
      icon: Trees,
      title: "Entorno Natural Privilegiado",
      description: "Despierta rodeado por una dehesa con caballos y un lago con patos. Un paisaje extremeño único a tu puerta, ideal para pasear, observar aves y reconectar con la naturaleza.",
      highlight: "Fauna autóctona"
    },
    {
      icon: Shield,
      title: "Seguridad para Toda la Familia",
      description: "Nuestra finca está completamente vallada, creando un espacio seguro para que los niños jueguen con total libertad. La tranquilidad de los padres están garantizadas.",
      highlight: "100% seguro"
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            {language === 'es' ? 'La escapada que necesitas' : 'The getaway you need'}
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('services_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services_subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-accent/30">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-2xl group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-nature-green text-white text-xs px-2 py-1 rounded-full font-medium">
                    {service.highlight}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;