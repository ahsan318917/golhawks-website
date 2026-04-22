"use client";

import { motion } from "framer-motion";

const brands = [
  "ELITE GYM", "PRO STRIKE", "CORE WEAR", "APEX ATHLETICS", "TITAN GEAR", 
  "ELITE GYM", "PRO STRIKE", "CORE WEAR", "APEX ATHLETICS", "TITAN GEAR"
];

const TrustMarquee = () => {
  return (
    <section className="py-12 bg-brand-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Trusted by growing brands worldwide</span>
      </div>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center"
        >
          {brands.map((brand, i) => (
            <span key={i} className="text-3xl md:text-5xl font-black text-white/10 hover:text-white/30 transition-colors cursor-default select-none tracking-tighter italic uppercase">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustMarquee;
