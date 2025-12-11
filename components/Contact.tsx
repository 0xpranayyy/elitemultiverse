import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-elite-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Initiate Protocol</h2>
            <p className="text-gray-400 mb-12 text-lg">
              Ready to transcend traditional market boundaries? Our specialists are standing by on secure channels.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-elite-dark border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-elite-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Encrypted Comms</h4>
                  <p className="text-gray-400">secure@elite-multiverse.io</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-elite-dark border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-elite-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Direct Line</h4>
                  <p className="text-gray-400">+1 (888) ELITE-AI</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-elite-dark border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Global HQ</h4>
                  <p className="text-gray-400">Sector 7, Neo-Tokyo District<br/>Metropolis Prime</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-elite-dark p-8 rounded-3xl border border-white/5 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Identifier</label>
                  <input type="text" id="name" className="w-full bg-elite-black border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-elite-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Digital Address</label>
                  <input type="email" id="email" className="w-full bg-elite-black border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-elite-primary focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject Directive</label>
                <select id="subject" className="w-full bg-elite-black border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-elite-primary focus:border-transparent outline-none transition-all">
                  <option>Strategic Partnership</option>
                  <option>Investment Inquiry</option>
                  <option>Technological Integration</option>
                  <option>Media Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Transmission Data</label>
                <textarea id="message" rows={4} className="w-full bg-elite-black border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-elite-primary focus:border-transparent outline-none transition-all" placeholder="Brief us on your requirements..."></textarea>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-elite-primary to-elite-secondary hover:from-elite-secondary hover:to-elite-primary text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                TRANSMIT DATA
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;