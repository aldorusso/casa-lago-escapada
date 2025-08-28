import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageToggle';
import heroImage from '@/assets/hero/hero-principal.jpg';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
  id: number;
}

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([]);
  const [lastMouseTime, setLastMouseTime] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const normalizedX = x / rect.width;
        const normalizedY = y / rect.height;
        
        setMousePosition({ x: normalizedX, y: normalizedY });
        
        const now = Date.now();
        // Solo agregar puntos si ha pasado suficiente tiempo (para controlar densidad)
        if (now - lastMouseTime > 20) { // 50fps max
          const newPoint: TrailPoint = {
            x,
            y,
            timestamp: now,
            id: Math.random()
          };
          
          setTrailPoints(prev => {
            // Mantener solo los últimos 30 puntos
            const filtered = prev.filter(point => now - point.timestamp < 2000);
            return [...filtered, newPoint].slice(-30);
          });
          
          setLastMouseTime(now);
        }
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
  }, [lastMouseTime]);

  // Trail cleanup animation
  useEffect(() => {
    const cleanup = () => {
      const now = Date.now();
      setTrailPoints(prev => prev.filter(point => now - point.timestamp < 2000));
      animationRef.current = requestAnimationFrame(cleanup);
    };

    cleanup();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Generate trail path for SVG
  const generateTrailPath = () => {
    if (trailPoints.length < 2) return '';
    
    let path = `M ${trailPoints[0].x} ${trailPoints[0].y}`;
    
    for (let i = 1; i < trailPoints.length; i++) {
      const current = trailPoints[i];
      const previous = trailPoints[i - 1];
      
      // Crear curvas suaves entre puntos
      const cpx = (previous.x + current.x) / 2;
      const cpy = (previous.y + current.y) / 2;
      
      path += ` Q ${previous.x} ${previous.y} ${cpx} ${cpy}`;
    }
    
    return path;
  };

  return (
    <section 
      ref={heroRef}
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `scale(${1.02 + (mousePosition.x - 0.5) * 0.02})`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />
      </div>

      {/* SVG Trail Container */}
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
        style={{ zIndex: 5 }}
      >
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(131, 126, 105, 0)" />
            <stop offset="20%" stopColor="rgba(131, 126, 105, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="80%" stopColor="rgba(131, 126, 105, 0.6)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0.9)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main Trail Path */}
        {trailPoints.length > 1 && (
          <path
            d={generateTrailPath()}
            stroke="url(#trailGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            opacity="0.9"
          />
        )}
      </svg>

      {/* Individual Trail Points */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 10 }}>
        {trailPoints.map((point, index) => {
          const age = Date.now() - point.timestamp;
          const maxAge = 2000;
          const progress = age / maxAge;
          const opacity = Math.max(0, 1 - progress);
          const size = Math.max(2, 12 * (1 - progress));
          
          return (
            <div
              key={point.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: point.x,
                top: point.y,
                width: `${size}px`,
                height: `${size}px`,
                transform: 'translate(-50%, -50%)',
                background: `
                  radial-gradient(
                    circle,
                    rgba(255, 255, 255, ${opacity * 0.9}) 0%,
                    rgba(131, 126, 105, ${opacity * 0.7}) 30%,
                    rgba(255, 255, 255, ${opacity * 0.4}) 70%,
                    transparent 100%
                  )
                `,
                boxShadow: `
                  0 0 ${size * 2}px rgba(255, 255, 255, ${opacity * 0.6}),
                  0 0 ${size * 4}px rgba(131, 126, 105, ${opacity * 0.4})
                `,
                filter: `blur(${(1 - opacity) * 2}px)`,
                opacity: opacity,
                transition: 'opacity 0.1s ease-out'
              }}
            />
          );
        })}
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        {trailPoints.slice(-5).map((point, index) => {
          const age = Date.now() - point.timestamp;
          const progress = age / 1000;
          const opacity = Math.max(0, 0.3 * (1 - progress));
          
          return (
            <div
              key={`ambient-${point.id}`}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: point.x,
                top: point.y,
                width: '60px',
                height: '60px',
                transform: 'translate(-50%, -50%)',
                background: `
                  radial-gradient(
                    circle,
                    rgba(131, 126, 105, ${opacity}) 0%,
                    rgba(255, 255, 255, ${opacity * 0.5}) 50%,
                    transparent 100%
                  )
                `,
                filter: 'blur(15px)',
                opacity: opacity,
                mixBlendMode: 'soft-light'
              }}
            />
          );
        })}
      </div>

      {/* Current Mouse Position Glow */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            width: '40px',
            height: '40px',
            transform: 'translate(-50%, -50%)',
            background: `
              radial-gradient(
                circle,
                rgba(255, 255, 255, 0.8) 0%,
                rgba(131, 126, 105, 0.6) 40%,
                transparent 100%
              )
            `,
            boxShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(131, 126, 105, 0.4)
            `,
            borderRadius: '50%',
            zIndex: 15
          }}
        />
      )}
      
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