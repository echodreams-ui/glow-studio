import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../data/salonData.js';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#F5EFE8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/5 border border-[#E4D9CC] bg-[#ECE2D5]">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                  alt="Inside Glow Studio Salon Indirapuram"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* Floating badge inside image */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md p-4 rounded-2xl border border-[#DFD3C4] shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#241F1D] flex items-center justify-center text-[#DFC19E] shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif-luxury font-bold text-sm text-[#1F1A18]">
                        Glow Studio • Indirapuram
                      </p>
                      <p className="text-xs text-[#6A5F56]">
                        Designed for your comfort, wellness, and self-care
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ECE2D5] text-[#785433] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1E1917] font-bold tracking-tight leading-tight">
              Thoughtful Beauty, <br />
              <span className="italic font-normal text-[#8A633E]">Crafted With Respect.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5A5047] leading-relaxed">
              <p>
                Glow Studio was founded in Indirapuram to bring a genuine modern salon experience to NCR—where attentive consultations take precedence over rushed appointments, and authentic clinical-grade products replace generic formulations.
              </p>
              <p>
                Whether you visit for a restorative monthly hair spa, precise haircutting, clinical skin treatments, or celebratory bridal glam, our team of trained stylists and estheticians tailor every ritual to your individual hair texture, skin tone, and personal lifestyle.
              </p>
            </div>

            {/* Core Values / Commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E9E0D4]">
                <ShieldCheck className="w-5 h-5 text-[#8A633E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F1A18]">Genuine Products</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5F55] mt-0.5">100% authentic L'Oréal, Olaplex & O.P.I.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E9E0D4]">
                <Heart className="w-5 h-5 text-[#8A633E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F1A18]">Warm Hospitality</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5F55] mt-0.5">Complimentary tea, coffee & Wi-Fi</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E9E0D4]">
                <CheckCircle2 className="w-5 h-5 text-[#8A633E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F1A18]">Strict Sanitation</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5F55] mt-0.5">Autoclave sterilization & fresh sheets</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E9E0D4]">
                <Award className="w-5 h-5 text-[#8A633E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F1A18]">Senior Stylists</h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5F55] mt-0.5">Certified unisex artists & colorists</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2.5 bg-[#221C1A] hover:bg-[#8A633E] text-white px-7 py-3.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#DFC19E]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
