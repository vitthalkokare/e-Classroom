'use client'
import MobileNav from '@/Components/(Classroom)/Navigation/MobileNav'
import Navigate from '@/Components/(Classroom)/Navigation/Navigate'
import LoginPage from '@/app/api/login/page'
import React, { useEffect, useState } from 'react'
import useAuth from '@/app/util/useAuth'


export default function Mainlayout({children,}:{children:React.ReactNode}){


  const {isAuthenticated,loading,error} = useAuth();
 



  return (
    <>
    {isAuthenticated ? ( <div className='max-h-fit sm:min-w-[500px] sm:max-w-fit  min-h-screen w-[100%] box-border relative flex'>
     
     <aside className='box-border justify-between flex-col items-center flex bg-pink-400 h-screen p-2 rounded-3xl mx-2 md:tex-4xl  left-0 w-[14%] md:w-[14%]  sm:hidden   '>
       <span>logo</span>
       <Navigate/>
       <span></span>
     </aside>
     <main className=' w-[85%] bg-yellow-300 rounded-3xl sm:w-full min-h-[80vh]   sm:text-2xl  md:w-full box-border p-2 '>
       {children}
     </main>
 
     <div className=' hidden sm:flex sm:text-2xl h-[50px] fixed bottom-5 w-full box-border '>
       <MobileNav/>
 
     </div> 
 
       
     </div>):(<>
        {loading ? <h1>loading....</h1> : <LoginPage/>}
        
     </>
      
    )}
    			

    </>
  )
}

