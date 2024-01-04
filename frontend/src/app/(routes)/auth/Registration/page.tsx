import { NextPage } from 'next'
import React from 'react'

const Registration:NextPage = () => {
  return (

    <div className='w-[90vw] rounded-xl sm:p-1 p-20 mx-auto  sm:w-[400px] h-screen bg-gray-600 box-border '>
      <section>Registration</section>
      <section className='box-border p-2'>
        <div className='flex  sm:flex-col  justify-evenly'>
        <div className='bg-white flex box-border p-2 rounded-xl'>
          <label htmlFor="Country">Country:</label>
          <select className='px-2 w-full bg-white text-center  outline-none border-0' name="" id="">
            <option value="">India</option>
            <option value="">India</option>

          </select>
        </div>
        <div className='flex justify-around my-2'>
        <div className='bg-white flex box-border mx-3 p-2 rounded-xl'>
          <label htmlFor="Country">State:</label>
          <select className='px-2 w-full bg-white text-center  outline-none border-0' name="" id="">
            <option value="">Maharashtra</option>
            <option value="">India</option>

          </select>
        </div>
        <div className='bg-white flex box-border p-2 rounded-xl'>
          <label htmlFor="Country">City:</label>
          <select className='px-2 w-full bg-white text-center  outline-none border-0' name="" id="">
            <option value="">Malegaon</option>
            <option value="">India</option>

          </select>
        </div>
        </div>

       

       

        </div>
        


      </section>

    </div>
  //   <div className='w-[100vw]   sm:w-[400px] mx-auto h-screen flex flex-col  items-center box-border shadow-2xl rounded-[30px] border-3 '>
  //     <div className='flex flex-col items-center h-full box-border'>
  //     <div className='p-4 m-4'>
  //       <h1>Registration</h1>
  //       <hr />
  //       </div>
  //      <section className='  '>
  // <div className='flex flex-col justify-around bg-red-700 h-full  '>
  //   {/* Country state city */}

  //   <div className='flex justify-around box-border p-5'>
  //        <div className=' bg-white rounded-xl box-border px-4 mx-2 flex items-center '>
  //           <label htmlFor="name">Country:</label>
  //           <select className='box-border px-4' name="" id="">
  //             <option className='box-border bg-red-400' value="">India</option>
  //           </select>
  //         </div>
  //         <div className=' bg-white rounded-xl box-border px-4 mx-2 flex items-center '>
  //           <label htmlFor="name">Country:</label>
  //           <select className='box-border px-4' name="" id="">
  //             <option className='box-border bg-red-400' value="">India</option>
  //           </select>
  //         </div>
  //         <div className=' bg-white rounded-xl box-border px-4 mx-2 flex items-center '>
  //           <label htmlFor="name">Country:</label>
  //           <select className='box-border px-4' name="" id="">
  //             <option className='box-border bg-red-400' value="">India</option>
  //           </select>
  //         </div>
          
  //   </div>


  //   {/* Country State City end */}
  //   {/* Standard */}
  //   <div className='flex justify-around  box-border p-5'>
  //    <div>
  //    <label htmlFor="Standard">Standard</label>
  //     <select name="" id="">
  //       <option value="gendu">Gendu</option>
  //       <option value="gendu">mednu</option>
  //       <option value="gendu">shendu</option>
  //       <option value="gendu">yendu</option>

  //     </select>

  //    </div>
  //     <div>
  //       <label htmlFor="Subjects">Subjects</label>
  //       <select name="" id="">
  //         <option value="">Loda</option>
  //       </select>
  //     </div>
  //   </div>



  //   {/* Personal Info */}
  //   {/* <div className='flex'>
  //        <div className=''>
  //           <label htmlFor="name">Name</label>
  //           <input type="text" />
  //         </div>
  //         <div>
  //           <label htmlFor="name">Name</label>
  //           <input type="text" />
  //         </div>
  //         <div>
  //           <label htmlFor="name">Name</label>
  //           <input type="text" />
  //         </div>
          
  //   </div> */}




          
  //       </div>
      
  //      </section>
  //     </div>
  //   </div>
  )
}

export default Registration;
