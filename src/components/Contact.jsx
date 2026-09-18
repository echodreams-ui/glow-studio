import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageSquare,
  Instagram,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { businessInfo, salonFaqs } from '../data/salonData.js';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE6DC] text-[#7E5C3B] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visit Us In Indirapuram</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1E1917] font-bold tracking-tight">
            Location & Contact
          </h2>
          <p className="text-base sm:text-lg text-[#5D534B] leading-relaxed">
            Conveniently situated in Ahinsa Khand 2, Indirapuram with dedicated parking and easy access from Noida and East Delhi.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Primary Business Card */}
            <div className="bg-[#FAF8F5] border border-[#E7DFD4] rounded-3xl p-7 sm:p-8 space-y-6 shadow-2xs">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1F1A18]">
                  {businessInfo.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#7D6F64] mt-0.5">
                  {businessInfo.tagline}
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#4E443C]">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EBE0] text-[#865E37] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#1F1A18] block">Studio Address</span>
                    <p className="text-xs sm:text-sm text-[#5D534B] leading-relaxed mt-0.5">
                      {businessInfo.address.line1}, {businessInfo.address.line2}, {businessInfo.address.city}, {businessInfo.address.state}, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EBE0] text-[#865E37] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#1F1A18] block">Direct Contact</span>
                    <a
                      href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm text-[#1F1A18] hover:text-[#865E37] font-medium transition-colors"
                    >
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EBE0] text-[#865E37] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#1F1A18] block">Email Inquiries</span>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-xs sm:text-sm text-[#1F1A18] hover:text-[#865E37] font-medium transition-colors"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#F4EBE0] text-[#865E37] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#1F1A18] block">Operating Hours</span>
                    <p className="text-xs sm:text-sm text-[#5D534B] mt-0.5">
                      {businessInfo.hours.days}: <span className="font-semibold text-[#1F1A18]">{businessInfo.hours.timing}</span>
                    </p>
                    <span className="inline-block mt-1 text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md font-medium border border-emerald-200">
                      Open Today for unisex appointments & walk-ins
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Get Directions & WhatsApp & Instagram */}
              <div className="pt-4 border-t border-[#EFE7DC] flex flex-wrap gap-3">
                <a
                  href={businessInfo.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#221C1A] hover:bg-[#865E37] text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#DFC19E]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={businessInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#C4B7AC] hover:bg-[#F2ECE2] text-[#2C2521] px-5 py-2.5 rounded-full text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#C4B7AC] hover:bg-[#F2ECE2] text-[#2C2521] px-5 py-2.5 rounded-full text-xs font-medium transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C13584]" />
                  <span>Instagram</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-4">
              <h3 className="font-serif-luxury text-2xl font-bold text-[#1F1A18]">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-[#73685F] mt-1">
                Everything you need to know before visiting our salon in Indirapuram.
              </p>
            </div>

            <div className="space-y-3">
              {salonFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF8F5] border border-[#E7DFD4] rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F7F2EB] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-xs sm:text-sm text-[#251F1D]">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#865E37] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#865E37] shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#5D524A] leading-relaxed border-t border-[#EFE7DC] pt-3 animate-in fade-in duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct inquiry box */}
            <div className="p-5 bg-[#F2ECE2] rounded-2xl border border-[#DFD5C8] text-xs text-[#52473F] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#201A18]">Have a custom requirement?</p>
                <p className="text-[#6D6055]">Feel free to call us directly for advice.</p>
              </div>
              <a
                href={`tel:${businessInfo.phone.replace(/\s+/g, '')}`}
                className="bg-[#241F1D] text-white hover:bg-[#865E37] px-4 py-2 rounded-lg font-medium transition-colors shrink-0 ml-3"
              >
                Call Desk
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
