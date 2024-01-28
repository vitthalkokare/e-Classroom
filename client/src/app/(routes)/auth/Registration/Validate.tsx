'use client'
import {useEffect, useState} from 'react'
import { FaAlignLeft } from 'react-icons/fa'
import { redirect } from 'next/navigation';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';


interface userDatat{
  id:number;
  email:string; 

}

const Validate:NextPage = () => {

  const [UserEmail,setUserEmail] = useState<any>()
  const [inputData,setInputData] = useState<any[]>([])

  const userItem = localStorage.getItem('user');
  let UserArray: string[] = userItem ? JSON.parse(userItem) : [];

  function getUSer() {
    let ss:string[] = [UserEmail]
   let  s = localStorage.getItem('user')

        if(s?.includes(UserEmail)){

          

        }
        else{

             UserArray.push(...ss)
             localStorage.setItem('user',JSON.stringify(UserArray))
              setUserEmail('')

        }




    
  }




  function inputHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setUserEmail(event.target.value)
  }

  return (
    <div className=' h-full w-full relative items-center box-border bg-white p-2 flex-col flex'>
        <span>
            <h1>We'll Check if you have an account and help Create on if you don't.</h1>
        </span>
      <form  action={'/Classroom'} className='w-full'>
        <span className='flex w-full relative flex-col m-2 box-border p2'>
            <label htmlFor="Email">Email or Phone</label>
            <input type="email" name='' value={UserEmail} onChange={inputHandler}   required  className='box-border p-3 outline-none active:border border w-full shadow-2xl rounded-xl'/>
        </span>
        <button onClick={getUSer} className='bg-green-200 box-border p-3 rounded-xl'>Continue</button>

      </form>

    </div>
  )
}

export default Validate
