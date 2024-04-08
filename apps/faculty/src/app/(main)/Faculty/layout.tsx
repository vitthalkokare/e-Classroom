
'use client'
import { Dashboard, commonUi} from '@repo/ui/index'
import React, { ReactNode } from 'react'
import FauthUtil from './util/FauthUtil';
import LoginPage from '@/app/(auth)/login/page';
import Facultylogin from '@/app/(auth)/login/f/page';
import FacultyNav from './Components/Navigation/FacyltyNav';


const Layout = ({children}:{children:ReactNode}) => {


  const {Faculty,loading} = FauthUtil();
  
  
  return (
    <section className=' box-border gap-2 p-2 justify-around  h-screen sm:min-w-[600px]  w-full min-h-[500px]  flex'>
      
       {loading ? (<commonUi.Loading/>): (

        <>
        {Faculty ? (
       <>
        <nav className=' h-full sticky top-0 left-0 overflow-hidden sm:hidden min-w-[10%] w-fit bg-purple-600 box-border p-4 rounded-xl'>
          <FacultyNav/>
        </nav>

        <main className='w-full sm:min-w-[600px] box-border p-2 rounded-2xl bg-slate-400 flex overflow-y-scroll scr'>
        {children}
        </main>
      
       
       </>) : (
       <>
       <Facultylogin/>
       
       
       </>)}
        
        </>
       )}
    </section>
  )
}

export default Layout
