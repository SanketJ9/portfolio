'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, NearestFilter } from 'three';
import { Suspense, useRef, useEffect, useMemo } from 'react';

function PlanetEarth() {
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

export default function Intro() {
  return (
    <>
      <div data-scroll data-scroll-speed="-.5" className="landing container">
        <div className="intro-cont relative flex min-h-[100svh] flex-col-reverse items-center justify-evenly sm:flex-row sm:justify-between">
          <div className="intro relative z-10 flex h-max w-full flex-col justify-center sm:w-1/2">
            <div className="name">
              <p className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-center md:text-left font-extrabold font-primary text-primary font-heading pb-3 leading-none">SANKET JADHAV</p>
            </div>
            <div className="role">
              <p className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] text-center md:text-left text-gray-500 font-bold pb-3 leading-none">Front-End Developer</p>
            </div>
            <div className="desc">
              <p className="text-[1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.25rem] text-justify pb-8 text-grey-700 mix-blend-difference">a passionate and dedicated front-end developer with 3 years of experience in crafting beautiful and functional websites and web applications.</p>
            </div>

            <div className="social flex flex-row flex-wrap items-center justify-center gap-[30px] sm:justify-start">
              <div className="dl-btn flex basis-full justify-center sm:block sm:basis-auto">
                <a href="/sanket-jadhav-resume.pdf" download className="block max-w-[280px] rounded-lg border border-3 border-primary px-5 py-3 text-center text-[1rem] font-bold fomt-bold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">Download Resume</a>
              </div>
              <a href="https://github.com/SanketJ9" target="blank" rel="noreferrer">
                <FaGithub className="icons s-icons cursor-pointer rounded-md bg-white p-1 text-5xl text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white mg:text-6xl transitions"/>
              </a>
              <a href="https://www.linkedin.com/in/sanketjadhav19" target="blank" rel="noreferrer">
                <FaLinkedin className="icons s-icons cursor-pointer rounded-md bg-white p-1 text-5xl text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white mg:text-6xl transitions"/>
              </a>
              <a href="mailto:jadhavsanket621@gmail.com" target="blank" rel="noreferrer">
                <SiGmail className="icons s-icons cursor-pointer rounded-md bg-white p-1 text-5xl text-primary hover:bg-primary hover:text-white active:bg-primary active:text-white mg:text-6xl transitions"/> 
              </a>
            </div>
          </div>
          <div className="illust absolute right-0 top-0 w-full h-[600px] sm:w-[60%] sm:h-full -z-10 opacity-70 mx-auto flex items-center justify-center pointer-events-none">
            <Canvas>
              <ambientLight intensity={1.5} />
              <directionalLight position={[2, 5, 2]} intensity={2.5} />
              <Suspense fallback={null}>
                <PlanetEarth />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}