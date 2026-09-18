import React, { useState } from 'react';
import { Calendar, HelpCircle, Sparkles, Check, Info } from 'lucide-react';
import { pricingCategories } from '../data/salonData.js';

export default function Pricing({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleBookCategory = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const appointmentElement = document.getElementById('appointment');
    if (appointmentElement) {
      appointmentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0E8DC] text-[#866341] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Transparent</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1E1917] font-bold tracking-tight">
            Service Menu & Pricing
          </h2>
          <p className="text-base sm:text-lg text-[#5F554D] leading-relaxed">
            We believe in honest, upfront pricing with no hidden charges. Every service includes professional consultation and premium products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-[#EFE8DE] rounded-full border border-[#DFD5C8] max-w-full">
            {pricingCategories.map((category, index) => (
              <button
                key={category.category}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === index
                    ? 'bg-[#221C1A] text-white shadow-xs'
                    : 'text-[#4A413A] hover:text-[#1F1B19]'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Pricing Card & Items */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FAF8F5] border border-[#E6DDD2] rounded-3xl p-6 sm:p-10 shadow-xs">
            
            {/* Header of Active Category */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EFE8DF] gap-2">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1A18]">
                  {pricingCategories[activeTab].category}
                </h3>
                <p className="text-xs sm:text-sm text-[#73675E] mt-1">
                  {pricingCategories[activeTab].subtitle}
                </p>
              </div>
              <span className="text-xs font-medium text-[#8F6A44] bg-[#F5EFE6] px-3 py-1.5 rounded-full self-start sm:self-auto border border-[#EADFCF]">
                Premium salon experience
              </span>
            </div>

            {/* List of services in this category */}
            <div className="divide-y divide-[#EFE8DF] mt-2">
              {pricingCategories[activeTab].items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[#F7F2EB] px-3 rounded-xl transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base text-[#241F1D] group-hover:text-[#8F6A44] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#675C53]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
                    <div className="text-left sm:text-right">
                      <span className="text-sm sm:text-base font-bold text-[#1F1A18] font-sans">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-[#8C7F75] block font-normal">
                        Starting price
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleBookCategory(item.name)}
                      className="bg-[#241F1D] hover:bg-[#8F6A44] text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                    >
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Variation Disclaimer Note */}
            <div className="mt-8 pt-6 border-t border-[#EAE2D7] bg-[#F5EFE7] rounded-2xl p-4 sm:p-5 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#8F6A44] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-[#5B5048] space-y-1">
                <p className="font-semibold text-[#251F1D]">Pricing Transparency Note</p>
                <p>
                  Final pricing may vary based on hair length, density, specific product formulations (e.g. Olaplex, ammonia-free lines), and individual service requirements. A complimentary consultation is provided before commencing any service.
                </p>
              </div>
            </div>

            {/* Central CTA */}
            <div className="mt-8 text-center">
              <a
                href="#appointment"
                className="inline-flex items-center gap-2 bg-[#221C1A] hover:bg-[#8F6A44] text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#DFC19E]" />
                <span>Book Your Appointment</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
