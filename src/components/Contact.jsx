import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, Calendar, User, MessageSquare, Send, CheckCircle, Sparkles, MapPin, Clock } from 'lucide-react';
import { InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import { businessInfo } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'Wedding Decoration',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Trigger gold confetti burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f5c451', '#d4af37', '#ffffff', '#4a0e2e']
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Decorative Lighting Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-900/30 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bold Top Banner Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 p-8 sm:p-12 rounded-3xl bg-maroon-gradient border-2 border-gold-500/40 text-center relative overflow-hidden shadow-[0_20px_50px_rgba(74,14,46,0.6)]"
        >
          {/* Subtle Arch SVG Accent Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

          <Sparkles className="w-8 h-8 text-gold-400 mx-auto mb-3 animate-spin-slow" />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-hindi font-bold text-white leading-tight">
            "आपका ख़ास दिन हम बनाएं और भी ख़ास"
          </h2>
          <p className="text-slate-200 text-sm sm:text-base font-sans mt-4 max-w-2xl mx-auto">
            बुक करें बेस्ट वेडिंग, लाइट्स, फ्लावर व डीजे डेकोरेशन। डायरेक्ट संपर्क करें या नीचे फॉर्म भरें।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Quick Contact Cards & Socials (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">
                डायरेक्ट संपर्क जानकारी
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                नितेश वर्मा से सीधा कॉल पर बात करें और अपने इवेंट के लिए बेस्ट कोटेशन प्राप्त करें।
              </p>
            </div>

            {/* Big Clickable Phone Cards */}
            <div className="space-y-4 pt-2">
              {/* Phone Card 1 */}
              <a
                href={`tel:${businessInfo.phones[0]}`}
                className="group flex flex-wrap items-center justify-between gap-3 p-5 rounded-2xl bg-[#120a08] border border-gold-500/30 hover:border-gold-400 hover:bg-gold-500/10 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gold-gradient p-0.5 shadow-md group-hover:scale-110 transition-transform">
                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center text-gold-400">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block">Primary Phone</span>
                    <span className="text-lg sm:text-xl font-bold font-serif text-white group-hover:text-gold-300 transition-colors break-all">
                      {businessInfo.phones[0]}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-bold text-black bg-gold-gradient px-4 py-2 rounded-full uppercase tracking-wider group-hover:scale-105 transition-transform">
                  Call Now
                </span>
              </a>

              {/* Phone Card 2 */}
              <a
                href={`tel:${businessInfo.phones[1]}`}
                className="group flex flex-wrap items-center justify-between gap-3 p-5 rounded-2xl bg-[#120a08] border border-gold-500/30 hover:border-gold-400 hover:bg-gold-500/10 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-maroon-900 border border-gold-500/30 p-0.5 shadow-md group-hover:scale-110 transition-transform flex items-center justify-center text-gold-400">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider block">Alternate Phone</span>
                    <span className="text-lg sm:text-xl font-bold font-serif text-white group-hover:text-gold-300 transition-colors break-all">
                      {businessInfo.phones[1]}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-semibold text-gold-300 border border-gold-500/40 px-4 py-2 rounded-full uppercase tracking-wider group-hover:bg-gold-500/20 transition-all">
                  Call Now
                </span>
              </a>

              {/* Instagram Card */}
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-wrap items-center justify-between gap-3 p-5 rounded-2xl bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-amber-900/40 border border-pink-500/30 hover:border-pink-400 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-md group-hover:scale-110 transition-transform flex items-center justify-center text-white">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono text-pink-300 uppercase tracking-wider block">Follow Us On Instagram</span>
                    <span className="text-sm font-bold font-sans text-white group-hover:text-pink-300 transition-colors break-all">
                      @nk_electrician_149
                    </span>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-semibold text-pink-200 bg-pink-500/20 border border-pink-500/40 px-4 py-2 rounded-full uppercase tracking-wider">
                  Visit Profile
                </span>
              </a>
            </div>

            {/* Decorative Arch Mandap Vector Accent */}
            <div className="pt-6 relative hidden sm:block">
              <div className="p-6 rounded-3xl bg-[#120a08]/80 border border-gold-500/20 text-center">
                <svg className="w-24 h-24 mx-auto text-gold-500/40" viewBox="0 0 100 100" fill="none">
                  <path d="M10 90 L10 50 Q 50 10 90 50 L90 90" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M20 90 L20 50 Q 50 20 80 50 L80 90" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="3 3" />
                  <circle cx="50" cy="18" r="4" fill="currentColor" />
                </svg>
                <span className="text-xs font-hindi text-gold-300/80 block mt-2">
                  "शाही मंडप और जगमगाती सजावट"
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-[#120a08] border-2 border-gold-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative"
          >
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              बुक इनक्वायरी (Inquire For Event Decor)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mb-8">
              अपने कार्यक्रम का विवरण दर्ज करें, हम तुरंत आपसे संपर्क करेंगे।
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-gold-gradient mx-auto flex items-center justify-center text-black shadow-lg">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-hindi font-bold text-white">
                    धन्यवाद! आपकी इनक्वायरी दर्ज कर ली गई है।
                  </h4>
                  <p className="text-sm text-gold-300/90 font-sans max-w-md mx-auto">
                    नितेश वर्मा जी आपकी बुकिंग डिटेल्स के साथ जल्द ही कॉल करेंगे।
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', date: '', service: 'Wedding Decoration', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full border border-gold-500/40 text-gold-300 text-xs font-semibold hover:bg-gold-500/20 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                        आपका नाम (Your Name) *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-black/60 border border-gold-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                        />
                        <User className="w-4 h-4 text-gold-500/60 absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                        मोबाइल नंबर (Phone Number) *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 8003139079"
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-black/60 border border-gold-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                        />
                        <PhoneCall className="w-4 h-4 text-gold-500/60 absolute left-3.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                        कार्यक्रम की तारीख (Event Date)
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 pl-10 rounded-xl bg-black/60 border border-gold-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                        />
                        <Calendar className="w-4 h-4 text-gold-500/60 absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                        सेवा का प्रकार (Service Required)
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-gold-500/30 text-white text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                      >
                        <option value="Wedding Decoration">Wedding & Mandap Decor</option>
                        <option value="Lights Decoration">Lights & Ceiling Canopy</option>
                        <option value="Flower Decoration">Fresh Flower Decor</option>
                        <option value="DJ Sound System">DJ Sound System</option>
                        <option value="Stage Decoration">Stage & Throne Setup</option>
                        <option value="Dulhan Entry">Dulhan Entry & Gate Decor</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">
                      संदेश या अतिरिक्त जानकारी (Message / Details)
                    </label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="अपनी आवश्यकताएं और वेन्यू की लोकेशन यहाँ लिखें..."
                        className="w-full px-4 py-3 pl-10 rounded-xl bg-black/60 border border-gold-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-colors"
                      ></textarea>
                      <MessageSquare className="w-4 h-4 text-gold-500/60 absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-2xl bg-gold-gradient hover:bg-gold-gradient-hover text-black font-extrabold uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Booking Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
