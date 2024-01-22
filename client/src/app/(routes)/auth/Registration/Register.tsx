import React, { useState } from 'react'
import Validate from './Validate'
import { FaAnglesLeft } from 'react-icons/fa6';


const Register = () => {
  const [valEmail,setvalEmail] = useState('hidden')
  return (
    <div className='w-full min-h-[80vh] sm:min-h-[400px] relative flex justify-center  rounded-xl sm:flex-col z-50 h-full box-border   bg-white text-black'>
        <div className='flex flex-col box-border p-4'>
          <h1>Log in or sign up in second</h1>
          <p>Use Yuor Email or Phone to Continue with E-classroom</p>
         <span className='box-border rounded-lg my-2 bg-blue-200 p-2 w-full flex justify-center items-center'><button>Continue with Google</button></span>
         <span className='box-border rounded-lg bg-blue-200 p-2 w-full flex justify-center items-center'><button onClick={(e)=>{setvalEmail('flex')}}>Continue with Email / Phone</button></span>


        </div>
        <div className='md:hidden sm:hidden'>
          
        </div>
        <div className={`absolute flex flex-col w-full ${valEmail} bg-white p-2 rounded-2xl text-black  top-0  box-border h-full`}>
          <button className='box-border' onClick={(e)=>{setvalEmail('hidden')}}><FaAnglesLeft/> Continue with Email.</button>
          <Validate/>


        </div>
        

        {/* <form action="/user/signup" method='post'>
          <div className='flex w-full justify-evenly'>
           <span className='flex flex-col w-[50%] mx-1'>
            <label htmlFor="Name">Name</label>
            <input type="text" required  className='box-border p-1 rounded-xl'/>
           </span>
           <span className='flex flex-col w-[50%]'>
            <label htmlFor="Sirname">Sirname</label>
            <input type="text" required  className='box-border p-1 rounded-xl'/>
           </span>
          </div>
          <span className='flex flex-col'>
            <label htmlFor="Email">Email</label>
            <input type="text" required  className='box-border p-1 rounded-xl'/>
          </span>
          <button type='submit'>Submit</button>
        </form> */}
      
    </div>
  )
}

export default Register
