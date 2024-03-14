'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import { FaHome, FaTasks } from 'react-icons/fa';
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
      {label: 'Home',path:'/Classroom', icon:<FaHome/>},
      {label: 'Tasks',path:'/Classroom/user/tasks', icon:<FaTasks/>},
      {label: 'Lecture',path:'/user/Classroom/user/lectures', icon:<MdOutlineVideoSettings/>},
      {label: 'More',path:'/Classroom/user/more', icon:<FaHome/>},
      {label: 'Profile',path:'/Classroom/user/Profile', icon:<FaUser/>},


     

    ]


  return (
    <div className=' box-border rounded-full p-2 hidden sm:flex bg-white justify-center  items-center w-full h-full '>
       
       {/* <header className='  hidden justify-center items-center  text-5xl   md:hidden'>
        <span></span>
        <Link href={'/Classroom/user/Profile'}><span className='md:hidden '>Profile</span></Link>



       </header> */}
       <nav className='sm:flex w-full justify-center items-center hidden md:hidden md:p-4 box-border'>
        {MenuItem.map((item,index)=>(
          <Link key={index} href={item.path} className='flex box-border justify-evenly w-full md:text-blue-800 relative  items-center p-2'><span className='text-4xl  md:my-2 md:text-4xl md:p-2 box-border'>{item.icon}</span><span className='text-xl mx-4 box-border md:hidden hidden'>{item.label}</span></Link>
        ))}

       </nav>


       
    </div>


  )
}

export default MobileNav;
