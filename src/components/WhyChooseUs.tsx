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
    <section className="section-padding bg-gradient-to-b from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
      {/* Visual Depth - Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.08),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Operational Trust</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase">
              BUILT FOR <br />
              <span className="text-zinc-800 italic">CONSISTENCY</span>
            </h2>
            <p className="p-lg mb-14 max-w-lg">
              Every order follows a defined quality control workflow. We eliminate manufacturing variables to ensure your brand's reputation remains secure.
            </p>
            
            <div className="pt-8 border-t border-white/5 flex gap-12 md:gap-16">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1 italic">AUDITED</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-red-500/60">Factory Operations</div>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <div className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-1 italic">ACTIVE</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-red-500/60">Global Distribution</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid sm:grid-cols-2 gap-6 md:gap-8"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(239, 68, 68, 0.4)",
                  boxShadow: "0 0 30px rgba(220, 38, 38, 0.2)"
                }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 transition-all duration-500 group active:scale-[0.98]"
              >
                <div className="bg-black/40 w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-white/10 flex items-center justify-center mb-8 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent transition-all duration-500 premium-shadow-red">
                  {f.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-4 tracking-tight group-hover:text-white uppercase">{f.title}</h3>
                <p className="p-sm group-hover:text-zinc-300 transition-colors">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
