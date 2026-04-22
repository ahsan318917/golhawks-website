"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-zinc-900 via-black to-zinc-950 relative overflow-hidden">
      {/* Visual Depth - Large Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_70%)] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/[0.02] backdrop-blur-xl overflow-hidden border border-white/10 rounded-[3rem] relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/[0.03] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-white/[0.01] blur-[120px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 p-8 md:p-24 items-center relative z-10">
            <div className="flex flex-col">
              <span className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Inquiry Workflow</span>
              <h2 className="text-4xl sm:text-5xl md:text-[6.5rem] font-black mb-10 leading-[0.85] tracking-tighter uppercase text-white">
                START YOUR <br />
                <span className="text-red-600 italic">PROCESS</span>
              </h2>
              <p className="p-lg mb-14">
                Tell us about your product vision. Our technical team will guide you from initial tech-pack audit to sampling and mass production.
              </p>
              
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3
                    }
                  }
                }}
                className="space-y-8"
              >
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer w-fit"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent transition-all duration-500 premium-shadow-red backdrop-blur-sm">
                    <Mail className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.3em] mb-1">Direct Email</div>
                    <div className="text-xl md:text-2xl font-black tracking-tight group-hover:text-red-500 transition-colors uppercase text-white">PRO@GOLHAWKS.COM</div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer w-fit"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-transparent transition-all duration-500 premium-shadow-red backdrop-blur-sm">
                    <Phone className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.3em] mb-1">Elite Support</div>
                    <div className="text-xl md:text-2xl font-black tracking-tight group-hover:text-red-500 transition-colors uppercase text-white">+92 3XX XXXXXXX</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-black/60 backdrop-blur-3xl p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all duration-500 w-full placeholder:text-zinc-600 font-medium text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all duration-500 w-full placeholder:text-zinc-600 font-medium text-white"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Business/Gym Name"
                  className="bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all duration-500 w-full placeholder:text-zinc-600 font-medium text-white"
                />
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="bg-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all duration-500 w-full resize-none placeholder:text-zinc-600 font-medium text-white"
                ></textarea>
                <motion.button 
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px -5px rgba(220, 38, 38, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all premium-shadow-red relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Send Inquiry</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </motion.button>
                
                <div className="pt-6 text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-4 text-center uppercase">Or chat instantly via</div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="https://wa.me/923XXXXXXXXX"
                    className="inline-flex items-center gap-3 text-green-500 font-black uppercase tracking-widest text-[10px] hover:text-green-400 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Business
                  </motion.a>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
