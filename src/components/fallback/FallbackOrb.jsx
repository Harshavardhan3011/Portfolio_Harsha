import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallbackOrb({ name, level, hovered = false }) {
  const orbRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    const speed = hovered ? 3 : 1;
    if (orbRef.current) {
      orbRef.current.rotation.y += delta * 0.5 * speed;
      orbRef.current.rotation.x += delta * 0.2 * speed;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.8 * speed;
      ring1Ref.current.rotation.y += delta * 0.3 * speed;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.6 * speed;
      ring2Ref.current.rotation.z += delta * 0.4 * speed;
    }
  });

  const neonColor = hovered ? "#34d399" : "#10b981";
  const scaleValue = hovered ? 1.3 : 1.0;

  return (
    <group scale={[scaleValue, scaleValue, scaleValue]}>
      {/* Central Core */}
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color={neonColor}
          wireframe
          transparent
          opacity={0.8}
          emissive={neonColor}
          emissiveIntensity={hovered ? 1.5 : 0.6}
        />
      </mesh>

      {/* Orbit Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[0.8, 0.02, 8, 32]} />
        <meshBasicMaterial color={neonColor} transparent opacity={0.5} />
      </mesh>

      {/* Orbit Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[0.9, 0.015, 8, 32]} />
        <meshBasicMaterial color={neonColor} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}
