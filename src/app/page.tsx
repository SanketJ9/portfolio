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
        <Intro />
        <div data-scroll="true" data-scroll-speed="-0.15" style={{ willChange: "transform" }}>
          <TechStack />
        </div>
        <div className="w-full h-[20vh]"></div>
        <div data-scroll="true" data-scroll-speed="0.1" style={{ willChange: "transform" }}>
          <Project />
        </div>
        <Contact />
      </main>
    </>
  );
}