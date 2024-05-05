'use client'
import React, { useState } from 'react'
import FauthUtil from '@/app/(main)/Faculty/util/useFaculty'
import Auth from '@/app/(main)/Admin/util/Auth'
import Facultylogin from './f/page'
import OrgLogin from './a/page'


export interface LoginProps{
  item:React.ReactNode
  active?:number

}
export interface LoginP{
  title:string
  onclick:(inx:number) => void
}

const page = () => {
  const [Login,setLogin] = useState<LoginProps>({item:<OrgLogin/>,active:0})
 
  const {Admin} = Auth()
  const {Faculty,router} = FauthUtil();
  const [LoginHandler,setLoginHandler] = useState<React.ReactNode>(<></>)

  const navbtn:LoginP[] = [{title:"Admin",onclick:(inx)=>{setLogin({item:<OrgLogin/>,active:inx})}},{title:"Faculty",onclick:(inx)=>{setLogin({item:<Facultylogin/>,active:inx})}}]
 

  return (

    <main className='w-full sm:min-w-[600px] flex flex-col h-screen min-h-screen items-center box-border p-4'>

        <nav className='w-[50%] justify-evenly bg-white px-2 rounded-t-xl h-fit box-border flex'>
         {navbtn.map((val,inx)=>(<button key={inx} className={`${inx === Login.active && `bg-black text-white font-bold transition-all duration-200`} w-full h-full box-border p-2 rounded-xl`} onClick={()=>{val.onclick(inx)}}>{val.title}</button>))}
        </nav>
        <section className='w-full'>

          {Login.item}
          
        </section>

    </main>



    


  )
}

export default page
