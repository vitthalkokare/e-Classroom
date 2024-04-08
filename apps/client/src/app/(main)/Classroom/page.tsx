'use client'
import {useState} from 'react'
import { FaArrowsAltV } from 'react-icons/fa'
import StudentinfoCard from '@/Components/(Classroom)/Student/StudentinfoCard'
import useAuth from '@/app/util/useAuth'
import userUtil from '@/app/util/userUtil'

const page = () => {
  const [openSubjectCard, closeSubjectCard] = useState(false)
  const [LiveDriver,setLiveDriver] = useState(300)
  const [User,setUser] = useState<Boolean>()

  const {StudentInfo,loading} = useAuth();

  return (
    <div className='flex flex-col w-full relative h-full '>

      <section className='w-full bg-red-400 h-full p-2 flex-col flex box-border  rounded-3xl'>
          <div className='w-full rounded-xl bg-white relative transition-all duration-300' style={{height:`${LiveDriver}px`}}>
              <span className='absolute left-0 top-0 bg-yellow-400 box-border p-2'>{'DAte'}</span>
              <button className='absolute right-0 top-0 box-border p-2 bg-blue-400 '>LIveChat</button>
              <button onClick={()=>LiveDriver === 300 ? setLiveDriver(100) : setLiveDriver(300)} className='absolute right-0 bottom-0 box-border p-2 bg-blue-400 '><FaArrowsAltV />
      </button>

          </div>
          <div>


          </div>
          <div>right</div>
      </section>
      {StudentInfo === null  ? (<StudentinfoCard/>) : (<>Hello world</>)}

    </div> 
  )
}

export default page;