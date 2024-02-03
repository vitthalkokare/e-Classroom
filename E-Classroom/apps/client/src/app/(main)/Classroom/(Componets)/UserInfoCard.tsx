
import React from 'react'

const UserCard = (props:any) => {

  const mybtn = ()=>{
    props.onClick
    console.log('good button')
  }
  return (
    <div>
     

  <form className='grid grid-cols-2 gap-4 text-2xl'>
    
      <span className='flex flex-col'>
        <label htmlFor="Name" className='after:content-["*"] after:text-red-600'>Name</label>
      <input type="text" required placeholder='Your name' className='rounded-xl border-1  outline-none box-border py-1 px-2'/>
    </span>
    <span className='flex flex-col'>
      <input type="text" required placeholder='Your Sirname' className='rounded-xl border-1  outline-none box-border py-1 px-2'/>
    </span>
    <span className='flex flex-col'>
      <input type="text" required placeholder='Phone No:' className='rounded-xl border-1  outline-none box-border py-1 px-2'/>
    </span>
    <span className='flex flex-col'>
      <input type="text" required placeholder='Your Sirname' className='rounded-xl border-1  outline-none box-border py-1 px-2'/>
    </span>
  
    <button></button>
 
</form>
<button onClick={props.onClick} className=''>Yes</button>


    </div>
  )
}

export default UserCard
