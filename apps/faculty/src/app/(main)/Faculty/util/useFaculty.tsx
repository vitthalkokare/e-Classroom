'use client'
import {useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AUTH_FACULTY } from '@/graphql/Faculty/Queris'

const useFaculty = () => {
    const [Faculty,setFaculty] = useState<boolean | null>(null);
    const [facultyInfo,setFacultyInfo] = useState({email:''});
    const {data,loading,error,refetch} = useQuery(AUTH_FACULTY);

        const router = useRouter()

    useEffect(()=>{

       async function fetchFaculty(){
        if(data && data.authFaculty !== null){
            
          setFaculty(true)
          setFacultyInfo({email:data.authFaculty.email});
          router.push('/Faculty');        
      }else{
          setFaculty(false)
          router.push('/login')
      }

        }

        fetchFaculty();


    },[data,loading])


  return {Faculty,loading,router,facultyInfo}
}

export default useFaculty;
