"use client";
import React, { useCallback, useEffect, useState } from "react";
import { RoomProps, useSocket } from "../../contexts/socketContext";
import { useFacultyContext } from "../../contexts/useFaculty";
import ReactPlayer from "react-player";
import Chats from "./Chats";
const page = () => {
  const [FacultyStream,setFacultyStream] = useState<any>(undefined);
  const [IsLive, setIsLIve] = useState(false);
  const [chatDrawer,setChatDrawer] = useState({isDrawer:false,width:0});

  const { facultyData } = useFacultyContext();

  const socket = useSocket();

  const getRoomStatus = useCallback((data: RoomProps) => {
    if (data && data.roomName !== null) {
      console.log(data);
    }
  }, []);

  useEffect(() => {
    socket.on("Class:Status", getRoomStatus);

    return () => {
      socket.off("Class:Status", getRoomStatus);
    };
  }, [socket, getRoomStatus]);

  const handleJoinRoom = useCallback(async() => {

    setIsLIve(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio:true,
        video:true
      })

      setFacultyStream(stream);
    
  }, []);

  const handleChats = useCallback(()=>{
    setChatDrawer((pre)=> pre.isDrawer === false ? {isDrawer:true,width:400} : {isDrawer:false,width:0});
  },[chatDrawer])



  return (
    <main className="flex w-full flex-col bg-red-200 h-screen  relative overflow-hidden items-center  box-border p-2">
      
      <button onClick={()=>{handleChats()}} className='box-border z-50 fixed right-2 top-4  w-fit p-1 bg-black text-white rounded-xl font-bold'>Live</button>
      <div className=' overflow-hidden box-border fixed flex  right-2 top-2 rounded-xl transition-all duration-200 ' style={{width:`${chatDrawer.width}px`}}>
          <Chats/> 
      </div>



      {IsLive ? (
        <section className="min-w-[60%] sticky top-0 w-full items-center justify-center  box-border flex flex-col h-fit p-4">

            {FacultyStream && <ReactPlayer width="200px" height="200px" muted playing url={FacultyStream}/>}

        </section>
      ) : (
        <button onClick={()=>{handleJoinRoom()}}>Go live</button>
      )}
    </main>
  );
};

export default page;
