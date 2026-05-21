"use client";

import { motion } from "framer-motion";

const brands = [
  "ELITE GYM", "PRO STRIKE", "CORE WEAR", "APEX ATHLETICS", "TITAN GEAR", 
  "ELITE GYM", "PRO STRIKE", "CORE WEAR", "APEX ATHLETICS", "TITAN GEAR"
];

const TrustMarquee = () => {
  return (
    <section className="py-16 bg-brand-black border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-4">
          <div className="h-[1px] w-8 bg-brand-red/30" />
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Manufacturing Partners & Global Brands</span>
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
            <span key={i} className="text-4xl md:text-6xl font-black text-white/[0.03] hover:text-brand-red/20 transition-all duration-700 cursor-default select-none tracking-tighter italic uppercase">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMarquee;
