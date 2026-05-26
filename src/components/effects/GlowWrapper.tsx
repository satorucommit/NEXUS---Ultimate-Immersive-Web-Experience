"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function GlowWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{
        filter: [
          "drop-shadow(0px 0px 0px rgba(0, 240, 255, 0))",
          "drop-shadow(0px 0px 25px rgba(0, 240, 255, 0.4))",
          "drop-shadow(0px 0px 0px rgba(0, 240, 255, 0))",
        ]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
