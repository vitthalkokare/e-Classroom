'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Navigate:React.FC = () => {
    const [smallNav, setsmallNav] = useState('none')

    const navItem = ()=>{
        setsmallNav(smallNav === 'none' ? 'flex' : 'none');
    }


  return (
    <div className='flex box-border p-4  justify-between h-full xl:text-[2vw] items-center'>
       <div className='flex flex-col justify-between h-full'>
       <nav>
       <Link href={'/'}>Logo</Link>

        </nav>
        <div className='flex flex-col box-border'>
            <Link href={'/Classroom'}>Classroom</Link>

            <Link onMouseDown={navItem} href={'/Classroom/Tasks'}>Tasks</Link>
        </div>
        <div>
            logout
        </div>
       </div>


        <div className=' flex-col items-center h-1/2 justify-between box-border p-3   bg-blue-500 rounded-2xl' style={{display:`${smallNav}`}}>
        <div className='flex flex-col gap-5 box-border'>
                    <span>Subjects</span>
                    <div className='flex flex-col'>
                        <span>English</span>
                        <span>Science</span>
                        <span>Algebra</span>
                        <span>Geometry</span>
                    </div>
                </div>
        </div>
      
    </div>


  )
}

export default Navigate;
