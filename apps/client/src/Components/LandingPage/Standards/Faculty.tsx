import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import Img from "../../../../public/pictures/Landingpage/teachericon.jpg";

import {useSelector} from 'react-redux'
import { RootState } from '@repo/ui/index';


const Faculty:React.FC = () => {
  const [slideIndex,setSlideIndex] = useState(0)
   
  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Faculty = useSelector((state:RootState) => state.subslice.Facultys)


  const showSlides = () => {
    let g = Faculty.length;
    setSlideIndex((prevIndex) => (prevIndex + 1) % g); 
  };

  return (
    <>
     <section className="scr box-border absolute bottom-0 md:relative p-2  sm:relative -left-1/2  md:left-0 sm:left-0  flex w-full  sm:w-full md:w-full  rounded-2xl  overflow-x-scroll">
          {Faculty.map((item, index) => (
            <div
              key={index}
              className={`  drop-shadow-xl sm:w-full md:w-full w-full mx-2 justify-center items-center overflow-hidden shrink-0   relative   sm:h-[180px]  bg-white   flex    box-border  rounded-3xl sm:flex-row `}
            >
              <Image
                src={Img}
                alt="Picture of the author"
                className="w-[140px] h-[140px] "
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
              />

              <div className="relative justify-between flex flex-col">
                <span className="">
                  <h1>name:{item.name}</h1>
                  <h3>Education: {item.exp}</h3>
                </span>
                <span className="">
                  <strong>Vision:</strong>
                  <h2>
                    {item.vision}
                  </h2>
                </span>
              </div>
            </div>
          ))}
        </section>
      
    </>
  )
}

export default Faculty
