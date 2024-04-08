"use client";
import React, { useEffect, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import Card from "../Card";
import { RootState, commonUi } from "@repo/ui/index";
import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_NEW_SUBJECT_DATA } from "@/graphql/Admin/Mutations/input";
import { SUBJECT_DATA } from "@/graphql/Admin/Queries/input";
import toast from "react-hot-toast";
import { object } from "zod";
import { reverse } from "dns";


export type infoPops = {
  [key in "syllabus" | "language" | "exam" | "publication" | "edition"] : string

}


export interface subjectProps {
  title: string;
  about: string;
  price: string;
  state: string;
  boardName: string;
  standard: string;
  facultyEmail: string;
  info?:infoPops
}

interface InputPros {
  state?: string;
  boardName?: string;
}



const Dashboard = () => {
  const [Inputval, setInputval] = useState<InputPros>();
  const [Inputstate, setInputstate] = useState<any[]>([]);
  const [Inputboard, setInputboard] = useState<any[]>([]);
  const [Close,setOpen] = useState(false)

  const [Infop,setInfop] = useState<infoPops>({
    syllabus:"",
    language:"",
    edition:"",
    exam:"",
    publication:"",

  })



 

  const [Subdata, setSubData] = useState<subjectProps>({
    title: "",
    about: "",
    standard: "",
    facultyEmail: "",
    price: "",
    boardName: "",
    state: "",
    
  });

  const [NewState, setNewState] = useState({ c: false, name: "" });

  const popcard = useSelector((state: RootState) => state.AuthCard.isUser);

  const [addNewsubject, { loading, error, data: addsubdata }] =
    useMutation(ADD_NEW_SUBJECT_DATA);

  const { data } = useQuery(SUBJECT_DATA);

  useEffect(() => {
    const serverData = async () => {
      const ss = await data?.subjectData;
        if (data && ss) {
          try {
        const state = new Set(ss.flatMap((i: { state: string }) => i.state));
          setInputstate(() => [...state]);
          const board = new Set(
            ss.flatMap((i: { boardName: string }) => i.boardName)
          );
          setInputboard(() => [...board]);
       
      } catch (err) {
        console.log(err);
      }
        }
      
    };

    serverData();
  }, []);
  const standard = [
    { key: "Class1", val: "1st Class" },
    { key: "Class2", val: "2nd Class" },
    { key: "Class3", val: "3rd Class" },
    { key: "Class4", val: "4th Class" },
    { key: "Class5", val: "5th Class" },
    { key: "Class6", val: "6th Class" },
    { key: "Class7", val: "7th Class" },
    { key: "Class8", val: "8th Class" },
    { key: "Class9", val: "9th Class" },
    { key: "Class10", val: "10th Class" },
  ];

  

  function subItemChanger(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (name === "state") {
      setInputval({ state: value });
    }

    if (name === "boardName") {
      setInputval({ boardName: value });
    }
  }
  async function subItemHandler() {
    if (Inputval?.state) {
      setInputstate((pre) => [...pre, Inputval?.state]);
      setNewState({ c: false, name: "" });
      return toast.success("New State Added!");
    }
    if (Inputval?.boardName) {
      
      setInputboard((pre) => [Inputval?.boardName,...pre]);
      setNewState({ c: false, name: "" });
      return toast.success("New Board Added!");
    }

    setNewState({ c: false, name: "" });
  }



  function changeHandler(event: any) {
    const { name, value } = event.target;
    if (name === "price") {      

      setSubData((prevState) => ({
        ...prevState,
        [name]: value === "" ? null : Number(value),
      }));
    } 
    
    else {
      setSubData((prevState) => ({
        ...prevState,
        [name]: value,
        info:{...Infop}

        
      }));
    }
  }

  async function addSubjectHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    try {
      await addNewsubject({ variables: { input: Subdata } });
      
      if(error){
        console.log(error)
      }

     return toast.success("subject Added successfully..!");

    } catch (err: any) {
      return toast.error(err.message);
    }
  }

  function InfoChange(event: any) {
    const {name,value} = event.target

      setInfop((pre)=>({...pre,[name]:value}))

  }
  

  return (
    <main className="relative bg-gray-300 rounded-2xl  p-4   box-border flex flex-col items-center  ">
      <div className="absolute z-40 top-0 w-[70%] sm:w-[90%]">
        {NewState.c && (
          <Card
            btn={() => {
              setNewState({ c: false, name: "" });
            }}
            children={
              <>
                <input
                  className="border-2 box-border p-4"
                  type="text"
                  name={NewState.name}
                  onChange={subItemChanger}
                  placeholder={`Add new ${NewState.name}`}
                />
                <button
                  className="bg-black text-white box-border p-4"
                  onClick={subItemHandler}
                >
                  Add
                </button>
              </>
            }
          />
        )}
      </div>
      <section className="flex justify-evenly bg-pink-500 items-center w-full">
        <span className="flex gap-2 bg-red-400 w-full  box-border p-2 ">
          <select
            name="state"
            onChange={changeHandler}
            id=""
            value={Subdata.state}
          >
            <option className="read-only:">State</option>

            {Inputstate.map((item, index) => (
             
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          <button
            className="text-2xl"
            onClick={() => {
              setNewState({ c: true, name: "state" });
            }}
          >
            <FaCirclePlus />
          </button>
        </span>

        <span className="flex gap-2 w-full box-border p-2 ">
          <select
            name="boardName"
            id=""
            onChange={changeHandler}
            value={Subdata.boardName}
          >Board
            <option className="read-only:">Board</option>

            {Inputboard.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
          <button
            className="text-2xl"
            onClick={() => {
              setNewState({ c: true, name: "boardName" });
            }}
          >
            <FaCirclePlus />
          </button>
        </span>

        <span className="flex w-full box-border p-2 ">
          <select
            name="standard"
            onChange={changeHandler}
            value={Subdata.standard}
            id=""
          >
            Class
            <option className="read-only:">Class</option>
            {standard.map((item, index) => (
              <option key={index} value={item.key}>
                {item.val}
              </option>
            ))}
          </select>
        </span>
        <button onClick={()=>{setOpen(true)}} className="box-border p-2 flex items-center justify-center text-2xl gap-2">
          <strong>Info</strong>
          <FaCirclePlus />
        </button>
        
        {
        Close && 
        <div className="absolute z-40 top-0 w-[70%] sm:w-[90%]">
          <Card
          btn={()=>{setOpen(false)}}

          title="Subject Info"
          children={(
            <main className="flex flex-col">
             <form  onChange={InfoChange}>
             <span >
                <label htmlFor="">Syllabus: </label>
                <input type="text" value={Infop.syllabus} name="syllabus" />
              </span>

              <span className="flex flex-col gap-4 box-border p-2">
              <span>
                <label htmlFor="">Exam </label>
                <input type="text" value={Infop.exam}  name="exam"/>
                </span>
                <span>
                <label htmlFor="">Language </label>
                <input type="text" value={Infop.language} name="language"/>
                </span>
                <span>
                <label htmlFor="">Edition </label>
                <input type="text" value={Infop.edition}  name="edition"/>
                </span>
                <span>
                <label htmlFor="">Publisher </label>
                <input type="text" value={Infop.publication}  name="publication"/>
                </span>
                

              </span>
             </form>
            </main>
          )}
        />


        </div>
        }
      </section>
      <section>
        <section className="flex gap-2">
          <commonUi.InputField
            label="Title"
            id="title"
            name="title"
            value={Subdata.title}
            type="text"
            onChange={changeHandler}
          />
          <commonUi.InputField
            label="about"
            id="about"
            name="about"
            value={Subdata.about}
            type="text"
            onChange={changeHandler}
          />
          <commonUi.InputField
            label="Price"
            id="price"
            name="price"
            type="number"
            value={Subdata.price}
            onChange={changeHandler}
          />
        </section>
        <commonUi.InputField
          label="facultyEmail"
          id="facultyEmail"
          name="facultyEmail"
          value={Subdata.facultyEmail}
          type="email"
          onChange={changeHandler}
        />
      </section>

      <div>
        <button
          className="bg-black text-white p-2 rounded-xl m-2"
          onClick={addSubjectHandler}
        >
          Add Subject
        </button>
      </div>
    </main>
  );
};

export default Dashboard;
