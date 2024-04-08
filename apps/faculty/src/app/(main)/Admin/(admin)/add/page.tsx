'use client'
import React, { ReactNode, useState } from 'react'
import PageDashboard from '../../(Components)/Dashboard/PageDashboard'
import { FaPlusCircle, FaUser } from 'react-icons/fa'
import AllFaculty from '../faculty/page';
import Dashboard from '../../(Components)/Dashboard/Dashboard';



const page = () => {
  const [state,setState] = useState<ReactNode>(<Dashboard/>);
  return (
    <main className='flex w-[90%] flex-col relative'>
    <PageDashboard

        children={state}
        navItem={[{title:"Add Subject",icon:<FaPlusCircle/>,onclick:()=>{setState(<Dashboard/>)}},{title:"Add Faculty",icon:<FaPlusCircle/>,onclick:()=>{setState(<AllFaculty/>)}}]}
    />
      
      
    </main>
  )
}

export default page
