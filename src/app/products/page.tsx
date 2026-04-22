"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";

const products = [
  {
    title: "Martial Arts Wear",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop",
    specs: ["Heavyweight Pearl Weave Cotton", "Reinforced Triple Stitching", "Anti-Microbial Treatment"],
    categories: ["Brazilian Jiu-Jitsu GIs", "Karate Uniforms", "Judo Training Gear"]
  },
  {
    title: "Performance Wear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    specs: ["4-Way Stretch Compression", "Moisture-Management Micro-Polyester", "Laser-Cut Ventilation"],
    categories: ["Compression Tops", "Training Shorts", "Technical Leggings"]
  },
  {
    title: "Team Apparel",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=2069&auto=format&fit=crop",
    specs: ["Sublimation Printing Tech", "Breathable Mesh Paneling", "UV Protection Fabrics"],
    categories: ["Club Jerseys", "Sideline Hoodies", "Custom Tracksuits"]
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-48 pb-14 md:pb-24 border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
        {/* Cinematic Glow */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)] blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Product Catalog</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-12 uppercase text-white">
              BATTLE <br />
              <span className="text-zinc-700 italic">READY</span>
            </h1>
            <p className="p-lg">
              High-performance technical apparel engineered for durability, flexibility, and brand identity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-900 via-zinc-950 to-black relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-20 md:space-y-32">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-12 md:gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full group">
                  <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-red-600/30">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="h-lg mb-10 uppercase text-white">{product.title}</h2>
                  
                  <div className="mb-12">
                    <h4 className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px] mb-6">Technical Specifications</h4>
                    <ul className="space-y-4">
                      {product.specs.map((spec, j) => (
                        <li key={j} className="text-zinc-300 font-bold tracking-tight text-base md:text-lg border-b border-white/5 pb-4 last:border-0 group-hover:text-white transition-colors">{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-zinc-500 font-black uppercase tracking-[0.2em] text-[10px] mb-6">Primary Categories</h4>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                      {product.categories.map((cat, j) => (
                        <span key={j} className="bg-white/5 px-5 py-2 rounded-full text-zinc-400 font-bold uppercase tracking-widest text-[8px] md:text-[9px] border border-white/5 hover:border-red-600/30 hover:text-white transition-all cursor-default">{cat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
