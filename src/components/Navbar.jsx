import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { businessInfo } from '../data/content';

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight check
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="focus:outline-none">
            <Logo />
          </a>

          {/* Desktop Menu Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-gold-500/20">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive ? 'text-gold-400 font-semibold' : 'text-slate-300 hover:text-gold-300'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gold-500/15 rounded-full border border-gold-500/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right CTA Call Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${businessInfo.phones[0]}`}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gold-gradient hover:bg-gold-gradient-hover transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,196,81,0.7)] hover:scale-105 active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
              <span>Call Now: {businessInfo.phones[0]}</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${businessInfo.phones[0]}`}
              className="p-2 rounded-full bg-gold-gradient text-black font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]"
              aria-label="Call Now"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-gold-500/30 bg-black/60 text-gold-400 focus:outline-none hover:bg-gold-500/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu — rendered outside header to avoid z-index clipping */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Full-screen dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[90] md:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-gradient-to-b from-[#18050d] via-[#0a0a0a] to-[#120a08] border-l border-gold-500/30 z-[100] p-6 flex flex-col justify-between shadow-2xl md:hidden overflow-y-auto"
            >
              <div>
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-gold-500/20">
                  <Logo size="normal" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-gold-400 rounded-lg border border-gold-500/30 bg-black/40 hover:bg-gold-500/20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="mt-6 flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group flex items-center justify-between px-4 py-3 rounded-xl border border-transparent hover:border-gold-500/30 hover:bg-gold-500/10 text-slate-200 hover:text-gold-300 font-medium transition-all"
                    >
                      <span className="font-serif text-lg">{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-gold-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer CTA */}
              <div className="pt-6 border-t border-gold-500/20 flex flex-col gap-3">
                <div className="text-center text-xs text-gold-300/80 font-hindi">
                  "{businessInfo.tagline}"
                </div>
                <a
                  href={`tel:${businessInfo.phones[0]}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-gradient font-bold text-black text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {businessInfo.phones[0]}</span>
                </a>
                <a
                  href={`tel:${businessInfo.phones[1]}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gold-500/40 bg-black/60 text-gold-300 text-xs font-semibold"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Alt Phone: {businessInfo.phones[1]}</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
