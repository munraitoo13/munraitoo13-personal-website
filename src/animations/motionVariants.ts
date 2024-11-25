import { Variants } from "framer-motion";

// general variants
export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
export const tableOfContentsVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
};
export const linkVariants: Variants = {
  hover: {
    x: 5,
  },
  tap: {
    scale: 0.95,
  },
};
export const markdownVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
};

// home variants
export const presentationVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const contactAndResumeVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
};
export const phraseVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
    },
  },
};
export const qualitiesVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};
