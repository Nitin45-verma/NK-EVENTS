import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import { Sparkles, Crown } from 'lucide-react';

const SplashScreen = ({ duration = 4500, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock scroll during splash screen
    document.body.style.overflow = 'hidden';

    // Animate progress bar to 100% over the duration
    const intervalTime = 30;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    const timeout = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
      if (onComplete) onComplete();
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
      document.body.style.overflow = 'unset';
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="full-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#060606] via-[#140b08] to-[#060606] text-white overflow-hidden px-4 select-none"
        >
          {/* Ambient Royal Light Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-maroon-900/30 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Floating Gold Sparkle Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: '100vh',
                  opacity: 0,
                  scale: Math.random() * 0.6 + 0.4,
                }}
                animate={{
                  y: '-10vh',
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'easeOut',
                }}
                className="absolute w-2 h-2 rounded-full bg-gold-300 shadow-[0_0_10px_#f5c451]"
              />
            ))}
          </div>

          {/* Main Splash Content Container */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
            
            {/* Top Crown Badge */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <Crown className="w-3.5 h-3.5 text-gold-400 animate-bounce" />
              <span>Royal Event Experience</span>
              <Crown className="w-3.5 h-3.5 text-gold-400 animate-bounce" />
            </motion.div>

            {/* Logo with Outer Rotating Glow Ring */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 18, stiffness: 200, delay: 0.4 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 mb-6 flex items-center justify-center"
            >
              {/* Outer Golden Glow Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/60 animate-spin-slow"></div>
              <div className="absolute -inset-2 rounded-full bg-gold-gradient opacity-20 blur-xl animate-pulse"></div>

              {/* Logo Background Badge */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#0a0a0a] border-2 border-gold-500/50 flex items-center justify-center p-3 shadow-[0_0_35px_rgba(212,175,55,0.5)]">
                <img
                  src={logoImg}
                  alt="NK Events Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(212,175,55,0.7)] animate-pulse-slow"
                />
              </div>
            </motion.div>

            {/* Welcome Heading Text */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-4xl font-serif font-black tracking-wider text-gold-gradient uppercase drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
                WELCOME TO NK EVENTS
              </h1>

              <p className="text-base sm:text-xl font-hindi font-bold text-slate-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                NK Events में आपका हार्दिक स्वागत है ✨
              </p>

              <p className="text-xs sm:text-sm font-mono text-gold-400/90 tracking-widest uppercase mt-1">
                Jaipur's Premier Wedding &amp; Event Decorators
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="w-full mt-8 max-w-xs space-y-2"
            >
              <div className="h-1.5 w-full bg-black/60 rounded-full border border-gold-500/30 p-0.5 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gold-gradient rounded-full shadow-[0_0_15px_#f5c451]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-gold-400/70">
                <span>Loading Luxury Experience...</span>
                <span>{Math.round(Math.min(progress, 100))}%</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
