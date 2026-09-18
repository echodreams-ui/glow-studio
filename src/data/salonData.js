// Static data for Glow Studio salon portfolio website
// All currency in Indian Rupees (INR - ₹)

export const businessInfo = {
  name: 'Glow Studio',
  tagline: 'Modern Unisex Salon & Beauty Studio',
  heroHeadline: 'Your Style. Your Glow. Your Moment.',
  heroSubheadline:
    'Experience premier hair styling, skin rejuvenation, bridal artistry, and luxury grooming in a tranquil, contemporary studio designed for your personal glow.',
  address: {
    line1: 'Shop 14, Ground Floor, Central Plaza Market',
    line2: 'Ahinsa Khand 2, Indirapuram',
    city: 'Ghaziabad',
    state: 'Uttar Pradesh',
    country: 'India',
    pincode: '201014',
    full: 'Ahinsa Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014',
  },
  phone: '+91 98765 43210',
  displayPhone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@glowstudio.example',
  hours: {
    days: 'Monday – Sunday',
    timing: '9:00 AM – 9:00 PM',
    status: 'Open Today • 9:00 AM – 9:00 PM',
  },
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    whatsapp: 'https://wa.me/919876543210?text=Hi%20Glow%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.',
    googleMaps: 'https://www.google.com/maps/search/?api=1&query=Indirapuram+Ghaziabad+Uttar+Pradesh',
  },
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'hair', name: 'Hair' },
  { id: 'skin', name: 'Skin' },
  { id: 'nails', name: 'Nails' },
  { id: 'bridal', name: 'Bridal & Occasions' },
];

export const services = [
  // HAIR
  {
    id: 'haircut-styling',
    category: 'hair',
    name: 'Haircut & Styling',
    description: 'Precision cut customized to your face shape and hair texture, finished with luxury blow-dry styling.',
    startingPrice: 399,
    duration: '45 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    tag: 'Unisex',
  },
  {
    id: 'hair-spa',
    category: 'hair',
    name: 'Hair Spa',
    description: 'Deep conditioning therapy to revive dull, stressed tresses, restore scalp moisture, and add luminous shine.',
    startingPrice: 799,
    duration: '60 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    tag: 'Most Relaxing',
  },
  {
    id: 'hair-colour',
    category: 'hair',
    name: 'Hair Colour',
    description: 'Global hues, balayage, highlights, and root touch-ups formulated with ammonia-free premium products.',
    startingPrice: 1499,
    duration: '90 - 150 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
    tag: 'L\'Oréal & Matrix',
  },
  {
    id: 'keratin-treatment',
    category: 'hair',
    name: 'Keratin Treatment',
    description: 'Intense anti-frizz smoothing treatment sealing proteins into the hair cuticle for silky, manageable strands.',
    startingPrice: 3499,
    duration: '120 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    tag: 'Smoothing',
  },
  {
    id: 'hair-wash-blowdry',
    category: 'hair',
    name: 'Hair Wash & Blow Dry',
    description: 'Invigorating scalp wash, premium conditioner, and voluminous thermal blowout for instant red-carpet finish.',
    startingPrice: 299,
    duration: '30 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    tag: 'Quick Refresh',
  },

  // SKIN
  {
    id: 'cleanup',
    category: 'skin',
    name: 'Cleanup',
    description: 'Deep-pore cleansing, gentle steam, blackhead removal, and soothing mask for refreshed, breathable skin.',
    startingPrice: 599,
    duration: '40 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    tag: 'Weekly Care',
  },
  {
    id: 'facial',
    category: 'skin',
    name: 'Facial',
    description: 'Targeted skin treatment with therapeutic massage, brightening serums, and hydration-locking packs.',
    startingPrice: 999,
    duration: '60 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    tag: 'Glow Favorite',
  },
  {
    id: 'de-tan',
    category: 'skin',
    name: 'De-Tan',
    description: 'Gentle fruit-acid and milk formulation to eliminate sun damage, even out skin tone, and restore natural glow.',
    startingPrice: 499,
    duration: '35 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    tag: 'Sun Recovery',
  },
  {
    id: 'skin-treatment',
    category: 'skin',
    name: 'Skin Treatment',
    description: 'Advanced acne-clarifying, anti-pigmentation, and firming collagen therapies tailored by skin experts.',
    startingPrice: 1599,
    duration: '75 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1552511556-9f16dcb6561f?auto=format&fit=crop&w=800&q=80',
    tag: 'Advanced',
  },

  // NAILS
  {
    id: 'manicure',
    category: 'nails',
    name: 'Manicure',
    description: 'Nail shaping, gentle cuticle care, exfoliating scrub, therapeutic hand massage, and long-lasting polish.',
    startingPrice: 499,
    duration: '45 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    tag: 'Hand Care',
  },
  {
    id: 'pedicure',
    category: 'nails',
    name: 'Pedicure',
    description: 'Relaxing foot soak, dead-skin buffing, hydrating massage, and pristine cuticle grooming in private stations.',
    startingPrice: 599,
    duration: '50 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
    tag: 'Sole Rejuvenation',
  },
  {
    id: 'nail-art',
    category: 'nails',
    name: 'Nail Art',
    description: 'Custom gel extensions, chrome accents, French tips, and intricate hand-painted designs with high gloss.',
    startingPrice: 799,
    duration: '60 - 90 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    tag: 'Gel & Acrylic',
  },

  // BRIDAL & OCCASIONS
  {
    id: 'bridal-makeup',
    category: 'bridal',
    name: 'Bridal Makeup',
    description: 'HD and Airbrush bridal makeup artistry designed to endure 12+ hours with flawless camera radiance.',
    startingPrice: 8999,
    duration: '180 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80',
    tag: 'Signature Bridal',
  },
  {
    id: 'party-makeup',
    category: 'bridal',
    name: 'Party Makeup',
    description: 'Elevated glam for sangeet, cocktail, and celebratory evenings including lashes and precision eye makeup.',
    startingPrice: 2499,
    duration: '75 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1707576618343-26a1b377ca7a?auto=format&fit=crop&w=800&q=80',
    tag: 'Event Ready',
  },
  {
    id: 'hairstyling',
    category: 'bridal',
    name: 'Hairstyling',
    description: 'Contemporary textured buns, messy braids, floral insertions, and Hollywood waves pinned to last all night.',
    startingPrice: 999,
    duration: '60 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1610047614301-13c63f00c032?auto=format&fit=crop&w=800&q=80',
    tag: 'Occasions',
  },
  {
    id: 'pre-bridal-packages',
    category: 'bridal',
    name: 'Pre-Bridal Packages',
    description: 'Complete head-to-toe curation including body polishing, deluxe facials, hair spa, waxing, and manicures.',
    startingPrice: 11999,
    duration: 'Multi-session',
    popular: true,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    tag: 'Complete Glow',
  },
];

export const pricingCategories = [
  {
    category: 'Hair Services',
    subtitle: 'Unisex cutting, nourishing spas & color transformations',
    items: [
      { name: 'Haircut & Blow Dry', price: 'Starting at ₹399', desc: 'Consultation, wash, haircut, and styling' },
      { name: 'Hair Spa (Nourishing / Repair)', price: 'Starting at ₹799', desc: 'Deep masque, scalp massage, and steam' },
      { name: 'Hair Colour (Global / Highlights)', price: 'Starting at ₹1,499', desc: 'Ammonia-free formulas, personalized shade matching' },
      { name: 'Keratin & Protein Smoothing', price: 'Starting at ₹3,499', desc: 'Frizz control, humidity shield, long-lasting silkiness' },
      { name: 'Hair Wash & Styling', price: 'Starting at ₹299', desc: 'Shampoo, deep conditioning, and volume blowout' },
    ],
  },
  {
    category: 'Skin & Facial Care',
    subtitle: 'Rejuvenating therapies for clear, radiant skin',
    items: [
      { name: 'Deep Pore Cleanup', price: 'Starting at ₹599', desc: 'Steam, exfoliation, extraction, and calming pack' },
      { name: 'Glow Signature Facial', price: 'Starting at ₹999', desc: 'Vitamin C / Hydrating booster with facial reflexology' },
      { name: 'De-Tan Therapy (Face & Neck)', price: 'Starting at ₹499', desc: 'Pigmentation reversal and sun-damage lightening' },
      { name: 'Advanced Skin Treatment', price: 'Starting at ₹1,599', desc: 'Targeted acne / anti-aging protocol with botanical serums' },
    ],
  },
  {
    category: 'Nail Studio',
    subtitle: 'Impeccable grooming, manicures & nail aesthetics',
    items: [
      { name: 'Classic Manicure', price: 'Starting at ₹499', desc: 'Cuticle revival, scrub, hand massage & finish' },
      { name: 'Deluxe Spa Pedicure', price: 'Starting at ₹599', desc: 'Aroma soak, heel smoothening & mask therapy' },
      { name: 'Gel Polish & Nail Art', price: 'Starting at ₹799', desc: 'Long-lasting chip-free gel with custom nail art' },
    ],
  },
  {
    category: 'Bridal & Occasions',
    subtitle: 'Artistry for weddings, engagements & special moments',
    items: [
      { name: 'Signature Bridal Makeup (HD / Airbrush)', price: 'Starting at ₹8,999', desc: 'Complete makeup, saree/lehenga draping & hair styling' },
      { name: 'Party & Cocktail Glam Makeup', price: 'Starting at ₹2,499', desc: 'Sophisticated event makeup including false lashes' },
      { name: 'Pre-Bridal Radiance Packages', price: 'Starting at ₹11,999', desc: 'Multi-day customized head-to-toe beauty rituals' },
    ],
  },
];

export const whyChooseUsReasons = [
  {
    title: 'Experienced Professionals',
    description: 'Certified senior hair stylists and bridal artists with continuous training in contemporary techniques.',
    icon: 'Sparkles',
  },
  {
    title: 'Premium Products',
    description: 'Only genuine international brands including L\'Oréal Professionnel, Olaplex, Cheryl\'s, and O.P.I.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Personalized Consultations',
    description: 'Dedicated one-on-one time before every service to understand your lifestyle, hair texture, and skin goals.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Hygienic Environment',
    description: 'Strict hospital-grade sterilization, single-use disposable kits, and sanitized styling stations for every guest.',
    icon: 'CheckCircle2',
  },
  {
    title: 'Relaxing Experience',
    description: 'Thoughtfully designed tranquil salon ambiance with ambient soundscapes and complimentary warm beverages.',
    icon: 'Coffee',
  },
];

export const galleryItems = [
  {
    id: 1,
    title: 'Modern Unisex Salon Interior',
    category: 'Studio Vibe',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    alt: 'Glow Studio interior styling stations',
  },
  {
    id: 2,
    title: 'Precision Hair Cut & Styling',
    category: 'Hair Styling',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    alt: 'Hair styling and blowout session',
  },
  {
    id: 3,
    title: 'Warm Balayage & Dimensional Color',
    category: 'Hair Colour',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    alt: 'Hair color transformation',
  },
  {
    id: 4,
    title: 'Hydrating Botanical Facial & Care',
    category: 'Skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    alt: 'Relaxing facial treatment',
  },
  {
    id: 5,
    title: 'Signature Indian Bridal Artistry',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1684868268327-7e5590bcfbd6?auto=format&fit=crop&w=800&q=80',
    alt: 'Bridal makeup and jewelry',
  },
  {
    id: 6,
    title: 'Gel Polish & Chic Nail Aesthetics',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    alt: 'Manicure and nail styling',
  },
  {
    id: 7,
    title: 'Gentlemen Grooming & Beard Sculpting',
    category: 'Grooming',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    alt: 'Men haircut and beard grooming',
  },
  {
    id: 8,
    title: 'Tranquil Hair Spa Wash Station',
    category: 'Studio Vibe',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    alt: 'Relaxing hair wash recliners',
  },
];

// Fictional portfolio testimonials (as required by prompt guidelines)
export const testimonials = [
  {
    id: 1,
    name: 'Priya',
    service: 'Hair Spa & Styling',
    review: 'Had a wonderful experience with the hair spa. The staff was attentive and the entire process felt very relaxing.',
  },
  {
    id: 2,
    name: 'Rohan',
    service: 'Beard Sculpting & Haircut',
    review: 'Clean, modern, and very professional. The stylist understood exactly what I wanted and gave great advice on hair care.',
  },
  {
    id: 3,
    name: 'Ananya',
    service: 'Bridal Makeup & Pre-Bridal',
    review: 'Booked their pre-bridal package and wedding makeup. Flawless look, stayed fresh throughout the ceremonies. Highly recommended!',
  },
  {
    id: 4,
    name: 'Vikram',
    service: 'Keratin Treatment & De-Tan',
    review: 'Great hygiene standards and genuine products. The difference in hair texture was immediate and noticeable.',
  },
];

export const salonFaqs = [
  {
    question: 'Do I need an appointment or do you accept walk-ins?',
    answer: 'Walk-ins are warmly welcome based on availability! However, to avoid waiting during peak hours and on weekends, we strongly recommend reserving your slot in advance via our website or WhatsApp.',
  },
  {
    question: 'Are your services suitable for both men and women?',
    answer: 'Yes, Glow Studio is a modern unisex salon. We have dedicated experts for gentlemen\'s grooming, beard styling, hair care, as well as women\'s styling, skin rituals, and bridal services.',
  },
  {
    question: 'Which beauty and hair brands do you use?',
    answer: 'We exclusively utilize authentic, certified international and clinical products including L\'Oréal Professionnel, Olaplex, Cheryl\'s Cosmeceuticals, O.P.I., and premium bridal cosmetic lines.',
  },
  {
    question: 'How do I book a bridal trial or consultation?',
    answer: 'You can submit an appointment request choosing "Bridal Makeup" or contact us directly on WhatsApp. We schedule a personalized 30-minute bridal consultation to discuss outfits, skin preparation, and look preferences.',
  },
];
