import React from 'react'
import CurrentLecture from './CurrentLecture'

const SocketioHome = () => {
  
  return (
    <div className='min-h-[500px] h-full w-full justify-center items-center rounded-xl bg-purple-500 sticky top-0 box-border p-4'>
      <h1>socket io home</h1>

       <section className='w-full items-center justify-center flex'>
       <CurrentLecture/>
       </section>

      <section id='video-chat-room' className='flex w-full justify-around items-center flex-col  h-full'>
        <video id='student-video' src=""></video>
        <video id='faculty-video' src=""></video>
        <button>JoinRoom</button>
        <span></span>


      </section>
    </div>
  )
}

export default SocketioHome
