'use client'
import { useUserContext } from '@/app/contexts/UserContext';
import { RoomProps, useSocket } from '@/app/contexts/socketContext';
import React, { useCallback, useEffect, useState } from 'react'
import Chats from './Chats';
const page = () => {
  const [femail,setfemal] = useState('');
  const [fdata,setfdata] = useState<any[]>([]);
  const [chatDrawer,setChatDrawer] = useState({isDrawer:false,width:0});

  const {classData} = useUserContext();

  const socket = useSocket();
 
  const roomStatus = useCallback((data:RoomProps)=>{
    console.log(data);

  },[]);

  useEffect(()=>{
    socket.on("Class:Status",roomStatus);

    return ()=>{
      socket.off("Class:Status",roomStatus);
    }
  },[socket,roomStatus]);

  const handleChats = useCallback(()=>{
    setChatDrawer((pre)=> pre.isDrawer === false ? {isDrawer:true,width:400} : {isDrawer:false,width:0});
  },[chatDrawer])
  

  

  return (
    <main className='flex w-full  bg-red-200 h-screen flex-col   relative  overflow-hidden items-center  box-border p-2'>
      <button onClick={()=>{handleChats()}} className='box-border z-50 fixed right-2 top-4  w-fit p-1 bg-black text-white rounded-xl font-bold'>Live</button>
      <div className=' overflow-hidden box-border fixed flex  right-2 top-2 rounded-xl transition-all duration-200 ' style={{width:`${chatDrawer.width}px`}}>
          <Chats/> 
      </div>

      



<div className='h-screen w-full'>
        <h1>This is LIve Loby</h1>


</div>


     


   
    </main>
  )
}

export default page
