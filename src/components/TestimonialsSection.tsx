import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-earth-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('testimonials_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials_subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-sm text-center text-foreground italic leading-relaxed mb-4">
              "Un lugar perfecto para desconectar. La tranquilidad del entorno y la comodidad de los apartamentos nos hicieron sentir como en casa. Volveremos sin duda."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-primary text-sm">Ana & Miguel</p>
              <p className="text-muted-foreground text-xs">Madrid</p>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-sm text-center text-foreground italic leading-relaxed mb-4">
              "Ideal para ir con niños. La finca vallada nos dio mucha tranquilidad y ellos pudieron jugar con total libertad. El entorno natural es espectacular."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-primary text-sm">Familia González</p>
              <p className="text-muted-foreground text-xs">Sevilla</p>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-lg md:col-span-2 lg:col-span-1">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-sm text-center text-foreground italic leading-relaxed mb-4">
              "La dehesa extremeña en estado puro. Despertar con el canto de los pájaros y ver los caballos pastando es una experiencia única. Muy recomendable."
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-primary text-sm">Carmen & José</p>
              <p className="text-muted-foreground text-xs">Barcelona</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;