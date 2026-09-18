import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { businessInfo } from '../data/salonData.js';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Quick WhatsApp Pill */}
      <a
        href={businessInfo.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-103"
        aria-label="Chat with Glow Studio on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline">
          Chat with Us
        </span>
      </a>

      {/* Quick Call Pill on Mobile */}
      <a
        href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
        className="sm:hidden flex items-center justify-center w-11 h-11 bg-[#241F1D] text-white rounded-full shadow-lg transition-transform active:scale-95"
        aria-label="Call salon directly"
      >
        <Phone className="w-4 h-4" />
      </a>
    </aside>
  );
}
