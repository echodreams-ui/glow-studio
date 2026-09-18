import React from 'react';
import { Sparkles, Quote, Heart } from 'lucide-react';
import { testimonials } from '../data/salonData.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE6DC] text-[#7E5C3B] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Voices</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1F1A18] font-bold tracking-tight">
            Words From Our Guests
          </h2>
          <p className="text-base sm:text-lg text-[#5D534B] leading-relaxed">
            Real experiences from everyday grooming to memorable wedding transformations.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] border border-[#E7DFD4] hover:border-[#D0BDAA] rounded-2xl p-6 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-[#C9A98A] opacity-70" />
                <p className="text-sm text-[#4E443C] leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFE7DC] flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury font-bold text-base text-[#1F1A18]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#8A786B] font-medium">
                    {item.service}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#F5EEE4] text-[#8A633E] flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Sample Disclaimer Notice (Prompt Compliance) */}
        <div className="mt-12 text-center text-xs text-[#8A7C72] max-w-lg mx-auto">
          <p>
            * Note: Sample client testimonials compiled as part of the Glow Studio website showcase.
          </p>
        </div>

      </div>
    </section>
  );
}
