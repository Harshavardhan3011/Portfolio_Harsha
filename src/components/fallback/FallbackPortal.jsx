import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function FallbackPortal({ hovered = false }) {
  const portalRingRef = useRef();
  const innerRef = useRef();

  useFrame((state, delta) => {
    const speed = hovered ? 2.5 : 1;
    if (portalRingRef.current) {
      portalRingRef.current.rotation.z += delta * 0.5 * speed;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.3 * speed;
    }
  });

  const portalColor = hovered ? "#00ff66" : "#059669";
  const scaleValue = hovered ? 1.15 : 1.0;

  return (
    <group scale={[scaleValue, scaleValue, scaleValue]}>
      {/* outer portal ring */}
      <mesh ref={portalRingRef}>
        <torusGeometry args={[1.2, 0.08, 16, 100]} />
        <meshStandardMaterial
          color={portalColor}
          emissive={portalColor}
          emissiveIntensity={hovered ? 2.0 : 0.8}
        />
      </mesh>

      {/* portal visual core */}
      <mesh ref={innerRef} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[1.1, 1.1, 0.05, 32]} />
        <meshStandardMaterial
          color="#012a14"
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.85}
          wireframe
        />
      </mesh>

      {/* dynamic light source */}
      <pointLight distance={3} intensity={hovered ? 5 : 2} color={portalColor} />
    </group>
  );
}
