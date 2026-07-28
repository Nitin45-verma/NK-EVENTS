import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans selection:bg-gold-500 selection:text-black relative">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>

      {/* Royal Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}

export default App;
