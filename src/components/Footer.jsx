import React from 'react';
import { PhoneCall, Heart, ChevronRight, Crown } from 'lucide-react';
import { InstagramIcon } from './Icons';
import Logo from './Logo';
import { businessInfo, services } from '../data/content';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0a0a] via-[#120a08] to-black border-t border-gold-500/30 text-slate-300 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold-500/20">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Logo size="normal" />
            <p className="text-xs font-hindi text-gold-200/90 leading-relaxed">
              "{businessInfo.tagline}"
            </p>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              शादी, पार्टी, सगाई, स्टेज लाइटिंग, फ्लावर व डीजे डेकोरेशन में आपकी पहली पसंद।
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block">Owner & Founder</span>
              <span className="text-base font-serif font-bold text-white">{businessInfo.owner}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-serif font-bold text-gold-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Crown className="w-4 h-4 text-gold-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Photo Gallery", href: "#gallery" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact & Booking", href: "#contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-slate-300 hover:text-gold-300 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div>
            <h4 className="text-sm font-serif font-bold text-gold-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Crown className="w-4 h-4 text-gold-400" />
              <span>Our Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              {services.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 text-slate-300 hover:text-gold-300 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-500 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{svc.titleHindi} ({svc.title})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-gold-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Crown className="w-4 h-4 text-gold-400" />
              <span>Contact Information</span>
            </h4>

            <div className="space-y-3 text-xs font-sans">
              <div className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${businessInfo.phones[0]}`} className="text-white hover:text-gold-300 font-semibold block">
                    {businessInfo.phones[0]}
                  </a>
                  <a href={`tel:${businessInfo.phones[1]}`} className="text-slate-300 hover:text-gold-300 block mt-0.5">
                    {businessInfo.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={businessInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-900/30 border border-pink-500/30 text-pink-300 hover:bg-pink-900/50 hover:border-pink-400 transition-all text-xs"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>@nk_electrician_149</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Brand Line & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-hindi font-semibold text-gold-300">
              "{businessInfo.brandLine}"
            </p>
            <p className="text-[11px] text-slate-500 font-sans mt-1">
              © {new Date().getFullYear()} NK EVENTS. All rights reserved. Premium Event Decoration.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-sans flex items-center gap-1">
            <span>Crafted for luxury celebrations</span>
            <Heart className="w-3.5 h-3.5 text-maroon-600 fill-maroon-600" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
