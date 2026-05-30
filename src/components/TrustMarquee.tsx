"use client";

import { motion } from "framer-motion";

const brands = [
  "ELITE GYM", "PRO STRIKE", "CORE WEAR", "APEX ATHLETICS", "TITAN GEAR", 
  "ELITE GYM", "PRO STRIKE", "CORE WEAR", "APEX ATHLETICS", "TITAN GEAR"
];

const TrustMarquee = () => {
  return (
    <section className="py-16 bg-black border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      {/* Subtle depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-red/[0.03] blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-4">
          <div className="h-[1px] w-8 bg-brand-red/30" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Manufacturing Partners & Global Brands</span>
          <div className="h-[1px] w-8 bg-brand-red/30" />
        </div>
      </div>
      
      <div className="flex whitespace-nowrap overflow-hidden relative z-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 items-center"
        >
          {brands.map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-white/50 hover:text-white/80 hover:text-brand-red/60 transition-all duration-700 cursor-default select-none tracking-tighter italic uppercase drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMarquee;
