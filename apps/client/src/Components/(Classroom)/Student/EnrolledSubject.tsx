import React from 'react'
import SubjectEnrollCard from '@/Components/(Classroom)/Subjects/SubjectEnrollCard'
import userUtil from '@/app/util/userUtil';
import useAuth from '@/app/util/useAuth';

const EnrolledSubject = () => {
  
    const {SubjectData,loading} = useAuth();
    const {ToggleCard} = userUtil()
    
  return (
    <div>
      
      <h1>Enrolled Subjects</h1>
      {ToggleCard ? (<>{loading ? <>loading...</> : <SubjectEnrollCard />}</>) : <>

            <h1>this is subject data</h1>
      
      
      </>}

      
    </div>
  )
}

export default EnrolledSubject
