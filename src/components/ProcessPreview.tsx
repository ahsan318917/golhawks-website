"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, PenTool, Factory, Truck } from "lucide-react";

const steps = [
  { icon: <Search className="w-5 h-5 md:w-6 md:h-6" />, title: "Technical Audit", num: "01" },
  { icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" />, title: "Engineering", num: "02" },
  { icon: <Factory className="w-5 h-5 md:w-6 md:h-6" />, title: "Mass Production", num: "03" },
  { icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />, title: "Global Logistics", num: "04" },
];

const ProcessPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-zinc-900 via-black to-zinc-950 border-y border-white/5 relative overflow-hidden">
      {/* Background depth - Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)] blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8 md:gap-10"
        >
          <div>
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-4 md:mb-6 block">Workflow</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase text-white">THE PRODUCTION <br /><span className="text-zinc-800 italic">LINE</span></h2>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/process" className="group flex items-center gap-4 text-white hover:text-red-500 transition-all font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] border-b border-white/10 pb-3 md:pb-4 w-fit">
              See Full Process
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Process Flow Container */}
        <div className="relative">
          {/* Connecting Line - Desktop (Horizontal) */}
          <div className="absolute top-[48px] left-0 w-full h-[1px] bg-white/5 hidden lg:block overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
            />
          </div>

          {/* Connecting Line - Mobile (Vertical) */}
          <div className="absolute left-[31px] top-0 w-[1px] h-full bg-white/5 lg:hidden overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-red-500/40 to-transparent"
            />
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="group relative flex items-start lg:flex-col lg:items-center text-left lg:text-center gap-6 lg:gap-0"
              >
                {/* Node Container */}
                <div className="relative z-10 shrink-0">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 hidden lg:block">
                    <span className="text-[10px] font-black text-zinc-700 tracking-widest group-hover:text-red-500 transition-colors">{step.num}</span>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 md:w-24 md:h-24 bg-black border border-white/10 rounded-full flex items-center justify-center group-hover:border-red-600 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] transition-all duration-500 relative overflow-hidden backdrop-blur-md"
                  >
                    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    {/* Inner small dot indicating connection */}
                    <div className="absolute top-1/2 left-0 w-2 h-2 -translate-y-1/2 -translate-x-1/2 bg-red-500/0 group-hover:bg-red-500 rounded-full blur-sm hidden lg:block transition-all" />
                    <div className="absolute top-1/2 right-0 w-2 h-2 -translate-y-1/2 translate-x-1/2 bg-red-500/0 group-hover:bg-red-500 rounded-full blur-sm hidden lg:block transition-all" />

                    <div className="text-zinc-400 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                      {step.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="lg:mt-10">
                  <div className="lg:hidden mb-1">
                    <span className="text-[9px] font-black text-red-600 tracking-[0.3em] uppercase">{step.num}</span>
                  </div>
                  <h4 className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 group-hover:text-white transition-colors duration-500 max-w-[150px]">
                    {step.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
