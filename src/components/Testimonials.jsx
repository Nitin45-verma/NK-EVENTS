import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../data/content';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#120a08] to-[#0a0a0a] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-maroon-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>ग्राहकों के अनुभव (Client Testimonials)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-hindi font-bold text-gold-gradient leading-tight py-1"
          >
            हमारे ग्राहकों के विचार
          </motion.h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full rounded-3xl p-8 sm:p-12 bg-[#120a08] border-2 border-gold-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative"
            >
              {/* Gold Quote Icon Watermark */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-gold-500/10 rotate-180 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                ))}
              </div>

              {/* Testimonial Quote Text */}
              <blockquote className="text-slate-200 text-base sm:text-xl font-hindi leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].review}"
              </blockquote>

              {/* Customer Author Line */}
              <div className="flex items-center justify-between pt-6 border-t border-gold-500/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient p-0.5 shadow-md">
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-gold-400 font-bold font-serif text-lg">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-serif font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <span className="text-xs text-gold-300/80 font-sans block">
                      {testimonials[currentIndex].event}
                    </span>
                  </div>
                </div>

                <span className="text-xs text-slate-400 font-mono hidden sm:block">
                  {testimonials[currentIndex].date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Dots & Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.6)]' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-black/60 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-black/60 border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
