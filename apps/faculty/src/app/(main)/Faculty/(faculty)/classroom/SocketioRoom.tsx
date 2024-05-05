
'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { RoomProps, useSocket } from '../../contexts/socketContext'
import { useFacultyContext } from '../../contexts/useFaculty'
import Countdown from '../Home/Countdown'
import { useRouter } from 'next/navigation'
import {toast} from 'react-hot-toast';


const SocketioRoom = () => {
  const [femail,setfemal] = useState('');
  const [fdata,setfdata] = useState<any[]>([]);
  const [isConnect,setIsConnect] = useState(false);
  const [secretKey,setSecretKey] = useState<string>();

  const {filteredArray,startIN} = Countdown();

  const {facultyData} = useFacultyContext();

  const socket = useSocket();
  const router = useRouter();
  const date = new Date();

 
  const handleConnect = useCallback(()=>{
    const subid = filteredArray[0]?.id
      socket.emit('Join:Room',{subid});

  },[filteredArray]); 


  const getConnectStatus = useCallback((data:RoomProps)=>{
    if(data.status === "success"){
      setIsConnect(true);
      toast.success(data.message)

    }
    if(data.status === 'failed'){
      toast.error(data.message);
    }

  },[])

  useEffect(()=>{
    socket.on("connect:Status",getConnectStatus);

    return ()=>{
      socket.off("connect:Status",getConnectStatus);
    }

  },[getConnectStatus,socket]);
  

  const handleHost = ()=>{
    console.log("hoseted");
    if(facultyData){
    socket.emit("host:Classroom",{secretKey:secretKey,email:facultyData.email})

    }
  }



  useEffect(()=>{
    socket.on("Join:Status",(data:RoomProps)=>{
      console.log("data" + JSON.stringify(data));
      if(data.status === 'fuck'){
        router.push('/Faculty/classroom');
        return;
      }
    if(data.status === 'hosted'){
      toast.success(data.message);
      return;
    }
    if(data.status === 'failed'){
      toast.error(data.message);
      return;
    }

    
    });

    return ()=>{
      socket.off("Join:Status");
    }

  },[socket,handleHost]);


  

 



  

  return (
    <main className='h-full w-full justify-center items-center flex flex-col rounded-xl bg-purple-500  box-border p-4'>
      {filteredArray.length > 0 ? (
      <>
      <div className='box-border bg-white relative shadow-lg p-3 w-[70%] sm:w-[90%] flex flex-col justify-around items-center'>
        <span className='flex justify-evenly w-full '>
          <span>{date.toLocaleDateString()}</span>
          <span>{filteredArray[0]?.lectureTime}</span>
        </span> 
        

          <span className='w-full flex justify-evenly'>
          <span className='flex box-border p-2 flex-col'>
            <span>{filteredArray[0]?.state}</span>
            <span>{filteredArray[0]?.boardName}</span>

          </span>
          <span className='flex box-border flex-col'>
            <span>{filteredArray[0]?.standard}</span>
            <span>{filteredArray[0]?.title}</span>

          </span>
          </span>
          <span className='flex justify-around w-full'>
          <span>{filteredArray[0]?.fname}</span>
            <span>{filteredArray[0]?.facultyEmail}</span>

          </span>
         
          {!isConnect &&  <button onClick={()=>{handleConnect()}} className='box-border p-2 bg-green-300'>Connect</button>}

      
      </div>

       {isConnect &&  <div className='w-[60%] flex flex-col justify-center items-center box-border p-4 h-fit'>
            <input type="text" placeholder='SecretKey...' value={secretKey} onChange={(e)=>{setSecretKey(e.target.value)}} className='w-full text-gray-500 text-xl font-semibold box-border p-2' />
            <button onClick={(()=>{handleHost()})}>Host</button>


          </div>}
      
      </>):(
        <section className='w-[70%] scr flex gap-2 overflow-x-scroll '>
        {startIN.map((item,index)=>(
          <div key={index} className='box-border bg-white relative  shrink-0 shadow-lg p-3 w-full flex justify-around items-center'>
          <span className='flex justify-evenly w-full absolute left-0  top-0'>
            <span>{date.toLocaleDateString()}</span>
            <span>{item.lectureTime}</span>
          </span>
  
            <span className='flex box-border p-2 flex-col'>
              <span>{item.state}</span>
              <span>{item.boardName}</span>
  
            </span>
            <span className='flex box-border flex-col'>
              <span>{item.standard}</span>
              <span>{item.title}</span>
  
            </span>
        
        </div>
        ))}
        
      </section>
      )}



   
    </main>
  )
}

export default SocketioRoom
