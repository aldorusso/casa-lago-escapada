import React from 'react';
import { LanguageProvider } from '@/components/LanguageToggle';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import TourismSection from '@/components/TourismSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <TourismSection />
        <GallerySection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
