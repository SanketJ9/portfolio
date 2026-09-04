'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Canvas } from '@react-three/fiber';
import { Suspense,  } from 'react';
import PlanetEarth from "./PlanetEarth";
import RubiksCube from "./Rubicube";
import { OrbitControls } from "@react-three/drei";

export default function Intro() {
  return (
    <>
      <div data-scroll data-scroll-speed="-.5" className="landing container">
        <div className="intro-cont relative flex min-h-[100svh] flex-col-reverse items-center justify-evenry md:justify-start sm:flex-row sm:justify-between">
          <div className="intro relative z-10 flex h-max w-full flex-col mb-12 justify-center sm:w-1/2 select-none pointer-events-none">
            <div className="name">
              <p className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-center md:text-left font-extrabold text-primary font-gugi pb-3 leading-none">SANKET JADHAV</p>
            </div>
            <div className="role">
              <p className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] text-center md:text-left text-gray-500 font-bold pb-3 leading-none">Front-End Developer</p>
            </div>
            <div className="desc">
              <p className="text-[1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center md:text-left pb-8 text-grey-700 mix-blend-difference">a passionate and dedicated front-end developer with 3 years of experience in crafting beautiful and functional websites and web applications.</p>
            </div>

            <div className="social flex flex-row flex-wrap items-center justify-center gap-[30px] sm:justify-start pointer-events-auto">
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
          <div className="illust absolute right-0 top-0 w-full h-[600px] sm:w-[60%] sm:h-full z-0 opacity-70 mx-auto flex items-center justify-center pointer-events-auto">
            <Canvas camera={{ position: [4, 4, 5], fov: 45 }}>
              <ambientLight intensity={1.5} />
              <directionalLight position={[2, 5, 2]} intensity={2.5} />
              <Suspense fallback={null}>
                <RubiksCube />
              </Suspense>
              
              {/* This enables mouse drag! */}
              <OrbitControls 
                enableZoom={false}     // Prevents the user from scrolling to zoom in/out
                enablePan={false}      // Prevents right-click dragging the cube off-screen
                autoRotate={true}      // Spins automatically
                autoRotateSpeed={2.0}  // Speed of the automatic spin
              />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}