'use client'
import React, { useState } from 'react'
import { Country } from '@/app/types'
import DateSelector from '@/Components/utils/Dateselector';


const page = () => {
  const [con,setcon] = useState<Country>();

  const c: Country[] = [
    {code:91, country: 'US',icon:'&#127470'},
    {code:88, country: 'IN',icon:'images'},
    {code:21, country: 'AF',icon:'images'},


  ]




  return (
    <div className='bg-green-400 h-screen flex  justify-center'>
      <div className='bg-red-600 h-fit box-border p-7 '>
        <div><h1>SignUp</h1></div>
        <form action="/newuser" method='post'>
          
          <div className='mt-5 flex gap-4 '>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Sirname' />
          </div>
          <div className=' box-border p-2 rounded-2xl flex flex-col w-full '>
            {/* <select name="country-code" onChange={(e)=> console.log(c)} >
              {
                c.map((item,index)=>(
                   <option value={item.code} key={index}>
                      {item.code}

                    </option>
                ))
              }
            </select>
            <input className='appearance-none  outline-none' inputMode='numeric' type="tel" maxLength={12} pattern="[[0-9]{3}-[0-9]{3}-[0-9]{4}]" required  /> */}
              <input className='' type="email" placeholder='Email' required/>
              <input className='mt-2' type="password" required placeholder='Password' />
          </div>
           

            <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page
