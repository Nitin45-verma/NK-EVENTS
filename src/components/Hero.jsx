import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Phone, Image as ImageIcon, Sparkles, Star, ChevronDown, Award } from 'lucide-react';
import { businessInfo } from '../data/content';

const Hero = () => {
  // Fewer particles on mobile for better performance
  const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : 30;

  // Generate random particles for stage lighting sparkle effect
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 4,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, [particleCount]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with Dark & Maroon Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=80&w=1200"
          srcSet="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=75&w=768 768w, https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=80&w=1200 1200w, https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=80&w=1920 1920w"
          sizes="100vw"
          alt="NK Events Wedding Stage Background"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-transform duration-10000 ease-linear animate-pulse-slow"
        />
        {/* Radial Dark Maroon & Black Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,14,46,0.45)_0%,rgba(10,10,10,0.95)_75%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Sparkle / Particle Background System */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: '-20vh',
              opacity: [0, p.opacity, 0],
              x: [`${p.left}%`, `${p.left + (p.id % 2 === 0 ? 3 : -3)}%`],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'linear',
            }}
            style={{
              position: 'absolute',
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              backgroundColor: p.id % 3 === 0 ? '#fff3a1' : '#d4af37',
              boxShadow: `0 0 ${p.size * 3}px ${p.id % 3 === 0 ? '#f5c451' : '#d4af37'}`,
            }}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/80 border border-gold-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
              <span className="text-xs md:text-sm font-semibold tracking-wider text-gold-300 uppercase">
                Premier Event &amp; Mandap Decorators
              </span>
              <Sparkles className="w-4 h-4 text-gold-400 animate-spin-slow" />
            </div>
          </motion.div>

          {/* Main Title — uppercase, responsive sizes */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-gold-gradient drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] my-2 uppercase"
          >
            NK Events
            <span className="sr-only"> - Wedding &amp; Event Decoration</span>
          </motion.h1>

          {/* Hindi Tagline — decorative, not a heading */}
          <motion.p
            variants={itemVariants}
            className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-hindi font-bold text-slate-100 tracking-wide mt-2 mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            "{businessInfo.tagline}"
          </motion.p>

          {/* Subheading text — Hindi */}
          <motion.p
            variants={itemVariants}
            className="text-sm xs:text-base sm:text-xl md:text-2xl text-slate-100 font-hindi font-semibold max-w-3xl mb-8 leading-relaxed text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            शादी, पार्टी एवं सभी प्रकार के शुभ अवसरों की शाही सजावट के लिए संपर्क करें।
          </motion.p>

          {/* Call to Action Buttons — always side-by-side */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-center gap-3 sm:gap-4 w-full"
          >
            {/* Primary Call Button */}
            <a
              href={`tel:${businessInfo.phones[0]}`}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-xs sm:text-base md:text-lg uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:shadow-[0_0_45px_rgba(245,196,81,0.9)] hover:scale-105 active:scale-95 group whitespace-nowrap"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:animate-bounce shrink-0" />
              <span>Call Now 📞 {businessInfo.phones[0]}</span>
            </a>

            {/* View Gallery Button */}
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-gold-500/80 bg-black/50 hover:bg-gold-500/20 text-gold-300 font-bold text-xs sm:text-base md:text-lg tracking-wider backdrop-blur-md transition-all duration-300 hover:border-gold-400 hover:scale-105 active:scale-95 group whitespace-nowrap"
            >
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 group-hover:scale-110 transition-transform shrink-0" />
              <span>View Gallery</span>
            </a>
          </motion.div>

          {/* Highlights Pills — always 3 columns */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-3xl"
          >
            {businessInfo.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2.5 rounded-2xl bg-black/60 border border-gold-500/20 backdrop-blur-sm"
              >
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 fill-gold-400 shrink-0" />
                <span className="text-[11px] sm:text-sm font-hindi font-medium text-slate-200 leading-tight text-center">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] tracking-widest uppercase text-gold-400/80 font-mono mb-1">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gold-400" />
      </motion.div>
    </section>
  );
};

export default Hero;

