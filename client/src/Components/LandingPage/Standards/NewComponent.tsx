'use client'

import React, { useRef, useEffect } from 'react';

const YourComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = () => {
      const container = containerRef.current;

      let   currentScrollLeft =0;

      if (container) {
        const divs = container.querySelectorAll('.scroll-div');
        const divWidth = divs[0]?.clientWidth;

        if (divWidth) {
           currentScrollLeft += divWidth;

          if (currentScrollLeft >= container.scrollWidth) {
            currentScrollLeft = 0;
          }

          container.scrollBy({
            left: currentScrollLeft,
            behavior: 'smooth',
          });
        }
      }
    };

    const intervalId = setInterval(scrollContainer, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="scroll-container flex overflow-x-scroll" ref={containerRef}>
      <div className="scroll-div">
        <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span>
        </div>
      <div className="scroll-div">
        <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span>
        </div>
        <div className="scroll-div">
        <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span>
        </div>
      <div className="scroll-div">
        <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span>
        </div>  <div className="scroll-div">
        <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span>
        </div>
      <div className="scroll-div">
        <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span>
        </div>  <div className="scroll-div">
        <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span>
        </div>
     
    </div>
  );
};

export default YourComponent;
