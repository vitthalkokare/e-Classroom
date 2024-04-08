import { USER_LOG_out } from '@/graphql/Admin/Mutations/input';
import { useMutation } from '@apollo/client';
import { commonUi } from '@repo/ui/index';
import Link from 'next/link';
import { it } from 'node:test';
import React, { useState } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaHouse, FaPlus, FaUsersGear } from 'react-icons/fa6';
import { number } from 'zod';
import {toast} from 'react-hot-toast'


export interface MainNavProps{
    title:string,icon:React.ReactNode,path:string
}[]
const FacultyNav = () => {

    const [Active, setActive] = useState(0)
    const [orgLogut,{loading,error,data}] = useMutation(USER_LOG_out);



        const menu:MainNavProps[] = [
            {title:"Home",icon:<FaHouse/>,path:'/Faculty'},
            {title:"Student",icon:<FaUsersGear />,path:'/Faculty/student'},
            {title:"Tasks",icon:<FaPlus/>,path:'/Faculty/tasks'},

            {title:"Profile",icon:<FaChalkboardTeacher />,path:'/Faculty/profile'},




        ];


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
    <div className='h-full w-fit flex flex-col justify-evenly  box-border'>
        <nav className='h-full justify-around  flex flex-col'>
       {
            menu.map((item,index)=>(

                    <div key={index} onClick={()=>{setActive(index)}} className={`flex ${index === Active && `bg-white transition-all duration-200`}     flex-col  items-center box-border`}>
                        <Link href={item.path} className='flex box-border p-2  w-full justify-evenly items-center'><span className=''>{item.title}</span> <span className=''>{item.icon}</span></Link>
                    </div>
            

            ))
        }    
       </nav>
       <commonUi.Button
       label={"Lgout"}
       onclick={()=>{logoutHandler()}}
       />

      
    </div>
  )
}

export default FacultyNav