"use client";

import { useState } from "react";
import { Sliders, Check, MessageCircle, Mail, Sparkles, X } from "lucide-react";

type ProductCustomizerProps = {
  categoryTitle: string;
  productName?: string;
  defaultGSMs?: string[];
  defaultColors?: string[];
  customisationOptions?: string[];
  onClose?: () => void;
};

const DEFAULT_GSM_PRESETS = ["280 GSM", "320 GSM", "400 GSM", "450 GSM", "550 GSM"];
const DEFAULT_COLOR_PRESETS = ["Obsidian Black", "Arctic White", "Royal Blue", "Vintage Wash", "Raw Indigo", "Crimson Red"];
const DEFAULT_CUSTOMISATION = [
  "Custom Embroidery",
  "Screen Printing",
  "Puff Ink Print",
  "Woven Patches",
  "Sublimation Printing",
  "Silicone Badges",
  "Custom Leather Patch",
  "Laser Distressing"
];

export default function ProductCustomizer({
  categoryTitle,
  productName,
  defaultGSMs = DEFAULT_GSM_PRESETS,
  defaultColors = DEFAULT_COLOR_PRESETS,
  customisationOptions = DEFAULT_CUSTOMISATION,
  onClose
}: ProductCustomizerProps) {
  const [selectedGSM, setSelectedGSM] = useState(defaultGSMs[0] || "350 GSM");
  const [customGSM, setCustomGSM] = useState("");
  
  const [selectedColor, setSelectedColor] = useState(defaultColors[0] || "Obsidian Black");
  const [customColor, setCustomColor] = useState("");

  const [selectedMethods, setSelectedMethods] = useState<string[]>([customisationOptions[0] || "Custom Embroidery"]);
  const [quantity, setQuantity] = useState("250 Pcs");
  const [fitType, setFitType] = useState("Standard OEM Fit");
  const [brandingAddons, setBrandingAddons] = useState<string[]>(["Custom Woven Neck Tag"]);

  const toggleMethod = (method: string) => {
    setSelectedMethods(prev =>
      prev.includes(method) ? prev.filter(m => m !== method) : [...prev, method]
    );
  };

  const toggleBranding = (addon: string) => {
    setBrandingAddons(prev =>
      prev.includes(addon) ? prev.filter(a => a !== addon) : [...prev, addon]
    );
  };

  const finalGSM = customGSM.trim() ? `${customGSM.trim()} GSM (Custom)` : selectedGSM;
  const finalColor = customColor.trim() ? `${customColor.trim()} (Custom Pantone/Hex)` : selectedColor;

  const inquirySummary = `Hi GolHawks International! I would like to request a custom manufacturing quote:
• Category / Product: ${productName ? `${productName} (${categoryTitle})` : categoryTitle}
• Fabric Weight / GSM: ${finalGSM}
• Color / Dye: ${finalColor}
• Customisation Methods: ${selectedMethods.length > 0 ? selectedMethods.join(", ") : "None"}
• Sizing / Fit Spec: ${fitType}
• Target Quantity: ${quantity}
• Custom Branding Add-ons: ${brandingAddons.length > 0 ? brandingAddons.join(", ") : "None"}

Please confirm sampling lead time & pricing options.`;

  const whatsappUrl = `https://wa.me/923712362363?text=${encodeURIComponent(inquirySummary)}`;
  const mailtoUrl = `mailto:info@golhawksinternational.com?subject=${encodeURIComponent(`Custom Spec Quote Request - ${productName || categoryTitle}`)}&body=${encodeURIComponent(inquirySummary)}`;

  return (
    <div className="w-full bg-zinc-900/90 border border-zinc-700/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)] blur-[80px] pointer-events-none z-0" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/50 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white">
                B2B Customization Engine
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tighter">
              Customize Order Specifications
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
              Select GSM, color shade, embroidery/print method, sizing, and quantity to get a custom production quote.
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-zinc-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Fabric GSM / Weight Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white block mb-3">
                1. Select Fabric Weight (GSM / Weight)
              </label>
              <div className="flex flex-wrap gap-2.5 mb-3">
                {defaultGSMs.map(gsm => (
                  <button
                    key={gsm}
                    type="button"
                    onClick={() => { setSelectedGSM(gsm); setCustomGSM(""); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedGSM === gsm && !customGSM
                        ? "bg-brand-red border-brand-red text-white shadow-lg scale-105"
                        : "bg-zinc-950/60 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                    }`}
                  >
                    {gsm}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Or enter custom GSM (e.g. 380 GSM Organic Cotton)"
                value={customGSM}
                onChange={e => setCustomGSM(e.target.value)}
                className="w-full bg-zinc-950/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 outline-none focus:border-brand-red transition-colors"
              />
            </div>

            {/* 2. Color Selection */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white block mb-3">
                2. Select Color / Dye Option
              </label>
              <div className="flex flex-wrap gap-2.5 mb-3">
                {defaultColors.map(color => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => { setSelectedColor(color); setCustomColor(""); }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedColor === color && !customColor
                        ? "bg-brand-red border-brand-red text-white shadow-lg scale-105"
                        : "bg-zinc-950/60 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Or enter custom Pantone / Hex Code (e.g. Pantone 19-4052 TCX)"
                value={customColor}
                onChange={e => setCustomColor(e.target.value)}
                className="w-full bg-zinc-950/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 outline-none focus:border-brand-red transition-colors"
              />
            </div>

            {/* 3. Customisation Methods */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white block mb-3">
                3. Customisation & Logo Methods (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {customisationOptions.map(method => {
                  const isChecked = selectedMethods.includes(method);
                  return (
                    <button
                      key={method}
                      type="button"
                      onClick={() => toggleMethod(method)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                        isChecked
                          ? "bg-zinc-800 border-brand-red text-white"
                          : "bg-zinc-950/40 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? "bg-brand-red border-brand-red" : "border-zinc-600"
                      }`}>
                        {isChecked && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wide truncate">{method}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Fit & Batch Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white block mb-3">
                  4. Fit & Sizing Spec
                </label>
                <select
                  value={fitType}
                  onChange={e => setFitType(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-700 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-brand-red cursor-pointer"
                >
                  <option value="Standard OEM Fit">Standard OEM Fit</option>
                  <option value="Oversized / Boxy Drop-Shoulder Fit">Oversized / Boxy Fit</option>
                  <option value="Slim Athletic Performance Fit">Slim Athletic Fit</option>
                  <option value="Custom Tech-Pack Measurement Sheet">Custom Tech-Pack Sheet</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white block mb-3">
                  5. Target Order Batch Size
                </label>
                <div className="flex gap-2">
                  {["100 Pcs", "250 Pcs", "500 Pcs", "1,000+ Pcs"].map(q => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuantity(q)}
                      className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                        quantity === q
                          ? "bg-brand-red border-brand-red text-white"
                          : "bg-zinc-950/60 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 5. Custom Branding Add-ons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white block mb-3">
                6. Private Labeling & Branding Add-ons
              </label>
              <div className="flex flex-wrap gap-2.5">
                {["Custom Woven Neck Tag", "Printed Care Label", "Custom Hangtags", "Branded Polybag Packaging"].map(addon => {
                  const isChecked = brandingAddons.includes(addon);
                  return (
                    <button
                      key={addon}
                      type="button"
                      onClick={() => toggleBranding(addon)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border flex items-center gap-2 ${
                        isChecked
                          ? "bg-zinc-800 border-brand-red text-white"
                          : "bg-zinc-950/40 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                        isChecked ? "bg-brand-red border-brand-red" : "border-zinc-600"
                      }`}>
                        {isChecked && <Check className="w-2.5 h-2.5 text-white" />}
                      </div>
                      <span>{addon}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Summary Card & Direct Inquiry Triggers */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-red mb-6 pb-3 border-b border-zinc-800 flex items-center gap-2">
                <Sliders className="w-4 h-4" /> Customized Order Summary
              </h4>

              <ul className="space-y-4 text-xs">
                <li className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-400 font-bold uppercase">Item / Category:</span>
                  <span className="text-white font-bold text-right truncate max-w-[60%]">{productName || categoryTitle}</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-400 font-bold uppercase">Fabric Weight:</span>
                  <span className="text-white font-bold text-right">{finalGSM}</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-400 font-bold uppercase">Selected Color:</span>
                  <span className="text-white font-bold text-right">{finalColor}</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-400 font-bold uppercase">Customisation:</span>
                  <span className="text-white font-bold text-right max-w-[60%]">
                    {selectedMethods.length > 0 ? selectedMethods.join(", ") : "Standard Blank"}
                  </span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-400 font-bold uppercase">Sizing / Fit:</span>
                  <span className="text-white font-bold text-right">{fitType}</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/80 pb-3">
                  <span className="text-zinc-400 font-bold uppercase">Batch Quantity:</span>
                  <span className="text-brand-red font-bold text-right">{quantity}</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="text-zinc-400 font-bold uppercase">Est. Sample Dispatch:</span>
                  <span className="text-white font-bold text-right">7 - 10 Days</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 space-y-3 pt-6 border-t border-zinc-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white text-xs sm:text-sm font-black uppercase tracking-widest py-4 px-6 rounded-full transition-all shadow-xl hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Send Order Specs on WhatsApp</span>
              </a>

              <a
                href={mailtoUrl}
                className="w-full flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-brand-red text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded-full transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-brand-red" />
                <span>Email Specs Quotation</span>
              </a>

              <p className="text-[10px] text-zinc-500 text-center uppercase tracking-wider pt-2">
                ✦ Physical counter-sample dispatched prior to bulk production run.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
