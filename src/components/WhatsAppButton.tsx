import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = 'https://wa.me/34620940734?text=Hola,%20me%20gustaría%20información%20sobre%20los%20apartamentos%20de%20Casa%20Lago%20Guijo%20de%20Coria';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
