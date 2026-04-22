"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navbar />
      
      <section className="pt-48 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block text-white/40">Our Legacy</span>
            <h1 className="text-5xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-12">
              INDUSTRIAL <br />
              <span className="text-white/20 italic text-[5.5rem]">AUTHORITY</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed font-medium">
              Based in Sialkot, Pakistan, we operate at the intersection of technical engineering and high-volume manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="rounded-[3rem] overflow-hidden aspect-square border border-white/10 group relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070&auto=format&fit=crop" 
                alt="Sportswear Production Line"
                className="w-full h-full object-cover grayscale contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:contrast-100"
              />
              <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </motion.div>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase">Direct-to-Brand Infrastructure</h2>
                <p className="text-white/40 text-lg leading-relaxed font-medium">
                  Golhawks International was founded to eliminate the friction between design and mass production. By owning our facility in Sialkot, the world's hub for sportswear, we provide brands with direct control over their supply chain.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-3xl font-black text-brand-red mb-2 italic uppercase">Consistency</div>
                  <p className="text-white/30 text-sm leading-relaxed">Defining batch protocols that ensure every unit is identical.</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-brand-red mb-2 italic uppercase">Engineering</div>
                  <p className="text-white/30 text-sm leading-relaxed">Treating textile manufacturing as a science, not a craft.</p>
                </div>
              </div>
              
              <div className="pt-10 border-t border-white/5">
                <blockquote className="text-2xl font-bold italic text-white/60 tracking-tight leading-relaxed">
                  "Our mission is to engineer the gear that defines the next generation of athletic champions."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
