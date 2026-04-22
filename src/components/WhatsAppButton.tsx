"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/923XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-green-500 text-white p-4 md:p-5 rounded-full shadow-2xl flex items-center justify-center group border border-white/20"
    >
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
      
      {/* Desktop-Only Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl hidden md:block">
        Chat with specialist
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
