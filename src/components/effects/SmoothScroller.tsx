"use client";

import { ReactLenis } from '@studio-freight/react-lenis';

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      {children as any}
    </ReactLenis>
  );
}
