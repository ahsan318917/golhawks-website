"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface QuoteItem {
  id: string;
  title: string;
  category: string;
  image: string;
  lots: number;
}

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (item: Omit<QuoteItem, "lots">) => void;
  removeItem: (id: string) => void;
  updateItemLots: (id: string, lots: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleCart: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("quote-cart");
    if (saved) {
      try {
        // Fallback for existing carts that don't have 'lots'
        const parsed = JSON.parse(saved);
        const migrated = parsed.map((item: any) => ({
          ...item,
          lots: item.lots || 1
        }));
        setItems(migrated);
      } catch (e) {
        console.error("Failed to parse cart");
      }
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("quote-cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addItem = (item: Omit<QuoteItem, "lots">) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, { ...item, lots: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItemLots = (id: string, lots: number) => {
    if (lots < 1) return;
    setItems((prev) => 
      prev.map(item => item.id === id ? { ...item, lots } : item)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <QuoteContext.Provider
      value={{ items, addItem, removeItem, updateItemLots, clearCart, isOpen, setIsOpen, toggleCart }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuoteCart = () => {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error("useQuoteCart must be used within a QuoteProvider");
  }
  return context;
};
