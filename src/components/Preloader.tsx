'use client';

import React, { useEffect, useState } from 'react';
import { preLoaderAnim } from '../animations/index';

export default function Preloader() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 2;
      if (count >= 100) {
        setCounter(100);
        clearInterval(interval);
        preLoaderAnim();
      } else {
        setCounter(count);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const blurValue = counter <= 70 ? 20 : 20 - ((counter - 60) * 0.5);
  const bgOpacity = counter <= 70 ? 1 : 0.85 - ((counter - 60) * 0.02125);

  return (
    <div 
      className='preloader fixed bottom-0 left-0 right-0 z-[55] flex h-screen min-h-[100dvh] w-full items-center justify-center overflow-hidden text-white transition-all duration-100'
      style={{ 
        backdropFilter: `blur(${blurValue}px)`,
        WebkitBackdropFilter: `blur(${blurValue}px)`,
      }}
    >
      <div 
        className='absolute inset-0 bg-black -z-10'
        style={{ opacity: bgOpacity }} 
      ></div>

      <div className='absolute bottom-5 right-10 flex items-baseline justify-end'>
        <span 
          className='text-2xl md:text-[10rem] font-bold text-[#ffffff20]'
          style={{ 
            opacity: counter === 100 ? 0 : 1,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          {counter}<span className="text-[0.5em]">%</span>
        </span>
      </div>
    </div>
  );
}