"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe2, Palette } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Batch Integrity",
    desc: "Rigorous quality control workflows from raw textile sourcing to final batch inspection.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Agile Production",
    desc: "Optimized multi-line infrastructure designed for rapid scalability and consistent output.",
  },
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Global Distribution",
    desc: "Seamless freight management with established partners serving North America, Europe, and Asia.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Technical Design",
    desc: "Specialized R&D team focused on refining tech-packs for optimal manufacturing efficiency.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/[0.04] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-red/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Operational Trust</span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter">
              BUILT FOR <br />
              <span className="text-white/20 italic">CONSISTENCY</span>
            </h2>
            <p className="text-white/50 text-xl mb-14 max-w-lg leading-relaxed font-medium tracking-tight">
              Every order follows a defined quality control workflow. We eliminate manufacturing variables to ensure your brand's reputation remains secure.
            </p>
            
            <div className="pt-8 border-t border-white/5 flex gap-16">
              <div>
                <div className="text-4xl font-black text-white tracking-tighter mb-1 italic">AUDITED</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-red/60">Factory Operations</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white tracking-tighter mb-1 italic">ACTIVE</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-brand-red/60">Global Distribution</div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="glass-card p-10 hover:border-brand-red/30 transition-all duration-700 group"
              >
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-brand-red group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-700">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{f.title}</h3>
                <p className="text-white/40 text-base leading-relaxed font-medium tracking-tight group-hover:text-white/60 transition-colors">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
