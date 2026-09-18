'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const Intro = dynamic(() => import('@/components/Intro'), { ssr: false });
import Project from '@/components/Project';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Preloader from '../components/Preloader';
import GlobalCanvas from '@/components/GlobalCanvas';

export default function Home() {
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    let scroll: any;
    // Dynamically import locomotive-scroll to avoid server-side window errors
    import('locomotive-scroll').then((LocomotiveScroll) => {
      scroll = new LocomotiveScroll.default();
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const progress = scrollY / maxScroll;
        scrollProgressRef.current = Math.max(0, Math.min(1, progress));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <GlobalCanvas scrollProgressRef={scrollProgressRef} />
            <main className="App">
        {/* Layer 1: Intro (z-30 on mobile -> sits ABOVE cube at 25, z-0 on desktop) */}
        <div className="relative z-30 sm:z-0">
          <Intro />
        </div>

        {/* Spacer to give Intro full screen time before TechStack glides in */}

        {/* Layer 2: TechStack (z-30 -> sits ABOVE the cube at 25) */}
        <div 
          data-scroll="true" 
          data-scroll-speed="0.2" 
          className="relative z-30" 
          style={{ willChange: "transform" }}
        >
          <TechStack />
        </div>

        {/* Layer 3: Project (z-40 -> sits OVER TechStack at 30, and ABOVE Cube at 25) */}
        <div 
          data-scroll="true" 
          data-scroll-speed="0.5" 
          className="relative z-40" 
          style={{ willChange: "transform" }}
        >
          <Project />
        </div>

        <div 
          data-scroll="true" 
          data-scroll-speed="0.2" 
          className="relative z-50" 
          style={{ willChange: "transform" }}
        >
          <Contact />  
        </div>
      </main>
    </>
  );
}