import React, { useState } from 'react';
import { Bot, Send, Sparkles, MessageSquare } from 'lucide-react';
import { getStrategicAdvice } from '../services/geminiService';

const AiAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setOutput(null);

    const result = await getStrategicAdvice(input);
    setOutput(result);
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-24 bg-elite-dark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-elite-primary/5 rounded-l-full"></div>
        
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 text-elite-primary font-bold tracking-widest uppercase mb-4">
              <Sparkles size={18} /> Smart Assistant
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Need Product Advice?</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our AI specialist is here to help. Ask about the health benefits of our dry fruits, sizing for garments, or how our bio-magnetic bracelets work.
            </p>
            
            <div className="p-6 bg-elite-black/50 rounded-xl border border-white/10 backdrop-blur-sm">
                <h4 className="text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2">
                    <MessageSquare size={16} className="text-elite-accent"/> POPULAR QUERIES
                </h4>
                <div className="space-y-3">
                    <button onClick={() => setInput("What are the benefits of bio-magnetic bracelets?")} className="w-full text-left text-xs text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded transition-colors">
                        "Benefits of bio-magnetic bracelets?"
                    </button>
                    <button onClick={() => setInput("Which dry fruits are good for heart health?")} className="w-full text-left text-xs text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded transition-colors">
                        "Best dry fruits for heart health?"
                    </button>
                    <button onClick={() => setInput("Tell me about your latest garment collection.")} className="w-full text-left text-xs text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded transition-colors">
                        "Latest garment trends?"
                    </button>
                </div>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-elite-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
                {/* Header */}
                <div className="bg-elite-primary/10 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-elite-primary to-elite-secondary flex items-center justify-center">
                            <Bot size={20} className="text-white"/>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm">Elite Assistant</h3>
                            <p className="text-xs text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Online
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-elite-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <Bot size={16} className="text-elite-primary"/>
                        </div>
                        <div className="bg-gray-800/50 p-4 rounded-2xl rounded-tl-none border border-white/5 text-gray-300 text-sm leading-relaxed">
                            <p>Hello! I can help you find the perfect product today. Are you interested in our premium dry fruits, wellness bracelets, or fashion collection?</p>
                        </div>
                    </div>

                    {output && (
                        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="w-8 h-8 rounded-full bg-elite-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <Sparkles size={16} className="text-elite-accent"/>
                            </div>
                            <div className="bg-elite-accent/10 p-4 rounded-2xl rounded-tl-none border border-elite-accent/20 text-emerald-50 text-sm leading-relaxed">
                                <div dangerouslySetInnerHTML={{ __html: output.replace(/\*\*(.*?)\*\*/g, '<strong class="text-elite-accent">$1</strong>').replace(/\n/g, '<br/>') }} />
                            </div>
                        </div>
                    )}

                    {loading && (
                        <div className="flex gap-4">
                             <div className="w-8 h-8 rounded-full bg-elite-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                                <ActivityLoader />
                            </div>
                            <div className="bg-gray-800/50 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 text-gray-500 text-sm">
                                <span className="animate-pulse">Thinking...</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <form onSubmit={handleAnalyze} className="p-4 bg-gray-900 border-t border-white/10">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question here..."
                            className="w-full bg-elite-dark text-white pl-4 pr-12 py-3 rounded-full border border-white/10 focus:border-elite-accent focus:ring-1 focus:ring-elite-accent focus:outline-none transition-all text-sm"
                            disabled={loading}
                        />
                        <button 
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-elite-primary hover:bg-elite-secondary text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ActivityLoader = () => (
    <svg className="animate-spin h-4 w-4 text-elite-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export default AiAdvisor;