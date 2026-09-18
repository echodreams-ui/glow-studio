import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { businessInfo, navLinks, serviceCategories } from '../data/salonData.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1817] text-[#D4C8BD] pt-16 pb-12 border-t border-[#312B28]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2F2926]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#362E2B] flex items-center justify-center text-[#DFC19E]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-tight text-white block">
                  {businessInfo.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#A59588] font-medium">
                  {businessInfo.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89A8E] leading-relaxed max-w-sm">
              Indirapuram’s dedicated sanctuary for personalized hair transformations, skin therapies, bridal beauty, and relaxing grooming rituals.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2C2522] hover:bg-[#A57A4E] text-[#D8CDC3] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#2C2522] hover:bg-[#A57A4E] text-[#D8CDC3] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-emerald-300 text-xs font-medium transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9E8F82] hover:text-[#DFC19E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Menu */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wide">
              Signature Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#9E8F82]">
              <li><a href="#services" className="hover:text-[#DFC19E] transition-colors">Precision Haircuts & Styling</a></li>
              <li><a href="#services" className="hover:text-[#DFC19E] transition-colors">Nourishing Hair Spas</a></li>
              <li><a href="#services" className="hover:text-[#DFC19E] transition-colors">Ammonia-Free Hair Colour</a></li>
              <li><a href="#services" className="hover:text-[#DFC19E] transition-colors">Glow Signature Facials</a></li>
              <li><a href="#services" className="hover:text-[#DFC19E] transition-colors">De-Tan Skin Rejuvenation</a></li>
              <li><a href="#services" className="hover:text-[#DFC19E] transition-colors">HD & Airbrush Bridal Makeup</a></li>
            </ul>
          </div>

          {/* Studio Hours & Contact Info */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="font-serif-luxury text-base font-bold text-white tracking-wide">
              Visit & Contact
            </h4>
            
            <div className="space-y-2.5 text-[#A89A8E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C49B71] shrink-0 mt-0.5" />
                <span>{businessInfo.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C49B71] shrink-0" />
                <a href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C49B71] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C49B71] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Open Daily</span>
                  <span>9:00 AM – 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7B70]">
          <p>
            © {new Date().getFullYear()} Glow Studio. All rights reserved. • Indirapuram, Ghaziabad.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#786A5F]">
              Professional Salon Showcase Template
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#2C2522] hover:bg-[#A57A4E] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
