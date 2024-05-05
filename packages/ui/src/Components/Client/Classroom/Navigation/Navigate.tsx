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


const Navigate:React.FC = () => {
    const [smallNav, setsmallNav] = useState('none')

    const MenuItem:NavItem[] =[
      {label: 'Home',path:'/Classroom', icon:<FaHome/>},
      {label: 'Tasks',path:'/Classroom/Tasks', icon:<FaTasks/>},
      {label: 'Lecture',path:'/Classroom', icon:<MdOutlineVideoSettings/>},
      {label: 'More',path:'/Classroom', icon:<FaHome/>},
      {label: 'Setting',path:'/Classroom/setting', icon:<FaGear/>},


     

    ]


  return (
    <div className='flex box-border flex-col items-center   h-[70%] w-full '>
       
       <header className=' flex justify-center items-center flex-col text-5xl md:mb-2 mb-4'>
        <Link href={'/Classroom/user/Profile'}><FaUser/></Link>
        <Link href={'/Classroom/Profile'}><span className='md:hidden '>Profile</span></Link>



       </header>
       <nav className='flex flex-col md:p-4 box-border'>
        {MenuItem.map((item,index)=>(
          <Link key={index} href={item.path} className='flex box-border  md:text-blue-800 relative  items-center p-2'><span className='text-4xl  md:my-2 md:text-4xl md:p-2 box-border'>{item.icon}</span><span className='text-xl mx-4 box-border md:hidden '>{item.label}</span></Link>
        ))}

       </nav>

       <span className='box-border p-2 bg-blue-700 rounded-xl'><a href="/api/auth/logout">Logout</a></span>


       
    </div>


  )
}

export default Navigate;
