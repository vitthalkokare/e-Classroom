'use client'
import React, { useEffect, useState } from 'react'
import { commonUi } from '@repo/ui/index'
import { useMutation } from '@apollo/client'
import { ADMIN_LOGIN } from '@/graphql/Admin/Mutations/input'
import Auth from '@/app/(main)/Admin/util/Auth'

interface LoginProps{
    email: string
    password: string
    secretKey: string
}

const LoginPage = () => {
    const [AdminLoginData,setAdminLoginData] = useState<LoginProps>({email:"",password:"",secretKey:""})

    const [AdminLogin] = useMutation(ADMIN_LOGIN,{
        refetchQueries:['authAdmin']
    })
    const {Admin,router} = Auth();

    useEffect(()=>{
        if(Admin === true){
            router.push('/Admin')

        }

    },[Admin]) 
   
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
        
        const {name,value} = event.target

        setAdminLoginData((prev)=> ({
            ...prev,
            [name]: value
        }))


    }
    async function LoginHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        try{
            await AdminLogin({variables:{input:AdminLoginData}})

            return window.location.href='/Admin';

        }catch(e){}
    }


  return (
    <main>
       <div>
        <form  onSubmit={LoginHandler}>
        
          <commonUi.Common.InputField
            label="email"
            id="email"
            type="email"
            name="email"
            required={true}
            autocomplete="off"
            onChange={changeHandler}
            value={AdminLoginData.email}
          />
          <commonUi.Common.InputField
            label="password"
            id="password"
            type="password"
            name="password"
            required={true}
            autocomplete="off"
            value={AdminLoginData.password}
            onChange={changeHandler}
          />
          <span>
          <commonUi.Common.InputField
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


          <button className="text-2xl bg-blue-500 box-border p-2 m-2 rounded-xl" type="submit">Login</button>
        </form>
      </div>
      
    </main>
  )
}

export default LoginPage
