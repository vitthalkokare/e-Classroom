import React from 'react'
import { FaBackward } from 'react-icons/fa6'

const EmailVaidate = (props:any) => {
  return (
    <div className='w-full h-full bg-white rounded-3xl flex flex-col  box-border p-4 items-center absolute left-0 top-0'>
        <h1>Validate Emaile</h1>
        <div className='w-full box-border relative p-2 flex flex-col'>
           <form action="http://localhost:8000/">
           <label htmlFor="">Email/Phone</label>
            <input type="text" required placeholder='xyz@gmail.com' className='box-border p-3 my-2 drop-shadow-xl border rounded-2xl'/>
            <button type='submit'>Continue</button>
           </form>
        </div>


        <button onClick={props.onClick} className='box-border absolute text-2xl px-2 py-1  left-0 top-0  rounded-full'><FaBackward/></button>
      
      
    </div>
  )
}

export default EmailVaidate
