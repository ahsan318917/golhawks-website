'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, fade, viewportSettings } from '@/lib/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fadeUp' | 'fade';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  animation = 'fadeUp', 
  delay = 0,
  className = ''
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = animation === 'fadeUp' ? fadeUp : fade;
  
  // Custom variant to inject delay if provided
  const customVariants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        ...(variants.visible as any).transition,
        delay,
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewportSettings}
      variants={customVariants}
    >
      {children}
    </motion.div>
  );
}
