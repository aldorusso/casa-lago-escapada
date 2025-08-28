import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const { t, language } = useLanguage();

  const faqs = language === 'es' ? [
    {
      question: "¿Admitís mascotas?",
      answer: "Sí, admitimos mascotas bajo consulta previa. Queremos asegurar que tanto tu mascota como el resto de huéspedes disfruten de una estancia cómoda."
    },
    {
      question: "¿La piscina es privada o municipal?",
      answer: "Nuestra piscina es privada y exclusiva para los huéspedes de Casa Lago. Podrás disfrutarla con total tranquilidad en un entorno natural privilegiado."
    },
    {
      question: "¿Están equipados los apartamentos para cocinar y dormir?",
      answer: "Sí, todos nuestros apartamentos están completamente equipados con cocina funcional, ropa de cama, toallas y todo lo necesario para una estancia confortable."
    },
    {
      question: "¿Es recomendable para niños pequeños?",
      answer: "Absolutamente. Nuestra finca está vallada y es un espacio muy seguro para niños. Además, el entorno natural es perfecto para que disfruten al aire libre."
    },
    {
      question: "¿Hay supermercados y restaurantes cerca?",
      answer: "Sí, en Guijo de Coria encontrarás servicios básicos, y a pocos kilómetros tienes Coria con supermercados, restaurantes y todos los servicios necesarios."
    },
    {
      question: "¿Cuál es el horario de check-in y check-out?",
      answer: "Check-in: desde las 16:00h. Check-out: hasta las 11:00h. Si necesitas flexibilidad en los horarios, contáctanos y buscaremos la mejor solución."
    }
  ] : [
    {
      question: "Do you accept pets?",
      answer: "Yes, we accept pets upon prior consultation. We want to ensure that both your pet and other guests enjoy a comfortable stay."
    },
    {
      question: "Is the pool private or municipal?",
      answer: "Our pool is private and exclusive for Casa Lago guests. You can enjoy it with complete tranquility in a privileged natural environment."
    },
    {
      question: "Are the apartments equipped for cooking and sleeping?",
      answer: "Yes, all our apartments are fully equipped with functional kitchen, bed linen, towels and everything necessary for a comfortable stay."
    },
    {
      question: "Is it suitable for small children?",
      answer: "Absolutely. Our property is fenced and is a very safe space for children. Additionally, the natural environment is perfect for them to enjoy outdoors."
    },
    {
      question: "Are there supermarkets and restaurants nearby?",
      answer: "Yes, in Guijo de Coria you'll find basic services, and just a few kilometers away you have Coria with supermarkets, restaurants and all necessary services."
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in: from 4:00 PM. Check-out: until 11:00 AM. If you need flexibility with times, contact us and we'll find the best solution."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center font-bold text-primary mb-16">
          {t('faq_title')}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-primary font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;