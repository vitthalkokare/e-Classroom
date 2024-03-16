'use client'
import React, { useState } from 'react'
import { gql, useMutation, useQuery} from '@apollo/client';
import InputField from '@/Components/ui/InputField';
import { CREATE_USER } from '@/graphql/user/mutation';
import toast from 'react-hot-toast';




const SignupPage = (props:any) => {
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
		try{
       const user = await createUser({variables:{email:SignupData.email, password:SignupData.password}});
        toast.success("user created successfully")
        return window.location.href = '/login'
  }catch(err:any){
    return toast.error(err.message)

  }
  }

  return (
    <div className='flex w-[80%] flex-col justify-evenly items-center box-border p-4 bg-white  m-auto rounded-xl'>
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

 
        <button type='submit'>SignUp</button>
       
      </form>
     </div>
     <div>

     </div>
     <button onClick={()=>{
      props.onClick;
      window.location.href = "/login"}}>
        <h1>logIn</h1>
      </button>
      
    </div>
  )
}

export default SignupPage


