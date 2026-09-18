import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Testimonials from './components/Testimonials.jsx';
import Appointment from './components/Appointment.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#221F1F] flex flex-col font-sans">
      {/* Navigation */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section 3: Pricing */}
        <Pricing onSelectService={handleSelectService} />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 5: Gallery */}
        <Gallery />

        {/* Section 6: About Glow Studio */}
        <About />

        {/* Section 7: Testimonials */}
        <Testimonials />

        {/* Section 8: Appointment Booking */}
        <Appointment preselectedService={selectedService} />

        {/* Section 9: Contact & Directions */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant Contact */}
      <FloatingActions />
    </div>
  );
}
