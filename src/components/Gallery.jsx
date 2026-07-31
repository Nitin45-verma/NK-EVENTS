import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Sparkles, X, Maximize2, PhoneCall, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryItems, businessInfo } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Lights", "Flowers", "DJ", "Stage", "Dulhan Entry"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);

  const gallerySectionRef = useRef(null);
  const galleryBgGlowRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      if (!isMobile && galleryBgGlowRef.current && gallerySectionRef.current) {
        gsap.to(galleryBgGlowRef.current, {
          yPercent: 35,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: gallerySectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, gallerySectionRef);

    return () => ctx.revert();
  }, []);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (item) => {
    setZoomScale(1);
    setLightboxImage(item);
  };

  const handleCloseLightbox = () => {
    setZoomScale(1);
    setLightboxImage(null);
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.min(prev + 0.4, 2.5));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.max(prev - 0.4, 1));
  };

  const handleResetZoom = (e) => {
    e.stopPropagation();
    setZoomScale(1);
  };

  return (
    <section ref={gallerySectionRef} id="gallery" className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#120a08] to-[#0a0a0a] overflow-hidden">
      {/* Background Decorative Glow with GSAP Parallax */}
      <div ref={galleryBgGlowRef} className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

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
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-[#120a08] border border-gold-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer hover:border-gold-400 hover:shadow-[0_15px_35px_rgba(212,175,55,0.3)] transition-all"
                onClick={() => handleOpenLightbox(item)}
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

      {/* Lightbox Modal with Spring Zoom In / Zoom Out */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            key="lightbox-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div
              onClick={handleCloseLightbox}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Modal Content with Spring Zoom In & Out */}
            <motion.div
              key="lightbox-modal-card"
              initial={{ scale: 0.3, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.3, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              className="relative z-10 max-w-4xl w-full bg-[#120a08] border-2 border-gold-500/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.35)] flex flex-col"
            >
              {/* Top Controls Toolbar */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={handleZoomIn}
                  title="Zoom In"
                  className="p-2.5 rounded-full bg-black/80 text-gold-300 hover:bg-gold-500/30 hover:text-white border border-gold-500/40 backdrop-blur-md transition-all active:scale-90"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={handleZoomOut}
                  title="Zoom Out"
                  className="p-2.5 rounded-full bg-black/80 text-gold-300 hover:bg-gold-500/30 hover:text-white border border-gold-500/40 backdrop-blur-md transition-all active:scale-90"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                {zoomScale > 1 && (
                  <button
                    onClick={handleResetZoom}
                    title="Reset Zoom"
                    className="p-2.5 rounded-full bg-black/80 text-gold-300 hover:bg-gold-500/30 hover:text-white border border-gold-500/40 backdrop-blur-md transition-all active:scale-90"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                )}
                <button
                  onClick={handleCloseLightbox}
                  title="Close"
                  className="p-2.5 rounded-full bg-black/80 text-gold-400 hover:bg-gold-500/30 hover:text-white border border-gold-500/40 backdrop-blur-md transition-all active:scale-90"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Preview Window with Animated Zoom */}
              <div
                onClick={() => setZoomScale((prev) => (prev === 1 ? 1.8 : 1))}
                className="relative max-h-[70vh] min-h-[300px] overflow-hidden bg-black flex items-center justify-center p-4 cursor-zoom-in group select-none"
              >
                <motion.img
                  key={lightboxImage.image}
                  src={lightboxImage.image}
                  alt={lightboxImage.alt || lightboxImage.title}
                  loading="lazy"
                  decoding="async"
                  animate={{ scale: zoomScale }}
                  transition={{ type: "spring", damping: 20, stiffness: 220 }}
                  className="w-full h-full object-contain max-h-[68vh] transition-transform"
                />

                {/* Subtle Click Hint Badge */}
                <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-black/60 border border-gold-500/30 text-[10px] text-gold-300 backdrop-blur-md pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                  {zoomScale > 1 ? `Zoomed ${zoomScale.toFixed(1)}x (Click to Reset)` : 'Click image to Zoom In (+)'}
                </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
