'use client'
import '../../styles/globals.css'
import { RootState, setCard } from '@repo/ui/index'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



export interface authCardPrps{
    title: string
    children:React.ReactNode
    refbtn?:{lebel:string,onclick:() => void,children:React.ReactNode,set:boolean}
    secCss?:string
}


const AuthCard = ({title,children,secCss,refbtn}:authCardPrps) => {
  const [Cpath,setCpath] = useState<boolean>()

  useEffect(()=>{
    if(window.location.pathname === '/login' || window.location.pathname === '/signup'){
      setCpath(true)
    }
    else{setCpath(false)}

  },[])

    const dispatch = useDispatch();
  return (
   <>
     <section className=' mx-auto justify-between sm:min-w-[500px]  relative bg-black rounded-xl box-border  min-h-[500px]   sm:w-full flex ' style={{width:'60%'}}>

       <div className='w-[30%] relative sm:hidden'>left</div>
       <section className={`w-[70%] ${secCss} sm:w-[100%] bg-white relative box-border  p-4 rounded-xl justify-evenly flex flex-col items-center`}>
        {Cpath ? (       <button onClick={()=>{window.location.href="/"}}  className='absolute right-0 top-0  bg-black box-border px-2 py-1 text-white  font-bold rounded-xl '>X</button>
):(       <button onClick={()=>{dispatch(setCard(false))}}  className='absolute right-0 top-0  bg-black box-border px-2 py-1 text-white  font-bold rounded-xl '>X</button>
)}

       <h1 className='font-bold  border-b-2 box-border p-2 text-2xl'>{title}</h1>

            {children}

            <button onClick={refbtn?.onclick} className=''>{refbtn?.lebel}</button>

        

        </section>

        
        



    </section>
    {refbtn?.set && (<section className="w-full absolute top-0 left-0">
                    {refbtn.children}
               </section>)}

   </>
  )
}

export default AuthCard
