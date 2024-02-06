
import React from 'react'

interface hh{
  apname: string
  children:React.ReactNode;
  className: string
}

const Fuck:React.FC<hh> = ({children,className,apname}) => {
  return (
    <button className={`box-border p-4 bg-blue-700 `}>
      {children}
      <h1 className='bg-red-600'>{apname}</h1>
      
    </button>
  )
}

export default Fuck
