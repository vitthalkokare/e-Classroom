import { USER_LOG_out } from '@/graphql/Admin/Mutations/input';
import { useMutation } from '@apollo/client';
import { commonUi } from '@repo/ui/index';
import Link from 'next/link';
import { it } from 'node:test';
import React, { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaHouse, FaLeftRight, FaPlus, FaUserLarge, FaUsersGear } from 'react-icons/fa6';
import { number } from 'zod'; 
import {toast} from 'react-hot-toast'


export interface MainNavProps{
    title:string,icon:React.ReactNode,path:string
}[]
const AdminNav = () => {

    const [Active, setActive] = useState(0)
    const [Tog,setTog] = useState({display:'block',text:'25',width:'10%'})

        const menu:MainNavProps[] = [
            {title:"Home",icon:<FaHouse/>,path:'/Admin'},
            {title:"Add",icon:<FaPlus/>,path:'/Admin/add'},
            {title:"Student",icon:<FaUsersGear />,path:'/Admin/student'},
            {title:"Faculty",icon:<FaChalkboardTeacher />,path:'/Admin/faculty'},




        ];
        const [orgLogut,{loading,error,data}] = useMutation(USER_LOG_out);


        
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
            <nav className=' h-[80%] sticky top-[10%] left-0 md:p-4 sm:hidden flex flex-col justify-around p-2  min-w-fit bg-purple-600 box-border transition-all duration-300  rounded-xl' style={{width:`${Tog.width}`}}>
            <button onClick={()=>{setTog((pre)=> pre.display ==='block' ? {display:'hidden',text:'30',width:"5%"} : {display:'block',text:'20',width:"10%"})}} className='box-border text-2xl  bg-white p-1 absolute right-0 -top-5'><FaLeftRight />
        </button>
                <nav className='h-[50%]  justify-around w-full items-center  flex flex-col'>
               {
                    menu.map((item,index)=>(
        
                            <div key={index} onClick={()=>{setActive(index)}} className={`flex ${index === Active && `bg-white  transition-all  p-2 duration-200`} rounded-full  relative flex flex-col justify-center items-center   box-border`}>
                                <Link href={item.path} className='flex  box-border gap-2  w-fit justify-around   items-center'><span className={`${Tog.display} box-border `}>{item.title}</span> <span className={`text-[${Tog.text}px] box-border `}>{item.icon}</span></Link>
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
          )
}

export default AdminNav
