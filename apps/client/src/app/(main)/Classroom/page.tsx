'use client'
import MainCard from '@/Components/(Classroom)/MainCard'
import {useEffect, useState} from 'react'
import { FaArrowsAltV } from 'react-icons/fa'
import Header from './[user]/Profile/Header'
import { useQuery } from '@apollo/client'
import { AUTH_USER } from '@/graphql/user/queries'
import StudentinfoCard from '@/Components/(Classroom)/Student/StudentinfoCard'

const page = () => {
  const [openSubjectCard, closeSubjectCard] = useState(false)
  const [LiveDriver,setLiveDriver] = useState(300)
  const [User,setUser] = useState<Boolean>()

  const {data,loading,error} = useQuery(AUTH_USER)

  useEffect(()=>{
    
    if(data && data.authUser.authToken === null){
      setUser(true)
    }setUser(false);

    

  },[data,loading,error])


  return (
    <div className='flex flex-col w-full  items-center'>
      {openSubjectCard && <MainCard onClick={(e:any) => closeSubjectCard(false)}/>}

      <section className='w-full bg-red-400 h-full p-2 flex-col flex box-border  rounded-3xl'>
          <div className='w-full rounded-xl bg-white relative transition-all duration-300' style={{height:`${LiveDriver}px`}}>
              <span className='absolute left-0 top-0 bg-yellow-400 box-border p-2'>{'DAte'}</span>
              <button className='absolute right-0 top-0 box-border p-2 bg-blue-400 '>LIveChat</button>
              <button onClick={()=>LiveDriver === 300 ? setLiveDriver(100) : setLiveDriver(300)} className='absolute right-0 bottom-0 box-border p-2 bg-blue-400 '><FaArrowsAltV />
      </button>

          </div>
          <div>
            <button onClick={()=>{
            }}>check</button>
            {error && ("sometingwent")}
            {loading && <>loading....</>}
            { data ? (<>{data.authUser.email}</>):(<h1>user not found</h1>)}
            {User && (<StudentinfoCard/>)}

            <Header/>
          </div>
          <div>right</div>
      </section>


        
    </div>
  )
}

export default page;