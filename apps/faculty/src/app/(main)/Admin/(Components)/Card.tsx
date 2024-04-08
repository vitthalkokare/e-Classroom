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
    <div className='flex  min-w-[400px]  items-center box-border p-4 rounded-xl cursor-pointer z-50 w-full  flex-col  bg-slate-50 shadow-2xl min-h-fit h-[300px] relative '>
        <button onClick={btn} className='absolute right-0 top-0 box-border p-1 px-2 bg-black rounded-xl text-white'>X</button>
        <h1>{title}</h1>
        <main>{children}</main>
      
    </div>
  )
}

export default Card
