import { RootState, commonUi, setCard } from '@repo/ui/index'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from '../(auth)/login/page';


const UserValidate = () => {
  const [valEmail,setvalEmail]  = useState(false)
  const dispatch = useDispatch();
  const isuser = useSelector((state: RootState) => state.AuthCard.isUser);

  
  return (
    <div className=' fixed top-5 w-[100%] z-50'>
     {isuser ? ( 
     <commonUi.AuthCard
      title=''
      children={(
        <main className='relative'>
          <span>
          <h1>Log in or sign up in second</h1>
          <p>Use Yuor Email or Phone to Continue with E-classroom</p>

          </span>
          <div>
          <a
              href="/api/auth/login"
              className="box-border rounded-lg my-2 bg-blue-200 p-2 w-full flex justify-center items-center"
            >
              <button>Continue with Google</button>
            </a>

            <span className="box-border rounded-lg bg-blue-200 p-2 w-full flex justify-center items-center">
              <button onClick={() => {setvalEmail(true)}}>Continue with Email / Phone</button>
              
            </span>
          </div>

        </main>
      )}

      refbtn={{lebel:"",set:valEmail,children:(<LoginPage valemail={valEmail} setVal={setvalEmail}/>),onclick:()=>{}}}
      
      />
      ):(<></>)}
      
    </div>
  )
}

export default UserValidate
