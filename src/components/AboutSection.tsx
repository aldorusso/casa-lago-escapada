import React, { useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Play, Pause } from 'lucide-react';
import historiaVideo from '@/assets/videos/VIDEO-2025-07-11-16-43-48.mp4';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
                {t('about_section_title')}
              </p>
              <h2 className="font-title text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                {t('about_title')}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about_text')}
              </p>
              <div className="border-l-4 border-accent pl-6">
                <p className="text-lg font-medium text-foreground italic leading-relaxed">
                  {t('about_desire')}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{t('about_mission_title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about_mission_text')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{t('about_vision_title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about_vision_text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
              >
                <source src={historiaVideo} type="video/mp4" />
                {t('video_fallback')}
              </video>
              
              {/* Custom Play/Pause Button */}
              <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={isPlaying ? t('video_pause_aria') : t('video_play_aria')}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" />
                  )}
                </button>
              </div>

              {/* Video Progress Bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white/20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                <div className="h-full bg-accent transition-all duration-300" style={{ width: '0%' }}></div>
              </div>

              {/* Video Label */}
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                {t('about_section_title')}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;