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
    <main className="min-h-screen bg-black selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-48 pb-14 md:pb-24 border-b border-white/5 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
        {/* Cinematic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)] blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Systems</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-12 uppercase text-white">
              PRODUCTION <br />
              <span className="text-zinc-700 italic">LINE</span>
            </h1>
            <p className="p-lg">
              A defined, quality-controlled workflow from initial concept to global delivery. Engineering trust through process.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-zinc-900 via-black to-zinc-950 relative overflow-hidden">
        {/* Animated Background Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-red-600/50 via-white/5 to-transparent hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="space-y-24 md:space-y-40">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-32 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-black/60 border border-red-600/30 flex items-center justify-center text-red-600 mb-10 shadow-[0_0_50px_-10px_rgba(220,38,38,0.2)] backdrop-blur-md"
                  >
                    {step.icon}
                  </motion.div>
                  <h2 className="h-md mb-8 uppercase text-white">{step.title}</h2>
                  <p className="p-lg mb-12 text-zinc-400">
                    {step.desc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full border-t border-white/5 pt-10 text-left">
                    {step.expect.map((item, j) => (
                      <div key={j} className="space-y-1 group">
                        <div className="text-[10px] font-black uppercase tracking-widest text-red-600">Expectation</div>
                        <div className="text-zinc-200 font-bold tracking-tight uppercase text-xs md:text-sm italic group-hover:text-white transition-colors">{item}</div>
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
