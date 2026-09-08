'use client';

import { useRef } from "react";
import { FaGitSquare, FaSass } from "react-icons/fa";
import { SiCsswizardry, SiJavascript, SiNextdotjs, SiTypescript, SiJquery, SiMongodb, SiClaude, SiTanstack } from "react-icons/si";
import { BiSolidFileHtml, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative, TbBrandNodejs, TbBrandRedux, TbSeo } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.from(".tech", {
      scale: 0, 
      opacity: 0,
      duration: 0.4,
      stagger: { amount: 0.6, from: "center" },
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="tech-cont container relative mb-10 bg-white/10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/10 min-h-[80vh] md:min-h-[25vh] flex flex-col gap-10 overflow-visible p-16"
    >
        <div className="heading">
          <p className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-center md:text-center font-bold font-primary text-primary font-heading pb-8 leading-none">What's in My Stack</p>
        </div>
        <div className="grid-container flex flex-wrap justify-center gap-5 lg:gap-10">
          <div className="tech flex flex-col items-center gap-1"><BiSolidFileHtml className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#F06529]"/><p className="text-sm lg:text-lg font-medium">HTML</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiCsswizardry className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#1572B6]"/><p className="text-sm lg:text-lg font-medium">CSS</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiJavascript className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#F7DF1E]"/><p className="text-sm lg:text-lg font-medium">JavaScript</p></div>
          <div className="tech flex flex-col items-center gap-1"><TbBrandReactNative className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#61DAFB]"/><p className="text-sm lg:text-lg font-medium">React</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiNextdotjs className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-black"/><p className="text-sm lg:text-lg font-medium">Next.js</p></div>
          <div className="tech flex flex-col items-center gap-1"><TbBrandNodejs className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#339933]"/><p className="text-sm lg:text-lg font-medium">Node.js</p></div>
          <div className="tech flex flex-col items-center gap-1"><PiFileSqlFill className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#4479A1]"/><p className="text-sm lg:text-lg font-medium">SQL</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiTypescript className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#3178C6]"/><p className="text-sm lg:text-lg font-medium">TypeScript</p></div>
        </div>
        
        <div className="grid-container flex flex-wrap justify-center gap-5 lg:gap-10">
          <div className="tech flex flex-col items-center gap-1"><FaSass className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#CC6699]"/><p className="text-sm lg:text-lg font-medium">Sass</p></div>
          <div className="tech flex flex-col items-center gap-1"><RiTailwindCssFill className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#06B6D4]"/><p className="text-sm lg:text-lg font-medium">Tailwind</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiJquery className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#0769AD]"/><p className="text-sm lg:text-lg font-medium">jQuery</p></div>
          <div className="tech flex flex-col items-center gap-1"><TbBrandRedux className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#764ABC]"/><p className="text-sm lg:text-lg font-medium">Redux</p></div>
          <div className="tech flex flex-col items-center gap-1"><BiLogoPostgresql className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#4169E1]"/><p className="text-sm lg:text-lg font-medium">PostgreSQL</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiMongodb className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#47A248]"/><p className="text-sm lg:text-lg font-medium">MongoDB</p></div>
          <div className="tech flex flex-col items-center gap-1"><FaGitSquare className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#F05032]"/><p className="text-sm lg:text-lg font-medium">Git</p></div>
          <div className="tech flex flex-col items-center gap-1"><TbSeo className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#4285F4]"/><p className="text-sm lg:text-lg font-medium">SEO</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiClaude className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#D97757]"/><p className="text-sm lg:text-lg font-medium">Claude</p></div>
          <div className="tech flex flex-col items-center gap-1"><SiTanstack className="tech-icon cursor-pointer text-4xl lg:text-7xl transition-all duration-300 ease-in-out text-[#FF4154]"/><p className="text-sm lg:text-lg font-medium">TanStack</p></div>
        </div>
      </div>
  );
}
