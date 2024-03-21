import { RootState, subData } from "@repo/ui/index";
import React, { useState } from "react";
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
  const SubItem = useSelector((state: RootState) => state.subslice.Subjects);
  const dispatch = useDispatch();
    const CartData = useSelector((state: RootState) => state.subslice.Cart);

  async function Enrollhandler(item: any, index: number) {

    setActive((prev) => [...prev, index]);
    
    dispatch(subData.AddItem([item,item.price]));
  }

  function notEnrollhandler(item: any, index: number) {
    dispatch(subData.decrement([item.id,item.price]))

  }

  

  return (
    <>
      <section className="sm:w-full relative w-[50%] md:w-full  h-[400px] overflow-y-scroll scr">
        {SubItem ? (
          <>
            {SubItem.map((item, index) => (
              <div
                key={index}
                className={`flex font-medium ${CartData.find((i) => i.id === item.id) ? `bg-green-300  transition-width duration-300 transition-all`:`bg-slate-50`} relative justify-between  items-center   px-4 py-2 w-full shadow-xl box-border rounded-xl    my-2`}
              
              > 
                <span>img</span>
                <span className=" flex flex-col sm:flex-col">
                    <span>{item.title}</span>
                    <span>{item.about}</span>
                    <span>{item.id}</span>
                </span>
                <span>{item.price}</span>
                <div className="flex justify-center items-center   box-border p-4">
                {CartData.find((i) => i.id === item.id) ? ( 
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
          </>
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
