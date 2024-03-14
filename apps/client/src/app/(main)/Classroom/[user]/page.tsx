import React from 'react'
import { getSession } from '@auth0/nextjs-auth0';



const page = async() => {
  // @ts-ignore
  const { user } = await getSession();


  return (
    <div>
      <h1>YOurser not found</h1>
      <button onClick={(()=>{console.log(user)})}>click me</button>

      
    </div>
  )
}

export default page
