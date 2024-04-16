import useAuth from '@/app/util/useAuth'
import { CLASSES_DATA } from '@/graphql/students/queries'
import { useQuery } from '@apollo/client'
import { commonUi } from '@repo/ui/index'
import React, { useEffect, useState } from 'react'

export interface ClassesProps{
  lectureTime:string
  title:string
  classlebel:string
  boardName:string
}

const SubjectData = () => {
  const [classData,setClassData] = useState<ClassesProps[]>()

    const {data,error,loading,refetch} = useQuery(CLASSES_DATA);
    
    useEffect(()=>{
      async function classesData(){
          const classdata = await data?.Classes;


        try{
          if(data && classdata){
            setClassData(classdata);
          }



        }catch(err){
          console.log(err);
        }
      }

      classesData();
      
    },[data])
  return (
    <>
     {
      loading ? (<commonUi.Loading/>):(
        <>

          {classData?.map((item,inx)=>(
            <div key={inx} className='flex sm:flex-col w-full box-border bg-yellow-200 rounded-xl my-2 p-2 justify-around items-center'>
              <span>
                <span>{item.classlebel}</span>
                <span>{item.boardName}</span>
              </span>
              <span className='flex flex-col box-border justify-center items-center gap-2'>
                <span>{item.title}</span>
                <span>{item.lectureTime}</span>
              </span>
              <span>3</span>
            </div>

          ))}

          

        </>
      )
     }
      
    </>
  )
}

export default SubjectData;
