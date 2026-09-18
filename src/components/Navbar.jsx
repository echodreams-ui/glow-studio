import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { businessInfo, navLinks } from '../data/salonData.js';

export default function Navbar({ onSelectService }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#1F1C1B] text-[#E5DCD3] text-xs py-2 px-4 border-b border-[#35302E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{businessInfo.hours.status}</span>
            <span className="hidden md:inline text-[#8E847C]">•</span>
            <span className="hidden md:inline flex items-center gap-1 text-[#C4B7AC]">
              <MapPin className="w-3 h-3 text-[#C49B71]" />
              Indirapuram, Ghaziabad
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#D8CDC3]">
            <a
              href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C49B71]" />
              <span>{businessInfo.displayPhone}</span>
            </a>
            <span className="text-[#524B46]">•</span>
            <a
              href={businessInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C49B71] hover:text-[#DFC19E] transition-colors font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E1D9]'
            : 'bg-[#FAF8F5] border-b border-[#F0EAE1]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Glow Studio Home"
            >
              <div className="w-10 h-10 rounded-full bg-[#2B2625] flex items-center justify-center text-[#D8BA9E] group-hover:bg-[#C49B71] group-hover:text-white transition-colors shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold tracking-tight text-[#1F1C1B]">
                  Glow Studio
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#887C74] font-medium">
                  Unisex Salon & Beauty
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#4D4540] hover:text-[#C49B71] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C49B71] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-[#262220] hover:bg-[#C49B71] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#DFC19E]" />
                <span>Book Appointment</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#appointment"
                className="bg-[#262220] text-white text-xs px-3.5 py-2 rounded-full font-medium"
              >
                Book
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg text-[#312B28] hover:bg-[#EFE9E0] transition-colors focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D9] shadow-lg animate-in fade-in duration-150">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#38322E] hover:text-[#C49B71] hover:bg-[#F2ECE2] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-[#EAE3DA] flex flex-col gap-2.5">
                <a
                  href="#appointment"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#262220] hover:bg-[#C49B71] text-white px-5 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#DFC19E]" />
                  <span>Book an Appointment</span>
                </a>
                <a
                  href={businessInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#CBB8A8] text-[#3D352F] hover:bg-[#EFE7DC] px-5 py-3 rounded-full text-sm font-medium transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
