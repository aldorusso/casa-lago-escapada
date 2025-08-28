import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            {t('about_title')}
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
            {t('about_text')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;