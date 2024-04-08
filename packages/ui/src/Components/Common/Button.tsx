import React from 'react'



export interface BtnProps{
    onclick?:()=>void;
    label:string;
    btnCss?:string;
    children?:React.ReactNode
    type?:string;
}


const Button = ({onclick,label,btnCss,children}:BtnProps) => {
  return (
    <button onClick={onclick} className={`${btnCss} box-border m-2 p-2 bg-black min-w-[100px] text-white text-center font-medium`}>
        {label}
        <span>{children}</span>
      
    </button>
  )
}

export default Button
