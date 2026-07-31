import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Crown, CheckCircle2, Award, Phone, UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import { businessInfo } from '../data/content';

// Animated Counter component
const StatCounter = ({ number, suffix, label, sub }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      const stepTime = Math.abs(Math.floor(duration / number));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= number) {
          setCount(number);
          clearInterval(timer);
        }
      }, Math.max(stepTime, 20));

      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-b from-[#181110] to-[#0a0a0a] border border-gold-500/30 hover:border-gold-400 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.3)] glass-shimmer group">
      <div className="font-serif font-black text-4xl sm:text-5xl text-gold-gradient group-hover:scale-110 transition-transform duration-300">
        {count}{suffix}
      </div>
      <div className="text-sm font-hindi font-semibold text-slate-100 mt-2 text-center">
        {label}
      </div>
      <div className="text-[11px] font-sans text-gold-300/70 text-center mt-0.5">
        {sub}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#120a08] to-[#0a0a0a] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-maroon-900/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-widest font-semibold mb-3"
          >
            <Crown className="w-3.5 h-3.5" />
            <span>हमारे बारे में (About NK Events)</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-hindi font-bold text-gold-gradient leading-tight py-1"
          >
            शाही सजावट और अटूट विश्वास का नाम
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base font-hindi mt-3"
          >
            "{businessInfo.brandLine}"
          </motion.p>
        </div>

        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Royal Gold Border & Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-gold-500/40 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&fm=webp&q=80&w=900"
                srcSet="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&fm=webp&q=75&w=600 600w, https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&fm=webp&q=80&w=900 900w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="NK Events mandap and stage decoration for wedding in Jaipur"
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Owner Info Tag overlay inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 border border-gold-500/30 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-xs text-gold-400 font-mono tracking-wider uppercase block">Director & Founder</span>
                  <span className="text-xl font-serif font-bold text-white">{businessInfo.owner}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-black font-bold font-serif text-lg shadow-lg">
                  NV
                </div>
              </div>
            </div>

            {/* Decorative Frame Elements behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/20 rounded-3xl -z-10 hidden sm:block"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-maroon-700/40 rounded-3xl -z-10 hidden sm:block"></div>
          </motion.div>

          {/* Right Column: Description & Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-hindi font-bold text-white leading-tight">
                हर मांगलिक कार्य को यादगार बनाने का हमारा संकल्प
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                NK Events is Jaipur's trusted event planner for wedding decoration, sangeet, engagement & all celebrations. Led by Nitesh Verma, our experienced team delivers stunning results — from lights and flower decor to stage setup and DJ service.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                हम परंपरा और आधुनिकता के अद्भुत संगम के साथ हर मंडप और एंट्री गेट को एक महल का स्वरूप प्रदान करते हैं। समय पर सेवा, पारदर्शी संवाद और हर बजट में प्रीमियम रॉयल लुक देना हमारा लक्ष्य है।
              </p>
            </div>

            {/* Key Features Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "वेडिंग डेकोरेशन इन जयपुर (उचित दरों में)",
                "स्टेज डेकोरेशन फॉर वेडिंग (कस्टम थीम)",
                "DJ सर्विस नीयर मी (Jaipur व आसपास)",
                "पारदर्शी और उचित दरें",
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                  <span className="text-sm font-hindi text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            {/* Owner Direct Contact Pill */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${businessInfo.phones[0]}`}
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-maroon-900 border border-gold-500/40 text-gold-300 font-semibold text-sm hover:bg-maroon-800 transition-all shadow-lg group"
              >
                <Phone className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform" />
                <span>नितेश वर्मा: {businessInfo.phones[0]}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated Counter Grid (Scroll Triggered) */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {businessInfo.stats.map((stat, index) => (
            <StatCounter
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              sub={stat.sub}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
