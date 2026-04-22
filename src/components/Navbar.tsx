"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[0.16,1,0.3,1] ${
        scrolled ? "bg-brand-black/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4 shadow-2xl" : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* Logo - Always Visible */}
        <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-2 group shrink-0">
          <span className="text-brand-red italic transition-transform group-hover:skew-x-[-10deg]">GOL</span>
          <span className="group-hover:text-brand-red transition-colors">HAWKS</span>
        </Link>

        {/* Desktop Nav - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-black text-white/60 hover:text-white transition-all link-underline pb-1"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-6">
          <Link
            href="/contact"
            className="bg-brand-red hover:bg-red-700 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 premium-shadow-red shrink-0"
          >
            Get Quote
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[60px] md:top-[70px] z-[90] lg:hidden bg-brand-black border-t border-white/5"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-black uppercase tracking-tighter hover:text-brand-red transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-4">Operational Base</p>
                <p className="text-sm font-bold text-white/60 italic">Sialkot, Pakistan</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
