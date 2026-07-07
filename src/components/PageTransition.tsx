'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { pageTransition } from '@/lib/animations';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      animate="visible"
      exit={shouldReduceMotion ? "visible" : "exit"}
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}
