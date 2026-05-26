"use client";

import { motion } from "framer-motion";

export function TextReveal({ text, className, typewriter = false }: { text: string; className?: string; typewriter?: boolean }) {
  const elements = typewriter ? text.split("") : text.split(" ");

  const container = {
    hidden: { opacity: typewriter ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: typewriter ? 0.5 : 0 }
    }
  };

  const child = typewriter ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.01 }
    }
  } : {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 10 }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {elements.map((el, idx) => (
        <motion.span key={idx} variants={child} className={typewriter ? "inline-block" : "inline-block mr-[0.25em]"}>
          {typewriter && el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </motion.div>
  );
}
