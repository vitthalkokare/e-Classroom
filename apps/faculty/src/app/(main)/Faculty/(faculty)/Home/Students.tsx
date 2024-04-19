import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@repo/ui/index'

const Students = () => {
    const students = useSelector((state:RootState)=>state.studentslice.student);
    
  return (
    <div>

        {students.length > 0 ? ( 
        <>
         {students.map((val,index)=>(
          <div key={index}>
            <h1>{val.name}</h1>
          </div>
         ))}
        </>
        ):(<>not Found</>)}

      
    </div>
  )
}

export default Students
