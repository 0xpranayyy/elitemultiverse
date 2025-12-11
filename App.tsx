import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiAdvisor from './components/AiAdvisor';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-elite-black min-h-screen text-white selection:bg-elite-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AiAdvisor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;