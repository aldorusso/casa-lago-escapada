import React from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq_pet_q'),
      answer: t('faq_pet_a'),
    },
    {
      question: t('faq_pool_q'),
      answer: t('faq_pool_a'),
    },
    {
      question: t('faq_kitchen_q'),
      answer: t('faq_kitchen_a'),
    },
    {
      question: t('faq_kids_q'),
      answer: t('faq_kids_a'),
    },
    {
      question: t('faq_services_q'),
      answer: t('faq_services_a'),
    },
    {
      question: t('faq_checkin_q'),
      answer: t('faq_checkin_a'),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-title text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('faq_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('faq_subtitle')}
          </p>
        </div>
        
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