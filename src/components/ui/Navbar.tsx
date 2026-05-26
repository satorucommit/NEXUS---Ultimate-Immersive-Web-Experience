"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/system", label: "System" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 py-6 px-12 flex justify-center pointer-events-auto">
      <div className="flex gap-8 px-8 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-full backdrop-blur-md text-sm font-mono tracking-widest uppercase">
        {links.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className={cn(
              "relative transition-colors hover:text-[var(--accent-cyan)] px-2 py-1",
              pathname === link.href ? "text-[var(--accent-cyan)]" : "text-white/60"
            )}
          >
            {pathname === link.href && (
              <motion.div 
                layoutId="navbar-indicator"
                className="absolute inset-0 border-b-2 border-[var(--accent-cyan)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
