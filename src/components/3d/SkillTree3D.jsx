import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import SkillOrb from "./SkillOrb";
import { skills } from "../../data/skills";

export default function SkillTree3D() {
  const treeRef = useRef();

  useFrame((state) => {
    if (treeRef.current) {
      // Gentle floating rotation of the entire tree network
      treeRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  const rootPosition = [0, 0, 0];

  // Map skills into branch directories with coordinates
  const structuredNodes = skills.map((s, idx) => {
    let position = [0, 0, 0];
    const angle = (idx * 2 * Math.PI) / skills.length;
    const r = 2.5;

    // Distribute nodes in branches
    if (s.category === "Frontend") {
      position = [r * Math.cos(angle), 0.5, r * Math.sin(angle)];
    } else if (s.category === "Languages") {
      position = [-r * Math.cos(angle), -0.5, r * Math.sin(angle)];
    } else if (s.category === "Backend") {
      position = [0.3, r * Math.sin(angle), r * Math.cos(angle)];
    } else {
      position = [r * Math.cos(angle), r * Math.sin(angle) * 0.4, -r * Math.sin(angle)];
    }

    return {
      ...s,
      position
    };
  });

  return (
    <group ref={treeRef}>
      {/* Root core indicator */}
      <mesh position={rootPosition}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color="#00ff66"
          wireframe
          emissive="#00ff66"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Render connections and orbs */}
      {structuredNodes.map((node) => (
        <group key={node.name}>
          {/* Neon pointer connection line from center root node */}
          <Line
            points={[rootPosition, node.position]}
            color="#10b981"
            lineWidth={0.5}
            transparent
            opacity={0.3}
          />
          
          {/* Interactive Skill Orb */}
          <SkillOrb
            name={node.name}
            level={node.level}
            category={node.category}
            desc={node.desc}
            position={node.position}
          />
        </group>
      ))}
    </group>
  );
}
