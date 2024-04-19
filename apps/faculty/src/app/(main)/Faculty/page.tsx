'use client'
import React, { useEffect, useState } from 'react'
import useFaculty from './util/useFaculty';
import Classes, { QueryProps } from './(faculty)/Home/Classes';
import SocketioIntegration from './socketio/SocketioIntegration';
import Navigator from './(faculty)/Home/Navigator';


interface CountdownState {
  hours: number;
  minutes: number;
  seconds: number;
}

const page = () => {
  const [Classbtn,setClassbtn] = useState({width:0});
  const [Selected,setSelected] = useState<any>()
  const [Live,setLive] = useState({width:0});
  const [lecTime,setLecTime] = useState<CountdownState | null>(null);


 const {data}= useFaculty();

 let date = new Date();
 useEffect(()=>{
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  


 const ss = Selected?.lectureTime;
 const n = Number(ss?.substring(0,2).replace(/:/g,''));

 const ct = new Date();
  ct.setHours(n,0,0,0);
  const cd = new Date();
  const sm = Math.max(ct.getTime() - cd.getTime());
  const hours = Math.floor(sm/3600000)
  const minutes = Math.floor((sm % 3600000)/60000);
  const seconds = Math.floor((sm % 3600000) % 600000 / 1000);


  setLecTime({hours,minutes,seconds})

 console.log(lecTime);

  return ()=>{
    
    
  }


 },[Selected]);
 



 
  return (
    <div className='relative flex flex-col h-full overflow-y-scroll box-border p-2 scr w-full bg-yellow-600'>
      <div className='w-full box-border sticky top-0 left-0 items-center bg-gray-50 rounded-xl p-1 h-fit flex justify-between'>
        <span className='box-border p-2'>
          <button onClick={()=>{setClassbtn((pre)=> pre.width === 0 ? {width:70} : {width:0})}}>Classes</button>
        </span>

        <span className='flex gap-2 bg-black p-1 text-white font-bold  box-border rounded-xl items-center'>
         <span>{Selected?.state}</span>
          <span>{Selected?.boardlebel}</span>
          <span>{Selected?.standard}</span>
          <span>{Selected?.title}</span>

        </span>
        
        <span></span>
      </div>
     
     <section className='flex relative justify-evenly w-full'>
     
    <div className='absolute left-0 top-3 overflow-hidden   box-border  rounded-xl bg-white shadow-3xl  transition-all duration-300 ease-in' style={{width:`${Classbtn.width}%`}}>
    <button onClick={()=>{setClassbtn((pre)=> pre.width === 0 ? {width:70} : {width:0})}} className='absolute right-0 z-50 top-0 box-border px-1 rounded-full bg-black text-white'>X</button>
    <Classes setSelected={setSelected}/>
    </div>

     <section className='w-full overflow-y-scroll scr h-full box-border my-2'>
      <div className='w-full box-border flex justify-center items-center p-4 min-h-[400px] rounded-xl bg-yellow-100'>
   


         <div>
          <span>
          <span>{Selected?.standard}</span>
          <span>{Selected?.title}</span>
          </span>
          <span>
          <h1>new Data</h1>
          <SocketioIntegration/>
          </span>
         </div>
         <Navigator/>


 <div className='  absolute h-full top-0 right-0  bg-blue-700   box-border  rounded-xl shadow-3xl  transition-all duration-300 ease-in' style={{width:`${Live.width}%`}}>
 <button onClick={()=>{setLive((pre)=> pre.width === 0 ? {width:30} : {width:0})}} className='absolute right-0 z-50 top-0 box-border p-2 bg-black text-white'>Live</button>

    </div>
      </div>

        
    </section>
    
     </section>
    
   
    
     
      
    </div>
  )
}

export default page
