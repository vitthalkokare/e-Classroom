'use client'
import {useEffect, useState} from 'react'
import NavigatorHandler from './(faculty)/Home/NavigatorHandler'
import { useFacultyContext } from './contexts/useFaculty'
import SocketioRoom from './(faculty)/classroom/SocketioRoom'
import { useCommonContext } from './contexts/common'


export interface ClassesProps{
  lectureTime:string
  title:string
  standard:string
  boardName:string
  fname:string
}

export interface CountdownState {
  hours: number;
  minutes: number;
  seconds: number;
}


const page = () => {


 


  const {LiveDriver,handleLiveDriver} = useCommonContext();
  const {allotSubject} = useFacultyContext()

  

useEffect(()=>{},[allotSubject]);



  return (
    <div className='flex flex-col box-border overflow-y-scroll overflow-x-hidden p-2 items-center scr  w-full relative h-full '>

    <section className='w-full box-border  rounded-xl z-20 sticky top-0 left-0'>
      
     <div className='w-full z-20 flex overflow-y-scroll  scr dark:bg-darkmodes1   flex-col items-center  justify-center box-border p-2  sticky top-0 rounded-xl bg-white   transition-all duration-300' style={{height:`${LiveDriver}px`}}>
     <div className=' absolute top-0 w-[100%] z-50  min-h-fit '>
      <SocketioRoom/>

      </div>

              
              
     

          <div className='box-border z-20 absolute top-0 items-center sm:w-full  w-[60%] p-2 h-fit overflow-y-hidden flex overflow-x-scroll  scr'>
          
            {/* <Countdown livedrawer={liveDrawerHandler}/> */}

          </div>

            {/* <button onClick={()=>LiveDriver === 250 ? setLiveDriver(160) : setLiveDriver(250)} className='absolute right-0 bottom-0 box-border p-2 bg-blue-400 '><FaArrowsAltV /> </button> */}


          
          <NavigatorHandler/> 

          </div>


    

      </section>

         
          <section className='w-full relative my-2 rounded-xl  dark:bg-darkmodes1 bg-white min-h-[400px] overflow-y-scroll box-border p-4 scr'>


          </section>

          


    </div> 
  )
}

export default page;