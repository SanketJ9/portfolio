"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import CubeController from "./CubeController";

interface GlobalCanvasProps {
  scrollProgressRef: React.MutableRefObject<number>;
  isPreloader?: boolean;
}

export default function GlobalCanvas({ scrollProgressRef, isPreloader: externalIsPreloader }: GlobalCanvasProps) {
  const [internalIsPreloader, setInternalIsPreloader] = useState(true);

  useEffect(() => {
    const handlePreloaderComplete = () => {
      setInternalIsPreloader(false);
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete, { once: true });
    return () => window.removeEventListener("preloaderComplete", handlePreloaderComplete);
  }, []);

  const isPreloader = externalIsPreloader !== undefined ? externalIsPreloader : internalIsPreloader;

  return (
    <div className={`fixed inset-0 pointer-events-none ${isPreloader ? "z-[60]" : "z-[25]"}`}>
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
