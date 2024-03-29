'use client'
import { AUTH_ADMIN } from '@/graphql/Admin/Queries/input'
import {useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const Auth = () => {
    const [Admin,setAdmin] = useState<boolean | null>(null)
    const {data,loading,error} = useQuery(AUTH_ADMIN)
        const router = useRouter()


    useEffect(()=>{
        if(data && data.authAdmin !== null){
            
            setAdmin(true)
            router.push('/Admin')
        }else{
            setAdmin(false)
            router.push('/login')
        }


    },[data,loading])

  return {Admin,loading,router}
}

export default Auth
