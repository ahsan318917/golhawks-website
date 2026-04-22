"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-32 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card overflow-hidden border-white/5 relative"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-white/5 blur-[120px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-20 p-12 md:p-24 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Inquiry Workflow</span>
              <h2 className="text-5xl md:text-[6.5rem] font-black mb-10 leading-[0.85] tracking-tighter">
                START YOUR <br />
                <span className="text-brand-red italic">PROCESS</span>
              </h2>
              <p className="text-white/50 text-xl mb-14 leading-relaxed font-medium tracking-tight">
                Tell us about your product vision. Our technical team will guide you from initial tech-pack audit to sampling and mass production.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1">Direct Email</div>
                    <div className="text-2xl font-black tracking-tight group-hover:text-brand-red transition-colors">PRO@GOLHAWKS.COM</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-500">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-1">Elite Support</div>
                    <div className="text-2xl font-black tracking-tight group-hover:text-brand-red transition-colors">+92 3XX XXXXXXX</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-brand-black/60 backdrop-blur-3xl p-12 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-brand-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 outline-none transition-all duration-500 w-full placeholder:text-white/20 font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-brand-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 outline-none transition-all duration-500 w-full placeholder:text-white/20 font-medium"
                    />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Business/Gym Name"
                  className="bg-brand-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 outline-none transition-all duration-500 w-full placeholder:text-white/20 font-medium"
                />
                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="bg-brand-black/50 border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 outline-none transition-all duration-500 w-full resize-none placeholder:text-white/20 font-medium"
                ></textarea>
                <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all hover:scale-[1.02] active:scale-95 premium-shadow-red premium-glow-hover">
                  Send Inquiry
                </button>
                
                <div className="pt-6 text-center">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-4 text-center">Or chat instantly via</div>
                  <a
                    href="https://wa.me/923XXXXXXXXX"
                    className="inline-flex items-center gap-3 text-green-500 font-black uppercase tracking-widest text-[10px] hover:text-green-400 transition-all hover:translate-y-[-2px]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Business
                  </a>
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
