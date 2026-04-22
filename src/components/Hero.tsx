"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  console.log("Video mounted");

  return (
    <div className="relative w-full h-screen overflow-hidden bg-brand-black">
      {/* 1. Video Background - z-0 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 2. Overlay - z-10 */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 3. Content - z-20 */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-[10%] w-full">
          <div className="max-w-4xl">
            {/* Subtle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block mb-6 md:mb-10"
            >
              <span className="text-white/40 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-brand-red animate-pulse" />
                Elite Manufacturing Authority
              </span>
            </motion.div>

            {/* Refined Headline Hierarchy */}
            <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-10 leading-[1] md:leading-[1] tracking-tighter text-white uppercase text-left">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block text-xl sm:text-2xl md:text-4xl font-bold tracking-[0.1em] md:tracking-[0.2em] mb-2 md:mb-4 text-white/60 text-left"
              >
                Where
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                className="block mb-2 md:mb-4 text-left"
              >
                Performance
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-gradient block text-[2.2rem] sm:text-5xl md:text-6xl italic leading-[1.1] text-left"
              >
                Meets Production
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-base md:text-xl text-white/60 max-w-xl mb-10 md:mb-14 leading-relaxed font-medium text-left"
            >
              B2B sportswear manufacturing engineered for global brands. Technical precision meets scalable output in our quality-controlled facility.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 md:gap-10">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-brand-red text-white px-8 md:px-14 py-4 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 transition-all premium-shadow-red relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center gap-4">
                  Start Your Production
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/923XXXXXXXXX"
                className="text-white/60 hover:text-white px-6 py-4 md:py-3 rounded-full font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-4 transition-all border border-white/10 sm:border-transparent hover:border-white/20"
              >
                <MessageCircle className="w-4 h-4 text-green-500/60" />
                Talk to Specialist
              </motion.a>
            </div>
          </div>
        </div>

        {/* Mobile-Friendly Trust Indicators */}
        <div className="absolute bottom-6 md:bottom-16 left-0 w-full z-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-[7px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.4em] text-white/10 border-t border-white/5 pt-4 md:pt-8">
            <motion.span animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, repeat: Infinity }}>Sialkot Operations</motion.span>
            <span className="w-1 h-1 rounded-full bg-white/5" />
            <motion.span animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, delay: 1, repeat: Infinity }}>Technical R&D</motion.span>
            <span className="w-1 h-1 rounded-full bg-white/5" />
            <motion.span animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, delay: 2, repeat: Infinity }}>Global Freight</motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
