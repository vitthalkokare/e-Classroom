import React from 'react'
import QuerySubSelector from './Subd'
import SubjectData from './SubjectData'

const EnrollSubjectHandler = () => {
  return (
    <div className='w-full  min-h-[400px] overflow-y-scroll scr gap-2  sm:flex-col box-border p-2 flex justify-around'>
            <div className='w-[40%] sticky top-0 left-0 sm:w-full'>
            <QuerySubSelector/>

            </div>
        
            <div className='flex flex-col w-[60%] box-border p-2 sm:w-full'>
            <SubjectData/>
            </div>

      
    </div>
  )
}

export default EnrollSubjectHandler
