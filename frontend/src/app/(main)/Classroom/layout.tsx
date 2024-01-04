import MobileNav from '@/Components/Classroom/Navigation/MobileNav'
import Navigate from '@/Components/Classroom/Navigation/Navigate'
import React from 'react'

export default function Mainlayout({children,}:{children:React.ReactNode}){
  return (
    <div className='min-h-screen sm:w-[400px] xl:text-[2vw] flex bg-[#f8e9e9]'>
      <div className=' box-border p-2 m-2 rounded-3xl bg-[#33d1f8] sm:hidden'>
        <Navigate/>
      </div>
    <div className='bg-white box-border m-2 p-5 rounded-3xl w-[100vw] sm:w-full'>
    {children}
    </div>

    <div className='fixed bottom-0 sm:w-full hidden sm:flex box-border p-1 m-1 justify-center items-center bg-red-500 '>
      <MobileNav/>
    </div>
      
    </div>
  )
}

