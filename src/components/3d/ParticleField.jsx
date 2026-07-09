import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField({ count = 250 }) {
  const pointsRef = useRef();

  // Generate particle positions, speeds, and sizes
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;     // X
      pos[i * 3 + 1] = Math.random() * 15 - 5;       // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;   // Z
      spd[i] = 0.02 + Math.random() * 0.05;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posArr = geo.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Move particle upwards
      posArr[i * 3 + 1] += speeds[i] * delta * 60;
      // Reset particle if it goes too high
      if (posArr[i * 3 + 1] > 10) {
        posArr[i * 3 + 1] = -5;
        posArr[i * 3] = (Math.random() - 0.5) * 20;
      }

      // Parallax hover movement based on cursor
      posArr[i * 3] += state.pointer.x * delta * 0.5;
    }

    geo.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#10b981"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}
