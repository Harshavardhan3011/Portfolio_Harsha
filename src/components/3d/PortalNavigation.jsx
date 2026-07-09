import React from "react";
import SceneCanvas from "./SceneCanvas";
import WorldHub from "./WorldHub";
import ParticleField from "./ParticleField";

export default function PortalNavigation() {
  return (
    <div className="w-full h-[400px] border border-emerald-950/60 rounded-2xl bg-black/60 backdrop-blur-md relative overflow-hidden">
      <SceneCanvas cameraPosition={[0, 1.2, 4.0]}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00ff66" />
        <ParticleField count={100} />
        <WorldHub />
      </SceneCanvas>
    </div>
  );
}
