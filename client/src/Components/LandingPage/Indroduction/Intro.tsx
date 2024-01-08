'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import img1 from '../../../../public/pictures/Landingpage/introimg1.png';
import img2 from '../../../../public/pictures/Landingpage/introimg2.jpg';
import img3 from '../../../../public/pictures/Landingpage/introimg3.jpg';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';

const Intro: React.FC = () => {
  const ScrollItem1 = useRef<HTMLDivElement>(null);
  const [allowManualScroll, setAllowManualScroll] = useState(true);

  const user = "user"
  useEffect(() => {

 



    const Scrollcontainer = ScrollItem1.current;

    if (Scrollcontainer) {
      let leftScrollWidth = 0;

      const scrollDivs = () => {
        if (allowManualScroll) {
          const Divs = Scrollcontainer.querySelectorAll('.scroll-div');
          const DivsWidth = Divs[0]?.clientWidth;

          if (DivsWidth) {
            leftScrollWidth += DivsWidth;

            if (leftScrollWidth >= Scrollcontainer.scrollWidth - Scrollcontainer.clientWidth) {
              leftScrollWidth = 0;
            }

            Scrollcontainer.scrollTo({
              left: leftScrollWidth,
              behavior: 'smooth',
            });
          }
        }
      };

      const scrollInterval = setInterval(scrollDivs, 2000);

      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, [allowManualScroll]);

  const IntroImage = [
    { Path: img1 },
    { Path: img2 },
    { Path: img3 },
  ];

  const handleScroll = () => {
    setAllowManualScroll(false);
    setTimeout(() => {
      setAllowManualScroll(true);
    }, 1000); // Allow manual scrolling after 1 second
  };

  return (
    <div className="flex bg-white content-center justify-evenly  items-center rounded-xl box-border p-4 ">
      <div className="flex box-border flex-col mt-10 relative z-10">
        <span className='sm:text-3xl text-[5vw]'>
          <strong>e-Tutor:</strong>
        </span>
        <span className='sm:text-lg text-[3vw]'>
          Your Path to <br />
          <strong className='whitespace-nowrap'>Academic Excellence.</strong>
        </span>

        {/* <Link href={'/auth/Registration'} className="mt-5 rounded-xl bg-green-600 text-white p-1 w-[20vw] h-[4vw] sm:w-[100px] sm:h-[40px] flex justify-center items-center text-[2vw] sm:text-[15px]">  */}
          <strong>Try it Free</strong>
        {/* </Link> */} 
        
      </div>
      <div
        ref={ScrollItem1}
        className="w-[30vw] scr h-[30vw] sm:w-[200px] overflow-x-scroll  box-border items-center content-center   rounded-full   flex sm:h-[200px] bg-white-500"

       
      >
        {IntroImage.map((item, index) => (
          <Image src={item.Path} alt="img" className="scroll-div    " />
        ))}
      </div>
    </div>
  );
};

export default Intro;
