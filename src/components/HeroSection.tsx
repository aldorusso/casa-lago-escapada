import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageToggle';
import heroImage from '@/assets/hero/hero-principal.jpg';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', () => setIsHovered(true));
      heroElement.addEventListener('mouseleave', () => setIsHovered(false));

      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', () => setIsHovered(true));
        heroElement.removeEventListener('mouseleave', () => setIsHovered(false));
      };
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 cursor-none"
    >
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `scale(${isHovered ? 1.03 : 1.01}) translate(${mousePosition.x * 8 - 4}px, ${mousePosition.y * 8 - 4}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none">        
        {/* Particle Effect - Más sutil */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full transition-all duration-1000"
            style={{
              top: `${30 + i * 15}%`,
              left: `${20 + i * 12}%`,
              transform: `translate(${mousePosition.x * (8 + i * 2)}px, ${mousePosition.y * (5 + i * 2)}px)`,
              opacity: isHovered ? 0.3 : 0.1
            }}
          />
        ))}
      </div>

      {/* Custom Cursor */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none z-50 mix-blend-difference"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-8 h-8 border-2 border-white rounded-full backdrop-blur-sm animate-pulse" />
        </div>
      )}

      {/* Gradient Overlay with Interactive Effect - Más sutil */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(131, 126, 105, 0.05) 0%, transparent 60%)`
        }}
      />
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="font-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none tracking-tight">
          Casa Lago Guijo de Coria
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light leading-relaxed max-w-3xl mx-auto opacity-95">
          Apartamentos rurales en Guijo de Coria, un refugio de paz rodeado de la dehesa extremeña.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12 py-4 rounded-full font-medium"
            onClick={() => window.open('https://wa.me/34620940734?text=Hola,%20me%20gustaría%20información%20sobre%20los%20apartamentos%20de%20Casa%20Lago%20Guijo%20de%20Coria', '_blank')}
          >
{t('hero_cta')}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-12 py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary bg-white/20 backdrop-blur-sm font-medium"
            onClick={() => window.open('https://wa.me/34620940734?text=Hola,%20me%20gustaría%20más%20información%20sobre%20Casa%20Lago%20Guijo%20de%20Coria', '_blank')}
          >
{t('hero_info')}
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;