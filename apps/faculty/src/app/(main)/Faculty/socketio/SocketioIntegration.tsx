import React, { useMemo, useState } from 'react'
import createSocket from '@/app/services/createSocket'
import io from 'socket.io-client'
import useFaculty from '../util/useFaculty';




const SocketioIntegration = () => {
  const [facultymsg,setFacultymsg] = useState<string>('')
  const socket = useMemo(()=>io('http://localhost:8000',{withCredentials:true}),[]);
  const {Faculty,data} = useFaculty();

   function JoinRoom(){

    socket.emit('join', 'room-1');

    socket.on('message', (message) => {
      console.log(message);
    });

  
   }

   const sendMsg = ()=>{
    socket.emit('message', { room: 'he', message: facultymsg});
    setFacultymsg('');
    console.log(facultymsg);


   }
      
  
      

    const SocketIoHandler = ()=>{
        
      try{
        socket.on("Create", function(){
  
          socket.emit('JoinRoom','JoinRoom');
          console.log('emit start');
  
        })
       }catch(err){
  
        console.log(err)
       }
       
       
        
    }

    const handleLeaveRoom = () => {
      // Emit a custom event to the server
      socket.emit('leaveRoom');
    };

    function msgOnchange(e:React.ChangeEvent<HTMLInputElement>){
      setFacultymsg(e.target.value);

    }

  return (
    <div className='flex flex-col'>
        <button className='box-border p-4 bg-green-400' onClick={()=>{JoinRoom()}}>Join</button>
        <button className='box-border p-4 bg-red-400' onClick={handleLeaveRoom}>Leave Room</button>

        <div>
          <input type="text" onChange={msgOnchange} value={facultymsg} />
          <button onClick={()=>{sendMsg()}}>Send</button>
        </div>

    </div>
  )
}

export default SocketioIntegration
