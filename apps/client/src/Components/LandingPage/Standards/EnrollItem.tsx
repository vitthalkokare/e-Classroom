"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";



import Faculty from "./Faculty";

import AutoSlide from "@/Components/custom/AutoSlide";
import SubjectData from "@/Components/(Classroom)/Subjects/SubjectData";

const STD: React.FC = () => {
  const [myStd, setmyStd] = useState("");
  const [isUser, setisUSer] = useState(false);
  const [isItem, setItem] = useState(true);





  return (
    
      <div className=" relative w-[100%]  md:h-fit h-screen sm:h-fit  p-2  justify-center flex flex-col    box-border  rounded-2xl   md:flex-col sm:flex-col ">
        {/* Standard */}

        {isItem ? (
          <div className="w-full  box-border  p-2  rounded-2xl">
           
           <div className="sm:hidden md:hidden mx-[10%] w-[80%]">
           <AutoSlide
          images={[
            { path: "/pictures/Landingpage/s2.png", caption: "Learn at your own pace, anywhere, anytime."
          },
            { path: "/pictures/Landingpage/s3.png", caption: "Empowering minds, shaping futures."
          },
            { path: "/pictures/Landingpage/s4.png", caption: "Discover, learn, grow - anytime, anywhere." },
            { path: "/pictures/Landingpage/s7.png", caption: "Empowering you through education." },
          ]}
        />

           </div>

          </div>
        ) : (
          <div className="w-full flex  flex-col justify-center items-center">
            <div className="w-[60%] relative -top-10 sm:top-0 md:top-0 sm:w-[90%] scr h-[350px] overflow-y-scroll">
            <SubjectData/>
            </div>

            {/* Faculty */}
            <div className="w-full box-border p-2">
              <Faculty />
            </div>
          </div>
        )}
      </div>
    
  );
};

export default STD;
