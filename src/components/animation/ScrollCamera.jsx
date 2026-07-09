import React from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ScrollCamera({ intensity = 1.0 }) {
  useFrame((state) => {
    const scrollY = window.scrollY;
    
    // Scale scroll input down to fit within R3F workspace boundaries
    const targetZ = 5 + (scrollY * 0.005 * intensity);
    const targetY = -(scrollY * 0.003 * intensity);
    const targetX = Math.sin(scrollY * 0.001) * 0.5 * intensity;

    // Smooth transition interpolators (lerp)
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.1);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.1);
    
    // Make the camera look at the scene center continuously
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
