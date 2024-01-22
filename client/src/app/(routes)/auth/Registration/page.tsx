'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { Country } from '@/app/types'
import {User} from '../../../../../../server/src/graphql/newusers/index'
import { useMutation } from '@apollo/client';
import { set } from 'mongoose';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import Register from './Register';


const page = () => {
  const [con,setcon] = useState<Country>();
  const [Name,setName] = useState("");
  const [Sirname,setSirname] = useState("");
  const [Password,setPassword] = useState("");
  const [Email,setEmail] = useState("");


useEffect(()=>{
  
  
},[])


 

  const handleSubmit = (event: FormEvent<HTMLFormElement>)=> {
    event.preventDefault();


  }

  return (
    <div className={`w-[80%] flex justify-center items-center h-screen m-auto bg-purple-600`}>

        <Register/>
    </div>
  )
}

export default page
