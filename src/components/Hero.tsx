"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

const Hero = () => {
  console.log("Video mounted");

  return (
    <div className="relative w-full h-screen overflow-hidden bg-zinc-950">
      {/* 1. Video Background - z-0 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* 2. Overlay - z-10 - Bright Video Visibility */}
      <div className="absolute inset-0 bg-zinc-950/40 md:bg-zinc-950/30 z-10" />

      {/* 3. Content - z-20 */}
      <div className="relative z-20 h-full flex items-center pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-[10%] w-full">
          <div className="max-w-4xl">


            {/* Refined Headline Hierarchy */}
            <h1 className="text-[2.2rem] sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[0.95] md:leading-[1] tracking-tighter text-white uppercase text-left">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="block text-lg sm:text-2xl md:text-4xl font-bold tracking-[0.1em] md:tracking-[0.2em] mb-1 md:mb-4 text-zinc-300 text-left"
              >
                Where
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="block mb-1 md:mb-4 text-left"
              >
                Performance
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="text-gradient block text-[1.8rem] sm:text-5xl md:text-6xl italic leading-[1] text-left"
              >
                Meets Production
              </motion.span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="w-12 h-1 bg-brand-red mb-6 md:mb-10" 
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-base md:text-xl text-zinc-100 max-w-xl mb-8 md:mb-14 leading-relaxed font-semibold text-left"
            >
              B2B sportswear manufacturing engineered for global brands. Technical precision meets scalable output in our quality-controlled facility.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 md:gap-10">
              <Link href="/contact" className="block w-full sm:w-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="bg-brand-red text-white px-8 md:px-14 py-4 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs md:text-sm flex items-center justify-center gap-4 transition-all duration-300 premium-shadow-red relative group overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-zinc-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center gap-4">
                    Start Your Production
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.div>
              </Link>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 0 }}
                href="https://wa.me/923712362363"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-white bg-zinc-900/80 hover:bg-zinc-800 px-6 py-4 md:py-4 rounded-full font-black uppercase tracking-[0.2em] text-xs md:text-sm flex items-center justify-center gap-3 transition-all duration-300 border border-zinc-600 hover:border-brand-red"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                Talk to Specialist
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
