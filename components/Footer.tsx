import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Custom Logo SVG */}
              <svg className="h-10 w-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 92L15 45V10L50 45Z" fill="#3b82f6" /> 
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
            <p className="text-gray-500 max-w-sm mb-6">
              Delivering premium quality FMCG, nutrition, and wellness products directly to your doorstep. Experience the elite standard of living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Products</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-elite-primary transition-colors">Premium Dry Fruits</a></li>
              <li><a href="#" className="hover:text-elite-primary transition-colors">Bio-Magnetic Bracelets</a></li>
              <li><a href="#" className="hover:text-elite-primary transition-colors">Fashion Garments</a></li>
              <li><a href="#" className="hover:text-elite-primary transition-colors">FMCG Essentials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-elite-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-elite-primary transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-elite-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-elite-primary transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Elite Multiverse. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;