import React, { useState } from 'react'
import MainCard from '../MainCard'
import { useSelector } from 'react-redux'
import { RootState } from '@repo/ui/index'
import EnrolledSubject from './SubjectCart'
import userUtil from '@/app/util/userUtil'
import EnrollSubjectHandler from './EnrollSubjectHandler'



const SubjectEnrollCard = () => {

  const [Comp,setComp] = useState<any | null>(<EnrollSubjectHandler/>)
  const cartItem = useSelector((state:RootState)=>state.querysubdata.Cart)

  const {ToggleCard} = userUtil()

  return (
    <div className=''>
        {ToggleCard && (
          <MainCard
                
          children={Comp}
          Cart={cartItem.length}
          btn={[{name:"Subjects",onclick(){setComp(<EnrollSubjectHandler/>)}},{name:"Enrolled",onclick(){setComp(<EnrolledSubject/>)}}]} 
          note={'Enroll Subject to Continue'} 
    />
        )}
      
    </div>
  )
}

export default SubjectEnrollCard
