import React from 'react'
import SubjectEnrollCard from '@/Components/(Classroom)/Subjects/SubjectEnrollCard'
import userUtil from '@/app/util/userUtil';

const EnrolledSubject = () => {
  
    const {SubjectData,userPCard,loading} = userUtil();
  return (
    <div>
      
      <h1>Enrolled Subjects</h1>
      {userPCard ? (<>{loading ? <>loading...</> : <SubjectEnrollCard />}</>) : <>

            <h1>this is subject data</h1>
      
      
      </>}

      
    </div>
  )
}

export default EnrolledSubject
