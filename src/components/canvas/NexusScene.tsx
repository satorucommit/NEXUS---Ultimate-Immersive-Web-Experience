"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
uniform float uTime;
uniform vec2 uMouse;
varying float vDist;

void main() {
  vec3 pos = position;
  
  // Create a wavy movement
  pos.y += sin(pos.x * 2.0 + uTime) * 0.1;
  pos.x += cos(pos.y * 2.0 + uTime) * 0.1;

  // Mouse repulsion
  vec3 mouseWorld = vec3(uMouse.x * 5.0, uMouse.y * 5.0, 0.0);
  float dist = distance(pos, mouseWorld);
  vDist = dist;

  if (dist < 1.5) {
    vec3 dir = normalize(pos - mouseWorld);
    pos += dir * (1.5 - dist) * 0.5;
  }

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = (15.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

const fragmentShader = `
uniform vec3 uColorCyan;
uniform vec3 uColorMagenta;
varying float vDist;

void main() {
  float distToCenter = distance(gl_PointCoord, vec2(0.5));
  if (distToCenter > 0.5) discard;

  float alpha = 1.0 - (distToCenter * 2.0);
  
  // Mix color based on proximity to mouse
  vec3 color = mix(uColorMagenta, uColorCyan, smoothstep(0.0, 2.0, vDist));
  
  // Emissive intensity based on proximity
  float intensity = mix(2.0, 0.5, smoothstep(0.0, 2.0, vDist));

  gl_FragColor = vec4(color * intensity, alpha);
}
`;

function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);
  const count = 3000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColorCyan: { value: new THREE.Color("#00f0ff") },
    uColorMagenta: { value: new THREE.Color("#ff00ff") },
  }), []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta * 0.05;
      pointsRef.current.rotation.y -= delta * 0.05;
    }
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      // Smoothly interpolate mouse position
      materialRef.current.uniforms.uMouse.value.x = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.x,
        state.pointer.x,
        0.1
      );
      materialRef.current.uniforms.uMouse.value.y = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uMouse.value.y,
        state.pointer.y,
        0.1
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function NexusScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
}
