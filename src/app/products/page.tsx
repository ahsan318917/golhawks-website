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
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block text-white/40">Product Catalog</span>
            <h1 className="text-5xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-12">
              BATTLE <br />
              <span className="text-white/20 italic">READY</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed font-medium">
              High-performance technical apparel engineered for durability, flexibility, and brand identity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 group">
                  <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">{product.title}</h2>
                  
                  <div className="mb-12">
                    <h4 className="text-brand-red font-black uppercase tracking-[0.2em] text-[10px] mb-6">Technical Specifications</h4>
                    <ul className="space-y-4">
                      {product.specs.map((spec, j) => (
                        <li key={j} className="text-white font-bold tracking-tight text-lg border-b border-white/5 pb-4 last:border-0">{spec}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white/30 font-black uppercase tracking-[0.2em] text-[10px] mb-6">Primary Categories</h4>
                    <div className="flex flex-wrap gap-4">
                      {product.categories.map((cat, j) => (
                        <span key={j} className="bg-white/5 px-6 py-2 rounded-full text-white/60 font-bold uppercase tracking-widest text-[9px] border border-white/5">{cat}</span>
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
