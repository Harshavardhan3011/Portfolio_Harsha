import React from "react";
import ResumeHologram from "./ResumeHologram";

export default function ResumeScanner3D({ onDownload }) {
  return (
    <group>
      {/* Lights focusing on the hologram */}
      <spotLight
        position={[0, 4, 2]}
        angle={0.6}
        penumbra={0.5}
        intensity={2.0}
        color="#00ff66"
      />

      {/* Hologram Board */}
      <ResumeHologram onDownload={onDownload} />
    </group>
  );
}
