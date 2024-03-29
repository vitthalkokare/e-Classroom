'use client'
import React, { ReactNode, useState } from 'react'
import PageDashboard from '../../(Components)/Dashboard/PageDashboard'
import { FaPlusCircle, FaUser } from 'react-icons/fa'
import Dashboard from '../../(Components)/Dashboard/Dashboard';
import { set } from 'zod';

const page = () => {
  const [state,setState] = useState<ReactNode>(<Dashboard/>);
  return (
    <>
    <PageDashboard

        children={state}
        navItem={[{title:"Add Subject",icon:<FaPlusCircle/>,onclick:()=>{setState(<Dashboard/>)}},{title:"Add Faculty",icon:<FaPlusCircle/>,onclick:()=>{setState(<FaPlusCircle/>)}}]}
    />
      
      
    </>
  )
}

export default page
