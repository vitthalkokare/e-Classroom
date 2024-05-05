import React from "react";
import SubjectData from "./SubjectData";
import QuerySubSelector from "./Subd";
import Intro from "@/Components/LandingPage/Intro";
import { RootState } from "@repo/ui/index";
import { useSelector } from "react-redux";
import AutoSlide from "@/Components/custom/AutoSlide";

const EnrollHandler = () => {
  const subdata = useSelector(
    (state: RootState) => state.querysubdata.Subjects
  );
  return (
    <div className="flex sm:flex-col min-h-fit w-[100%] sm:w-[95%] mx-auto justify-evenly sm:justify-normal relative  box-border border-1 rounded-2xl">
        <div className=" w-full    sm:w-full  flex">
          <Intro />

        </div>
        

      <div className="w-[60%] p-4  top-5 sm:top-0 z-50  sm:left-0 sm:relative  left-[20%] absolute sm:w-full  box-border">
          <QuerySubSelector />
        </div>
        <div className="w-full p-6 relative flex justify-center items-center sm:w-full">
          {subdata.length > 0 ? (
            <SubjectData />
          ) : (
            <span className="sm:hidden">
              <AutoSlide
              images={[
                {
                  path: "/pictures/Landingpage/s2.png",
                  caption: "Learn at your own pace, anywhere, anytime.",
                },
                {
                  path: "/pictures/Landingpage/s3.png",
                  caption: "Empowering minds, shaping futures.",
                },
                {
                  path: "/pictures/Landingpage/s4.png",
                  caption: "Discover, learn, grow - anytime, anywhere.",
                },
                {
                  path: "/pictures/Landingpage/s7.png",
                  caption: "Empowering you through education.",
                },
              ]}
            />
            </span>
          )}
        </div>
       
    </div>
  );
};

export default EnrollHandler;
       
      