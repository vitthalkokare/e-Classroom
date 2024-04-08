import React from "react";
import SubjectData from "./SubjectData";
import QuerySubSelector from "./Subd";
import Intro from "@/Components/LandingPage/Intro";
import AutoSlide from "@/Components/ui/compo/AutoSlide";
import { RootState } from "@repo/ui/index";
import { useSelector } from "react-redux";

const EnrollHandler = () => {
  const subdata = useSelector(
    (state: RootState) => state.querysubdata.Subjects
  );
  return (
    <div className="flex sm:flex-col w-[100%] items-center relative  box-border border-1 rounded-2xl">
      <div className="w-full flex sm:flex-col items-center  justify-around sm:w-[90%]  box-border p-2">
        <div className=" sm:w-full flex">
          <Intro />
        </div>
        <div className="w-[40%] top-5 sm:top-0 z-50  sm:left-0 sm:relative  left-[30%] absolute sm:w-full  box-border ">
          <QuerySubSelector />
        </div>
        <div className="w-[40%] relative top-10 sm:w-full">
          {subdata.length > 0 ? (
            <SubjectData />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollHandler;
