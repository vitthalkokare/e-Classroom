import React, { useEffect, useRef, useState } from 'react'
import Countdown from './Countdown'
import useMountedState from '@/Components/custom/UseMounted'


export interface CurrentLectureProps{
    onclick?:() => void
    lebel?:string
}


const CurrentLecture = ({onclick,lebel}:CurrentLectureProps) => {
    const {filteredArray,startIN,Sincurrent,Frem} = Countdown();
      const [slideIndex,setSlideIndex] = useState(0);
      const current = useRef<HTMLDivElement>(null)
      const [mount,setMount] = useState(false);

      const {isMounted} = useMountedState(mount)


      useEffect(()=>{
        setMount(true);
        
      },[isMounted])

      const showSlides = ()=>{
        setSlideIndex((pre)=> (pre + 1) % startIN?.length);
      }
    useEffect(()=>{
      const interval = setInterval(()=>{
        showSlides();
      },4000);

      return ()=> clearInterval(interval);

    },[]);


   
  
  return (
    <>
    <section className='flex w-[40%] overflow-x-scroll items-center scr'>

{filteredArray?.length !== 0 ? (
  <>
  {filteredArray?.map((item,index)=>(
  
  
  <div key={index} className='sm:flex flex w-full shrink-0  font-bold gap-1 '>
    <span className='flex w-fit gap-1 box-border px-1 rounded-xl items-center bg-red-500 shadow-xl'>Live</span>
    <span className='flex w-fit gap-1 box-border p-2 rounded-xl shadow-xl'>{item.title}</span>

    <span className='whitespace-nowrap w-fit flex gap-1 box-border p-2 rounded-xl shadow-xl bg-yellow-200'>
      <span className='box-border px-2 rounded-full bg-blue-200 text-white font-bold'>End In</span>
<span>{Math.floor((Frem[index] as number) / 3600)}:</span>
<span>{Math.floor(((Frem[index] as number) % 3600) / 60)}:</span>

<span>{(Frem[index] as number) % 60}</span>
<button onClick={onclick} className='box-border  rounded-full bg-green-500 text-white font-bold'><span className='box-border p-2'>{lebel}</span></button>

</span>

  </div>
  
  
  
))}
  </>
):(
<div  className='w-full overflow-x-scroll scr flex box-border'>
{startIN?.map((item,index)=>(
  <div  key={index} className={`w-full sm:flex shrink-0 gap-2 flex-col ${slideIndex === index ? 'block' : 'hidden'}`}>
    <span>StrtIn</span>
    <span>{item.title}</span>
    <span className='whitespace-nowrap flex'>

<span>{Math.floor((Sincurrent[index] as number) / 3600)}:</span>
<span>{Math.floor(((Sincurrent[index] as number) % 3600) / 60)}:</span>

<span>{(Sincurrent[index] as number) % 60}</span>
</span>

  </div>
))}
</div>)}
</section>

    </>

  )
}

export default CurrentLecture
