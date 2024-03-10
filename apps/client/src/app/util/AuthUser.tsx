'use client'
import LoginPage from '@/app/api/login/page'
import { AUTH_USER } from '@/graphql/user/queries'
import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import React, { ReactNode, useEffect, useState } from 'react'

export default function AuthUser({children,}:{children:NextPage}):Promise<ReactNode>{
  const [User,setUser] = useState<Boolean>()

  const {data,loading,error} = useQuery(AUTH_USER)

  useEffect(()=>{
    
  if(data && data.authUser.id !== null){
    return setUser(true)
  }
  setUser(false);

  },[data])



  return Promise.resolve(
    <>
    {User ? ( 
        {children}
    ):(<>
        {loading ? <h1>loading....</h1> : <LoginPage/>}
        
     </>
      
    )}
    </>
  )
}

