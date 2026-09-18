import React, { useState } from 'react';
import { Sparkles, Clock, ArrowUpRight, Check } from 'lucide-react';
import { services, serviceCategories } from '../data/salonData.js';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter((s) => s.category === activeCategory);

  const handleBookService = (serviceName) => {
    if (onSelectService) {
      onSelectService(serviceName);
    }
    const appointmentElement = document.getElementById('appointment');
    if (appointmentElement) {
      appointmentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE2D7] text-[#7B5B3A] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Service Portfolio</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1F1B19] font-bold tracking-tight">
            Crafted for Radiance & Care
          </h2>
          <p className="text-base sm:text-lg text-[#5D534B] leading-relaxed">
            From precision haircutting and restorative hair therapies to clinical skincare and couture bridal artistry, every service is delivered with unhurried excellence.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {serviceCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#221C1A] text-white shadow-md'
                    : 'bg-[#EFE7DE] text-[#4A413A] hover:bg-[#E5DCD0] hover:text-[#1F1B19]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8DFD3] hover:border-[#D0BDAA] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Tag */}
              <div className="relative aspect-16/11 overflow-hidden bg-[#E2D8CC]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#26201C] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-2xs">
                  {service.tag}
                </div>

                <div className="absolute bottom-3 right-3 text-white text-xs flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                  <Clock className="w-3 h-3" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif-luxury text-lg font-bold text-[#1E1917] group-hover:text-[#936F49] transition-colors">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#61564E] leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Footer: Price and Booking CTA */}
                <div className="pt-3 border-t border-[#EFE8DF] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8A7D73] block font-medium">Starting at</span>
                    <span className="text-base font-bold text-[#1F1A18] font-sans">
                      ₹{service.startingPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleBookService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#26201C] hover:bg-[#936F49] text-white px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center bg-[#ECE4D8] border border-[#DDD3C5] rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#4E443D]">
            <span className="font-semibold text-[#221C1A]">Looking for customized bridal or bulk grooming packages?</span>{' '}
            Speak directly with our creative director for tailor-made consultations.
          </p>
          <div className="mt-3">
            <a
              href="#appointment"
              className="text-xs font-semibold text-[#8B643C] hover:text-[#5E3F1F] underline underline-offset-4"
            >
              Request a personalized consultation &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
