import { RootState } from "@repo/ui/index";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subData } from "@repo/ui/index";


const SubjectHandler = () => {
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
    <div className="flex sm:flex-col w-[100%] bg-purple-700 items-center justify-evenly box-border border-1 rounded-2xl shadow-xl m-2">
      <div className="w-[40%] bg-red-700 box-border p-2">
        
     

      </div>
      <div className="w-[60%] bg-orange-500 box-border p-2">
        

      </div>

      
    </div>
  );
};

export default SubjectHandler;
