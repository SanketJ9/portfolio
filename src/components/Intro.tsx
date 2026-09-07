'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Intro() {
  const nameRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!nameRef.current) return;

    const playAnimation = () => {
      const split = SplitText.create(nameRef.current!, { type: "chars" });

      gsap.from(split.chars, {
        rotationY: -90,
        rotationX: 45,
        transformOrigin: "left center",
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("preloaderComplete", playAnimation, { once: true });

    return () => {
      window.removeEventListener("preloaderComplete", playAnimation);
    };
  }, []);

  return (
    <>
      <div data-scroll data-scroll-speed="-.5" className="landing container">
        <div className="intro-cont relative flex min-h-[100svh] flex-col-reverse items-center justify-evenry md:justify-start sm:flex-row sm:justify-between">
          <div className="intro relative z-10 flex h-max w-full flex-col mb-12 justify-center sm:w-1/2 select-none pointer-events-none">
            <div className="name">
              <p ref={nameRef} className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-center md:text-left font-bold text-primary font-primary pb-3 leading-none">SANKET JADHAV</p>
            </div>
            <div className="role">
              <p className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] text-center md:text-left text-gray-500 font-bold pb-3 leading-none">Software Engineer</p>
            </div>
            <div className="desc">
              <p className="text-[1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center md:text-left pb-8 text-grey-700 mix-blend-difference">a passionate and dedicated Software Engineer with 4 years of experience in crafting beautiful and functional websites and web applications.</p>
            </div>

            <div className="social flex flex-row flex-wrap items-center justify-center gap-[30px] sm:justify-start pointer-events-auto">
              <div className="dl-btn flex basis-full justify-center sm:block sm:basis-auto">
                <a href="/sanket-jadhav-resume.pdf" download className="block max-w-[280px] rounded-lg border border-3 border-primary px-5 py-3 text-center text-[1rem] font-bold fomt-bold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">Download Resume</a>
              </div>
              <a href="https://github.com/SanketJ9" target="blank" rel="noreferrer">
                <FaGithub className="icons s-icons cursor-pointer rounded-md p-1 text-5xl text-primary hover:text-[#0FBF3E] active:text-primary  mg:text-6xl transitions"/>
              </a>
              <a href="https://www.linkedin.com/in/sanketjadhav19" target="blank" rel="noreferrer">
                <FaLinkedin className="icons s-icons cursor-pointer rounded-md p-1 text-5xl text-primary hover:text-[#0A66C2] active:text-primary  mg:text-6xl transitions"/>
              </a>
              <a href="mailto:jadhavsanket621@gmail.com" target="blank" rel="noreferrer">
                <SiGmail className="icons s-icons cursor-pointer rounded-md p-1 text-5xl text-primary hover:text-[#D44638] active:text-primary  mg:text-6xl transitions"/> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}