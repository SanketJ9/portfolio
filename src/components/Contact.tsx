'use client';

import React, { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { sendEmail } from '@/actions/sendEmail';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    
    const initAnimation = () => {
      gsap.fromTo(".contact-social",
        { opacity: 0, y: 40, visibility: "visible" },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-social",
            start: "top bottom",
            toggleActions: "play none none none"
          }
        }
      );
    };

    // Wait for preloader to finish and layout to stabilize before measuring scroll positions
    const handlePreloader = () => {
      // Small timeout ensures Locomotive/DOM layout shifts have settled
      setTimeout(initAnimation, 100);
    };
    window.addEventListener("preloaderComplete", handlePreloader, { once: true });

    // Magnetic Button Animation
    const magneticElements = gsap.utils.toArray<HTMLElement>(".gsap-magnetic");
    magneticElements.forEach((btn) => {
      btn.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
        gsap.to(btn, { x, y, scale: 1.1, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.7, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
      });
      btn.addEventListener("mousedown", () => {
        gsap.to(btn, { scale: 0.95, duration: 0.1, overwrite: "auto" });
      });
      btn.addEventListener("mouseup", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "back.out(1.5)", overwrite: "auto" });
      });
    });

    return () => {
      window.removeEventListener("preloaderComplete", handlePreloader);
    };
  }, { scope: containerRef });

  const actionHandler = async (formData: FormData) => {
    const response = await sendEmail(formData);

    if (response.error) {
      alert(`Failed to send message: ${response.error}`);
    } else {
      alert('Message sent successfully!');
      window.location.reload();
    }
  };

  return (
    <div ref={containerRef} data-scroll className="contact-cont container relative mx-auto flex h-[100svh] max-w-[1280px] snap-start flex-col-reverse items-center justify-evenly font-body sm:h-screen sm:flex-row sm:justify-between z-7">
      <div className="contact-left-section flex w-full flex-col justify-evenly sm:w-1/2">
        <h1 className="contact-heading text-center text-[3rem] font-boldonse leading-none text-primary md:text-left md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] pb-4 py-6">CONNECT</h1>
        
        <div className="contact-social flex flex-row flex-wrap items-center justify-center gap-[30px] sm:justify-start pb-8" style={{ visibility: "hidden" }}>
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
        
        <form className="form flex w-full flex-col justify-around gap-1" action={actionHandler}>
          <div className="form-first-row block w-full sm:flex sm:gap-2.5">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              required 
              className="input firstrow my-1 h-[50px] w-full rounded bg-gray-200 px-3 text-[16px] font-bold text-primary placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className="input firstrow my-1 h-[50px] w-full rounded bg-gray-200 px-3 text-[16px] font-bold text-primary placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none" 
            />
          </div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required 
            className="input my-1 h-[50px] w-full rounded bg-gray-200 px-3 text-[16px] font-bold text-primary placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none" 
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            required
            className="my-1 h-[150px] w-full resize-none rounded bg-gray-200 p-3 text-[18px] font-medium text-black placeholder-gray-500 focus:bg-primary focus:text-white focus:outline-none"
          ></textarea>
          <div>
            <input 
              type="submit" 
              value="Send" 
              className="gsap-magnetic send-btn block w-[100%] ml-auto text-primary hover:text-white border border-3 fomt-bold border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-[1rem] px-5 py-3 text-center cursor-pointer active:bg-gray-200 active:text-white" 
            />
          </div>
        </form>
      </div>
      
      <div className="contact-right-section flex w-[70%] items-center justify-center sm:w-[40%]">
        <div className="image-cont mx-auto w-full sm:w-[540px]">
        {/* <img className="email-art w-full" src="/connect.svg" alt="Connect" /> */}
        </div>
      </div>
    </div>
  );
}