import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function FloatingCodePanels() {
  const panel1 = useRef();
  const panel2 = useRef();
  const panel3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Bobbing and orbiting equations
    if (panel1.current) {
      panel1.current.position.y = Math.sin(t * 0.8) * 0.15 + 1.2;
      panel1.current.position.x = Math.sin(t * 0.5) * 1.5 - 1.8;
      panel1.current.position.z = Math.cos(t * 0.5) * 1.0 - 0.5;
    }

    if (panel2.current) {
      panel2.current.position.y = Math.cos(t * 0.9) * 0.15 + 0.8;
      panel2.current.position.x = Math.cos(t * 0.4) * 1.6 + 1.8;
      panel2.current.position.z = Math.sin(t * 0.4) * 1.0 - 0.5;
    }

    if (panel3.current) {
      panel3.current.position.y = Math.sin(t * 0.7) * 0.15 + 1.5;
      panel3.current.position.x = Math.sin(t * 0.3) * 0.8;
      panel3.current.position.z = Math.cos(t * 0.3) * 1.8 - 2.0;
    }
  });

  return (
    <group>
      {/* Panel 1 - React Core */}
      <group ref={panel1} position={[-1.8, 1.2, -0.5]}>
        <Html transform distanceFactor={3} occlude>
          <div className="select-none p-3 bg-black/85 border border-emerald-500/40 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)] text-[9px] font-mono text-emerald-400 w-44">
            <div className="flex justify-between items-center border-b border-emerald-500/20 pb-1 mb-1.5 text-emerald-500 font-bold">
              <span>App.jsx</span>
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </div>
            </div>
            <p className="text-gray-400 font-semibold mb-0.5">const Portfolio = () =&gt; &#123;</p>
            <p className="pl-2">const [mode, setMode] = useState("3D");</p>
            <p className="pl-2 text-emerald-300">return &lt;Canvas&gt;</p>
            <p className="pl-4 text-emerald-300">&lt;HeroScene /&gt;</p>
            <p className="pl-2 text-emerald-300">&lt;/Canvas&gt;</p>
            <p className="text-gray-400 font-semibold">&#125;;</p>
          </div>
        </Html>
      </group>

      {/* Panel 2 - Tailwind CSS Design */}
      <group ref={panel2} position={[1.8, 0.8, -0.5]}>
        <Html transform distanceFactor={3} occlude>
          <div className="select-none p-3 bg-black/85 border border-emerald-500/40 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)] text-[9px] font-mono text-emerald-400 w-44">
            <div className="flex justify-between items-center border-b border-emerald-500/20 pb-1 mb-1.5 text-emerald-500 font-bold">
              <span>tailwind.config.js</span>
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </div>
            </div>
            <p className="text-emerald-500">theme: &#123;</p>
            <p className="pl-2">extend: &#123;</p>
            <p className="pl-4 text-emerald-300">colors: &#123;</p>
            <p className="pl-6 text-yellow-300">cyberGreen: "#00ff66",</p>
            <p className="pl-6 text-yellow-300">neonDark: "#050816"</p>
            <p className="pl-4 text-emerald-300">&#125;,</p>
            <p className="pl-2">&#125;</p>
            <p className="text-emerald-500">&#125;</p>
          </div>
        </Html>
      </group>

      {/* Panel 3 - 3D Renderer Logic */}
      <group ref={panel3} position={[0, 1.5, -2.0]}>
        <Html transform distanceFactor={3.2} occlude>
          <div className="select-none p-3 bg-black/85 border border-emerald-500/40 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)] text-[9px] font-mono text-emerald-400 w-48">
            <div className="flex justify-between items-center border-b border-emerald-500/20 pb-1 mb-1.5 text-emerald-500 font-bold">
              <span>R3F-Renderer.js</span>
              <div className="flex space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </div>
            </div>
            <p className="text-purple-400">import * as THREE from 'three';</p>
            <p className="text-emerald-300">useFrame((state, delta) =&gt; &#123;</p>
            <p className="pl-2">camera.position.x = Math.sin(state.pointer.x);</p>
            <p className="pl-2">mesh.rotation.y += delta * 0.5;</p>
            <p className="text-emerald-300">&#125;);</p>
          </div>
        </Html>
      </group>
    </group>
  );
}
