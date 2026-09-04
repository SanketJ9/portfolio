import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, NearestFilter } from 'three';
import { Suspense, useRef, useEffect,  } from 'react';

export default function PlanetEarth() {
  const [earthMap, cloudMap] = useLoader(TextureLoader, [
    '/earthm.jpg',
    '/cloud.png'
  ]);
  
  const earthRef = useRef<any>(null);
  const cloudRef = useRef<any>(null);
  const groupRef = useRef<any>(null);

  // Track drag state
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };
    
    const handlePointerUp = () => {
      isDragging.current = false;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;
      
      if (groupRef.current) {
        groupRef.current.rotation.y += deltaX * 0.01;
        groupRef.current.rotation.x += deltaY * 0.01;
      }
      
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointermove', handlePointerMove);
    
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  useFrame(() => {
    // 1. Continuous auto-rotation only when NOT dragging
    if (earthRef.current && cloudRef.current && !isDragging.current) {
      earthRef.current.rotation.y += 0.002;
      cloudRef.current.rotation.y += 0.0025; 
    }
  });

  return (
    <group ref={groupRef}>
      {/* Inner group applies the 21 degree axial tilt */}
      <group rotation={[0, 0, 21 * Math.PI / 180]}>
        <mesh ref={earthRef}>
          <sphereGeometry args={[2.35, 64, 64]} />
          <meshStandardMaterial map={earthMap} />
        </mesh>
        <mesh ref={cloudRef}>
          <sphereGeometry args={[2.54, 64, 64]} />
          <meshStandardMaterial 
            map={cloudMap} 
            transparent={true}
            opacity={0.8}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}