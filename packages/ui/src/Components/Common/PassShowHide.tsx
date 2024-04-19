'use client'
import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const PassShowHide = (props:any) => {
    const [Hide,setShow] = useState(false);

    const passwordHandler = ()=>{
        props.hideShow((pre:string)=> pre === 'password' ? 'text' : 'password');
        setShow((pre)=> !pre);
    }
  return (
    <span onClick={passwordHandler} className=''>

            {Hide ? (<FaRegEyeSlash />):(<FaRegEye />)}
      
    </span>
  )
}

export default PassShowHide
