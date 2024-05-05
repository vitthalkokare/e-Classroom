import { RootState, subdatahandler } from "@repo/ui/index";
import React, { useEffect, useState } from "react";
import { FaRegSquareCheck, FaRegSquarePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

interface EnrollProps {
  title: string;
  about: string;
  id: string;
}

const SubjectData = () => {
  const [isEnroll, setisEnroll] = useState<boolean>();
  const [Active, setActive] = useState<number[]>([]);
  const [Enroll, setEnroll] = useState<EnrollProps | null>();
  const newSubData = useSelector((state: RootState) => state.querysubdata.Subjects);

  const dispatch = useDispatch();
    const CartData = useSelector((state: RootState) => state.querysubdata.Cart);

  async function Enrollhandler(item: any, index: number) {

    setActive((prev) => [...prev, index]);
    
    dispatch(subdatahandler.AddItem([item,item.price]));
  }

  function notEnrollhandler(item: any, index: number) {
    dispatch(subdatahandler.decrement([item.title,item.price]))

  }

  return (
    <>
      <section className="sm:w-full relative w-full md:w-full top-14  box-border sm:top-0  h-[400px] overflow-y-scroll scr">
        {newSubData ? (
          <div className="w-full relative">
            {newSubData.map((item, index) => (
              <div
                key={index}
                className={`flex font-medium ${CartData.find((i) => i.title === item.title) ? `bg-green-300  transition-width duration-300 transition-all`:`bg-slate-50`} relative justify-between h-[120px]  items-center     w-full shadow-xl box-border rounded-xl    my-2 `}
              
              > 
               <span className="absolute p-3 left-1/4 sm:left-0 items-center box-border flex gap-2 -top-4"><span className="text-xl font-bold">{item.standard}</span> <span>{item.boardName}</span><span>{item.state}</span></span>
                <span className="box-border flex justify-center items-center p-2">img</span>
                <span className=" flex flex-col gap-2 sm:flex-col">
                     
                    <span className="font-bold text-2xl">{item.title}</span>
                    <span>{item.about}</span>
                    <span className="hidden">{item.id}</span>
                </span>
                <span>More</span>
                <div className="flex justify-center items-center bg-blue-200 flex-col relative  box-border p-2 gap-2  h-full">
                  <span className="text-xl text-blue-950 font-bold">Rs {item.price}/6M</span>
                {CartData.find((i) => i.title === item.title) ? ( 
                  <button
                    onClick={() => {
                      notEnrollhandler(item, index);
                    }}
                    className={`text-3xl font-bold hover:scale-110`}
                  >
                    <FaRegSquareCheck />{" "}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      Enrollhandler(item, index);
                    }}
                    className={`text-3xl font-bold hover:scale-110`}
                  >
                    <FaRegSquarePlus />
                  </button>
                )}
                </div>
                
                </div>
            ))}
          </div>
        ) : (
          <>
            <h1>Please Enroll Subject</h1>
          </>
        )}

      </section>
    </>
  );
};

export default SubjectData;
