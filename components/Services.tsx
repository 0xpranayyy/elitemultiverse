import React from 'react';
import { ShoppingBasket, Cherry, Activity, Shirt, Zap, Leaf, ArrowUpRight } from 'lucide-react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?auto=format&fit=crop&q=80&w=800",
    icon: <Cherry className="w-5 h-5 text-white" />,
    color: "bg-red-500",
    title: 'Premium Dry Fruits',
    description: 'Hand-picked almonds, cashews, pistachios, and more. Rich in nutrients and perfect for a healthy lifestyle.'
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
    icon: <Activity className="w-5 h-5 text-white" />,
    color: "bg-elite-accent",
    title: 'Bio-Magnetic Bracelets',
    description: 'Therapeutic wellness wear designed to improve circulation and energy balance while looking stylish.'
  },
  {
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800",
    icon: <Shirt className="w-5 h-5 text-white" />,
    color: "bg-purple-500",
    title: 'Fashion Garments',
    description: 'Trendy and comfortable apparel for all ages. Crafted with quality fabrics for modern living.'
  },
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    icon: <ShoppingBasket className="w-5 h-5 text-white" />,
    color: "bg-yellow-500",
    title: 'FMCG Essentials',
    description: 'Fast-moving consumer goods that meet international quality standards for your daily household needs.'
  },
  {
    image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=800",
    icon: <Leaf className="w-5 h-5 text-white" />,
    color: "bg-green-500",
    title: 'Organic Selections',
    description: 'Naturally sourced products free from artificial preservatives, ensuring you get pure goodness.'
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    icon: <Zap className="w-5 h-5 text-white" />,
    color: "bg-blue-500",
    title: 'Wellness Technology',
    description: 'Innovative products like our magnetic therapy range that combine science with daily utility.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-elite-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-elite-accent font-bold tracking-widest uppercase mb-2">Our Catalogue</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Quality You Can Trust</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl bg-elite-dark border border-white/10 overflow-hidden hover:border-elite-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-elite-dark to-transparent opacity-60 z-10"></div>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Icon Badge */}
                <div className={`absolute bottom-4 left-4 z-20 ${product.color} p-3 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-elite-accent transition-colors flex items-center justify-between">
                  {product.title}
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-elite-accent opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 -translate-y-1" />
                </h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-semibold text-elite-accent tracking-wider uppercase">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;