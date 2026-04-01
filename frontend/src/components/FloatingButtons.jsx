import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { getWhatsAppUrl, getPhoneUrl } from '../utils/helpers';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling past 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show tooltip after 3 seconds on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Desktop - Always visible */}
      <div 
        data-testid="floating-buttons-desktop"
        className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col gap-3"
      >
        <a
          href={getPhoneUrl()}
          data-testid="floating-call-btn"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all call-glow btn-press"
          title="Call Now"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="floating-whatsapp-btn"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all whatsapp-glow btn-press relative"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-green-400 pulse-ring" />
        </a>
      </div>

      {/* Mobile - Floating Bar */}
      <div 
        data-testid="floating-buttons-mobile"
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="mx-4 mb-2 bg-slate-800 text-white text-sm px-4 py-2 rounded-lg flex items-center justify-between">
            <span>Need help? Chat with us!</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="ml-2 p-1 hover:bg-slate-700 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
        
        <div className="bg-white border-t border-slate-200 p-3 flex gap-3">
          <a
            href={getPhoneUrl()}
            data-testid="mobile-floating-call-btn"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 flex items-center justify-center gap-2 font-bold btn-press"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-floating-whatsapp-btn"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 font-bold btn-press"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;
