'use client'
import Selector from '@/app/Components/common/Selector'
import { GET_STUDETNS_BY_INFO } from '@/graphql/Faculty/Queris'
import { AUTH_FACULTY } from '@/graphql/Faculty/Queris'
import { useMutation, useQuery } from '@apollo/client'
import { RootState ,fcaultySlice, studentSlice} from '@repo/ui/index'
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'


interface getDataPros{
  title:string
  state:string
  boardName:string
  standard:string
}


const page = () => {
  const [Board,setBoard] = useState<string>('');
  const [State,setState] = useState<string>('');
  const [Class,setClass] = useState<string>('');
  const [Sub,setSub] = useState<string>('');
  const [getData,setData] = useState(false)
  const [getStudents,setStudents] = useState<any[]>([])

  const {data,error,loading} = useQuery(AUTH_FACULTY)

 
  const facultydatastate = useSelector((state:RootState)=>state.facultydata.state);

  const facultyboardlebel = useSelector((state:RootState)=>state.facultydata.boardLebel);

  const facultydsubject = useSelector((state:RootState)=>state.facultydata.subjects);

  const facultyclasslebel = useSelector((state:RootState)=>state.facultydata.classlebel);

  const dispatch = useDispatch()

  const {data:ddd,refetch} = useQuery(GET_STUDETNS_BY_INFO,{
       variables:{standard:Class,boardName:Board,state:State,title:Sub},
       skip:!getData
    
  })


  const getStudentsHandler = async()=>{
   
    setData(true);
    
      
      try{
        const d = await ddd
        if (d && d.getStudentByInfo) {
          dispatch(studentSlice.allStudent(d.getStudentByInfo))
        }

        return refetch();



      }catch(err){
        console.log(err);
      }
  }


  function fStatehandler(event: any) {
    let val = event.target.value
    setState(val)
    dispatch(fcaultySlice.statedHandler(val))
    

  }
  function fBoardhandler(event: any) {
    let val = event.target.value
    setBoard(val);
    dispatch(fcaultySlice.boardHandler([State,val]));
    


  }
  function fClasshandler(event: any) {
    let val = event.target.value
    setClass(val);
    console.log(val)
    dispatch(fcaultySlice.classHandler([State,Board,val]))
    

  }
  function fsubhandler(event: any) {
    let val = event.target.value
    setSub(val);
   
    

  }

  return (
    <main className='w-full box-border h-full bg-purple-500 p-2 flex flex-col'>
      <section className='sticky flex justify-evenly items-center top-0 min-h-[100px] w-full bg-white'>
        <Selector Item={[
          {arrItem:facultydatastate,label:"State",onchange:(fStatehandler),name:State},
          {arrItem:facultyboardlebel,label:"Board",onchange:(fBoardhandler),name:Board},
          {arrItem:facultyclasslebel,label:"Class",onchange:(fClasshandler),name:Class},
          {arrItem:facultydsubject,label:"Subject",onchange:(fsubhandler),name:Sub}



        ]}          
        
        />

      
        
       <span>
          <button onClick={()=>{getStudentsHandler()}}>Get Data</button>
        </span>
        
      </section>


      <section>
        {getStudents.map((item,index)=>(
          <section key={index}>
          <h1>{item.name}</h1>
          </section>
        ))}

        <h1>studnet info</h1>
       <></>
      </section>
    </main>
  )
}


export default page
