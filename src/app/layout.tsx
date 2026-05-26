import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseTracker from "@/components/effects/MouseTracker";
import Cursor from "@/components/effects/Cursor";
import SmoothScroller from "@/components/effects/SmoothScroller";
import { Preloader } from "@/components/effects/Preloader";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXUS — Digital Consciousness Interface",
  description: "A highly performant WebGL experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroller>
          <Preloader />
          <Navbar />
          <MouseTracker />
          <Cursor />
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
