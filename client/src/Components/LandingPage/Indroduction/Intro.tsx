"use client";
import React, { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import AutoSlide from "@/Components/utils/AutoSlide";
import STD from "../Standards/std";
import Register from "@/app/(routes)/auth/registration/Register";

const Intro: React.FC = () => {
  const ScrollItem1 = useRef<HTMLDivElement>(null);
  const [allowManualScroll, setAllowManualScroll] = useState(true);
  const [signUp,setsignUp] = useState('hidden');


 
  const signUphandle=()=>{
    signUp === 'hidden' ? setsignUp('flex') : setsignUp('hidden');
    console.log('fuck')

  }

  const handleScroll = () => {
    setAllowManualScroll(false);
    setTimeout(() => {
      setAllowManualScroll(true);
    }, 1000); // Allow manual scrolling after 1 second
  };

  return (
    <div className="flex  w-full  text-white justify-evenly items-center       rounded-xl box-border p-4 " >
      <div className="flex box-border drop-shadow-xl text-black flex-col  relative z-10">
        <span className="sm:text-3xl text-[5vw] whitespace-nowrap">
          <strong>e-Classroom:</strong>
        </span>
        <span className="sm:text-lg text-[3vw]">
          Your Path to <br />
          <strong className="whitespace-nowrap">Academic Excellence.</strong>
        </span>

        <button
          onClick={signUphandle}
          className="mt-5 rounded-xl bg-green-500  text-white p-1 w-[20vw] h-[4vw] sm:w-[100px] sm:h-[40px] flex justify-center items-center text-[2vw] sm:text-[15px]"
        >
          <strong>Try it Free</strong>
        </button>
      </div>

      <div className={` md:w-[200px] md:h-[200px]  scr  sm:w-[200px] hidden sm:flex md:flex overflow-x-scroll  box-border items-center content-center   rounded-full   sm:h-[200px] bg-white-500`}>
        <AutoSlide
          images={[
            { path: "/pictures/Landingpage/s2.png", caption: "" },
            { path: "/pictures/Landingpage/s3.png", caption: "" },
            { path: "/pictures/Landingpage/s4.png", caption: "" },
            { path: "/pictures/Landingpage/s7.png", caption: "" },
          ]}
        />
        
      </div>
      <div className={`fixed top-10 left-[20%] sm:left-5  w-[60%] sm:w-[90%] z-50 p-2 box-border  rounded-[30px] bg-white ${signUp}`}  >
        <Register/>
        <button onClick={signUphandle} className="absolute -top-3 right-0 z-50 bg-black box-border px-2  rounded-3xl">X</button>

      </div>
    </div>
  );
};

export default Intro;
