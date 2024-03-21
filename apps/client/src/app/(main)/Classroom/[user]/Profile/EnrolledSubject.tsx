import React, { useState } from 'react'
import userUtil from '../../../../util/userUtil'
import SubjectEnrollCard from '@/Components/(Classroom)/Subjects/SubjectEnrollCard'
import { useMutation } from '@apollo/client';
import { ENROLL_SUBJECT } from '@/graphql/students/mutation';
import { useDispatch } from 'react-redux';
import { setCard } from '@repo/ui/index';

const EnrolledSubject = () => {

  const dispatch = useDispatch();
    const {SubjectData,userPCard,loading} = userUtil();
  return (
    <div className='relative w-full h-full  flex-col'>
      
      <h1>Enrolled Subjects</h1>
      {userPCard && (<>{loading ? <>loading...</> : <SubjectEnrollCard />}</>)}

      <div className='sm:w-full w-[60%] relative'>

            {SubjectData && (<>
            {SubjectData.map((item:any,index:number)=>(
              <div className='flex gap-4 overflow-y-scroll scr w-full shadow-xl items-center  justify-between box-border rounded-xl p-4 m-2'  key={index}>
                <span>{item.title}</span>
               <span>{item.price}</span>
               {item.isEnroll === "Pending" ? (<>

                <button><h1>Status</h1><strong>{item.isEnroll} <span>Enroll</span></strong></button>

               
               </>):(<>
                  <span>{item.isEnroll}</span>
               </>)}



              </div>
            ))}
            
            </>)}


           
      
      
      </div>

      <div className='  flex justify-center items-center bg-blue-500 rounded-xl  box-border p-4  '>
             <button onClick={(()=>{dispatch(setCard(true))})}>EnrollSubject</button>
             {userPCard && <SubjectEnrollCard/>}
            </div>
      
    </div>
  )
}

export default EnrolledSubject
