import React, { useState } from 'react';
import { Sparkles, Eye, X, Calendar, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/salonData.js';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const categories = ['All', 'Hair Styling', 'Hair Colour', 'Skincare', 'Bridal', 'Nails', 'Studio Vibe'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE6DC] text-[#7E5C3B] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Lookbook</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1E1917] font-bold tracking-tight">
            Our Work & Ambiance
          </h2>
          <p className="text-base sm:text-lg text-[#5D534B] leading-relaxed">
            Take a visual tour through our contemporary Indirapuram salon, signature transformations, bridal artistry, and peaceful self-care corners.
          </p>
        </div>

        {/* Gallery Filter Chips */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#221C1A] text-white shadow-xs'
                  : 'bg-[#F2ECE2] text-[#4F463F] hover:bg-[#E7DEC9] hover:text-[#1F1A18]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/5 bg-[#E8DFC9] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer border border-[#E9E1D6]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[11px] uppercase tracking-wider text-[#DFC19E] font-semibold">
                  {item.category}
                </span>
                <p className="font-serif-luxury text-white text-base font-bold mt-0.5">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-white/80">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Always visible category pill on mobile */}
              <div className="absolute bottom-3 left-3 sm:hidden bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="bg-[#FAF8F5] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl relative border border-[#D5C6B4]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-16/10 bg-black">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.alt}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A633E] font-semibold">
                    {activePhoto.category}
                  </span>
                  <h4 className="font-serif-luxury text-xl font-bold text-[#1F1A18] mt-1">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs text-[#6A5E54] mt-1">
                    Realized by senior artists at Glow Studio, Indirapuram
                  </p>
                </div>

                <a
                  href="#appointment"
                  onClick={() => setActivePhoto(null)}
                  className="inline-flex items-center gap-2 bg-[#221C1A] hover:bg-[#8A633E] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors shrink-0"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#DFC19E]" />
                  <span>Book This Service</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
