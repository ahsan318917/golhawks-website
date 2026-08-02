"use client";

import { motion } from "framer-motion";

const proofImages = [
  { 
    url: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070&auto=format&fit=crop", 
    label: "Production Line",
    desc: "Optimized for consistent batch output."
  },
  { 
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop", 
    label: "QC Station",
    desc: "Rigorous inspection before every shipment."
  },
  { 
    url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop", 
    label: "Stitching Unit",
    desc: "Industrial-grade precision engineering."
  },
  { 
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", 
    label: "Fabric Sourcing",
    desc: "High-spec textile warehouse operations."
  },
];

const ProofSection = () => {
  return (
    <section className="py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/50 px-4.5 py-2 rounded-full mb-4 md:mb-6 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-white">Production Insight</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-white">INSIDE OUR <br /><span className="text-zinc-600 italic">FACILITY</span></h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {proofImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group border border-zinc-700 shadow-2xl"
            >
              <img 
                src={img.url} 
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 contrast-110 brightness-75 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-red font-black uppercase tracking-[0.3em] text-xs mb-2">{img.label}</span>
                <p className="text-white text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {img.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
