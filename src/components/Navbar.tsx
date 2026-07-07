"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteCart } from "@/context/QuoteContext";
import SearchOverlay from "@/components/SearchOverlay";
import Topbar from "@/components/Topbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { items, toggleCart } = useQuoteCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop All", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        scrolled ? "bg-zinc-950/90 backdrop-blur-2xl border-b border-zinc-800 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className={`transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
        <Topbar />
      </div>
      <div className={`max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center transition-all duration-500 ${scrolled ? 'py-2.5 md:py-4' : 'py-4 md:py-6'}`}>
        {/* Logo Section - Enterprise Lockup */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="relative w-10 h-10 md:w-16 md:h-16 bg-white/[0.03] border border-zinc-700 rounded-lg md:rounded-xl overflow-hidden p-1 transition-all group-hover:border-brand-red/50 group-hover:bg-brand-red/[0.02]">
            <Image
              src="/images/Logo (2).png"
              alt="GolHawks International Icon"
              fill
              sizes="(max-width: 768px) 40px, 64px"
              className="object-cover scale-110" // Zoom in slightly to reduce padding
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg md:text-2xl font-black tracking-[-0.05em] leading-none flex items-center">
              <span className="text-white">GOL</span>
              <span className="text-brand-red italic">HAWKS</span>
            </span>
            <span className="text-[7px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/40 mt-1 group-hover:text-white/60 transition-colors">
              International
            </span>
          </div>
        </Link>

        {/* Desktop Nav - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
               <Link
                 key={link.name}
                 href={link.href}
                 className={`text-xs uppercase tracking-[0.2em] font-black transition-all pb-1 relative group ${
                   isActive ? "text-brand-red" : "text-white/60 hover:text-white"
                 }`}
               >
                 {link.name}
                 <span className={`absolute bottom-0 left-0 h-[1px] bg-brand-red transition-all ${
                   isActive ? "w-full" : "w-0 group-hover:w-full"
                 }`} />
               </Link>
            );
          })}
        </div>

        {/* Action Buttons & Icons (E-Commerce Style) */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            <Search className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          {/* Quote Bag (Shopping Cart) */}
          <button 
            onClick={toggleCart}
            className="relative text-white/60 hover:text-white transition-colors group cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            {items.length > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-brand-red text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {items.length}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors border border-zinc-800 ml-2" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay - Premium Redesign */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 z-[90] lg:hidden bg-zinc-950 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`text-5xl sm:text-6xl font-black uppercase tracking-tighter transition-colors block ${
                        isActive ? "text-brand-red" : "hover:text-brand-red"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-12 border-t border-zinc-800"
              >
                <p className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-6">Operational Base</p>
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-brand-red" />
                  <p className="text-lg font-bold text-white/60 italic">Sialkot, Pakistan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
};

export default Navbar;
