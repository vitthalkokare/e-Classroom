'use client'
import { RoomProps, useSocket } from '@/app/contexts/socketContext'
import React, { useCallback, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'


interface joinStudentProps {
    semail?: string
    connId?: string
  }
const JoinedStudent = () => {
    const [Student,setStudents] = useState();

    const {JoinStudent} = useSocket()


      return (
    <main className='w-full flex flex-col box-border p-1 relative h-full min-h-fit'>
        {JoinStudent && JoinStudent?.length > 0 ? (
        <section className='w-full min-h-fit overscroll-y-scroll scr flex flex-col box-border p-2'>
            {JoinStudent?.map((item,index)=>(
            <div key={index} className='relative  flex flex-col min-h-fit  w-full box-border p-2'>
                {/* <ReactPlayer  width={100} height={100} muted playing url={"/"} /> */}
                  <video className='w-[100px] h[100px]' id={`${item.connid}`} src=""></video>
                <h1>{item.semail}email</h1>
            </div>
        ))}
        </section>) : (
        <>
            <h1>No Student Joined Class yet..</h1>
        </>)}

        
      
    </main>
  )
}

export default JoinedStudent
