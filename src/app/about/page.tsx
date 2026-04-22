"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-48 pb-14 md:pb-24 border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
        {/* Cinematic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Legacy</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-12 uppercase text-white">
              INDUSTRIAL <br />
              <span className="text-zinc-700 italic">AUTHORITY</span>
            </h1>
            <p className="p-lg">
              Based in Sialkot, Pakistan, we operate at the intersection of technical engineering and high-volume manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-900 to-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-square border border-white/10 group relative shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070&auto=format&fit=crop" 
                alt="Sportswear Production Line"
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:contrast-100"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-12"
            >
              <div>
                <h2 className="h-md mb-6 uppercase text-white">Direct-to-Brand Infrastructure</h2>
                <p className="p-lg text-zinc-400">
                  Golhawks International was founded to eliminate the friction between design and mass production. By owning our facility in Sialkot, the world's hub for sportswear, we provide brands with direct control over their supply chain.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-2 group">
                  <div className="text-2xl md:text-3xl font-black text-red-600 italic uppercase tracking-tighter transition-colors group-hover:text-red-500">Consistency</div>
                  <p className="p-sm text-zinc-500">Defining batch protocols that ensure every unit is identical.</p>
                </div>
                <div className="space-y-2 group">
                  <div className="text-2xl md:text-3xl font-black text-red-600 italic uppercase tracking-tighter transition-colors group-hover:text-red-500">Engineering</div>
                  <p className="p-sm text-zinc-500">Treating textile manufacturing as a science, not a craft.</p>
                </div>
              </div>
              
              <div className="pt-10 border-t border-white/5">
                <blockquote className="text-xl md:text-2xl font-bold italic text-zinc-500 tracking-tight leading-relaxed">
                  "Our mission is to engineer the gear that defines the next generation of athletic champions."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
