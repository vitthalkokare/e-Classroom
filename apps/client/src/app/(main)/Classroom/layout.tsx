import StoreProvider from '@/app/StoreProvider'
import React from 'react'
import { Provider } from 'react-redux'
import Navigate from './(Componets)/Classroom/Navigation/Navigate'
import MobileNav from './(Componets)/Classroom/Navigation/MobileNav'

export default function Mainlayout({children,}:{children:React.ReactNode}){
  return (
     <div className='max-h-screen sm:min-w-[] sm:max-w-full  min-h-screen w-[100%] box-border  flex'>
      {/* <div className=' box-border md:hidden p-2 m-2 rounded-3xl bg-[#33d1f8] sm:hidden'>
        <Navigate/>
      </div>
    <div className='bg-white box-border md:w-full  h-full m-2 p-5 rounded-3xl w-full sm:w-full'>
    {children}
    </div>

    <div className='fixed bottom-0 sm:w-full hidden sm:flex box-border p-1 m-1 justify-center items-center bg-red-500 '>
      <MobileNav/>
    </div> */}
    <aside className='box-border justify-between flex-col items-center flex bg-pink-400 h-screen p-2 rounded-3xl mx-2 md:tex-4xl  left-0 w-[14%] md:w-[14%]  sm:hidden   '>
      <span>logo</span>
      <Navigate/>
      <span></span>
    </aside>
    <main className=' w-[85%] bg-yellow-300 rounded-3xl sm:min-w-[500px]  sm:text-2xl  md:w-full box-border p-2 '>
      {children}
    </main>

    <div className=' hidden sm:flex sm:text-2xl  h-[50px] fixed bottom-5 w-full box-border '>
      <MobileNav/>

    </div>

      
    </div>
  )
}

