import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, Maximize2, PhoneCall, ExternalLink } from 'lucide-react';
import { galleryItems, businessInfo } from '../data/content';

const categories = ["All", "Lights", "Flowers", "DJ", "Stage", "Dulhan Entry"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#120a08] to-[#0a0a0a] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>फोटो गैलरी (Our Work Showcase)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-hindi font-bold text-gold-gradient leading-tight py-1"
          >
            हमारे द्वारा की गई सजावट की झलकियां
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base font-hindi mt-3"
          >
            Real photos of stage decoration for wedding, mandap, lights, DJ service & entry gate decor — all by NK Events, Jaipur.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-black bg-gold-gradient shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                    : 'text-slate-300 bg-black/50 border border-gold-500/20 hover:border-gold-500/50 hover:text-gold-300'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with Framer Motion layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-[#120a08] border border-gold-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:border-gold-400"
                onClick={() => setLightboxImage(item)}
              >
                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                  {/* Top Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 border border-gold-500/30 text-[11px] font-mono text-gold-300 tracking-wider">
                    {item.category}
                  </div>

                  {/* Expand Overlay Icon */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 border border-gold-500/30 text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-sans mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative z-10 max-w-4xl w-full bg-[#120a08] border-2 border-gold-500/50 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                  <img
                  src={lightboxImage.image}
                  alt={lightboxImage.alt || lightboxImage.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain max-h-[75vh]"
                />
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/75 text-gold-400 hover:bg-gold-500/30 border border-gold-500/40 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer */}
              <div className="p-6 bg-[#0a0a0a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gold-500/20">
                <div>
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">
                    {lightboxImage.category} Decor
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    {lightboxImage.desc}
                  </p>
                </div>

                <a
                  href={`tel:${businessInfo.phones[0]}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-lg hover:scale-105 transition-transform shrink-0"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Similar Decor</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
