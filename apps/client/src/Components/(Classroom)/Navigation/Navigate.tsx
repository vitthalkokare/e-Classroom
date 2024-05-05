"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaMoon, FaRegBell, FaSun, FaTasks } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";

import { FaGear, FaLeftRight, FaUser, FaUserLarge } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { USER_LOG_out } from "@/graphql/user/mutation";
import useAuth from "@/app/util/useAuth";
import toast from "react-hot-toast";
import { Navigate, RootState, commonSlice, commonUi  } from "@repo/ui/index";
import { useDarkMode } from "@/app/contexts/ThemeContext";
import {  useCommonContext } from "@/app/contexts/common";
import { useDispatch, useSelector } from "react-redux";
import Classes from "@/app/(main)/Classroom/[user]/home/Classes";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}
[];

const Navigation: React.FC = () => {
  const [Tog, setTog] = useState({
    display: "hidden",
    text: "25",
    width: "5%",
  });
  const [Active, setActive] = useState<number>();

  const [mNav, setmNav] = useState("hidden");
  const [userLogout, { loading }] = useMutation(USER_LOG_out);
  const { userRoute } = useAuth();
  const [Tmode,setTmode] = useState(false);
  const themeMode = useSelector((state:RootState)=>state.commonUtil.themeMode);
  const dispatch = useDispatch();
  

  const MenuItem: NavItem[] = [
    {
      label: "Profile",
      path: `/Classroom/${userRoute}/Profile`,
      icon: <FaUser />,
    },

    { label: "Home", path: "/Classroom", icon: <FaHome /> },
    {
      label: "Tasks",
      path: `/Classroom/${userRoute}/tasks`,
      icon: <FaTasks />,
    },
    {
      label: "Lecture",
      icon: <MdOutlineVideoSettings />,
      path: `/Classroom/${userRoute}/lectures`,
    },
    { label: "More", path: `/Classroom/${userRoute}/more`, icon: <FaHome /> },
    {
      label: "Setting",
      path: `/Classroom/${userRoute}/setting`,
      icon: <FaGear />,
    },
  ];
  const {drawerHandler,mobNav,navHandler,cardDrawer} = useCommonContext()



  const [orgLogut, { error, data }] = useMutation(USER_LOG_out);

  const logoutHandler = async () => {
    try {
      await orgLogut();
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

  const themeHandler = ()=>{
    console.log(themeMode);
    setTmode((pre)=>!pre)
    if(themeMode === false){ 

      dispatch(commonSlice.ThemeMode(true));
    }else{
      dispatch(commonSlice.ThemeMode(false));
    }

  }

  return (
    

    // <nav 
    //   className={`h-[80%] sticky top-[5%] left-0  sm:${mobNav.display} sm:sticky sm:left-0 sm:min-h-[500px] z-50  sm:p-4  sm:bg-darkmode   flex flex-col justify-around   min-w-fit dark:text-darktext  sm:rounded-xl  box-border transition-all duration-300`}
    //   style={{ width: `${Tog.width}` }}
    //   onMouseEnter={()=>{handleToggle("enter"); }}
    //   onMouseLeave={()=>{handleToggle("leave");navHandler()}}
    // >

    //   <div  className='box-border rounded-xl p-2 w-full h-[15%] dark:bg-darkmodes1 text-xl shadow-2xl bg-lightmode   flex-col justify-around items-center font-bold flex gap-2 '>
    //       <span className='flex justify-evenly w-full'>
    //       <button className='hover:scale-125 transition-all duration-200'><FaRegBell /></button>
          
    //       {/* Theme Toggle */}
    //       <button className='hover:scale-125 transition-all duration-200' onClick={()=>{themeHandler()}}>{themeMode ? (<FaSun />):(<FaMoon />)}</button>

    //       </span>
    //       <button className='hover:scale-110 w-full transition-all duration-200' onClick={()=>{drawerHandler()}}>Classes</button>
          
    //       </div> 
      

    //   <nav className="h-[70%] rounded-xl p-2 dark:bg-darkmodes1  shadow-2xl bg-lightmode   justify-around w-full items-center  flex flex-col">
    //     {MenuItem.map((item, index) => (
    //       <div
            
    //         key={index}
    //         onClick={() => {
    //           setActive(index);
    //         }}
    //         className={`flex ${index === Active && `bg-black dark:text-gray-300 dark:bg-darkmodes1 text-white  font-bold  transition-all   p-2 duration-200`} rounded-full my-2  relative flex flex-col justify-center items-center    box-border`}
    //       >
    //         {index === 0 ? (
    //           <span className="  flex rounded-full justify-center items-center flex-col box-border p-4 h-fit bg-slate-400 text-5xl ">
    //             <Link href={item.path}>{item.icon}</Link>
    //           </span>
    //         ) : (
    //           <Link
    //             href={item.path}
    //             className="flex hover:transition-all hover:duration-200 hover:scale-110    box-border gap-2  w-fit justify-around   items-center"
    //           >
    //             <span className={`${Tog.display} box-border `}>
    //               {item.label}
    //             </span>{" "}
    //             <span
    //               className={` box-border `}
    //               style={{ fontSize: `${Tog.text}px` }}
    //             >
    //               {item.icon}
    //             </span>
    //           </Link>
    //         )}
    //       </div>
    //     ))}
    //   </nav>

    //   <span
    //     className={`relative h-[10%] p-2 text-2xl box-border flex justify-center  items-center`}
    //   >
    //     {Tog.display === "block" ? (
    //       <commonUi.Button
    //         label={"Lgout"}
    //         onclick={() => {
    //           logoutHandler();
    //         }}
    //       />
    //     ) : (
    //       <button
    //         onClick={() => {
    //           logoutHandler();
    //         }}
    //       >
    //         <FaUserLarge />
    //       </button>
    //     )}
    //   </span>
    // </nav>
   

    <main className="w-fit h-[80%] z-50 sm:fixed sm:left-0 sm:top-10 ">
      

     
      <Navigate toplabel='Classes' navItem={MenuItem} drawerhandler={()=>{drawerHandler()}} logouthandler={()=>{orgLogut()}} navHandler={()=>{dispatch(commonSlice.mobNavHandler('hidden'))}} themeHandler={()=>{themeHandler()}} mobnav={mobNav.display} Tmode={Tmode}/>

    </main>


   
  );
};

export default Navigation;
