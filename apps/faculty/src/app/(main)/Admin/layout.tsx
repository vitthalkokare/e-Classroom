
'use client'
import { Dashboard} from '@repo/ui/index'
import React, { ReactNode } from 'react'
import Auth from './util/Auth';
import LoginPage from '@/app/(auth)/login/page';
import MainNav from './(Components)/Navigation/AdminNav';


const Layout = ({children}:{children:ReactNode}) => {


  const {Admin,loading} = Auth();
  
  
  return (
    <section className=' box-border p-2 justify-around h-screen  w-full min-h-[500px] gap-4  flex'>
      
       {loading ? (<>Loading....</>): (

        <>
        {Admin ? (
       <>
        <nav className=' h-full overflow-hidden sm:hidden min-w-[10%] w-fit bg-purple-600 box-border p-4 rounded-xl'>
          <MainNav/>
        </nav>

        <main className='w-full flex '>
        {children}
        </main>
      
       
       </>) : (
       <>
       <LoginPage/>
       
       
       </>)}
        
        </>
       )}
    </section>
  )
}

export default Layout
