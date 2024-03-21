import React, { useState } from 'react'
import MainCard from '../MainCard'
import SubjectHandler from './SubjectHandler'
import { useSelector } from 'react-redux'
import { RootState } from '@repo/ui/index'
import EnrolledSubject from './SubjectCart'



const SubjectEnrollCard = () => {
  const [Comp,setComp] = useState<any | null>(<SubjectHandler/>)
  const cartItem = useSelector((state:RootState)=>state.subslice.Cart)
  return (
    <div>
        <MainCard
                
              children={Comp}
              Cart={cartItem.length}
              btn={[{name:"Subjects",onclick(){setComp(<SubjectHandler/>)}},{name:"Enrolled",onclick(){setComp(<EnrolledSubject/>)}}]} 
              note={'Enroll Subject to Continue'} 
        />
      
    </div>
  )
}

export default SubjectEnrollCard
