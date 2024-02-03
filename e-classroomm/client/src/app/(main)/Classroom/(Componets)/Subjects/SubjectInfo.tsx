import {useState} from 'react'

const SubjectInfo = (props:any) => {
   

  return (
    <div className={`w-[60%] sm:w-[90%] md:w-[90%]  fixed top-[10%] rounded-3xl box-border p-2 min-h-[400px] max-h-[400px] bg-green-400`}>
    <button onClick={props.onClick}  className='box-border z-50 rounded-xl bg-red-400 text-white font-bold  py-0 px-2 top-0 absolute right-0 '>X</button>

        <div>bookimg</div>
        <div>Syllabus</div>
      
    </div>
  )
}

export default SubjectInfo
