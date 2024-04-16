
'use client'

import { GET_STUDETNS_BY_INFO } from '@/graphql/Faculty/Queris'
import { useQuery } from '@apollo/client'
import { canUseLayoutEffect } from '@apollo/client/utilities'
import { RootState, commonUi, studentSlice } from '@repo/ui/index'
import React, { useState , useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'

export interface clasesProps{

  width: number
  display: string
  c:boolean
}



export interface QueryProps{
  state:string
  boardlebel:string
  standard:string
  title:string
  lectureTime?:string

}
const Classes = (props:any) => {
const [getData,setData] = useState(false)
const [Query,setQuery] = useState<QueryProps>()
const [ClassesCard,setClassesCard] = useState<clasesProps>({width:0, display:'hidden',c:true})
  const facultyData = useSelector((state:RootState)=>state.facultydata.item)
  const [getStudent,setStudent] = useState<any[]>();
  const dispatch = useDispatch();

  const date = new Date();

  

  const {data:ddd,refetch,loading} = useQuery(GET_STUDETNS_BY_INFO,{
    variables:{standard:Query?.standard,boardName:Query?.boardlebel,state:Query?.state,title:Query?.title},
    skip:!getData
 
})

  async function queryHandler(index:number,val:any){

    const  {state,standard,boardName,title,lectureTime} = await val
    setQuery({state:state,standard:standard,boardlebel:boardName,title:title});
    props.setSelected({state:state,standard:standard,boardlebel:boardName,title,lectureTime:lectureTime})
    
    
    setData(true);
    
      const d = await ddd
      if (d && d.getStudentByInfo) {
        try{
          
          setStudent(d.getStudentByInfo);
          dispatch(studentSlice.allStudent(d.getStudentByInfo));

        }catch(err){
          return err;
        }
      }

      return;



   
    
  }

  useEffect(()=>{
    props.setSelected({state:Query?.state,standard:Query?.standard,boardlebel:Query?.boardlebel,title:Query?.title})
  },[setQuery]);


  let ctime = 7
  

  return (
    <div className='w-full min-h-[400px] relative overflow-hidden h-[400px] justify-evenly bg-white shadow-2xl rounded-2xl  flex  z-40  left-0 top-0 box-border '>

      {facultyData.length >=0 ? (
        <button className={`w-full transition-all p-2 overflow-y-scroll h-full min-h-fit flex flex-col  ease-in duration-400 scr  overflow-hidden `} >
            
        {facultyData.map((val,inx)=>(
          <button onClick={()=>{queryHandler(inx,val)}} key={inx} className='box-border p-2 border-[2px] bottom-1 bg-white my-1 rounded-xl '>
            <span className='w-full bg-blue-300 box-border p-3 flex justify-around' >
              <span>Started In</span>
              <span>{date.toLocaleDateString()}</span>
              <span>{val.lectureTime}</span>
            

              </span>
            <form className='   w-full'>

            <input readOnly name='state' value={val.state} />
            <input readOnly name='boardleble' value={val.boardName}/>
            <input readOnly name='standard' value={val.standard}/>
            <input readOnly name='title' value={val.title}/>

            </form>
          </button>
        ))}

    </button>
        ):(<>not found</>)}


        <section className=' w-full  box-border p-4 right-0 top-0'>
          {
            loading ? (<commonUi.Loading/>):( ddd?.getStudentByInfo?.length > 0 ? 
              ( ddd?.getStudentByInfo?.map((val:any,index:number)=>(
               <div key={index} className='box-border border-[2px] p-1 my-1 bg-white rounded-2xl'>
                <span><img src={val.imageUrl} /></span>
                 <h1>{val.name}  {val.sirname}</h1>
                 <span>{val.standard}</span>

               </div>
             ))):(<>No Student Enrolled Subject..</>))
           
          }

        </section>
      
    </div>
  )
}




export default Classes
