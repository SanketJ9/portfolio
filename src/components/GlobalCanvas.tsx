"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CubeController from "./CubeController";

interface GlobalCanvasProps {
  scrollProgressRef: React.MutableRefObject<number>;
}

export default function GlobalCanvas({ scrollProgressRef }: GlobalCanvasProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ pointerEvents: "none" }}
        eventSource={typeof document !== "undefined" ? document.body : undefined}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 5, 2]} intensity={2.5} />
        <directionalLight position={[2, -5, 2]} intensity={1.5} />
        <Suspense fallback={null}>
          <CubeController scrollProgressRef={scrollProgressRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
