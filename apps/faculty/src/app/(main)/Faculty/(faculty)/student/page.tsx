'use client'
import { GET_STUDETNS_BY_CLASS } from '@/graphql/Faculty/Mutation'
import { AUTH_FACULTY } from '@/graphql/Faculty/Queris'
import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'


interface getDataPros{
  state:string
  boardName:string
  standard:string
}


const page = () => {
  const [Board,setBoard] = useState<any[]>([]);
  const [State,setState] = useState<any[]>([]);
  const [Class,setClass] = useState<any[]>([]);

  const [getStudents,setStudents] = useState<getDataPros>({
    standard:"",
    state:"",
    boardName:""

  })

  const {data,error,loading} = useQuery(AUTH_FACULTY)
  const [getStudentByInfo,{data:studentData,error:studentError,loading:studentLoading}] = useMutation(GET_STUDETNS_BY_CLASS)

  useEffect(() => {

    const subdata = async()=>{
      const dd = await data.authFaculty.subjectData
     if(data && dd){
      try{
       
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

  },[data])

  const getStudentsHandler = async()=>{
    

      console.log(data)
      try{
        await getStudentByInfo({variables:{standard:getStudents.standard,boardName:getStudents.boardName,state:getStudents.state}})

      }catch(err){

        console.log(err);
      }
  }


  function changeQuery(event: any) {
   
    const {name,value} = event.target 
    setStudents((pre)=>({
      ...pre,[name]:value
    }))
  }

  return (
    <main className='w-full box-border h-full bg-purple-500 p-2 flex flex-col'>
      <section className='sticky flex justify-evenly items-center top-0 min-h-[100px] w-full bg-white'>

       <form action="" onChange={changeQuery}>

       <span  className='box-border border-2 border-green-500'>
          <select name='state' value={getStudents.state} className='w-full box-border p-4 h-full'>
            <option  className='read-only:true'>State</option>
            {State.map((val:any)=>(
              <option >{val}</option>
            ))}
          </select>
        </span>

        <span className='box-border border-2 border-green-500'>
          <select name='boardName' value={getStudents.boardName} className='w-full box-border p-4 h-full'>
            <option  className='read-only:true'>Board</option>
            {Board.map((val:any)=>(
              <option >{val}</option>
            ))}
          </select>
        </span>

        <span className='box-border border-2 border-green-500'>
          <select name='standard' value={getStudents.standard}  className='w-full box-border p-4 h-full'>
            <option  className='read-only:true'>Class</option>
            {Class.map((val:any)=>(
              <option value={val} >{val}</option>
            ))}
          </select>
        </span>
        
       </form>
        
       <span>
          <button onClick={()=>{getStudentsHandler()}}>Get Data</button>
        </span>
        
      </section>
    </main>
  )
}

export default page
