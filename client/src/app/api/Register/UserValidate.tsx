import React, { useState } from 'react'
import { setCard } from '@/lib/Features/Auth/Slices/AuthCardSlice';
import {useDispatch,useSelector} from 'react-redux'
import { RootState } from "@/lib/store";
import EmailVaidate from './EmailVaidate';

const UserValidate = () => {
  const [valEmail,setvalEmail] = useState(false)
  const dispatch = useDispatch();


  const isuser = useSelector((state:RootState)=>state.AuthCard.isUser)




  const LoginHandler = () => {
    setvalEmail(false)
  }
    function Handleclosebtn() {
        dispatch(setCard(false))
    }

  return (
    <>
    
      {
        isuser ?   (<div className='w-[60%] sm:w-[90%] sm:left-[5%]  min-h-[80vh] sm:min-h-[400px] fixed  top-5  left-[20%] flex justify-center  rounded-xl sm:flex-col z-50 box-border   bg-white text-black'>
        <div className='flex flex-col box-border p-4'>
          <h1>Log in or sign up in second</h1>
          <p>Use Yuor Email or Phone to Continue with E-classroom</p>
         <a href='/api/auth/login' className='box-border rounded-lg my-2 bg-blue-200 p-2 w-full flex justify-center items-center'><button>Continue with Google</button></a>
         <span className='box-border rounded-lg bg-blue-200 p-2 w-full flex justify-center items-center'><button onClick={(e)=>{setvalEmail(true)}}>Continue with Email / Phone</button></span>


        </div>

        {valEmail && (<EmailVaidate onClick={()=> setvalEmail(false)}/>)}

        <button onClick={Handleclosebtn} className='absolute right-0 top-0 box-border text-white bg-black p-2 rounded-full py-1 '>X</button>
      
        

        
    </div>)
    :(<></>)
    
      }
    </>
  )
}

export default UserValidate
