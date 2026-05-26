import NexusScene from "@/components/canvas/NexusScene";
import { TextReveal } from "@/components/effects/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Card } from "@/components/ui/Card";
import { Marquee } from "@/components/effects/Marquee";
import { SystemStats } from "@/components/ui/SystemStats";
import { SystemStatusOverlay } from "@/components/ui/SystemStatusOverlay";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <NexusScene />
      <div className="relative z-10 flex flex-col items-center pointer-events-auto mt-20">
        <TextReveal 
          text="Digital Consciousness" 
          typewriter={true}
          className="text-5xl md:text-8xl font-bold text-center tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 mb-8"
        />
        <div className="text-white/60 font-mono tracking-widest uppercase text-sm mb-12 animate-pulse">
          Neural Handshake Established
        </div>
        <div className="flex gap-6 mt-4 pointer-events-auto relative z-20">
          <Link href="/system">
            <MagneticButton>System Telemetry</MagneticButton>
          </Link>
          <Link href="/explore">
            <MagneticButton className="bg-transparent hover:bg-[var(--glass-bg)] border-[var(--accent-cyan)]/30 text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)]">
              Explore Nexus
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  const tools = ["Quantum Core", "Neural Net V4", "Holographic API", "Subspace Comms", "Bio-Digital Interface"];
  
  return (
    <section className="relative py-20 px-6 md:px-12 w-full z-10 bg-gradient-to-b from-transparent via-[var(--accent-cyan)]/5 to-transparent">
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

function FeaturesGrid() {
  const features = [
    { title: "Quantum Routing", description: "Sub-millisecond data transfer across the nexus grid using advanced topological mapping." },
    { title: "Neural Synchronization", description: "Real-time state alignment between client interfaces and the global consciousness pool." },
    { title: "Holographic Rendering", description: "60FPS WebGL particle systems powered by custom GLSL shaders and GPU instancing." },
    { title: "Adaptive Layouts", description: "Fluid dimensional scaling based on viewport topology and device processing capacity." },
    { title: "Encrypted Pathways", description: "Secure tunnel protocols with end-to-end quantum resistance." },
    { title: "Zero-Latency Input", description: "Predictive interaction models masking network overhead entirely." },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto w-full z-10">
      <TextReveal text="Architectural Features" className="text-3xl md:text-5xl font-semibold mb-16 text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feat, i) => (
          <Card key={i} className="hover:-translate-y-2 transition-transform duration-500 group">
            <h3 className="text-xl font-medium text-[var(--accent-cyan)] mb-4 flex items-center gap-3">
              <span className="text-xs text-[var(--accent-magenta)] font-mono opacity-50 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              {feat.title}
            </h3>
            <p className="text-white/60 leading-relaxed text-sm">{feat.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="relative z-10 w-full py-12 px-6 md:px-12 border-t border-[var(--glass-border)] flex flex-col items-center justify-center text-sm text-white/40 backdrop-blur-md bg-[var(--bg-primary)]/80 mt-20">
      <div className="flex items-center gap-2">
        <p className="font-mono tracking-widest uppercase text-xs">Made with</p>
        <div className="w-2 h-2 rounded-full bg-[var(--accent-magenta)] shadow-[0_0_8px_var(--accent-magenta)] animate-pulse" />
        <p className="font-mono tracking-widest uppercase text-xs">by VED</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] selection:bg-[var(--accent-cyan)] selection:text-black">
      <SystemStatusOverlay />
      <HeroSection />
      <Marquee text="// NEXUS GLOBAL NETWORK ONLINE // SYNCHRONIZING NEURAL PATHWAYS // ZERO-LATENCY SECURE CONNECTION //" />
      <SystemStats />
      <IntegrationsSection />
      <FeaturesGrid />
      <FooterSection />
    </main>
  );
}
