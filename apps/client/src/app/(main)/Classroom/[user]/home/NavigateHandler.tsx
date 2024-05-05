import React, { useEffect, useState } from 'react'
import { FaMessage, FaMicrophone, FaMicrophoneSlash, FaUserGear, FaVideo, FaVideoSlash } from 'react-icons/fa6';
import Countdown from './Countdown';
import CurrentLecture from './CurrentLecture';
import { useRouter } from 'next/navigation';

const NavigateHandler = (props:any) => {
    const [Mic,setMic] = useState(true);
    const [Vdo,setVdo] = useState(true);
    const [Room,closeRoom] = useState<boolean>();

    const router = useRouter();

    useEffect(()=>{
      window.location.pathname === '/Faculty/live' ? closeRoom(false) : closeRoom(true);
    },[])

    const {filteredArray,startIN,Fcurrent,Frem} = Countdown()
    const micHandler =()=>{
        Mic ? setMic(false) : setMic(true);
    }
    const vdoHandler =()=>{
        Vdo ? setVdo(false) : setVdo(true);
    }


    const roomHandler =()=>{
      props.livedrawer(); 
      
    }
  return (
    <section className='absolute flex z-20 justify-between items-center bottom-5 p-1 w-[90%] box-border rounded-lg bg-purple-300 shadow-xl  '>
           <div className='box-border flex gap-2 text-xl'>
           <span className=''>
           {Mic ? (<button className='hover:scale-125 transition-all duration-200' onClick={()=>{micHandler()}}><FaMicrophone /></button>):(<button onClick={micHandler}><FaMicrophoneSlash /></button>)}

           </span>
           <span className='hover:scale-125 transition-all duration-200'>
           {Vdo ? (<button onClick={()=>{vdoHandler()}}><FaVideo /></button>):(<button onClick={vdoHandler}><FaVideoSlash /></button>)}

           </span>

           <span className='hover:scale-125 transition-all duration-200'>
                <button><FaMessage/></button>
           </span>
           <span className='hover:scale-125 transition-all duration-200'>
                <button><FaUserGear /></button>
           </span>
           

           </div>

          
              
          {Room && <CurrentLecture/>}
           

           <div>
            {Room && <button onClick={()=>{roomHandler()}} className='bg-green-500 box-border p-2 text-black'>Room</button>}
           </div>
          </section>
  )
}

export default NavigateHandler;
