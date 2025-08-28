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
    },
    {
      icon: Trees,
      title: t('service2_title'),
      description: t('service2_desc'),
    },
    {
      icon: Shield,
      title: t('service3_title'),
      description: t('service3_desc'),
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center font-bold text-primary mb-16">
          {t('services_title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-light rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-nature-green" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">
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