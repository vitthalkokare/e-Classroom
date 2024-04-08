'use client'
import { ENROLLED_SUBJECT } from '@/graphql/students/queries';
import { useQuery } from '@apollo/client';
import { RootState } from '@repo/ui/index';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const page = () => {
  const [subdata,setsubdata] = useState<any[]>([])

  const router = useRouter();
  const {data,loading,error} = useQuery(ENROLLED_SUBJECT)
  const Total = useSelector((state:RootState)=>state.querysubdata.Total)
  const CartItem = useSelector((state:RootState)=> state.querysubdata.Cart)
useEffect(()=>{

   const sub = async()=>{
    try {
      const d = await data?.EnrolledSubject
      
      if(data && d.length > 0){

      }
      
    } catch (error) {
      console.error('Error checking data:', error);
    }
   }

   sub();

},[data])



  return (
    <div>
      {loading ? (<>loadinngn...</>):(<>
            <div>{Total}</div>
            {data?.EnrolledSubject.map((item:any,index:number)=>(
              <div key={index}>
                <span>{item?.title}</span>
                <span>{item?.price}</span>
              </div>
            ))}
          </>)}
    </div>
  )
}

export default page
