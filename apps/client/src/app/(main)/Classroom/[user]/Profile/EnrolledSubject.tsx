import React from 'react'
import userUtil from '../../../../util/userUtil'
import { useDispatch } from 'react-redux';
import { setCard } from '@repo/ui/index';
import useAuth from '@/app/util/useAuth';
import SubjectEnrollCard from '@/Components/(Classroom)/Subjects/SubjectEnrollCard';

const EnrolledSubject = () => {

  const dispatch = useDispatch();
    const {StudentInfo,loading,SubjectData} = useAuth();

  return (
    <div className='relative w-full h-full  flex-col'>
      
      <h1>Enrolled Subjects</h1>


           {SubjectData.length <= 0 ? <SubjectEnrollCard/> : (
            <>
             {SubjectData && (<>
            {SubjectData.map((item:any,index:number)=>(
              <div className='grid grid-cols-3  gap-4 overflow-y-scroll scr w-full border-2  box-border rounded-xl p-4 m-2'  key={index}>
                <span>{item.title}</span>
               {item.isEnroll === "Pending" ? (<>

                <button onClick={()=>{window.location.href = "/api/auth/payment"}}><strong>{item.isEnroll} <span>Enroll</span></strong></button>

               
               </>):(<>
                  <span>{item.isEnroll}</span>
               </>)}



              </div>
            ))}
            
            </>)}

            </>
           )}

           
      
      

             <button onClick={(()=>{dispatch(setCard(true))})}>Enroll</button>
      
    </div>
  )
}

export default EnrolledSubject
