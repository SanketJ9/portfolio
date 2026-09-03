'use client';

import { useEffect } from 'react';
import Intro from '@/components/Intro';
import Project from '@/components/Project';
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
        <Project />
        <Contact />
      </main>
    </>
  );
}