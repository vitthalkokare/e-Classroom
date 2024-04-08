import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { FaBell, FaSun } from 'react-icons/fa6'


const RightNav = ({children}:{children:React.ReactNode}) => {
    const [Children,setChildren] = useState<React.ReactNode | null>()
   
  return (
    <main className='h-full relative box-border p-2 flex flex-col'>
        <div className='flex flex-col'>
            <span><FaBell/></span>
            <span><FaMoon/><FaSun/></span>
        </div>
        <div className='box-border p-2'>
            {Children}
        </div>
      
    </main>
  )
}

export default RightNav
