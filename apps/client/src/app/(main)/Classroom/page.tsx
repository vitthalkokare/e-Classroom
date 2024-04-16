'use client'
import {useEffect, useState} from 'react'
import { FaArrowsAltV } from 'react-icons/fa'
import StudentinfoCard from '@/Components/(Classroom)/Student/StudentinfoCard'
import useAuth from '@/app/util/useAuth'
import userUtil from '@/app/util/userUtil'
import io from 'socket.io-client'
import SubjectData from './[user]/home/SubjectData'

const page = () => {
  const [openSubjectCard, closeSubjectCard] = useState(false)
  const [Classbtn,setClassbtn] = useState({width:0});

  const [LiveDriver,setLiveDriver] = useState(300)
  const [User,setUser] = useState<Boolean>()

  const {StudentInfo,loading} = useAuth();

   
    

  useEffect(()=>{




  },[])

  const socketIo = ()=>{
    const socketURL = 'http://localhost:8000';
    const socket = io(socketURL, {
      withCredentials: true,
      extraHeaders: {
        
      }
    });
   
      socket.emit('joinRoom', 'JoinRoom');

    console.log("good")
    
   
  }

  return (
    <div className='flex flex-col box-border overflow-y-scroll overflow-x-hidden p-2 items-center scr  w-full relative h-full '>

          <section className='w-full box-border z-30 sticky top-0 left-0'>
          <div className='w-full z-50 flex items-center justify-center  sticky top-0 rounded-xl bg-white overflow-hidden  transition-all duration-300' style={{height:`${LiveDriver}px`}}>
          <span className='box-border absolute left-0 top-0 p-2'>
          <button onClick={()=>{setClassbtn((pre)=> pre.width === 0 ? {width:70} : {width:0})}}>Classes</button>
        </span>             
         <button className='absolute right-0 top-0 box-border p-2 bg-blue-400 '>LIveChat</button>
              
              
      <button onClick={()=>LiveDriver === 300 ? setLiveDriver(100) : setLiveDriver(300)} className='absolute right-0 bottom-0 box-border p-2 bg-blue-400 '><FaArrowsAltV />
      </button>


          <div>
            items
          </div>

          </div>


          </section>
      <div className='fixed overflow-hidden z-50   box-border  rounded-xl bg-white shadow-3xl  transition-all duration-300 ease-in' style={{width:`${Classbtn.width}%`}}>
    <button onClick={()=>{setClassbtn((pre)=> pre.width === 0 ? {width:70} : {width:0})}} className='absolute right-0 z-50 top-0 box-border p-2 bg-black text-white'>X</button>
    <SubjectData/>
    </div>


         
          <div className='w-full relative  my-2 rounded-xl bg-white min-h-[400px] overflow-y-scroll box-border p-4 scr'>


          </div>

          <div><button onClick={()=>{socketIo()}}>Join</button></div>
          

      {StudentInfo === null  ? (<StudentinfoCard/>) : (<>Hello world</>)}

    </div> 
  )
}

export default page;