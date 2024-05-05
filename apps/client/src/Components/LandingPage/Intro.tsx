"use client";
import React, { useRef, useState } from "react";
import Tryitfreeauth from "@/app/util/Authbtn";
import AutoSlide from "../custom/AutoSlide";

const Intro: React.FC = () => {
  const [allowManualScroll, setAllowManualScroll] = useState(true);
  const [signUp,setsignUp] = useState('hidden');


 
 


  return (
    <div className="flex relative  w-full  text-white justify-evenly    rounded-xl box-border " >
      <div className="flex text-center  flex-col h-full items-center justify-center   w-[50%]  box-border drop-shadow-xl text-black  z-10">
        <span className="sm:text-4xl text-[5vw] whitespace-nowrap">
          <strong>e-Classroom:</strong>
        </span>
        <span className="sm:text-2xl flex flex-col text-[3vw]">
          <span className="text-xl font-semibold">Your Path to</span>
          <strong className="whitespace-nowrap">Academic Excellence.</strong>
        </span>
        <span className="">
          {(<Tryitfreeauth btn={"try It Free"}/>)}

        </span>

      </div>

      <div className={` sm:flex items-center justify-center hidden w-[50%]`}>
      <AutoSlide
          images={[
            { path: "/pictures/Landingpage/s2.png", caption: "" },
            { path: "/pictures/Landingpage/s3.png", caption: "" },
            { path: "/pictures/Landingpage/s4.png", caption: "" },
            { path: "/pictures/Landingpage/s7.png", caption: "" },
          ]}
        />
        
      </div>
      
    </div>
  );
};

export default Intro;
