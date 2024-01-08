import React from 'react'

const MobileNav:React.FC = () => {
  return (
    <div className='sm:w-full box-border transition-all ease-linear p-1 flex justify-around bg-green-800 text-white'>
        <span className='mx-1'>Home</span>
        <span className='mx-1'>Live</span>
        <span className='mx-1'>Tasks</span>
        <span className='mx-1'>Notifi</span>
        <span className='mx-1'>Profile</span>

      
    </div>
  )
}

export default MobileNav
