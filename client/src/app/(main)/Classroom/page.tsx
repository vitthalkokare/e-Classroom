'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';


const Home = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  
  return (
    <div>
        <div className='w-full rounded-2xl box-border p-2 bg-[#013b6b] h-[20vw] sm:w-full sm:h-[300px]'>
          <div className=' inline-block bg-[#43e2f7] box-border px-5 relative -left-11 rounded-2xl'>
            <span>{date.toDateString()}</span>
            <br />
            <span>{date.toLocaleTimeString()}</span>
          </div>

        </div>

        <div>
          live
        </div>


      
    </div>
  )
}

export default Home
