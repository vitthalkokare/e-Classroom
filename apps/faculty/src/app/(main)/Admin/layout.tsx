'use client'
import { commonUi } from '@repo/ui/index'
import React from 'react'
import AdminNav from './(Components)/Navigation/AdminNav'
import Auth from './util/Auth'
import OrgLogin from '@/app/(auth)/login/a/page'

const layout = ({children}:{children:React.ReactNode}) => {
  const {loading,Admin} = Auth()
  return (
   <>
   {loading ? (<commonUi.Loading/>):(
    <>

        {Admin === true ? (
          <main className='sm:min-w-[500px] scr overflow-x-scroll sm:h-screen w-screen justify-around h-screen sm:justify-between  sm:flex-col p-2    gap-2 box-border relative flex'>
            
            <AdminNav/>
       
           
            <section className=' w-full  rounded-2xl h-full sm:w-full  scr overflow-y-scroll overflow-x-hidden     md:w-full box-border  '>
      {children}
      </section>
    
          
       </main>

        ):(
          <OrgLogin/>
        )}
    
    </>
   )}
   </>
     
  )
}

export default layout
