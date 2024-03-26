'use client'
import { ENROLLED_SUBJECT } from '@/graphql/students/queries';
import { useQuery } from '@apollo/client';
import { RootState } from '@repo/ui/index';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const page = () => {
  const [subdata,setsubdata] = useState<[]>([])

  const router = useRouter();
  const {data,loading,error} = useQuery(ENROLLED_SUBJECT)
  const Total = useSelector((state:RootState)=>state.subslice.Total)
  const CartItem = useSelector((state:RootState)=> state.subslice.Cart)
useEffect(()=>{

   const sub = async()=>{
    try {
      const d = await data.EnrolledSubject
      
     
      
    } catch (error) {
      console.error('Error checking data:', error);
    }
   }

   console.log(CartItem)


},[data])



  return (
    <div>
      {loading ? (<>loadinngn...</>):(<>
            <div>{Total}</div>
            {CartItem.map((item,index)=>(
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
