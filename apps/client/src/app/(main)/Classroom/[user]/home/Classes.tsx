import React, { useEffect, useState } from 'react'
import { ClassesProps, useUserContext } from '@/app/contexts/UserContext'
import Countdown from './Countdown'
import useMountedState from '@/Components/custom/UseMounted'



const Classes = () => {
  const [subData,setSubdata] = useState<ClassesProps[]>([])
  const [mount,setMount] = useState(false);

  const {classData,refetch} = useUserContext();
  const {remainingTime,countEndTime} = Countdown()
  const {isMounted} = useMountedState(mount)

  useEffect(()=>{
    setMount(true);
    
  },[isMounted])

 

  return (

        <>
        <div className={`flex-col h-[450px]  flex w-full   sticky top-5 overflow-x-scroll scr  box-border z-40   items-center`}>
      {countEndTime.map((time, index) => (
        <div
          key={index}
          className={`sm:w-[70%] ${time === 0 ? `bg-green-300` : 'bg-purple-300'} rounded-lg shrink-0  m-1 w-[95%]   flex box-border  h-[80px] p-4  justify-evenly items-center`}
        >
          <div className="flex flex-col gap-2 p-2 box-border ">
            <span>{classData[index]?.standard}</span>
            <span>{classData[index]?.title}</span>
            <span className="whitespace-nowrap">{classData[index]?.lectureTime}</span>
          </div>
          

            {time === 0 ? (<>Completed..</>):(
          <>
           
           {(Math.floor((
            remainingTime[index] as number)/3600) === 0 && (Math.floor((remainingTime[index] as number) % 3600) / 60) === 0 && (remainingTime[index] as number) % 60 === 0 ) ? 
           (
           <div className="flex flex-col items-center justify-center gap-2">
            <span className="flex">
            <span>{Math.floor(time / 3600)}:</span>
            <span>{Math.floor((time % 3600) / 60)}:</span>

            <span>{time % 60}</span>
            </span>
            <span>Running</span>
            <button onClick={()=>{}}>JOin</button>

           </div>):
           (
           <div className="flex flex-col gap-2"> 
           <span>Started In</span>
           <span>
           <span>{Math.floor((remainingTime[index] as number) / 3600)}:</span>
            <span>{Math.floor(((remainingTime[index] as number) % 3600) / 60)}:</span>
            <span>{(remainingTime[index] as number) % 60}</span>
           </span>
           </div>
            )}
            </>)}


          <div className="flex box-border p-1">
            <span>{classData[index]?.fname}</span>
           
          </div>
          

        
          
        </div>
      ))}
    </div>
        
        
        </>
     
  )
}

export default Classes;
