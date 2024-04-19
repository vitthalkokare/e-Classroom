'use client'
import {useEffect, useState} from 'react'
import { FaArrowsAltV } from 'react-icons/fa'
import StudentinfoCard from '@/Components/(Classroom)/Student/StudentinfoCard'
import useAuth from '@/app/util/useAuth'
import io from 'socket.io-client'
import Navigator from './[user]/home/Navigator'
import { useQuery } from '@apollo/client'
import { CLASSES_DATA } from '@/graphql/students/queries'
import SubjectData from './[user]/home/SubjectData'
import Countdown from './[user]/home/Countdown'


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
  const [classData,setClassData] = useState<ClassesProps[]>([]);
  const [propData,setpropData] = useState<number[]>([]);

  const [Class,setClass] = useState<ClassesProps[]>([])
  const [openSubjectCard, closeSubjectCard] = useState(false)
  const [Classbtn,setClassbtn] = useState({width:0});

  const [LiveDriver,setLiveDriver] = useState(300);
  const [User,setUser] = useState<Boolean>();
  const [lecTime,setLecTime] = useState<CountdownState | null>(null);

  const {StudentInfo} = useAuth();
  
  const {data,loading} = useQuery(CLASSES_DATA);


  useEffect(()=>{
    async function classesData(){
        const classdata = await data?.Classes;
      try{
        if(data && classdata){
          setClassData(classdata);
          const start:number[] = classdata.map((et:ClassesProps)=> Number(et.lectureTime.substring(0,2).replace(/:/g, '')));

          setpropData(start);
          
        }
        
      }catch(err){
        console.log(err);
      }
    }

    classesData();
    
  },[data])


    


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

          <section className='w-full box-border z-20 sticky top-0 left-0'>
          <div className='w-full z-20 flex  justify-center  sticky top-0 rounded-xl bg-white  transition-all duration-300' style={{height:`${LiveDriver}px`}}>
          <span className='box-border absolute left-0 top-0 p-2'>
          <button onClick={()=>{setClassbtn((pre)=> pre.width === 0 ? {width:70} : {width:0})}}>Classes</button>
        </span>             
         <button className='absolute right-0 top-0 box-border p-2 bg-blue-400 '>LIveChat</button>
              
              
      <button onClick={()=>LiveDriver === 300 ? setLiveDriver(150) : setLiveDriver(300)} className='absolute right-0 bottom-0 box-border p-2 bg-blue-400 '><FaArrowsAltV />
      </button>


          <div className='box-border p-4 w-[40%] sm:w-[60%] h-fit bg-blue-500 flex overflow-x-scroll  scr'>
          
            <Countdown ccdata={classData} cdata={propData}/>

          </div>

          <Navigator/>

          </div>


          </section>
      <div className='fixed top-[2%] overflow-hidden z-50 h-fit   box-border  rounded-xl bg-purple-400 shadow-3xl  transition-all duration-300 ease-in' style={{width:`${Classbtn.width}%`}}>
    <button onClick={()=>{setClassbtn((pre)=> pre.width === 0 ? {width:70} : {width:0})}} className='absolute right-0 z-50 top-0 box-border px-1 bg-black text-white'>X</button>
    <SubjectData ploading={loading} cdata={classData} />
    </div>


         
          <div className='w-full relative  my-2 rounded-xl bg-white min-h-[400px] overflow-y-scroll box-border p-4 scr'>


          </div>

          <div><button onClick={()=>{socketIo()}}>Join</button></div>
          

      {StudentInfo === null  ? (<StudentinfoCard/>) : (<>Hello world</>)}

    </div> 
  )
}

export default page;