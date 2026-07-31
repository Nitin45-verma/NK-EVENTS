import React, { useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Image as ImageIcon, Sparkles, Star, ChevronDown, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { businessInfo } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const titleRef = useRef(null);

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

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Parallax scroll effect on Hero Background Image (Only on desktop for performance)
      if (!isMobile && heroBgRef.current && heroRef.current) {
        gsap.to(heroBgRef.current, {
          yPercent: 22,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background Image with GSAP Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={heroBgRef}
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=80&w=1200"
          srcSet="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=75&w=768 768w, https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=80&w=1200 1200w, https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&fm=webp&q=80&w=1920 1920w"
          sizes="100vw"
          alt="NK Events Wedding Stage Background"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-transform duration-10000 ease-linear"
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
          <motion.div variants={itemVariants} className="mb-3 sm:mb-4 max-w-full px-2">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-maroon-900/80 border border-gold-500/40 backdrop-blur-md animate-glow-border shadow-[0_0_20px_rgba(212,175,55,0.25)]">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 animate-spin-slow shrink-0" />
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-normal sm:tracking-wider text-gold-300 uppercase truncate">
                Premier Event &amp; Mandap Decorators
              </span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 animate-spin-slow shrink-0" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-gold-gradient drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] my-1 sm:my-2 uppercase"
          >
            NK Events
            <span className="sr-only"> - Wedding &amp; Event Decoration</span>
          </motion.h1>

          {/* Hindi Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-4xl md:text-5xl font-hindi font-bold text-slate-100 tracking-wide mt-1 sm:mt-2 mb-3 sm:mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            "{businessInfo.tagline}"
          </motion.p>

          {/* Subheading text — Hindi */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-lg md:text-2xl text-slate-100 font-hindi font-semibold max-w-3xl mb-6 sm:mb-8 leading-relaxed text-center px-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            शादी, पार्टी एवं सभी प्रकार के शुभ अवसरों की शाही सजावट के लिए संपर्क करें।
          </motion.p>

          {/* Call to Action Buttons — responsive stack on mobile, row on tablet/desktop */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none px-4"
          >
            {/* Primary Call Button */}
            <a
              href={`tel:${businessInfo.phones[0]}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wider transition-all duration-300 animate-gold-pulse hover:scale-105 active:scale-95 group"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-gold-500/80 bg-black/50 hover:bg-gold-500/20 text-gold-300 font-bold text-sm sm:text-base md:text-lg tracking-wider backdrop-blur-md transition-all duration-300 hover:border-gold-400 hover:scale-105 active:scale-95 group"
            >
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 group-hover:scale-110 transition-transform shrink-0" />
              <span>View Gallery</span>
            </a>
          </motion.div>

          {/* Highlights Pills — responsive grid: 1 col on small mobile, 3 cols on tablet+ */}
          <motion.div
            variants={itemVariants}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-3xl px-4"
          >
            {businessInfo.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-black/60 border border-gold-500/20 backdrop-blur-sm animate-float-slow"
                style={{ animationDelay: `${idx * 0.8}s` }}
              >
                <Star className="w-4 h-4 text-gold-400 fill-gold-400 shrink-0" />
                <span className="text-xs sm:text-sm font-hindi font-medium text-slate-200 leading-tight text-center">
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

