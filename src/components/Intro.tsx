'use client';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!nameRef.current || !containerRef.current) return;

    const playAnimation = () => {
      const split = SplitText.create(nameRef.current!, { type: "chars" });

      // Use fromTo instead of from to avoid the 1-frame flash
      gsap.fromTo(split.chars, 
        {
          rotationY: -90,
          rotationX: 45,
          transformOrigin: "left center",
          opacity: 0,
          visibility: "visible",
        },
        {
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    };

    window.addEventListener("preloaderComplete", playAnimation, { once: true });

    // Social links fade-up after preloader
    const showSocial = () => {
      // Role text
      gsap.fromTo(".role", 
        { opacity: 0, y: 20, visibility: "visible" },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: "power3.out" }
      );
      // Description text
      gsap.set(".desc", { visibility: "visible" });
      const descSplit = new SplitText(".desc p", { type: "words" });
      gsap.from(descSplit.words, {
        opacity: 0,
        y: 15,
        stagger: 0.06,
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out"
      });
      // Social buttons
      gsap.fromTo(".intro-social",
        { opacity: 0, y: 40, visibility: "visible" },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.7, ease: "power3.out" }
      );
    };
    window.addEventListener("preloaderComplete", showSocial, { once: true });

    // Magnetic Button Animation
    const magneticElements = gsap.utils.toArray<HTMLElement>(".gsap-magnetic");
    magneticElements.forEach((btn) => {
      btn.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
        gsap.to(btn, { x, y, scale: 1.05, duration: 0.2, ease: "power2.out", overwrite: "auto" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
      });
      btn.addEventListener("mousedown", () => {
        gsap.to(btn, { scale: 0.95, duration: 0.1, overwrite: "auto" });
      });
      btn.addEventListener("mouseup", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "back.out(1.5)", overwrite: "auto" });
      });
    });

    return () => {
      window.removeEventListener("preloaderComplete", playAnimation);
      window.removeEventListener("preloaderComplete", showSocial);
    };
  }, { scope: containerRef });

  return (
    <>
      <div ref={containerRef} data-scroll data-scroll-speed="-0.1" className="landing container min-h-[100dvh]">
        <div className="intro-cont relative z-10 flex min-h-[100dvh] min-[2000px]:max-h-[1280px] flex-col justify-end sm:justify-center items-center sm:items-start pt-32 pb-16 sm:py-0">
          <div className="intro relative z-10 flex h-max w-full flex-col justify-center sm:w-1/2 select-none pointer-events-none">
            <div className="name pb-4 md:pb-6">
              <p ref={nameRef} style={{ visibility: "hidden" }} className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] text-center md:text-left font-bold text-primary font-boldonse leading-none">SANKET JADHAV</p>
            </div>
            <div className="role pb-2 md:pb-3" style={{ visibility: "hidden" }}>
              <p className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[3rem] text-center md:text-left text-gray-500 font-bold leading-none">Software Engineer</p>
            </div>
            <div className="desc" style={{ visibility: "hidden" }}>
              <p className="text-[1rem] md:text-[1.15rem] lg:text-[1.2rem] xl:text-[1.25rem] text-center md:text-left pb-8 text-grey-700 mix-blend-difference">a passionate and dedicated Software Engineer with 4 years of experience in crafting beautiful and functional websites and web applications.</p>
            </div>

          <div className="intro-social flex flex-row flex-wrap items-center justify-center gap-[30px] sm:justify-start pointer-events-auto" style={{ visibility: "hidden" }}>
              <div className="dl-btn flex basis-full justify-center sm:block sm:basis-auto">
                <a 
                  href="/sanket-jadhav-resume.pdf" 
                  download 
                  className="gsap-magnetic inline-block max-w-[280px] bg-white/20 rounded-[8px] backdrop-blur-[5px] border-2 border-black px-5 py-3 text-center text-[1rem] font-bold text-primary hover:bg-white/40 hover:text-black transitions focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Download Resume
                </a>
              </div>
              <a href="https://github.com/SanketJ9" target="blank" rel="noreferrer" className="gsap-magnetic inline-block">
                <FaGithub className="icons s-icons cursor-pointer rounded-md p-1 text-5xl text-[#393939] hover:text-[#191919] active:text-primary  mg:text-6xl transitions"/>
              </a>
              <a href="https://www.linkedin.com/in/sanketjadhav19" target="blank" rel="noreferrer" className="gsap-magnetic inline-block">
                <FaLinkedin className="icons s-icons cursor-pointer rounded-md p-1 text-5xl text-[#0A66C2] hover:text-[#06488a] active:text-primary  mg:text-6xl transitions"/>
              </a>
              <a href="mailto:jadhavsanket621@gmail.com" target="blank" rel="noreferrer" className="gsap-magnetic inline-block">
                <SiGmail className="icons s-icons cursor-pointer rounded-md p-1 text-5xl  text-[#D44638] hover:text-[#a22316] active:text-primary  mg:text-6xl transitions"/> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}