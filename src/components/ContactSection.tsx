import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Star, Award, Shield, Users } from 'lucide-react';
import logo from '@/assets/logo.png';

const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: t('footer_contact_phone'),
      value: '620 940 734',
      href: 'tel:+34620940734'
    },
    {
      icon: Mail,
      label: t('footer_contact_email'),
      value: 'hola@casalagoguijodecoria.com',
      href: 'mailto:hola@casalagoguijodecoria.com'
    },
    {
      icon: MapPin,
      label: t('footer_contact_location'),
      value: 'Avda. De España n°1, Guijo de Coria',
      href: 'https://maps.google.com/?q=Avda+De+España+1+Guijo+de+Coria+Caceres'
    }
  ];

  const features = [
    { icon: Award, text: t('feature_certified') },
    { icon: Shield, text: t('feature_safe') },
    { icon: Users, text: t('feature_guests') }
  ];

  return (
    <footer id="contacto" className="relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-primary/90"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <div 
          className="w-20 h-20 border border-primary-foreground rounded-full"
          style={{
            transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.1}deg)`,
          }}
        ></div>
      </div>
      <div className="absolute top-32 right-16 opacity-10">
        <div 
          className="w-12 h-12 bg-primary-foreground/20 rounded-full"
          style={{
            transform: `translateY(${scrollY * -0.03}px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 text-primary-foreground">
        {/* Main CTA Section */}
        <div className="py-20 text-center backdrop-blur-sm" style={{backgroundColor: '#ede9dde6'}}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-title text-4xl md:text-6xl font-bold mb-6 text-primary">
                {t('footer_cta_title')}
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-primary/80 font-light">
                {t('footer_cta_subtitle')}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/34620940734?text=Hola,%20quiero%20reservar%20en%20Casa%20Lago%20Guijo%20de%20Coria', '_blank')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('footer_whatsapp')}
                </Button>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('https://wa.me/34620940734?text=Hola,%20me%20gustaría%20más%20información%20sobre%20Casa%20Lago', '_blank')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('footer_info')}
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-6 bg-primary/90 backdrop-blur-sm rounded-2xl border border-primary/70 hover:bg-primary transition-all duration-300 group shadow-xl"
                  >
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-center font-semibold text-white">{feature.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              
              {/* Descripción */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <h3 className="font-title text-lg font-bold mb-4">{t('footer_desc_title')}</h3>
                <p className="opacity-80 text-sm leading-relaxed mb-4">
                  {t('footer_desc_text')}
                </p>
                <div className="flex justify-center lg:justify-start gap-3">
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Contacto Rápido */}
              <div className="lg:col-span-1">
                <h3 className="font-title text-lg font-bold mb-4">{t('footer_contact_title')}</h3>
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity group"
                    >
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs opacity-60">{item.label}</p>
                        <p className="text-sm font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Horarios */}
              <div className="lg:col-span-1">
                <h3 className="font-title text-lg font-bold mb-4">{t('footer_availability_title')}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 opacity-60" />
                    <span className="text-sm">{t('footer_availability_hours')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{t('footer_availability_checkin')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">{t('footer_availability_checkout')}</span>
                  </div>
                </div>
              </div>

              {/* Newsletter/Reviews */}
              <div className="lg:col-span-1">
                <h3 className="font-title text-lg font-bold mb-4 text-white">{t('footer_reviews_title')}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-white/80">{t('footer_reviews_rating')}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <p className="text-sm text-white italic">
                    {t('footer_reviews_quote')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 bg-black/30 backdrop-blur-sm text-center">
          <div className="container mx-auto px-4">
            <p className="text-sm opacity-60">
              {t('footer_copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;