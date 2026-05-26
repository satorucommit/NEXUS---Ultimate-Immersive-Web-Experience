"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add no-scroll class to body while loading
    document.body.style.overflow = "hidden";
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
          }, 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 5;
      });
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--bg-primary)] flex flex-col items-center justify-center"
        >
          <div className="w-64 md:w-96">
            <div className="flex justify-between text-[var(--accent-cyan)] font-mono text-xs mb-3 tracking-widest uppercase">
              <span className="animate-pulse">Booting Nexus Kernel...</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            <div className="w-full h-[2px] bg-[var(--glass-border)] overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[var(--accent-cyan)] shadow-[0_0_10px_var(--accent-cyan)]"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "circOut", duration: 0.2 }}
              />
            </div>
            <div className="mt-4 text-[10px] text-white/30 font-mono text-center tracking-widest">
              INITIALIZING WEBGL ENVIRONMENT
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
