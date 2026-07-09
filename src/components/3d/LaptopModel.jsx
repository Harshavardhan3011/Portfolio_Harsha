import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import FallbackLaptop from "../fallback/FallbackLaptop";

// Sub-component that actually calls useGLTF
function GLBLaptop(props) {
  // Try loading GLTF
  const { scene } = useGLTF("/src/assets/models/laptop-workstation.glb");
  return <primitive object={scene} {...props} />;
}

// Main component with Error Boundary + fallback state
export default class LaptopModel extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // suppress console spam for missing model assets
  }

  render() {
    if (this.state.hasError) {
      return <FallbackLaptop {...this.props} />;
    }
    return <GLBLaptop {...this.props} />;
  }
}
