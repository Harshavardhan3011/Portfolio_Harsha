import React from "react";
import CameraRig from "./CameraRig";
import LaptopModel from "./LaptopModel";
import AvatarDisplay from "./AvatarDisplay";
import FloatingCodePanels from "./FloatingCodePanels";
import NeonGrid from "./NeonGrid";
import ParticleField from "./ParticleField";

export default function HeroScene() {
  return (
    <group>
      {/* Scroll-translating grid floor */}
      <NeonGrid speed={1.2} />

      {/* Floating emerald sparks */}
      <ParticleField count={220} />

      {/* Parallax rig enclosing workstations */}
      <CameraRig>
        <group position={[0, 0, 0]}>
          {/* Avatar display console */}
          <AvatarDisplay />

          {/* Computer desk chassis */}
          <LaptopModel position={[0, -0.6, 0.4]} scale={[0.9, 0.9, 0.9]} />

          {/* Orbiting text panel screens */}
          <FloatingCodePanels />
        </group>
      </CameraRig>
    </group>
  );
}
