import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function NeonGrid({ speed = 1.0 }) {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      // Loop the position along Z to create continuous scrolling
      gridRef.current.position.z = (state.clock.getElapsedTime() * speed) % 2;
    }
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Primary animated grid */}
      <group ref={gridRef}>
        <gridHelper
          args={[30, 30, "#00ff66", "#042f1a"]}
          position={[0, 0, 0]}
        />
        <gridHelper
          args={[30, 30, "#00ff66", "#042f1a"]}
          position={[0, 0, 30]}
        />
        <gridHelper
          args={[30, 30, "#00ff66", "#042f1a"]}
          position={[0, 0, -30]}
        />
      </group>
    </group>
  );
}
