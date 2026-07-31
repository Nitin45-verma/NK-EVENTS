import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, X, Sparkles, Loader2, Film, PhoneCall, Volume2 } from 'lucide-react';
import { businessInfo } from '../data/content';

const videoHighlightsData = [
  {
    id: 'highlight-1',
    title: 'शाही स्टेज एवं लाइट्स डेकोरेशन',
    titleEng: 'Royal Stage & Lighting Highlights',
    category: 'Stage & Lights',
    src: '/videos/highlight-1.mp4',
    desc: 'रॉयल वेडिंग स्टेज, वार्म एंबियंट लाइटिंग और ग्रैंड बैकड्रॉप सेटअप की मनमोहक झलक।'
  },
  {
    id: 'highlight-2',
    title: 'दुल्हन एंट्री एवं फूलों की चादर',
    titleEng: 'Grand Bridal Entry & Floral Canopy',
    category: 'Dulhan Entry',
    src: '/videos/highlight-2.mp4',
    desc: 'शाही दुल्हन एंट्री, फूलों की चादर, और कोल्ड पायरो स्पार्कल के साथ यादगार पल।'
  },
  {
    id: 'highlight-4',
    title: 'डीजे साउंड एवं संगीत नाइट',
    titleEng: 'High-Energy DJ & Sangeet Night',
    category: 'DJ & Sound',
    src: '/videos/highlight-4.mp4',
    desc: 'पावरफुल साउंड सिस्टम, लेजर बीम और फॉग इफेक्ट के साथ संगीतमय शाम।'
  }
];

const VideoHighlights = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isBuffering, setIsBuffering] = useState(true);
  const sectionRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Lazy load video elements only when section scrolls into view
  const isInView = useInView(sectionRef, { once: true, margin: "200px 0px" });

  // Handle body scroll lock and escape key to close modal
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      setIsBuffering(true);

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleCloseModal();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activeVideo]);

  const handleOpenModal = (video) => {
    setActiveVideo(video);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setActiveVideo(null);
  };

  // Grid container stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="highlights"
      className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#140a0c] to-[#0a0a0a] overflow-hidden border-t border-b border-gold-500/10"
    >
      {/* Background Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#6b1140]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Film className="w-3.5 h-3.5" />
            <span>इवेंट्स वीडियो | Event Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-hindi font-bold text-gold-gradient leading-tight py-1"
          >
            हमारे इवेंट्स की झलक
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base font-sans mt-3 max-w-2xl mx-auto"
          >
            Watch how we transform your special day with royal decoration, enchanting lighting, and unforgettable celebrations.
          </motion.p>
        </div>

        {/* Responsive 3-Column Grid / Stacked Mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {videoHighlightsData.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleOpenModal(video)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#120a08] border border-gold-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] cursor-pointer hover:border-gold-400 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Container - Standard H.264 Video Preview */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black flex items-center justify-center">
                {isInView ? (
                  <video
                    src={`${video.src}#t=0.001`}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100 pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-full bg-[#181110] animate-pulse flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-gold-500/40 animate-spin" />
                  </div>
                )}

                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                {/* Top Left Category Pill */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/75 border border-gold-500/40 text-[11px] font-mono text-gold-300 tracking-wider backdrop-blur-md shadow-md">
                  {video.category}
                </div>

                {/* Top Right HD Badge */}
                <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-gold-500/20 border border-gold-500/40 text-[10px] font-bold text-gold-300 backdrop-blur-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-gold-400" />
                  <span>HIGHLIGHT</span>
                </div>

                {/* Centered Glowing Gold Circular Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      boxShadow: [
                        "0 0 20px rgba(212, 175, 55, 0.4)",
                        "0 0 40px rgba(245, 196, 81, 0.8)",
                        "0 0 20px rgba(212, 175, 55, 0.4)"
                      ]
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f5c451] to-[#fff3a1] p-[2px] shadow-[0_0_25px_rgba(212,175,55,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(245,196,81,0.95)] transition-transform duration-300"
                  >
                    <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/60 transition-colors">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-gold-400 fill-gold-400 translate-x-0.5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 sm:p-6 bg-[#0e0706] border-t border-gold-500/20 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-hindi font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gold-400/80 font-mono mt-0.5 tracking-wide">
                    {video.titleEng}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2.5 line-clamp-2 leading-relaxed">
                    {video.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold-500/10 flex items-center justify-between text-xs text-gold-400/90 font-medium">
                  <span className="inline-flex items-center gap-1.5 group-hover:text-gold-300 transition-colors">
                    <Play className="w-3.5 h-3.5 fill-gold-400" /> Click to Play Video
                  </span>
                  <span className="text-slate-400 text-[11px]">Full HD • Sound ON</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full-screen Click-to-Play Modal / Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="video-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-md overflow-y-auto"
          >
            {/* Modal Card Box */}
            <motion.div
              key="video-modal-content"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#120a08] border-2 border-gold-500/60 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.4)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1a0c0a] via-[#120a08] to-[#1a0c0a] border-b border-gold-500/20 flex items-center justify-between gap-4 z-10">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-hindi font-bold text-white truncate">
                      {activeVideo.title}
                    </h3>
                    <p className="text-xs text-gold-400/80 font-mono truncate">
                      {activeVideo.titleEng}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-[11px] font-mono text-gold-300">
                    <Volume2 className="w-3.5 h-3.5 text-gold-400" />
                    <span>Sound ON</span>
                  </div>

                  <button
                    onClick={handleCloseModal}
                    title="Close Video"
                    aria-label="Close Video"
                    className="p-2.5 rounded-full bg-black/80 text-gold-400 hover:text-white hover:bg-gold-500/30 border border-gold-500/40 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Video Player Container — Responsive H.264 Video View */}
              <div className="relative w-full max-h-[75vh] sm:max-h-[80vh] bg-black flex items-center justify-center overflow-hidden p-1">
                {/* Buffering Loading Spinner Overlay */}
                {isBuffering && (
                  <div className="absolute inset-0 z-20 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
                    <div className="relative flex items-center justify-center mb-3">
                      <div className="w-14 h-14 rounded-full border-2 border-gold-500/20 animate-ping absolute" />
                      <Loader2 className="w-10 h-10 text-gold-400 animate-spin relative z-10" />
                    </div>
                    <span className="text-sm font-hindi text-gold-300 font-medium">
                      वीडियो लोड हो रहा है... (Loading Video)
                    </span>
                  </div>
                )}

                <video
                  ref={modalVideoRef}
                  src={activeVideo.src}
                  autoPlay
                  controls
                  playsInline
                  preload="metadata"
                  className="w-auto h-auto max-w-full max-h-[70vh] sm:max-h-[76vh] object-contain rounded-lg shadow-2xl mx-auto"
                  onWaiting={() => setIsBuffering(true)}
                  onLoadStart={() => setIsBuffering(true)}
                  onCanPlay={() => setIsBuffering(false)}
                  onPlaying={() => setIsBuffering(false)}
                  onSeeked={() => setIsBuffering(false)}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-[#0a0a0a] border-t border-gold-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="text-[11px] font-mono text-gold-400 uppercase tracking-widest block mb-1">
                    {activeVideo.category} Highlight
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {activeVideo.desc}
                  </p>
                </div>

                <a
                  href={`tel:${businessInfo.phones[0]}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(245,196,81,0.7)] hover:scale-105 active:scale-95 transition-all shrink-0 w-full sm:w-auto text-center"
                >
                  <PhoneCall className="w-4 h-4 text-black" />
                  <span>Book Event Now</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoHighlights;
