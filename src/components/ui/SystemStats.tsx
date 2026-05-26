"use client";

import { useEffect, useState } from "react";
import { Card } from "./Card";

export function SystemStats() {
  const [latency, setLatency] = useState(12);
  const [activeNodes, setActiveNodes] = useState(3042);
  const [bandwidth, setBandwidth] = useState(94.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => Math.max(5, prev + (Math.random() * 4 - 2)));
      setActiveNodes((prev) => Math.floor(prev + (Math.random() * 10 - 3)));
      setBandwidth((prev) => Math.min(100, Math.max(80, prev + (Math.random() * 2 - 1))));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="flex flex-col items-center justify-center p-8 text-center border-l-4 border-l-[var(--accent-cyan)]">
          <div className="text-[var(--accent-cyan)] text-5xl font-mono mb-2">{latency.toFixed(1)}ms</div>
          <div className="text-white/50 uppercase tracking-widest text-xs font-semibold">Network Latency</div>
        </Card>
        <Card className="flex flex-col items-center justify-center p-8 text-center border-l-4 border-l-[var(--accent-magenta)]">
          <div className="text-[var(--accent-magenta)] text-5xl font-mono mb-2">{activeNodes.toLocaleString()}</div>
          <div className="text-white/50 uppercase tracking-widest text-xs font-semibold">Active Quantum Nodes</div>
        </Card>
        <Card className="flex flex-col items-center justify-center p-8 text-center border-l-4 border-l-[var(--accent-purple)]">
          <div className="text-[var(--accent-purple)] text-5xl font-mono mb-2">{bandwidth.toFixed(2)}TB/s</div>
          <div className="text-white/50 uppercase tracking-widest text-xs font-semibold">Global Bandwidth</div>
        </Card>
      </div>
    </section>
  );
}
