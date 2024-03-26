import { RootState } from "@repo/ui/index";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subData } from "@repo/ui/index";
import SubjectData from "./SubjectData";



export interface EnrollhandlerProps{
    
    State?:string,board?:string,Standard?:string,main?:string,Section_1?:string

}
const ItemSelector = ({State,board,Standard,main,Section_1}:EnrollhandlerProps) => {
  const [Item, setItem] = useState<any | null>({
    state: "",
    Class: "",
  });
  const [Board,setBoard] = useState('')
  const [Subject,setSubject] = useState<any | null>(null);

  const itemData = useSelector((state: RootState) => state.subslice.item);
  const BoardLabel = useSelector(
    (state: RootState) => state.subslice.BoardLabel
  );
  const Standards = useSelector((state: RootState) => state.subslice.Standards);


  const dispatch = useDispatch();

  function handleState(event: React.ChangeEvent<HTMLSelectElement>) {
    const val = event.target.value;
    setItem({ state: val });
    dispatch(subData.StateSelect(val));
  }

  function handleBoard(event: React.ChangeEvent<HTMLSelectElement>) {
    const val = event.target.value;
    setBoard(val)
    dispatch(subData.BoardSelect(val));
  }

  function handleClass(event: React.ChangeEvent<HTMLSelectElement>) {
    const val = event.target.value;
    setItem({ Class: val });
    dispatch(subData.SetSuject([val,Board]));
    
  }

  return (
    <div className={`${main} grid grid-rows-2 gap-4 place-content-center   w-full  box-border border-1 rounded-2xl shadow-xl `}>
      <div className="flex justify-evenly gap-4 w-full">
        <span >
          <select className={`${State}box-border p-2 shadow-lg rounded-xl`} onChange={handleState}>
            <option>Select State</option>
            {itemData.map((item, index) => (
              <option key={index} value={item.StateName}>
                {item.StateName}
              </option>
            ))}
          </select>
        </span>
        <span className="w-full flex justify-center items-center">
          <select className={`${board}box-border p-2 shadow-lg rounded-xl`} onChange={handleBoard}>
            <option value="">Board</option>
            {BoardLabel.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div className="flex justify-center items-center w-full">
        <select className={`${Standard} rounded-lg box-border p-2 flex flex-col items-center `} onChange={handleClass}>
          <option value="">Class</option>
          {Standards.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      
    </div>
  );
};

export default ItemSelector;
