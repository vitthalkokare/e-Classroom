import { RootState } from "@repo/ui/index";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subData } from "@repo/ui/index";
import SubjectData from "./SubjectData";



interface EnrollhandlerProps{
    stateClass: string;
    BoardClass: string;
    standardClass: string;

}
const EnrollHandler = () => {
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
    <div className="flex justify-center w-full sm:flex-col box-border border-1 rounded-2xl shadow-xl m-2">
      <section className="flex flex-col h-fit items-center m-2 box-border p-4 gap-4 border-2 rounded-xl">
      <div className="flex gap-4">
        <span >
          <select className=" box-border p-2 shadow-lg rounded-xl" onChange={handleState}>
            <option>Select State</option>
            {itemData.map((item, index) => (
              <option key={index} value={item.StateName}>
                {item.StateName}
              </option>
            ))}
          </select>
        </span>
        <span>
          <select className="box-border p-2 shadow-lg rounded-xl" onChange={handleBoard}>
            <option value="">Board</option>
            {BoardLabel.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div>
        <select className="box-border p-2 shadow-lg rounded-xl" onChange={handleClass}>
          <option value="">Class</option>
          {Standards.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      </section>

      
    </div>
  );
};

export default EnrollHandler;
