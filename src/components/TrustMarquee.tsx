"use client";

import { motion } from "framer-motion";

const brands = [
  "PRIVATE LABEL BRANDS", "SPORTSWEAR BRANDS", "MMA ACADEMIES", "FITNESS STARTUPS", "TEAMWEAR COMPANIES", "OUTDOOR APPAREL",
  "PRIVATE LABEL BRANDS", "SPORTSWEAR BRANDS", "MMA ACADEMIES", "FITNESS STARTUPS", "TEAMWEAR COMPANIES", "OUTDOOR APPAREL"
];

const TrustMarquee = () => {
  return (
    <section className="py-12 md:py-24 bg-zinc-950 border-y border-zinc-800 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      {/* Subtle depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-red/[0.03] blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/50 px-5 py-2.5 rounded-full shadow-md">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white">Manufacturing Partners & Global Brands</span>
        </div>
      </div>
      
      <div className="flex whitespace-nowrap overflow-hidden relative z-0">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-32 items-center"
        >
          {brands.map((brand, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-zinc-200 hover:text-brand-red transition-all duration-300 cursor-default select-none tracking-tighter italic uppercase drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMarquee;
