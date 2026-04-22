"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, ClipboardCheck, Factory, Truck } from "lucide-react";

const steps = [
  { icon: <Search />, title: "Inquiry", desc: "Technical audit of requirements." },
  { icon: <PenTool />, title: "Engineering", desc: "Refining tech-packs & fabric specs." },
  { icon: <ClipboardCheck />, title: "Validation", desc: "Prototype sampling & approval." },
  { icon: <Factory />, title: "Production", desc: "Mass manufacturing with QC." },
  { icon: <Truck />, title: "Logistics", desc: "Global distribution & tracking." },
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="process" className="py-32 bg-brand-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The System</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 tracking-tighter">OUR PRODUCTION LINE</h2>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-white/5 z-0" />
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-brand-red z-0 origin-left"
          />

          <div className="grid lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-brand-black border border-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-10 relative z-10 transition-all duration-700 group-hover:border-brand-red group-hover:premium-shadow-red group-hover:bg-brand-red">
                  <div className="scale-125 transition-transform group-hover:scale-150 duration-500">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tighter group-hover:text-brand-red transition-colors">{step.title}</h3>
                <p className="text-white/40 text-base leading-relaxed font-medium tracking-tight group-hover:text-white/60 transition-colors">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
