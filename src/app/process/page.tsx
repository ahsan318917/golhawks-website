"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import CTA from "@/components/CTA";
import { Search, PenTool, ClipboardCheck, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "01. Inquiry",
    desc: "Technical audit of requirements. We review your tech-packs, material preferences, and quantity needs to provide a clinical cost-analysis.",
    expect: ["24-Hour Quote", "Fabric Availability Report"]
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "02. Engineering",
    desc: "Refining tech-packs and fabric specifications. Our R&D team ensures every pattern is optimized for both performance and mass-production efficiency.",
    expect: ["Digital Technical Drafts", "Sourcing Validation"]
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "03. Sampling",
    desc: "Validation phase. We produce high-fidelity prototypes for your approval. This ensures the hand-feel, fit, and branding meet your exact standards.",
    expect: ["Courier Tracking", "Technical Feedback Loop"]
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "04. Production",
    desc: "Mass manufacturing with continuous QC. Once the sample is approved, we initiate the multi-line production process in our quality-controlled facility.",
    expect: ["Weekly Status Reports", "Batch QC Photos"]
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "05. Logistics",
    desc: "Global distribution. Final units are vacuum-packed and shipped through our established freight network to your warehouse or distribution center.",
    expect: ["Freight Tracking", "Customs Documentation"]
  }
];

export default function ProcessPage() {
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
            <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block text-white/40">Our Systems</span>
            <h1 className="text-5xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-12">
              PRODUCTION <br />
              <span className="text-white/20 italic">LINE</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed font-medium">
              A defined, quality-controlled workflow from initial concept to global delivery. Engineering trust through process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        {/* Animated Background Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-brand-red/50 via-white/5 to-transparent hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="space-y-40">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-32 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-24 h-24 rounded-[2rem] bg-brand-black border border-brand-red/30 flex items-center justify-center text-brand-red mb-10 shadow-[0_0_50px_-10px_rgba(196,18,48,0.2)]">
                    {step.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase">{step.title}</h2>
                  <p className="text-white/40 text-lg leading-relaxed font-medium mb-12">
                    {step.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 w-full border-t border-white/5 pt-10">
                    {step.expect.map((item, j) => (
                      <div key={j} className="space-y-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-brand-red">Expectation</div>
                        <div className="text-white font-bold tracking-tight">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 hidden lg:block" />
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
