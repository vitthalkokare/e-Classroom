import React from 'react'
import userUtil from '../userUtil'
import SubjectEnrollCard from '@/Components/(Classroom)/Subjects/SubjectEnrollCard'

const EnrolledSubject = () => {
  
    const {SubjectData,userPCard,loading} = userUtil();
  return (
    <div>
      
      <h1>Enrolled Subjects</h1>
      {true ? (<>{loading ? <>loading...</> : <SubjectEnrollCard />}</>) : <>

            <h1>this is subject data</h1>
      
      
      </>}

      
    </div>
  )
}

export default EnrolledSubject
