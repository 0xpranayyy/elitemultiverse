import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'AI Assistant', href: '#ai-advisor' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-elite-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* Custom Logo SVG */}
            <svg className="h-10 w-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left Part - Blue */}
              <path d="M50 92L15 45V10L50 45Z" fill="#3b82f6" /> 
              {/* Right Part - Gold */}
              <path d="M50 92L85 45V10L50 45Z" fill="#eab308" />
            </svg>
            <div className="flex flex-col justify-center">
              <span className="text-lg font-serif font-bold tracking-widest text-white leading-none">
                ELITE
              </span>
              <span className="text-[0.6rem] font-sans font-bold tracking-[0.3em] text-gray-400 uppercase leading-none mt-1">
                MULTIVERSE
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-elite-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-elite-primary hover:bg-elite-secondary text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center gap-2">
                <ShoppingBag size={16} /> SHOP NOW
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-elite-dark border-b border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-elite-accent block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;