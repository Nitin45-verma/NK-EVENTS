import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Flower2, Disc3, Crown, DoorOpen, PartyPopper, ArrowRight, Check, PhoneCall, X } from 'lucide-react';
import { services, businessInfo } from '../data/content';

const iconMap = {
  Lightbulb: Lightbulb,
  Flower2: Flower2,
  Disc3: Disc3,
  Crown: Crown,
  DoorOpen: DoorOpen,
  PartyPopper: PartyPopper
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Decorative Overlay */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#120a08] to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(107,17,64,0.15)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>हमारी सेवाएं (Our Exclusive Services)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-hindi font-bold text-gold-gradient leading-tight py-1"
          >
            हर अवसर के लिए शाही डेकोरेशन सेवाएं
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base font-hindi mt-3"
          >
            Wedding decoration in Jaipur — lights, flower decor, stage decoration for wedding, DJ service & entry gate setup for every occasion.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Crown;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl bg-[#120a08] border border-gold-500/30 overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-gold-400 hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)]"
              >
                {/* Top Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120a08] via-transparent to-black/40"></div>

                  {/* Top Badge Icon */}
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-black/75 border border-gold-500/40 text-gold-400 backdrop-blur-md shadow-lg group-hover:bg-gold-gradient group-hover:text-black transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Emoji Tag */}
                  <div className="absolute top-4 right-4 text-2xl bg-black/60 px-3 py-1 rounded-full border border-gold-500/20 backdrop-blur-md">
                    {service.emoji}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-gold-400/80 uppercase tracking-widest">{service.titleHindi}</span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors mt-1">
                      {service.title}
                    </h2>
                    <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mt-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Features Pill list */}
                  <div className="space-y-1.5 pt-2 border-t border-gold-500/10">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 group-hover:text-gold-300 transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={`tel:${businessInfo.phones[0]}`}
                      className="p-2 rounded-xl bg-gold-500/10 hover:bg-gold-gradient hover:text-black text-gold-400 border border-gold-500/30 transition-all duration-300"
                      title="Book Service"
                    >
                      <PhoneCall className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-[#181110] to-[#0a0a0a] border-2 border-gold-500/50 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Banner Image */}
              <div className="relative h-40 sm:h-64 w-full">
                <img src={selectedService.image} alt={selectedService.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181110] via-black/30 to-transparent"></div>
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-gold-400 hover:bg-gold-500/30 border border-gold-500/40"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-mono text-gold-400 uppercase tracking-widest bg-black/60 px-3 py-1 rounded-full border border-gold-500/30">
                    {selectedService.titleHindi}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
                  {selectedService.fullDesc}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-3">Highlights & Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-gold-500/20">
                        <Check className="w-4 h-4 text-gold-400 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gold-500/20 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${businessInfo.phones[0]}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gold-gradient text-black font-bold uppercase tracking-wider text-sm shadow-lg hover:scale-105 transition-transform"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Now ({businessInfo.phones[0]})</span>
                  </a>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=Hello%20NK%20Events,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
                  >
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
