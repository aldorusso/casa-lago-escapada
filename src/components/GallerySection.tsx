import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import apartmentImage from '@/assets/apartment-interior.jpg';
import poolImage from '@/assets/outdoor-pool.jpg';
import heroImage from '@/assets/hero/hero-principal.jpg';
import caceresImage from '@/assets/caceres-heritage.jpg';
import galleryImage1 from '@/assets/gallery/IMG_1180.jpg';
import galleryImage2 from '@/assets/gallery/IMG_1182.jpg';
import galleryImage3 from '@/assets/gallery/IMG_1184.jpg';
import galleryImage4 from '@/assets/gallery/IMG_1185.jpg';

const GallerySection: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const galleryImages = [
    {
      src: apartmentImage,
      alt: t('gallery_item1_alt'),
      title: t('gallery_item1_title'),
      category: t('gallery_item1_category'),
      description: t('gallery_item1_description')
    },
    {
      src: poolImage,
      alt: t('gallery_item2_alt'),
      title: t('gallery_item2_title'),
      category: t('gallery_item2_category'),
      description: t('gallery_item2_description')
    },
    {
      src: heroImage,
      alt: t('gallery_item3_alt'),
      title: t('gallery_item3_title'),
      category: t('gallery_item3_category'),
      description: t('gallery_item3_description')
    },
    {
      src: caceresImage,
      alt: t('gallery_item4_alt'),
      title: t('gallery_item4_title'),
      category: t('gallery_item4_category'),
      description: t('gallery_item4_description')
    },
    {
      src: galleryImage1,
      alt: t('gallery_item5_alt'),
      title: t('gallery_item5_title'),
      category: t('gallery_item5_category'),
      description: t('gallery_item5_description')
    },
    {
      src: galleryImage2,
      alt: t('gallery_item6_alt'),
      title: t('gallery_item6_title'),
      category: t('gallery_item6_category'),
      description: t('gallery_item6_description')
    },
    {
      src: galleryImage3,
      alt: t('gallery_item7_alt'),
      title: t('gallery_item7_title'),
      category: t('gallery_item7_category'),
      description: t('gallery_item7_description')
    },
    {
      src: galleryImage4,
      alt: t('gallery_item8_alt'),
      title: t('gallery_item8_title'),
      category: t('gallery_item8_category'),
      description: t('gallery_item8_description')
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlay, isVisible, galleryImages.length]);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  return (
    <section id="galeria" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            {t('gallery_subtitle')}
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('gallery_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('gallery_description')}
          </p>
        </div>
        
        {/* Interactive Gallery Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            
            {/* Main Image Display */}
            <div className="relative h-[300px] md:h-[500px] lg:h-[600px]">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                    <div className="max-w-2xl">
                      <span className="inline-block bg-accent/90 backdrop-blur-sm text-xs md:text-sm px-3 py-1 rounded-full mb-3 font-medium text-white">
                        {image.category}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-bold mb-2 font-title">
                        {image.title}
                      </h3>
                      <p className="text-sm md:text-lg opacity-90">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-all duration-300 group"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
              aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlay ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white" />
              )}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'bg-accent w-8 h-3'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Preview (Hidden on mobile) */}
          <div className="hidden md:flex justify-center mt-8 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-2 ring-accent scale-105 opacity-100'
                    : 'opacity-60 hover:opacity-80'
                }`}
              >
                <div className="w-20 h-16 lg:w-24 lg:h-18">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {index !== currentSlide && (
                  <div className="absolute inset-0 bg-black/20"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;