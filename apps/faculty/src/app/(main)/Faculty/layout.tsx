
'use client'
import { RootState, commonUi} from '@repo/ui/index'
import React, { ReactNode } from 'react'
import FauthUtil from './util/useFaculty';
import Facultylogin from '@/app/(auth)/login/f/page';
import FacultyNav from './Components/Navigation/FacultyNav';
import { FacultyProvider } from './contexts/useFaculty';
import {SocketProvider } from './contexts/socketContext'
import {useSelector} from 'react-redux'
import Mobilenav from './Components/Navigation/Mobilenav';
import { CommonContextProvider } from './contexts/common';

const Layout = ({children}:{children:ReactNode}) => {


  const {Faculty,loading} = FauthUtil();
  const cardWidth = useSelector((state:RootState)=>state.commonUtil.cardWidth);

  
  return (
   <CommonContextProvider>
     
     {loading ? (<commonUi.Loading/>): (

<main className='sm:min-w-[500px] scr overflow-x-scroll sm:h-screen w-screen justify-around h-screen sm:justify-between  sm:flex-col p-2    gap-2 box-border relative flex'>
  {Faculty ? (
        <SocketProvider>

        <FacultyProvider>
        <FacultyNav/>
      

      <section className=' w-full  rounded-2xl h-full sm:w-full  scr overflow-y-scroll overflow-x-hidden     md:w-full box-border  '>
      {children}
      </section>
    
     
      </FacultyProvider>
        </SocketProvider>
     ) : (
     
     <Facultylogin/>
     
     
     )}
      
      </main>
     )}

     </CommonContextProvider>


  
   

  )
}

export default Layout
