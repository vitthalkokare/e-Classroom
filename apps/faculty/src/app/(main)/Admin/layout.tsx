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
           <main className={`flex w-full   sm:justify-between sm:min-w-[600px] h-screen sm:flex-col gap-2 p-1 box-border min-h-screen bg-blue-400`}>
            
            <AdminNav/>
       
           
           <section className='bg-orange-400 flex flex-col sm:min-h-[600px] sm:min-w-[600px] items-center overflow-y-scroll src w-full h-full'>
             {children}
            
       
           </section>
           <aside className={`hidden bg-yellow-500 w-full  min-h-[100px] box-border p-2 sm:flex`}>
               MobileNav
       
           </aside>
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
