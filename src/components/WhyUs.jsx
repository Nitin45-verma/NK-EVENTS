import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, BadgePercent, ShieldCheck, HeartHandshake, Award } from 'lucide-react';
import { businessInfo } from '../data/content';

const iconMap = {
  Sparkles: Sparkles,
  Clock: Clock,
  BadgePercent: BadgePercent,
};

const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,14,46,0.2)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>हमारी खासियत (Why Choose NK Events)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-hindi font-bold text-gold-gradient leading-tight py-1"
          >
            हम ही क्यों हैं आपकी पहली पसंद?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base font-hindi mt-3"
          >
            "{businessInfo.highlights.map(h => h.title).join(" • ")}"
          </motion.p>
        </div>

        {/* 3 Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessInfo.highlights.map((item, index) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl p-8 bg-gradient-to-b from-[#181110] to-[#0a0a0a] border border-gold-500/30 hover:border-gold-400 flex flex-col items-center text-center transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)]"
              >
                {/* Gold Circular Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 rounded-full bg-gold-gradient p-0.5 shadow-[0_0_25px_rgba(212,175,55,0.4)] mb-6 flex items-center justify-center shrink-0"
                >
                  <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center text-gold-400 group-hover:bg-gold-gradient group-hover:text-black transition-colors duration-300">
                    <IconComp className="w-9 h-9" />
                  </div>
                </motion.div>

                {/* Card Titles */}
                <h3 className="text-2xl font-hindi font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs font-serif text-gold-400/80 uppercase tracking-widest mt-1 mb-3">
                  {item.titleEng}
                </span>

                {/* Description */}
                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom Gold Line Accent */}
                <div className="mt-6 w-12 h-1 bg-gold-500/30 rounded-full group-hover:w-24 group-hover:bg-gold-gradient transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-maroon-gradient border border-gold-500/40 text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(74,14,46,0.5)]"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-4 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-300 shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-hindi font-bold text-white">
                "आपका विश्वास, हमारी पहचान"
              </h4>
              <p className="text-xs sm:text-sm text-gold-200/90 font-sans mt-0.5">
                500 से अधिक सफल इवेंट्स और सैकड़ों संतुष्ट परिवारों का भरोसा ही हमारी ताकत है।
              </p>
            </div>
          </div>

          <a
            href={`tel:${businessInfo.phones[0]}`}
            className="px-8 py-3.5 rounded-full bg-gold-gradient text-black font-bold uppercase text-xs tracking-wider shadow-lg hover:scale-105 transition-transform shrink-0"
          >
            Direct Call to Nitesh Verma
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyUs;
