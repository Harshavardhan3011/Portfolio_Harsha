import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig({ children }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Lerp mouse pointer coordinates into parent rotations
      const targetY = state.pointer.x * 0.25;
      const targetX = -state.pointer.y * 0.15;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.05
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
}
