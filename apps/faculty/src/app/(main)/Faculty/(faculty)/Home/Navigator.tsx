import React, { useState } from 'react'
import { FaMessage, FaMicrophone, FaMicrophoneSlash, FaUserGear, FaVideo, FaVideoSlash } from 'react-icons/fa6';

const Navigator = () => {
    const [Mic,setMic] = useState(true);
    const [Vdo,setVdo] = useState(true);


    const micHandler =()=>{
        Mic ? setMic(false) : setMic(true);
    }
    const vdoHandler =()=>{
        Vdo ? setVdo(false) : setVdo(true);
    }
  return (
    <section className='absolute flex justify-between bottom-0 p-2 w-[90%] box-border rounded-lg bg-purple-400  '>
           <div className='box-border flex gap-2 text-xl'>
           <span className=''>
           {Mic ? (<button onClick={()=>{micHandler()}}><FaMicrophone /></button>):(<button onClick={micHandler}><FaMicrophoneSlash /></button>)}

           </span>
           <span className=''>
           {Vdo ? (<button onClick={()=>{vdoHandler()}}><FaVideo /></button>):(<button onClick={vdoHandler}><FaVideoSlash /></button>)}

           </span>

           <span className=''>
                <button><FaMessage/></button>
           </span>
           <span className=''>
                <button><FaUserGear /></button>
           </span>
           

           </div>
           

           <div>
            nav items
           </div>
          </section>
  )
}

export default Navigator
