import React from "react";
import { useGLTF } from "@react-three/drei";

function FallbackAvatar() {
  return (
    <group position={[0, -0.4, 0]}>
      {/* Hologram Head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color="#10b981"
          wireframe
          emissive="#00ff66"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Hologram Neck */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.12, 16]} />
        <meshStandardMaterial color="#047857" wireframe />
      </mesh>

      {/* Hologram Torso */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.25, 0.15, 0.8, 16]} />
        <meshStandardMaterial
          color="#064e3b"
          transparent
          opacity={0.7}
          wireframe
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Hologram Shoulder Left */}
      <mesh position={[-0.32, 0.8, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color="#00ff66" wireframe />
      </mesh>

      {/* Hologram Shoulder Right */}
      <mesh position={[0.32, 0.8, 0]}>
        <sphereGeometry args={[0.07, 8, 8]} />
        <meshBasicMaterial color="#00ff66" wireframe />
      </mesh>

      {/* Hologram Arms */}
      <mesh position={[-0.45, 0.4, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.05, 0.04, 0.7, 8]} />
        <meshStandardMaterial color="#047857" wireframe />
      </mesh>
      <mesh position={[0.45, 0.4, 0]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.05, 0.04, 0.7, 8]} />
        <meshStandardMaterial color="#047857" wireframe />
      </mesh>

      {/* Glowing Aura Ring below the avatar */}
      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.02, 8, 32]} />
        <meshBasicMaterial color="#00ff66" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function GLBAvatar(props) {
  const { scene } = useGLTF("/src/assets/models/developer-avatar.glb");
  return <primitive object={scene} {...props} />;
}

export default class DeveloperAvatar extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {}

  render() {
    if (this.state.hasError) {
      return <FallbackAvatar />;
    }
    return <GLBAvatar {...this.props} />;
  }
}
