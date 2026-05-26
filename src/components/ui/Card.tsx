import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] rounded-2xl transition-colors duration-500 hover:border-[rgba(0,240,255,0.5)] p-6", className)}>
      {children}
    </div>
  );
}
