import { Variants } from 'framer-motion';

// Premium Easing Curve
// This matches the smooth, editorial feel of high-end brands.
export const premiumEasing = [0.23, 1, 0.32, 1]; // cubic-bezier(0.23, 1, 0.32, 1)

// Transition Durations
export const durations = {
  fast: 0.25,
  base: 0.4,
  slow: 0.6,
};

// Global Page Transition
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.base,
      ease: premiumEasing,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -10,
    transition: {
      duration: durations.fast,
      ease: premiumEasing
    }
  }
};

// Standard Fade Up (For scroll reveals)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: durations.base,
      ease: premiumEasing
    }
  }
};

// Staggered Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

// Scale In (For images or premium cards)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: premiumEasing
    }
  }
};

// Subtle reveal (opacity only, no motion)
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: durations.base,
      ease: premiumEasing
    }
  }
};

// Viewport options for whileInView
export const viewportSettings = { once: true, amount: 0.2 };
