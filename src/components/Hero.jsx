import React from 'react';
import { Calendar, ArrowRight, Sparkles, Clock, CheckCircle2, Star } from 'lucide-react';
import { businessInfo } from '../data/salonData.js';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-[#FAF8F5]">
      {/* Subtle atmospheric background accents */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#F3ECE1] filter blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#EFE4D6] filter blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2.5 bg-[#F2ECE2] border border-[#E3D9CC] px-4 py-1.5 rounded-full text-xs text-[#524841] font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <Clock className="w-3.5 h-3.5 text-[#A57A4E]" />
              <span>{businessInfo.hours.status}</span>
              <span className="text-[#C4B7AB]">•</span>
              <span className="text-[#7B6E64]">Indirapuram, Ghaziabad</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl text-[#1E1A18] font-bold tracking-tight leading-[1.15]">
                Your Style. <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#936F49]">Your Glow.</span> <br />
                Your Moment.
              </h1>
              
              <p className="text-base sm:text-lg text-[#5D534B] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Indirapuram’s premier modern unisex salon. We craft personalized hair transformations, revitalizing skincare rituals, and signature bridal makeup inside a calm, hygienic, and welcoming studio.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#appointment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#241F1D] hover:bg-[#A57A4E] text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#DFC19E]" />
                <span>Book an Appointment</span>
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#CFBEAE] hover:border-[#241F1D] text-[#342D28] hover:text-[#1A1615] bg-transparent hover:bg-[#F2ECE2] px-7 py-3.5 rounded-full text-base font-medium transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#8D7663]" />
              </a>
            </div>

            {/* Quality Commitment Badges */}
            <div className="pt-6 border-t border-[#ECE3D7] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A57A4E] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#463D37]">Certified Stylists</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#A57A4E] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#463D37]">100% Sterile Tools</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#A57A4E] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#463D37]">Authentic Products</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring border */}
              <div className="absolute -inset-2 rounded-2xl sm:rounded-3xl border border-[#DFC8B2]/50 pointer-events-none -rotate-1"></div>
              
              {/* Main Salon Hero Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-4/5 bg-[#EAE2D7]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern styling station at Glow Studio salon"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient overlay at bottom for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Floating Badge 1: Unisex Studio Guarantee */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#26211E] py-1.5 px-3.5 rounded-full text-xs font-semibold shadow-md flex items-center gap-1.5 border border-[#E9DFD3]">
                  <Sparkles className="w-3.5 h-3.5 text-[#A57A4E]" />
                  <span>Unisex Hair & Beauty</span>
                </div>

                {/* Floating Bottom Card: Pricing Starter */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FAF8F5]/95 backdrop-blur-md rounded-xl p-4 border border-[#E7DFD4] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#8A7C72] font-semibold">Special Offer</p>
                      <p className="font-serif-luxury text-base font-bold text-[#221C1A]">Hair Spa + Style Cut</p>
                      <p className="text-xs text-[#63574E]">Starting at ₹999 for first-time guests</p>
                    </div>
                    <a
                      href="#appointment"
                      className="bg-[#241F1D] text-white hover:bg-[#A57A4E] text-xs font-medium px-3.5 py-2 rounded-lg transition-colors shrink-0"
                    >
                      Reserve
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
