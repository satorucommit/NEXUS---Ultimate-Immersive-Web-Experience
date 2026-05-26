import { TextReveal } from "@/components/effects/TextReveal";
import { SystemStats } from "@/components/ui/SystemStats";
import { Card } from "@/components/ui/Card";

function IntegrationsSection() {
  const tools = ["Quantum Core", "Neural Net V4", "Holographic API", "Subspace Comms", "Bio-Digital Interface"];
  
  return (
    <section className="relative py-20 px-6 md:px-12 w-full z-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-white/50 font-mono text-sm tracking-widest uppercase mb-12">
          Synchronized Core Protocols
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {tools.map((tool, i) => (
            <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <div className="w-4 h-4 rounded-full border border-[var(--accent-magenta)]/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[var(--accent-cyan)] rounded-full animate-ping" />
              </div>
              <span className="font-mono text-xs text-white uppercase tracking-wider">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SystemPage() {
  return (
    <main className="min-h-screen pt-32 px-6 md:px-12 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <TextReveal text="System Telemetry" className="text-4xl md:text-6xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40" />
        <p className="text-white/50 font-mono tracking-widest uppercase text-xs mb-8 text-center">
          Live Core Metrics
        </p>
        
        <SystemStats />

        <div className="w-full mt-12">
          <IntegrationsSection />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-20">
          <Card className="h-64 flex flex-col justify-between p-8">
            <div className="flex justify-between items-center w-full">
              <span className="font-mono text-white/60 tracking-widest uppercase text-xs">CPU Load</span>
              <span className="font-mono text-[var(--accent-cyan)] tracking-widest text-xs">Nominal</span>
            </div>
            <div className="w-full h-32 flex items-end gap-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-full bg-[var(--accent-cyan)]/20 rounded-t-sm animate-pulse" 
                  style={{ 
                    height: `${Math.random() * 80 + 20}%`,
                    animationDelay: `${i * 0.1}s`
                  }} 
                />
              ))}
            </div>
          </Card>
          
          <Card className="h-64 flex flex-col justify-between p-8">
            <div className="flex justify-between items-center w-full">
              <span className="font-mono text-white/60 tracking-widest uppercase text-xs">Memory Allocation</span>
              <span className="font-mono text-[var(--accent-magenta)] tracking-widest text-xs">Optimized</span>
            </div>
            <div className="w-full h-32 flex items-end gap-2">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-full bg-[var(--accent-magenta)]/20 rounded-t-sm animate-pulse" 
                  style={{ 
                    height: `${Math.random() * 50 + 10}%`,
                    animationDelay: `${i * 0.15}s`
                  }} 
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
