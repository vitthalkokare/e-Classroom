import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from "@/lib/store";

const SubjectsItem = () => {


const Subjects = useSelector((state: RootState) => state.subslice.Subjects);


  return (
    <>
    <div className=" h-[400px] w-[360px] relative left-10 sm:left-0 -top-10 sm:top-0 md:relative md:top-0 scr overflow-y-scroll rounded-xl box-border p-2 mx-2  sm:w-full">
            {Subjects.map((item, index) => (
              <div
                key={index}
                className="hover:scale-105 relative justify-between s-color transition-all duration-200 transform cursor-pointer  items-center box-border p-2  rounded-2xl m-1 flex"
              >
                {item.name}
                <div className=" absolute left-0 w-16 h-16"></div>
                <div className="">
                  {item?.content} <br />
                </div>
                <button className="h-btn box-border p-2">Enoroll</button>
              </div>
            ))}
          </div>
      
    </>
  )
}

export default SubjectsItem
