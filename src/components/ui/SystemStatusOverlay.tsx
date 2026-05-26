"use client";

import { useEffect, useState } from "react";

export function SystemStatusOverlay() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().split("T")[1].replace("Z", ""));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Top Left - Removed as requested */}

      {/* Top Right - Time */}
      <div className="absolute top-6 right-6">
        <span className="text-white/40 font-mono text-xs tracking-widest">
          UTC {time}
        </span>
      </div>

      {/* Bottom Right - Coordinates */}
      <div className="absolute bottom-6 right-6 text-right">
        <div className="text-white/20 font-mono text-[10px] tracking-widest uppercase mb-1">
          Grid Sector 7G
        </div>
        <div className="text-white/40 font-mono text-xs tracking-widest">
          34.0522° N, 118.2437° W
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute left-0 top-1/4 w-4 h-[1px] bg-white/20" />
      <div className="absolute right-0 top-1/4 w-4 h-[1px] bg-white/20" />
      <div className="absolute left-0 top-3/4 w-4 h-[1px] bg-white/20" />
      <div className="absolute right-0 top-3/4 w-4 h-[1px] bg-white/20" />
      
      <div className="absolute top-0 left-1/4 w-[1px] h-4 bg-white/20" />
      <div className="absolute bottom-0 left-1/4 w-[1px] h-4 bg-white/20" />
      <div className="absolute top-0 left-3/4 w-[1px] h-4 bg-white/20" />
      <div className="absolute bottom-0 left-3/4 w-[1px] h-4 bg-white/20" />
    </div>
  );
}
