'use client'

import React from 'react'
import { SocketProvider } from '@/app/contexts/socketContext'
import useAuth from '@/app/util/useAuth'
import LoginPage from '@/app/(auth)/login/page'
import { commonUi } from '@repo/ui/index'
import { useCommonContext } from '@/app/contexts/common'
import Classes from './[user]/home/Classes'
import { FaArrowRightFromBracket, FaArrowRightToBracket } from 'react-icons/fa6'
import { UserContextProvider, useUserContext } from '@/app/contexts/UserContext'
import StudentinfoCard from '@/Components/(Classroom)/Student/StudentinfoCard'
import Navigation from '@/Components/(Classroom)/Navigation/Navigate'


export default function Mainlayout({children}:{children:React.ReactNode},props:any){


  const {isAuthenticated,loading,error} = useAuth();

 
  const {drawerHandler,cardDrawer,mobNav,navHandler} = useCommonContext()

  const {StudentInfo} = useAuth();

  return (

    <SocketProvider>

    {isAuthenticated ? (

      
      <main className='sm:min-w-[500px] scr overflow-x-scroll  w-full  h-screen  p-2    gap-2 box-border relative flex'>
        {StudentInfo === null  && (<StudentinfoCard/>)}
    <div className='absolute left-[20%] sm:left-[10%]  top-[5%] bg-white dark:bg-stone-600 shadow-2xl overflow-hidden z-50 h-fit   box-border  rounded-xl dark:bg shadow-3xl  transition-all duration-300 ease-in' style={{width:`${cardDrawer.width}%`}}>
    <button onClick={()=>{drawerHandler()}} className='absolute right-0 z-50 top-0 box-border px-2 bg-black dark:bg-white dark:text-black rounded-full text-white'>X</button>
      <Classes/>
    </div> 

     <button onClick={()=>{navHandler()}} className='fixed box-border p-4 text-2xl font-bold hidden z-50 sm:flex left-0 bottom-5'>{mobNav.isNav ? (<FaArrowRightFromBracket />):(<FaArrowRightToBracket />)}</button>

    
    <Navigation/>
       
     <main className=' w-full  rounded-2xl h-full sm:w-full  scr overflow-y-scroll overflow-x-hidden     md:w-full box-border  '>
       {children}
     </main>

    

    
 
 
       
     </main>):(<>
        {loading ? <commonUi.Loading/> : <LoginPage/>}
        
     </>
      
    )}
    			

    </SocketProvider>

  )
}

