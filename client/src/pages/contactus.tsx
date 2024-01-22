import React from 'react'
import '../styles/globals.css'

const Contac = () => {
  return (
    <div className='sm:w-[90%]  md:h-full box-border p-2 w-[80%]  rounded-3xl shadow-2xl relative mx-auto items-center justify-center   flex flex-col'>
       
       <div className='w-full flex relative box-border p-4 justify-around items-center sm:flex-col bg-white rounded-3xl'>

            <div>
                <h1>Let's Talk</h1>
                <p>
                    To request a quote or want to meet up fo Discussion,<br />
                    contact us directly or fill outthe form and we will 
                    get back to your promptly.
                </p>
                <form action="">
                    <span className='flex flex-col'>
                    <label htmlFor="Name">Your Name</label>
                    <input type="text" required placeholder='Name' className='rounded-2xl box-border p-2 outline-none border-none drop-shadow-2xl'/>
                    </span>
                    <span className='flex flex-col'>
                    <label htmlFor="Email">Your Email</label>
                    <input type="Email" required={true} placeholder='Email' className='rounded-2xl box-border p-2 outline-none border-none drop-shadow-2xl'/>
                    </span>
                    <textarea name="" id="" placeholder='Type something if you want..' className='w-full my-2 min-h-[100px] rounded-2xl outline-none  p-2 drop-shadow-xl resize-none box-border'></textarea>
                    <button type='submit' className='bg-sky-400 box-border p-2 rounded-full text-white'>Send Message</button>
                </form>
            </div>
            <div>
               <div>
                imae
               </div>
               <div className='flex flex-col'>
                <div className=' flex flex-col'>
                    <span>Adress:xyz Road near xyz city india</span>
                    <span>Opening hrs</span>
                </div>
                <div className='flex flex-col box-border m-1'>
                    <span>Email:etutor@example.com</span>
                    <span>Phone:+0000000000</span>
                </div>

               
               </div>
               <div>
                social
               </div>
            </div>

       </div>
    </div>
  )
}

export default Contac;