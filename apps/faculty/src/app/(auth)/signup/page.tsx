'use client'
import { REGISTER_FACULTY } from '@/graphql/Faculty/Mutation'
import { useMutation } from '@apollo/client'
import { commonUi } from '@repo/ui/index'
import Link from 'next/link'
import React, { useState } from 'react'
import {toast} from 'react-hot-toast'

interface FacultyResterProps{
  name: string;
  sirname: string;
  vision: string;
  exp: string;
  password: string;
  email: string;
}
const page = () => {
  const [Hidepass,setPass] = useState('password')
  const [FacultyRegisterData,setFacultyRegisterData] = useState<FacultyResterProps>({
    name:"",
    sirname:"",
    vision:"",
    exp:"",
    email:"",
    password:"",
  })
  
  const [RegisterFaculty,{data,loading ,error}] = useMutation(REGISTER_FACULTY)

  async function facultyRegisterHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try{
        await RegisterFaculty({variables:{input:FacultyRegisterData}})


        setFacultyRegisterData({name:"",password:"",email:"",vision:"",exp:"",sirname:""})
        return window.location.href='/';

         

    }catch(err:any){
      try{
        if(error){
        
          const d = JSON.parse(error.message)
          for(let key of d){
           return toast.error(key.message)

          }
          }
      }catch(err:any){ 
        
      toast.error(err.message)

      }
   
    }
  }

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const {name,value} = event.target

        setFacultyRegisterData((prev)=> ({
            ...prev,
            [name]: value
        }))
  }

  return (
    <div>
     {loading ? <>Loading...</> : ( 
     <commonUi.AuthCard
      title='Faculty Registration'
      children={(
        <form className='flex flex-col' onSubmit={facultyRegisterHandler}>
        <span className='flex w-full  justify-evenly gap-2'>
          <commonUi.InputField
            label="Name"
            id="name"
            type="text"
            name="name"
            required={true}
            autocomplete="off"
            onChange={changeHandler}
            value={FacultyRegisterData.name}
          />
          <commonUi.InputField
            label="Sirname"
            id="sirname"
            type="text"
            name="sirname"
            required={true}
            autocomplete="off"
            value={FacultyRegisterData.sirname}
            onChange={changeHandler}
          />
          </span>
          <span className='flex w-full relative justify-evenly gap-2'> 
          
            <commonUi.InputField
            Class=''
            label="Experience"
            id="exp"
            placeholder='[0] Year of experience'
            type="tel"
            name="exp"
            pattern="[0-9]{1}"
            maxLength={2}
            required={true}
            autocomplete="off"
            onChange={changeHandler}
            value={FacultyRegisterData.exp}
          />

          <commonUi.InputField
            label="Vision"
            id="vison"
            type="text"
            name="vision"
            required={true}
            autocomplete="off"
            value={FacultyRegisterData.vision}
            onChange={changeHandler}
          />
          </span>

          <span className='flex w-full  justify-evenly gap-2'>
          <commonUi.InputField
            label="email"
            id="email"
            type="email"
            name="email"
            required={true}
            autocomplete="off"
            onChange={changeHandler}
            value={FacultyRegisterData.email}
          />
          <commonUi.InputField
            label="password"
            id="password"
            type={Hidepass}
            name="password"
            required={true}
            autocomplete="off"
            value={FacultyRegisterData.password}
            onChange={changeHandler}
            btnNode={<commonUi.PassShowHide hideShow={setPass}/>}
          />
          </span>

          
         <span className='flex flex-col'>
         <commonUi.Button
          label='Register'
          type='submit'
          />
          <button className='box-border p-2 hover:scale-105'><Link href={"/login"}>Already Have Account..!</Link></button>
         </span>


        </form>
      )}
     
     
     
     />)}
        
    </div>
  )
}

export default page
