'use client'
import {useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AUTH_FACULTY } from '@/graphql/Faculty/Queris'
import { fcaultySlice } from '@repo/ui/index'
import {useDispatch} from 'react-redux'

const useFaculty = () => {
    const [Faculty,setFaculty] = useState<boolean | null>(null)
    const {data,loading,error,refetch} = useQuery(AUTH_FACULTY)
        const router = useRouter()
        const dispatch = useDispatch();

    useEffect(()=>{
        if(data && data.authFaculty !== null){
            
            setFaculty(true)
            router.push('/Faculty')
            const dd = data.authFaculty?.subjectData
            try{
           
           
                dispatch(fcaultySlice.facultyData(dd))
        
        
              
                
              }catch(err){
                console.log(err)
              }
        }else{
            setFaculty(false)
            router.push('/login')
        }


    },[data,loading])



  return {Faculty,loading,router,data}
}

export default useFaculty;
