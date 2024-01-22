import React, { useState } from 'react'
import Servicecard from './Servicecard'
import Image from 'next/image';
import { FaAnglesRight,FaAnglesLeft } from 'react-icons/fa6';

interface divItemProps{
 
    rimg: string,
    limg: string,
    title: string,
    content: string
  

}

const Servicses:React.FC = () => {
  const [pItem,setpItem] = useState(0);
  const [pW,setpW] = useState(0);

  const divarr:divItemProps[] = [
    {title:'service1',limg:'/pictures/Landingpage/s1.png',rimg:'',content:'this is conternt'},
    {title:'service1',limg:'',rimg:'/pictures/Landingpage/s2.png',content:'this is conternt'},
    {title:'service1',limg:'/pictures/Landingpage/s3.png',rimg:'',content:'this is conternt'},
    {title:'service1',limg:'',rimg:'/pictures/Landingpage/s4.png',content:'this is conternt'},
    {title:'service1',limg:'/pictures/Landingpage/s5.png',rimg:'',content:'this is conternt'},
    {title:'service1',limg:'',rimg:'/pictures/Landingpage/s6.png',content:'this is conternt'},
    

  ];
  const prevbtn = ()=>{
    let count = divarr.length;
    setpItem((pIndex) => (pIndex - 1 || count - 1) % count);
    setpW(60)

  }
  const Nextbtn = ()=>{
    let count = divarr.length;
    setpItem((pIndex) => (pIndex + 1) % count);
    setpW(100)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
         <div className=" flex flex-col justify-center items-center   box-border p-4 text-center">
          <strong>
            Comprehensive learning programs <br />& classes for all students
          </strong>
          <p>
            " Become lifelong learners with India's best teachers, engaging
            video lessons and personalised learning journeys "
          </p>
        </div>
        <div className='h-[300px] sm:h-[400px] w-[90%] sm:w-full relative flex items-center justify-evenly'>
           <button onClick={prevbtn} className='box-border text-white text-3xl outline-none hover:scale-105 p-2'><FaAnglesLeft/></button>
            <div className='w-full relative  items-center h-full overflow-hidden flex scr box-border '>
              {
                divarr.map((item,index)=>(

                  <div  className={`flex shrink-0 w-full justify-center  sm:flex-col relative  items-center bg-white rounded-3xl  shadow-3xl transition-all duration-300  h-full ${pItem === index ? 'block':'hidden'}`} >
                      <Image src={item.limg}  alt='img' width={300} height={300}  className={`absolute left-0 sm:top-0 ${index %2 == 0 ? 'block' : 'hidden'}`}/>
                    <div className='absolute sm:bottom-0'>
                      {item.content}{index}
                    </div>
                    <Image src={item.rimg} alt='img' width={300} height={300}  className={`absolute right-0 sm:top-0 ${index %2 == 0 ? 'hidden' : 'block'}`}/>

                    
                    </div>

                ))
              }


            </div>
            <button onClick={Nextbtn} className='box-border text-white text-3xl outline-none border-none hover:scale-105 p-2'><FaAnglesRight/></button>
        </div>
        <Servicecard/>
      
    </div>
  )
}

export default Servicses
