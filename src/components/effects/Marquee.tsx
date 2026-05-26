"use client";

import { motion } from "framer-motion";

export function Marquee({ text }: { text: string }) {
  return (
    <div className="relative w-full overflow-hidden flex bg-[var(--accent-cyan)]/10 border-y border-[var(--accent-cyan)]/20 py-4 z-10 backdrop-blur-sm">
      <motion.div
        className="flex whitespace-nowrap text-[var(--accent-cyan)] font-mono text-sm tracking-[0.2em] uppercase font-bold"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        <span className="pr-10">{text}</span>
        <span className="pr-10">{text}</span>
        <span className="pr-10">{text}</span>
        <span className="pr-10">{text}</span>
      </motion.div>
    </div>
  );
}
