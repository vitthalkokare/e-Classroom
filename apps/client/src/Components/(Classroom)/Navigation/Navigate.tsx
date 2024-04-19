"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaTasks } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";

import { FaGear, FaLeftRight, FaUser, FaUserLarge } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { USER_LOG_out } from "@/graphql/user/mutation";
import userUtil from "@/app/util/userUtil";
import useAuth from "@/app/util/useAuth";
import toast from "react-hot-toast";
import { menu } from "@material-tailwind/react";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";
import { commonUi } from "@repo/ui/index";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}
[];

const Navigate: React.FC = () => {
  const [Tog,setTog] = useState({display:'block',text:'20',width:'10%'})
  const [Active, setActive] = useState(0)

  const [smallNav, setsmallNav] = useState("none");
  const [userLogout, { loading }] = useMutation(USER_LOG_out);
  const {userRoute} = useAuth();

  

  const MenuItem: NavItem[] = [
    { label: "Home", path: "/Classroom",   icon: <FaHome /> },
    { label: "Tasks",  path:`/Classroom/${userRoute}/tasks` , icon: <FaTasks /> },
    {
      label: "Lecture",
      icon: <MdOutlineVideoSettings />,
      path:`/Classroom/${userRoute}/lectures`
    },
    { label: "More",  path:`/Classroom/${userRoute}/more`,  icon: <FaHome /> },
    { label: "Setting",  path:`/Classroom/${userRoute}/setting` , icon: <FaGear /> },
  ];

  const [orgLogut,{error,data}] = useMutation(USER_LOG_out);


  const logoutHandler = async()=>{
    try{
      await orgLogut();
       toast.success("Logged out successfully..")
       return window.location.href="/"

    }catch(err:any){
      toast.error(err.message)

    }
   
  }

  return (
    // <div className="flex w-full box-border flex-col items-center justify-between  h-full ">

    //   <nav className="flex flex-col  box-border">
    //     <span className=" flex justify-center items-center flex-col min-h-[150px] h-fit bg-slate-400 text-5xl ">
    //       <Link href={`/Classroom/${userRoute}/Profile`} >
    //         <FaUser />
    //       </Link>
    //     </span>
    //     {MenuItem.map((item, index) => (
    //       <Link
    //         key={index}
    //         href={item.path}
    //         className="flex box-border  relative w-fit  my-2  items-center p-2"
    //       >
    //         <span className="text-4xl  md:my-2 md:text-4xl md:p-2 box-border">
    //           {item.icon}
    //         </span>
    //         <span className="text-xl mx-4 box-border md:hidden ">
    //           {item.label}
    //         </span>
    //       </Link>
    //     ))}
    //   </nav>

    //   <span className="box-border p-2 bg-blue-700 rounded-xl">
    //     <a
    //       onClick={() => {
    //         userLogout();
    //       }}
    //       href="/api/auth/logout"
    //     >
    //       {loading && <>...</>}Logout
    //     </a>
    //   </span>
    // </div>

    
    <nav className=' h-[80%] sticky top-[10%] left-0 md:p-4 sm:hidden flex flex-col justify-around p-2  min-w-fit bg-purple-600 box-border transition-all duration-300  rounded-xl' style={{width:`${Tog.width}`}}>
    <button onClick={()=>{setTog((pre)=> pre.display ==='block' ? {display:'hidden',text:'25',width:"5%"} : {display:'block',text:'20',width:"10%"})}} className='box-border text-2xl  bg-white p-1 absolute right-0 -top-5'><FaLeftRight />
</button>
<span className=" flex justify-center items-center flex-col box-border p-4 h-fit bg-slate-400 text-5xl ">
          <Link href={`/Classroom/${userRoute}/Profile`} >
            <FaUser />
          </Link>
        </span>
        <nav className='h-[50%]  justify-around w-full items-center  flex flex-col'>

       {
            MenuItem.map((item,index)=>(

                    <div key={index} onClick={()=>{setActive(index)}} className={`flex ${index === Active && `bg-white font-bold  transition-all  p-2 duration-200`} rounded-full  relative flex flex-col justify-center items-center   box-border`}>
                        <Link href={item.path} className='flex  box-border gap-2  w-fit justify-around   items-center'><span className={`${Tog.display} box-border `}>{item.label}</span> <span className={` box-border `} style={{fontSize:`${Tog.text}px`}}>{item.icon}</span></Link>
                    </div>
            

            ))
        }    
       </nav>

      <span className={`relative text-2xl box-border flex justify-center items-center`}>
        {Tog.display === 'block' ?  <commonUi.Button
       label={"Lgout"}
       onclick={()=>{logoutHandler()}}
       /> : <button onClick={()=>{logoutHandler()}}><FaUserLarge /></button>} 
      </span>
       


      
    </nav>
  );
};

export default Navigate;
