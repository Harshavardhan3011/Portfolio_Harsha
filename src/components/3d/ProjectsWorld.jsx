import React from "react";
import ProjectPortal from "./ProjectPortal";
import { projects } from "../../data/projects";

export default function ProjectsWorld({ onSelectProject }) {
  // Define positions in a smooth visual arc
  const positions = [
    [-3.2, 0.2, -0.8], // Left outer
    [-1.1, 0, 0],     // Left inner
    [1.1, 0, 0],      // Right inner
    [3.2, 0.2, -0.8]  // Right outer
  ];

  return (
    <group>
      {/* Dynamic glow point lights per portal */}
      <pointLight position={[-3, 1, 0]} intensity={1.5} color="#10b981" />
      <pointLight position={[3, 1, 0]} intensity={1.5} color="#10b981" />

      {projects.map((project, i) => (
        <ProjectPortal
          key={project.slug}
          {...project}
          position={positions[i] || [i * 2 - 3, 0, 0]}
          onSelect={() => onSelectProject(project)}
        />
      ))}
    </group>
  );
}
