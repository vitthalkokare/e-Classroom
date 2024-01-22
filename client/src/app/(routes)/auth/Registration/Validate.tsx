import React from 'react'
import { FaAlignLeft } from 'react-icons/fa'

const Validate = () => {
  return (
    <div className=' h-full w-full relative items-center box-border bg-white p-2 flex-col flex'>
        <span>
            <h1>We'll Check if you have an account and help Create on if you don't.</h1>
        </span>
      <form action="" className='w-full'>
        <span className='flex w-full relative flex-col m-2 box-border p2'>
            <label htmlFor="Email">Email or Phone</label>
            <input type="text" required   className='box-border p-3 outline-none active:border border w-full shadow-2xl rounded-xl'/>
        </span>
        <button className='bg-green-200 box-border p-3 rounded-xl'>Continue</button>

      </form>
    </div>
  )
}

export default Validate
