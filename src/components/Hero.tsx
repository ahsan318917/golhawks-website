"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-start overflow-hidden pt-20 md:pt-28 cursor-default">
      {/* Cinematic Background with Static Stability */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-left md:bg-center opacity-[0.25] contrast-[0.8]"
        />
        <div className="absolute inset-0 bg-brand-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/40 to-brand-black" />
        <div className="absolute inset-0 noise-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:pl-[10%] w-full">
        <div className="max-w-4xl">
          
          {/* Subtle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block mb-6 md:mb-10"
          >
            <span className="text-white/30 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-brand-red/50" />
              Professional Production Authority
            </span>
          </motion.div>

          {/* Refined Headline Hierarchy - Responsive Scaling */}
          <h1 className="text-[2.75rem] sm:text-6xl md:text-[5.5rem] font-black mb-8 md:mb-10 leading-[1.1] md:leading-[1] tracking-tighter text-white uppercase text-left">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 0.8 }}
              className="block text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.1em] md:tracking-[0.2em] mb-2 md:mb-4 text-white/60"
            >
              Where
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="block mb-2 md:mb-4"
            >
              Performance
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gradient block text-3xl sm:text-5xl md:text-[4.5rem] italic"
            >
              Meets Production
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-sm md:text-lg text-white/40 max-w-xl mb-10 md:mb-14 leading-relaxed font-medium text-left"
          >
            B2B sportswear manufacturing engineered for global brands. Technical precision meets scalable output in our quality-controlled facility.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 md:gap-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-red text-white px-8 md:px-14 py-4 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 transition-all premium-shadow-red relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-4">
                Start Your Production
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>
            
            <motion.a
              href="https://wa.me/923XXXXXXXXX"
              className="text-white/40 hover:text-white px-6 py-4 md:py-3 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 transition-all border border-white/5 sm:border-transparent hover:border-white/10"
            >
              <MessageCircle className="w-4 h-4 text-green-500/60 group-hover:text-green-500" />
              Talk to Specialist
            </motion.a>
          </div>
        </div>
      </div>

      {/* Trust Indicators - Hidden on extra small mobile */}
      <div className="absolute bottom-10 md:bottom-16 left-0 w-full hidden sm:block z-20 px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/10 border-t border-white/5 pt-8">
          <motion.span animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, repeat: Infinity }}>Sialkot Based Operations</motion.span>
          <span className="w-1 h-1 rounded-full bg-white/5" />
          <motion.span animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, delay: 1, repeat: Infinity }}>Technical Apparel R&D</motion.span>
          <span className="w-1 h-1 rounded-full bg-white/5" />
          <motion.span animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, delay: 2, repeat: Infinity }}>Global Freight Network</motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
