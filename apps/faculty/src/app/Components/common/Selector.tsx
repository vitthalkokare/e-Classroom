import React from 'react'


export interface SelectorProps{
    Item:{label:string,arrItem:React.ReactNode[]}[]

    children:React.ReactNode

}

const Selector = ({Item,children}:SelectorProps) => {
  return (
         <main className='w-full box-border h-full bg-purple-500 p-2 flex flex-col'>
        <section className='sticky flex justify-evenly items-center top-0 min-h-[100px] w-full bg-white'>

        {
            Item.map((val,inx)=>(

        <span key={inx} className='box-border border-2 border-green-500'>
          <select className='w-full box-border p-4 h-full'>
            <option value="" className='read-only:true'>{val.label}</option>
            {val.arrItem.map((val:any)=>(
              <option >{val}</option>
            ))}
          </select>
        </span>
        
        
            ))
        }
    </section>

    <section className='min-h-fit h-full overflow-y-scroll box-border p-2 flex flex-col'>
        {children}
    </section>



    </main>
      
  )
}

export default Selector
