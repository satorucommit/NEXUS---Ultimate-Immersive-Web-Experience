# NEXUS — Ultimate Immersive Web Experience

A futuristic, WebGL-powered showcase built with Next.js, React, and Three.js. NEXUS presents an ambient digital interface with interactive telemetry, immersive visual effects, and neon cyberpunk styling.

## Features

- Full-screen hero experience with a custom `@react-three/fiber` particle scene
- Animated glassmorphism UI with magnetic buttons, text reveals, and motion visuals
- System telemetry page with live mock metrics and adaptive data cards
- Explore page with ambient background visuals and simulated network status
- Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and custom GLSL shaders

## Pages

- `/` — Landing page with the core NEXUS scene and navigation
- `/system` — Telemetry dashboard with system stats and protocol status
- `/explore` — Exploration panel for the Nexus grid experience

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the app.

## Build

```bash
npm run build
```

## Start

```bash
npm start
```

## Dependencies

- `next` 16.2.4
- `react` 19.2.4
- `react-dom` 19.2.4
- `@react-three/fiber` for Three.js integration
- `@react-three/drei` for common 3D helpers
- `framer-motion` for animated transitions
- `lenis` and `@studio-freight/react-lenis` for smooth scrolling
- `tailwindcss` v4 for utility-first styling

## Project Structure

- `src/app/` — route pages and layout
- `src/components/` — reusable UI, effects, and canvas scene
- `src/components/canvas/NexusScene.tsx` — custom particle scene using shader materials
- `src/components/effects/` — animated reveal, marquee, and loader components
- `src/components/ui/` — cards, buttons, telemetry, and overlays

## Notes

This project is designed as a visual concept and immersive UI prototype rather than a production dashboard. Adjust the GLSL shaders, 3D animation, and mock telemetry to extend the experience.

