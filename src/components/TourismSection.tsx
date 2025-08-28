import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';


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
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('https://maps.google.com/?q=Casa+Lago+Guijo+de+Coria,+Av.+España,+1,+10815+Guijo+de+Coria,+Cáceres', '_blank')}
            >
              {t('tourism_discover_caceres')}
            </Button>
          </div>
          
          <div className="relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.6242193515113!2d-6.4653299085233655!3d40.10609050098895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3de0f2eca9d825%3A0xc488cbf12e00d5cc!2sAv.%20Espa%C3%B1a%2C%201%2C%2010815%20Guijo%20de%20Coria%2C%20C%C3%A1ceres!5e0!3m2!1ses!2ses!4v1756374508280!5m2!1ses!2ses"
              className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;