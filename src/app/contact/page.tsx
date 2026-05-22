"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 md:pt-48 pb-10 md:pb-24 border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
        {/* Cinematic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,18,48,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-brand-red font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-8 block">Contact Authority</span>
            <h1 className="text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 uppercase text-white">
              GET YOUR <br />
              <span className="text-zinc-700 italic">QUOTE</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
              Initiate your manufacturing process. Our technical team is ready to analyze your requirements and provide scalable production solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section (Reusing CTA for consistency) */}
      <CTA />

      {/* Additional Contact Info */}
      <section className="py-16 md:py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3 md:space-y-4"
            >
              <div className="text-brand-red font-black uppercase tracking-widest text-[8px] md:text-[10px]">Production Hub</div>
              <div className="flex items-start gap-3 md:gap-4">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white/40 shrink-0" />
                <p className="text-zinc-400 font-medium uppercase tracking-tight text-xs md:text-sm">
                  Sialkot Industrial Zone,<br />
                  Punjab, Pakistan
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3 md:space-y-4"
            >
              <div className="text-brand-red font-black uppercase tracking-widest text-[8px] md:text-[10px]">Business Email</div>
              <div className="flex items-start gap-3 md:gap-4 overflow-hidden">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-white/40 shrink-0" />
                <a href="mailto:info@golhawksinternational.com" className="text-zinc-400 font-medium md:hover:text-white transition-colors text-xs md:text-sm uppercase truncate block">
                  info@golhawksinternational.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 md:space-y-4"
            >
              <div className="text-brand-red font-black uppercase tracking-widest text-[8px] md:text-[10px]">Direct Support</div>
              <div className="flex items-start gap-3 md:gap-4">
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 text-white/40 shrink-0" />
                <a href="https://wa.me/923464208200" className="text-zinc-400 font-medium md:hover:text-white transition-colors text-xs md:text-sm uppercase">
                  +92 346 4208200
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-3 md:space-y-4"
            >
              <div className="text-brand-red font-black uppercase tracking-widest text-[8px] md:text-[10px]">Response Protocol</div>
              <div className="flex items-start gap-3 md:gap-4">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-white/40 shrink-0" />
                <p className="text-zinc-400 font-medium text-xs md:text-sm uppercase tracking-tight">
                  Global Reply Time:<br />
                  Under 4 Hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
