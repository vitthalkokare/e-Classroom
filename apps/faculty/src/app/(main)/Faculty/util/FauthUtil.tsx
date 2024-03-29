'use client'
import { AUTH_ADMIN } from '@/graphql/Admin/Queries/input'
import {useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Auth = () => {
    const [Faculty,setFaculty] = useState<boolean | null>(null)
    const {data,loading,error} = useQuery(AUTH_ADMIN)
        const router = useRouter()


    useEffect(()=>{
        if(data && data.authAdmin !== null){
            
            setFaculty(true)
            router.push('/Faculty')
        }else{
            setFaculty(false)
            router.push('/login')
        }


    },[data,loading])

  return {Faculty,loading,router}
}

export default Auth
