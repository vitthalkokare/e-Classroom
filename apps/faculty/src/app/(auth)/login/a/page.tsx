'use client'
import React, { useEffect, useState } from 'react'
import { commonUi } from '@repo/ui/index'
import { useMutation } from '@apollo/client'
import { ADMIN_LOGIN } from '@/graphql/Admin/Mutations/input'
import Auth from '@/app/(main)/Admin/util/Auth'

import {toast} from 'react-hot-toast'
import { LOGIN_FACULTY } from '@/graphql/Faculty/Mutation'

export interface LoginProps{
    email: string
    password: string
    secretKey: string
}

const OrgLogin = (props:any) => {
  const [Hidepass,setPass] = useState('password')

    const [AdminLoginData,setAdminLoginData] = useState<LoginProps>({email:"",password:"",secretKey:""})

    const [AdminLogin,{data,loading,error}] = useMutation(ADMIN_LOGIN,{
        refetchQueries:['authAdmin']
    })
   

    const {Admin,router} = Auth();

    useEffect(()=>{
        if(Admin === true){
            router.push('/Admin')
    
        }
        
    
    },[Admin]); 
   
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        
        const {name,value} = event.target

        setAdminLoginData((prev)=> ({
            ...prev,
            [name]: value
        }))


    }
  
    async function ALoginHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        try{
            await AdminLogin({variables:{input:AdminLoginData}});

            
            toast.success("Login Successfully..")

            return window.location.href="/Admin"

        }catch(e:any){
         

              
            toast.error(e.message)

            
         
            
          
          
        }
    }


  return (
    <>
    <commonUi.AuthCard
      title='Admin Login'
      secCss='sm:w-[100%] sm:bg-red-300'
      children={(
        <form  onSubmit={ALoginHandler}>
     <span className='flex sm:flex-col gap-2'>
      
     <commonUi.InputField
          label="email"
          id="email"
          type="email"
          name="email"
          required={true}
          autocomplete="off"
          onChange={changeHandler}
          value={AdminLoginData.email}
        />
        <commonUi.InputField
          label="password"
          id="password"
          type={Hidepass}
          name="password"
          required={true}
          autocomplete="off"
          value={AdminLoginData.password}
          onChange={changeHandler}
          btnNode={<commonUi.PassShowHide hideShow={setPass}/>}

        />
     </span>
        <span>
        <commonUi.InputField
          label="SecretKey"
          id="secretkey"
          type="text"
          name="secretKey"
          required={true}
          autocomplete="off"
          value={AdminLoginData.secretKey}
          onChange={changeHandler}
        />
        </span>
 
        <span className='flex gap-2 flex-col'>
        <commonUi.Button type="submit" label="Login" />
          <span></span>
        </span>

      </form>
      )}
    
    
    />
 </>
   
  )
   
  
}

export default OrgLogin;