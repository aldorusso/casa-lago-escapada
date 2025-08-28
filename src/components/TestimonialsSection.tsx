import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-earth-light/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center font-bold text-primary mb-16">
          {t('testimonials_title')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-center text-foreground italic leading-relaxed mb-6">
              "{t('testimonial1')}"
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-primary">María & Carlos</p>
              <p className="text-muted-foreground">Madrid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;