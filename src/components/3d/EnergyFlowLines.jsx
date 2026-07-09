import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function EnergyFlowLines() {
  const dashRef = useRef();

  useFrame((state) => {
    if (dashRef.current) {
      // Offset the line dash to simulate movement flow
      dashRef.current.material.dashOffset = -state.clock.getElapsedTime() * 0.4;
    }
  });

  // Flow line path nodes (curved coordinates)
  const points = [
    [-3, -1.5, -2],
    [-1, -0.5, -0.5],
    [1, 0.5, 0.5],
    [3, 1.5, 2]
  ];

  return (
    <group>
      {/* Primary Emerald Flow Line */}
      <Line
        ref={dashRef}
        points={points}
        color="#10b981"
        lineWidth={1.5}
        dashed
        dashScale={8}
        dashSize={0.4}
        dashGap={0.2}
      />
      {/* Static Cyan Backdrop path */}
      <Line
        points={points}
        color="#06b6d4"
        lineWidth={0.5}
        transparent
        opacity={0.25}
      />
    </group>
  );
}
