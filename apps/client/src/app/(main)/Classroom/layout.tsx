'use client'
import MobileNav from '@/Components/(Classroom)/Navigation/MobileNav'
import Navigate from '@/Components/(Classroom)/Navigation/Navigate'
import React, { useEffect, useState } from 'react'
import useAuth from '@/app/util/useAuth'
import LoginPage from '@/app/(auth)/login/page'


export default function Mainlayout({children,}:{children:React.ReactNode}){


  const {isAuthenticated,loading,error} = useAuth();
 



  return (
    <>
    {true ? ( <div className=' sm:min-w-[400px] h-screen    w-[100%] box-border relative flex'>
     
     <aside className='box-border justify-between h-full flex-col items-center flex bg-pink-400  p-2 rounded-3xl mx-2 md:tex-4xl  left-0   sm:hidden   '>
       <Navigate/>
       
     </aside>
     <main className=' w-[85%] bg-yellow-300 rounded-2xl sm:w-full min-h-[80vh]   sm:text-2xl  md:w-full box-border p-2 '>
       {children}
     </main>
 
       <MobileNav/>
 
 
       
     </div>):(<>
        {loading ? <h1>loading....</h1> : <LoginPage/>}
        
     </>
      
    )}
    			

    </>
  )
}

