import React, { useState } from 'react'
import Image from 'next/image'
import techericon from "../../../../public/pictures/Landingpage/teachericon.jpg";
import subData from "./subData";



interface Subobj {
    Teachers: {
      name: string;
      experience: string;
      vision: string;
      photo: string;
      social: string;
    }[];
  }

const Faculty:React.FC = () => {
    const [sub, setSub] = useState<Subobj>({
        
        Teachers: [
          {name:'akash sharma',experience:'4yr',vision:'',photo:'',social:''},
          {name:'akash sharma',experience:'4yr',vision:'',photo:'',social:''},
          {name:'akash sharma',experience:'4yr',vision:'',photo:'',social:''},
          {name:'akash sharma',experience:'4yr',vision:'',photo:'',social:''},
        ],
      });


      function changeHandler(event: React.ChangeEvent<HTMLSelectElement>): void {
        const dd = event.target.value;
        const cdata = subData(dd);
        setSub({ Teachers: cdata.c2 });
      }

  return (
    <>
     <section className="scr box-border p-4 flex w-[510px] sm:w-full md:w-full  rounded-2xl  overflow-x-scroll">
          {sub.Teachers.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 drop-shadow-xl sm:w-full md:w-full w-[470px] mx-2 justify-center items-center overflow-hidden shrink-0   relative  sm:mt-10 sm:h-[180px]  bg-white   flex    box-border  rounded-3xl sm:flex-row "
            >
              <Image
                src={techericon}
                alt="Picture of the author"
                className="w-[140px] h-[140px] "
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }}
              />

              <div className="relative justify-between flex flex-col">
                <span className="">
                  <h1>name:{item.name}</h1>
                  <h3>Education: {item.experience}</h3>
                </span>
                <span className="">
                  <strong>Vision:</strong>
                  <h2>
                    some thing went wrong do you really agree with thisquestion
                    {item.vision}
                  </h2>
                </span>
              </div>
            </div>
          ))}
        </section>
      
    </>
  )
}

export default Faculty
