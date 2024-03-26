import React, { useState } from 'react'
import MainCard from '../MainCard'
import SubjectHandler from './SubjectHandler'
import { useSelector } from 'react-redux'
import { RootState } from '@repo/ui/index'
import EnrolledSubject from './SubjectCart'
import EnrollHandler from './EnrollHandler'
import userUtil from '@/app/util/userUtil'



const SubjectEnrollCard = () => {

  const [Comp,setComp] = useState<any | null>(<EnrollHandler/>)
  const cartItem = useSelector((state:RootState)=>state.subslice.Cart)

  const {ToggleCard} = userUtil()

  return (
    <div className=''>
        {ToggleCard && (
          <MainCard
                
          children={Comp}
          Cart={cartItem.length}
          btn={[{name:"Subjects",onclick(){setComp(<EnrollHandler/>)}},{name:"Enrolled",onclick(){setComp(<EnrolledSubject/>)}}]} 
          note={'Enroll Subject to Continue'} 
    />
        )}
      
    </div>
  )
}

export default SubjectEnrollCard
