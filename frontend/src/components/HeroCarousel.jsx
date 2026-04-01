import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '../utils/helpers';
import { motion, AnimatePresence } from 'framer-motion';

const HeroCarousel = ({ banners = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying || banners.length === 0) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length, nextSlide]);

  if (banners.length === 0) return null;

  const currentBanner = banners[currentSlide];

  return (
    <section 
      data-testid="hero-carousel"
      className="relative w-full overflow-hidden bg-slate-100"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="aspect-[16/9] sm:aspect-[21/9] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentBanner.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-xl text-white">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight leading-tight mb-2 sm:mb-4"
                >
                  {currentBanner.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm sm:text-base lg:text-lg text-slate-200 mb-4 sm:mb-6"
                >
                  {currentBanner.subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-3"
                >
                  <a
                    href={getWhatsAppUrl(`Hello, I am interested in ${currentBanner.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="hero-whatsapp-btn"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-bold transition-all btn-press shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={getPhoneUrl()}
                    data-testid="hero-call-btn"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-bold transition-all btn-press shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Call Now
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {banners.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              data-testid="hero-carousel-prev"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
            </button>
            <button
              onClick={nextSlide}
              data-testid="hero-carousel-next"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
            </button>
          </>
        )}

        {/* Dots */}
        {banners.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                data-testid={`hero-carousel-dot-${index}`}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-yellow-400 w-6 sm:w-8' 
                    : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;
