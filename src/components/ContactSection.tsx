import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: language === 'es' ? 'Teléfono' : 'Phone',
      value: '+34 627 123 456',
      href: 'tel:+34627123456'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@casalagoguijo.com',
      href: 'mailto:info@casalagoguijo.com'
    },
    {
      icon: MapPin,
      label: language === 'es' ? 'Dirección' : 'Address',
      value: 'Guijo de Coria, Cáceres, Extremadura',
      href: 'https://maps.google.com/?q=Guijo+de+Coria+Caceres'
    },
    {
      icon: Clock,
      label: language === 'es' ? 'Horario' : 'Hours',
      value: language === 'es' ? 'Disponible 24/7' : 'Available 24/7',
      href: null
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
            {t('contact_title')}
          </h2>
          <p className="text-lg mb-12 opacity-90">
            {language === 'es' 
              ? 'Estamos aquí para ayudarte a planificar tu escapada perfecta'
              : 'We are here to help you plan your perfect getaway'
            }
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              const content = (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-foreground/10 rounded-full mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="opacity-90">{item.value}</p>
                </div>
              );
              
              return item.href ? (
                <a key={index} href={item.href} className="hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              {t('hero_cta')}
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              {t('contact_cta')}
            </Button>
          </div>
        </div>
        
        <div className="mt-16 text-center text-sm opacity-75">
          <p>© 2024 Casa Lago Guijo de Coria. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;