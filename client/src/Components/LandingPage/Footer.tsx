import React from 'react'


const Footer = () => {

  return (
    <div className='w-full bg-black text-white box-border p-4 flex flex-col items-center' style={{borderRadius:'44% 44% 10% 10% / 45% 45% 0% 0% '}}>
        
     <div>l
        logo info
     </div>
     <section className='flex box-border  justify-around flex-wrap'>
     <div className='mx-2 box-border flex flex-col p-2'>
        <h1>STATE BOARDS</h1>
            <a href='#'>Maharashtra</a>
            <a href='#'>Gujrat</a>
            <a href='#'>Uttar Pradesh</a>
            <a href='#'>Rajasthan</a>
            <a href='#'>Telangana</a>

      </div>
      <div className='mx-2 box-border flex flex-col p-2'>
        <h1>Cources</h1>
            <a href='#'>CBSE</a>
            <a href='#'>ICSE</a>
            <a href='#'>CAT</a>
            <a href='#'>IAS</a>
            <a href='#'>JEE</a>

      </div>
      <div className='mx-2 box-border flex flex-col p-2'>
        <h1>CLASSES</h1>
            <a href='#'>1st - 3rd</a>
            <a href='#'>4th - 5th</a>
            <a href='#'>6th - 10th</a>
            <a href='#'>11th - 12th</a>

      </div>
      <div className='mx-2 box-border flex flex-col p-2'>
        <h1>E-Tutor</h1>
            <a href='#'>About Us</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Support</a>
            <a href='#'>Terms of Services</a>

      </div>
      <div className='mx-2 box-border flex flex-col p-2'>
        <h1>Resources</h1>
            <a href='#'>E-tutorApp</a>
            <a href='#'>Exam Papers</a>
            <a href='#'>FAQ</a>
            <a href='#'>24/7</a>

      </div>

      
     </section>
     @2024, E-tutor. All right reserved
    </div>
  )
}

export default Footer
