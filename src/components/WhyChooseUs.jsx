import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, Coffee } from 'lucide-react';
import { whyChooseUsReasons } from '../data/salonData.js';

// Map icon strings to Lucide components
const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  HeartHandshake: HeartHandshake,
  CheckCircle2: CheckCircle2,
  Coffee: Coffee,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-[#F5EFE8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE0D3] text-[#7B5938] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Glow Studio Promise</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1F1A18] font-bold tracking-tight">
            Why Indirapuram Chooses Us
          </h2>
          <p className="text-base sm:text-lg text-[#5E5249] leading-relaxed">
            We hold ourselves to uncompromising standards of artistry, sanitation, and hospitality so you leave feeling restored, confident, and radiant.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUsReasons.map((reason, index) => {
            const IconComponent = iconMap[reason.icon] || Sparkles;
            const isWide = index === 3 || index === 4;

            return (
              <div
                key={reason.title}
                className={`bg-[#FAF8F5] rounded-2xl p-7 border border-[#E7DFD4] hover:border-[#CFBCA8] shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F0E6D8] text-[#865E37] flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1E1917]">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-[#61564D] leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFE8DE] flex items-center text-xs text-[#8F7C6E] font-medium">
                  <span>Glow Studio Standard</span>
                </div>
              </div>
            );
          })}

          {/* 6th Complementary Feature Card to balance grid */}
          <div className="bg-[#241F1D] text-white rounded-2xl p-7 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-wider text-[#D8BA9E] font-semibold">
                Client Comfort
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Quiet & Clean Retreat
              </h3>
              <p className="text-sm text-[#C8BDB4] leading-relaxed">
                Step away from bustling city traffic into a calm, air-conditioned sanctuary with sanitized stations and personalized attention.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#3B3430] flex items-center justify-between">
              <span className="text-xs text-[#DFC19E]">Open all 7 days</span>
              <a
                href="#appointment"
                className="text-xs font-semibold text-white hover:text-[#DFC19E] underline underline-offset-4"
              >
                Reserve a Slot &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
