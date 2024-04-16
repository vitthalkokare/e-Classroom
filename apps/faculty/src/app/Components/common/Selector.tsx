import React from 'react'


export interface SelectorProps{
    Item:{
      label:string,
      arrItem:string[]
      onchange?:(event:React.ChangeEvent<HTMLSelectElement>)=> void
      name?:string
    }[]

   

}

const Selector = ({Item}:SelectorProps) => {
  return (
        <>

        {Item.map((item,inx:number)=>(
            
        <span key={inx} className='box-border border-2 border-green-500'>
          <select name={item.name} onChange={item.onchange} className='w-full box-border p-4 h-full'>
            <option >{item.label}</option>
            {item.arrItem.map((val:any,index:number)=>(
              <option key={index} value={val} >{val}</option>
            ))}
          </select>
        </span>

            
            ))}
        

        </>
      
  )
}

export default Selector
