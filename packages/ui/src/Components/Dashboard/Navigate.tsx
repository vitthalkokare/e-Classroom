"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaMoon, FaRegBell, FaSun } from "react-icons/fa";
import {useSelector,useDispatch} from 'react-redux'

import { FaUserLarge } from "react-icons/fa6";
import toast from "react-hot-toast";
import Button from "../Common/Button";
import { RootState } from "@/lib/store";




interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

export interface NavigateProps{
    navItem: NavItem[]
    drawerhandler:() => void;
    logouthandler:() => void;
    navHandler:() => void;
    themeHandler:() => void;
    mobnav:string
    Tmode:boolean
    toplabel?:string
    
}

const Navigate = ({navItem,Tmode,toplabel,drawerhandler,navHandler,logouthandler,mobnav,themeHandler}:NavigateProps) => {


  const [Tog, setTog] = useState({
    display: "hidden",
    text: "25",
    width: "5%",
  });
 


  const [Active, setActive] = useState<number>();

  const [mNav, setmNav] = useState("hidden");
  

  const logoutHandler = async () => {
    try {
        logouthandler();
      toast.success("Logged out successfully..");
      return (window.location.href = "/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleToggle = (action:string) => {
    setTog((prev) => {
      if (action === "enter" && prev.display === "hidden") {
        return { display: "block", text: "20", width: "10%" };
      } else if (action === "leave" && prev.display === "block") {
        return { display: "hidden", text: "25", width: "5%" };
      } else {
        return prev;
      }
    });
  };

  return (
    
 <nav 
      className={`h-full  top-[5%]   relative  sm:p-4  sm:bg-darkmode sm:${mobnav}  flex flex-col justify-around   min-w-fit dark:text-darktext  sm:rounded-xl  box-border transition-all duration-300`}
      style={{ width: `${Tog.width}`, minWidth:'fit-content' }}
      onMouseEnter={()=>{handleToggle("enter"); }}
      onMouseLeave={()=>{handleToggle("leave");navHandler()}}

    >
      
      <div  className='box-border rounded-xl p-2 min-w-fit w-full h-fit mb-2 dark:bg-darkmodes1 text-xl shadow-2xl bg-lightmode   flex-col justify-around items-center font-bold flex gap-2 '>
          <span className='flex justify-evenly box-border relative w-full'>
          <button className='hover:scale-125 box-border p-2 transition-all duration-200'><FaRegBell /></button>
          
          {/* Theme Toggle */}
          <button className='hover:scale-125 transition-all box-border p-2 duration-200' onClick={()=>{themeHandler()}}>{Tmode ? (<FaSun />):(<FaMoon />)}</button>

          </span>
          <button className='hover:scale-110 w-full box-border p-2 transition-all duration-200' onClick={()=>{drawerhandler()}}>{toplabel}</button>
          
          </div> 
      

      <nav className="h-[70%] rounded-xl p-2 dark:bg-darkmodes1  shadow-2xl bg-lightmode   justify-around w-full items-center  flex flex-col">
        {navItem.map((item, index) => (
          <div
            
            key={index}
            onClick={() => {
              setActive(index);
            }}
            className={`flex ${index === Active && `bg-black dark:text-gray-300 dark:bg-darkmodes1 text-white  font-bold  transition-all   p-2 duration-200`} rounded-full my-2  relative flex flex-col justify-center items-center    box-border`}
          >
            {index === 0 ? (
              <span className="  flex rounded-full justify-center items-center flex-col box-border p-4 h-fit bg-slate-400 text-5xl ">
                <Link href={item.path}>{item.icon}</Link>
                
              </span>
            ) : (
              <Link
                href={item.path}
                className="flex hover:transition-all hover:duration-200 hover:scale-110    box-border gap-2  w-fit justify-around   items-center"
              >
                <span className={`${Tog.display} box-border `}>
                  {item.label}
                </span>{" "}
                <span
                  className={` box-border `}
                  style={{ fontSize: `${Tog.text}px` }}
                >
                  {item.icon}
                </span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <span
        className={`relative h-[10%] p-2 text-2xl box-border flex justify-center  items-center`}
      >
        {Tog.display === "block" ? (
          <Button
            btnCss="rounded-xl mt-4"
            label={"Lgout"}
            onclick={() => {
              logoutHandler();
            }}
          />
        ) : (
          <button
            onClick={() => {
              logoutHandler();
            }}
          >
            <FaUserLarge />
          </button>
        )}
      </span>
    </nav>

    
  );
};

export default Navigate;
