'use client'
import React, { DOMAttributes, useRef, useState } from 'react'
import { CiMail } from 'react-icons/ci';
import { FaChalkboardTeacher, FaRegUserCircle } from "react-icons/fa";
import { FaSackDollar } from 'react-icons/fa6';
import { GoGoal } from "react-icons/go";
import Intro from '../LandingPage/Indroduction/Intro';





interface navItem{
    label: string,
    icon:React.ReactNode
    

}
interface ScrollItem{
  clickHandler: (arg:any) => any
  divRef:React.RefObject<HTMLDivElement>
}



const Sidenav:React.FC<ScrollItem>= ({clickHandler,divRef})=>{
  const [Sscroll, setSscroll] = useState(0)

  const [isScrolled, setIsScrolled] = useState(false);

  const handleButtonClick = (sectionRef: React.RefObject<HTMLDivElement>) => {
    setIsScrolled(true);
    if (sectionRef.current !== null) {
      window.scrollTo(20, sectionRef.current.offsetTop);
      
    }
  };


 

 



  const nav: navItem[]= [
    {label: 'Home', icon: <FaRegUserCircle/>},
    {label: 'Home', icon: <FaChalkboardTeacher />},
    {label: 'Home', icon: <GoGoal/>},
    {label: 'Home', icon: <FaSackDollar />},
    {label: 'Home', icon: <CiMail />},

]


  return (
    <div className=' sm:hidden md:hidden z-10 h-screen flex flex-col  justify-center box-borde p-4 fixed right-5  '>

      <ul className='s-color box-border flex flex-col p-4 rounded-3xl'>
      {
        nav.map((item,index)=>(
            <button onClick={clickHandler(divRef)} className='box-border p-3 text-2xl hover:text-red-500' key={index}>
                {item.icon}

            </button>
        ))
      }
      
     


  
      

      </ul>
    </div>
  )
}

export  default  Sidenav



