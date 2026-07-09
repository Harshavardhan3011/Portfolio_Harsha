import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export default function SceneCanvas({ children, cameraPosition = [0, 0, 5], ...props }) {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: cameraPosition, fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
        {...props}
      >
        {/* Lights configuration */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
        <pointLight position={[-5, 5, -5]} intensity={0.8} color="#00ff66" />
        <pointLight position={[5, -5, 5]} intensity={0.6} color="#10b981" />

        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
