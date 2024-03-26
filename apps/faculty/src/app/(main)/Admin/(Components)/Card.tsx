'use client'
import { setCard } from '@repo/ui/index'
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'


export interface CardProps{
    children:React.ReactNode
    title?:string
    btn?:() => void
}

const Card = ({children,title,btn}:CardProps) => {
    const dispatch = useDispatch()
  return (
    <div className='flex left-[15%] sm:left-[5%] justify-center rounded-xl cursor-pointer z-50 w-[60%] items-center flex-col  sm:w-[90%] bg-slate-50 shadow-2xl min-h-fit h-[300px] absolute top-5'>
        <button onClick={btn} className='absolute right-0 top-0 box-border p-1 px-2 bg-black rounded-xl text-white'>X</button>
        <h1>{title}</h1>
        <main>{children}</main>
      
    </div>
  )
}

export default Card
