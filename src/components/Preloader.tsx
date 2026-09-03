'use client';

import React, { useEffect, useState } from 'react';
import { preLoaderAnim } from '../animations/index';

export default function Preloader() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    preLoaderAnim();

    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          return 100;
        }
      });
    }, 1000);

    return () => clearInterval(count);
  }, []);

  return (
    <div className='preloader fixed bottom-0 left-0 right-0 z-[55] flex h-screen w-full items-center justify-center overflow-hidden bg-primary text-white'>
      <div className='texts-container flex h-[60px] w-[280px] items-center justify-between overflow-hidden font-bold text-white'>
        <p className='text-8xl leading-none font-bold text-center'>SANKET<br />JADHAV</p>
        <br />
        <p className='text-3xl leading-none font-bold text-center'>Front-End Developer</p>
      </div>
    </div>
  );
}