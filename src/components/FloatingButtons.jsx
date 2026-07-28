import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/content';

const FloatingButtons = () => {
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=Hello%20NK%20Events,%20I%20want%20to%20inquire%20about%20event%20decoration!`;

  return (
    <>
      {/* Floating WhatsApp Button (Bottom-Right, All Screen Sizes) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 sm:bottom-8 right-6 z-40 p-4 rounded-full bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.7)] flex items-center justify-center group cursor-pointer border border-emerald-300/40"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping pointer-events-none"></span>

        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 group-hover:rotate-12 transition-transform" />

        {/* Tooltip on Hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-black/80 text-emerald-300 text-xs font-semibold whitespace-nowrap border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Floating Mobile Sticky Action Bar (Call Now & WhatsApp) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 border-t border-gold-500/30 backdrop-blur-lg p-2.5 flex items-center gap-2 sm:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        <a
          href={`tel:${businessInfo.phones[0]}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gold-gradient text-black font-extrabold text-sm uppercase tracking-wider shadow-md active:scale-95 transition-transform"
        >
          <PhoneCall className="w-4 h-4 text-black" />
          <span>Call 8003139079</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-3 rounded-xl bg-emerald-600 text-white shadow-md active:scale-95 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
