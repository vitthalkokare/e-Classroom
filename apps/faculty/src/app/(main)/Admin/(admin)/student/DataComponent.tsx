import React from 'react'

export interface DataComponentProps {
  children: React.ReactNode
  Classes:{label: string,onclick:()=>void}[]
}

const DataComponent = ({children,Classes}:DataComponentProps) => {
  return (
    <div>
      <nav>
        {Classes.map((item,index)=>(
        <button onClick={()=>{}} key={index}>
          <span>{item.label}</span>
        </button>))}
      </nav>

      <main>
        {children}
      </main>
      
    </div>
  )
}

export default DataComponent
