'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import PageDashboard from '../../(Components)/Dashboard/PageDashboard'
import { FaPlusCircle, FaUser } from 'react-icons/fa'
import AllFaculty from '../faculty/page';
import Dashboard from '../../(Components)/Dashboard/AddSubject';
import { SUBJECT_DATA } from '@/graphql/Admin/Queries/input';
import { useQuery } from '@apollo/client';



const page = () => {
  const [Fdata,setFdata] = useState(false)
  const [state,setState] = useState<ReactNode>(<Dashboard/>);

  const { data } = useQuery(SUBJECT_DATA,{
    skip:Fdata
  });

  useEffect(()=>{
    const fetchData = async()=>{
      setFdata(true);
      const f = await data;
    }
    fetchData();

    return ()=> setFdata(false);

  },[data])
  return (
    <main className='flex w-[90%] flex-col relative'>
    <PageDashboard

        children={state}
        navItem={[{title:"Add Subject",icon:<FaPlusCircle/>,onclick:()=>{setState(<Dashboard/>)}},{title:"Verify Faculty",icon:<FaPlusCircle/>,onclick:()=>{setState(<AllFaculty/>)}}]}
    />
      
      
    </main>
  )
}

export default page
