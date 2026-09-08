"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import RubiksCube from "./Rubicube";

interface CubeControllerProps {
  scrollProgressRef: React.MutableRefObject<number>;
}

export default function CubeController({ scrollProgressRef }: CubeControllerProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // State for preloader transition
  const [isPreloader, setIsPreloader] = useState(true);
  const positionRef = useRef(new THREE.Vector3(0, 0, 0));
  const scaleRef = useRef(0.8);

  // State for interaction
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePreloaderComplete = () => {
      // Immediately hand over control to useFrame, which will smoothly 
      // lerp the cube from [0,0,0] to the p=0 keyframe position!
      setIsPreloader(false);
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete, { once: true });
    return () => window.removeEventListener("preloaderComplete", handlePreloaderComplete);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (!isPreloader) {
      // Interpolate position based on scroll
      const progress = scrollProgressRef.current;
      
      // Define keyframes [progress, x, y, z, scale]
      const keyframes = [
        { p: 0.0, pos: new THREE.Vector3(2,0, 0), scale: 0.6 },
        { p: 0.30, pos: new THREE.Vector3(-2, 0, 0), scale: 0.4},
        { p: 0.50, pos: new THREE.Vector3(-2.5, 0, 0), scale: 0.4},
        { p: 0.70, pos: new THREE.Vector3(-2.5, -1, 0), scale: 0.4 },
        { p: 1.0, pos: new THREE.Vector3(2, 0, 0), scale: 0.6 },
      ];

      // Find current segment
      let currentFrame = keyframes[0];
      let nextFrame = keyframes[1];
      let localProgress = 0;

      for (let i = 0; i < keyframes.length - 1; i++) {
        if (progress >= keyframes[i].p && progress <= keyframes[i+1].p) {
          currentFrame = keyframes[i];
          nextFrame = keyframes[i+1];
          const segmentLength = nextFrame.p - currentFrame.p;
          localProgress = (progress - currentFrame.p) / segmentLength;
          break;
        }
        if (i === keyframes.length - 2 && progress > keyframes[i+1].p) {
           currentFrame = keyframes[i+1];
           nextFrame = keyframes[i+1];
           localProgress = 1;
        }
      }

      // Smoothly interpolate towards target
      const targetPos = currentFrame.pos.clone().lerp(nextFrame.pos, localProgress);
      const targetScale = THREE.MathUtils.lerp(currentFrame.scale, nextFrame.scale, localProgress);

      positionRef.current.lerp(targetPos, 0.1);
      scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 0.1);
    }

    // Apply position and scale
    groupRef.current.position.copy(positionRef.current);
    groupRef.current.scale.setScalar(scaleRef.current);

    // Rotation logic
    if (isDragging) {
       // Drag rotation handled in events
    } else {
      if (!isHovered) {
        // Auto rotate
        groupRef.current.rotation.y += delta * 0.5;
        groupRef.current.rotation.x += delta * 0.2;
      }
    }
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    setIsDragging(true);
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
    if (e.target) e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    setIsDragging(false);
    if (e.target) e.target.releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: any) => {
    if (isDragging && groupRef.current) {
      e.stopPropagation();
      const deltaMove = {
        x: e.clientX - previousMousePosition.current.x,
        y: e.clientY - previousMousePosition.current.y
      };

      // Simple rotation around world axes based on mouse movement
      groupRef.current.rotation.y += deltaMove.x * 0.01;
      groupRef.current.rotation.x += deltaMove.y * 0.01;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    }
  };

  return (
    <group 
      ref={groupRef}
      onPointerEnter={(e) => { e.stopPropagation(); setIsHovered(true); document.body.style.cursor = 'grab'; }}
      onPointerLeave={(e) => { e.stopPropagation(); setIsHovered(false); setIsDragging(false); document.body.style.cursor = 'auto'; }}
      onPointerDown={(e) => { document.body.style.cursor = 'grabbing'; handlePointerDown(e); }}
      onPointerUp={(e) => { document.body.style.cursor = 'grab'; handlePointerUp(e); }}
      onPointerMove={handlePointerMove}
    >
      <RubiksCube />
    </group>
  );
}
