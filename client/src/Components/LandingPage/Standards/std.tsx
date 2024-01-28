"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import error from "next/error";
import { RootState } from "@/lib/store";

import Faculty from "./Faculty";
import SubjectsItem from "./Subjects";
import { BoardSelect, SetSuject, StateSelect } from "@/lib/Features/slices/SubStdSlice";

const STD: React.FC = () => {
  const [myStd, setmyStd] = useState("");
  const [isUser,setisUSer] = useState(false);

  const dispatch = useDispatch();
  const myitem = useSelector((state: RootState) => state.subslice.item);
  const boardlabel = useSelector(
    (state: RootState) => state.subslice.BoardLabel
  );
  const Std = useSelector((state: RootState) => state.subslice.Standards);
  const Subjects = useSelector((state: RootState) => state.subslice.Subjects);

  function changeHandler(event: React.ChangeEvent<HTMLSelectElement>): void {
    const dd = event.target.value;

    dispatch(SetSuject([dd, myStd]));
  }

  function onSelected(event: any) {
    let c = event.target.value;
    dispatch(StateSelect(c));
  }

  function BoardSelected(event: any) {
    const val = event.target.value;
    setmyStd(val);
    dispatch(BoardSelect(val));
  }



  return (
    <>
      <div className=" relative   md:h-fit h-screen  p-2 s-colo  flex flex-col justify-evenly m-auto  items-center box-border w-full  rounded-2xl sm:w-[95%]   md:flex-col sm:flex-col sm:justify-start">
        <div className="border-2   absolute top-10 -left-1/2 w-[80%]  justify-center items-center  sm:top-0 md:top-0 sm:relative md:relative sm:left-0 md:left-0  flex flex-wrap box-border p-2 rounded-xl drop-shadow-xl">
          {/* State */}
          <select
            name=""
            id=""
            onChange={onSelected}
            className="mx-2 box-border w-[45%] outline-none p-3 rounded-xl bg-white"
          >
            <option value="">Select State</option>

            {myitem.map((item, index) => (
              <option key={index} value={item.StateName}>
                {item.StateName}
              </option>
            ))}
          </select>

          {/* Board */}

          <select
            name=""
            value={myStd}
            onChange={BoardSelected}
            className="bg-white box-border rounded-xl outline-none p-3  w-[45%]"
            id=""
          >
            <option value="" className=" bg-white">
              Board
            </option>
            {boardlabel.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>

          <div className="bg-white text-center w-[60%] m-2 shadow-2xl border-1 border   box-border  flex items-center justify-center rounded-xl sm:w-[200px] sm:p-2">
            <select
              onChange={changeHandler}
              className="w-[90%] bg-white p-3 sm:p-2  outline-none border-0 text-2xl "
            >
              <option value="">Std</option>

              {Std.map((item, index) => (
                <option key={index} className="" value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Standard */}
        <SubjectsItem/>

        {/* Faculty */}
        <Faculty />
      </div>
    </>
  );
};

export default STD;
