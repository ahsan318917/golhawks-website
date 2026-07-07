"use client";

import { useQuoteCart } from "@/context/QuoteContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ArrowRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function QuoteBagDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateItemLots, clearCart } = useQuoteCart();
  
  // Shipping Details State
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSendToWhatsApp = () => {
    if (items.length === 0) return;
    
    let message = "Hi Golhawks, I would like to request a bulk price quote for the following items from your catalog:%0A%0A";
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.title}* (${item.category}) - ${item.lots} Lot${item.lots > 1 ? 's' : ''}%0A`;
    });
    
    const hasAddress = firstName || lastName || address || city || province || zipCode;
    if (hasAddress) {
      message += `%0A*Shipping Details:*%0A`;
      if (firstName || lastName) message += `${firstName} ${lastName}`.trim() + `%0A`;
      if (address) message += `${address}%0A`;
      
      const locationParts = [city, province, zipCode].filter(Boolean).join(", ");
      if (locationParts) message += `${locationParts}%0A`;
    }
    
    message += "%0APlease let me know the estimated pricing and MOQ for these items.";
    
    window.open(`https://wa.me/923712362363?text=${message}`, "_blank");
    clearCart();
    setIsOpen(false);
  };

  const InputField = ({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (val: string) => void }) => (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-2.5 text-xs text-white placeholder:text-zinc-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/20 transition-all"
    />
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-zinc-900/90 backdrop-blur-sm z-[110]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-700 z-[120] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <h2 className="text-xl font-black uppercase tracking-widest text-white">
                Quote Bag
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-50">
                  <p className="text-zinc-200 font-bold uppercase tracking-widest mb-2">Your Bag is Empty</p>
                  <p className="text-sm text-zinc-300">Browse the catalog to add items for a bulk quote.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center bg-zinc-900 p-3 rounded-2xl border border-zinc-800 relative group">
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between h-full py-1">
                      <div>
                        <p className="text-[11px] text-zinc-300 font-bold uppercase tracking-widest leading-none mb-1">{item.category}</p>
                        <h4 className="text-sm font-black text-white uppercase tracking-tight leading-tight">{item.title}</h4>
                      </div>
                      
                      {/* Lots Control */}
                      <div className="flex items-center gap-3 mt-2 bg-zinc-800 w-fit rounded-lg p-1 border border-zinc-700">
                        <button 
                          onClick={() => updateItemLots(item.id, item.lots - 1)}
                          className="p-1 text-zinc-300 hover:text-white transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white min-w-[32px] text-center">
                          {item.lots} Lot{item.lots > 1 ? 's' : ''}
                        </span>
                        <button 
                          onClick={() => updateItemLots(item.id, item.lots + 1)}
                          className="p-1 text-zinc-300 hover:text-white transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-zinc-300 hover:text-brand-red transition-colors self-start"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-zinc-800 bg-zinc-900 flex flex-col gap-6">
                
                {/* Shipping Details */}
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-300">
                    Shipping Details (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <InputField placeholder="First Name" value={firstName} onChange={setFirstName} />
                    <InputField placeholder="Last Name" value={lastName} onChange={setLastName} />
                  </div>
                  <InputField placeholder="Street Address" value={address} onChange={setAddress} />
                  <div className="grid grid-cols-3 gap-2">
                    <InputField placeholder="City" value={city} onChange={setCity} />
                    <InputField placeholder="State/Prov" value={province} onChange={setProvince} />
                    <InputField placeholder="Zip Code" value={zipCode} onChange={setZipCode} />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    onClick={handleSendToWhatsApp}
                    className="w-full bg-brand-red text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-red-700 transition-colors group"
                  >
                    Send Quote Request
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={clearCart}
                    className="w-full text-xs text-zinc-300 hover:text-white font-bold uppercase tracking-widest transition-colors py-2"
                  >
                    Clear Bag
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
