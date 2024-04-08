import React from 'react'


export interface SelectOptProps{
    sllebel:string
    slname:string
    slvalue:string
    onChange:() => React.ChangeEvent<HTMLSelectElement>
    children?:React.ReactNode
    optlebel:string
    optvalue:string
}
const SelectOption = ({sllebel,slname,slvalue,onChange,children,optlebel,optvalue}:SelectOptProps) => {
  return (
    <>
        <span className='box-border relative border-2 border-green-500'>
          <select name={slname} onChange={onChange} value={slvalue} className='w-full box-border p-4 h-full'>
            {sllebel}
            <option value={optvalue} className='read-only:true'>{optlebel}</option>
            {children}
          </select>
        </span>
      
    </>
  )
}

export default SelectOption
