import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Bird, Trees, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Bird,
      title: t('service1_title'),
      description: t('service1_desc'),
      highlight: "Sin ruidos urbanos"
    },
    {
      icon: Trees,
      title: t('service2_title'),
      description: t('service2_desc'),
      highlight: "Fauna autóctona"
    },
    {
      icon: Shield,
      title: t('service3_title'),
      description: t('service3_desc'),
      highlight: "100% seguro"
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Experiencias Únicas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('services_title')}
          </h2>
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