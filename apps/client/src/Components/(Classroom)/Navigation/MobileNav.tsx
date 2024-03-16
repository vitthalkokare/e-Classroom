'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import { FaBell, FaHome, FaTasks } from 'react-icons/fa';
import { MdOutlineVideoSettings } from "react-icons/md";

import { FaGear, FaUser } from 'react-icons/fa6';

interface NavItem{
  label: string;
  icon:React.ReactNode;
  path:string;
}[]


const MobileNav:React.FC = () => {
    const [smallNav, setsmallNav] = useState('none')

    const MenuItem:NavItem[] =[
      {label: 'Tasks',path:'/Classroom/user/tasks', icon:<FaTasks/>},
      {label: 'Lecture',path:'/Classroom/user/lectures', icon:<MdOutlineVideoSettings/>},
      {label: 'Home',path:'/Classroom', icon:<FaHome/>},

      {label: 'More',path:'/Classroom/user/more', icon:<FaBell/>},
      {label: 'Profile',path:'/Classroom/user/Profile', icon:<FaUser/>},


     

    ]


  return (
    <div className=' box-border rounded-full px-2 hidden sm:flex bg-white h-fit absolute bottom-2 w-full '>
       
      
       <nav className='sm:flex w-full justify-center items-center hidden md:hidden md:p-4 box-border'>
        {MenuItem.map((item,index)=>(
          <Link key={index} href={item.path} className='flex box-border justify-evenly w-full md:text-blue-800 relative  items-center p-2'><span className='text-4xl  md:my-2 md:text-4xl md:p-2 box-border'>{item.icon}</span><span className='text-xl mx-4 box-border md:hidden hidden'>{item.label}</span></Link>
        ))}

       </nav>


       
    </div>


  )
}

export default MobileNav;
