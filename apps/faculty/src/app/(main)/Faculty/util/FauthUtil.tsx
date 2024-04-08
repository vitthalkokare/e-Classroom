'use client'
import {useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AUTH_FACULTY } from '@/graphql/Faculty/Queris'

const FauthUtil = () => {
    const [Faculty,setFaculty] = useState<boolean | null>(null)
    const {data,loading,error} = useQuery(AUTH_FACULTY)
        const router = useRouter()


    useEffect(()=>{
        if(data && data.authFaculty !== null){
            
            setFaculty(true)
            router.push('/Faculty')
        }else{
            setFaculty(false)
            router.push('/login')
        }


    },[data,loading])

  return {Faculty,loading,router}
}

export default FauthUtil;
