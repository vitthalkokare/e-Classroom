'use client'
import React, { useState } from 'react'
import { gql, useMutation, useQuery} from '@apollo/client';
import InputField from '@/Components/ui/InputField';
import { CREATE_USER } from '@/graphql/user/mutation';
import toast from 'react-hot-toast';




const SignupPage = () => {
  const [SignupData,setLoginData] = useState({
    email:'',
    password:''
  });

  const [createUser,{loading,error}] = useMutation(CREATE_USER)

  function changeHandler(e:React.ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target;
      setLoginData((prev) => ({
        ...prev,
        [name]: value
      }))
      
    
  }
  const LoginHandler = async(e:any)=>{
    e.preventDefault();
    if(!SignupData.email && !SignupData.password) return toast.error("please enter all required fields")
		try{
       const user = await createUser({variables:{email:SignupData.email, password:SignupData.password}});
        toast.success("user created successfully")
        return window.location.href = '/api/login'
  }catch(error){
    toast.error('fuck');
  }
  }

  return (
    <div className='flex justify-evenly items-center box-border p-4 bg-white w-1/2 m-auto rounded-xl'>
     <div>
      <form action="" onSubmit={LoginHandler}>
        <InputField
          label='email'
          id='email'
          type='email'
          name='email'
          onChange={changeHandler}
          value={SignupData.email}
          
        />
        <InputField
          label='password'
          id='password'
          type='password'
          name='password'
          value={SignupData.password}
          onChange={changeHandler}

        />

 
        <button type='submit'>Login</button>
       
      </form>
     </div>
     <div>

     </div>
      
    </div>
  )
}

export default SignupPage


