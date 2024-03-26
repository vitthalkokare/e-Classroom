'use client'
import React, { useState } from 'react'
import { gql, useMutation, useQuery} from '@apollo/client';
import InputField from '@/Components/ui/InputField';
import { CREATE_USER } from '@/graphql/user/mutation';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';




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
        return window.location.href = '/login';
  }catch(err:any){
    return toast.error(err.message)

  }
  }

  return (
    <>
    {loading ? ( <ClipLoader color="#000000" loading={true} size={100} />
):(<>
      
      <div className='flex  w-[80%] flex-col justify-evenly items-center box-border p-4 bg-white  m-auto rounded-xl'>
     <div className=''>
      <form action="" className='flex flex-col items-center' onSubmit={LoginHandler}>
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

 
            <button className='box-border px-4 py-1 rounded-lg  bg-blue-500 my-2' type='submit'>SignUp</button>

      </form>
     </div>
     <div>

     </div>
     <button className='box-border p-2' onClick={()=>{
      props.onClick()
      }}>
        <h1>Already Have Account?</h1>
      </button>
      
    </div>
    
    
    </>)}
    </>
  )
  

    


   
  
}

export default SignupPage


