'use client'
import MobileNav from '@/Components/(Classroom)/Navigation/MobileNav'
import Navigate from '@/Components/(Classroom)/Navigation/Navigate'
import React, { useEffect, useState } from 'react'
import useAuth from '@/app/util/useAuth'
import LoginPage from '@/app/(auth)/login/page'
import RightNav from '@/Components/(Classroom)/Navigation/RightNav'


export default function Mainlayout({children}:{children:React.ReactNode},props:any){

  const [Item,setItem] = useState<React.ReactNode>()

  const {isAuthenticated,loading,error} = useAuth();
 



  return (
    <>
    {isAuthenticated ? (
       <main className='sm:min-w-[500px] scr overflow-x-scroll sm:h-screen w-screen justify-around h-screen sm:justify-between  sm:flex-col     gap-2 box-border relative flex'>
     
       <Navigate/>
       
     <main className=' w-full  rounded-2xl h-full sm:w-full  scr overflow-y-scroll overflow-x-hidden     md:w-full box-border  '>
       {children}
     </main>

    

     <div className='h-[100px] relative hidden box-border p-2 sm:flex w-full  '>
      <MobileNav/>
     </div>
 
 
 
       
     </main>):(<>
        {loading ? <h1>loading....</h1> : <LoginPage/>}
        
     </>
      
    )}
    			

    </>
  )
}

