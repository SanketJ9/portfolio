'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const Intro = dynamic(() => import('@/components/Intro'), { ssr: false });
import Project from '@/components/Project';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Preloader from '../components/Preloader';

export default function Home() {
  useEffect(() => {
    let scroll: any;
    // Dynamically import locomotive-scroll to avoid server-side window errors
    import('locomotive-scroll').then((LocomotiveScroll) => {
      scroll = new LocomotiveScroll.default();
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <Preloader />
      <main className="App">
        <Intro />
        <TechStack />
        <Project />
        <Contact />
      </main>
    </>
  );
}