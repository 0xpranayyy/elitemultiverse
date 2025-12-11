import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1920&auto=format&fit=crop", // Lifestyle shop
    subtitle: "PREMIUM LIFESTYLE COLLECTION",
    title: "ELEVATE YOUR",
    highlight: "EVERYDAY LIFE",
    description: "From the finest organic dry fruits to therapeutic bio-magnetic wear and trending fashion. Elite Multiverse brings premium quality directly to you."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596524430615-b46476ddff6e?q=80&w=1920&auto=format&fit=crop", // Dry Fruits
    subtitle: "NATURE'S FINEST NUTRITION",
    title: "PREMIUM",
    highlight: "DRY FRUITS",
    description: "Hand-picked almonds, cashews, and walnuts sourced from the best farms globally to ensure nutrition in every bite."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1920&auto=format&fit=crop", // Jewellery/Wellness
    subtitle: "WELLNESS & BALANCE",
    title: "BIO-MAGNETIC",
    highlight: "THERAPY",
    description: "Discover our exclusive range of bio-magnetic bracelets designed to restore energy balance, improve circulation, and enhance your well-being."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&auto=format&fit=crop", // Fashion
    subtitle: "TRENDING FASHION",
    title: "MODERN",
    highlight: "GARMENTS",
    description: "Step out in style with our latest collection of high-quality garments tailored for comfort, durability, and elegance."
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-elite-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10000ms] ease-linear"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? 'scale(110%)' : 'scale(100%)'
            }}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-elite-black/90 via-elite-black/70 to-elite-dark/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="max-w-3xl">
          <div key={`sub-${currentSlide}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-elite-accent text-sm font-semibold mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star size={16} fill="currentColor" /> {slides[currentSlide].subtitle}
          </div>
          
          <h1 key={`title-${currentSlide}`} className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {slides[currentSlide].title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-elite-accent to-elite-secondary">
              {slides[currentSlide].highlight}
            </span>
          </h1>
          
          <p key={`desc-${currentSlide}`} className="mt-4 max-w-xl text-xl text-gray-300 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a href="#products" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-elite-primary rounded-lg hover:bg-elite-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-elite-primary shadow-lg shadow-elite-primary/30">
              BROWSE COLLECTION
              <ArrowRight className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#ai-advisor" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-gray-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white backdrop-blur-sm">
              ASK AN EXPERT
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-elite-accent w-8' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white/50 hover:bg-black/40 hover:text-white backdrop-blur-sm transition-all hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 text-white/50 hover:bg-black/40 hover:text-white backdrop-blur-sm transition-all hidden md:block"
      >
        <ChevronRight size={32} />
      </button>
    </section>
  );
};

export default Hero;