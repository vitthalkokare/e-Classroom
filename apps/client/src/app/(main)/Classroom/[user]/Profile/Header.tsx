'use client'
import React from 'react'
import {useUser} from '@auth0/nextjs-auth0/client'
import { useQuery } from '@apollo/client';
import { AUTH_USER } from '@/graphql/user/queries';


const Header = () => {
const {user,error,isLoading} = useUser();

  return (
    <section className='w-full min-h-[300px] bg-white'>

      <h1>this is header page</h1>
      
      {user ? (<>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
      </>) : (<><button>Login</button></>)}
    </section>
  )
}

export default Header
