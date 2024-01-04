import Intro from '@/Components/LandingPage/Indroduction/Intro';
import Standards from '@/Components/LandingPage/Standards/Standards';
import React from 'react'


const page = () => {
  return (
    <div className='sm:w-[400px] w-[100%] '>
     
      <header className='box-border px-2 pb-2'>
        {/* Intro */}
        <Intro/>

        {/* End Intro */}
      </header>
      {/* Services Sections */}
      <section className=' box-border   p-2'>

         {/* Classes Start */}

        <Standards Item={[]}/>
         

        {/* Classes End */}

        {/* Teaturs section */}


        {/* Teatures Section End */}

       

      </section>

      {/* Services SEction End */}

      {/* Stats SEctions */}
      <section>
       
      </section>
      {/* Stats SEction End */}

      {/* Abou SEctions */}
      <section>
      </section>



      {/* Abou SEction End */}

      {/* Footer Sections */}
      <section>
        Footer SectionsEnd
        good
      </section>
      {/* Footer SEction End */}


      
    </div>
  ) 
}

export default page;
