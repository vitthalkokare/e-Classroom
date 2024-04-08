import { commonUi } from '@repo/ui/index';
import React, { useState } from 'react'


export interface LoginHandlerPros{
    children: React.ReactNode
    btn:{label:string,onclick:()=>void}[]
}


const Loginhandler = ({children,btn}:LoginHandlerPros) => {
    const [active,setActive] = useState(0);
  return (
    <>
    <commonUi.AuthCard

        title={"Org Login"}
        children={(<>
        <h1>good</h1>
        
        </>)}
    
    />
    </>
  )
}

export default Loginhandler
