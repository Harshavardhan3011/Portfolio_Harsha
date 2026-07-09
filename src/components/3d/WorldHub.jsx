import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import ProjectMissionCard from "./ProjectMissionCard";

export default function WorldHub() {
  const hubRef = useRef();
  const navigate = useNavigate();

  useFrame((state) => {
    if (hubRef.current) {
      // Gentle rotation of the overall menu hub
      hubRef.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    }
  });

  const zones = [
    { name: "Home Dashboard", slug: "home", path: "/", tech: ["Core", "Workstation"] },
    { name: "Mission Intel", slug: "about", path: "/about", tech: ["Bio", "Academia"] },
    { name: "Skills Galaxy", slug: "skills", path: "/skills", tech: ["Tech", "Nodes"] },
    { name: "Combat Missions", slug: "projects", path: "/projects", tech: ["Apps", "Demos"] },
    { name: "Hologram CV", slug: "resume", path: "/resume", tech: ["Data", "Downloads"] },
    { name: "Terminal secure", slug: "contact", path: "/contact", tech: ["Mail", "EmailJS"] }
  ];

  return (
    <group ref={hubRef}>
      {zones.map((zone, idx) => {
        const angle = (idx * 2 * Math.PI) / zones.length;
        const r = 2.6;
        const x = r * Math.sin(angle);
        const z = r * Math.cos(angle);

        return (
          <ProjectMissionCard
            key={zone.slug}
            title={zone.name}
            desc={`Click portal core to access ${zone.name}.`}
            tech={zone.tech}
            position={[x, 0, z]}
            onSelect={() => navigate(zone.path)}
          />
        );
      })}
    </group>
  );
}
