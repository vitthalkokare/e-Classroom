import { commonUi } from '@repo/ui/index'
import React, { useState } from 'react'
import { ClassesProps } from '../../page'



const SubjectData = (props:any) => {
  const [subData,setSubdata] = useState<ClassesProps[]>([])
 





  function classHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    
    

  }

  return (
    <>
     {
      props.ploading ? (<commonUi.Loading/>):(
        <div className='overflow-y-scroll scr h-[500px] box-border p-5'>
          {props.cdata?.map((item:ClassesProps,inx:number)=>(
            <button onClick={classHandler} key={inx} className='flex  sm:w-[90%] mx-auto w-[70%] box-border bg-yellow-200 rounded-xl my-2 p-2 justify-around items-center'>
              <span className='flex flex-col box-border items-center justify-center'>
                <span>{item.standard}</span>
                <span>{item.boardName}</span>
              </span>
              <span className='flex flex-col box-border justify-center items-center gap-2'>
                <span>{item.title}</span>
                <span>{item.lectureTime}</span>
              </span>
              <span>
                {item.fname}
              </span>
            </button>

          ))}
          
          
        
        </div>
      )
     }
      
    </>
  )
}

export default SubjectData;
