'use client'
import Selector from '@/app/Components/common/Selector';
import { AUTH_FACULTY } from '@/graphql/Faculty/Queris';
import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'

const page = () => {

  const [Board,setBoard] = useState<any[]>([]);
  const [State,setState] = useState<any[]>([]);
  const [Class,setClass] = useState<any[]>([]);

  const {data,error,loading} = useQuery(AUTH_FACULTY)

  useEffect(() => {

    const subdata = async()=>{
     if(data){
      try{
        const dd = await data.authFaculty.subjectData

       
       const ss = new Set(dd.flatMap((i:{state:string})=>i.state))
       setState(()=>[...ss])

       const board = new Set(dd.flatMap((i:{boardName:string})=>i.boardName))
       setBoard(()=>[...board])

       const std = new Set(dd.flatMap((i:{standard:string})=>i.standard))
       setClass(()=>[...std])
       console.log(ss)
        
      }catch(err){
        console.log(err)
      }

     }
      
    }

    subdata();

  },[data]);


  return (
    <>

    <Selector
    Item={[

      {label:"State",arrItem:[]},
      {label:"Board",arrItem:[]},
      {label:"Class",arrItem:[]}
    
    ]}
    children={(<>This is Data</>)}
    
    />

   
    </>
  )
}

export default page
