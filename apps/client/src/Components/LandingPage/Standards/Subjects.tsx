import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@repo/ui/index';

const SubjectsItem = () => {


const Subjects = useSelector((state: RootState) => state.subslice.Subjects);


  return (
    <>
    <div className=" w-full  relative  rounded-xl box-border p-2  ">
            {Subjects.map((item, index) => (
              <div
                key={index}
                className="hover:scale-105 relative justify-between transition-all duration-200 transform cursor-pointer   box-border p-2  rounded-2xl m-1 flex"
              >
                {item.name}
                <div className="">
                  {item?.content}
                </div>
                <button className="h-btn box-border p-2">Enoroll</button>
              </div>
            ))}
          </div>
      
    </>
  )
}

export default SubjectsItem
