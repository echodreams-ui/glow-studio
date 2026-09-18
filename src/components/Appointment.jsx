import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle, Sparkles, Send, ArrowRight } from 'lucide-react';
import { businessInfo, services } from '../data/salonData.js';

export default function Appointment({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Sync pre-selected service when user clicks "Book Now" from another section
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Today's minimum date for date picker (YYYY-MM-DD)
  const todayDateStr = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '09:30 AM',
    '11:00 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.phone.replace(/[\s-+()]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a desired service';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred date';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: '11:00 AM',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // WhatsApp quick booking link generator
  const getWhatsAppBookingLink = () => {
    const serviceText = formData.service || 'a beauty service';
    const dateText = formData.preferredDate ? ` for ${formData.preferredDate}` : '';
    const message = encodeURIComponent(
      `Hi Glow Studio! I would like to inquire about booking an appointment for ${serviceText}${dateText}.`
    );
    return `https://wa.me/${businessInfo.whatsapp}?text=${message}`;
  };

  return (
    <section id="appointment" className="py-20 bg-[#F5EFE8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EAE0D3] text-[#7B5838] text-xs font-semibold tracking-wider uppercase">
              <Calendar className="w-3.5 h-3.5" />
              <span>Easy Reservations</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-[#1F1A18] font-bold tracking-tight">
              Request Your <br />
              <span className="italic font-normal text-[#8A633E]">Studio Session</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5D524A] leading-relaxed">
              Fill out your service preferences below and our front desk will coordinate your slot. We reserve dedicated time for each client to ensure an unhurried, peaceful experience.
            </p>

            {/* Studio Hours & Policies */}
            <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E7DFD4] space-y-4 shadow-2xs">
              <h4 className="font-serif-luxury font-bold text-base text-[#1F1A18]">
                Studio Details
              </h4>
              
              <div className="space-y-2 text-xs sm:text-sm text-[#61554C]">
                <div className="flex items-center justify-between pb-2 border-b border-[#EFE7DC]">
                  <span className="font-medium text-[#2E2825]">Days of Operation</span>
                  <span>Monday – Sunday</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#EFE7DC]">
                  <span className="font-medium text-[#2E2825]">Operating Hours</span>
                  <span>9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#2E2825]">Location</span>
                  <span>Indirapuram, Ghaziabad</span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp alternative card */}
            <div className="bg-[#241F1D] text-white p-6 rounded-2xl space-y-3 shadow-md">
              <span className="text-[10px] uppercase tracking-wider text-[#DFC19E] font-semibold">
                Fastest Response
              </span>
              <h4 className="font-serif-luxury text-lg font-bold text-white">
                Prefer WhatsApp Booking?
              </h4>
              <p className="text-xs text-[#C5B9B0] leading-relaxed">
                Connect directly with our desk for immediate availability, pricing estimates, or bridal consultations.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1EBE5D] text-[#12381F] font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat & Book on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] rounded-3xl p-7 sm:p-10 border border-[#E5DCD0] shadow-sm">
              
              {isSubmitted ? (
                /* Success State Presentation */
                <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[#E8F5E9] text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1F1A18]">
                      Request Received!
                    </h3>
                    <p className="text-sm text-[#4E443C] leading-relaxed">
                      Thanks! Your appointment request has been recorded for this demo.
                    </p>
                  </div>

                  {/* Summary of submitted request */}
                  {submittedData && (
                    <div className="bg-[#F5EFE7] p-5 rounded-2xl max-w-md mx-auto text-left border border-[#E8DFD3] text-xs sm:text-sm text-[#4F443D] space-y-2">
                      <div className="flex justify-between">
                        <span className="text-[#887A70]">Guest:</span>
                        <span className="font-semibold text-[#1F1A18]">{submittedData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#887A70]">Phone:</span>
                        <span className="font-semibold text-[#1F1A18]">{submittedData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#887A70]">Service:</span>
                        <span className="font-semibold text-[#1F1A18]">{submittedData.service}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#887A70]">Date & Time:</span>
                        <span className="font-semibold text-[#1F1A18]">
                          {submittedData.preferredDate} at {submittedData.preferredTime}
                        </span>
                      </div>
                      {submittedData.message && (
                        <div className="pt-2 border-t border-[#EAE1D6] text-xs text-[#6A5E54]">
                          <span className="text-[#887A70] block">Notes:</span>
                          <span className="italic">"{submittedData.message}"</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto bg-[#241F1D] hover:bg-[#8A633E] text-white text-xs font-semibold px-6 py-3 rounded-full transition-colors cursor-pointer"
                    >
                      Book Another Request
                    </button>
                    
                    <a
                      href={getWhatsAppBookingLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto border border-[#D5C7B8] hover:bg-[#EFE8DD] text-[#342D28] text-xs font-medium px-6 py-3 rounded-full transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Confirm via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1F1A18]">
                      Reserve an Appointment
                    </h3>
                    <p className="text-xs sm:text-sm text-[#73685F] mt-1">
                      No advance payment required. We will confirm your preferred timing via call/message.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-[#2D2622]">
                        Your Name <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Shalini Sharma"
                          className={`w-full bg-[#FAF8F5] border ${
                            errors.name ? 'border-rose-500' : 'border-[#DDD4C8]'
                          } focus:border-[#221C1A] focus:ring-1 focus:ring-[#221C1A] rounded-xl px-3.5 py-2.5 text-sm text-[#221C1A] placeholder-[#9E9084] outline-none transition-all`}
                        />
                        <User className="w-4 h-4 text-[#A89A8E] absolute right-3.5 top-3" />
                      </div>
                      {errors.name && (
                        <p className="text-[11px] text-rose-600 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#2D2622]">
                        Mobile Number <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          maxLength={15}
                          className={`w-full bg-[#FAF8F5] border ${
                            errors.phone ? 'border-rose-500' : 'border-[#DDD4C8]'
                          } focus:border-[#221C1A] focus:ring-1 focus:ring-[#221C1A] rounded-xl px-3.5 py-2.5 text-sm text-[#221C1A] placeholder-[#9E9084] outline-none transition-all`}
                        />
                        <Phone className="w-4 h-4 text-[#A89A8E] absolute right-3.5 top-3" />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-rose-600 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="block text-xs font-semibold text-[#2D2622]">
                      Select Service <span className="text-rose-600">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full bg-[#FAF8F5] border ${
                        errors.service ? 'border-rose-500' : 'border-[#DDD4C8]'
                      } focus:border-[#221C1A] focus:ring-1 focus:ring-[#221C1A] rounded-xl px-3.5 py-2.5 text-sm text-[#221C1A] outline-none transition-all cursor-pointer`}
                    >
                      <option value="">-- Choose a service --</option>
                      <optgroup label="Hair Care">
                        <option value="Haircut & Styling">Haircut & Styling (from ₹399)</option>
                        <option value="Hair Spa">Hair Spa (from ₹799)</option>
                        <option value="Hair Colour">Hair Colour (from ₹1,499)</option>
                        <option value="Keratin Treatment">Keratin Treatment (from ₹3,499)</option>
                        <option value="Hair Wash & Blow Dry">Hair Wash & Blow Dry (from ₹299)</option>
                      </optgroup>
                      <optgroup label="Skin & Facial Care">
                        <option value="Cleanup">Cleanup (from ₹599)</option>
                        <option value="Facial">Facial (from ₹999)</option>
                        <option value="De-Tan">De-Tan (from ₹499)</option>
                        <option value="Skin Treatment">Skin Treatment (from ₹1,599)</option>
                      </optgroup>
                      <optgroup label="Nail Studio">
                        <option value="Manicure">Manicure (from ₹499)</option>
                        <option value="Pedicure">Pedicure (from ₹599)</option>
                        <option value="Nail Art">Nail Art (from ₹799)</option>
                      </optgroup>
                      <optgroup label="Bridal & Occasions">
                        <option value="Bridal Makeup">Bridal Makeup (from ₹8,999)</option>
                        <option value="Party Makeup">Party Makeup (from ₹2,499)</option>
                        <option value="Hairstyling">Hairstyling (from ₹999)</option>
                        <option value="Pre-Bridal Packages">Pre-Bridal Packages (from ₹11,999)</option>
                      </optgroup>
                    </select>
                    {errors.service && (
                      <p className="text-[11px] text-rose-600 font-medium">{errors.service}</p>
                    )}
                  </div>

                  {/* Date & Time Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="preferredDate" className="block text-xs font-semibold text-[#2D2622]">
                        Preferred Date <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          min={todayDateStr}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className={`w-full bg-[#FAF8F5] border ${
                            errors.preferredDate ? 'border-rose-500' : 'border-[#DDD4C8]'
                          } focus:border-[#221C1A] focus:ring-1 focus:ring-[#221C1A] rounded-xl px-3.5 py-2.5 text-sm text-[#221C1A] outline-none transition-all`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-[11px] text-rose-600 font-medium">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="preferredTime" className="block text-xs font-semibold text-[#2D2622]">
                        Preferred Time Slot <span className="text-rose-600">*</span>
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F5] border border-[#DDD4C8] focus:border-[#221C1A] focus:ring-1 focus:ring-[#221C1A] rounded-xl px-3.5 py-2.5 text-sm text-[#221C1A] outline-none transition-all cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p className="text-[11px] text-rose-600 font-medium">{errors.preferredTime}</p>
                      )}
                    </div>
                  </div>

                  {/* Optional Message / Special Request */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-[#2D2622]">
                      Special Requests or Hair/Skin Notes <span className="text-[#8E8074] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Sensitive scalp, wedding date query, or specific stylist request..."
                      className="w-full bg-[#FAF8F5] border border-[#DDD4C8] focus:border-[#221C1A] focus:ring-1 focus:ring-[#221C1A] rounded-xl px-3.5 py-2.5 text-sm text-[#221C1A] placeholder-[#9E9084] outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#221C1A] hover:bg-[#8A633E] text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors shadow-md hover:shadow-lg cursor-pointer active:scale-99"
                    >
                      <Send className="w-4 h-4 text-[#DFC19E]" />
                      <span>Request Appointment</span>
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-[#86786C]">
                    By submitting, your request is logged for this portfolio demo. No payments are requested.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
