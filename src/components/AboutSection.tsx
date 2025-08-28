import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import apartmentImage from '@/assets/apartment-interior.jpg';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-nature-light/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
                Nuestra Historia
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                {t('about_title')}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about_text')}
              </p>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-lg font-medium text-foreground italic leading-relaxed">
                  Nuestro deseo es que disfrutes de la tranquilidad del campo, el canto de los pájaros y la calma que solo la naturaleza puede ofrecer.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={apartmentImage} 
                alt="Casa Lago interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;