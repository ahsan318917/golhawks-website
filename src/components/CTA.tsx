"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, ShieldCheck, Clock, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        // Robust error message extraction from improved API response
        let message = "Failed to send inquiry. Please try again.";
        if (data.error) {
          message = typeof data.error === "string" ? data.error : (data.message || message);
        } else if (data.message) {
          message = data.message;
        }
        setErrorMessage(message);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-zinc-900 via-black to-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(196,18,48,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.02),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Impact Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-brand-red">Global Inquiries Open</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-10 leading-[0.9] md:leading-[0.85] tracking-tighter uppercase text-white">
              START YOUR <br />
              <span className="text-brand-red italic">PROCESS</span>
            </h2>
            
            <p className="text-lg md:text-2xl text-zinc-200 font-medium leading-relaxed mb-8 md:mb-12 max-w-xl">
              Tell us about your product vision. Our technical team will guide you from initial consultation to production and delivery.
            </p>

            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 border border-zinc-700 rounded-xl md:rounded-2xl flex items-center justify-center text-zinc-300 md:group-hover:text-brand-red md:group-hover:border-brand-red/30 transition-all">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] md:text-xs text-zinc-300 uppercase font-black tracking-[0.2em] md:tracking-[0.3em] mb-0.5 md:mb-1">Business Email</div>
                  <a href="mailto:info@golhawksinternational.com" className="text-sm sm:text-lg md:text-xl font-bold text-white md:hover:text-brand-red transition-colors uppercase tracking-tight block truncate">
                    info@golhawksinternational.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-zinc-800 border border-zinc-700 rounded-xl md:rounded-2xl flex items-center justify-center text-zinc-300 md:group-hover:text-green-500 md:group-hover:border-green-500/30 transition-all">
                  <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[8px] md:text-xs text-zinc-300 uppercase font-black tracking-[0.2em] md:tracking-[0.3em] mb-0.5 md:mb-1">WhatsApp Business</div>
                  <a href="https://wa.me/923712362363" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-lg md:text-xl font-bold text-white md:hover:text-green-500 transition-colors uppercase tracking-tight block">
                    +92 371 2362363
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 bg-white/[0.03] backdrop-blur-xl border border-zinc-700 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl w-fit">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-brand-red" />
              <span className="text-xs md:text-xs font-bold uppercase tracking-widest text-white/70">Replies within 4 hours</span>
            </div>
          </motion.div>

          {/* Right Side: Professional Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900 backdrop-blur-3xl border border-zinc-600 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Inner highlight edge */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 blur-[100px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="name" className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-zinc-200 ml-4">Full Name *</label>
                  <input
                    id="name"
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-zinc-900/40 border border-zinc-600 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 outline-none transition-all placeholder:text-zinc-300"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="email" className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-zinc-200 ml-4">Email Address *</label>
                  <input
                    id="email"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full bg-zinc-900/40 border border-zinc-600 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 outline-none transition-all placeholder:text-zinc-300"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="company" className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-zinc-200 ml-4">Company Name</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enterprise Ltd"
                    className="w-full bg-zinc-900/40 border border-zinc-600 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 outline-none transition-all placeholder:text-zinc-300"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label htmlFor="phone" className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-zinc-200 ml-4">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-zinc-900/40 border border-zinc-600 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 outline-none transition-all placeholder:text-zinc-300"
                  />
                </div>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <label htmlFor="message" className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] text-zinc-200 ml-4">Inquiry Details *</label>
                <textarea
                  id="message"
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-zinc-900/40 border border-zinc-600 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-sm md:text-base text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 outline-none transition-all placeholder:text-zinc-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 0 }}
                className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-xs flex items-center justify-center gap-3 transition-all relative overflow-hidden group ${
                  status === "submitting" ? "bg-zinc-800 cursor-not-allowed" : "bg-brand-red text-white hover:bg-red-700 premium-shadow-red"
                }`}
              >
                <span className="relative z-10">
                  {status === "submitting" ? "Processing..." : "Send Inquiry"}
                </span>
                {status === "submitting" ? (
                  <Loader2 className="w-4 h-4 animate-spin relative z-10" />
                ) : (
                  <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
                <div className="absolute inset-0 bg-zinc-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-green-500 bg-green-500/10 border border-green-500/20 px-6 py-4 rounded-2xl"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Your inquiry has been sent successfully.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-brand-red bg-brand-red/10 border border-brand-red/20 px-6 py-4 rounded-2xl"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CTA;


