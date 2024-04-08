'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import { FaBell, FaHome, FaTasks } from 'react-icons/fa';
import { MdOutlineVideoSettings } from "react-icons/md";

import { FaGear, FaUser } from 'react-icons/fa6';
import useAuth from '@/app/util/useAuth';

interface NavItem{
  label: string;
  icon:React.ReactNode;
  path:string;
}[]


const MobileNav:React.FC = () => {
    const [smallNav, setsmallNav] = useState('none')
    const {userRoute} = useAuth()

    const MenuItem:NavItem[] =[
      {
        label: "Lecture",
        icon: <MdOutlineVideoSettings />,
        path:`/Classroom/${userRoute}/lectures`
      },
      { label: "Tasks",  path:`/Classroom/${userRoute}/tasks` , icon: <FaTasks /> },

      { label: "Home", path: "/Classroom",   icon: <FaHome /> },

      { label: "More",  path:`/Classroom/${userRoute}/more`,  icon: <FaHome /> },
      { label: "Profile",  path:`/Classroom/${userRoute}/Profile` , icon: <FaUser /> },

     

    ]


  return (
       
      
       <nav className='sm:flex w-full justify-around  items-center hidden bg-white box-border'>
        {MenuItem.map((item,index)=>(
          <Link key={index} href={item.path} className='flex box-border justify-evenly w-full md:text-blue-800 relative  items-center p-2'><span className='text-4xl  md:my-2 md:text-4xl md:p-2 box-border'>{item.icon}</span><span className='text-xl mx-4 box-border md:hidden hidden'>{item.label}</span></Link>
        ))}

       </nav>


       


  )
}

export default MobileNav;
