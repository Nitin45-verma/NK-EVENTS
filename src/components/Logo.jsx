import React from 'react';

const Logo = ({ className = "h-12", size = "normal" }) => {
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Crown SVG Emblem */}
      <div className="relative flex items-center justify-center">
        {/* Glowing backdrop circle */}
        <div className="absolute inset-0 bg-gold-500/20 blur-md rounded-full group-hover:bg-gold-400/40 transition-all duration-300"></div>
        
        <svg
          viewBox="0 0 100 100"
          className={size === "large" ? "w-16 h-16 text-gold-400 drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]" : "w-10 h-10 text-gold-400 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff3a1" />
              <stop offset="30%" stopColor="#f5c451" />
              <stop offset="70%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#996515" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Crown path */}
          <path
            d="M20 65 L28 35 L42 50 L50 22 L58 50 L72 35 L80 65 Z"
            fill="url(#goldLinear)"
            stroke="#fff3a1"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Jewels on crown tips */}
          <circle cx="28" cy="33" r="3.5" fill="#e6be53" stroke="#fff" strokeWidth="1" />
          <circle cx="50" cy="19" r="4.5" fill="#6b1140" stroke="#fff3a1" strokeWidth="1.5" />
          <circle cx="72" cy="33" r="3.5" fill="#e6be53" stroke="#fff" strokeWidth="1" />
          
          {/* Crown Base */}
          <path
            d="M18 68 C 30 73, 70 73, 82 68 L 84 75 C 70 80, 30 80, 16 75 Z"
            fill="url(#goldLinear)"
            stroke="#f5c451"
            strokeWidth="1"
          />
          {/* Crown Base Gems */}
          <circle cx="35" cy="72" r="2" fill="#6b1140" />
          <circle cx="50" cy="73" r="2.5" fill="#fff3a1" />
          <circle cx="65" cy="72" r="2" fill="#6b1140" />

          {/* Flourish Accent under crown */}
          <path
            d="M10 84 Q 50 94 90 84 Q 50 88 10 84"
            fill="url(#goldLinear)"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-serif font-black tracking-wider leading-none text-gold-gradient ${size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
          NK EVENTS
        </span>
        <span className="text-[10px] md:text-[11px] tracking-[0.25em] font-medium text-gold-300/80 uppercase font-sans mt-0.5">
          Luxury Events & Decor
        </span>
      </div>
    </div>
  );
};

export default Logo;
