'use client'
import MobileNav from '@/Components/(Classroom)/Navigation/MobileNav'
import Navigate from '@/Components/(Classroom)/Navigation/Navigate'
import LoginPage from '@/app/api/login/page'
import { AUTH_USER } from '@/graphql/user/queries'
import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import {NextRequest} from 'next/server'

export default function Mainlayout({children,}:{children:React.ReactNode}){
  const [User,setUser] = useState<Boolean>()

  const {data,loading,error} = useQuery(AUTH_USER)

  useEffect(()=>{
    
  if(data && data.authUser.id !== null){
    return setUser(true)
  }
  setUser(false);

  },[data])



  return (
    <>
    {User ? ( <div className='max-h-screen sm:min-w-[] sm:max-w-full  min-h-screen w-[100%] box-border  flex'>
     
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
 
       
     </div>):(<>
        {loading ? <h1>loading....</h1> : <LoginPage/>}
        
     </>
      
    )}
    </>
  )
}

