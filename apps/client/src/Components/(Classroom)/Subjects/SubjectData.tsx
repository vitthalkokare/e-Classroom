import { RootState, subData } from "@repo/ui/index";
import PreviousMap from "postcss/lib/previous-map";
import React, { useState } from "react";
import { FaRegSquareCheck, FaRegSquarePlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { number } from "zod";

interface EnrollProps {
  name: string;
  content: string;
  id: string;
}

const SubjectData = () => {
  const [isEnroll, setisEnroll] = useState<boolean>();
  const [Active, setActive] = useState<number[]>([]);
  const [Enroll, setEnroll] = useState<EnrollProps | null>();
  const SubItem = useSelector((state: RootState) => state.subslice.Subjects);
  const CartItem = useSelector((state: RootState) => state.subslice.Cart);
  const dispatch = useDispatch();
    const CartData = useSelector((state: RootState) => state.subslice.Cart);

  async function Enrollhandler(item: any, index: number) {

    setActive((prev) => [...prev, index]);

    setEnroll({ name: item.name, content: item.content, id: item.id });
    

    dispatch(subData.AddItem(item));
  }

  function notEnrollhandler(item: any, index: number) {
    dispatch(subData.decrement(item.id))

  }

  

  return (
    <>
      <section className="sm:w-full w-[40%] h-[400px] overflow-y-scroll scr">
        {SubItem ? (
          <>
            {SubItem.map((item, index) => (
              <div
                key={index}
                className="flex font-medium  justify-between items-center gap-4 w-full shadow-xl box-border rounded-xl p-6 my-1 "
              >
                <span>{item.name}</span>
                <span>{item.content}</span>
                <span>{item.id}</span>
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
                {/*  */}
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
