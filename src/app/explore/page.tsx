import NexusScene from "@/components/canvas/NexusScene";
import { TextReveal } from "@/components/effects/TextReveal";
import { Card } from "@/components/ui/Card";

export default function ExplorePage() {
  return (
    <main className="min-h-screen pt-32 px-6 md:px-12 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background ambient scene */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <NexusScene />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <TextReveal text="Explore the Nexus Grid" className="text-4xl md:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40" />
        <p className="text-white/50 font-mono tracking-widest uppercase text-xs mb-16 text-center animate-pulse">
          Connection Established // Routing Traffic
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <Card className="h-96 flex flex-col items-center justify-center group relative overflow-hidden hover:border-[var(--accent-cyan)] cursor-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-full border border-[var(--accent-cyan)]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <div className="w-2 h-2 bg-[var(--accent-cyan)] rounded-full animate-ping" />
            </div>
            <span className="font-mono text-xl text-white tracking-widest uppercase mb-2">Interactive Node Map</span>
            <span className="text-[var(--accent-cyan)] font-mono text-xs tracking-widest uppercase opacity-60">Status: Offline</span>
          </Card>

          <Card className="h-96 flex flex-col items-center justify-center group relative overflow-hidden hover:border-[var(--accent-magenta)] cursor-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-magenta)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-16 h-16 rounded-full border border-[var(--accent-magenta)]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <div className="w-2 h-2 bg-[var(--accent-magenta)] rounded-full animate-pulse shadow-[0_0_15px_var(--accent-magenta)]" />
            </div>
            <span className="font-mono text-xl text-white tracking-widest uppercase mb-2">Consciousness Matrix</span>
            <span className="text-[var(--accent-magenta)] font-mono text-xs tracking-widest uppercase opacity-60">Status: Synced</span>
          </Card>
        </div>
      </div>
    </main>
  );
}
