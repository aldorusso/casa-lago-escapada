import React, { createContext, useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageContextType {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    nav_inicio: "Inicio",
    nav_nosotros: "Nosotros", 
    nav_servicios: "Servicios",
    nav_galeria: "Galería",
    nav_contacto: "Contacto",
    hero_title: "Casa Lago Guijo de Coria",
    hero_subtitle: "Apartamentos rurales en Guijo de Coria, un refugio de paz rodeado de la dehesa extremeña",
    hero_cta: "Reservar Ahora",
    about_title: "Respira. Desconecta. Vuelve a empezar.",
    about_text: "Somos una pareja que decidió transformar este rincón privilegiado de la dehesa extremeña en un refugio para quienes necesitan parar, respirar y reconectar. Nuestro deseo es que disfrutes de la tranquilidad del campo, el canto de los pájaros y la calma que solo la naturaleza puede ofrecer.",
    services_title: "¿Por qué elegirnos?",
    service1_title: "Paz y Desconexión Absoluta",
    service1_desc: "Aquí el único despertador es el canto de los pájaros",
    service2_title: "Entorno Natural Privilegiado", 
    service2_desc: "Dehesa, caballos y un lago con patos",
    service3_title: "Seguridad para Toda la Familia",
    service3_desc: "Finca vallada, espacio seguro para niños",
    testimonials_title: "Lo que dicen nuestros huéspedes",
    testimonial1: "Un lugar ideal para descansar en familia, rodeado de naturaleza. Volveremos seguro.",
    faq_title: "Preguntas Frecuentes",
    tourism_title: "Donde se detiene el tiempo",
    tourism_subtitle: "Cáceres, ciudad Patrimonio de la Humanidad, te espera a pocos minutos. Vive la magia de la historia con el confort del presente.",
    gallery_title: "Galería",
    contact_title: "Contacto y Reservas",
    contact_cta: "Contáctanos"
  },
  en: {
    nav_inicio: "Home",
    nav_nosotros: "About",
    nav_servicios: "Services", 
    nav_galeria: "Gallery",
    nav_contacto: "Contact",
    hero_title: "Casa Lago Guijo de Coria",
    hero_subtitle: "Rural apartments in Guijo de Coria, a peaceful refuge surrounded by the Extremadura dehesa",
    hero_cta: "Book Now",
    about_title: "Breathe. Disconnect. Start again.",
    about_text: "We are a couple who decided to transform this privileged corner of the Extremadura dehesa into a refuge for those who need to stop, breathe and reconnect. Our desire is for you to enjoy the tranquility of the countryside, the singing of birds and the calm that only nature can offer.",
    services_title: "Why choose us?",
    service1_title: "Absolute Peace and Disconnection",
    service1_desc: "Here the only alarm clock is the singing of birds",
    service2_title: "Privileged Natural Environment",
    service2_desc: "Dehesa, horses and a lake with ducks", 
    service3_title: "Safety for the Whole Family",
    service3_desc: "Fenced property, safe space for children",
    testimonials_title: "What our guests say",
    testimonial1: "An ideal place to rest as a family, surrounded by nature. We will definitely return.",
    faq_title: "Frequently Asked Questions",
    tourism_title: "Where time stops",
    tourism_subtitle: "Cáceres, World Heritage city, awaits you just minutes away. Experience the magic of history with the comfort of the present.",
    gallery_title: "Gallery",
    contact_title: "Contact & Reservations", 
    contact_cta: "Contact Us"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: () => ''
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  
  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
      className="gap-1"
    >
      <Globe className="h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  );
};