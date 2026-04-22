"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section id="about" className="py-32 bg-brand-black relative overflow-hidden font-sans">
      <div className="absolute inset-0 noise-bg opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* COLUMN 1: Production & QC */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2070&auto=format&fit=crop" 
                alt="Garment Production Line"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.3em] mb-1">Infrastructure</p>
                <h4 className="text-xl font-black text-white italic">Production Line</h4>
              </div>
            </div>
            
            <div className="group relative rounded-[2rem] overflow-hidden aspect-square border border-white/10 shadow-2xl text-white">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop" 
                alt="Quality Inspection"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.3em] mb-1">Standard</p>
                <h4 className="text-xl font-black text-white italic">QC Inspection</h4>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: Fabric & Warehouse */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 pt-12"
          >
            <div className="group relative rounded-[2rem] overflow-hidden aspect-square border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop" 
                alt="Technical Fabric"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.3em] mb-1">Materials</p>
                <h4 className="text-xl font-black text-white italic">Technical Fabric</h4>
              </div>
            </div>

            <div className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics Warehouse"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-red font-black text-[10px] uppercase tracking-[0.3em] mb-1">Global</p>
                <h4 className="text-xl font-black text-white italic">Export Logistics</h4>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 3: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-10 pt-12 lg:pt-24 text-white"
          >
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Factory Operations</span>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.85] tracking-tighter">
              PRECISION <br />
              <span className="text-white/20 italic text-8xl">CONTROL</span>
            </h2>
            
            <div className="mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 block underline decoration-brand-red underline-offset-8">What This Means For Your Brand</span>
              <div className="space-y-10">
                {[
                  { title: "Defect Mitigation", desc: "Surgical precision through controlled production workflows." },
                  { title: "Batch Uniformity", desc: "Consistent sizing profiles across large-scale global orders." },
                  { title: "Direct Factory Link", desc: "No intermediaries. Direct communication for rapid R&D." },
                  { title: "Ethical Compliance", desc: "Audited labor standards ensuring long-term brand safety." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5 group">
                    <div className="mt-1 w-6 h-6 rounded-full border border-brand-red/30 flex items-center justify-center shrink-0 group-hover:bg-brand-red transition-all duration-500">
                      <CheckCircle2 className="w-3 h-3 text-brand-red group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold tracking-tight text-lg mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="group relative bg-white/5 hover:bg-white/10 border border-white/10 px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center gap-4">
              Audit Our Facility
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
