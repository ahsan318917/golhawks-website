"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, PenTool, Factory, Truck } from "lucide-react";

const steps = [
  { icon: <Search className="w-5 h-5" />, title: "Technical Audit" },
  { icon: <PenTool className="w-5 h-5" />, title: "Engineering" },
  { icon: <Factory className="w-5 h-5" />, title: "Mass Production" },
  { icon: <Truck className="w-5 h-5" />, title: "Global Logistics" },
];

const ProcessPreview = () => {
  return (
    <section className="py-32 bg-brand-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div>
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Workflow</span>
            <h2 className="text-4xl md:text-7xl font-black leading-none tracking-tighter">THE PRODUCTION <br /><span className="text-white/20 italic">LINE</span></h2>
          </div>
          <Link href="/process" className="group flex items-center gap-4 text-white hover:text-brand-red transition-all font-black uppercase tracking-[0.2em] text-[10px] border-b border-white/10 pb-4">
            See Full Process
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="w-20 h-20 bg-brand-black border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-500">
                <div className="text-white group-hover:scale-125 transition-transform">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">{step.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
