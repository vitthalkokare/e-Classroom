import useAuth from "@/app/util/useAuth";
import { SUBJECT_DATA } from "@/graphql/user/queries";
import { useQuery } from "@apollo/client";
import { RootState, subdatahandler } from "@repo/ui/index";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export type sinfo = {
  [key in "State" | "Board" | "Class"]: string;
};

export interface EnrollhandlerProps {
  State?: string;
  board?: string;
  Standard?: string;
  main?: string;
  Section_1?: string;
}
const QuerySubSelector = ({
  State,
  board,
  Standard,
  main,
  Section_1,
}: EnrollhandlerProps) => {
  const [Board, setBoard] = useState("");
  const [bstate, setState] = useState("");
  const [Class, setClass] = useState("");

 


  const [Subject, setSubject] = useState<any | null>(null);
  const { sInfo ,isAuthenticated } = useAuth();

  const states = useSelector((state: RootState) => state.querysubdata.states);
  const BoardLabel = useSelector(
    (state: RootState) => state.querysubdata.boardName
  );
  const Standards = useSelector(
    (state: RootState) => state.querysubdata.Standards
  );

  const dispatch = useDispatch();
  const { data, error, loading } = useQuery(SUBJECT_DATA);

  useEffect(() => {
    const subdata = async () => {
      const dd = await data?.subjectData;
      if(localStorage.getItem('subdata')){
        localStorage.setItem('subdata',JSON.stringify([]))
      }
      if (dd) {
        localStorage.setItem("subdata", JSON.stringify(dd));
      }
      const ss = localStorage.getItem("subdata");

      dispatch(subdatahandler.QueryData());
    };







    subdata();
  }, [data]);

  useEffect(()=>{

    if(sInfo){
      let {state,standard,boardName} = sInfo
      
    dispatch(subdatahandler.stateHandler(state))
    dispatch(subdatahandler.boardHandler(boardName))
    dispatch(subdatahandler.classHandler([standard,boardName,state]));
    


    }
    
    
  },[sInfo])



 

  function handleState(event: React.ChangeEvent<HTMLSelectElement>) {
    const val = event.target.value;
    setState(val);
    dispatch(subdatahandler.stateHandler(val));
  }

  function handleBoard(event: React.ChangeEvent<HTMLSelectElement>) {
    const val = event.target.value;
    setBoard(val);
    dispatch(subdatahandler.boardHandler(val));
  }

  function handleClass(event: React.ChangeEvent<HTMLSelectElement>) {
    const val = event.target.value;
    setClass(val);
    dispatch(subdatahandler.classHandler([val, Board, bstate]));
  }

  return (
    <div
      className={`${main}  flex flex-col justify-center items-center gap-2 relative min-h-[100px]   w-full  box-border border-1 rounded-2xl shadow-xl `}
    >
      <div className="  flex justify-around items-center box-border w-full">
        <span className="w-[50%] box-border p-2">
          <select
            className={`${State}box-border w-full p-4 shadow-lg rounded-xl`}
            onChange={handleState}
          >
            <option>{isAuthenticated ? `${sInfo?.state}`:"State"}</option>

            {states.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </span>
        <span className="w-[50%] box-border p-2  justify-center items-center">
          <select
            className={`${board}box-border flex flex-col w-full  p-4 shadow-lg rounded-xl`}
            onChange={handleBoard}
          >
            <option>{isAuthenticated ? `${sInfo?.boardName}`:"Board"}</option>

            {BoardLabel.map((item, index) => (
              <option className="flex flex-col" key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </span>
      </div>
      <div className="flex justify-center items-center w-full">
        <select
          className={`${Standard} rounded-lg box-border relative p-4 flex flex-col justify-center   items-center `}
          onChange={handleClass}
        >
            <option>{isAuthenticated ? `${sInfo?.standard}`:"Class"}</option>
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

export default QuerySubSelector;
